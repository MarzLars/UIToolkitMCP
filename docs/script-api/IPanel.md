# IPanel

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Panel.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Panel.cs)

---

## Documentation


        Player = 0,

Currently running in the Unity Editor.


    // NOTE: if a new VersionChangeType is added, ComputedStyle.CompareChanges may need to be reworked!
    // NOTE: keep in sync with VersionChangeType.h
    [Flags]


        Bindings = 1 << 0,

persistent data ready


        Hierarchy = 1 << 2,

changes to properties that may have an impact on layout


        StyleSheet = 1 << 4,

changes to styles


        Overflow = 1 << 6,

changes to the border radis


        BorderWidth = 1 << 8,

changes that may impact the world transform (e.g. laid out position, local transform)


        Size = 1 << 10,

The visuals of the element have changed


        Opacity = 1 << 12,

Some color of the element has changed (background-color, border-color, etc.)


        RenderHints = 1 << 14,

The 'transition-property' style of the element has changed (impacts cancelling of ongoing style transitions)


        EventCallbackCategories = 1 << 16,

The DisableRendering flag has changed


        BindingRegistration = 1 << 18,

The data source of the element was changed


        Picking = 1 << 20,
    }

Offers a set of options that describe the intended usage patterns of a `VisualElement`.

usage hints on an element. For example, if both position and color change, you can set both

\\

In the case of transition, when it starts, the system might automatically add missing relevant

because the rendering data for the VisualElement and its descendants is regenerated.


        None = 0,

Optimizes rendering of a `VisualElement` for frequent position and

This option uses the GPU instead of CPU to perform the VisualElement's vertex transformation.\\

Use this option on a VisualElement that changes any of the following style properties:

- `left`

- `right`

- `position`

- `rotate`

- `translate`

frequently, and has many descendants that have their hints set to `DynamicTransform`.


**Remarks:**


the descendants. However it breaks the batch, and adds an extra draw call. The purpose of this hint is to

when a common ancestor changes its transformation or position. In other words, this is an optimisation for

\\

set individual nodes with `DynamicTransform`, and set the ancestor

need to update hundreds of dynamic transforms.\\

__Note__: Don't use both `DynamicTransform` and GroupTransform at the same time on a single VisualElement.

This option reduces stencil state changes and capitalizes on consecutive

\\

has the `overflow: hidden;` style with rounded corners or SVG background.\\

The following illustration shows the number of batches in a single-level masking, a nested masking, and a nested masking with MaskContainer.

The numbers indicate the number of batches.\\

{img MaskContainer.png}\\

B: Nested masking (5 batches)\\

\\

subtree uses two or more levels of masking. This helps minimize consecutive


        MaskContainer = 1 << 2,

Optimizes rendering of a `VisualElement` for frequent color changes, such as a built-in style color being animated.


**Remarks:**


/// Apply this option on a VisualElement that changes any of the following style properties:

- `background-color`

- `color`

- `border-left-color`

- `border-top-color`

- `unity-background-image-tint-color`


        DynamicColor = 1 << 3,
    }

    //keep in sync with RenderHints in C++ (Modules/UIElements/RenderHints.h)
    [Flags]
    enum RenderHints
    {
        None = 0,

        GroupTransform = 1 << 0, // Use uniform matrix to transform children
        BoneTransform = 1 << 1, // Use GPU buffer to store transform matrices
        ClipWithScissors = 1 << 2, // If clipping is requested on this element, prefer scissoring
        MaskContainer = 1 << 3, // Use to prevent the next nested masks from modifying the stencil ref
        DynamicColor = 1 << 4, // Use to store the color in shaderInfo storage
        DynamicPostProcessing = 1 << 5, // Use to force the creation of a nested render tree

        // Whenever we change a render hint, we also set a dirty flag to indicate that it has changed
        // This way, we don't need an additional field to store pending changes
        DirtyOffset = 6,
        DirtyGroupTransform = GroupTransform << DirtyOffset,
        DirtyBoneTransform = BoneTransform << DirtyOffset,
        DirtyClipWithScissors = ClipWithScissors << DirtyOffset,
        DirtyMaskContainer = MaskContainer << DirtyOffset,
        DirtyDynamicColor = DynamicColor << DirtyOffset,
        DirtyDynamicPostProcessing = DynamicPostProcessing << DirtyOffset,
        DirtyAll = DirtyGroupTransform | DirtyBoneTransform | DirtyClipWithScissors | DirtyMaskContainer | DirtyDynamicColor | DirtyDynamicPostProcessing,
    }

    struct PanelClearSettings
    {


        VisualElement visualTree { get; }

This Panel EventDispatcher.

The context type of a Panel affects how it resolves certain styles and receives specific events.

<seealso cref="UIElements.CommandEventBase{T}"/>
        ContextType contextType { get; }

Return the focus controller for this panel.

It doesn't return the following:

- Invisible elements

- Elements with [VisualElement.pickingMode|pickingMode] set to [PickingMode.Ignore]

<seealso cref="VisualElement.visible"/>

<seealso cref="VisualElement.pickingMode"/>

<returns>The top-most VisualElement overlapping the provided point. Null if none was found.</returns>
        VisualElement Pick(Vector2 point);

Finds all VisualElements overlapping the provided point.


**Remarks:**


///- Invisible elements

- Elements with [VisualElement.pickingMode|pickingMode] set to [PickingMode.Ignore]

<seealso cref="VisualElement.visible"/>

<seealso cref="VisualElement.pickingMode"/>

<param name="picked">If not null, the list is cleared and filled with all VisualElements that overlap the specified point.</param>


        ContextualMenuManager contextualMenuManager { get; }

Checks whether any element within the panel has had any changes to its state since the panel was last rendered.


**Remarks:**



        bool isDirty { get; }

Gives the current scaled pixels per point value of the panel.


**Remarks:**


The screen scaling factor could be overriden in the editor settings by the user and is not available in the player.


        float scaledPixelsPerPoint { get; }


    }

Implement this to receive callbacks for visual element changes.

Related To `PanelSettings.SetPanelChangeReceiver`

This method is exclusively available in development builds and the Editor, as it serves as a debug feature that complements the profiling of an application.


**Remarks:**


Related to `PanelSettings.SetPanelChangeReceiver`

<param name="element"> The element that changed.</param>

//

This method is exclusively available in development builds and the Editor, as it serves as a debug feature that complements the profiling of an application.


**Remarks:**


/// Since this is called for every change made to any visual element within the panel, the overhead is not negligible.

## Source Code Reference

For complete source code, see: [IPanel.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Panel.cs)

### Public Properties

- **ContextType**: `enum`
- **VersionChangeType**: `enum`
- **UsageHints**: `enum`
- **currentOffset**: `Matrix4x4`
- **mousePosition**: `Vector2`
- **currentWorldClip**: `Rect`
- **repaintEvent**: `Event`
- **IDebugPanelChangeReceiver**: `interface`
- **enableAssetReload**: `bool`
- **scaledPixelsPerPoint**: `float`
- **referenceSpritePixelsPerUnit**: `float`
- **isDirty**: `bool`
- **contextualMenuManager**: `ContextualMenuManager`
- **isFlat**: `bool`
- **panelDebug**: `IPanelDebug`
- **liveReloadSystem**: `ILiveReloadSystem`
- **timerEventScheduler**: `TimerEventScheduler`
- **ownerObject**: `ScriptableObject`
- **contextType**: `ContextType`
- **saveViewData**: `SavePersistentViewData`

### Public Methods

- **OnVisualElementChange()**: Returns `void`
- **Dispose()**: Returns `void`
- **Pick()**: Returns `VisualElement`
- **Render()**: Returns `void`
- **ResetRendering()**: Returns `void`
- **ValidateFocus()**: Returns `void`
- **TimeSinceStartupMs()**: Returns `long`
- **PickAll()**: Returns `VisualElement`
- **ValidateLayout()**: Returns `void`
- **UpdateAnimations()**: Returns `void`
- **UpdateBindings()**: Returns `void`
- **UpdateDataBinding()**: Returns `void`
- **TickSchedulingUpdaters()**: Returns `void`
- **ApplyStyles()**: Returns `void`
- **UpdateAssetTrackers()**: Returns `void`
- **UpdateForRepaint()**: Returns `void`
- **DirtyStyleSheets()**: Returns `void`
- **Repaint()**: Returns `void`

