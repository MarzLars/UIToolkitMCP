# IPointerEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/PointerEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/PointerEvents.cs)

---

## Documentation

These values are used as the values for IPointerEvent.pointerType.

See for example InputSystem's [https://docs.unity3d.com/Packages/com.unity.inputsystem@1.12/api/UnityEngine.InputSystem.XR.XRController.html|XRController].

These values are used as the values for IPointerEvent.pointerId.

The pointer ID for a touch event is a number between touchPointerIdBase and touchPointerIdBase + touchPointerCount - 1.

The pointer ID for a touch event is a number between touchPointerIdBase and touchPointerIdBase + touchPointerCount - 1.

The pointer ID for a pen event is a number between penPointerIdBase and penPointerIdBase + penPointerCount - 1.

The pointer ID for a pen event is a number between penPointerIdBase and penPointerIdBase + penPointerCount - 1.

See for example InputSystem's [https://docs.unity3d.com/Packages/com.unity.inputsystem@1.12/api/UnityEngine.InputSystem.XR.XRController.html|XRController].


**Remarks:**


The pointer ID for a tracked device event is a number between trackedPointerIdBase and trackedPointerIdBase + trackedPointerCount - 1.

Refer to the [wiki:UIE-Pointer-Events|Pointer events] manual page for more information and examples.

If the mouse sends the event, the identifier is set to 0. If a touchscreen device sends the event, the identifier


        int pointerId { get; }

Gets the type of pointer that created the event.


**Remarks:**



        string pointerType { get; }

Gets a boolean value that indicates whether the pointer is a primary pointer. True means the pointer is a primary

A primary pointer is a pointer that manipulates the mouse cursor. The mouse pointer is always a primary pointer. For touch

pointer generates compatibility mouse events.

0 is the left button, 1 is the right button, 2 is the middle button.


        int button { get; }

Gets a bitmask that describes the buttons that are currently pressed.


**Remarks:**


The right mouse button and pen barrel button set/clear Bit 1. The middle mouse button sets/clears Bit 2.


        int pressedButtons { get; }

Gets the pointer position in the panel coordinate system.

The value of this property changes during the propagation process for each element that receives the event along the propagation path.

<seealso cref="EventBase.currentTarget"/>
        Vector3 localPosition { get; }

Gets the difference between the pointer's position during the previous pointer event and its position during the

This value is based on `IPointerEvent.position` and is expressed in panel world coordinates.


        float deltaTime { get; }

Gets the number of consecutive times a down-up sequence was executed in a short amount of time

There are two different formulas used to determine the value for clickCount.

If the event is a `ClickEvent`, a special data structure tracks

///- clickCount is incremented on `PointerDownEvent`.

- The time limit is 0.5 seconds by default but can vary on some platforms.

- clickCount is reset on `PointerDownEvent` if its target is not the same as the previous

/// If the event is not a `ClickEvent`, the value for clickCount does not follow a strict

The amount of time allowed and whether that time is measured between consecutive

`PointerDownEvent` varies.

To remain consistent in your code, don't depend on clickCount for other events than

registering callbacks to `PointerDownEvent` and `PointerUpEvent` on the

incoming Panel events. The code below shows an example implementation.

<example>

</example>
        int clickCount { get; }

Gets the amount of pressure currently applied by a touch.


**Remarks:**



        float pressure { get; }

Gets the pressure applied to an additional pressure-sensitive control on the stylus.

A value of 0 indicates that the stylus is parallel to the surface. A value of pi/2 indicates that it is perpendicular to the surface.

A value of 0 indicates that the stylus is pointed along the x-axis of the device.


        float twist { get; }

Specifies the angle of the pen relative to the X and Y axis respectively, in radians.

On macOS, penStatus will not reflect changes to button mappings.

Add `radiusVariance` to get the maximum touch radius, subtract it to get the minimum touch radius.

Add this value to the radius to get the maximum touch radius, subtract it to get the minimum touch radius.

Refer to `EventModifiers` for more information.

Refer to `EventModifiers.Shift` for more information.

Refer to `EventModifiers.Control` for more information.

Refer to `EventModifiers.Command` for more information.

Refer to `EventModifiers.Alt` for more information.

The platform-specific action key is Cmd on macOS, and Ctrl on all other platforms.

Pointer events are sent when a user interacts with the mouse, touchscreen, or digital pens.

By default, pointer events trickle down the hierarchy of visual elements and then bubble up

/// A cycle of pointer events occurs as follows:

- The user presses a mouse button, touches the screen, or otherwise causes a `PointerDownEvent` to be sent.

- If the user cancels the loop, a `PointerCancelEvent` is sent.

- If the initial `PointerDownEvent` and the `PointerUpEvent` occur on the same visual element, a `ClickEvent` is sent.

Refer to the [wiki:UIE-Pointer-Events|Pointer events] manual page for more information and examples.

If the mouse sends the event, the identifier is set to 0. If a touchscreen device sends the event, the identifier

This value is taken from the values defined in `PointerType`.

pointer. False means it isn't.


**Remarks:**


events, the first finger that touches the screen is the primary pointer. Once it is processed, a pointer event from a primary

0 is the left button, 1 is the right button, 2 is the middle button.

Pressing a mouse button sets a bit. Releasing the button clears the bit. The left mouse button sets/clears Bit 0.

other bits.

The value of this property changes throughout the propagation process for each element receiving the event along the propagation path.

<seealso cref="EventBase.currentTarget"/>

current pointer event.


**Remarks:**


with the same pointer ID and button.


**Remarks:**
See `IPointerEvent.clickCount`

If the device does not report pressure, the value of this property is 1.0f.

A value of 0 indicates that the stylus is parallel to the surface. A value of pi/2 indicates that it is perpendicular to the surface.

A value of 0 indicates that the stylus is pointed along the x-axis of the device.

On macOS, penStatus will not reflect changes to button mappings.

Add `radiusVariance` to get the maximum touch radius, subtract it to get the minimum touch radius.

Add this value to the radius to get the maximum touch radius, subtract it to get the minimum touch radius.

Refer to `EventModifiers` for more information.

Refer to `EventModifiers.Shift` for more information.

Refer to `EventModifiers.Control` for more information.

Refer to `EventModifiers.Command` for more information.

Refer to `EventModifiers.Alt` for more information.

The platform-specific action key is Cmd on macOS, and Ctrl on all other platforms.

The current target is the element in the propagation path for which event handlers are currently being executed.

<returns>Azimuth angle as determined by tilt along x and y axese.</returns>

<returns>Azimuth angle as determined by tilt along x and y axese.</returns>

<returns>Altitude angle as determined by tilt along x and y axese.</returns>

Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.

<param name="systemEvent">An IMGUI mouse event.</param>

Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.

<param name="touch">A `Touch` structure from the InputManager.</param>

<returns>An initialized event.</returns>

Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.

<param name="pen">A `PenData` structure from the InputManager containing pen event information.</param>

<returns>An initialized event.</returns>

Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.

<param name="triggerEvent">The event that sent this event.</param>

In a runtime UI, a @@PointerDownEvent@@ is sent each time a user touches the screen or presses a mouse button.


**Remarks:**


If the user presses additional mouse buttons (right or middle) without releasing the initial one, the [PointerMoveEvents] is

A @@PointerDownEvent@@ follows the default pointer [wiki:UIE-Events-Dispatching|event propagation path]. It trickles down, bubbles up,

Disabled elements don't receive this event.


**Remarks:**


and [wiki:UIE-Pointer-Events|Pointer events].

<example>

<![CDATA[

/// namespace UnityEngine.UIElements

public class ClickDetector : VisualElement

public ClickDetector()

RegisterCallback<PointerDownEvent>(ProcessEvent);

RegisterCallback<PointerUpEvent>(ProcessEvent);

private void ProcessEvent<TEvent>(PointerEventBase<TEvent> evt)

{

{

}

{

if (evt.button == 0 && (evt.pressedButtons & 1) == 1)

StartClickTracking(evt);

// Button 1 is released while another button is still pressed.

{

}

else

UpdateClickStatus(evt);

}

{

}

///         private void StartClickTracking(IPointerEvent evt) { Debug.Log("Starting click sequence"); }

private void SendClickEvent(IPointerEvent evt) { Debug.Log("Completed click"); }

}

</code>


**Remarks:**



    [EventCategory(EventCategory.PointerDown)]

The state of a pointer changes when one or more of its properties change, such as the mouse button pressure changes,

A @@PointerMoveEvent@@ follows the default pointer [wiki:UIE-Events-Dispatching|event propagation path]. It trickles down, bubbles up,

Disabled elements don't receive this event.


**Remarks:**


and [wiki:UIE-Pointer-Events|Pointer events].

After a `PointerDownEvent` is sent, this event is sent if a `PointerMoveEvent` or

/// A PointerStationaryEvent uses the default pointer event propagation path: it trickles down, bubbles up

Disabled elements receive this event by default.

See `UIElements.PointerEventBase{T}` to see how PointerStationaryEvent relates to other pointer events.

The last pressed button may or may not be the same button that triggered the `PointerDownEvent`.

A PointerUpEvent uses the default pointer event propagation path: it is trickled down, bubbled up

Disabled elements won't receive this event by default.

See `UIElements.PointerEventBase{T}` to see how PointerUpEvent relates to other pointer events.

A PointerCancelEvent can trickle down or bubble up, but cannot be cancelled.

/// See `UIElements.PointerEventBase{T}` to see how PointerCancelEvent relates to other pointer events.

A click consists of a mouse down event followed by a mouse up event on the same VisualElement.

and mouse up events occur on the same VisualElement.

A ClickEvent uses the default pointer event propagation path: it trickles down, bubbles up

Disabled elements won't receive this event by default.

See `UIElements.PointerEventBase{T}` to see how ClickEvent relates to other pointer events.

The event does not trickle down and does not bubble up.

The event does not trickle down and does not bubble up.

The event trickles down and bubbles up.

The event trickles down and bubbles up.

## Source Code Reference

For complete source code, see: [IPointerEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/PointerEvents.cs)

### Public Properties

- **PointerType**: `class`
- **PointerId**: `class`
- **IPointerEvent**: `interface`
- **pointerId**: `int`
- **pointerType**: `string`
- **isPrimary**: `bool`
- **button**: `int`
- **pressedButtons**: `int`
- **position**: `Vector3`
- **localPosition**: `Vector3`
- **deltaPosition**: `Vector3`
- **deltaTime**: `float`
- **clickCount**: `int`
- **pressure**: `float`
- **tangentialPressure**: `float`
- **altitudeAngle**: `float`
- **azimuthAngle**: `float`
- **twist**: `float`
- **tilt**: `Vector2`
- **penStatus**: `PenStatus`

### Public Methods

- **GetPooled()**: Returns `EventBase`

