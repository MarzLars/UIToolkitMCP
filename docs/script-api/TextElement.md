# TextElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TextElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElement.cs)

---

## Documentation

Use this as the super class if you are declaring a custom VisualElement that displays text. For example, `Button` or `Label` use this as their base class. For more information, refer to [wiki:UIE-uxml-element-TextElement|UXML element TextElement].

`TextElement` and before the geometry is sent to the renderer.

implement custom per‑glyph effects.

Changing this value will implicitly invoke the `INotifyValueChanged{T}.value` setter, which will raise a `ChangeEvent{T}` of type string.

Unlike assigning to `text`, this method writes directly into an internal

A `ChangeEvent{T}` of type `string` is raised only when listeners

present, the method is fully allocation-free.

<param name="text">The character span to set as the element's text content.</param>

<param name="start">The starting index in the array.</param>

<param name="format">An optional standard or custom numeric format string.</param>


        [CreateProperty]
        [UxmlAttribute]

If this setting is enabled, the global Emoji Fallback list will be searched first for characters defined as


        [CreateProperty]
        [UxmlAttribute]

When set to `true`, escape sequences (such as `\n`, `\t`)

'\n' will insert a new line.

(for example, `\n` is shown as the characters '\' followed by 'n').

provided, it will be overwritten.

Text is elided when the element that contains it is not large enough to display the full text, and has the following style property settings.

overflow: Overflow.Hidden

textOverflow: TextOverflow.Ellipsis

The text Element hides elided text, and displays an ellipsis ('...') to indicate that there is hidden overflow content.

<param name="width">Suggested width. Can be zero.</param>

<param name="height">Suggested height.</param>

<returns>The horizontal and vertical size needed to display the text string.</returns>

<param name="width">Suggested width. Can be zero.</param>

<param name="height">Suggested height.</param>

<param name="fontsize">Optional parameter that override the fontSize that would be applied on the visualElement.</param>

Call this method if you modify assets that influence text generation at runtime,

## Source Code Reference

For complete source code, see: [TextElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElement.cs)

### Public Properties

- **PostProcessTextVertices**: `Action<GlyphsEnumerable>`
- **text**: `string`
- **enableRichText**: `bool`
- **emojiFallbackSupport**: `bool`
- **parseEscapeSequences**: `bool`
- **displayTooltipWhenElided**: `bool`
- **isElided**: `bool`

### Public Methods

- **SetText()**: Returns `void`
- **MeasureTextSize()**: Returns `Vector2`
- **MarkDirtyText()**: Returns `void`

