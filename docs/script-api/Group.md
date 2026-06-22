# Group

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/EventCallbackGroupFactory.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/EventCallbackGroupFactory.cs)

---

## Documentation

allowing a distinct `TArg` value to be provided.

For a given element, the factory will attempt to register each of its internal copies of the callback group

internal copy of the callback group and keeps it for later use if other elements also need multiple registrations.

/// Each registration returns a `Group` that can then be unregistered

@@createGroup@@ method. Callback groups produced by this factory are provided with a unique

that group when registering it on an element.

<param name="createGroup"></param>

@@argValue@@ for the corresponding `EventArg{TArg}`.

<param name="ve">The element on which the group and arg value are registered</param>

<returns>An object that can be unregistered later.</returns>

## Source Code Reference

For complete source code, see: [Group.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/EventCallbackGroupFactory.cs)

### Public Properties

- **Group**: `class`

### Public Methods

- **Unregister()**: Returns `void`
- **Register()**: Returns `Group`

