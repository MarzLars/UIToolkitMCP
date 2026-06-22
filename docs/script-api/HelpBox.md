# HelpBox

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/HelpBox.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/HelpBox.cs)

---

## Documentation


        None = 0,

Info message.


        Warning = 2,

Error message.

{img UIElementsHelpBox.png}

<example>

public class HelpBoxExample : EditorWindow

[MenuItem("Example/Help Box")]

{

window.Show();

///     void OnEnable()

rootVisualElement.Add(new HelpBox("This is a help box", HelpBoxMessageType.Info));

}

</example>
    [UxmlElement(libraryPath = "Controls")]
    [Icon("UIToolkit/Icons/HelpBox.png")]


        [Obsolete("Renamed to match the other style class names. Please use iconWarningUssClassName instead (UnityUpgradable) -> iconwarningUssClassName", false)]


        [MultilineTextField]
        [CreateProperty]
        [UxmlAttribute]


        [CreateProperty]
        [UxmlAttribute]

Provide a value to create a new `Button` or update the text of an existing one.

Provide a callback to automatically create a `Button` if none exists, or update the button's `Clickable.clicked` callback.

Provide a value to create a `Label` if none exists. This property represents the readable string of the hyperlink. If a `HelpBox.linkHref`


        [MultilineTextField]
        [CreateProperty]
        [UxmlAttribute]

Provide a value to create a `Label` element with a hyperlink rich text tag as its value if none exists. The value is used as the hyperlink


        [CreateProperty]
        [UxmlAttribute]

<param name="messageType">The type of message.</param>

## Source Code Reference

For complete source code, see: [HelpBox.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/HelpBox.cs)

### Public Properties

- **HelpBoxMessageType**: `enum`
- **text**: `string`
- **messageType**: `HelpBoxMessageType`
- **buttonText**: `string`
- **linkText**: `string`
- **linkHref**: `string`

