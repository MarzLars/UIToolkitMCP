# PanelSettings

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/GameObjects/PanelSettings.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/PanelSettings.cs)

---

## Documentation


        ConstantPixelSize,

Elements stay the same physical size (displayed size) regardless of screen size and resolution.


        ScaleWithScreenSize
    }

Options that specify how to scale the panel area when the aspect ratio of the current screen resolution


        MatchWidthOrHeight,

Crops the panel area horizontally or vertically so the panel size never exceeds


        Shrink,

Expand the panel area horizontally or vertically so the panel size is never


        Expand
    }

If the bounding box of the document changes, the collider will be automatically udpated


        [InspectorName("Match 3-D bounding box")]
        MatchBoundingBox = 0,

Leave UI Document as is. Do not modify existing colliders or add new ones automatically.


**Remarks:**


the document.


**Remarks:**



        [InspectorName("Keep existing colliders (if any)")]
        Keep = 1,

Automatically adds a BoxCollider that matches the world bound rectangle of the document.


**Remarks:**


If the document contains elements that overflow outside of its (0, 0, width, height) rect,

This option is better for performance than `AddAutoUpdatedBoudingBoxCollider`.

UXML-file based UI in the Game view.


**Remarks:**


The PanelSettings contains the rendering settings for the UI, including the scale mode and the sort order.

using multiple UI screens in the same scene.

For more information on the different properties of the PanelSettings object, refer to [wiki:UIE-Runtime-Panel-Settings|Panel Settings properties reference].

By default this is the main Unity style sheet, which contains default styles for Unity-supplied

This can be used to display UI on a 3D geometry in the Scene, to perform manual UI post-processing, or

/// When the project color space is linear, you should use a Render Texture whose format is

/// When the project color space is gamma, you should use a Render Texture whose format is

For sprites that have the same Pixels Per Unit value as the Reference Pixels Per Unit value in the

the panel transform.


**Remarks:**


When `PanelSettings.scaleMode` is set to `ConstantPhysicalSize`, Unity compares

/// If Unity cannot determine the screen DPI, it uses the `PanelSettings.fallbackDpi` instead.

If the screen resolution is larger than the reference resolution, Unity scales

Unity scales the UI according to the `PanelSettings.screenMatchMode`.

does not match the reference resolution.

order relative to other panels.


**Remarks:**


This setting is relevant only when no render texture is applied, as the renderTexture takes precedence.

Only the first panel (according to the sorting order) must clear the depth/stencil buffer.

\\

UI Toolkit uses the depth/stencil buffer to perform masking operations, refer to [Overflow.Hidden] for more inforamtion.

This failure triggers efficient push/pop operations within the stencil buffer, enabling effective masking.

To ensure this process functions correctly, the depth buffer values

a gap (controlled by [PanelSettings.depthClearValue]) where masks can be positioned to fail

representing the stack of masking shapes.

\\

as:

- Normal meshes might become invisible

This is typically used when a RenderTexture is assigned to [PanelSettings.targetTexture].

The color is specified as a "straight" color but will internally be converted to "premultiplied" before

A value of 0 means that the UI renderer will use its own default.

If set too low, more vertex buffers may be required, which may increase the number of draw calls and hinder performance.

This is only applicable when the project is in linear color space and when the panel is being rendered into

space is set to gamma.

You can use this feature to combine the SRGB Render Texture from your camera with the UNORM Render Texture of the UI.

\\

Additional notes:

- Render Texture read/write operations require additional bandwidth. This could negatively impact performance.

- When sampling from a texture, the interpolation between texels or mip levels is still performed in linear color space. This might lead to some visual differences between this mode and the same UI in a gamma project.


        [SerializeField]

This method is available only in development builds and the editor, as it is a debug feature to go along the profiling of an application.


**Remarks:**


/// As this is called at every change marked on any visual element of the panel, the overhead is not negligible.

/// The following example uses the panelChangeReceiver in a game.

<code lang="cs"><![CDATA[{code Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ChangeLogger.cs}]]></code>

this function returns the input value.


**Remarks:**


against MeshColliders in the Scene. The function can first check whether the GameObject that the ray hits

@@RaycastHit.textureCoord@@ in the texture's pixel space. Return a coordinate outside the panel to

/// A non-zero z value should be returned when the element at the given screen coordinate contains

This z value is used by pointer events when converting between panel position and local position.

<param name="screenToPanelSpaceFunction">The translation function. Set to @@null@@ to revert to the default behavior.</param>

this function returns the input value.


**Remarks:**


against MeshColliders in the Scene. The function can first check whether the GameObject that the ray hits

@@RaycastHit.textureCoord@@ in the texture's pixel space. Return a coordinate outside the panel to

/// If the panel contains elements with

`PanelSettings.SetScreenToPanelSpaceFunction3D` method instead.

<param name="screenToPanelSpaceFunction">The translation function. Set to @@null@@ to revert to the default behavior.</param>

<code source="../../../../Tests/EditModeAndPlayModeTests/UIElementsSamples/Assets/Runtime/Rendering/UITextureProjection.cs"/>

## Source Code Reference

For complete source code, see: [PanelSettings.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/PanelSettings.cs)

### Public Properties

- **PanelScaleMode**: `enum`
- **PanelScreenMatchMode**: `enum`
- **themeStyleSheet**: `ThemeStyleSheet`
- **targetTexture**: `RenderTexture`
- **scaleMode**: `PanelScaleMode`
- **referenceSpritePixelsPerUnit**: `float`
- **scale**: `float`
- **referenceDpi**: `float`
- **fallbackDpi**: `float`
- **referenceResolution**: `Vector2Int`
- **screenMatchMode**: `PanelScreenMatchMode`
- **match**: `float`
- **sortingOrder**: `float`
- **targetDisplay**: `int`
- **bindingLogLevel**: `BindingLogLevel`
- **clearDepthStencil**: `bool`
- **depthClearValue**: `float`
- **clearColor**: `bool`
- **colorClearValue**: `Color`
- **vertexBudget**: `UInt32`

### Public Methods

- **SetPanelChangeReceiver()**: Returns `void`
- **SetScreenToPanelSpaceFunction3D()**: Returns `void`
- **SetScreenToPanelSpaceFunction()**: Returns `void`

