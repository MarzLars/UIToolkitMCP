# MultiColumnListView

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/MultiColumn/MultiColumnListView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/MultiColumnListView.cs)

---

## Documentation

This class is added to every `VisualElement` created from UXML.

This class defines the MultiColumnListView element properties that you can use in a UI document asset (UXML file).

<param name="bag">The attribute bag.</param>

For a default implementation, set `sortingMode` to `ColumnSortingMode.Default`.


        [CreateProperty]


        [CreateProperty]


        [Obsolete("sortingEnabled has been deprecated. Use sortingMode instead.", false)]

The `Default` mode uses the sorting algorithm provided by `MultiColumnController`, acting on indices. You can also implement your

__Note__: If there is at least one sorted column, reordering is temporarily disabled.


**Remarks:**
The controller should implement `MultiColumnListViewController`.

## Source Code Reference

For complete source code, see: [MultiColumnListView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/MultiColumnListView.cs)

### Public Properties

- **columns**: `Columns`
- **sortColumnDescriptions**: `SortColumnDescriptions`
- **sortingEnabled**: `bool`
- **sortingMode**: `ColumnSortingMode`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **SetViewController()**: Returns `void`

