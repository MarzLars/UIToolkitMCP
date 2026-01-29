# IFocusEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/FocusEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/FocusEvents.cs)

---

## Documentation

Refer to the [wiki:UIE-Focus-Events|Focus events] manual page for more information and examples.


        Focusable relatedTarget { get; }

Direction of the focus change.

The `IFocusRing` implementation determines what focus events are generated

Focus events generally occur after any of the following situations:

- A `NavigationMoveEvent`

- Calling an element's `Focusable.Focus()` or `Focusable.Blur()` methods

The direction of the focus change contains information about the cause of the Focus event.

<seealso cref="IFocusRing" />
        FocusChangeDirection direction { get; }
    }

Base class for focus related events.


**Remarks:**



    [EventCategory(EventCategory.Focus)]

<param name="relatedTarget">The related target.</param>

<param name="focusController">The object that manages the focus.</param>

<code source="../../Tests/UIElementsExamples/Assets/Examples/FocusExample.cs"/>

## Source Code Reference

For complete source code, see: [IFocusEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/FocusEvents.cs)

### Public Properties

- **IFocusEvent**: `interface`
- **relatedTarget**: `Focusable`
- **direction**: `FocusChangeDirection`

### Public Methods

- **GetPooled()**: Returns `T`

