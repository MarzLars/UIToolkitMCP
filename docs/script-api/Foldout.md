# Foldout

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Foldout.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Foldout.cs)

---

## Documentation

A Foldout consists of a `Toggle` sub-element and an empty `VisualElement`. The empty VisualElement

an arrow sprite instead of the `Toggle` control's usual checkbox. The arrow points right when the toggle is

This class is added to every `VisualElement` created from UXML.

This class defines the Foldout element properties that you can use in a UXML asset.

<param name="bag">The attribute bag.</param>


        [CreateProperty]


        [CreateProperty]

visible, and false if the Foldout is closed, and its contents are hidden.

This is useful when you want to change the Foldout's Toggle value without triggering events. For example, let's say you

not when you change the Toggle's value via code (for example, inside another validation). You could use this method

Unity adds this USS class to every instance of a `Foldout`. Any styling applied to

Unity adds this USS class to the `Toggle` sub-element of every `Foldout`.

stylesheet in the visual tree.

Unity adds this USS class to the `VisualElement` that contains the elements to be shown

below the stylesheet in the visual tree.

Unity adds this USS class to the `VisualElement` that contains the `Toggle` input elements.

Unity adds this USS class to the `VisualElement` that represents the checkmark of the

every foldout container located beside, or below the stylesheet in the visual tree.

Unity adds this USS class to the `Label` in the `Toggle` sub-element of every

below the stylesheet in the visual tree.

## Source Code Reference

For complete source code, see: [Foldout.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Foldout.cs)

### Public Properties

- **focusable**: `bool`
- **toggleOnLabelClick**: `bool`
- **text**: `string`
- **value**: `bool`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **SetValueWithoutNotify()**: Returns `void`

