# Column

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/MultiColumn/Column.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/Column.cs)

---

## Documentation


        Name,

Represents the title of a column.


        Icon,

Represents the visibility of a column.


        Width,

Represents the maximum width of a column.


        MinWidth,

Represents the ability to stretch of a column.


        Sortable,

Represents the ability for user to interactively show or hide a column.


        Resizable,

Represents the visual representation of a column in a header.


        CellTemplate,
    }

Represents a column in multi-column views such as multi-column list view or multi-column tree view.

cell in this column are represented.


        [Obsolete("UxmlObjectFactory<T> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlObjectFactory<T> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlObjectTraits<T> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">A bag of name-value pairs, one for each attribute of the UXML element.</param>


**Remarks:**



        [CreateProperty]


        [CreateProperty]


        [CreateProperty]

The following example creates a [MultiColumnListView] that can be sorted with the default algorithm:

</example>

The default value is true.

The default value is 0.

The default value is 35px.


        [CreateProperty]


        [CreateProperty]


        [CreateProperty]


        [CreateProperty]

The resize behaviour of all columns in a column collection can be specified by setting `Columns.resizable`.


        [CreateProperty]


        [CreateProperty]


        [CreateProperty]

## Source Code Reference

For complete source code, see: [Column.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/Column.cs)

### Public Properties

- **name**: `string`
- **title**: `string`
- **icon**: `Background`
- **comparison**: `Comparison<int>`
- **visible**: `bool`
- **width**: `Length`
- **minWidth**: `Length`
- **maxWidth**: `Length`
- **sortable**: `bool`
- **stretchable**: `bool`
- **optional**: `bool`
- **resizable**: `bool`
- **bindingPath**: `string`
- **headerTemplate**: `VisualTreeAsset`
- **cellTemplate**: `VisualTreeAsset`
- **makeHeader**: `Func<VisualElement>`
- **bindHeader**: `Action<VisualElement>`
- **unbindHeader**: `Action<VisualElement>`
- **destroyHeader**: `Action<VisualElement>`
- **makeCell**: `Func<VisualElement>`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

