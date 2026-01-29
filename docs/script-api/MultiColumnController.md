# MultiColumnController

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/MultiColumn/MultiColumnController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/MultiColumnController.cs)

---

## Documentation


        None,

The default Unity sorting will be used. Define how to compare items in a column with `Column.comparison`.


        Custom,
    }

The default controller for a multi column view. Takes care of adding the MultiColumnCollectionHeader and

<param name="sortDescriptions">The sort data used to initialize the header.</param>


**Remarks:**
The header will be added to the view in the `PrepareView` phase.

It will create a cell for every visible column.

<returns>A VisualElement for the row.</returns>

<param name="index">The item index.</param>

<param name="index">The item index.</param>

It will insert the multi column header in the hierarchy and register to important callbacks.

<param name="collectionView">The view to register to.</param>

<returns></returns>

<returns>The index of the item in the source list.</returns>

## Source Code Reference

For complete source code, see: [MultiColumnController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/MultiColumnController.cs)

### Public Properties

- **ColumnSortingMode**: `enum`

### Public Methods

- **MakeItem()**: Returns `VisualElement`
- **UnbindItem()**: Returns `void`
- **DestroyItem()**: Returns `void`
- **PrepareView()**: Returns `void`
- **Dispose()**: Returns `void`

