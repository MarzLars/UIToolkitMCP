# DefaultMultiColumnTreeViewController

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Collections/Controllers/DefaultMultiColumnTreeViewController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Collections/Controllers/DefaultMultiColumnTreeViewController.cs)

---

## Documentation

<param name="sortDescriptions">The sort data used to initialize the header.</param>

<inheritdoc />

Root items can include their children directly.

<param name="items">The TreeView root items.</param>

<param name="parentId">The parent id for the item.</param>

<param name="rebuildTree">Whether to refresh the tree data immediately. If `false`, call `BaseVerticalCollectionView.RefreshItems()`.</param>

<returns>The tree item data.</returns>

<returns>The tree item data.</returns>

<inheritdoc />

<returns>The data.</returns>

<returns>The data.</returns>

<inheritdoc />

## Source Code Reference

For complete source code, see: [DefaultMultiColumnTreeViewController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Collections/Controllers/DefaultMultiColumnTreeViewController.cs)

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

