# Binding

**Source:** https://docs.unity3d.com/Manual/UIE-Binding.html  
**Last Updated:** Fri, 06 Feb 2026 19:36:31 GMT

---

* [Manual](index.html)
* [Scripting API](../ScriptReference/index.html)

* [unity.com](https://unity.com/)

Version: **Unity 6.3 LTS** (6000.3)

* Supported
* Legacy

Language
: English

* [English](/Manual/UIE-Binding.html)
* [中文](/cn/current/Manual/UIE-Binding.html)
* [日本語](/ja/current/Manual/UIE-Binding.html)
* [한국어](/kr/current/Manual/UIE-Binding.html)

## Unity Manual

Version: Unity 6.3 LTSSelect a different version

Language
: English

* [English](/Manual/UIE-Binding.html)
* [中文](/cn/current/Manual/UIE-Binding.html)
* [日本語](/ja/current/Manual/UIE-Binding.html)
* [한국어](/kr/current/Manual/UIE-Binding.html)

* [UI systems](UIToolkits.html)
* [UI Toolkit](UIElements.html)
* [Data binding](UIE-data-binding.html)
* [SerializedObject data binding](UIE-editor-binding.html)
* Introduction to SerializedObject data binding

SerializedObject data binding

Bindable elements reference

# Introduction to SerializedObject data binding

You can use the SerializedObject data binding system to bind to [serialized properties](../ScriptReference/SerializedProperty.html). This means you can bind **visual elements**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#visualelement) to the following objects that are compatible with the [Serialization system](script-serialization.html):

* User-defined [`ScriptableObject`](../ScriptReference/ScriptableObject.html) classes
* User-defined [`MonoBehaviour`](../ScriptReference/MonoBehaviour.html) classes
* Native Unity component types
* Native Unity asset types
* Primitive C# types such as `int`, `bool`, or `float`.
* Native Unity types such as `Vector3`, `Color`, or `Object`.

## Value binding

You can only bind the `value` property of visual elements that implement the [`INotifyValueChanged`](../ScriptReference/UIElements.INotifyValueChanged_1.html) interface. For example, you can bind [`TextField.value`](../ScriptReference/UIElements.TextField-value.html) to a `string`, but you can’t bind [`TextField.name`](../ScriptReference/UIElements.VisualElement-name.html) to a `string`.

You can bind between an object and any visual element that either derives from [`BindableElement`](../ScriptReference/UIElements.BindableElement.html) or implements the [`IBindable`](../ScriptReference/UIElements.IBindable.html) interface.

## Create a binding

To create a binding, either [call `Bind()`](#call-bind) or [`BindProperty()`](#call-bindproperty).

### Call `Bind()`

You can call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) to bind an element to a [SerializedObject](../ScriptReference/SerializedObject.html). Before you bind an element, you must [set the binding path](#set-binding-path) and create a SerializedObject.

Use this method if you don’t have easy access to the `SerializedProperty` for the binding. Refer to [Create a binding with a C# script](UIE-create-a-binding-csharp.html) for an example.

The [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) extension method sets up an entire hierarchy of visual elements with specified [`bindingPath`](../ScriptReference/UIElements.IBindable-bindingPath.html) properties. You can call the [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) method on a single element or the parent of the hierarchy that you want to bind. For example, you can call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) on the `rootVisualElement` of an Editor window. This binds all child elements with specified [`bindingPath`](../ScriptReference/UIElements.IBindable-bindingPath.html) properties.

Don’t call [`Bind`](../ScriptReference/UIElements.BindingExtensions.Bind.html) from the `Editor.CreateInspectorGUI` or `PropertyDrawer.CreatePropertyGUI` override. [`Bind`](../ScriptReference/UIElements.BindingExtensions.Bind.html) is called automatically on the visual elements that these methods return.

### Call `Unbind()`

The [`Unbind()`](../ScriptReference/UIElements.BindingExtensions.Unbind.html) method stops the value tracking for the element and all its direct and indirect child elements. In general, you don’t need to call [`Unbind()`](../ScriptReference/UIElements.BindingExtensions.Unbind.html) because tracking stops when a user closes the Inspector or Editor window. Call [`Unbind()`](../ScriptReference/UIElements.BindingExtensions.Unbind.html) if you must bind elements to different targets in their lifetimes.

If you construct an [`InspectorElement`](../ScriptReference/UIElements.InspectorElement.html) in C# by calling its constructor, binding occurs during the constructor call. If you want to rebind an [`InspectorElement`](../ScriptReference/UIElements.InspectorElement.html) after it has been constructed, you must call [`Unbind()`](../ScriptReference/UIElements.BindingExtensions.Unbind.html) and then either call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) explicitly or let a bind operation from a parent create a binding.

### Set binding path

If you call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) to create the binding, you must set the visual element’s binding path to the property name of the object that you want to bind to.

For example:

* If you have the following component script:

  ```
  using UnityEngine;

  public class MyComp : MonoBehaviour
  {
      [SerializeField]
      int m_Count;
  }
  ```

  To bind your visual element to `m_Count`, set the binding path to `m_Count`.
* If you want to bind a visual element to a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
  See in [Glossary](Glossary.html#GameObject)’s name property, which is `m_Name`, set the binding path to `m_Name`.

You can set the binding path in UI Builder, UXML, or with a C# script:

* In UI Builder, enter the binding path in the **Binding Path** field for a visual element in the [Inspector](UIB-interface-overview.html#uibuilder-inspector)A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
  See in [Glossary](Glossary.html#Inspector).
* In UXML, set the `binding-path` attribute for a visual element. Refer to [Define the binding path in UXML](UIE-create-a-binding-uxml-bind.html#binding-path-uxml) for an example.
* In C#, set [`bindingPath`](../ScriptReference/UIElements.IBindable-bindingPath.html) from the [`IBindable`](../ScriptReference/UIElements.IBindable.html) interface. Refer to [Bind with the binding path](UIE-create-a-binding-csharp.html#binding-path-csharp) for an example.

### Call `BindProperty()`

You can call [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) to bind an element to a [`SerializedProperty`](../ScriptReference/SerializedProperty.html) directly.

Use this method if you already have a `SerializedProperty` object, and especially if you traverse the properties of a [`SerializedObject`](../ScriptReference/SerializedObject.html) to build a UI dynamically. Refer to [Bind without the binding path](UIE-bind-without-bindpath.html) for an example.

### Bind elements to nested properties

You can bind a visual element to nested properties in the source object. To do so, combine the binding path of an element with the binding path of the first ancestor. Use this method with the following elements:

* [`BindableElement`](../ScriptReference/UIElements.BindableElement.html)
* [`TemplateContainer`](../ScriptReference/UIElements.TemplateContainer.html) (corresponds to the `<Instance>` tag in UXML)
* [`GroupBox`](../ScriptReference/UIElements.GroupBox.html)

Refer to [Bind to nested properties](UIE-bind-to-nested-properties.html) for an example.

### Receive callbacks when values change

You can create a binding to receive a callback when a bound serialized property changes. To do so, leverage the [`TrackPropertyValue()`](../ScriptReference/UIElements.BindingExtensions.TrackPropertyValue.html) extension method, which is available to any `VisualElement`. This registers a callback that executes when the provided `SerializedProperty` changes. Refer to [Receive callbacks when a serialized property changes](UIE-create-a-binding-callback.html) for an example.

You can also create a binding to receive a callback when any properties of the bound serialized object change. To do so, leverage the [`TrackSerializedObjectValue()`](../ScriptReference/UIElements.BindingExtensions.TrackSerializedObjectValue.html) extension method, which is available to any `VisualElement`. This registers a callback that executes when the provided `SerializedObject` changes. Refer to [Receive callbacks when any properties change](UIE-create-a-binding-callback-any-properties.html) for an example.

### Bind custom elements

You can create custom elements and bind them to serialized properties through the [value binding](#value-binding) system.

To create bindable custom elements:

1. [Declare a custom element](UIE-create-custom-controls.html).
2. Inherit the element from `BindableElement` or implement the `IBindable` interface.
3. Implement the `INotifyValueChanged` interface.
4. Implement the `SetValueWithoutNotify()` method of the `INotifyValueChanged` interface.
5. Implement the `value` property accessors of the `INotifyValueChanged` interface.

Refer to [Create and style a custom control](UIE-bind-to-list-without-listview.html#custom-control) for an example.

**Note**: You can’t bind custom data types directly to custom elements because the binding system only allows you to bind an element to a type supported by SerializedPropertyType of `enum`. This means you can’t define a class or structure, for example, a struct called `MyStruct`, and bind it to an element that implements `INotifyValueChanged<MyStruct>`. However, you can bind to serializable nested properties of custom data types. This includes polymorphic serialization (when a field uses the [`[SerializeReference]` attribute](../ScriptReference/SerializeReference.html)). Refer to [Bind a custom control to custom data type](UIE-bind-to-custom-data-type.html) for an example.

## Bind time

Based on the type of UI you create, binding occurs at various times. This is called bind time.

The following table describes the bind time of a control:

| **Condition** | **Automatic bind time (assuming binding path was set)** |
| --- | --- |
| **An `InspectorElement` constructed in C#** | During the [constructor](../ScriptReference/UIElements.InspectorElement-ctor.html) call |
| **A child element that is under the return value of [`CreateInspectorGUI()`](../ScriptReference/Editor.CreateInspectorGUI.html) or [`CreatePropertyGUI()`](../ScriptReference/PropertyDrawer.CreatePropertyGUI.html) when those methods return** | After [`CreateInspectorGUI()`](../ScriptReference/Editor.CreateInspectorGUI.html) or [`CreatePropertyGUI()`](../ScriptReference/PropertyDrawer.CreatePropertyGUI.html) returns |
| **A child element that is under an element when [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) or [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) is called on the parent element** | During the [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) or [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) call |
| **Other** | No automatic binding; you must bind the element or one of its parents manually |

The following are best practices when creating a binding regarding bind time:

* If you create a custom [`Editor`](../ScriptReference/Editor.html) or custom [`PropertyDrawer`](../ScriptReference/PropertyDrawer.html), set the elements’ binding paths instead of calling [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) or [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) on any visual elements that are in the [visual tree](UIE-VisualTree.html)An object graph, made of lightweight nodes, that holds all the elements in a window or panel. It defines every UI you build with the UI Toolkit.
  See in [Glossary](Glossary.html#visualtree) by the end of the body of [`CreateInspectorGUI()`](../ScriptReference/Editor.CreateInspectorGUI.html) or `CreatePropertyGUI()`. These elements are bound automatically after [`CreateInspectorGUI()`](../ScriptReference/Editor.CreateInspectorGUI.html) or [`CreatePropertyGUI()`](../ScriptReference/PropertyDrawer.CreatePropertyGUI.html) returns. However, if you add any elements to the visual tree after that point, call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) or [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) to bind them.
* If you create any other type of UI, call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) or [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) regardless of the time at which the elements get added to the visual tree. If you call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) or [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) and bind multiple controls at the same time, set the binding path of each control and then call [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) on the lowest-level parent element that encompasses all the controls. [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) binds the element on which it’s called if it has a binding path and recursively binds all its child elements if they have binding paths. To prevent a negative performance impact, don’t bind a visual element with the [`Bind()`](../ScriptReference/UIElements.BindingExtensions.Bind.html) method more than once.

## Bind to a serialized property backing field

When you use an auto-property, the compiler automatically generates a backing field with a name as `<PropertyName>k__BackingField`. This field is not explicitly visible in your code but can be referenced if necessary, as in binding scenarios.

For example, the following example defines an auto-property `SomeProp` and serializes it:

```
[field: SerializeField]
public float SomeProp
{
    get;
    private set;
}
```

The compiler generates the following backing field:

```
[SerializedField]
private float <SomeProp>k__BackingField;

public float SomeProp
{
    get => <SomeProp>k__BackingField;
    set => <SomeProp>k__BackingField = value;
}
```

To bind to `<SomeProp>k__BackingField` in UXML, you must escape `<` and `>` because they’re reserved for tags. For example, set the `binding-path` as follows:

```
<editor:PropertyField name="some-prop" binding-path="&lt;SomeProp&gt;k__BackingField"/>
```

## Binding examples

Try the following examples to learn how to code with data binding:

* [Bind with binding path in C# script](UIE-create-a-binding-csharp.html)
* [Bind without the binding path](UIE-bind-without-bindpath.html)
* [Bind with UXML and C#](UIE-create-a-binding-uxml-bind.html)
* [Create a binding with the Inspector](UIE-create-a-binding-uxml-inspector.html)
* [Bind to nested properties](UIE-bind-to-nested-properties.html)
* [Bind to a UXML template](UIE-bind-uxml-template.html)
* [Receive callbacks when a bound property changes](UIE-create-a-binding-callback.html)
* [Receive callbacks when any bound properties change](UIE-create-a-binding-callback-any-properties.html)
* [Bind to a list with ListView](UIE-bind-to-list.html)
* [Bind to a list without ListView](UIE-bind-to-list-without-listview.html)
* [Bind a custom control](UIE-bind-custom-control.html)
* [Bind a custom control to custom data type](UIE-bind-to-custom-data-type.html)

## Additional resources

* [Binding data type conversion](UIE-binding-data-type-conversion.html)
* [Implementation details](UIE-binding-implementation-details.html)
* [Binding examples](UIE-binding-examples.html)

SerializedObject data binding

Bindable elements reference

Copyright ©2005-2026 Unity Technologies. All rights reserved. Built from job ID 63022771. Built on: 2026-02-06.

[Tutorials](https://learn.unity.com/)[Community Answers](https://answers.unity3d.com)[Knowledge Base](https://support.unity3d.com/hc/en-us)[Forums](https://forum.unity3d.com)[Asset Store](https://unity3d.com/asset-store)[Terms of use](https://docs.unity3d.com/Manual/TermsOfUse.html)[Legal](https://unity.com/legal)[Privacy Policy](https://unity.com/legal/privacy-policy)[Cookies](https://unity.com/legal/cookie-policy)[Do Not Sell or Share My Personal Information](https://unity.com/legal/do-not-sell-my-personal-information)

Your Privacy Choices (Cookie Settings)