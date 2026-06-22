# Scroller

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Scroller.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Scroller.cs)

---

## Documentation

Each ScrollView has a Scroller for each axis, controlled by `ScrollerVisibility`. For more information, refer to `ScrollView`.

A Scroller contains a `Slider` and two `RepeatButton`s for scrolling.

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Scroller_Example.cs"/>


        [CreateProperty]
        [UxmlAttribute]


        [CreateProperty]
        [UxmlAttribute]


        [CreateProperty]
        [UxmlAttribute]


        [CreateProperty]
        [UxmlAttribute]

## Source Code Reference

For complete source code, see: [Scroller.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Scroller.cs)

### Public Properties

- **slider**: `Slider`
- **lowButton**: `RepeatButton`
- **highButton**: `RepeatButton`
- **lowValue**: `float`
- **highValue**: `float`
- **direction**: `SliderDirection`
- **value**: `float`

### Public Methods

- **Adjust()**: Returns `void`
- **ScrollPageUp()**: Returns `void`
- **ScrollPageDown()**: Returns `void`

