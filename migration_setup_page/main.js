const vscode = acquireVsCodeApi();

var migrateToDeviceCheckboxes = document.querySelectorAll('input[name=migrateToDevice]');
var currentDeviceRadios = document.querySelectorAll('input[name=currentDevice]');
var migrationCheckFolderExceptions = document.getElementById('migrationCheckFolderExceptions');

var migrationState = vscode.getState();
loadUIFromMigrationState();

function newMigrationDeviceSaveClick() {
    document.getElementById("newMigrationDeviceSave").innerHTML = "Saved";
    var currentDeviceNode = document.querySelector('input[name="currentDevice"]:checked');
    if (currentDeviceNode)
    {
        migrationState.currentDevice = currentDeviceNode.value;
    }
    else
    {
        migrationState.currentDevice = undefined;
    }
    var migrationDevicesNodes = document.querySelectorAll('input[name=migrateToDevice]:checked');
    if (migrationDevicesNodes.length > 0)
    {
        migrationState.migrationDevices = Array.from(migrationDevicesNodes).map(node => node.value);
        
    }
    else
    {
        migrationState.migrationDevices = undefined;
    }
    var migrationCheckExceptions = document.getElementById('migrationCheckExceptions');
    migrationState.migrationCheckExceptions = migrationCheckExceptions.value.replace(/\s/g, '').split(";").filter(e => e);
    migrationState.migrationCheckFolderExceptions = migrationCheckFolderExceptions.value.replace(/\s/g, '').split(";").filter(e => e);


    vscode.setState(migrationState);
    if (migrationState)
    {
        vscode.postMessage({
            migrationState: migrationState
        });
    }

    setTimeout(() => {
        document.getElementById("newMigrationDeviceSave").innerHTML = "Save";
    }, 1000);
}

function loadUIFromMigrationState()
{
    if (!migrationState)
    {
        migrationState = {};
    }
    else
    {
        if (migrationState.migrationDevices)
        {
            for (var migrateDev of migrationState.migrationDevices)
            {
                var migrateToDeviceCheckbox = document.getElementById('migrate_' + migrateDev);
                if (migrateDev !== migrationState.currentDevice)
                {
                    migrateToDeviceCheckbox.checked = true;
                }
            }
        }
        if (migrationState.currentDevice)
        {
            var currentDeviceRadio = document.getElementById('current_' + migrationState.currentDevice);
            currentDeviceRadio.checked = true;
        }
        if (migrationState.migrationCheckExceptions)
        {
            var migrationCheckExceptions = document.getElementById('migrationCheckExceptions');
            migrationCheckExceptions.value = migrationState.migrationCheckExceptions.join(";");
        }
        if (migrationState.migrationCheckFolderExceptions)
        {
            migrationCheckFolderExceptions.value = migrationState.migrationCheckFolderExceptions.join(";");
        }
    }
}

document.getElementById("newMigrationDeviceSave").onclick = newMigrationDeviceSaveClick;
window.addEventListener('message', event => {
    const message = event.data; // The json data that the extension sent
    if (message.migrationState) {
        migrationState = message.migrationState;
        vscode.setState(migrationState);
        loadUIFromMigrationState();
    }
});