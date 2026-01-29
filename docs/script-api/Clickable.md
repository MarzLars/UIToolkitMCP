# Clickable

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Clickable.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Clickable.cs)

---

## Documentation

See `Clickable.clicked` for more information on what it means for an element to be clicked

See `Clickable.clicked` for more information on when the @@clicked@@ and

The callback methods registered to this event should have an `EventBase` parameter and

<example>

<![CDATA[

{

button.clickedWithEventInfo += (EventBase evt) =>

int clickCount = ((IPointerEvent)evt).clickCount;

Debug.Log("Button was single-clicked.");

Debug.Log("Button was double-clicked.");

return button;

]]>

</example>

The @@clicked@@ and @@clickedWithEventInfo@@ events are invoked when any of the following conditions occur:

- The target receives a `NavigationSubmitEvent`.

/// If the @@delay@@ and @@interval@@ optional constructor parameters are used, then the @@clicked@@ event is

///- The target receives a `NavigationSubmitEvent`.

- The target has received a `PointerDownEvent` and the pointer button has been held down for a given period of time.

If the @@clicked@@ event is repeatable, then the first repeated click occurs after an amount of time

to the @@interval@@ parameter.

The callback methods registered to this event should have no parameters and return no value.

This manipulator makes use of pointer capture.

<seealso cref="Clickable.clickedWithEventInfo"/>

<seealso cref="PointerDownEvent"/>

<example>

<![CDATA[

{

button.clicked += () =>

Debug.Log("Button was pressed!");

return button;

]]>

</example>

When you use this constructor, a click event is invoked repeatedly at regular intervals

<param name="handler">The method to call when the clickable is clicked.</param>

<param name="interval">Determines the time delta between event repetition. Value is defined in milliseconds. Applies if interval is greater than @@0@@.</param>

When you use this constructor, the event (usually a `PointerUpEvent` or a `NavigationSubmitEvent`)

<seealso cref="Clickable.clicked"/>

<param name="handler">The method to call when the clickable is clicked.</param>

## Source Code Reference

For complete source code, see: [Clickable.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Clickable.cs)

### Public Properties

- **lastMousePosition**: `Vector2`

### Public Methods

- **CreateButton()**: Returns `VisualElement`

