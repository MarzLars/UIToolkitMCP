# MinMaxSlider

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/MinMaxSlider.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MinMaxSlider.cs)

---

## Documentation

The MinMaxSlider manages navigation events in a customized manner.

///- Min thumb: adjusts the slider's minimum value if the `NavigationMoveEvent` aligns with the slider's direction.

- Middle thumb: adjusts the slider's minimum and maximum values if the `NavigationMoveEvent` aligns with the slider's direction.

/// The MinMaxSlider cycles through the navigation states when a `NavigationSubmitEvent` is received.


**Remarks:**



    [UxmlElement(libraryPath = "Controls"), UxmlPartialSerializedData]
    [Icon("UIToolkit/Icons/MinMaxSlider.png")]


        [CreateProperty]


        [CreateProperty]


        [CreateProperty(ReadOnly = true)]


        [Delayed]
        [CreateProperty]
        [UxmlAttribute]


        [Delayed]
        [CreateProperty]
        [UxmlAttribute]

When a `NavigationSubmitEvent` is received the slider cycles through the elements in the following order:

2. Maximum thumb.

4. None (Default Navigation behavior).

<param name="maxValue">The maximum value in the range to be represented.</param>

<param name="maxLimit">The maximum value of the slider limit.</param>

<param name="maxValue">The maximum value in the range to be represented.</param>

<param name="maxLimit">The maximum value of the slider limit.</param>

## Source Code Reference

For complete source code, see: [MinMaxSlider.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MinMaxSlider.cs)

### Public Properties

- **minValue**: `float`
- **maxValue**: `float`
- **value**: `Vector2`
- **range**: `float`
- **lowLimit**: `float`
- **highLimit**: `float`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`

