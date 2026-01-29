# VisualTreeAsset

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/UXML/VisualTreeAsset.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/VisualTreeAsset.cs)

---

## Documentation

/// **Note**: You can't generate a `VisualTreeAsset` from raw UXML at runtime.


        [VisibleToOtherModules("UnityEditor.UIBuilderModule")]

<returns>The root of the tree of VisualElements that was just cloned.</returns>

<returns>The root of the tree of VisualElements that was just cloned.</returns>

<undoc/>
        // TODO why is this public? It's not used internally and could be obtained by default(CreationContext)

`VisualTreeAsset.CloneTree()`

<undoc/>
        // TODO This feature leaks in the API but isn't usable

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [VisualTreeAsset.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/VisualTreeAsset.cs)

### Public Properties

- **importedWithErrors**: `bool`
- **importedWithWarnings**: `bool`
- **asset**: `Object`
- **templateDependencies**: `IEnumerable<VisualTreeAsset>`
- **stylesheets**: `IEnumerable<StyleSheet>`
- **contentHash**: `int`
- **target**: `VisualElement`
- **visualTreeAsset**: `VisualTreeAsset`
- **slotInsertionPoints**: `Dictionary<string, VisualElement>`

### Public Methods

- **Compare()**: Returns `int`
- **GetField()**: Returns `UxmlObjectAsset`
- **ToString()**: Returns `string`
- **Instantiate()**: Returns `TemplateContainer`
- **CloneTree()**: Returns `TemplateContainer`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`

