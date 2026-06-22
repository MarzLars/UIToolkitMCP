# ITextSelection

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TextElementSelection.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElementSelection.cs)

---

## Documentation

This interface is not meant to be implemented explicitly


        [Obsolete("cursorColor is deprecated. Please use the corresponding USS property (--unity-cursor-color) instead.")]


        [Obsolete("selectionColor is deprecated. Please use the corresponding USS property (--unity-selection-color) instead.")]

The position is on the bottom-left corner of the character at the specified logical index. Index `0` corresponds to the position just before the first character, and for a string of length `n`, index `n` is just after the last character.

The cursor moves according to the logical text indices, which might differ from their visual order on screen, especially with right-to-left text.

The cursor moves according to the logical text indices, which might differ from their visual order on screen, especially with right-to-left text.

This method looks for a line-breaking character and ignores word wrapping when determining the end of the paragraph.

This method looks for a line-breaking character and ignores word wrapping when determining the end of the paragraph.

This API uses the visualElement's style to compute the result, so calling it before the styles are computed might return an incorrect value.

The cursor moves according to the logical text indices, which might differ from their visual order on screen, especially with right-to-left text.

The cursor moves according to the logical text indices, which might differ from their visual order on screen, especially with right-to-left text.

The cursor moves according to the logical text indices, which might differ from their visual order on screen, especially with right-to-left text.


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
                EnableInClassList(selectableUssClassNameUnique, value);
                NotifyPropertyChanged(isSelectableProperty);
            }
        }

        int ITextSelection.cursorIndex
        {
            get => selection.isSelectable ? selectingManipulator.cursorIndex : -1;
            set
            {
                var current = selection.cursorIndex;
                if (selection.isSelectable)
                    selectingManipulator.cursorIndex = value;

                if (current != selection.cursorIndex)
                    NotifyPropertyChanged(cursorIndexProperty);
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
- **GetCursorPositionFromStringIndex()**: Returns `Vector2`
- **MoveForward()**: Returns `void`
- **MoveBackward()**: Returns `void`
- **MoveToParagraphEnd()**: Returns `void`
- **MoveToParagraphStart()**: Returns `void`
- **MoveToEndOfPreviousWord()**: Returns `void`
- **MoveToStartOfNextWord()**: Returns `void`
- **MoveWordBackward()**: Returns `void`
- **MoveWordForward()**: Returns `void`

