# RadioButtonGroup

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/RadioButtonGroup.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/RadioButtonGroup.cs)

---

## Documentation


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>

Unity adds this USS class to every instance of the RadioButtonGroup element. Any styling applied to


        RadioButton m_SelectedRadioButton;

        EventCallback<ChangeEvent<bool>> m_RadioButtonValueChangedCallback;

Writing to this property removes existing `RadioButton` elements, except those added explicitly


        [CreateProperty]

<param name="radioButtonChoices">The choices to display in this group</param>

The RadioButton at the index specified by the value gets toggled while the others get untoggled.

to the hierarchy).


        void UpdateRadioButtons(bool notify)
        {
            if (panel == null)
                return;

            using var _ = ListPool<RadioButton>.Get(out var radioButtons);
            GetAllRadioButtons(radioButtons);

            m_SelectedRadioButton = null;
            if (value >= 0 && value < radioButtons.Count)
            {
                m_SelectedRadioButton = radioButtons[value];
                if (notify)
                    m_SelectedRadioButton.value = true;
                else
                    m_SelectedRadioButton.SetValueWithoutNotify(true);

                // Set the rest to false
                foreach (var radioButton in radioButtons)
                {
                    if (radioButton != m_SelectedRadioButton)
                        if (notify)
                            radioButton.value = false;
                        else
                            radioButton.SetValueWithoutNotify(false);
                }
            }
            else
            {
                foreach (var radioButton in radioButtons)
                {
                    if (notify)
                        radioButton.value = false;
                    else
                        radioButton.SetValueWithoutNotify(false);
                }
            }

            m_UpdatingButtons = false;
        }

        void ScheduleRadioButtons()
        {
            if (m_UpdatingButtons)
                return;
            schedule.Execute(() => UpdateRadioButtons(false));
            m_UpdatingButtons = true;
        }

Registers the specified RadioButton to this RadioButtonGroup.

<param name="radioButton">The button to register</param>

## Source Code Reference

For complete source code, see: [RadioButtonGroup.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/RadioButtonGroup.cs)

### Public Properties

- **choices**: `IEnumerable<string>`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **SetValueWithoutNotify()**: Returns `void`

