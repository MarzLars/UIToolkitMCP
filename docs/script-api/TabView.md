# TabView

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/TabView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/TabView.cs)

---

## Documentation

A tab view provides additional functionality to the Tab. It allows a group of tabs to interact between each

the group of tabs.

For reorderable tabs, it is important to keep the view-data-key unique for the TabView and Tab elements inside

view-data-key, which is the default value, the state of the tabs will not persist when reloading the document.

For more information, refer to [wiki:UIE-uxml-element-TabView|UXML element TabView].


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

This class defines the properties of a TabView element that you can use in a UXML asset.

This callback receives two tabs, the first being the previously selected tab and the second

The first argument is source index, second is destination index.

The first argument is the tab that was closed, the second is the index of the tab that was closed.

Setting a valid tab will also deselect the previous active tab before setting the newly assigned tab to

<exception cref="Exception">If the Tab being passed does not exists in the current TabView.</exception>

Setting a valid index will set the Tab at the given index to active.

The default value is `false`.


        [CreateProperty]

If the TabView contains a view-data-key, reorder the tab only after the view data is applied. Otherwise, the view data will override the order.

<param name="from">The current index of the tab to move.</param>

## Source Code Reference

For complete source code, see: [TabView.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/TabView.cs)

### Public Properties

- **contentViewport**: `VisualElement`
- **activeTab**: `Tab`
- **selectedTabIndex**: `int`
- **reorderable**: `bool`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`
- **OnBeforeSerialize()**: Returns `void`
- **OnAfterDeserialize()**: Returns `void`
- **ReorderTab()**: Returns `void`
- **GetTab()**: Returns `Tab`
- **GetTabHeader()**: Returns `VisualElement`

