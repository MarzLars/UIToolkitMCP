# UxmlTraits

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/BaseSlider.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/BaseSlider.cs)

---

## Documentation


        Horizontal,

An vertical slider is made with a SliderDirection Vertical.

/// This class must be used instead of the non-generic inherited UxmlTraits equivalent.


**Remarks:**


use in a UXML asset.


        [CreateProperty]


        [CreateProperty]


        [CreateProperty(ReadOnly = true)]


        [CreateProperty]

Set this property to true to display a numerical text field that provides another way to


        [CreateProperty]


        [CreateProperty]

<param name="speed">Speed of the move.</param>


        void IValueField<TValueType>.StartDragging() {}

Method called by the application when the label of the field is stopped to be dragged to change the value of it.


        [CreateProperty]

For an inverted horizontal slider, high value is located to the left, low value is located to the right


        [CreateProperty]

When the slider detects move events aligned with the slider's direction, it adjusts the slider's value.

A second navigation submit event re-applies the style to the dragger and restores the previous customized behavior.

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [UxmlTraits.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/BaseSlider.cs)

### Public Properties

- **SliderDirection**: `enum`
- **lowValue**: `TValueType`
- **highValue**: `TValueType`
- **range**: `TValueType`
- **pageSize**: `float`
- **showInputField**: `bool`
- **fill**: `bool`
- **value**: `TValueType`
- **direction**: `SliderDirection`
- **inverted**: `bool`

### Public Methods

- **Deserialize()**: Returns `void`
- **ApplyInputDeviceDelta()**: Returns `void`
- **SetValueWithoutNotify()**: Returns `void`
- **AdjustDragElement()**: Returns `void`

