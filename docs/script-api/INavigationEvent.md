# INavigationEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/NavigationEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/NavigationEvents.cs)

---

## Documentation


        EventModifiers modifiers { get; }

Describes the type of device this event was created from.


**Remarks:**


False means it isn't.

False means it isn't.

is pressed. False means it isn't.

False means it isn't.

key is pressed. False means it isn't.


**Remarks:**



        bool actionKey { get; }
    }

Describes types of devices that can generate navigation events.

using KeyDownEvent while others react to navigation events coming from the same keyboard input.

Controls reacting to navigation events from an unknown device should react conservatively.

a control could assume that the device type is a keyboard and conservatively block the navigation event.

This device should also send a KeyDownEvent immediately before any navigation event it generates.

This device should not send a KeyDownEvent before the navigation events it generates.

/// By default, navigation events trickle down and bubble up. Disabled elements won't receive these events.

<typeparam name="T"></typeparam>
    [EventCategory(EventCategory.Navigation)]

False means it isn't.

False means it isn't.

is pressed. False means it isn't.

False means it isn't.

key is pressed. False means it isn't.


**Remarks:**


The device type indicates whether there should be an KeyDownEvent observable before this navigation event.

Use this function instead of creating new events.

<param name="deviceType">The type of device this event was created from.</param>


            None,

Left.


            Up,

Right.


            Down,

Forwards, toward next element.


            Previous,
        }

This information is not guaranteed to be available through all input sources that can generate

Use this function instead of creating new events.

<param name="modifiers">The modifier keys held down during the event.</param>

Use this function instead of creating new events.

<param name="modifiers">The modifier keys held down during the event.</param>


**Remarks:**


## Source Code Reference

For complete source code, see: [INavigationEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/NavigationEvents.cs)

### Public Properties

- **INavigationEvent**: `interface`
- **modifiers**: `EventModifiers`
- **shiftKey**: `bool`
- **ctrlKey**: `bool`
- **commandKey**: `bool`
- **altKey**: `bool`
- **actionKey**: `bool`
- **Direction**: `enum`
- **direction**: `Direction`
- **move**: `Vector2`

### Public Methods

- **GetPooled()**: Returns `T`

