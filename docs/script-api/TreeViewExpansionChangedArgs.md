# TreeViewExpansionChangedArgs

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/BaseTreeView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/BaseTreeView.cs)

---

## Documentation

For the difference between IDs and indices, refer to `BaseVerticalCollectionView`.

Unity adds this USS class to every instance of the TreeView element. Any styling applied to

Unity adds this USS class to every item element of the TreeView. Any styling applied to

Unity adds this USS class to every item toggle element of the TreeView. Any styling applied to

Unity adds this USS class to every indent container element of the TreeView. Any styling applied to


        [Obsolete("Individual item indents are no longer used, see itemIndentUssClassName instead", false)]

Unity adds this USS class to every indent element of the TreeView. Any styling applied to

Unity adds this USS class to every item container element of the TreeView. Any styling applied to

This class defines the TreeView element properties that you can use in a UI document asset (UXML file).

To set the items source, use `SetRootItems{T}` instead, which allows fully typed items.

The `TreeViewExpansionChangedArgs` will contain the expanded state of the item being modified.

Root items can include their children directly.


**Remarks:**
The controller should implement `BaseTreeViewController`.


        [CreateProperty]

Use `SetRootItems{T}` to add content.


**Remarks:**


<returns>The TreeView item's identifier.</returns>

<returns>The TreeView item's parent identifier.</returns>

<returns>The children item identifiers.</returns>

<returns>The selected TreeViewItemData items.</returns>

<typeparam name="T">Type of the data inside TreeViewItemData.</typeparam>

<exception cref="ArgumentException">Throws if the type does not match with the item source data type.</exception>

<typeparam name="T">Type of the data inside TreeViewItemData.</typeparam>

<exception cref="ArgumentException">Throws if the type does not match with the item source data type.</exception>

<param name="parentId">The parent id for the item.</param>

<param name="rebuildTree">Whether we should call RebuildTree and RefreshItems or not. Set to false when doing multiple additions to save a few rebuilds.</param>

<exception cref="ArgumentException">Throws if the type does not match with the item source data type.</exception>

<param name="rebuildTree">Whether we need to rebuild tree data. Set to false when doing multiple additions to save a few rebuilds.</param>

This will also expand the selected item if not expanded already.

<param name="id">The item id.</param>

This will also expand the selected items if not expanded already.

<param name="ids">The item ids.</param>

This will also expand the selected items if not expanded already.

<param name="ids">The item ids.</param>

This will also expand the selected item if not expanded already.

<param name="id">The item id.</param>

<param name="collapseAllChildren">When true, all children will also get collapsed. This is false by default.</param>

<param name="expandAllChildren">When true, all children will also get expanded. This is false by default.</param>

## Source Code Reference

For complete source code, see: [TreeViewExpansionChangedArgs.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/BaseTreeView.cs)

### Public Properties

- **TreeViewExpansionChangedArgs**: `class`
- **id**: `int`
- **isExpanded**: `bool`
- **isAppliedToAllChildren**: `bool`
- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **autoExpand**: `bool`

### Public Methods

- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **GetRootIds()**: Returns `IEnumerable<int>`
- **GetTreeCount()**: Returns `int`
- **SetViewController()**: Returns `void`
- **GetIdForIndex()**: Returns `int`
- **GetParentIdForIndex()**: Returns `int`
- **GetChildrenIdsForIndex()**: Returns `IEnumerable<int>`
- **TryRemoveItem()**: Returns `bool`
- **SetSelectionById()**: Returns `void`
- **SetSelectionByIdWithoutNotify()**: Returns `void`
- **AddToSelectionById()**: Returns `void`
- **RemoveFromSelectionById()**: Returns `void`
- **IsExpanded()**: Returns `bool`
- **CollapseItem()**: Returns `void`
- **ExpandItem()**: Returns `void`
- **ExpandRootItems()**: Returns `void`
- **ExpandAll()**: Returns `void`
- **CollapseAll()**: Returns `void`

