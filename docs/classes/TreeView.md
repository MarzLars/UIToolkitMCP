# TreeView

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/TreeView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/TreeView.cs)

---

## Documentation

A `TreeView` is a `ScrollView` with additional logic to display a tree of vertically-arranged

data-source list can contain elements of any type. \\

The logic required to create VisualElements, and to bind them to or unbind them from the data source, varies depending

correctly, you must supply at least the following:

- `BaseVerticalCollectionView.fixedItemHeight`

It is also recommended to supply the following for more complex items:

- `TreeView.makeItem`

- `BaseVerticalCollectionView.fixedItemHeight`, in the case of `FixedHeight` TreeView

The TreeView creates VisualElements for the visible items, and supports binding many more. As the user scrolls, the TreeView

/// For more information, refer to [wiki:UIE-uxml-element-TreeView|UXML element TreeView].

For the difference between IDs and indices, refer to `BaseVerticalCollectionView`.

This class is added to every `VisualElement` created from UXML.

This class defines the TreeView element properties that you can use in a UI document asset (UXML file).

This callback needs to call a function that constructs a blank `VisualElement` that is

/// The collection view automatically creates enough elements to fill the visible area, and adds more if the area

/// If this property and `bindItem` are not set, Unity will either create a PropertyField if bound


        [CreateProperty]

This template is designed to replace the `makeItem` definition.

The method called by this callback receives the VisualElement to bind, and the index of the

/// If this property and `makeItem` are not set, Unity will try to bind to a SerializedProperty if

/// **Note:**: Setting this callback without also setting `unbindItem` might result in unexpected behavior.


        [CreateProperty]

The method called by this callback receives the VisualElement to unbind, and the index of the

/// **Note:**: Setting this callback without also setting `bindItem` might cause unexpected behavior.


        [CreateProperty]

The method called by this callback receives the VisualElement that will be destroyed from the pool.

Root items can include their children directly.

<param name="rootItems">The TreeView root items.</param>

Use `BaseTreeView.SetRootItems{T}` to add content.

VisualElement that can be bound to a data item.</param>

receives as parameters the display item to bind, and the index of the data item to bind it to.</param>

Use `BaseTreeView.SetRootItems{T}` to add content.

<param name="makeItem">The factory method to call to create a display item. The method should return a

<param name="bindItem">The method to call to bind a data item to a display item. The method


**Remarks:**


## Source Code Reference

For complete source code, see: [TreeView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/TreeView.cs)

### Public Properties

- **itemTemplate**: `VisualTreeAsset`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

