# MaskField

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Controls/MaskField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/MaskField.cs)

---

## Documentation


        [CreateProperty]

For more information, refer to [wiki:UIE-uxml-element-MaskField|UXML element MaskField].


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The bag from where the attributes are taken.</param>

<param name="defaultValue">The initial mask value for this field.</param>

<param name="formatListItemCallback">The initial mask value this field should use. Unity calls this method automatically when displaying choices for the field.</param>

<param name="choices">A list of choices to populate the field.</param>

<param name="formatSelectedValueCallback">A callback to format the selected value. Unity calls this method automatically when a new value is selected in the field..</param>

## Source Code Reference

For complete source code, see: [MaskField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/MaskField.cs)

### Public Properties

- **choices**: `List<string>`
- **choicesMasks**: `List<int>`
- **value**: `TChoice`
- **formatSelectedValueCallback**: `Func<string, string>`
- **formatListItemCallback**: `Func<string, string>`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`
- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

