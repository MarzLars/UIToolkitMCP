# DataBinding

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Bindings/DataBinding.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/DataBinding.cs)

---

## Documentation

Changes on the UI will be replicated to the data source.


        ToSource,

Changes will only be replicated from the source to the UI for this binding.


        ToTargetOnce,
    }

Binding type that enables data synchronization between a property of a data source and a property of a `VisualElement`.

part of the UI hierarchy, such as a static localization table. If this object is null, the binding resolves

Using a local source does not prevent children of the target from using the hierarchy source.

This information is only used by the UI Builder as a hint to provide some completion to the data source path field when the effective data source cannot be specified at design time.


        [CreateProperty]

The default value is `BindingMode.TwoWay`.


        [CreateProperty(ReadOnly = true)]


        [CreateProperty(ReadOnly = true)]

UI control to a data source.


**Remarks:**


data source to a UI control.


**Remarks:**


<param name="value">The resolved value from the data source.</param>

<returns>A `BindingResult` indicating if the binding update succeeded or not.</returns>

<param name="value">The resolved value from the data source.</param>

<returns>A `BindingResult` indicating if the binding update succeeded or not.</returns>

## Source Code Reference

For complete source code, see: [DataBinding.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/DataBinding.cs)

### Public Properties

- **BindingMode**: `enum`
- **dataSource**: `object`
- **dataSourceType**: `Type`
- **dataSourcePath**: `PropertyPath`
- **bindingMode**: `BindingMode`
- **sourceToUiConverters**: `ConverterGroup`
- **uiToSourceConverters**: `ConverterGroup`

### Public Methods

- **ApplyConverterGroupToSource()**: Returns `void`
- **ApplyConverterGroupToUI()**: Returns `void`

