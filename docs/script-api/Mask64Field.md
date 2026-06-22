# Mask64Field

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Mask64Field.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Mask64Field.cs)

---

## Documentation

The difference between Mask64Field and [UIElements.MarkField] is that Mask64Field supports a 64-bit bitmask while [UIElements.MarkField] supports a 32-bit bitmask. For more information, refer to [wiki:UIE-uxml-element-Mask64Field|UXML element Mask64Field].


        [CreateProperty]


    [UxmlElement(libraryPath = "Controls")]
    [Icon("UIToolkit/Icons/Mask64Field.png")]
    [MovedFrom(true, UpgradeConstants.EditorNamespace, UpgradeConstants.EditorAssembly)]

<param name="defaultValue">The initial mask value for this field.</param>

<param name="formatListItemCallback">The initial mask value this field should use. Unity calls this method automatically when displaying choices for the field.</param>

<param name="choices">A list of choices to populate the field.</param>

<param name="formatSelectedValueCallback">A callback to format the selected value. Unity calls this method automatically when a new value is selected in the field.</param>

## Source Code Reference

For complete source code, see: [Mask64Field.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Mask64Field.cs)

### Public Properties

- **choices**: `List<string>`
- **choicesMasks**: `List<UInt64>`
- **value**: `UInt64`
- **formatSelectedValueCallback**: `Func<string, string>`
- **formatListItemCallback**: `Func<string, string>`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`

