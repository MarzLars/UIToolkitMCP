# HelpBoxExample

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


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>


        [CreateProperty]


        [CreateProperty]

<param name="messageType">The type of message.</param>

## Source Code Reference

For complete source code, see: [HelpBoxExample.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/HelpBox.cs)

### Public Properties

- **HelpBoxMessageType**: `enum`
- **text**: `string`
- **messageType**: `HelpBoxMessageType`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

