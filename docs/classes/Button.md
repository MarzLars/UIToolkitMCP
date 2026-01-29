# Button

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Button.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Button.cs)

---

## Documentation

A Button has a text label element that can respond to pointer and mouse events.

to the iconImage API or icon-image UXML property. Please note that by providing an icon image, this will

/// By default, a single left mouse click activates the Button's `Clickable` property button.

For details, see `ManipulatorActivationFilter`.

To bind a Button's text value to the contents of a variable, set the `binding-path` property in the

/// For more information, refer to [wiki:UIE-uxml-element-Button|UXML element Button].

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Button_clicked.cs"/>


**Remarks:**


This class is added to every `VisualElement` that is created from UXML.

This class defines the properties of a Button element that you can


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

Unity adds this USS class to every instance of the Button element. Any styling applied to

Unity adds this USS class to an instance of the Button element if the instance's

affects every button with an icon located beside, or below the stylesheet in the visual tree.

Unity adds this USS class to an instance of the Button element if the instance's

this class affects every button with an icon located beside, or below the stylesheet in the visual tree.

Unity adds this USS class to an instance of the Image element that will be used to display the

image elements inside a Button that contains this class.

The default `Clickable` object provides a list of actions that are called using

\\

To add or remove activation triggers, modify [MouseManipulator.activators|clickable.activators].

<code lang="cs">

</code>

<example>

</example>

SA: [ManipulatorActivationFilter]


        [Obsolete("onClick is obsolete. Use clicked instead (UnityUpgradable) -> clicked", true)]

This is a shortcut for modifying <seealso cref="Clickable.clicked"/>. It is provided as a convenience. When you add or remove actions from clicked, it adds or removes them from `Clickable.clicked` automatically.

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Button_clicked.cs"/>


        [CreateProperty]

to represent an icon while the Action is triggered when the button is clicked.

<param name="iconImage">The image value that will be rendered as an icon.</param>


**Remarks:**
Action is the standard C# System.Action.


**Remarks:**


By default, a single left mouse click triggers the Action. To change the activator, modify `clickable`.

## Source Code Reference

For complete source code, see: [Button.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Button.cs)

### Public Properties

- **clickable**: `Clickable`
- **iconImage**: `Background`
- **text**: `string`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

