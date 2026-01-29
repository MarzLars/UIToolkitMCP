# IBaseUxmlFactory

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/UXML/UxmlFactory.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlFactory.cs)

---

## Documentation


    [Obsolete("BaseUxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

UxmlTraits describes the UXML attributes and children elements of a class deriving from `VisualElement`. It is used by `BindableElement.UxmlFactory` to map UXML attributes to the C# class properties when reading UXML documents. It is also used to generate UXML schema definitions.

<param name="bag">A bag of name-value pairs, one for each attribute of the UXML element.</param>


**Remarks:**


UxmlTraits describes the UXML attributes and children elements of a class or structure. It is used by `UxmlObjectFactory{TCreatedType,TTraits}` to map UXML attributes to the C# class/struct properties when reading UXML documents. It is also used to generate UXML schema definitions.

<param name="bag">A bag of name-value pairs, one for each attribute of the UXML element.</param>


**Remarks:**



    [Obsolete("IUxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        string uxmlName { get; }

The namespace of the UXML element read by the factory.


        string uxmlQualifiedName { get; }

The type of the UXML element read by the factory.


        bool canHaveAnyAttribute { get; }

Describes the UXML attributes expected by the element. The attributes enumerated here will appear in the UXML schema.


        IEnumerable<UxmlChildElementDescription> uxmlChildElementsDescription { get; }

The type of element for which this element type can substitute for.


**Remarks:**


For example, if an element restricts its children to Button elements (using the `uxmlChildElementsDescription` property), elements that have `substitueForTypeName` return `Button` are accepted as children of that element.

The value of this property is used for the element's substitutionGroup attribute in UXML schema definition.


        string substituteForTypeNamespace { get; }

The fully qualified XML name for the type returned by `substituteForTypeName`.

<param name="cc">The creation context.</param>

Use this function to validate the content of the attribute bag against the requirements of your factory. If a required attribute is missing or if an attribute value is incorrect, return false. Otherwise, if the bag content is acceptable to your factory, return true.

<returns>True if the factory accepts the content of the attribute bag. False otherwise.</returns>
        bool AcceptsAttributeBag(IUxmlAttributes bag, CreationContext cc);
    }

Interface for UXML factories. While it is not strictly required, concrete factories should derive from the generic class `UxmlFactory{TCreatedType,TTraits}`.

<param name="cc">When the element is created as part of a template instance inserted in another document, this contains information about the insertion point.</param>


    [Obsolete("IBaseUxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]
    [VisibleToOtherModules("UnityEditor.UIBuilderModule")]


    [Obsolete("IUxmlObjectFactory<out T> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<typeparam name="TTraits">The traits of the class that will be instantiated. It must derive from `BaseUxmlTraits`</typeparam>
    [Obsolete("BaseUxmlFactory<TCreatedType, TTraits> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


**Remarks:**


/T0/ The type of the element that will be instantiated. It must derive from `VisualElement`.

/T1/ The traits of the element that will be instantiated. It must derive from `UxmlTraits`.

<param name="cc">When the element is created as part of a template instance inserted in another document, this contains information about the insertion point.</param>

<typeparam name="TTraits">The traits of the class that will be instantiated. It must derive from `UxmlObjectTraits{T}`</typeparam>
    [Obsolete("UxmlObjectFactory<TCreatedType, TTraits> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="cc">Contains information about the uxml objects available in the tree for the initialization step.</param>


    [Obsolete("UxmlFactory<TCreatedType> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

## Source Code Reference

For complete source code, see: [IBaseUxmlFactory.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlFactory.cs)

### Public Properties

- **canHaveAnyAttribute**: `bool`
- **uxmlAttributesDescription**: `IEnumerable<UxmlAttributeDescription>`
- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **IBaseUxmlFactory**: `interface`
- **uxmlName**: `string`
- **uxmlNamespace**: `string`
- **uxmlQualifiedName**: `string`
- **canHaveAnyAttribute**: `bool`
- **uxmlAttributesDescription**: `IEnumerable<UxmlAttributeDescription>`
- **uxmlChildElementsDescription**: `IEnumerable<UxmlChildElementDescription>`
- **substituteForTypeName**: `string`
- **substituteForTypeNamespace**: `string`
- **substituteForTypeQualifiedName**: `string`

### Public Methods

- **Init()**: Returns `void`
- **AcceptsAttributeBag()**: Returns `bool`
- **Create()**: Returns `VisualElement`
- **CreateObject()**: Returns `TCreatedType`

