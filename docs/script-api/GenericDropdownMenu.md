# GenericDropdownMenu

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/GenericDropdownMenu.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/GenericDropdownMenu.cs)

---

## Documentation

This is the only supported mode for OS menus.


        Fixed,

The width of the dropdown menu matches the width of the content.

<param name="isChecked">Indicates whether a checkmark next to the item is displayed.</param>

<param name="isChecked">Indicates whether a checkmark next to the item is displayed.</param>

<param name="data">The object to pass to the callback as a parameter.</param>

<param name="isChecked">Indicates whether a checkmark next to the item is displayed.</param>

<param name="targetElement">The element determines which root to use as the menu's parent.</param>

The GenericDropdownMenu is a generic implementation of a dropdown menu that you can use in both Editor UI and runtime UI.

<example>

the width of the dropdown menu with the @@DropDown@@ method.

</example>

dropdown menu if they don't want to use the default implementation. It contains a reference to the menu in its `VisualElement.userData`.

<param name="isChecked">Indicates whether a checkmark next to the item is displayed.</param>

This overload of the method accepts an arbitrary object that's passed as a parameter to your callback.

<param name="itemName">The text to display to the user.</param>

<param name="action">The callback to invoke when the item is selected by the user.</param>

Items added with this method cannot be selected by the user.

<param name="itemName">The text to display to the user.</param>

The parent element that displays the menu:

- For Editor UI, the parent element is `EditorWindow.rootVisualElement`.

/// The @@dropdownMenuSizeMode@@ parameter determines the width of the menu.

<param name="position">The position in the coordinate space of the panel.</param>

<param name="dropdownMenuSizeMode">Indicates how to format the menu. Refer to `DropdownMenuSizeMode` for more information. Defaults to Auto.</param>

## Source Code Reference

For complete source code, see: [GenericDropdownMenu.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/GenericDropdownMenu.cs)

### Public Properties

- **DropdownMenuSizeMode**: `enum`

### Public Methods

- **AddItem()**: Returns `void`
- **AddDisabledItem()**: Returns `void`
- **AddSeparator()**: Returns `void`
- **DropDown()**: Returns `void`

