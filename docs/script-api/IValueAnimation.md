# IValueAnimation

**Namespace:** `UnityEngine.UIElements.Experimental`

**Source:** [Modules/UIElements/Core/ValueAnimation.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/ValueAnimation.cs)

---

## Documentation


        void Start();

Stops this animation.

Keeping a reference to the animation object afterwards could lead to unspecified behaviour.


        bool isRunning { get; }

Duration of the transition in milliseconds.

To properly use object pooling, use the Create static function.

If set, the onAnimationCompleted callback will be called.

Keeping a reference to the animation object afterwards could lead to unspecified behaviour.

## Source Code Reference

For complete source code, see: [IValueAnimation.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/ValueAnimation.cs)

### Public Properties

- **IValueAnimation**: `interface`
- **durationMs**: `int`
- **easingCurve**: `Func<float, float>`
- **isRunning**: `bool`
- **onAnimationCompleted**: `Action`
- **autoRecycle**: `bool`
- **valueUpdated**: `Action<VisualElement, T>`
- **initialValue**: `Func<VisualElement, T>`
- **interpolator**: `Func<T, T, float, T>`
- **from**: `T`
- **to**: `T`

### Public Methods

- **Start()**: Returns `void`
- **Stop()**: Returns `void`
- **Recycle()**: Returns `void`
- **Create()**: Returns `ValueAnimation<T>`
- **Ease()**: Returns `ValueAnimation<T>`
- **OnCompleted()**: Returns `ValueAnimation<T>`
- **KeepAlive()**: Returns `ValueAnimation<T>`

