# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementDataBinding.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementDataBinding.cs)

---

## Documentation

<returns>A path for the property.</returns>

<returns>A path for the property.</returns>

<returns>The property.</returns>

<returns>The property.</returns>

<returns><see langword="true"/> if obj and this instance are the same type and represent the same value; otherwise, <see langword="false"/>.</returns>

<inheritdoc/>

<inheritdoc/>

<undoc/>

<undoc/>

This event does not bubble up or trickle down.

creating new events. Events obtained using this method need to be released back to the pool. You can use

<returns>A `PropertyChangedEvent`.</returns>

inherited by all children.


        [CreateProperty]

Passing a value of <see langword="null"/> for <paramref name="binding"/> removes the binding.

<param name="bindingId">The binding ID.</param>

<returns>The binding instance, if it exists.</returns>

<param name="binding">When this method returns, contains the binding associated with the target property, if it exists; otherwise contains <see langword="null"/></param>


**Remarks:**
The order in which the binding information is returned is undefined.


**Remarks:**
The order in which the binding information is returned is undefined.

<returns><see langword="true"/> if the property has a binding; <see langword="false"/> otherwise.</returns>

This is equivalent to calling `SetBinding` with a <see langword="null"/> value./>

<param name="bindingId">The id of the binding to unbind on this element.</param>

<returns>A context object with the data source and data source path of a binding object.</returns>

<param name="context">The resulting context object.</param>

<param name="result">The result of the last binding operation to the UI.</param>

<param name="result">The result of the last binding operation to the data source.</param>

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementDataBinding.cs)

### Public Properties

- **property**: `BindingId`
- **dataSource**: `object`
- **dataSourcePath**: `PropertyPath`

### Public Methods

- **Equals()**: Returns `bool`
- **ToString()**: Returns `string`
- **GetHashCode()**: Returns `int`
- **GetPooled()**: Returns `PropertyChangedEvent`
- **SetBinding()**: Returns `void`
- **GetBinding()**: Returns `Binding`
- **TryGetBinding()**: Returns `bool`
- **GetBindingInfos()**: Returns `IEnumerable<BindingInfo>`
- **HasBinding()**: Returns `bool`
- **ClearBinding()**: Returns `void`
- **ClearBindings()**: Returns `void`
- **GetHierarchicalDataSourceContext()**: Returns `DataSourceContext`
- **GetDataSourceContext()**: Returns `DataSourceContext`
- **TryGetDataSourceContext()**: Returns `bool`
- **TryGetLastBindingToUIResult()**: Returns `bool`
- **TryGetLastBindingToSourceResult()**: Returns `bool`

