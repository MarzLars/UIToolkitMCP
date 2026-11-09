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
    sealed partial class DataBindingManager : IDisposable
    {

## Source Code Reference

For complete source code, see: [IgnoreUIChangesScope.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/DataBindingManager.cs)

### Public Properties

- **BindingLogLevel**: `enum`
- **owner**: `VisualElement`
- **localDataSource**: `object`
- **hasHierarchicalContext**: `bool`
- **isContextResolved**: `bool`
- **hierarchicalContext**: `DataSourceContext`
- **context**: `DataSourceContext`
- **source**: `object`
- **lastVersion**: `long`
- **refCount**: `int`
- **versionStamp**: `int`
- **versionAtUpdateStart**: `long`
- **changesStamp**: `int`
- **boundElements**: `HashSet<VisualElement>`
- **results**: `List<VisualElement>`

### Public Methods

- **CancelRequest()**: Returns `BindingRequest`
- **AddBindingData()**: Returns `void`
- **TryGetBindingData()**: Returns `bool`
- **RemoveBindingData()**: Returns `bool`
- **GetBindings()**: Returns `List<BindingData>`
- **GetBindingCount()**: Returns `int`
- **Clear()**: Returns `void`
- **Reset()**: Returns `void`
- **SetHierarchicalContext()**: Returns `void`
- **InvalidateHierarchicalContext()**: Returns `void`
- **TraverseRecursive()**: Returns `void`
- **GetTrackedElementsCount()**: Returns `int`
- **GetBoundElements()**: Returns `List<VisualElement>`
- **GetOrderedBindingCollections()**: Returns `List<BindingDataCollection>`
- **GetUnorderedBoundElements()**: Returns `HashSet<VisualElement>`
- **SetDirty()**: Returns `void`
- **TryGetBindingCollection()**: Returns `bool`
- **IsTrackingElement()**: Returns `bool`
- **IsTrackingAnyElementInHierarchy()**: Returns `bool`
- **IsTrackingAnyElement()**: Returns `bool`

