# ProgressBar

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/ProgressBar.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ProgressBar.cs)

---

## Documentation


    [UxmlElement]


        [CreateProperty]
        [UxmlAttribute]


        [CreateProperty]
        [UxmlAttribute]


        [CreateProperty]
        [UxmlAttribute]

<undoc/>

The progress percentage is calculated as @@100 * (value - lowValue) / (highValue - lowValue)@@.


**Remarks:**



        [CreateProperty]


        float CalculateOppositeProgressWidth(float width)
        {
            if (m_Background == null || m_Progress == null)
            {
                return 0f;
            }

            if (float.IsNaN(m_Background.layout.width))
            {
                return 0f;
            }

            var maxWidth = Mathf.Floor(m_Background.layout.width - 2);
            var progressWidth = Mathf.Max((maxWidth) * width / highValue, k_MinVisibleProgress);
            var oppositeProgressWidth = maxWidth - progressWidth;

            // If the difference between the max width and the desired right position is too small, we don't want to display the progress bar.
            m_Progress.style.width = Mathf.Abs(maxWidth - oppositeProgressWidth) < k_AcceptedWidthEpsilon ? new StyleLength(0f)
                : new StyleLength(StyleKeyword.Auto);
            return oppositeProgressWidth;
        }
    }

A control that displays the progress between a lower and upper bound value. For more information, refer to [wiki:UIE-uxml-element-ProgressBar|UXML element ProgressBar].

<example>

<![CDATA[

{

{

lowValue = 0f,

value = 0f

///     progressBar.schedule.Execute(() =>

progressBar.value += 2f;

///     return progressBar;

]]>

</example>
    [MovedFrom(true, UpgradeConstants.EditorNamespace, UpgradeConstants.EditorAssembly)]
    [UxmlElement(libraryPath = "Controls")]
    [Icon("UIToolkit/Icons/ProgressBar.png")]

## Source Code Reference

For complete source code, see: [ProgressBar.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ProgressBar.cs)

### Public Properties

- **lowValue**: `float`
- **highValue**: `float`
- **title**: `string`
- **value**: `float`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`
- **CreateProgressBar()**: Returns `ProgressBar`

