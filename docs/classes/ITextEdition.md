# ITextEdition

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TextElementEdition.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElementEdition.cs)

---

## Documentation

This interface is not meant to be implemented explicitly


        bool isReadOnly { get; set; }

Maximum number of characters for that element


        void BuildContextualMenu(ContextualMenuPopulateEvent evt)
        {
            if (evt?.target is TextElement)
            {
                if (!edition.isReadOnly)
                {
                    evt.menu.AppendAction("Cut", Cut, CutActionStatus);
                    evt.menu.AppendAction("Copy", Copy, CopyActionStatus);
                    evt.menu.AppendAction("Paste", Paste, PasteActionStatus);
                }
                else
                    evt.menu.AppendAction("Copy", Copy, CopyActionStatus);
            }
        }

        DropdownMenuAction.Status CutActionStatus(DropdownMenuAction a)
        {
            return enabledInHierarchy && selection.HasSelection() && !edition.isPassword
                ? DropdownMenuAction.Status.Normal
                : DropdownMenuAction.Status.Disabled;
        }

        DropdownMenuAction.Status CopyActionStatus(DropdownMenuAction a)
        {
            return (!enabledInHierarchy || selection.HasSelection()) && !edition.isPassword
                ? DropdownMenuAction.Status.Normal
                : DropdownMenuAction.Status.Disabled;
        }

        DropdownMenuAction.Status PasteActionStatus(DropdownMenuAction a)
        {
            var canPaste = editingManipulator.editingUtilities.CanPaste();
            return enabledInHierarchy
                ? canPaste ? DropdownMenuAction.Status.Normal : DropdownMenuAction.Status.Disabled
                : DropdownMenuAction.Status.Hidden;
        }

        void EditionHandleEvent(EventBase evt)
        {
            if (selection.isSelectable)
            {
                var useTouchScreenKeyboard = editingManipulator?.editingUtilities.TouchScreenKeyboardShouldBeUsed() ?? false;

                if (!useTouchScreenKeyboard || edition.hideMobileInput)
                    selectingManipulator?.HandleEventBubbleUp(evt);
                if (!edition.isReadOnly)
                    editingManipulator?.HandleEventBubbleUp(evt);

                elementPanel?.contextualMenuManager?.DisplayMenuIfEventMatches(evt, this);

                if (evt?.eventTypeId == ContextualMenuPopulateEvent.TypeId())
                {
                    ContextualMenuPopulateEvent e = evt as ContextualMenuPopulateEvent;
                    int count = e.menu.MenuItems().Count;
                    BuildContextualMenu(e);

                    if (count > 0 && e.menu.MenuItems().Count > count)
                    {
                        e.menu.InsertSeparator(null, count);
                    }
                }
            }
        }


        int m_MaxLength = -1;
        int ITextEdition.maxLength
        {
            get => m_MaxLength;
            set
            {
                if (m_MaxLength == value)
                    return;
                m_MaxLength = value;
                text = edition.CullString(text);
                NotifyPropertyChanged(maxLengthProperty);
            }
        }

        [CreateProperty]


        void ITextEdition.ResetValueAndText()
        {
            m_OriginalText = text = default(string);
        }

        void ITextEdition.SaveValueAndText()
        {
            // When getting the FocusIn, we must keep the value in case of Escape...
            m_OriginalText = text;
        }

        void ITextEdition.RestoreValueAndText()
        {
            text = m_OriginalText;
        }

        Func<char, bool> ITextEdition.AcceptCharacter { get; set; }
        Action<bool> ITextEdition.UpdateScrollOffset { get; set; }
        Action ITextEdition.UpdateValueFromText { get; set; }
        Action ITextEdition.UpdateTextFromValue { get; set; }
        Action ITextEdition.MoveFocusToCompositeRoot { get; set; }

## Source Code Reference

For complete source code, see: [ITextEdition.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextElementEdition.cs)

### Public Properties

- **ITextEdition**: `interface`
- **maxLength**: `int`
- **placeholder**: `string`
- **isDelayed**: `bool`
- **maskChar**: `char`
- **isPassword**: `bool`
- **hidePlaceholderOnFocus**: `bool`
- **autoCorrection**: `bool`
- **hideMobileInput**: `bool`
- **touchScreenKeyboard**: `TouchScreenKeyboard`
- **keyboardType**: `TouchScreenKeyboardType`

