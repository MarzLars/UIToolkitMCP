# TextElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TextElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElement.cs)

---

## Documentation

Use this as the super class if you are declaring a custom VisualElement that displays text. For example, `Button` or `Label` use this as their base class. For more information, refer to [wiki:UIE-uxml-element-TextElement|UXML element TextElement].


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">Bag of attributes where to get the value from.</param>

Changing this value will implicitly invoke the `INotifyValueChanged{T}.value` setter, which will raise a `ChangeEvent{T}` of type string.


        [CreateProperty]

If this setting is enabled, the global Emoji Fallback list will be searched first for characters defined as


        [CreateProperty]

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

## Source Code Reference

For complete source code, see: [TextElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElement.cs)

### Public Properties

- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **text**: `string`
- **enableRichText**: `bool`
- **emojiFallbackSupport**: `bool`
- **parseEscapeSequences**: `bool`
- **displayTooltipWhenElided**: `bool`
- **isElided**: `bool`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **MeasureTextSize()**: Returns `Vector2`

