# GenericDropdownMenu

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/GenericDropdownMenu.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/GenericDropdownMenu.cs)

---

## Documentation

The GenericDropdownMenu is a generic implementation of a dropdown menu that you can use in both Editor UI and runtime UI.

<example>

the width of the dropdown menu with the @@DropDown@@ method.

</example>

dropdown menu if they don't want to use the default implementation.

<param name="isChecked">Indicates whether a checkmark next to the item is displayed.</param>

This overload of the method accepts an arbitrary object that's passed as a parameter to your callback.

<param name="itemName">The text to display to the user.</param>

<param name="action">The callback to invoke when the item is selected by the user.</param>

Items added with this method cannot be selected by the user.

<param name="itemName">The text to display to the user.</param>

The parent element that displays the menu:

- For Editor UI, the parent element is `EditorWindow.rootVisualElement`.

/// The @@anchored@@ parameter determines the width of the menu. Refer to `GenericDropdownMenu` for example usages.

<param name="position">The position in the coordinate space of the panel.</param>

<param name="anchored">If true, the menu's width matches the width of the @@position@@; otherwise, the menu expands to the container's full width.</param>

The parent element that displays the menu:

- For Editor UI, the parent element is `EditorWindow.rootVisualElement`.

/// The @@anchored@@ and @@fitContentWidthIfAnchored@@ parameters determine the width of the menu. Refer to `GenericDropdownMenu` for example usages.

<param name="targetElement">The element determines which root to use as the menu's parent.</param>

to the container's full width.</param>

otherwise, the menu's width matches the width of the @@position@@. If the menu is unanchored, this parameter is ignored.</param>

## Source Code Reference

For complete source code, see: [GenericDropdownMenu.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/GenericDropdownMenu.cs)

### Public Methods

- **AddItem()**: Returns `void`
- **AddDisabledItem()**: Returns `void`
- **AddSeparator()**: Returns `void`
- **DropDown()**: Returns `void`

