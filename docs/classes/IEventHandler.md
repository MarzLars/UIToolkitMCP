# IEventHandler

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/EventHandler.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/EventHandler.cs)

---

## Documentation

The event is forwarded to the event dispatcher for processing.

SA: [IEventHandler.HandleEvent], [EventDispatcher], [EventBase]

<param name="e">The event to send.</param>
        void SendEvent(EventBase e);

Handles an event according to its propagation phase and current target, by executing the element's

The `EventDispatcher` might invoke this method multiple times for the same event: once for each

overrides default actions for the event.

__Note:__ Do not use this method to intercept all events whose propagation path includes this element. There is no

if that target has no callbacks for the event and has no default action override that can receive the event.


**Remarks:**


If the event handler is already registered for the same phase (either TrickleDown or BubbleUp), this method has no effect.

Refer to the [wiki:UIE-Events-Handling|Handle event callbacks and value changes] manual page for more information and examples.

<seealso cref="PropagationPhase"/>

<param name="useTrickleDown">By default, this callback is called during the BubbleUp phase. Pass @@TrickleDown.TrickleDown@@ to call this callback during the TrickleDown phase.</param>

The event handler is automatically unregistered after it has been invoked exactly once.


**Remarks:**


and hasn't been invoked yet, this method has no effect.

<seealso cref="PropagationPhase"/>

<param name="callback">The event handler to add. If the handler is null, this method throws an exception.</param>

If the event handler is already registered for the same phase (either TrickleDown or BubbleUp), this method has no effect.

Refer to the [wiki:UIE-Events-Handling|Handle event callbacks and value changes] manual page for more information and examples.

<example>

</example>

<param name="callback">The event handler to add. If the handler is null, this method throws an exception.</param>

<param name="useTrickleDown">By default, this callback is called during the BubbleUp phase. Pass @@TrickleDown.TrickleDown@@ to call this callback during the TrickleDown phase.</param>

The event handler is automatically unregistered after it has been invoked exactly once.


**Remarks:**


and hasn't been invoked yet, this method has no effect.

<seealso cref="PropagationPhase"/>

<param name="callback">The event handler to add. If the handler is null, this method throws an exception.</param>

<param name="useTrickleDown">By default, this callback is called during the BubbleUp phase. Pass TrickleDown.TrickleDown to call this callback during the TrickleDown phase.</param>

<param name="callback">The callback to remove. If this callback was never registered, nothing happens.</param>

<param name="callback">The callback to remove. If this callback was never registered, nothing happens.</param>

UI Toolkit sends events to visual elements through the panel. The event is sent to the event handler's registered callbacks.

SA: [UIElements.IEventHandler]

<param name="e">The event to send.</param>

unless the event propagation is stopped by one of the callbacks.

This method is designed to be overriden by subclasses. Use it to implement event handling without

/// Use `EventInterestAttribute` on this method to specify a range of event types that this

/// This method is obsolete. Use `CallbackEventHandler.HandleEventBubbleUp` and

registering callbacks.

/// Also, the execution order or ExecuteDefaultAction-type and HandleEvent-type methods might differ when

///- @@ExecuteDefaultAction@@ and @@ExecuteDefaultActionAtTarget@@ are executed during the obsolete @@DefaultAction@@ and @@DefaultActionAtTarget@@ propagation phases.

- Registered callbacks are executed during the @@TrickleDown@@ and @@BubbleUp@@ propagation phases.

<example>

</example>

<seealso cref="CallbackEventHandler.HandleEventTrickleDown"/>

<param name="evt">The event instance.</param>
        [EventInterest(EventInterestOptions.Inherit)]
        [Obsolete("Use HandleEventBubbleUp. Before proceeding, make sure you understand the latest changes to " +
                  "UIToolkit event propagation rules by visiting Unity's manual page " +
                  "https://docs.unity3d.com/Manual/UIE-Events-Dispatching.html")]

BubbleUp callbacks.

This method is designed to be overriden by subclasses. Use it to implement event handling without

/// Use `EventInterestAttribute` on this method to specify a range of event types that this

<code source="../../Tests/UIElementsExamples/Assets/Examples/HandleEventExample.cs"/>

<param name="evt">The event instance.</param>
        [EventInterest(EventInterestOptions.Inherit)]

TrickleDown callbacks.

This method is designed to be overriden by subclasses. Use it to implement event handling without

/// Use `EventInterestAttribute` on this method to specify a range of event types that this

<code source="../../Tests/UIElementsExamples/Assets/Examples/HandleEventExample.cs"/>

<param name="evt">The event instance.</param>
        [EventInterest(EventInterestOptions.Inherit)]

unless the event has been marked to prevent its default behaviour.

This method is designed to be overriden by subclasses. Use it to implement event handling without

Unlike `HandleEventBubbleUp`, this method is called after both the callbacks registered

/// Use `EventInterestAttribute` on this method to specify a range of event types that this

/// This method is obsolete. Use `CallbackEventHandler.HandleEventBubbleUp` and

registering callbacks.

/// Also, the execution order or ExecuteDefaultAction-type and HandleEvent-type methods might differ when

///- @@ExecuteDefaultAction@@ and @@ExecuteDefaultActionAtTarget@@ are executed during the obsolete @@DefaultAction@@ and @@DefaultActionAtTarget@@ propagation phases.

- Registered callbacks are executed during the @@TrickleDown@@ and @@BubbleUp@@ propagation phases.

<example>

</example>

<seealso cref="CallbackEventHandler.HandleEventTrickleDown"/>

<param name="evt">The event instance.</param>
        [EventInterest(EventInterestOptions.Inherit)]
        [Obsolete("Use HandleEventBubbleUp. Before proceeding, make sure you understand the latest changes to " +
                  "UIToolkit event propagation rules by visiting Unity's manual page " +
                  "https://docs.unity3d.com/Manual/UIE-Events-Dispatching.html")]

## Source Code Reference

For complete source code, see: [IEventHandler.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/EventHandler.cs)

### Public Properties

- **IEventHandler**: `interface`

### Public Methods

- **HasTrickleDownHandlers()**: Returns `bool`
- **HasBubbleUpHandlers()**: Returns `bool`

