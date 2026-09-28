# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElement.Components.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElement.Components.cs)

---

## Documentation

USS custom property values. The style counterpart of `MarkDirtyRepaint`.

targeting that field (for example `${component:Tooltip}.text`) can publish the new value.


**Remarks:**


its own; call this afterwards to drive bindings. The `UITKSG029` analyzer flags misses.

`[OnComponentChanged]` handler runs once during the next update.


**Remarks:**


`ref GetComponent&lt;T&gt;()`. Unity doesn't detect direct writes, so without this call

`SetXxx` setters or a data binding; both call it for you. If no component of type

<typeparam name="T">A component struct declared with `VisualElementComponentAttribute`.</typeparam>

Thrown if a component of the same type is already attached (an element holds at most one

<see cref="ReleaseComponentResourcesAttribute">[ReleaseComponentResources]</see> method.

element. If the component is not attached yet, it is added first.


**Remarks:**


`GetComponent{T}` and the component data is not changed. When it is not attached,

component is created with the type's `UxmlCreateInstanceMethodAttribute` method

<returns>

valid until a component is added to or removed from this element.

The reference points at the component's live storage: assigning to its fields updates the

the component is removed.

<typeparam name="T">A component struct declared with `VisualElementComponentAttribute`.</typeparam>

<exception cref="InvalidOperationException">

</exception>

element, or a null reference when the component is not attached. This method never adds

Always check the returned reference with

writing through a null reference throws `NullReferenceException`.

`GetComponent{T}`.

<typeparam name="T">A struct decorated with `VisualElementComponentAttribute`.</typeparam>

A reference to the live component data, or a null reference when the component is not

this element.

<returns><see langword="true"/> if the component is attached; otherwise <see langword="false"/>.</returns>

<exception cref="InvalidOperationException">

</exception>

<returns><see langword="true"/> if a component was removed; <see langword="false"/> if none was attached.</returns>

Thrown if this element's resources have been released, or if called from a

</exception>

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElement.Components.cs)

### Public Methods

- **MarkDirtyStyles()**: Returns `void`
- **NotifyComponentChanged()**: Returns `void`

