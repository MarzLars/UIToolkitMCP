# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementMathUtils.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementMathUtils.cs)

---

## Documentation

Attach the element to a panel. The element must have a valid `VisualElement.layout`.

If the element's transform contains 3D information, use

<param name="p">The point to transform, in panel coordinates.</param>

The result is stored in a Vector3, such that the original point can be reobtained

This element needs to be attached to a panel and must have a valid `VisualElement.layout`.

<param name="p">The point to transform, in world space.</param>

<para>Attach the element to a panel. The element must have a valid `VisualElement.layout`.

<para>If the element's transform contains 3D information, use

<param name="p">The point to transform, in local space.</param>

The result is a Vector3. To get the original point back, apply `WorldToLocal3D` with the same element to the returned point.


**Remarks:**


Otherwise, this method might return invalid results.

<param name="ele">The element to use as a reference for the local space.</param>

<returns>A point in panel coordinates.</returns>

Attach the element to a panel. The element must have a valid `VisualElement.layout`.

<param name="r">The rectangle to transform, in panel coordinates.</param>

Attach the element to a panel. The element must have a valid `VisualElement.layout`.

<param name="r">The rectangle to transform, in local space.</param>

Attach both elements to a panel. Each element must have a valid `VisualElement.layout`.

<param name="dest">The element to use as a reference as the destination local space.</param>

<returns>A point in the local space of destination element.</returns>

Attach both elements to a panel. Each element must have a valid `VisualElement.layout`.

<param name="dest">The element to use as a reference as the destination local space.</param>

<returns>A rectangle in the local space of destination element.</returns>

<returns>The root IPanelComponent, or null if none is found.</returns>

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementMathUtils.cs)

### Public Methods

- **WorldToLocal()**: Returns `Vector2`
- **LocalToWorld()**: Returns `Vector2`
- **ChangeCoordinatesTo()**: Returns `Vector2`
- **FindRootPanelComponent()**: Returns `IPanelComponent`

