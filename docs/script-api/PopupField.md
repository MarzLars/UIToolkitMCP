# PopupField

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/PopupField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/PopupField.cs)

---

## Documentation

The following example shows how to create a popup field for a custom data type.

</example>
    [MovedFrom(true, UpgradeConstants.EditorNamespace, UpgradeConstants.EditorAssembly)]

Setting the index will update the ::ref::value field and send a property change notification.

## Source Code Reference

For complete source code, see: [PopupField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/PopupField.cs)

### Public Properties

- **formatSelectedValueCallback**: `Func<T, string>`
- **formatListItemCallback**: `Func<T, string>`
- **value**: `T`
- **index**: `int`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`

