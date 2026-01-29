# DefaultTreeViewController

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Collections/Controllers/DefaultTreeViewController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Collections/Controllers/DefaultTreeViewController.cs)

---

## Documentation

<inheritdoc />

Root items can include their children directly.

<param name="items">The TreeView root items.</param>

<param name="parentId">The parent id for the item.</param>

<param name="rebuildTree">Whether the tree data should be rebuilt right away. Call `TreeViewController.RebuildTree()` when `false`.</param>

<typeparam name="T">Type of the data inside TreeViewItemData.</typeparam>

<typeparam name="T">Type of the data inside TreeViewItemData.</typeparam>

<inheritdoc />

<typeparam name="T">Type of the data inside TreeViewItemData.</typeparam>

<typeparam name="T">Type of the data inside TreeViewItemData.</typeparam>

<inheritdoc />

## Source Code Reference

For complete source code, see: [DefaultTreeViewController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Collections/Controllers/DefaultTreeViewController.cs)

### Public Properties

- **itemsSource**: `IList`

### Public Methods

- **SetRootItems()**: Returns `void`
- **AddItem()**: Returns `void`
- **GetTreeViewItemDataForId()**: Returns `TreeViewItemData<T>`
- **GetTreeViewItemDataForIndex()**: Returns `TreeViewItemData<T>`
- **TryRemoveItem()**: Returns `bool`
- **GetItemForId()**: Returns `object`
- **GetDataForId()**: Returns `T`
- **GetDataForIndex()**: Returns `T`
- **GetItemForIndex()**: Returns `object`

