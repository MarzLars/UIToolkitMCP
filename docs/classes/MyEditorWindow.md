# MyEditorWindow

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/StyleSheets/StyleSheet.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/StyleSheets/StyleSheet.cs)

---

## Documentation

The `StyleSheet` class holds the imported data of USS files in your project.

<code>

public class MyEditorWindow : EditorWindow

void OnEnable()

rootVisualElement.styleSheets.Add(AssetDatabase.LoadAssetAtPath<StyleSheet>("Assets/styles.uss"));

}

</code>

## Source Code Reference

For complete source code, see: [MyEditorWindow.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/StyleSheets/StyleSheet.cs)

### Public Properties

- **importedWithErrors**: `bool`
- **importedWithWarnings**: `bool`
- **contentHash**: `int`

