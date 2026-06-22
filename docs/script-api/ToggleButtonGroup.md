# ToggleButtonGroup

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/ToggleButtonGroup/ToggleButtonGroup.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ToggleButtonGroup/ToggleButtonGroup.cs)

---

## Documentation

The ToggleButtonGroup has a label and a group of interactable `Button` elements.

To create buttons, add `Button` elements directly to the ToggleButtonGroup. This will automatically


    [UxmlElement(null, typeof(Button), libraryPath = "Controls")]
    [Icon("UIToolkit/Icons/ToggleButtonGroup.png")]


        [CreateProperty]
        [UxmlAttribute]

When the property value is false, the control will automatically set the first available button to checked.

<param name="toggleButtonGroupState">The ToggleButtonGroupState to be used by this control.</param>

## Source Code Reference

For complete source code, see: [ToggleButtonGroup.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ToggleButtonGroup/ToggleButtonGroup.cs)

### Public Properties

- **isMultipleSelection**: `bool`
- **allowEmptySelection**: `bool`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`
- **GetButton()**: Returns `Button`

