# ToolbarBreadcrumbs

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Controls/Toolbar/ToolbarBreadcrumbs.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/Toolbar/ToolbarBreadcrumbs.cs)

---

## Documentation

Represents a breadcrumb trail to facilitate navigation between related items in a hierarchy.

<example>

<![CDATA[

using UnityEngine.UIElements;

/// public class CreateBreadcrumbsHelper

ToolbarBreadcrumbs breadcrumbs;

{

root.Add(toolbar);

toolbar.Add(breadcrumbs);

breadcrumbs.PushItem("myItemParent", () => breadcrumbs.PopItem());

}

void GoToRoot()

while (breadcrumbs.childCount > 1)

}

]]>

</example>


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="clickedEvent">The action to perform when the a users clicks the item in the toolbar.</param>

## Source Code Reference

For complete source code, see: [ToolbarBreadcrumbs.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/Toolbar/ToolbarBreadcrumbs.cs)

### Public Methods

- **CreateBreadcrumbs()**: Returns `void`
- **CreateInstance()**: Returns `object`
- **PushItem()**: Returns `void`
- **PopItem()**: Returns `void`

