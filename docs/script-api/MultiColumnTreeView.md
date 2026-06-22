# MultiColumnTreeView

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/MultiColumn/MultiColumnTreeView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/MultiColumnTreeView.cs)

---

## Documentation


    [UxmlElement(libraryPath = "Containers")]
    [Icon("UIToolkit/Icons/MultiColumnTreeView.png")]

For a default implementation, set `sortingMode` to `ColumnSortingMode.Default`.

The `Default` mode uses the sorting algorithm provided by `MultiColumnController`, acting on indices. You can also implement your

__Note__: If there is at least one sorted column, reordering is temporarily disabled.


        [UxmlObjectReference]
        [CreateProperty]


        [UxmlObjectReference]
        [CreateProperty]


        [Obsolete("sortingEnabled has been deprecated. Use sortingMode instead.", false)]


**Remarks:**
The controller should implement `MultiColumnTreeViewController`.

## Source Code Reference

For complete source code, see: [MultiColumnTreeView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/MultiColumnTreeView.cs)

### Public Properties

- **sortingMode**: `ColumnSortingMode`
- **columns**: `Columns`
- **sortColumnDescriptions**: `SortColumnDescriptions`
- **sortingEnabled**: `bool`

### Public Methods

- **SetViewController()**: Returns `void`

