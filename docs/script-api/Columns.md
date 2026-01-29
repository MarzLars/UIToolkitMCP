# Columns

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/MultiColumn/Columns.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/Columns.cs)

---

## Documentation


        PrimaryColumn,

Represents the stretch mode of the header.


        Reorderable,

Represents the ability for user to interactively resize columns.


        ResizePreview,
    }

Represents a collection of columns.

The default value is `StretchMode.Grow`.

Unlike `StretchMode.GrowAndFill`, the size is not adjusted to fill any available space within its container when other columns are resized.


            GrowAndFill
        }

        [ExcludeFromDocs, Serializable]


        [Obsolete("UxmlObjectFactory<T> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlObjectFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlObjectTraits<T> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

Needs to match a `Column`'s id, otherwise will be ignored.


        [CreateProperty]

Reordering columns can be cancelled by pressing ESC key.

The resize behaviour of a specific column in the column collection can be specified by setting `Column.resizable`.


        [CreateProperty]

When enabled, resizing can be cancelled by pressing ESC key.

The default value is `StretchMode.GrowAndFill`

<returns>Whether or not the specified column is the primary one.</returns>

<inheritdoc />

<returns>Whether a column with the given name exists or not.</returns>

<param name="arrayIndex">The starting index.</param>

<returns>Whether it was removed or not.</returns>

<returns>The index of the column if found in the collection; otherwise, -1.</returns>

<param name="column">The column to insert.</param>

<returns>The column at the specified index.</returns>

<returns>The column with the specified name.</returns>

Name must be unique in a column collection. Only the first with matching name will be returned.

This does not change the order in the original columns data, only in columns being displayed.

<param name="to">The display index where the column will be moved to.</param>

## Source Code Reference

For complete source code, see: [Columns.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/MultiColumn/Columns.cs)

### Public Properties

- **StretchMode**: `enum`
- **primaryColumnName**: `string`
- **reorderable**: `bool`
- **resizable**: `bool`
- **resizePreview**: `bool`
- **stretchMode**: `StretchMode`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **IsPrimary()**: Returns `bool`
- **GetEnumerator()**: Returns `IEnumerator<Column>`
- **Add()**: Returns `void`
- **Clear()**: Returns `void`
- **Contains()**: Returns `bool`
- **CopyTo()**: Returns `void`
- **Remove()**: Returns `bool`
- **IndexOf()**: Returns `int`
- **Insert()**: Returns `void`
- **RemoveAt()**: Returns `void`
- **ReorderDisplay()**: Returns `void`

