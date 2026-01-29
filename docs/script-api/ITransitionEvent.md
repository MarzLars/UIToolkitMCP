# ITransitionEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/TransitionEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/TransitionEvents.cs)

---

## Documentation

Refer to the [wiki:UIE-Transition-Events|Transition events] manual page for more information and examples.


        StylePropertyNameCollection stylePropertyNames { get; }

The number of seconds the transition has been running, excluding delay phase time.

<returns>true if the `StylePropertyNameCollection` contains the specified element; otherwise, false.</returns>

Refer to the [wiki:UIE-Transition-Events|Transition events] manual page for more information and examples.

Use this function instead of creating new events.

<param name="elapsedTime">The elapsed time.</param>

<returns>true if the `ITransitionEvent` affects the specified property; otherwise, false.</returns>

## Source Code Reference

For complete source code, see: [ITransitionEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/TransitionEvents.cs)

### Public Properties

- **ITransitionEvent**: `interface`
- **stylePropertyNames**: `StylePropertyNameCollection`
- **elapsedTime**: `double`

### Public Methods

- **MoveNext()**: Returns `bool`
- **Reset()**: Returns `void`
- **Dispose()**: Returns `void`
- **GetEnumerator()**: Returns `Enumerator`
- **Contains()**: Returns `bool`
- **GetPooled()**: Returns `T`
- **AffectsProperty()**: Returns `bool`

