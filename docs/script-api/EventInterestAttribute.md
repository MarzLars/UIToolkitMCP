# EventInterestAttribute

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementEventInterests.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementEventInterests.cs)

---

## Documentation

The `EventDispatcher` uses this to determine if an event needs to be fully dispatched by checking

If it's determined there's no effect from the dispatching of the event, the event is likely skipped entirely.

<seealso cref="EventInterestAttribute"/>

non type-specific manner.

class are required.

method and checks if an enabled flag is active before calling its base.ExecuteDefaultActionAtTarget method


        Inherit = EventCategoryFlags.None,

Use the `EventInterestOptions.AllEventTypes` option when the method with an

to receive all possible event types.

a message every time an event of any kind is received would require this option.

and `CallbackEventHandler.HandleEventTrickleDown`.

The event dispatcher can then safely skip events not needed for this method

Only use this attribute for performance optimizations, not for filtering out

All event types specified in an `EventInterestAttribute` on a HandleEvent method override

However, event types not specified in any `EventInterestAttribute` might still be sent

///- A base class override uses it,

- Event optimizations are not applied for any other reason.

\\

assumes that the method doesn't have enough information on necessary event types, and

\\

It is recommended to use the `EventInterestAttribute` attribute because it allows

that don’t use the event.

at compile time.

The affected method is guaranteed to be invoked if the incoming event has any of the specified types

</param>

See `EventInterestOptions` for more information on the available argument values.

<param name="interests">

in this argument.

belongs to.

its base class, or the `EventCategory.Default` category if no attribute exists on any base class.

## Source Code Reference

For complete source code, see: [EventInterestAttribute.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementEventInterests.cs)

### Public Properties

- **EventInterestOptions**: `enum`

