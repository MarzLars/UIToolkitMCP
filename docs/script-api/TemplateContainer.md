# TemplateContainer

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TemplateContainer.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TemplateContainer.cs)

---

## Documentation

A TemplateContainer instance is created by Unity to represent the root of the UXML file and acts as the parent for all elements in the file.

When using `VisualTreeAsset.Instantiate()`, a TemplateContainer instance is returned to you to represent the root of the hierarchy.


    [UxmlElement("Instance"), HideInInspector]


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>

Template declaration inside another VisualTreeAsset.

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [TemplateContainer.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TemplateContainer.cs)

### Public Properties

- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **templateId**: `string`
- **templateSource**: `VisualTreeAsset`
- **contentContainer**: `VisualElement`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

