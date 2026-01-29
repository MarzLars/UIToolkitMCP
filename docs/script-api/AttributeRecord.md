# AttributeRecord

**Namespace:** `UnityEditor.UIElements`

**Source:** [Modules/UIElementsEditor/UXMLSchemaGenerator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElementsEditor/UXMLSchemaGenerator.cs)

---

## Documentation


    [AttributeUsage(AttributeTargets.Assembly, AllowMultiple = true)]

<param name="prefix">The prefix to associate to the namespace.</param>

## Source Code Reference

For complete source code, see: [AttributeRecord.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElementsEditor/UXMLSchemaGenerator.cs)

### Public Properties

- **ns**: `string`
- **prefix**: `string`
- **schema**: `XmlSchema`
- **namepacePrefix**: `string`
- **importNamespaces**: `HashSet<string>`
- **fullName**: `string`
- **type**: `Type`
- **uxmlAttributesDescription**: `IEnumerable<UxmlSerializedAttributeDescription>`
- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **AttributeRecord**: `class`
- **name**: `XmlQualifiedName`
- **desc**: `UxmlAttributeDescription`

### Public Methods

- **UpdateSchemaFiles()**: Returns `void`
- **RegisterElementType()**: Returns `void`
- **IsKnownElementType()**: Returns `bool`

