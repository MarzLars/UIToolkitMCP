# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementMeshModifier.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementMeshModifier.cs)

---

## Documentation

its vertex data is copied to the GPU.

<param name="callback">Callback invoked on the main thread.</param>

descendant. Panel-wide post-processing is achieved by registering recursively on the panel

<param name="priority">Dominant ordering axis for callback invocation. Lower values run first.</param>

Equivalent to calling `RemoveMeshModifier` for each registered callback, but

equality; pass the same callback reference that was registered. No-op if the callback is not

is removed.

<param name="callback">The callback reference passed to `AddMeshModifier`.</param>

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementMeshModifier.cs)

### Public Methods

- **AddMeshModifier()**: Returns `void`
- **ClearMeshModifiers()**: Returns `void`
- **RemoveMeshModifier()**: Returns `void`

