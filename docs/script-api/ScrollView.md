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

<seealso cref="ScrollViewMode"/>


**Remarks:**


Writing to this property modifies the class list of the ScrollView according to the specified value of

the class list matching the new value is added.


        [UxmlAttribute]
        [CreateProperty]


        [UxmlAttribute]
        [CreateProperty]


        [UxmlAttribute]
        [CreateProperty]


        [Obsolete("showHorizontal is obsolete. Use horizontalScrollerVisibility instead")]


        [Obsolete("showVertical is obsolete. Use verticalScrollerVisibility instead")]

You can set this property to scroll the content to a specific position. For example,

Refer to the [wiki:UIE-uxml-element-ScrollView|UXML element ScrollView] user manual page for an example.

When scrolling, the page size is applied to the offset for each scroll step, so the final offset will be the page size multiplied by the number of steps.

SA: [UIElements.BaseSlider_1.pageSize]

The speed is calculated by multiplying the page size by the specified value. For example, a value of `2` means that each scroll movement covers a distance equal to twice the width of the page.\\


        [UxmlAttribute]
        [CreateProperty]

This property takes precedence over the @@--unity-metrics-single_line-height@@ USS variable. If both the property and the variable

The following example demonstrates how to use the @@mouseWheelScrollSize@@ property to control the "speed" of a scroll

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ScrollView_MouseWheelScrollSize.cs"/>


        [UxmlAttribute("touch-scroll-type")]
        [CreateProperty]

The deceleration rate is the speed reduction per second. A value of 0.5 halves the speed each second. A value of 0 stops the scrolling immediately.

Elasticity is only used when `touchScrollBehavior` is set to Elastic.


        [UxmlAttribute]
        [CreateProperty]


            Unrestricted,

The content position can overshoot the ScrollView boundaries, but then "snaps" back within them.


            Clamped,
        }

Options for controlling how nested `ScrollView` handles scrolling when reaching

This Enum is only relevant when used for a ScrollView that is nested inside another ScrollView.

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ScrollView_NestedInteraction_Example.cs"/>

NestedInteractionKind.StopScrolling is used. For scroll wheel input, NestedInteractionKind.ForwardScrolling is used.


            StopScrolling,

Scrolling will continue to the parent when no movement is possible in the scrolled direction.

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ScrollView_ScrollTo.cs"/>

The `verticalScroller` property provides access to the vertical scrollbar of the `ScrollView`.

or handling scroll events. Refer to [wiki:ScrollView documentation|UIE-uxml-element-ScrollView] for example usage and additional details.

<seealso cref="ScrollViewMode.Horizontal"/>

<seealso cref="ScrollViewMode.Vertical"/>

<seealso cref="ScrollViewMode.VerticalAndHorizontal"/>

<seealso cref="ScrollViewMode.Horizontal"/>

<seealso cref="ScrollViewMode.Vertical"/>

<seealso cref="ScrollViewMode.VerticalAndHorizontal"/>

In this mode, directional `NavigationMoveEvent`s scroll the content instead of moving focus.

and is cleared when focus leaves the ScrollView.

<seealso cref="ScrollViewMode.Horizontal"/>

<seealso cref="ScrollViewMode.Vertical"/>

<seealso cref="ScrollViewMode.VerticalAndHorizontal"/>

<undoc/>
        // TODO why does this exist? It is set in all cases...

## Source Code Reference

For complete source code, see: [ScrollView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ScrollView.cs)

### Public Properties

- **ScrollViewMode**: `enum`
- **ScrollerVisibility**: `enum`
- **mode**: `ScrollViewMode`
- **nestedInteractionKind**: `NestedInteractionKind`
- **horizontalScrollerVisibility**: `ScrollerVisibility`
- **verticalScrollerVisibility**: `ScrollerVisibility`
- **showHorizontal**: `bool`
- **showVertical**: `bool`
- **scrollOffset**: `Vector2`
- **horizontalPageSize**: `float`
- **verticalPageSize**: `float`
- **mouseWheelScrollSize**: `float`
- **touchScrollBehavior**: `TouchScrollBehavior`
- **scrollDecelerationRate**: `float`
- **elasticity**: `float`
- **elasticAnimationIntervalMs**: `long`
- **TouchScrollBehavior**: `enum`
- **NestedInteractionKind**: `enum`
- **contentViewport**: `VisualElement`
- **horizontalScroller**: `Scroller`

### Public Methods

- **ScrollTo()**: Returns `void`

