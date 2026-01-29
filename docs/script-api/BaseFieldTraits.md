# BaseFieldTraits

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/InputField/BaseField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/InputField/BaseField.cs)

---

## Documentation


    [VisibleToOtherModules("UnityEditor.UIBuilderModule")]

<para>A BaseField is a base class for field elements like `TextField` and `IntegerField`.

use the @@.unity-base-field__aligned@@ USS class. This style class is designed for use with

However, if you manually add a child BaseField element to a PropertyField, you must add

<para>When the style class is present, the field automatically calculates the label width

UI Toolkit fields are aligned with them for consistency and compatibility.</para>

Used by `IUxmlSerializedDataCustomAttributeHandler` to set the value from legacy field values


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [CreateProperty]

If the string is empty, the label element is removed from the hierarchy.


        [CreateProperty]


        [CreateProperty]

<param name="visualInput">The visual element to use as the input for the field.</param>


    [Obsolete("BaseFieldTraits<TValueType, TValueUxmlAttributeType> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">Bag of attributes.</param>

## Source Code Reference

For complete source code, see: [BaseFieldTraits.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/InputField/BaseField.cs)

### Public Properties

- **value**: `TValueType`
- **labelElement**: `Label`
- **label**: `string`
- **showMixedValue**: `bool`

### Public Methods

- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **SetValueWithoutNotify()**: Returns `void`

