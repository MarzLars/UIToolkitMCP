# Vertex

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Renderer/UIRMeshGenerationContext.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRMeshGenerationContext.cs)

---

## Documentation


    [StructLayout(LayoutKind.Sequential)]

Note this value is a `Vector3`. If the vertex represents flat UI geometry, set the z component of this position field to `Vertex.nearZ`. The position value is relative to the `VisualElement`'s local rectangle top-left corner. The coordinate system is X+ to the right, and Y+ goes down. The unit of position is `VisualElement` points. When the vertices are indexed, the triangles described must follow clock-wise winding order given that Y+ goes down.

This value is multiplied by any other color information of the `VisualElement` (e.g. texture). Use `Color.white` to disable tinting on the vertex.

This is used to sample the required region of the associated texture if any. Values outside the range 0..1 are currently not supported and could lead to undefined results.

See `MeshGenerationContext.DeferMeshGeneration`.


        Fork,

Qualifies a callback that performs significant work on the main thread, but eventually dispatches jobs.


        Work,
    }

An enum used to describe the texture used in a `MeshGenerationContext` allocation.


        None = 0,

The texture should not be included in the dynamic atlas.


        PremultipliedAlpha = 1 << 1,
    }

Represents the vertex and index data allocated for drawing the content of a `VisualElement`.


**Remarks:**


<undoc/>
        [Obsolete("Texture coordinates are now automatically remapped by the renderer. You are no longer required to remap the UV coordinates in the provided rectangle.")]


**Remarks:**


After each invocation to this function, the internal counter for the next vertex is automatically incremented.

/// Note that calling `SetNextVertex` fewer times than the allocated number of vertices will leave the remaining vertices with random values as `MeshGenerationContext.Allocate` does not initialize the returned data to 0 to avoid redundant work.


**Remarks:**


After each invocation to this function, the internal counter for the next index is automatically incremented.

The index values provided refer directly to the vertices allocated in the same `MeshWriteData` object. Thus, an index of 0 means the first vertex and index 1 means the second vertex and so on.


**Remarks:**



        [MethodImpl(MethodImplOptions.AggressiveInlining)]

When this method is called, it is not possible to use `SetNextVertex` to fill the allocated vertices array.

<param name="vertices">The array of vertices to copy from. The length of the array must match the allocated vertex count.</param>

When this method is called, it is not possible to use `SetNextVertex` to fill the vertices.

When this method is called, it is not possible to use `SetNextVertex` to fill the allocated vertices array.

<param name="vertices">The array of vertices to copy from. The length of the array must match the allocated vertex count.</param>

When this method is called, it is not possible to use `SetNextVertex` to fill the vertices.


**Remarks:**



**Remarks:**


<para>

method and then filling the vertices and indices.

<para>

issue drawing commands. You can find an example in the `Painter2D` documentation.

<para>

vertex values to map it to the resulting mesh. UI Toolkit might store the texture in an internal atlas.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/TexturedElement.cs"/>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Painter2DDrawing.cs"/>

You can only call this method during the mesh generation phase of the panel and shouldn't use it beyond.

<param name="vertexCount">The number of vertices to allocate. The maximum is 65535 (or UInt16.MaxValue).</param>

<param name="vertices">The returned vertices.</param>

<param name="indexCount">The number of triangle list indices to allocate. Each 3 indices represent one triangle, so this value should be multiples of 3.</param>

<returns>An object that gives access to the newely allocated data. If the returned vertex count is 0, the allocation failed (the system ran out of memory).</returns>

See `Vertex.position` for details on geometry generation conventions. When the vertices are indexed, the triangles described must follow clock-wise winding order given that Y+ goes down.


**Remarks:**


You can call `MeshGenerationContext.Allocate()` multiple times for the same element or context.

SA: [MeshWriteData]

<example>

</example>

You can generate the mesh content later because the renderer doesn't immediately process the mesh. The mesh

/// The renderer will process the mesh when the following conditions are met:

- All registered generation dependencies have completed

<param name="indices">The triangle list indices. Must be a multiple of 3. All indices must be initialized.</param>

<param name="offset">The position offset where to draw the vector image.</param>

<param name="scale">The scale of the vector image</param>

<param name="pos">The start position where the text will be displayed.</param>

<param name="color">The text color.</param>

have the same scope as those allocated by `AllocateTempMesh`.

<param name="allocator">The allocator.</param>

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/MeshGenerationContext_AddMeshGenerationJob.cs"/>

To keep the CPU as busy as possible, the renderer prioritizes callbacks based on the following order:

2. `MeshGenerationCallbackType.WorkThenFork`

<param name="userData">The data provided to the callback.</param>

<param name="isJobDependent">Indicates if the callback requires the execution of a job to be completed.</param>

## Source Code Reference

For complete source code, see: [Vertex.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRMeshGenerationContext.cs)

### Public Properties

- **Vertex**: `struct`
- **MeshWriteData**: `class`
- **vertexCount**: `int`
- **indexCount**: `int`
- **MeshGenerationContext**: `class`
- **visualElement**: `VisualElement`
- **painter2D**: `Painter2D`

### Public Methods

- **SetNextVertex()**: Returns `void`
- **SetNextIndex()**: Returns `void`
- **SetAllVertices()**: Returns `void`
- **SetAllIndices()**: Returns `void`
- **Init()**: Returns `ColorPage`
- **AllocateTempMesh()**: Returns `void`
- **Allocate()**: Returns `MeshWriteData`
- **DrawMesh()**: Returns `void`
- **DrawVectorImage()**: Returns `void`
- **DrawText()**: Returns `void`
- **GetTempMeshAllocator()**: Returns `void`
- **InsertMeshGenerationNode()**: Returns `void`
- **AddMeshGenerationJob()**: Returns `void`

