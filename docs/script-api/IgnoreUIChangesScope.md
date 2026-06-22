# IgnoreUIChangesScope

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Bindings/DataBindingManager.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/DataBindingManager.cs)

---

## Documentation

This option can be changed using `Binding.SetGlobalLogLevel` or `Binding.SetPanelLogLevel`.


        [InspectorName("No logs")]
        None,

Log warnings only once when the result of the binding changes.


        [InspectorName("All logs")]
        All,
    }

    [VisibleToOtherModules("UnityEditor.UIToolkitAuthoringModule")]
    sealed class DataBindingManager : IDisposable
    {

## Source Code Reference

For complete source code, see: [IgnoreUIChangesScope.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/DataBindingManager.cs)

### Public Properties

- **BindingLogLevel**: `enum`
- **localDataSource**: `object`
- **context**: `DataSourceContext`
- **boundElements**: `HashSet<VisualElement>`
- **results**: `List<VisualElement>`
- **lastVersion**: `long`
- **refCount**: `int`

### Public Methods

- **CancelRequest()**: Returns `BindingRequest`
- **Create()**: Returns `BindingDataCollection`
- **AddBindingData()**: Returns `void`
- **TryGetBindingData()**: Returns `bool`
- **RemoveBindingData()**: Returns `bool`
- **GetBindings()**: Returns `List<BindingData>`
- **GetBindingCount()**: Returns `int`
- **Dispose()**: Returns `void`
- **Reset()**: Returns `void`
- **TraverseRecursive()**: Returns `void`
- **GetTrackedElementsCount()**: Returns `int`
- **GetBoundElements()**: Returns `List<VisualElement>`
- **GetUnorderedBoundElements()**: Returns `IEnumerable<VisualElement>`
- **SetDirty()**: Returns `void`
- **TryGetBindingCollection()**: Returns `bool`
- **IsTrackingElement()**: Returns `bool`
- **StartTrackingBinding()**: Returns `void`
- **StopTrackingBinding()**: Returns `void`
- **StopTrackingElement()**: Returns `void`
- **Invalidate()**: Returns `void`

