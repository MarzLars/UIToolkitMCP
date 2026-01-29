# IKeyboardEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/KeyboardEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/KeyboardEvents.cs)

---

## Documentation

Refer to the [wiki:UIE-Keyboard-Events|Keyboard events] manual page for more information and examples.

<seealso cref="KeyDownEvent"/>

See `EventModifiers` for more information.

This is the character entered when a key is pressed, taking into account the current keyboard layout. For example,

key is pressed at the time. The Shift key itself does not produce a character. When  pressed, it returns


        char character { get; }

The key code.


**Remarks:**


layout, and it displays modifier keys, since a key was pressed. For example, pressing the "A" key

The Shift key itself returns KeyCode.LeftShift since it is a physical key on the keyboard.

See `EventModifiers.Shift` for more information.

Refer to `EventModifiers.Control` for more information.

Refer to `EventModifiers.Command` for more information.

Refer to `EventModifiers.Alt` for more information.

The platform-specific action key is Cmd on macOs, and Ctrl on all other platforms.

The typical keyboard event loop is as follows:

- If the key is held down for a duration determined by the OS, another KeyDownEvent with the same data is

- When the key is released, a `KeyUpEvent` is sent.

By default, keyboard events trickle down and bubble up. disabled elements won't receive these events.

Refer to the [wiki:UIE-Keyboard-Events|Keyboard events] manual page for more information and examples.

<seealso cref="KeyDownEvent"/>

This is the character entered when a key is pressed, taking into account the current keyboard layout. For example,

key is pressed at the time. The Shift key itself does not produce a character. When  pressed, it returns

This is the code of the physical key that was pressed. It doesn't take into account the keyboard

will cause this property to return KeyCode.A regardless of whether the Shift key is pressed or not.

See `EventModifiers.Shift` for more information.

See `EventModifiers.Control` for more information.

Refer to `EventModifiers.Command` for more information.

Refer to `EventModifiers.Alt` for more information.

Refer to `EventModifiers.FunctionKey` for more information.

The platform-specific action key is Cmd on macOS, and Ctrl on all other platforms.

instead of creating new events. Events obtained using this method need to be released back to the pool.

<param name="keyCode">The key code for this event.</param>

<returns>An initialized event.</returns>

function instead of creating new events. Events obtained using this method need to be released

<returns>An initialized event.</returns>

This event trickles down and bubbles up.

This event trickles down and bubbles up.

## Source Code Reference

For complete source code, see: [IKeyboardEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/KeyboardEvents.cs)

### Public Properties

- **IKeyboardEvent**: `interface`
- **modifiers**: `EventModifiers`
- **character**: `char`
- **keyCode**: `KeyCode`
- **shiftKey**: `bool`
- **ctrlKey**: `bool`
- **commandKey**: `bool`
- **altKey**: `bool`
- **actionKey**: `bool`

### Public Methods

- **GetPooled()**: Returns `T`

