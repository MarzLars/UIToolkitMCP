# Slider

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Slider.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Slider.cs)

---

## Documentation

The Slider control is a horizontal or vertical bar with a handle that can be moved to select a value from a range.

\\

The slider manages navigation events in a customized manner. When it detects `NavigationMoveEvent`.

`NavigationSubmitEvent`, it removes the BaseSlider_1::ref::movableUssClassName

A second navigation submit event re-enables the movableUssClassName class on the dragger and

\\

For more information and code examples, refer to the [wiki:UIE-uxml-element-Slider|UXML element Slider] manual page.


**Remarks:**



        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>

<param name="end">The maximum value that the slider encodes.</param>

<param name="pageSize">A generic page size used to change the value when clicking in the slider.</param>

<param name="start">The minimum value that the slider encodes.</param>

<param name="direction">The direction of the slider (Horizontal or Vertical).</param>

<inheritdoc />

## Source Code Reference

For complete source code, see: [Slider.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Slider.cs)

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **ApplyInputDeviceDelta()**: Returns `void`

