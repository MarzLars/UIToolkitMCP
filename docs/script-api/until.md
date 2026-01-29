# until

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/GameObjects/WorldSpaceInput.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/WorldSpaceInput.cs)

---

## Documentation

<param name="worldRay">A ray specified in absolute coordinates.</param>

Results are appended in drawing order.

<param name="document">The UI Document to pick from.</param>

<param name="outResults">All elements that intersect the ray, in draw order from closest to farthest.</param>

<param name="worldRay">A ray specified in absolute coordinates.</param>

<returns>The closest pickable element that intersects the ray if any, or null if there are none.</returns>

<param name="worldRay">A ray specified in absolute coordinates.</param>

<returns>True if a pickable element intersects the ray, false otherwise.</returns>

<param name="element">The element to intersect with.</param>

<param name="pickResult">The result of the ray intersection.</param>

<returns>True if the ray intersects the element.</returns>

Doesn't always have a UIDocument component associated with it.

If @@document@@ is null, then @@pickedElement@@ is also null.

If @@pickedElement@@ is null, this is the same as @@point@@..

<param name="maxDistance">The length of the ray, or positive infinity if unspecified.</param>

<returns>A document with its closest element that intersects the ray if any, or PickResult.Empty if there are none.</returns>

world coordinate system.


**Remarks:**
The @@element@@ has to be parented to a document.

<param name="localPoint">The point to transform.</param>

world coordinate system.


**Remarks:**
The @@element@@ has to be parented to a document.

<param name="localDelta">The vector to transform.</param>

local coordinate system.


**Remarks:**
The @@element@@ has to be parented to a document.

<param name="worldPoint">The point to transform.</param>

local coordinate system.


**Remarks:**
The @@element@@ has to be parented to a document.

<param name="worldDelta">The vector to transform.</param>

## Source Code Reference

For complete source code, see: [until.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/WorldSpaceInput.cs)

### Public Properties

- **PickResult**: `struct`

### Public Methods

- **Pick3D()**: Returns `VisualElement`
- **PickAll3D()**: Returns `void`
- **PickElement3D()**: Returns `bool`
- **PickDocument3D()**: Returns `PickResult`
- **LocalPointToGameObjectWorldSpace()**: Returns `Vector3`
- **LocalDeltaToGameObjectWorldSpace()**: Returns `Vector3`
- **GameObjectWorldSpaceToLocalPoint()**: Returns `Vector3`
- **GameObjectWorldSpaceToLocalDelta()**: Returns `Vector3`

