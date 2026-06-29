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

Flags describing how a texture must be used in the context of a draw command.

<seealso cref="MeshGenerationContext.DrawMesh"/>


        None = 0,

The texture must not be included in the dynamic atlas.

In premultiplied alpha, the RGB channels have been multiplied by the alpha channel. A typical source is a

(e.g. Blend SrcAlpha OneMinusSrcAlpha), which stores premultiplied results. Some operations may require


        PremultipliedAlpha = 1 << 1,
    }

Optional per-vertex channels that a UI Toolkit panel can opt into for use by custom shaders.


**Remarks:**



    [Flags]

No optional channels.
        None      = 0,

TEXCOORD2 (float4).
        TexCoord2 = 1 << 6,

NORMAL (float3 in the public API; padded to float4 on the GPU).
        Normal    = 1 << 1,

Mirrors CSS's per-element paint phases (Background → Border → Content) with Mask as the stencil bracket.

doesn't distort stencil geometry.

Element's background fill (color or background image).
        Background,

Element's content — text, image, custom geometry from `generateVisualContent`, or `Painter2D` output.
        Content,

`MeshGenerationContext.DrawMesh(ref UIMesh, Texture)`.


**Remarks:**


(`uv1`, `uv2`, `uv3`, `normal`, `tangent`)

`IPanel.extraVertexChannels`. Providing a slice for a channel the panel did not enable

<para>Each non-empty extras slice must have `Length == vertices.Length`; mismatches are logged

<para>Channels enabled on the panel but left empty in the draw are zero-filled.</para>

flush time, not at the call site. Slices returned by

guaranteed valid through the flush; user-supplied slices must remain valid until the same flush point.</para>

Vertex positions, colors, and UVs.

Triangle list indices.

UV1 coordinates (TEXCOORD1 in the shader).

UV2 coordinates (TEXCOORD2 in the shader).

UV3 coordinates (TEXCOORD3 in the shader).

Vertex normals. Padded to `Vector4` on the GPU (`.w` zero-filled).

Vertex tangents (`.w` = handedness).

You can use this object to fill the values for the vertices and indices only during a callback to the `VisualElement.generateVisualContent` delegate. Do not store the passed `MeshWriteData` outside the scope of `VisualElement.generateVisualContent` as Unity could recycle it for other callbacks.

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

channel set in <paramref name="extraChannels"/>.


**Remarks:**


<paramref name="indexCount"/> = 0 to skip the index allocation, so callers can mix-and-match

`UIMesh` values).</para>

"channel not provided" and zero-fills them at draw time. Use only during the mesh generation phase.</para>

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

You can generate the mesh content later because the renderer doesn't immediately process the mesh. The mesh

/// The renderer will process the mesh when the following conditions are met:

- All registered generation dependencies have completed

<param name="indices">The triangle list indices. Must be a multiple of 3. All indices must be initialized.</param>

<param name="textureOptions">Flags that apply to the provided texture for this draw call.</param>

<para>The slices inside <paramref name="mesh"/> are read at flush time (end of the current repaint

<para>`UIMesh.vertices` and `UIMesh.indices` are mandatory. Each non-empty

draw is dropped.</para>

`DrawData.userData` in mesh modifiers.

<param name="vertices">The vertices to be drawn. All referenced vertices must be initialized.</param>

<param name="texture">An optional texture to be applied. Pass null to rely on vertex colors only.</param>

`DrawData.userData` in mesh modifiers.

<param name="vertices">The vertices to be drawn. All referenced vertices must be initialized.</param>

<param name="texture">An optional texture to be applied. Pass null to rely on vertex colors only.</param>

<param name="userData">User-defined identifier surfaced on `DrawData.userData`.</param>

surfaced on `DrawData.userData` in mesh modifiers.


**Remarks:**
See `DrawMesh(ref UIMesh, Texture)` for the lifetime contract and validation rules.

surfaced on `DrawData.userData` in mesh modifiers.


**Remarks:**
See `DrawMesh(ref UIMesh, Texture)` for the lifetime contract and validation rules.

<param name="offset">The position offset where to draw the vector image.</param>

<param name="scale">The scale of the vector image</param>

surfaced on `DrawData.userData` in mesh modifiers.

<param name="vectorImage">The vector image to draw.</param>

<param name="rotationAngle">The rotation of the vector image.</param>

<param name="userData">User-defined identifier surfaced on `DrawData.userData`.</param>

<param name="pos">The start position where the text will be displayed.</param>

<param name="color">The text color.</param>

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
- **TextureOptions**: `enum`
- **ExtraVertexChannels**: `enum`
- **UIMesh**: `struct`
- **vertices**: `NativeSlice<Vertex>`
- **indices**: `NativeSlice<ushort>`
- **uv1**: `NativeSlice<Vector4>`
- **uv2**: `NativeSlice<Vector4>`
- **uv3**: `NativeSlice<Vector4>`
- **normal**: `NativeSlice<Vector3>`
- **tangent**: `NativeSlice<Vector4>`
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
- **Init()**: Returns `ColorId`
- **AllocateTempMesh()**: Returns `void`
- **Allocate()**: Returns `MeshWriteData`
- **DrawMesh()**: Returns `void`
- **DrawVectorImage()**: Returns `void`
- **DrawText()**: Returns `void`
- **DrawTextStandard()**: Returns `void`
- **GetTempMeshAllocator()**: Returns `void`
- **InsertMeshGenerationNode()**: Returns `void`
- **AddMeshGenerationJob()**: Returns `void`

