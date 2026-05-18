# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementMathUtils.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementMathUtils.cs)

---

## Documentation

This element needs to be attached to a panel and must have a valid `VisualElement.layout`.

If the element's transform contains 3-D information, use

<param name="p">The point to transform, in world space.</param>

The result is stored in a Vector3, such that the original point can be reobtained

This element needs to be attached to a panel and must have a valid `VisualElement.layout`.

<param name="p">The point to transform, in world space.</param>

This element needs to be attached to a panel and must receive a valid `VisualElement.layout`.

If the element's transform contains 3-D information, use

<param name="p">The point to transform, in local space.</param>

The result is stored in a Vector3, such that the original point can be reobtained

This element needs to be attached to a panel and must receive a valid `VisualElement.layout`.

<param name="p">The point to transform, in local space.</param>

This element needs to be attached to a panel and must receive a valid `VisualElement.layout`.

<param name="r">The rectangle to transform, in world space.</param>

This element needs to be attached to a panel and must receive a valid `VisualElement.layout`.

<param name="r">The rectangle to transform, in local space.</param>

The elements both need to be attached to a panel and must receive a valid `VisualElement.layout`.

<param name="dest">The element to use as a reference as the destination local space.</param>

<returns>A point in the local space of destination element.</returns>

The elements both need to be attached to a panel and have received a valid `VisualElement.layout`.

<param name="dest">The element to use as a reference as the destination local space.</param>

<returns>A rectangle in the local space of destination element.</returns>

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementMathUtils.cs)

### Public Methods

- **WorldToLocal()**: Returns `Vector2`
- **LocalToWorld()**: Returns `Vector2`
- **ChangeCoordinatesTo()**: Returns `Vector2`

