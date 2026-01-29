# IPointerCaptureEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/CaptureEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/CaptureEvents.cs)

---

## Documentation

Refer to the [wiki:UIE-Capture-Events|Capture events] manual page for more information and examples.

Refer to the [wiki:UIE-Capture-Events|Capture events] manual page for more information and examples.

If the mouse sends the event, this property is set to 0. If a touchscreen device sends the event, this property is set to the finger ID, which ranges from 1 to the number of touches the device supports.

<param name="relatedTarget">For PointerCaptureEvent and MouseCaptureEvent, returns the element that loses the pointer capture, if any. For PointerCaptureOutEvent and MouseCaptureOutEvent, returns the element that captures the pointer.</param>

<returns>An initialized event.</returns>

When a pointer is captured by a VisualElement, all pointer events are sent to that VisualElement until the pointer is released.

Refer to the [wiki:UIE-Capture-Events|Capture events] manual page for more information and examples.

Refer to the [wiki:UIE-Capture-Events|Capture events] manual page for more information and examples.

<param name="relatedTarget">The related target.</param>

## Source Code Reference

For complete source code, see: [IPointerCaptureEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/CaptureEvents.cs)

### Public Properties

- **IPointerCaptureEvent**: `interface`
- **relatedTarget**: `IEventHandler`
- **pointerId**: `int`
- **IMouseCaptureEvent**: `interface`

### Public Methods

- **GetPooled()**: Returns `T`

