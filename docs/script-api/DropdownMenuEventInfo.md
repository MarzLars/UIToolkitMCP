# DropdownMenuEventInfo

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/DropdownMenu.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/DropdownMenu.cs)

---

## Documentation

display of the dropdown menu. For example, Alt, Ctrl, Shift, Windows, and Command.

menu to display was a mouse event.


**Remarks:**


The position is expressed in the coordinate system of the element that received the mouse event.

A `DropdownMenu` contains one or more DropdownMenuAction instances.

The following example shows how to create a dropdown menu with actions, sub-menu actions, and conditional actions.

</example>

Use the values of this enumeration as flags

This is the default value and represents the absence of flags.


            Normal = 1, // Enabled, unchecked, shown

Disable the item and make it so it is not selectable by the user.


            Checked = 4,

Do not display the item.


**Remarks:**



            Hidden = 8
        }

The name of the item.


**Remarks:**


<returns>Always returns `Status.Normal` </returns>

<returns>Always returns `Status.Disabled`.</returns>

<param name="actionCallback">The action to execute when the menu item is selected.</param>

<param name="userData">The object to store in the @@userData@@ property.</param>

Use this class to set custom `DropdownMenuItem` that

/// Use this class to create OS-like dropdown menus in the Unity Editor. For more generic

The following example shows how to create a dropdown menu with submenus and conditional actions.

</example>

The item is added to the end of the current item list.

<param name="actionName">The name of the item. This name is displayed in the dropdown menu.</param>

<param name="actionStatusCallback">The callback to execute to determine the status of this item.</param>

<example>

<![CDATA[

using UnityEngine;

///public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("Submenu/My Action 1", a => Debug.Log("My Action 1 Works"), action =>

action.tooltip = "Status dependent tooltip";

}, null);

///        rootVisualElement.Add(contextMenuContainer);

}

</code>

The item is added to the end of the current item list.

<param name="actionName">The name of the item. This name is displayed in the dropdown menu.</param>

<param name="status">The status of the item.</param>

<code>

using UnityEditor;

using UnityEngine.UIElements;

public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);

///        rootVisualElement.Add(contextMenuContainer);

}

</code>

The item is added to the end of the specified index in the list.

<param name="atIndex">The index to insert the item at.</param>

<param name="action">Callback to execute when the user selects this item in the menu.</param>

<param name="userData">The object to store in the @@userData@@ property of the `DropdownMenuAction` item. This object is accessible through the action callback.</param>

<code>

using UnityEditor;

using UnityEngine.UIElements;

public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);  // 0

e.menu.AppendAction("Submenu/My Action 4", a => Debug.Log("My Action 4 Works"), DropdownMenuAction.Status.Normal);  // 2

///            // Indices from 1 to 3 are shifted up index by 1. In result 'My Action 2' now has an index of 2.

///            // If we want to insert an between submenu items, we have to use shifted indices

}));

rootVisualElement.Add(contextMenuContainer);

}

</code>

The item is added to the end of the specified index in the list.

<param name="atIndex">The index to insert the item at.</param>

<param name="action">The callback to execute when the user selects this item in the menu.</param>

<example>

<![CDATA[

using UnityEngine;

///public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);  // 0

e.menu.AppendAction("Submenu/My Action 4", a => Debug.Log("My Action 4 Works"), DropdownMenuAction.Status.Normal);  // 2

///            // Indices from 1 to 3 are shifted up index by 1. In result 'My Action 2' now has an index of 2.

///            // If we want to insert an between submenu items, we have to use shifted indices

}));

rootVisualElement.Add(contextMenuContainer);

}

</code>

The separator is added at the end of the current item list.

<param name="subMenuPath">The submenu path to add the separator to. Path components are delimited by forward slashes ('/').</param>

<code>

using UnityEditor;

using UnityEngine.UIElements;

public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);

e.menu.AppendAction("My Action 2", a => Debug.Log("My Action 2 Works"), DropdownMenuAction.Status.Normal);

e.menu.AppendAction("Submenu/My Action 3", a => Debug.Log("My Action 3 Works"), DropdownMenuAction.Status.Normal);

e.menu.AppendAction("Submenu/My Action 4", a => Debug.Log("My Action 4 Works"), DropdownMenuAction.Status.Normal);

///        rootVisualElement.Add(contextMenuContainer);

}

</code>

The separator is added at the end of the specified index in the list.

<param name="subMenuPath">The submenu path to add the separator to. Path components are delimited by forward slashes ('/').</param>

<example>

<![CDATA[

using UnityEngine;

///public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);  // 0

e.menu.AppendAction("Submenu/My Action 3", a => Debug.Log("My Action 3 Works"), DropdownMenuAction.Status.Normal);  // 2

///            e.menu.InsertSeparator("/", 1);     // Indices from 1 to 3 are shifted up index by 1. In result 'My Action 2' now has an index of 2.

}));

rootVisualElement.Add(contextMenuContainer);

}

</code>

<example>

<![CDATA[

using UnityEngine;

///public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);

e.menu.AppendAction("My Action 3", a => Debug.Log("My Action 3 Works"), DropdownMenuAction.Status.Normal);

e.menu.RemoveItemAt(0); // Remove My Action 1

}));

rootVisualElement.Add(contextMenuContainer);

}

</code>

<code>

using UnityEditor;

using UnityEngine.UIElements;

public class ContextMenuWindow : EditorWindow

[MenuItem("My/Context Menu Window")]

///    void CreateGUI()

var contextMenuContainer = new VisualElement();

contextMenuContainer.AddManipulator(new ContextualMenuManipulator(e =>

e.menu.AppendAction("My Action 1", a => Debug.Log("My Action 1 Works"), DropdownMenuAction.Status.Normal);

e.menu.ClearItems();

}));

rootVisualElement.Add(contextMenuContainer);

}

</code>

Called before the menu is displayed.

<param name="e">The source event.</param>

## Source Code Reference

For complete source code, see: [DropdownMenuEventInfo.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/DropdownMenu.cs)

### Public Properties

- **DropdownMenuEventInfo**: `class`
- **modifiers**: `EventModifiers`
- **mousePosition**: `Vector2`
- **localMousePosition**: `Vector2`
- **subMenuPath**: `string`
- **Status**: `enum`
- **name**: `string`
- **status**: `Status`
- **eventInfo**: `DropdownMenuEventInfo`
- **userData**: `object`
- **DropdownMenu**: `class`
- **allowDuplicateNames**: `bool`

### Public Methods

- **AlwaysEnabled()**: Returns `Status`
- **AlwaysDisabled()**: Returns `Status`
- **UpdateActionStatus()**: Returns `void`
- **Execute()**: Returns `void`
- **MenuItems()**: Returns `List<DropdownMenuItem>`
- **AppendAction()**: Returns `void`
- **InsertAction()**: Returns `void`
- **AppendSeparator()**: Returns `void`
- **InsertSeparator()**: Returns `void`
- **RemoveItemAt()**: Returns `void`
- **ClearItems()**: Returns `void`
- **PrepareForDisplay()**: Returns `void`

