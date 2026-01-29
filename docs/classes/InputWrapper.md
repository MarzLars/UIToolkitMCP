# InputWrapper

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/InputSystem/InputWrapper.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/InputSystem/InputWrapper.cs)

---

## Documentation


    [Obsolete("EventSystem no longer supports input override for legacy input. Install Input System package for full input binding functionality.")]

<returns>Returns true during the frame the user pressed the given mouse button.</returns>

<returns>Returns true during the frame the user releases the given mouse button.</returns>

<returns>Returns whether the given mouse button is held down.</returns>

<returns>Touch details.</returns>

<returns>Returns the value of the virtual axis identified by axisName with no smoothing filtering applied.</returns>

<returns>Returns true during the frame the user pressed down the virtual button identified by buttonName.</returns>

## Source Code Reference

For complete source code, see: [InputWrapper.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/InputSystem/InputWrapper.cs)

### Public Properties

- **compositionString**: `string`
- **imeCompositionMode**: `IMECompositionMode`
- **compositionCursorPos**: `Vector2`
- **mousePresent**: `bool`
- **mousePosition**: `Vector2`
- **mouseScrollDelta**: `Vector2`
- **touchSupported**: `bool`
- **touchCount**: `int`

### Public Methods

- **GetMouseButtonDown()**: Returns `bool`
- **GetMouseButtonUp()**: Returns `bool`
- **GetMouseButton()**: Returns `bool`
- **GetTouch()**: Returns `Touch`
- **GetAxisRaw()**: Returns `float`
- **GetButtonDown()**: Returns `bool`

