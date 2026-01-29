# ClickableTest

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/ManipulatorActivationFilter.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/ManipulatorActivationFilter.cs)

---

## Documentation

<code lang="cs">

public class ClickableTest

public void CreateClickable()

var clickable = new Clickable(() => { Debug.Log("Clicked!"); });

clickable.activators.Add(new ManipulatorActivationFilter { button = MouseButton.RightMouse, clickCount = 2, modifiers = EventModifiers.Control });

}

</code>

<undoc/>

<returns>True if the event matches the requirements. False otherwise.</returns>

<returns>True if the event matches the requirements. False otherwise.</returns>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [ClickableTest.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/ManipulatorActivationFilter.cs)

### Public Properties

- **button**: `MouseButton`
- **modifiers**: `EventModifiers`
- **clickCount**: `int`

### Public Methods

- **CreateClickable()**: Returns `void`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **Matches()**: Returns `bool`

