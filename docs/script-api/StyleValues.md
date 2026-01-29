# StyleValues

**Namespace:** `UnityEngine.UIElements.Experimental`

**Source:** [Modules/UIElements/Core/Transitions.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Transitions.cs)

---

## Documentation

The opacity can be between 0.0 and 1.0. The lower value, the more transparent.

<param name="to">End value.</param>

<param name="onValueChanged">Callback that applies the interpolated value.</param>

<param name="to">End value.</param>

<param name="onValueChanged">Callback that applies the interpolated value.</param>

<param name="to">End value.</param>

<param name="onValueChanged">Callback that applies the interpolated value.</param>

<param name="to">End value.</param>

<param name="onValueChanged">Callback that applies the interpolated value.</param>

<param name="to">End value.</param>

<param name="onValueChanged">Callback that applies the interpolated value.</param>

<param name="to">End value.</param>

<param name="onValueChanged">Callback that applies the interpolated value.</param>

<param name="to">End value.</param>

<returns>The created animation object.</returns>
        ValueAnimation<StyleValues> Start(StyleValues from, StyleValues to, int durationMs);

Starts a transition animation on this VisualElement.

<param name="to">End value.</param>

<returns>The created animation object.</returns>
        ValueAnimation<StyleValues> Start(StyleValues to, int durationMs);

Starts a transition animation on this VisualElement.

<param name="fromValueGetter">Callback that provides the initial value.</param>

<param name="durationMs">Duration of the transition in milliseconds.</param>

<returns>The created animation object.</returns>
        ValueAnimation<float> Start(Func<VisualElement, float> fromValueGetter, float to, int durationMs, Action<VisualElement, float> onValueChanged);

Starts a transition animation on this VisualElement.

<param name="fromValueGetter">Callback that provides the initial value.</param>

<param name="durationMs">Duration of the transition in milliseconds.</param>

<returns>The created animation object.</returns>
        ValueAnimation<Rect> Start(Func<VisualElement, Rect> fromValueGetter, Rect to, int durationMs, Action<VisualElement, Rect> onValueChanged);

Starts a transition animation on this VisualElement.

<param name="fromValueGetter">Callback that provides the initial value.</param>

<param name="durationMs">Duration of the transition in milliseconds.</param>

<returns>The created animation object.</returns>
        ValueAnimation<Color> Start(Func<VisualElement, Color> fromValueGetter, Color to, int durationMs, Action<VisualElement, Color> onValueChanged);

Starts a transition animation on this VisualElement.

<param name="fromValueGetter">Callback that provides the initial value.</param>

<param name="durationMs">Duration of the transition in milliseconds.</param>

<returns>The created animation object.</returns>
        ValueAnimation<Vector3> Start(Func<VisualElement, Vector3> fromValueGetter, Vector3 to, int durationMs, Action<VisualElement, Vector3> onValueChanged);

Starts a transition animation on this VisualElement.

<param name="fromValueGetter">Callback that provides the initial value.</param>

<param name="durationMs">Duration of the transition in milliseconds.</param>

<returns>The created animation object.</returns>
        ValueAnimation<Vector2> Start(Func<VisualElement, Vector2> fromValueGetter, Vector2 to, int durationMs, Action<VisualElement, Vector2> onValueChanged);

Starts a transition animation on this VisualElement.

<param name="fromValueGetter">Callback that provides the initial value.</param>

<param name="durationMs">Duration of the transition in milliseconds.</param>

<returns>The created animation object.</returns>
        ValueAnimation<Quaternion> Start(Func<VisualElement, Quaternion> fromValueGetter, Quaternion to, int durationMs, Action<VisualElement, Quaternion> onValueChanged);

Triggers an animation changing this element's layout style values.

<seealso cref="IStyle.top"/>

<seealso cref="IStyle.width"/>

<seealso cref="IStyle.left"/>
        ValueAnimation<Vector2> TopLeft(Vector2 to, int durationMs);

Triggers an animation changing this element's size style values.

<seealso cref="IStyle.width"/>

## Source Code Reference

For complete source code, see: [StyleValues.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Transitions.cs)

### Public Properties

- **StyleValues**: `struct`
- **top**: `float`
- **left**: `float`
- **width**: `float`
- **height**: `float`
- **right**: `float`
- **bottom**: `float`
- **color**: `Color`
- **backgroundColor**: `Color`
- **unityBackgroundImageTintColor**: `Color`
- **borderColor**: `Color`
- **marginLeft**: `float`
- **marginTop**: `float`
- **marginRight**: `float`
- **marginBottom**: `float`
- **paddingLeft**: `float`
- **paddingTop**: `float`
- **paddingRight**: `float`
- **paddingBottom**: `float`
- **borderLeftWidth**: `float`

### Public Methods

- **Interpolate()**: Returns `float`

