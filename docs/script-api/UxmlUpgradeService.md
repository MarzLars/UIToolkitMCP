# UxmlUpgradeService

**Namespace:** `UnityEditor.UIElements`

**Source:** [Modules/UIElementsEditor/UXML/UxmlUpgrade/UxmlUpgradeService.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElementsEditor/UXML/UxmlUpgrade/UxmlUpgradeService.cs)

---

## Documentation

The upgraders are sorted by name for consistent execution order.

<returns>The upgrader with the specified name, or null if not found.</returns>

<param name="upgradersToRun">List of specific upgraders to run.</param>

<param name="uxml">The UXML string to write.</param>

## Source Code Reference

For complete source code, see: [UxmlUpgradeService.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElementsEditor/UXML/UxmlUpgrade/UxmlUpgradeService.cs)

### Public Properties

- **UxmlUpgradeService**: `class`

### Public Methods

- **GetUpgraderByName()**: Returns `IUxmlUpgrader`
- **SetUpgraderEnabled()**: Returns `void`
- **IsUpgraderEnabled()**: Returns `bool`
- **ApplyUpgrades()**: Returns `void`

