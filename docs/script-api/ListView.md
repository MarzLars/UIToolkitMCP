# ListView

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/ListView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ListView.cs)

---

## Documentation

A `ListView` is a `ScrollView` with additional logic to display a list of vertically-arranged

data-source list can contain elements of any type.

The logic required to create VisualElements, and to bind them to or unbind them from the data source, varies depending

<see cref="BaseVerticalCollectionView.itemsSource">itemsSource</see>.

It's also recommended to supply the following properties for more complex items:\\

- <see cref="ListView.bindItem">bindItem</see> \\

- <see cref="ListView.destroyItem">destroyItem</see> \\

/// The `ListView` creates multiple `VisualElement` objects for the visible items. As the user scrolls, the ListView

/// To set the height of a single item in pixels, set the `item-height` property in UXML or the

\\

`ListView.showBorder` property in C# to `true`.\\

By default, the user can select one element in the list at a time. To change the default selection

To allow the user to select more than one element simultaneously, set the property to `Selection.Multiple`.

\\

alternate, set the `show-alternating-row-backgrounds` property in UXML or the

`AlternatingRowBackground.ContentOnly` or

\\

to reorder them, set the `reorderable` property in UXML or the `ListView.reorderable`

\\

`show-bound-collection-size` property in UXML or the `ListView.showBoundCollectionSize`

\\

`horizontal-scrolling-enabled` property in UXML or the `ListView.horizontalScrollingEnabled`

/// For more information, refer to [wiki:UIE-uxml-element-ListView|ListView].

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/ListView_Example.cs"/>


**Remarks:**


This class is added to every `VisualElement` created from UXML.

This class defines the ListView element properties that you can use in a UI document asset (UXML file).

This callback needs to call a function that constructs a blank `VisualElement` that is

/// The BaseVerticalCollectionView automatically creates enough elements to fill the visible area, and adds more if the area

/// If this property and `bindItem` are not set, Unity will either create a PropertyField if bound


        [CreateProperty]

This template is designed to replace the `makeItem` definition.


**Remarks:**



        [CreateProperty]

The method called by this callback receives the VisualElement to bind, and the index of the

/// If this property and `makeItem` are not set, Unity will try to bind to a SerializedProperty if

/// **Note:**: Setting this callback without also setting `unbindItem` might result in unexpected behavior.


        [CreateProperty]

The method called by this callback receives the VisualElement to unbind, and the index of the

/// **Note:**: Setting this callback without also setting `bindItem` might cause unexpected behavior.


        [CreateProperty]

The method called by this callback receives the VisualElement that will be destroyed from the pool.

must all be set for the ListView to function properly.

<param name="itemHeight">The height of each item, in pixels.</param>

VisualElement that can be bound to a data item.</param>

receives as parameters the display item to bind, and the index of the data item to bind it to.</param>

## Source Code Reference

For complete source code, see: [ListView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ListView.cs)

### Public Properties

- **itemTemplate**: `VisualTreeAsset`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

