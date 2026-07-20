# EPWM to MCPWM SysConfig Migration

## Limitation: this file assumes one EPWM instance maps to pair 1 of one MCPWM instance

This is the one thing to watch for. A single MCPWM instance has **three**
PWM output pairs (1A/1B, 2A/2B, 3A/3B) sharing one time-base counter, and a
real migration very often consolidates **multiple** EPWM instances onto
the pairs of a **single** MCPWM instance (that's the whole reason MCPWM
exists -- more outputs per instance). This file has no awareness of that
at all, because -- as noted above -- it's generated from the module
schemas, not from any project with actual instances and groupings.

Concretely, verified directly against the data:

- Of the 88 `mapped` entries, 18 are action-qualifier fields (e.g.
  `epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_ZERO`). **Every one of
  them** maps to the **pair-1** MCPWM field
  (`mcpwmActionQualifier_MCPWM_AQ_OUTPUT_1A_ON_TIMEBASE_ZERO`). None of
  them ever mention the pair-2 or pair-3 variants
  (`..._2A_.../..._3A_...`), even though a live MCPWM instance genuinely
  exposes full pair-2 and pair-3 action-qualifier field sets.
- Same story for counter-compare: a live MCPWM instance exposes three full
  field sets -- `mcpwmCounterCompare_cmpA`, `mcpwmCounterCompare_cmpA_pwm2`,
  `mcpwmCounterCompare_cmpA_pwm3` (and the same pattern for `cmpB` and
  their shadow-enable/shadow-mode counterparts) -- but this file's
  `to_config` for `epwmCounterCompare_cmpA` only ever points at the
  un-suffixed, pair-1 field.

So the file's implicit assumption is: **exactly one source EPWM instance,
landing on pair 1 of exactly one target MCPWM instance.** If your
migration only ever has one EPWM instance in play, that's fine as-is. If
you're consolidating two or three EPWM instances onto one MCPWM instance
(the common case), you have to substitute the pair number yourself for
every per-pair field this file gives you -- the second and third EPWM
instances in a group need `_pwm2`/`_pwm3` (counter-compare) or `2A/2B`,
`3A/3B` (action-qualifier) appended/substituted into the field name
according to which pair slot that instance actually landed in, based on
your own confirmed grouping.

This doesn't affect every field, though -- some MCPWM fields are
genuinely **instance-wide** regardless of how many pairs are populated
(time-base period/clock-divider/counter-mode/sync settings, dead-band,
and the single MCPWM interrupt-source configurable covered by the one
`partial` entry). For those, the flat mapping in this file is accurate as
given. But it raises a different question this file can't answer either:
if you're merging three EPWM instances that each had *different*
dead-band or interrupt settings onto one MCPWM instance with only *one*
shared field for that setting, which source instance's value should win?
This file has no way to flag that conflict -- it just describes one field
mapping to another in isolation, assuming there's only ever one source
value to consider.

## Important Note

Treat this file as a **field-existence reference** -- does *any* MCPWM
equivalent exist for a given EPWM configurable, and what's it generically
called -- not as something you can mechanically replay field-by-field
across a multi-instance consolidation. Every per-pair needs
its pair number substituted according to your actual grouping, and every
genuinely shared field needs an explicit decision about which source
instance's value to keep whenever more than one EPWM instance lands in the
same group.

Time-base and synchronization settings should get resolved 
 through the confirmed group -> instance mapping rather than
trusting a flat file. Submodules such as action-qualifier,
counter-compare, dead-band, trip-zone, event-trigger will need to do the
same thing this file can't: resolve each field through the real pair
assignment, and make an explicit, visible call on every shared-field
conflict instead of silently picking one source instance's value.