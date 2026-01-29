# IStyle

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/Generated/IStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/Generated/IStyle.cs)

---

## Documentation

Reading properties from this object will read from the inline style data for this element.

Writing to a property will mask the value coming from USS with the provided value however other properties will still match the values from USS.


        StyleEnum<Align> alignContent { get; set; }

Alignment of children on the cross axis of this container.


        StyleEnum<Align> alignSelf { get; set; }

Background color to paint in the element's box.


        StyleBackground backgroundImage { get; set; }

Background image x position value.


        StyleBackgroundPosition backgroundPositionY { get; set; }

Background image repeat value.


        StyleBackgroundSize backgroundSize { get; set; }

Color of the element's bottom border.


        StyleLength borderBottomLeftRadius { get; set; }

The radius of the bottom-right corner when a rounded rectangle is drawn in the element's box.


        StyleFloat borderBottomWidth { get; set; }

Color of the element's left border.


        StyleFloat borderLeftWidth { get; set; }

Color of the element's right border.


        StyleFloat borderRightWidth { get; set; }

Color of the element's top border.


        StyleLength borderTopLeftRadius { get; set; }

The radius of the top-right corner when a rounded rectangle is drawn in the element's box.


        StyleFloat borderTopWidth { get; set; }

Bottom distance from the element's box during layout.

This property is inherited by default.


        StyleCursor cursor { get; set; }

Defines how an element is displayed in the layout.


**Remarks:**


This is a convenient way to hide an element without removing it from the hierarchy

/// Elements with a display style of `DisplayStyle.None` are ignored by pointer events


        StyleEnum<DisplayStyle> display { get; set; }

Initial main size of a flex item, on the main flex axis. The final layout might be smaller or larger, according to the flex shrinking and growing determined by the other flex properties.


        StyleEnum<FlexDirection> flexDirection { get; set; }

Specifies how the item will grow relative to the rest of the flexible items inside the same container.


        StyleFloat flexShrink { get; set; }

Placement of children over multiple lines if not enough space is available in this container.

This property is inherited by default.


        StyleLength height { get; set; }

Justification of children on the main axis of this container.


        StyleLength left { get; set; }

Increases or decreases the space between characters.


        StyleLength marginBottom { get; set; }

Space reserved for the left edge of the margin during the layout phase.


        StyleLength marginRight { get; set; }

Space reserved for the top edge of the margin during the layout phase.


        StyleLength maxHeight { get; set; }

Maximum width for an element, when it is flexible or measures its own size.


        StyleLength minHeight { get; set; }

Minimum width for an element, when it is flexible or measures its own size.

The opacity can be between 0.0 and 1.0. The lower value, the more transparent.


        StyleEnum<Overflow> overflow { get; set; }

Space reserved for the bottom edge of the padding during the layout phase.


        StyleLength paddingLeft { get; set; }

Space reserved for the right edge of the padding during the layout phase.


        StyleLength paddingTop { get; set; }

Element's positioning in its parent container.


**Remarks:**



        StyleEnum<Position> position { get; set; }

Right distance from the element's box during layout.


        StyleRotate rotate { get; set; }

A scaling transformation.


        StyleEnum<TextOverflow> textOverflow { get; set; }

Drop shadow of the text.


        StyleLength top { get; set; }

The transformation origin is the point around which a transformation is applied.


        StyleList<TimeValue> transitionDelay { get; set; }

Time a transition animation should take to complete.


        StyleList<StylePropertyName> transitionProperty { get; set; }

Determines how intermediate values are calculated for properties modified by a transition effect.


        StyleTranslate translate { get; set; }

Tinting color for the element's backgroundImage.


        StyleEnum<EditorTextRenderingMode> unityEditorTextRenderingMode { get; set; }

Font to draw the element's text, defined as a Font object.


**Remarks:**



        StyleFont unityFont { get; set; }

Font to draw the element's text, defined as a FontDefinition structure. It takes precedence over `-unity-font`.


**Remarks:**



        StyleFontDefinition unityFontDefinition { get; set; }

Font style and weight (normal, bold, italic) to draw the element's text.


**Remarks:**



        StyleEnum<FontStyle> unityFontStyleAndWeight { get; set; }

Specifies which box the element content is clipped against.


        StyleLength unityParagraphSpacing { get; set; }

Size of the 9-slice's bottom edge when painting an element's background image.


        StyleInt unitySliceLeft { get; set; }

Size of the 9-slice's right edge when painting an element's background image.


        StyleFloat unitySliceScale { get; set; }

Size of the 9-slice's top edge when painting an element's background image.


        StyleEnum<SliceType> unitySliceType { get; set; }

Horizontal and vertical text alignment in the element's box.


**Remarks:**



        StyleEnum<TextAnchor> unityTextAlign { get; set; }

Automatically adjusts the text size to best fit its container using specified minimum and maximum values.

The advanced text generator supports comprehensive Unicode and text shaping for various languages and scripts, including RTL languages. However, it's currently in development and may not have full feature parity with the standard generator. This property is inherited by default and affects text rendering capabilities.


        StyleColor unityTextOutlineColor { get; set; }

Outline width of the text.


        StyleEnum<TextOverflowPosition> unityTextOverflowPosition { get; set; }

Specifies whether or not an element is visible.


**Remarks:**



        StyleEnum<Visibility> visibility { get; set; }

Word wrap over multiple lines if not enough space is available to draw the text of an element.


**Remarks:**



        StyleEnum<WhiteSpace> whiteSpace { get; set; }

Fixed width of an element for the layout.

## Source Code Reference

For complete source code, see: [IStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/Generated/IStyle.cs)

