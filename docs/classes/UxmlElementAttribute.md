# UxmlElementAttribute

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/UXML/UxmlAttributes.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlAttributes.cs)

---

## Documentation

To create a custom control, you must add the UxmlElement attribute to the custom control class definition.

or one of its derived classes.

class is generated in the partial class.

`UxmlAttributeAttribute` attribute.

Inspector window in  the UI Builder.

To hide it from the Library tab, provide the `HideInInspector` attribute.

For an example of migrating a custom control from `UxmlFactory` and `UxmlTraits` to the `UxmlElement` and `UxmlAttributes` system,

The following example creates a custom control with multiple attributes:

</example>

The following UXML document uses the custom control:

</example>

When you create a custom control, the default name used in UXML and UI Builder is the element type name (C# class name).

\\

__Note__: You are still required to reference the classes' namespace in UXML.

\\

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlElement_CustomButtonElement.cs"/>

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlElement_CustomButtonElement.uxml"/>

Convenience overload, shorthand for `Query&lt;T&gt;.Build().First().`


**Remarks:**


When an element is marked with the UxmlElement attribute, a corresponding `UxmlSerializedData` class is

This data class contains a `SerializeField` for each field or property that's marked with the UxmlAttribute attribute.

This allows for the support of custom property drawers and decorator attributes, such as `HeaderAttribute`, `TextAreaAttribute`,

The following example creates a custom control with custom attributes:

</example>

Unity objects can also be UxmlAttributes and will contain a reference to the asset file when serialized as UXML.

The types of attributes are UXML template and texture:

</example>

By default, when resolving the attribute name, the field or property name splits into lowercase words connected by hyphens.

is @@myIntValue@@, the corresponding attribute name would be @@my-int-value@@.

The following example creates a custom control with customized attribute names:

</example>

Example UXML:

</example>

If you've changed the name of an attribute and want to ensure that UXML files with the previous attribute name can still

This argument matches attributes in the UXML to be applied to the attribute during serialization.

The following example creates a custom control with custom attributes that uses obsolete attribute names:

</example>

The following example UXML uses the obsolete names:

</example>

When you create each SerializeField, all attributes are copied across.

The following example uses a custom control with decorators on its attribute fields:

</example>

The UI Builder displays the attributes with the decorators:

///{img UIB-decorators.png}

The following example creates a custom control with a custom property drawer:

</example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlAttribute_MyDrawerAttributePropertyDrawer.cs"/>

<example>

/// You can use struct or class instances as attributes and even lists of struct or class instances in UXML.

For an example of a field that supports more complex data, refer to [UIElements.UxmlObjectReferenceAttribute].

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlAttribute_MyClassWithData.cs"/>

<example>

</example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlAttribute_MyClassWithDataConverter.uxml"/>

<example>

When you authoring UXML directly, use the encoded form @@%2C@@ to ensure commas are not mistaken for list separators.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlAttribute_StringList.cs"/>

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlAttribute_StringList.uxml"/>

<example>

it takes precedence and overrides that field, appearing in the inspector instead.

The following example demonstrates how to replace the IntegerField value with a SliderField.

</example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlAttribute_OverrideExampleEditor.cs"/>

<param name="obsoleteNames">The Obsolete UXML attribute names.</param>

When defining a Type field or property with the `UxmlAttributeAttribute` in Unity, you can use the UxmlTypeReference

This allows you to provide additional information about the expected type of the value and helps Unity ensure that the

The following example creates a custom control and restricts the attribute type to only accept values that are derived from [VisualElement]:

</example>
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]


    [AttributeUsage(AttributeTargets.Field, Inherited = false)]

A UXML object is a class that can be instantiated from UXML and contain UXML attributes.


    [AttributeUsage(AttributeTargets.Class, Inherited = false)]

You can utilize the UxmlObjectReferenceAttribute to indicate that a property or field is

By adding the `UxmlObjectAttribute` attribute to a class, you can declare a UXML object.

surpassing the capabilities of a single `UxmlAttributeAttribute`.

The following example shows a common use case for the UxmlObjectReferenceAttribute. It uses the attribute to associate a list of UXML objects with a field or property:

</example>

Example UXML:

</example>

You can employ a base type and incorporate derived types as UXML objects.

such as displaying a label or playing a sound effect.

</example>

Example UXML:

</example>

You can also use an interface with UXML objects that implement it.

</example>

The following example creates multiple UxmlObjects types with custom property drawers.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlObject_SchoolDistrict.cs"/>

<example>

The property drawer must be for the UxmlObject's UxmlSerializedData type.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlObject_SchoolDistrictPropertyDrawers.cs"/>

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlObject_SchoolDistrict.uxml"/>

a dropdown list appears with a selection of available types that can be added to the field. By default,

to specify a list of accepted types to be displayed, rather than showing all available types

<param name="acceptedTypes">In UI Builder, when adding a UXML Object to a field that has multiple derived types,

this list comprises all types that inherit from the UXML object type. You can use a parameter

## Source Code Reference

For complete source code, see: [UxmlElementAttribute.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlAttributes.cs)

### Public Properties

- **path**: `string`

