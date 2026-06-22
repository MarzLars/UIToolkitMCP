# ExportContext

**Namespace:** `UnityEditor.UIElements`

**Source:** [Modules/UIElementsEditor/UXML/VisualTreeAssetExporter.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElementsEditor/UXML/VisualTreeAssetExporter.cs)

---

## Documentation

<returns>A `string` version of the `VisualTreeAsset`.</returns>

<param name="options">To export options.</param>

<param name="roots">Sub-set of elements to export.</param>

<param name="roots">Sub-set of elements to export.</param>

<returns>A `string` version of the `VisualTreeAsset`.</returns>

## Source Code Reference

For complete source code, see: [ExportContext.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElementsEditor/UXML/VisualTreeAssetExporter.cs)

### Public Properties

- **AttributeNameColor**: `Color`
- **AttributeValueColor**: `Color`
- **TagColor**: `Color`
- **TagNameColor**: `Color`
- **indent**: `string`
- **consistentAttributeOrder**: `bool`
- **useColorHighlighting**: `bool`
- **styleExporter**: `StyleSheetExporter`
- **ExportContext**: `struct`
- **Default**: `VisualTreeAssetExporter`

### Public Methods

- **IsAttributeIgnored()**: Returns `bool`
- **IsTypeIgnored()**: Returns `bool`
- **Dispose()**: Returns `void`
- **IncreaseIndent()**: Returns `void`
- **DecreaseIndent()**: Returns `void`
- **Append()**: Returns `void`
- **AppendLine()**: Returns `void`
- **AppendIndent()**: Returns `void`
- **GetNamespaceDefinition()**: Returns `UxmlNamespaceDefinition`
- **GetProcessedPathForSrcAttribute()**: Returns `string`
- **ToUxmlString()**: Returns `string`

