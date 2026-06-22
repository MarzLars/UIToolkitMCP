# TemplateContainer

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TemplateContainer.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TemplateContainer.cs)

---

## Documentation

A TemplateContainer instance is created by Unity to represent the root of the UXML file and acts as the parent for all elements in the file.

When using `VisualTreeAsset.Instantiate()`, a TemplateContainer instance is returned to you to represent the root of the hierarchy.


    [UxmlElement("Instance"), HideInInspector]
    [Icon("UIToolkit/Icons/TemplateContainer.png")]

Template declaration inside another VisualTreeAsset.

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [TemplateContainer.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TemplateContainer.cs)

### Public Properties

- **templateId**: `string`
- **templateSource**: `VisualTreeAsset`
- **contentContainer**: `VisualElement`

