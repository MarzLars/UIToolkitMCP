# IMouseEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/MouseEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/MouseEvents.cs)

---

## Documentation

Refer to the [wiki:UIE-Mouse-Events|Mouse events] manual page for more information and examples.

See `EventModifiers` for more information.


        Vector2 mousePosition { get; }

The mouse position in the current target coordinate system.


**Remarks:**


current mouse event.


**Remarks:**



        Vector2 mouseDelta { get; }

The number of times a button is pressed consecutively.


**Remarks:**
See `IPointerEvent.clickCount`
        int clickCount { get; }

A value that indicates which mouse button was pressed or released (if any) to cause this event:

A negative value indicates that no mouse button changed state during this event.

Pressing a mouse button sets a bit; releasing the button clears it. The left mouse button sets/clears Bit 0. The right mouse button sets/clears Bit 1. The middle mouse button sets/clears Bit 2. Additional buttons set/clear other bits.

See `EventModifiers.Shift` for more information.

Refer to `EventModifiers.Control` for more information.

Refer to `EventModifiers.Command` for more information.

Refer to `EventModifiers.Alt` for more information.

This key is Cmd on macOS, and Ctrl on all other platforms.

Refer to the [wiki:UIE-Mouse-Events|Mouse events] manual page for more information and examples.

See `EventModifiers` for more information.

The value of this property changes throughout the propagation process for each element receiving the event along the propagation path.

<seealso cref="EventBase.currentTarget"/>

current mouse event.


**Remarks:**


0 is the left button, 1 is the right button, 2 is the middle button.

Pressing a mouse button sets a bit; releasing the button clears it. The left mouse button sets/clears Bit 0. The right mouse button sets/clears Bit 1. The middle mouse button sets/clears Bit 2. Additional buttons set/clear other bits.

Refer to `EventModifiers.Shift` for more information.

Refer to `EventModifiers.Control` for more information.

Refer to `EventModifiers.Command` for more information.

Refer to `EventModifiers.Alt` for more information.

This key is Cmd on macOS, and Ctrl on all other platforms.

<returns>An initialized event.</returns>

<param name="button">The mouse button pressed.</param>

<param name="delta">The relative movement of the mouse compared to the mouse position when the last event was received.</param>

<returns>An initialized event.</returns>

<returns>An initialized event.</returns>

<returns>An initialized event.</returns>

The mouse down event is sent to a visual element when a mouse button is pressed inside the element.

and can be cancelled.


    [EventCategory(EventCategory.PointerDown)]

<returns>An initialized event.</returns>

The mouse up event is sent to a visual element when a mouse button is released inside the element.

and can be cancelled.

<returns>An initialized event.</returns>

The mouse move event is sent to the visual element under the current mouse position whenever the mouse position has changed.

and can be cancelled.

<seealso cref="MouseLeaveEvent"/>

<seealso cref="MouseOutEvent"/>
    [EventCategory(EventCategory.PointerMove)]

<returns>An initialized event.</returns>

The mouse wheel event is sent to the visual element under the mouse when the mouse scroll wheel value changes.

and can be cancelled.

UIToolkit's scroll factor is the same as IMGUI's scroll factor both in Editor and Runtime.

<returns>An initialized event.</returns>

The event trickles down but does not bubble up.

The event trickles down but does not bubble up.

The event trickles down and bubbles up.

The event trickles down and bubbles up.

The event bubbles up but does not trickle down.

The event bubbles up but does not trickle down.

<returns>An initialized event.</returns>

The event trickles down and bubbles up.

<param name="menu">The menu to populate.</param>

<param name="menuManager">The menu manager that displays the menu.</param>

## Source Code Reference

For complete source code, see: [IMouseEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/MouseEvents.cs)

### Public Properties

- **IMouseEvent**: `interface`
- **modifiers**: `EventModifiers`
- **mousePosition**: `Vector2`
- **localMousePosition**: `Vector2`
- **mouseDelta**: `Vector2`
- **clickCount**: `int`
- **button**: `int`
- **pressedButtons**: `int`
- **shiftKey**: `bool`
- **ctrlKey**: `bool`
- **commandKey**: `bool`
- **altKey**: `bool`
- **actionKey**: `bool`
- **currentTarget**: `IEventHandler`
- **delta**: `Vector3`
- **menu**: `DropdownMenu`
- **triggerEvent**: `EventBase`

### Public Methods

- **GetPooled()**: Returns `T`

