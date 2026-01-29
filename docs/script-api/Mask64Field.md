# Mask64Field

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Controls/Mask64Field.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/Mask64Field.cs)

---

## Documentation


        [CreateProperty]

<param name="defaultValue">The initial mask value for this field.</param>

<param name="formatListItemCallback">The initial mask value this field should use. Unity calls this method automatically when displaying choices for the field.</param>

<param name="choices">A list of choices to populate the field.</param>

<param name="formatSelectedValueCallback">A callback to format the selected value. Unity calls this method automatically when a new value is selected in the field.</param>

## Source Code Reference

For complete source code, see: [Mask64Field.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/Mask64Field.cs)

### Public Properties

- **choices**: `List<string>`
- **choicesMasks**: `List<UInt64>`
- **value**: `UInt64`
- **formatSelectedValueCallback**: `Func<string, string>`
- **formatListItemCallback**: `Func<string, string>`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`
- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`

