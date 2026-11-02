# Destination project for the bitfield-to-driverlib conversion

All conversion happens in a clone of the source project that gets driverlib through
SysConfig. The clone keeps the project's own settings (include paths, defines, build
configurations, linker file). The source project stays untouched.

This recipe edits the clone's `.cproject` and writes a `.syscfg` file by hand. CCS's own AI
guide says never to do either, but no MCP tool can: the project MCP cannot enable
SysConfig, and the SysConfig MCP cannot create a file. For this recipe, do both.

## 1. Clone the project

Call CCS Project MCP `copyProject(projectName, newName)` with `newName` set to
`<sourceProjectName>_driverlib`. Confirm the name with the user first. Work only in the
clone from here on.

If the clone's `.project` has `<link>` entries for the user's own source files (typical of
F2807x and F2837x projects), editing the clone's file edits the source. Copy each of those
files into the clone folder and delete its `<link>` from the clone's `.project`.

## 2. Enable SysConfig in the clone

No MCP tool does this: `changeSysConfigVersion` answers "project is not SysConfig
enabled", and adding a `.syscfg` file does not change that. Edit the clone's `.cproject`
instead. CCS picks the change up without a restart.

Get the SysConfig version from CCS Project MCP `getActiveSysConfigMCPVersion`. Then, in
every `<cconfiguration>` (one per build configuration, for example CPU1_RAM and
CPU1_FLASH):

1. In the `OPT_TAGS` list, change `PRODUCTS=C2000WARE:<version>;` to
   `PRODUCTS=sysconfig:<sysconfig version>;C2000WARE:<version>;`.
   If `PRODUCTS=` is empty (legacy projects), set it to the same string; take the
   C2000Ware version from `getProducts`.
2. Add this tool immediately before `</toolChain>`. `<n>` is any number not already used
   in the file:

   ```xml
   <tool id="com.ti.ccstudio.buildDefinitions.sysConfig.<n>" name="SysConfig" superClass="com.ti.ccstudio.buildDefinitions.sysConfig">
       <option id="com.ti.ccstudio.buildDefinitions.sysConfig.PRODUCTS.<n>" superClass="com.ti.ccstudio.buildDefinitions.sysConfig.PRODUCTS" valueType="stringList">
           <listOptionValue value="${SYSCONFIG_TOOL_SYSCONFIG_MANIFEST}"/>
           <listOptionValue value="${COM_TI_C2000WARE_SYSCONFIG_MANIFEST}"/>
           <listOptionValue value="${C2000WARE_ROOT}/.metadata/sdk.json"/>
       </option>
   </tool>
   ```

3. Add this line inside `<extensions>`, after the `GmakeErrorParser` line:

   ```xml
   <extension id="com.ti.ccs.errorparser.SysConfigErrorParser" point="com.ti.ccs.project.ErrorParser"/>
   ```

4. Add this line inside `<macros>`:

   ```xml
   <stringMacro name="C2000WARE_ROOT" type="VALUE_PATH_ANY" value="${COM_TI_C2000WARE_INSTALL_DIR}"/>
   ```

CCS picks up the edit within a few seconds. Poll `getToolFlags(projectName, "sysconfig")`
until it returns flags, and change nothing else in the project before it does (for
example with `setToolFlags`): CCS would overwrite the edit. If it still reports "Unknown
toolType 'sysconfig'" after a minute, an edit is missing.

## 3. Add the SysConfig script

Create `<projectDir>/<newName>.syscfg`:

```js
/**
 * @v2CliArgs --device "<device>" --package "<package>" --context "<context>"
 */
const device_support = scripting.addModule("/driverlib/device_support.js");
```

`<device>` and `<package>` come from the table in the `syscfg-openfile-recovery` skill
(next to this skill): the family's part number and its largest package. The project does
not store the package, so tell the user which one you used.

`<context>` is `system`, except on the dual-core F2837xD, F2838x and F28P65x: use `CPU1` or
`CPU2`, the core the project runs on. With the wrong context SysConfig writes nothing and
the build stops at a missing `c2000ware_libraries.cmd.genlibs`.

## 4. Set the linker flags

Call CCS Project MCP `setToolFlags` with `toolType` `linker`. It adds to the flags of every
build configuration:

```text
-i"${SYSCONFIG_TOOL_LIBRARY_PATH}" -i"${PROJECT_BUILD_DIR}/syscfg" -i"${C2000WARE_ROOT}" -l"c2000ware_libraries.cmd.genlibs" -l"board.cmd.genlibs"
```

## 5. Build before converting

Call `buildProject` on the clone. It should build with no errors. The SysConfig step
creates `<configuration>/syscfg/` (for example `CPU1_RAM/syscfg/`) with `device.c`, `device.h`, `board.c`, `board.h`,
`c2000ware_libraries.c` and `c2000ware_libraries.h`. If that folder is missing, the context
in the `.syscfg` is wrong. If the build fails for another reason, for example the program
no longer fits in RAM, stop and tell the user what it reported. Read the `output` of
`buildProject`; the `_build.log` file is not rewritten.

## 6. Use driverlib in the converted files

Add `#include "driverlib.h"` to each file you convert, next to its device_support
include, and `#include "device.h"` if the file uses `DEVICE_` macros. In some projects the
two headers clash (for example the macro `ADC_RESOLUTION_12BIT` and the driverlib enum of
the same name); then the clone builds again only after step 6 of the workflow.
