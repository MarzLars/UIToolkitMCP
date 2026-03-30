# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementStyleAccess.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementStyleAccess.cs)

---

## Documentation

The returned style data, computed from USS files or inline styles written to this object

a VisualElement.

For information about how to use this property and all the supported USS properties, refer to the

[wiki:UIE-USS-Properties-Reference|USS properties reference] manual pages.

<example>

<![CDATA[

element.style.backgroundColor = Color.red;

</code>


**Remarks:**



        [CreateProperty]

Use @@resolvedStyle@@ to find the actual rendered styling of a [VisualElement] in the

the resolved style value of an element to make layout decisions, troubleshoot styling issues,

The final rendered style is computed from applied classes, inherited styles from ancestors, and

you set through the [VisualElement.style] property, depending on the other styles applied to the element.


**Remarks:**


If the element's geometry remains unchanged, consider adding a [IVisualElementScheduler|scheduler] to periodically check the element's

For a list of all the style properties supported by UI Toolkit, refer to [wiki:UIE-USS-Properties-Reference|USS properties reference].


**Remarks:**


refer to [wiki:UIE-apply-styles-with-csharp|Apply styles in C# scripts].

<example>

<![CDATA[

float width = element.resolvedStyle.width;

</code>


**Remarks:**



        [CreateProperty]

To get the custom styles properties of an element, call the `ICustomStyle.TryGetValue`

For more information about how to use this property, refer to the

For a list of all the supported style properties, refer

SA: [VisualElement.style], [VisualElement.resolvedStyle]


        [CreateProperty(ReadOnly = true)]

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementStyleAccess.cs)

### Public Properties

- **style**: `IStyle`
- **resolvedStyle**: `IResolvedStyle`
- **customStyle**: `ICustomStyle`

### Public Methods

- **SetContext()**: Returns `void`
- **TryGetValue()**: Returns `bool`

