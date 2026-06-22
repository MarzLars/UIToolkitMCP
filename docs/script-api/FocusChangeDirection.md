# FocusChangeDirection

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/FocusController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/FocusController.cs)

---

## Documentation

The focus is used to designate an element that will receive keyboard and navigation events.

You can retrieve a panel's current focused element using its FocusController's `FocusController.focusedElement` property.

<example>

</example>

<seealso cref="UIElements.NavigationEventBase{T}"/>

If false, the element can't receive focus.

Setting the `tabIndex` value to less than `0` (for example, `−1`) removes the element from the focus ring and tab navigation.

If the element delegates its focus, when it becomes focused, one of its child or recursive child

///\\

Instead, it's determined automatically using a set of rules.

The chosen element will be the first child or recursive child that

- can be <see cref="Focusable.canGrabFocus">focused</see>,

- is not the child or recursive child of a content container or of another element that delegates focus, and

/// For more information, refer to [wiki:UIE-focus-order|Focus system in UI Toolkit].

<seealso cref="VisualElement.contentContainer"/>

This property is used to prevent certain elements from receiving the focus in this case (e.g Foldout)

Returns true if the element meets all the following conditions:

- It's <see cref="Focusable.focusable">focusable</see>.

- It's <see cref="VisualElement.visible">visible</see>.

- It has a parent that <see cref="Focusable.delegatesFocus">delegates focus</see>, and the parent must also meet these conditions.

For more information, refer to [wiki:UIE-focus-order|Focus system in UI Toolkit].

<seealso cref="IStyle.display"/>

The element might not become focused if:

- The element cannot be <see cref="Focusable.canGrabFocus">focused</see>.

/// A Panel's current focused element can be retrieved using its FocusController's focusedElement property.

As long as an element is focused, it receives all keyboard and navigation events sent to its Panel.

If a focus change is requested during another event's propagation, the change is only applied

<code source="../Tests/UIElementsExamples/Assets/Examples/FocusExample.cs"/>

<seealso cref="IFocusRing"/>

If the element is not currently focused, calling this method has no effect.

<seealso cref="Focusable.Focus"/>

Focus ring implementations can move the focus in various direction; they can derive from this class to formalize the various ways the focus can change from one element to the other.

<undoc/>

When the `EventDispatcher` processes navigation and pointer events, it

Each Panel's `FocusController` has a focus ring implementation automatically assigned to it.

/// For Editor-type Panels, only `NavigationMoveEvent` events in the following directions are

///- `NavigationMoveEvent.Direction.Next`,

/// For Player-type Panels, the following directions are also considered:

- `NavigationMoveEvent.Direction.Left`,

- `NavigationMoveEvent.Direction.Up`,

/// See also

an example of a workaround solution if the assigned focus ring navigation rules don't correspond to your needs.

<seealso cref="FocusController"/>

For example, in a `VisualElementFocusRing`, when the Tab key is pressed, the focus change

/// When the `EventDispatcher` processes navigation and pointer events, it automatically calls

/// The Focus event's `IFocusEvent.direction` matches the value returned by this method to


        FocusChangeDirection GetFocusChangeDirection(Focusable currentFocusable, EventBase e);

Get the next element in the given direction.


**Remarks:**


`VisualElementFocusChangeDirection.right` by default is the element to the right of the current

More precisely, the next element is the focusable element whose `Focusable.tabIndex` is the

If no such element is found, the process wraps around and continues looking for a focusable element

/// When the `EventDispatcher` processes navigation and pointer events, it automatically calls

/// The Focus event's `EventBase.target` matches the value returned by this method to generate it.

Each Panel should have an instance of this class. The instance holds the currently focused VisualElement and is responsible for changing it.

<seealso cref="IPanel"/>

This will prevent the event from changing the current focused VisualElement or triggering focus events.

<param name="evt">The event to be ignored.</param>

In general this will have no effect if the event is not a

## Source Code Reference

For complete source code, see: [FocusChangeDirection.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/FocusController.cs)

### Public Properties

- **focusable**: `bool`
- **tabIndex**: `int`
- **delegatesFocus**: `bool`
- **unspecified**: `FocusChangeDirection`
- **none**: `FocusChangeDirection`
- **IFocusRing**: `interface`
- **FocusController**: `class`
- **focusedElement**: `Focusable`

### Public Methods

- **Focus()**: Returns `void`
- **Blur()**: Returns `void`
- **IgnoreEvent()**: Returns `void`

