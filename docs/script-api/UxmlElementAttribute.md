# UxmlElementAttribute

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/UXML/UxmlAttributes.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlAttributes.cs)

---

## Documentation

Unity hides elements with namespaces that start with "Unity", "UnityEngine", and "UnityEditor".


        Visible,

The element is not visible in the UI Builder Library.

types in an assembly whose own visibility is `LibraryVisibility.Default`.

<example>

// In AssemblyInfo.cs:

/// // Opt a specific control back in:

public partial class MyControl : VisualElement { }

</example>
    [AttributeUsage(AttributeTargets.Assembly)]
    [VisibleToOtherModules]

<param name="visibility">The default visibility to apply to controls in this assembly.</param>

To create a custom control, you must add the UxmlElement attribute to the custom control class definition.

or one of its derived classes.

class is generated in the partial class.

`UxmlAttributeAttribute` attribute.

Inspector window in  the UI Builder.

By default, the custom control appears in the Library tab in UI Builder.

/// For an example of migrating a custom control from `UxmlFactory` and `UxmlTraits` to the `UxmlElement` and `UxmlAttributes` system,

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

<example>

As a result, the elements within these namespaces are hidden from the UI Builder library by default.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/UxmlElement_LibraryVisibility.cs"/>

Sub-paths can be created by using a forward slash (/).

<param name="supportedTypes">An array of supported child element types. This can be passed as individual `Type` arguments.</param>


    [AttributeUsage(AttributeTargets.Class)]

Use this to provide custom instance creation logic, such as object pooling, dependency

instantiation (element and component defaults), `GetOrAddComponent` when it creates a

The method must meet the following requirements:

- Be a static method defined on the element type.

- Accept no parameters.

- Return an instance of the element type (or null to fall back to the default constructor).

If this attribute is not found on the element, the source generator uses the default constructor (`new T()`).

The following example uses a custom creation method for object pooling:

</example>
    [AttributeUsage(AttributeTargets.Method)]


    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]

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

The UxmlSerializedData includes a generated `UxmlSerializedData.CreateInstance` method that uses the default constructor. You can use the `UxmlCreateInstanceMethodAttribute` to replace the default behaviour and provide your own creation method.


**Remarks:**


By utilizing the `UxmlObjectReferenceAttribute` attribute, you can use a UXML object to associate complex data with a field, surpassing the capabilities of a single `UxmlAttributeAttribute`.

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

can attach to any `VisualElement`.


**Remarks:**


custom element subclass, declare a `partial struct` with this attribute and attach an

type works on any element, whatever its type.

This attribute targets structs. The struct must be declared `partial`: Unity's source

the registration code for you.

An element holds at most one component of each type. Read or modify an attached component

`VisualElement.RemoveComponent{T}`.

<example nocheck="true">

<code lang="cs"><![CDATA[

using UnityEngine.UIElements;

[VisualElementComponent]

{

}

public static class ClickCounterExample

public static void Attach(Button button)

// Attach the component with its starting value.

///         button.RegisterCallback<ClickEvent>(evt =>

// GetComponent returns a reference: the increment is stored on the element.

counter.count++;

});

}

</example>
    [AttributeUsage(AttributeTargets.Struct, Inherited = false)]

roughly how many elements you expect to carry this component at the same time.


**Remarks:**


Reserving a larger capacity avoids resizes when you know a component is used by many

if the estimate is too high. This setting only applies to components whose fields are all

references, are stored individually and ignore it.

`UxmlAttributeAttribute` define the component's authorable surface either way;

that is attached from code only.

component is attached to.


**Remarks:**


`VisualElementComponentAttribute`. When the component is added to an element, the method

is removed, the callback is unregistered.

Apply the attribute several times to handle several event types with the same method.


    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true, Inherited = false)]

`CallbackOptions.TrickleDown`.

<param name="callbackOptions">Options that control how the callback is registered.</param>

contributes to the owner element's `VisualElement.generateVisualContent`.


**Remarks:**


source generator hooks it into the owner's `generateVisualContent` when the component is added

re-run the painter through the engine, and <see cref="StylePropertyAttribute">[StyleProperty]</see>


    [AttributeUsage(AttributeTargets.Method, Inherited = false)]

runs when one of the component's fields changes on an element.


**Remarks:**


component may declare at most one. The source

fields; each one flags the owner so this handler runs once in the next update, no matter how many

layout request, or recomputing a cached value. The handler never runs from inside the setter, so a


    [AttributeUsage(AttributeTargets.Method, Inherited = false)]

right after the component is added to an element.


**Remarks:**


component may declare at most one. It runs on every add path: `AddComponent`,

<see cref="RequiresComponentOfTypeAttribute">[RequiresComponentOfType]</see> auto-add. It runs

method sees a fully wired component and may configure the owner element (for example set

authored attribute values are applied, so authored values always win over values this method


    [AttributeUsage(AttributeTargets.Method, Inherited = false)]

`VisualElement.RemoveComponent{T}` removes the component from an element.


**Remarks:**


component may declare at most one. It runs before the component storage is freed and before

live data and clean up any owner state the component configured. It runs only on an explicit

the element itself is torn down.

Apply this attribute to a field or property of a struct that has the

property resolved on the element the component is attached to, so a style sheet can drive


    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property, Inherited = false)]

mirrored into a generated C++ header so native subsystems can read the component data.


    [AttributeUsage(AttributeTargets.Struct, Inherited = false)]

## Source Code Reference

For complete source code, see: [UxmlElementAttribute.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlAttributes.cs)

### Public Properties

- **LibraryVisibility**: `enum`
- **Visibility**: `LibraryVisibility`
- **path**: `string`
- **exposeToUxml**: `bool`
- **eventType**: `Type`
- **callbackOptions**: `CallbackOptions`

### Public Methods

- **Attach()**: Returns `void`

