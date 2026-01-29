# IResolvedStyle

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/Generated/IResolvedStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/Generated/IResolvedStyle.cs)

---

## Documentation


        Align alignContent { get; }

Alignment of children on the cross axis of this container.


        Align alignSelf { get; }

Background color to paint in the element's box.


        Background backgroundImage { get; }

Background image x position value.


        BackgroundPosition backgroundPositionY { get; }

Background image repeat value.


        BackgroundSize backgroundSize { get; }

Color of the element's bottom border.


        float borderBottomLeftRadius { get; }

The radius of the bottom-right corner when a rounded rectangle is drawn in the element's box.


        float borderBottomWidth { get; }

Color of the element's left border.


        float borderLeftWidth { get; }

Color of the element's right border.


        float borderRightWidth { get; }

Color of the element's top border.


        float borderTopLeftRadius { get; }

The radius of the top-right corner when a rounded rectangle is drawn in the element's box.


        float borderTopWidth { get; }

Bottom distance from the element's box during layout.

This property is inherited by default.

Unlike the visibility property, this property affects the layout of the element.

(when using the `DisplayStyle.None`).

Elements with a display style of `DisplayStyle.None` are ignored by pointer events


        DisplayStyle display { get; }

Initial main size of a flex item, on the main flex axis. The final layout might be smaller or larger, according to the flex shrinking and growing determined by the other flex properties.


        FlexDirection flexDirection { get; }

Specifies how the item will grow relative to the rest of the flexible items inside the same container.


        float flexShrink { get; }

Placement of children over multiple lines if not enough space is available in this container.

This property is inherited by default.


        float height { get; }

Justification of children on the main axis of this container.


        float left { get; }

Increases or decreases the space between characters.


        float marginBottom { get; }

Space reserved for the left edge of the margin during the layout phase.


        float marginRight { get; }

Space reserved for the top edge of the margin during the layout phase.


        StyleFloat maxHeight { get; }

Maximum width for an element, when it is flexible or measures its own size.


        StyleFloat minHeight { get; }

Minimum width for an element, when it is flexible or measures its own size.

The opacity can be between 0.0 and 1.0. The lower value, the more transparent.


        float paddingBottom { get; }

Space reserved for the left edge of the padding during the layout phase.


        float paddingRight { get; }

Space reserved for the top edge of the padding during the layout phase.

This property is used in conjunction with left, top, right and bottom properties.


        float right { get; }

A rotation transformation.


        Scale scale { get; }

The element's text overflow mode.


        float top { get; }

The transformation origin is the point around which a transformation is applied.


        IEnumerable<TimeValue> transitionDelay { get; }

Time a transition animation should take to complete.


        IEnumerable<StylePropertyName> transitionProperty { get; }

Determines how intermediate values are calculated for properties modified by a transition effect.


        Vector3 translate { get; }

Tinting color for the element's backgroundImage.


        EditorTextRenderingMode unityEditorTextRenderingMode { get; }

Font to draw the element's text, defined as a Font object.


**Remarks:**



        Font unityFont { get; }

Font to draw the element's text, defined as a FontDefinition structure. It takes precedence over `-unity-font`.


**Remarks:**



        FontDefinition unityFontDefinition { get; }

Font style and weight (normal, bold, italic) to draw the element's text.


**Remarks:**



        FontStyle unityFontStyleAndWeight { get; }

Increases or decreases the space between paragraphs.


        int unitySliceBottom { get; }

Size of the 9-slice's left edge when painting an element's background image.


        int unitySliceRight { get; }

Scale applied to an element's slices.


        int unitySliceTop { get; }

Specifies the type of sclicing.

This property is inherited by default.

The advanced text generator supports comprehensive Unicode and text shaping for various languages and scripts, including RTL languages. However, it's currently in development and may not have full feature parity with the standard generator. This property is inherited by default and affects text rendering capabilities.


        Color unityTextOutlineColor { get; }

Outline width of the text.


        TextOverflowPosition unityTextOverflowPosition { get; }

Specifies whether or not an element is visible.


**Remarks:**



        Visibility visibility { get; }

Word wrap over multiple lines if not enough space is available to draw the text of an element.


**Remarks:**



        WhiteSpace whiteSpace { get; }

## Source Code Reference

For complete source code, see: [IResolvedStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/Generated/IResolvedStyle.cs)

