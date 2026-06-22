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
            var useTouchScreenKeyboard = editingManipulator?.editingUtilities.TouchScreenKeyboardCanBeUsed() ?? false;

            if (!useTouchScreenKeyboard || edition.hideMobileInput || edition.hideSoftKeyboard)
                selectingManipulator?.HandleEventBubbleUp(evt);
            if (!edition.isReadOnly)
                editingManipulator?.HandleEventBubbleUp(evt);

            if (elementPanel?.contextualMenuManager?.CheckIfEventMatches(evt) == true)
            {
                // UUM-102230: On PointerDown, Display menu after the target has been focused
                if (evt.eventTypeId == PointerDownEvent.TypeId() && !focusController.IsFocused(this))
                {
                    var evtTimestamp = evt.timestamp;
                    RegisterCallbackOnce<FocusEvent>(_ =>
                    {
                        // Don't react after event was disposed and we didn't get focus for any reason.
                        if (evt.timestamp != evtTimestamp)
                            return;

                        // Repaint the panel now because they won't get another chance when the menu is up
                        var menu = new DropdownMenu { repaintPanelBeforeDisplay = true };
                        elementPanel?.contextualMenuManager?.DisplayMenu(evt, this, menu);
                    });
                }
                else
                {
                    elementPanel.contextualMenuManager.DisplayMenu(evt, this);
                }
                evt.StopPropagation();
            }

            if (evt.eventTypeId == ContextualMenuPopulateEvent.TypeId())
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
- **hideSoftKeyboard**: `bool`
- **hideMobileInput**: `bool`
- **touchScreenKeyboard**: `TouchScreenKeyboard`
- **keyboardType**: `TouchScreenKeyboardType`

