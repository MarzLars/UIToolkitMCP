# Toggle

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Toggle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Toggle.cs)

---

## Documentation

A Toggle control consists of a label and an input field. The input field contains a sprite for the control. By default,

normal, hovered, checked, and unchecked. You can style a Toggle control to change its appearance to something else, for

/// When a Toggle is clicked, its state alternates between between true and false. You can also think of these states  as

/// To bind the Toggle's state to a boolean variable, set the`binding-path` property in a UI Document (.uxml file), or

/// For more information, refer to [wiki:UIE-uxml-element-Toggle|UXML element Toggle].


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>

Unity adds this USS class to every instance of the Toggle element. Any styling applied to

Unity adds this USS class to the `Label` sub-element of the `Toggle` if the Toggle has a Label.

Unity adds this USS class to the input sub-element of the `Toggle`. The input sub-element provides

Unity adds this USS class to the `Toggle` if the Toggle does not have a label.

Unity adds this USS class to the Image sub-element of the `Toggle` that contains the checkmark image.

Unity adds this USS class to Text sub-elements of the `Toggle`.

Unity adds this USS class to checkmark of the `Toggle` when it has mixed values.

The default manipulator makes it possible to activate the Toggle with a left mouse click.

<param name="label">The Label text.</param>

## Source Code Reference

For complete source code, see: [Toggle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Toggle.cs)

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

