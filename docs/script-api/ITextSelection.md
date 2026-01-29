# ITextSelection

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TextElementSelection.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElementSelection.cs)

---

## Documentation

This interface is not meant to be implemented explicitly


        [Obsolete("cursorColor is deprecated. Please use the corresponding USS property (--unity-cursor-color) instead.")]


        [Obsolete("selectionColor is deprecated. Please use the corresponding USS property (--unity-selection-color) instead.")]

// 

//

// 

//


        [CreateProperty(ReadOnly = true)]


        bool ITextSelection.isSelectable
        {
            get => m_IsSelectable && focusable;
            set
            {
                if (value == m_IsSelectable)
                    return;

                focusable = value;
                m_IsSelectable = value;
                EnableInClassList(selectableUssClassName, value);
                NotifyPropertyChanged(isSelectableProperty);
            }
        }

        [CreateProperty]


        bool ITextSelection.selectAllOnFocus
        {
            get => m_SelectAllOnFocus;
            set
            {
                if (m_SelectAllOnFocus == value)
                    return;
                m_SelectAllOnFocus = value;
                NotifyPropertyChanged(selectAllOnFocusProperty);
            }
        }

        [CreateProperty]


        bool ITextSelection.selectAllOnMouseUp
        {
            get => m_SelectAllOnMouseUp;
            set
            {
                if (m_SelectAllOnMouseUp == value)
                    return;
                m_SelectAllOnMouseUp = value;
                NotifyPropertyChanged(selectAllOnMouseUpProperty);
            }
        }

        [CreateProperty]

## Source Code Reference

For complete source code, see: [ITextSelection.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElementSelection.cs)

### Public Properties

- **ITextSelection**: `interface`
- **isSelectable**: `bool`
- **cursorColor**: `Color`
- **selectionColor**: `Color`
- **cursorIndex**: `int`
- **doubleClickSelectsWord**: `bool`
- **selectIndex**: `int`
- **tripleClickSelectsLine**: `bool`
- **selectAllOnFocus**: `bool`
- **selectAllOnMouseUp**: `bool`
- **cursorPosition**: `Vector2`

### Public Methods

- **HasSelection()**: Returns `bool`
- **SelectAll()**: Returns `void`
- **SelectNone()**: Returns `void`
- **SelectRange()**: Returns `void`

