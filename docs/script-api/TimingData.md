# TimingData

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/StylePropertyAnimationSystem.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/StylePropertyAnimationSystem.cs)

---

## Source Code Reference

For complete source code, see: [TimingData.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/StylePropertyAnimationSystem.cs)

### Public Properties

- **TimingData**: `struct`
- **StyleData**: `struct`
- **EmptyData**: `struct`
- **SameFunc**: `Func<float, float, bool>`
- **SameFunc**: `Func<int, int, bool>`
- **SameFunc**: `Func<Length, Length, bool>`
- **SameFunc**: `Func<Color, Color, bool>`
- **SameFunc**: `Func<T, T, bool>`
- **SameFunc**: `Func<TextShadow, TextShadow, bool>`
- **SameFunc**: `Func<Scale, Scale, bool>`
- **SameFunc**: `Func<Rotate, Rotate, bool>`
- **SameFunc**: `Func<Translate, Translate, bool>`
- **SameFunc**: `Func<TransformOrigin, TransformOrigin, bool>`
- **SameFunc**: `Func<BackgroundSize, BackgroundSize, bool>`

### Public Methods

- **Create()**: Returns `AnimationDataSet<TTimingData, TStyleData>`
- **IndexOf()**: Returns `bool`
- **Add()**: Returns `void`
- **Remove()**: Returns `void`
- **Replace()**: Returns `void`
- **RemoveAll()**: Returns `void`
- **GetActivePropertiesForElement()**: Returns `void`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **GetPooledQueue()**: Returns `Queue<EventBase>`
- **RegisterChange()**: Returns `void`
- **UnregisterChange()**: Returns `void`
- **StateChanged()**: Returns `bool`
- **Clear()**: Returns `void`
- **StartTransition()**: Returns `bool`
- **StartTransitionEnum()**: Returns `bool`
- **CancelAllAnimations()**: Returns `void`
- **CancelAnimation()**: Returns `void`
- **HasRunningAnimation()**: Returns `bool`
- **UpdateAnimation()**: Returns `void`

