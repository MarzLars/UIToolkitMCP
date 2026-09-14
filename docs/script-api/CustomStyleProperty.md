# CustomStyleProperty

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/CustomStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/CustomStyle.cs)

---

## Documentation


    // Readonly statics of this type are whitelisted in the statics-cleanup analysis (s_AllowedReadonlyTypes in
    // AutoStaticsCleanupModel) because values stay valid across code reload: the cached UniqueStyleString id below
    // indexes into intern tables that are [NoAutoStaticsCleanup] and survive reload. The whitelist matches
    // constructed types by name, so readonly statics with a new T also need a new entry there. If those tables
    // ever get cleaned up on reload, the whitelist entries must be removed together with that change.

Custom style property name must start with a -- prefix.

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [CustomStyleProperty.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/CustomStyle.cs)

### Public Properties

- **name**: `string`
- **ICustomStyle**: `interface`

### Public Methods

- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`

