# ICommandEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/CommandEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/CommandEvents.cs)

---

## Documentation

Command events are only available on Editor-type Panels.

Refer to the [wiki:UIE-Command-Events|Command events] manual page for more information and examples.

<seealso cref="ValidateCommandEvent"/>

<seealso cref="IPanel.contextType"/>


        string commandName { get; }
    }

Base class for command events.


**Remarks:**


/// Refer to the [wiki:UIE-Command-Events|Command events] manual page for more information and examples.

<seealso cref="ValidateCommandEvent"/>

<seealso cref="IPanel.contextType"/>
    [EventCategory(EventCategory.Command)]

<returns>An initialized event.</returns>

<returns>An initialized event.</returns>

See also: [wiki:UIE-Command-Events|Command Events].

See also: [wiki:UIE-Command-Events|Command Events].

## Source Code Reference

For complete source code, see: [ICommandEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/CommandEvents.cs)

### Public Properties

- **ICommandEvent**: `interface`
- **commandName**: `string`

### Public Methods

- **GetPooled()**: Returns `T`

