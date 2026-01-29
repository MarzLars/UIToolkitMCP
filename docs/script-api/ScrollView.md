# ScrollView

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/ScrollView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ScrollView.cs)

---

## Documentation

`ScrollView.mode`


**Remarks:**


/// For more information, refer to [wiki:UIE-uxml-element-ScrollView|UXML element ScrollView].

Requires elements with the height property explicitly defined. A ScrollView configured with this mode has the


        Vertical,

Configure `ScrollView` for horizontal scrolling.


**Remarks:**


`ScrollView.horizontalVariantUssClassName` class in its class list.

elements height stretch else they require a height.

Requires elements with the height property explicitly defined. A ScrollView configured with this mode has the

The difference with the vertical mode is that content will not wrap.


        Auto,

The scroll bar is always visible.


        Hidden
    }

Displays its contents inside a scrollable frame. For more information, refer to the [wiki:UIE-uxml-element-ScrollView|ScrollView] user manual page.


**Remarks:**


This example creates a ScrollView that contains multiple labels and uses a Button to scroll to a selected label.

</example>


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>


        [CreateProperty]


        [CreateProperty]


        [CreateProperty]


        [Obsolete("showHorizontal is obsolete. Use horizontalScrollerVisibility instead")]


        [Obsolete("showVertical is obsolete. Use verticalScrollerVisibility instead")]


        [CreateProperty]

When scrolling, the page size is applied to the offset for each scroll step, so the final offset will be the page size multiplied by the number of steps.

SA: [UIElements.BaseSlider_1.pageSize]

The speed is calculated by multiplying the page size by the specified value. For example, a value of `2` means that each scroll movement covers a distance equal to twice the width of the page.\\


        [CreateProperty]

This property takes precedence over the @@--unity-metrics-single_line-height@@ USS variable. If both the property and the variable

The following example demonstrates how to use the @@mouseWheelScrollSize@@ property to control the "speed" of a scroll

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ScrollView_MouseWheelScrollSize.cs"/>

The deceleration rate is the speed reduction per second. A value of 0.5 halves the speed each second. A value of 0 stops the scrolling immediately.

Elasticity is only used when `touchScrollBehavior` is set to Elastic.


            Unrestricted,

The content position can overshoot the ScrollView boundaries, but then "snaps" back within them.


            Clamped,
        }


        [CreateProperty]

the limits of the scrollable area.


**Remarks:**


The following example demonstrates how to use the NestedInteractionKind enum to control the behavior of a nested ScrollView.

</example>

NestedInteractionKind.StopScrolling is used. For scroll wheel input, NestedInteractionKind.ForwardScrolling is used.


            StopScrolling,

Scrolling will continue to the parent when no movement is possible in the scrolled direction.


        [CreateProperty]

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ScrollView_ScrollTo.cs"/>

<seealso cref="ScrollViewMode.Horizontal"/>

<seealso cref="ScrollViewMode.Vertical"/>

<seealso cref="ScrollViewMode.VerticalAndHorizontal"/>

<seealso cref="ScrollViewMode.Horizontal"/>

<seealso cref="ScrollViewMode.Vertical"/>

<seealso cref="ScrollViewMode.VerticalAndHorizontal"/>

<seealso cref="ScrollViewMode.Horizontal"/>

<seealso cref="ScrollViewMode.Vertical"/>

<seealso cref="ScrollViewMode.VerticalAndHorizontal"/>

<undoc/>
        // TODO why does this exist? It is set in all cases...

<seealso cref="ScrollViewMode"/>


**Remarks:**


Writing to this property modifies the class list of the ScrollView according to the specified value of

the class list matching the new value is added.

## Source Code Reference

For complete source code, see: [ScrollView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ScrollView.cs)

### Public Properties

- **ScrollViewMode**: `enum`
- **ScrollerVisibility**: `enum`
- **horizontalScrollerVisibility**: `ScrollerVisibility`
- **verticalScrollerVisibility**: `ScrollerVisibility`
- **elasticAnimationIntervalMs**: `long`
- **showHorizontal**: `bool`
- **showVertical**: `bool`
- **scrollOffset**: `Vector2`
- **horizontalPageSize**: `float`
- **verticalPageSize**: `float`
- **mouseWheelScrollSize**: `float`
- **scrollDecelerationRate**: `float`
- **elasticity**: `float`
- **TouchScrollBehavior**: `enum`
- **touchScrollBehavior**: `TouchScrollBehavior`
- **NestedInteractionKind**: `enum`
- **nestedInteractionKind**: `NestedInteractionKind`
- **contentViewport**: `VisualElement`
- **horizontalScroller**: `Scroller`
- **verticalScroller**: `Scroller`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **ScrollTo()**: Returns `void`

