# TempMeshAllocator

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Renderer/UIRTempMeshAllocator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRTempMeshAllocator.cs)

---

## Documentation


    [NativeContainer]
    [NativeContainerIsReadOnly]

You can only call this method during the mesh generation phase of the panel and shouldn't use it beyond.

<param name="vertexCount">The number of vertices to allocate, with a maximum limit of 65535 (or UInt16.MaxValue).</param>

<param name="vertices">The returned vertices.</param>

## Source Code Reference

For complete source code, see: [TempMeshAllocator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRTempMeshAllocator.cs)

### Public Properties

- **TempMeshAllocator**: `struct`

### Public Methods

- **AllocateTempMesh()**: Returns `void`
- **CreateNativeHandle()**: Returns `void`
- **Clear()**: Returns `void`
- **Dispose()**: Returns `void`

