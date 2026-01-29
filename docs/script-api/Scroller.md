# Scroller

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Scroller.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Scroller.cs)

---

## Documentation

Each ScrollView has a Scroller for each axis, controlled by `ScrollerVisibility`. For more information, refer to `ScrollView`.

A Scroller contains a `Slider` and two `RepeatButton`s for scrolling.

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Scroller_Example.cs"/>


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>


        [CreateProperty]


        [CreateProperty]


        [CreateProperty]


        [CreateProperty]

## Source Code Reference

For complete source code, see: [Scroller.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Scroller.cs)

### Public Properties

- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **slider**: `Slider`
- **lowButton**: `RepeatButton`
- **highButton**: `RepeatButton`
- **value**: `float`
- **lowValue**: `float`
- **highValue**: `float`
- **direction**: `SliderDirection`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **Adjust()**: Returns `void`
- **ScrollPageUp()**: Returns `void`
- **ScrollPageDown()**: Returns `void`

