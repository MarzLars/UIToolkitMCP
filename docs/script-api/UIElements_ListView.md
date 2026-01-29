# UIElements.ListView

**Source:** https://docs.unity3d.com/ScriptReference/UIElements.ListView.html  
**Last Updated:** Thu, 29 Jan 2026 21:16:10 GMT

---

* [Manual](../Manual/index.html)
* [Scripting API](../ScriptReference/index.html)

* [unity.com](https://unity.com/)

Version: **Unity 6.3 LTS** (6000.3)

* Supported
* Legacy

LanguageEnglish

* English

* C#

## Scripting API

Version: Unity 6.3 LTS

Select a different version

LanguageEnglish

* English

# ListView

class in
UnityEngine.UIElements

/

Inherits from:[UIElements.BaseListView](UIElements.BaseListView.html)

/

Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)

Leave feedback

Suggest a change

## Success!

Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

Close

## Submission failed

For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

Close

Your name

Your email

Suggestion\*

Submit suggestion

Cancel

### Description

A ListView is a vertically scrollable area that links to, and displays, a list of items.

A [ListView](UIElements.ListView.html) is a [ScrollView](UIElements.ScrollView.html) with additional logic to display a list of vertically-arranged
VisualElements. Each VisualElement in the list is bound to a corresponding element in a data-source list. The
data-source list can contain elements of any type.

 The logic required to create VisualElements, and to bind them to or unbind them from the data source, varies depending
on the intended result. For the ListView to function correctly, you must supply at least a value for
[itemsSource](UIElements.BaseVerticalCollectionView-itemsSource.html).

 It's also recommended to supply the following properties for more complex items:
- [makeItem](UIElements.ListView-makeItem.html)
- [bindItem](UIElements.ListView-bindItem.html)
- [unbindItem](UIElements.ListView-unbindItem.html)
- [destroyItem](UIElements.ListView-destroyItem.html)
- [fixedItemHeight](UIElements.BaseVerticalCollectionView-fixedItemHeight.html) when using [CollectionVirtualizationMethod.FixedHeight](UIElements.CollectionVirtualizationMethod.FixedHeight.html)

 The `ListView` creates multiple [VisualElement](UIElements.VisualElement.html) objects for the visible items. As the user scrolls, the ListView
recycles these objects and re-binds them to new data items.

 To set the height of a single item in pixels, set the `item-height` property in UXML or the
ListView.itemHeight property in C# to the desired value.

To display a border around the scrollable area, set the `show-border` property in UXML or the
ListView.showBorder property in C# to `true`.

By default, the user can select one element in the list at a time. To change the default selection
use the `selection-type` property in UXML or theListView.selectionType property in C#.
To allow the user to select more than one element simultaneously, set the property to `Selection.Multiple`.
To prevent the user from selecting items, set the property to `Selection.None`.

By default, all rows in the ListView have same background color. To make the row background colors
alternate, set the `show-alternating-row-backgrounds` property in UXML or the
ListView.showAlternatingRowBackgrounds property in C# to
[AlternatingRowBackground.ContentOnly](UIElements.AlternatingRowBackground.ContentOnly.html) or
[AlternatingRowBackground.All](UIElements.AlternatingRowBackground.All.html). For details, see [AlternatingRowBackground](UIElements.AlternatingRowBackground.html).

By default, the user can't reorder the list's elements. To allow the user to drag the elements
to reorder them, set the `reorderable` property in UXML or the ListView.reorderable
property in C# to `true`.

To make the first item in the ListView display the number of items in the list, set the
`show-bound-collection-size` property in UXML or the ListView.showBoundCollectionSize
to true. This is useful for debugging. By default, the ListView's scroller element only scrolls vertically.

To enable horizontal scrolling when the displayed element is wider than the visible area, set the
`horizontal-scrolling-enabled` property in UXML or the ListView.horizontalScrollingEnabled
to `true`.

 For more information, refer to [ListView](../Manual/UIE-uxml-element-ListView.html).

For the difference between IDs and indices, refer to [BaseVerticalCollectionView](UIElements.BaseVerticalCollectionView.html).

The following example creates an editor window with a list view of a thousand items.

```

using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class ListViewExampleWindow : EditorWindow
{
    [MenuItem("Window/ListViewExampleWindow")]
    public static void OpenDemoManual()
    {
        GetWindow<ListViewExampleWindow>().Show();
    }

    public void OnEnable()
    {
        // Create a list of data. In this case, numbers from 1 to 1000.
        const int itemCount = 1000;
        var items = new List<string>(itemCount);
        for (int i = 0; i <= itemCount - 1; i++)
            items.Add(i.ToString());

        // The "makeItem" function is called when the
        // ListView needs more items to render.
        Func<VisualElement> makeItem = () => new Label();

        // As the user scrolls through the list, the ListView object
        // recycles elements created by the "makeItem" function,
        // and invoke the "bindItem" callback to associate
        // the element with the matching data item (specified as an index in the list).
        Action<VisualElement, int> bindItem = (e, i) => (e as Label).text = items[i];

        // Provide the list view with an explicit height for every row
        // so it can calculate how many items to actually display
        const int itemHeight = 16;

        var listView = new ListView(items, itemHeight, makeItem, bindItem)
        {
            // Enables multiple selection using shift or ctrl/cmd keys.
            selectionType = SelectionType.Multiple
        };

        // Set up list view so that you can add or remove items dynamically.
        listView.showAddRemoveFooter = true;

        // Implement functionality on the list view to add or remove items.
        // Note: The "onAdd" and "onRemove" callbacks are optional and you should only use them to override the default logic.
        listView.onAdd = view =>
        {
            var itemsSourceCount = view.itemsSource.Count;
            view.itemsSource.Add(itemsSourceCount.ToString());
            view.RefreshItems();
            view.ScrollToItem(itemsSourceCount);
        };
        listView.onRemove = view =>
        {
            var itemsSourceCount = view.itemsSource.Count;
            view.itemsSource.RemoveAt(itemsSourceCount - 1);
            view.RefreshItems();
            view.ScrollToItem(itemsSourceCount - 2);
        };

        // Single click triggers "selectionChanged" with the selected items. (f.k.a. "onSelectionChange")
        // Use "selectedIndicesChanged" to get the indices of the selected items instead. (f.k.a. "onSelectedIndicesChange")
        listView.selectionChanged += objects => Debug.Log($"Selected: {string.Join(", ", objects)}");

        // Double-click triggers "itemsChosen" with the selected items. (f.k.a. "onItemsChosen")
        listView.itemsChosen += objects => Debug.Log($"Double-clicked: {string.Join(", ", objects)}");

        listView.style.flexGrow = 1.0f;

        rootVisualElement.Add(listView);

        // Allow to add items, but only when there is no override, by using a Toggle.
        listView.allowAdd = true;
        var toggle = new Toggle("Override Add functionality")
        {
            value = listView.overridingAddButtonBehavior != null,
            style = {alignSelf = Align.Auto},
        };
        toggle.RegisterValueChangedCallback(evt => listView.overridingAddButtonBehavior = evt.newValue
            ? (view, button) =>
            {
                Debug.Log("You cannot add new items at this time");
            }
            : null
        );
        rootVisualElement.Add(toggle);
    }
}
```

### Properties

| Property | Description |
| --- | --- |
| [bindItem](UIElements.ListView-bindItem.html) | Callback for binding a data item to the visual element. |
| [destroyItem](UIElements.ListView-destroyItem.html) | Callback invoked when a VisualElement created via makeItem is no longer needed and will be destroyed. |
| [itemTemplate](UIElements.ListView-itemTemplate.html) | A UXML template that constructs each recycled and rebound element within the list. This template is designed to replace the makeItem definition. |
| [makeItem](UIElements.ListView-makeItem.html) | Callback for constructing the VisualElement that is the template for each recycled and re-bound element in the list. |
| [unbindItem](UIElements.ListView-unbindItem.html) | Callback for unbinding a data item from the VisualElement. |

### Constructors

| Constructor | Description |
| --- | --- |
| [ListView](UIElements.ListView-ctor.html) | Creates a ListView with all default properties. The ListView.itemsSource must all be set for the ListView to function properly. |

### Inherited Members

### Static Properties

| Property | Description |
| --- | --- |
| [arraySizeFieldUssClassName](UIElements.BaseListView-arraySizeFieldUssClassName.html) | The USS class name for the size field of the ListView when show bound collection size is enabled |
| [arraySizeFieldWithFooterUssClassName](UIElements.BaseListView-arraySizeFieldWithFooterUssClassName.html) | The USS class name for the size field of the ListView when the footer is enabled. |
| [arraySizeFieldWithHeaderUssClassName](UIElements.BaseListView-arraySizeFieldWithHeaderUssClassName.html) | The USS class name for the size field of the ListView when foldout header is enabled. |
| [emptyLabelUssClassName](UIElements.BaseListView-emptyLabelUssClassName.html) | The USS class name for label displayed when ListView is empty. |
| [foldoutHeaderUssClassName](UIElements.BaseListView-foldoutHeaderUssClassName.html) | The USS class name for the foldout header of the ListView. |
| [footerAddButtonName](UIElements.BaseListView-footerAddButtonName.html) | The name of the add button element in the footer. |
| [footerRemoveButtonName](UIElements.BaseListView-footerRemoveButtonName.html) | The name of the remove button element in the footer. |
| [footerUssClassName](UIElements.BaseListView-footerUssClassName.html) | The USS class name for the footer of the ListView. |
| [itemUssClassName](UIElements.BaseListView-itemUssClassName.html) | The USS class name of item elements in ListView elements. |
| [listViewWithFooterUssClassName](UIElements.BaseListView-listViewWithFooterUssClassName.html) | The USS class name for ListView when add/remove footer is enabled. |
| [listViewWithHeaderUssClassName](UIElements.BaseListView-listViewWithHeaderUssClassName.html) | The USS class name for ListView when foldout header is enabled. |
| [overMaxMultiEditLimitClassName](UIElements.BaseListView-overMaxMultiEditLimitClassName.html) | The USS class name for label displayed when ListView is trying to edit too many items. |
| [reorderableItemContainerUssClassName](UIElements.BaseListView-reorderableItemContainerUssClassName.html) | The USS class name for item container in reorderable animated ListView. |
| [reorderableItemHandleBarUssClassName](UIElements.BaseListView-reorderableItemHandleBarUssClassName.html) | The USS class name for drag handle bar in reorderable animated ListView. |
| [reorderableItemHandleUssClassName](UIElements.BaseListView-reorderableItemHandleUssClassName.html) | The USS class name for drag handle in reorderable animated ListView. |
| [reorderableItemUssClassName](UIElements.BaseListView-reorderableItemUssClassName.html) | The USS class name for item elements in reorderable animated ListView. |
| [reorderableUssClassName](UIElements.BaseListView-reorderableUssClassName.html) | The USS class name for reorderable animated ListView elements. |
| [scrollViewWithFooterUssClassName](UIElements.BaseListView-scrollViewWithFooterUssClassName.html) | The USS class name for scroll view when add/remove footer is enabled. |
| [ussClassName](UIElements.BaseListView-ussClassName.html) | The USS class name for ListView elements. |
| [borderUssClassName](UIElements.BaseVerticalCollectionView-borderUssClassName.html) | The USS class name for BaseVerticalCollectionView elements with a border. |
| [dragHoverBarUssClassName](UIElements.BaseVerticalCollectionView-dragHoverBarUssClassName.html) | The USS class name of the drag hover bar. |
| [dragHoverMarkerUssClassName](UIElements.BaseVerticalCollectionView-dragHoverMarkerUssClassName.html) | The USS class name of the drag hover circular marker used to indicate depth. |
| [itemAlternativeBackgroundUssClassName](UIElements.BaseVerticalCollectionView-itemAlternativeBackgroundUssClassName.html) | The USS class name for odd rows in the BaseVerticalCollectionView. |
| [itemDragHoverUssClassName](UIElements.BaseVerticalCollectionView-itemDragHoverUssClassName.html) | The USS class name applied to an item element on drag hover. |
| [itemSelectedVariantUssClassName](UIElements.BaseVerticalCollectionView-itemSelectedVariantUssClassName.html) | The USS class name of selected item elements in the BaseVerticalCollectionView. |
| [listScrollViewUssClassName](UIElements.BaseVerticalCollectionView-listScrollViewUssClassName.html) | The USS class name of the scroll view in the BaseVerticalCollectionView. |
| [disabledUssClassName](UIElements.VisualElement-disabledUssClassName.html) | USS class name of local disabled elements. |

### Properties

| Property | Description |
| --- | --- |
| [allowAdd](UIElements.BaseListView-allowAdd.html) | This property allows the user to allow or block the addition of an item when clicking on the Add Button. It must return true or false. |
| [allowRemove](UIElements.BaseListView-allowRemove.html) | This property allows the user to allow or block the removal of an item when clicking on the Remove Button. It must return true or false. |
| [bindingSourceSelectionMode](UIElements.BaseListView-bindingSourceSelectionMode.html) | This property controls whether every element in the list will get its data source setup automatically to the correct item in the collection's source. |
| [headerTitle](UIElements.BaseListView-headerTitle.html) | This property controls the text of the foldout header when using showFoldoutHeader. |
| [makeFooter](UIElements.BaseListView-makeFooter.html) | This callback allows the user to make their own footer for this control. |
| [makeHeader](UIElements.BaseListView-makeHeader.html) | This callback allows the user to make their own header for this control. |
| [makeNoneElement](UIElements.BaseListView-makeNoneElement.html) | This callback allows the user to set a Visual Element to replace the "List is empty" Label shown when the ListView is empty. |
| [onAdd](UIElements.BaseListView-onAdd.html) | This callback allows the user to implement their own code to be executed when the Add Button is clicked. |
| [onRemove](UIElements.BaseListView-onRemove.html) | This callback allows the user to implement their own code to be executed when the Remove Button is clicked. |
| [overridingAddButtonBehavior](UIElements.BaseListView-overridingAddButtonBehavior.html) | This callback allows the user to implement a DropdownMenu when the Add Button is clicked. |
| [reorderMode](UIElements.BaseListView-reorderMode.html) | This property controls the drag and drop mode for the list view. |
| [showAddRemoveFooter](UIElements.BaseListView-showAddRemoveFooter.html) | This property controls whether a footer will be added to the list view. |
| [showBoundCollectionSize](UIElements.BaseListView-showBoundCollectionSize.html) | This property controls whether the list view displays the collection size (number of items). |
| [showFoldoutHeader](UIElements.BaseListView-showFoldoutHeader.html) | This property controls whether the list view displays a header, in the form of a foldout that can be expanded or collapsed. |
| [viewController](UIElements.BaseListView-viewController.html) | The view controller for this view, cast as a BaseListViewController. |
| [contentContainer](UIElements.BaseVerticalCollectionView-contentContainer.html) | Returns the content container for the BaseVerticalCollectionView. Because the BaseVerticalCollectionView control automatically manages its content, this always returns null. |
| [fixedItemHeight](UIElements.BaseVerticalCollectionView-fixedItemHeight.html) | The height of a single item in the list, in pixels. |
| [horizontalScrollingEnabled](UIElements.BaseVerticalCollectionView-horizontalScrollingEnabled.html) | This property controls whether the collection view shows a horizontal scroll bar when its content does not fit in the visible area. |
| [itemsSource](UIElements.BaseVerticalCollectionView-itemsSource.html) | The data source for collection items. |
| [reorderable](UIElements.BaseVerticalCollectionView-reorderable.html) | Gets or sets a value that indicates whether the user can drag list items to reorder them. |
| [selectedIds](UIElements.BaseVerticalCollectionView-selectedIds.html) | Returns the persistent IDs of selected items in the data source, regardless of whether they are collapsed or not. Always returns an enumerable, even if no item is selected, or a single item is selected. |
| [selectedIndex](UIElements.BaseVerticalCollectionView-selectedIndex.html) | Returns or sets the selected item's index in the data source. If multiple items are selected, returns the first selected item's index. If multiple items are provided, sets them all as selected. If no item is selected, returns -1. |
| [selectedIndices](UIElements.BaseVerticalCollectionView-selectedIndices.html) | Returns the indices of selected items in the data source. Always returns an enumerable, even if no item is selected, or a single item is selected. |
| [selectedItem](UIElements.BaseVerticalCollectionView-selectedItem.html) | Returns the selected item from the data source. If multiple items are selected, returns the first selected item. |
| [selectedItems](UIElements.BaseVerticalCollectionView-selectedItems.html) | Returns the selected items from the data source. Always returns an enumerable, even if no item is selected, or a single item is selected. |
| [selectionType](UIElements.BaseVerticalCollectionView-selectionType.html) | Controls the selection type. |
| [showAlternatingRowBackgrounds](UIElements.BaseVerticalCollectionView-showAlternatingRowBackgrounds.html) | This property controls whether the background colors of collection view rows alternate. Takes a value from the AlternatingRowBackground enum. |
| [showBorder](UIElements.BaseVerticalCollectionView-showBorder.html) | Enable this property to display a border around the collection view. |
| [virtualizationMethod](UIElements.BaseVerticalCollectionView-virtualizationMethod.html) | The virtualization method to use for this collection when a scroll bar is visible. Takes a value from the CollectionVirtualizationMethod enum. |
| [binding](UIElements.BindableElement-binding.html) | Binding object that will be updated. |
| [bindingPath](UIElements.BindableElement-bindingPath.html) | Path of the target property to be bound. |
| [canGrabFocus](UIElements.Focusable-canGrabFocus.html) | Whether the element can be focused. |
| [delegatesFocus](UIElements.Focusable-delegatesFocus.html) | Whether the element delegates the focus to its children. |
| [focusable](UIElements.Focusable-focusable.html) | Whether an element can potentially receive focus. |
| [focusController](UIElements.Focusable-focusController.html) | Returns the focus controller for this element. |
| [tabIndex](UIElements.Focusable-tabIndex.html) | An integer used to sort focusable elements in the focus ring. Must be greater than or equal to zero. |
| [childCount](UIElements.VisualElement-childCount.html) | Number of child elements in this object's contentContainer. |
| [contentRect](UIElements.VisualElement-contentRect.html) | The rectangle of the content area of the element, in the local space of the element. (Read Only) |
| [customStyle](UIElements.VisualElement-customStyle.html) | The custom style properties accessor of a VisualElement (Read Only). |
| [dataSource](UIElements.VisualElement-dataSource.html) | Assigns a data source to this VisualElement which overrides any inherited data source. This data source is inherited by all children. |
| [dataSourcePath](UIElements.VisualElement-dataSourcePath.html) | Path from the data source to the value. |
| [dataSourceType](UIElements.VisualElement-dataSourceType.html) | The possible type of data source assignable to this VisualElement. This information is only used by the UI Builder as a hint to provide some completion to the data source path field when the effective data source cannot be specified at design time. |
| [disablePlayModeTint](UIElements.VisualElement-disablePlayModeTint.html) | Play-mode tint is applied by default unless this is set to true. It's applied hierarchically to this VisualElement and to all its children that exist on an editor panel. |
| [enabledInHierarchy](UIElements.VisualElement-enabledInHierarchy.html) | Returns true if the VisualElement is enabled in its own hierarchy. |
| [enabledSelf](UIElements.VisualElement-enabledSelf.html) | Returns true if the VisualElement is enabled locally. |
| [experimental](UIElements.VisualElement-experimental.html) | Returns the UIElements experimental interfaces. |
| [generateVisualContent](UIElements.VisualElement-generateVisualContent.html) | Delegate function to generate the visual content of a visual element. |
| [hasActivePseudoState](UIElements.VisualElement-hasActivePseudoState.html) | Returns true if this element matches the :active pseudo-class. |
| [hasCheckedPseudoState](UIElements.VisualElement-hasCheckedPseudoState.html) | Returns true if this element matches the :checked pseudo-class. |
| [hasDisabledPseudoState](UIElements.VisualElement-hasDisabledPseudoState.html) | Returns true if this element matches the :disabled pseudo-class. |
| [hasEnabledPseudoState](UIElements.VisualElement-hasEnabledPseudoState.html) | Returns true if this element matches the :enabled pseudo-class. |
| [hasFocusPseudoState](UIElements.VisualElement-hasFocusPseudoState.html) | Returns true if this element matches the :focus pseudo-class. |
| [hasHoverPseudoState](UIElements.VisualElement-hasHoverPseudoState.html) | Returns true if this element matches the :hover pseudo-class. |
| [hasInactivePseudoState](UIElements.VisualElement-hasInactivePseudoState.html) | Returns true if this element matches the :inactive pseudo-class. |
| [hasRootPseudoState](UIElements.VisualElement-hasRootPseudoState.html) | Returns true if this element matches the :root pseudo-class. |
| [hierarchy](UIElements.VisualElement-hierarchy.html) | Access to this element physical hierarchy |
| [languageDirection](UIElements.VisualElement-languageDirection.html) | Indicates the directionality of the element's text. The value will propagate to the element's children. |
| [layout](UIElements.VisualElement-layout.html) | The position and size of the VisualElement relative to its parent, as computed by the layout system. (Read Only) |
| [localBound](UIElements.VisualElement-localBound.html) | Returns a Rect representing the Axis-aligned Bounding Box (AABB) after applying the transform, but before applying the layout translation. |
| [name](UIElements.VisualElement-name.html) | The name of this VisualElement. |
| [paddingRect](UIElements.VisualElement-paddingRect.html) | The rectangle of the padding area of the element, in the local space of the element. |
| [panel](UIElements.VisualElement-panel.html) | The panel onto which this VisualElement is attached. |
| [parent](UIElements.VisualElement-parent.html) | The parent of this VisualElement. |
| [pickingMode](UIElements.VisualElement-pickingMode.html) | Determines if this element can be the target of pointer events or picked by IPanel.Pick queries. |
| [resolvedStyle](UIElements.VisualElement-resolvedStyle.html) | The final rendered style values of a visual element, as it's rendered in the current frame.(Read Only) |
| [scaledPixelsPerPoint](UIElements.VisualElement-scaledPixelsPerPoint.html) | Return the resulting scaling from the panel that considers the screen DPI and the customizable scaling factor, but not the transform scale of the element and its ancestors. See Panel.scaledPixelsPerPoint. This should only be called on elements that are part of a panel. |
| [schedule](UIElements.VisualElement-schedule.html) | Retrieves the IVisualElementScheduler associated to this VisualElement. Use it to enqueue actions. |
| [style](UIElements.VisualElement-style.html) | Sets the style values on a VisualElement. |
| [styleSheets](UIElements.VisualElement-styleSheets.html) | Returns a VisualElementStyleSheetSet that manipulates style sheets attached to this element. |
| [this[int]](UIElements.VisualElement.Index_operator.html) | Retrieves the child element at a specific index. |
| [tooltip](UIElements.VisualElement-tooltip.html) | Text to display inside an information box after the user hovers the element for a small amount of time. This is only supported in the Editor UI. |
| [usageHints](UIElements.VisualElement-usageHints.html) | A combination of hint values that specify high-level intended usage patterns for the VisualElement. This property can only be set when the VisualElement is not yet part of a Panel. Once part of a Panel, this property becomes effectively read-only, and attempts to change it will throw an exception. The specification of proper UsageHints drives the system to make better decisions on how to process or accelerate certain operations based on the anticipated usage pattern. Note that those hints do not affect behavioral or visual results, but only affect the overall performance of the panel and the elements within. It's advised to always consider specifying the proper UsageHints, but keep in mind that some UsageHints might be internally ignored under certain conditions (e.g. due to hardware limitations on the target platform). |
| [userData](UIElements.VisualElement-userData.html) | This property can be used to associate application-specific user data with this VisualElement. |
| [viewDataKey](UIElements.VisualElement-viewDataKey.html) | Used for view data persistence, such as tree expanded states, scroll position, or zoom level. |
| [visible](UIElements.VisualElement-visible.html) | Indicates whether or not this element should be rendered. |
| [visualTreeAssetSource](UIElements.VisualElement-visualTreeAssetSource.html) | Stores the asset reference, if the generated element is cloned from a VisualTreeAsset. |
| [worldBound](UIElements.VisualElement-worldBound.html) | Returns a Rect representing the Axis-aligned Bounding Box (AABB) after applying the world transform. |
| [worldTransform](UIElements.VisualElement-worldTransform.html) | Returns a matrix that cumulates the following operations (in order): -Local Scaling -Local Rotation -Local Translation -Layout Translation -Parent worldTransform (recursive definition - consider identity when there is no parent) |

### Public Methods

| Method | Description |
| --- | --- |
| [SetViewController](UIElements.BaseListView.SetViewController.html) | Assigns the view controller for this view and registers all events required for it to function properly. |
| [AddToSelection](UIElements.BaseVerticalCollectionView.AddToSelection.html) | Adds an item to the collection of selected items. |
| [ClearSelection](UIElements.BaseVerticalCollectionView.ClearSelection.html) | Deselects any selected items. |
| [GetRootElementForId](UIElements.BaseVerticalCollectionView.GetRootElementForId.html) | Gets the root element of the specified collection view item. |
| [GetRootElementForIndex](UIElements.BaseVerticalCollectionView.GetRootElementForIndex.html) | Gets the root element of the specified collection view item. |
| [Rebuild](UIElements.BaseVerticalCollectionView.Rebuild.html) | Clears the collection view, recreates all visible visual elements, and rebinds all items. |
| [RefreshItem](UIElements.BaseVerticalCollectionView.RefreshItem.html) | Rebinds a single item if it is currently visible in the collection view. |
| [RefreshItems](UIElements.BaseVerticalCollectionView.RefreshItems.html) | Rebinds all items currently visible. |
| [RemoveFromSelection](UIElements.BaseVerticalCollectionView.RemoveFromSelection.html) | Removes an item from the collection of selected items. |
| [ScrollTo](UIElements.BaseVerticalCollectionView.ScrollTo.html) | Scrolls to a specific VisualElement. |
| [ScrollToItem](UIElements.BaseVerticalCollectionView.ScrollToItem.html) | Scrolls to a specific item index and makes it visible. |
| [ScrollToItemById](UIElements.BaseVerticalCollectionView.ScrollToItemById.html) | Scrolls to a specific item id and makes it visible. |
| [SetSelection](UIElements.BaseVerticalCollectionView.SetSelection.html) | Sets the currently selected item. |
| [SetSelectionWithoutNotify](UIElements.BaseVerticalCollectionView.SetSelectionWithoutNotify.html) | Sets a collection of selected items without triggering a selection change callback. |
| [HasBubbleUpHandlers](UIElements.CallbackEventHandler.HasBubbleUpHandlers.html) | Return true if event handlers for the event propagation BubbleUp phase have been attached to this object. |
| [HasTrickleDownHandlers](UIElements.CallbackEventHandler.HasTrickleDownHandlers.html) | Returns true if event handlers, for the event propagation TrickleDown phase, are attached to this object. |
| [RegisterCallback](UIElements.CallbackEventHandler.RegisterCallback.html) | Adds an event handler to the instance. |
| [RegisterCallbackOnce](UIElements.CallbackEventHandler.RegisterCallbackOnce.html) | Adds an event handler to the instance. The event handler is automatically unregistered after it has been invoked exactly once. |
| [UnregisterCallback](UIElements.CallbackEventHandler.UnregisterCallback.html) | Remove callback from the instance. |
| [Blur](UIElements.Focusable.Blur.html) | Tell the element to release the focus. |
| [Focus](UIElements.Focusable.Focus.html) | Attempts to give the focus to this element. |
| [Add](UIElements.VisualElement.Add.html) | Adds an element to the contentContainer of this element. |
| [AddToClassList](UIElements.VisualElement.AddToClassList.html) | Adds a class to the class list of the element in order to assign styles from USS. Note the class name is case-sensitive. |
| [BringToFront](UIElements.VisualElement.BringToFront.html) | Brings this element to the end of its parent children list. The element will be visually in front of any overlapping sibling elements. |
| [Children](UIElements.VisualElement.Children.html) | Returns the elements from its contentContainer. |
| [ClassListContains](UIElements.VisualElement.ClassListContains.html) | Searches for a class in the class list of this element. |
| [Clear](UIElements.VisualElement.Clear.html) | Remove all child elements from this element's contentContainer |
| [ClearBinding](UIElements.VisualElement.ClearBinding.html) | Removes a binding from the element. |
| [ClearBindings](UIElements.VisualElement.ClearBindings.html) | Removes all bindings from the element. |
| [ClearClassList](UIElements.VisualElement.ClearClassList.html) | Removes all classes from the class list of this element. AddToClassList |
| [Contains](UIElements.VisualElement.Contains.html) | Checks if this element is an ancestor of the specified child element. |
| [ContainsPoint](UIElements.VisualElement.ContainsPoint.html) | Checks if the specified point intersects with this VisualElement's layout. |
| [ElementAt](UIElements.VisualElement.ElementAt.html) | Retrieves the child element at a specific index. |
| [EnableInClassList](UIElements.VisualElement.EnableInClassList.html) | Enables or disables the class with the given name. |
| [FindAncestorUserData](UIElements.VisualElement.FindAncestorUserData.html) | Searches up the hierarchy of this VisualElement and retrieves stored userData, if any is found. |
| [FindCommonAncestor](UIElements.VisualElement.FindCommonAncestor.html) | Finds the lowest common ancestor between two VisualElements inside the VisualTree hierarchy. |
| [GetBinding](UIElements.VisualElement.GetBinding.html) | Gets the binding instance for the provided targeted property. |
| [GetBindingInfos](UIElements.VisualElement.GetBindingInfos.html) | Gets information on all the bindings of the current element. |
| [GetClasses](UIElements.VisualElement.GetClasses.html) | Retrieve the classes for this element. |
| [GetDataSourceContext](UIElements.VisualElement.GetDataSourceContext.html) | Queries the dataSource and dataSourcePath of a binding object. |
| [GetFirstAncestorOfType](UIElements.VisualElement.GetFirstAncestorOfType.html) | Walks up the hierarchy, starting from this element's parent, and returns the first VisualElement of this type |
| [GetFirstOfType](UIElements.VisualElement.GetFirstOfType.html) | Walks up the hierarchy, starting from this element, and returns the first VisualElement of this type |
| [GetHierarchicalDataSourceContext](UIElements.VisualElement.GetHierarchicalDataSourceContext.html) | Queries the dataSource and dataSourcePath inherited from the hierarchy. |
| [HasBinding](UIElements.VisualElement.HasBinding.html) | Allows to know if a target property has a binding associated to it. |
| [IndexOf](UIElements.VisualElement.IndexOf.html) | Retrieves the child index of the specified VisualElement. |
| [Insert](UIElements.VisualElement.Insert.html) | Insert an element into this element's contentContainer |
| [IsMarkedForRepaint](UIElements.VisualElement.IsMarkedForRepaint.html) | Checks if the VisualElement is marked dirty for repaint. |
| [MarkDirtyRepaint](UIElements.VisualElement.MarkDirtyRepaint.html) | Marks that the VisualElement requires a repaint. |
| [PlaceBehind](UIElements.VisualElement.PlaceBehind.html) | Places this element right before the sibling element in their parent children list. If the element and the sibling position overlap, the element will be visually behind of its sibling. |
| [PlaceInFront](UIElements.VisualElement.PlaceInFront.html) | Places this element right after the sibling element in their parent children list. If the element and the sibling position overlap, the element will be visually in front of its sibling. |
| [Remove](UIElements.VisualElement.Remove.html) | Removes this child from the hierarchy of its contentContainer. |
| [RemoveAt](UIElements.VisualElement.RemoveAt.html) | Removes a child, at the provided index, from the list of children of the current element. |
| [RemoveFromClassList](UIElements.VisualElement.RemoveFromClassList.html) | Removes a class from the class list of the element. |
| [RemoveFromHierarchy](UIElements.VisualElement.RemoveFromHierarchy.html) | Removes this element from its parent hierarchy. |
| [SendEvent](UIElements.VisualElement.SendEvent.html) | Sends an event to the event handler. |
| [SendToBack](UIElements.VisualElement.SendToBack.html) | Sends this element to the beginning of its parent children list. The element will be visually behind any overlapping sibling elements. |
| [SetActivePseudoState](UIElements.VisualElement.SetActivePseudoState.html) | Sets whether or not this element is displayed as being active. |
| [SetBinding](UIElements.VisualElement.SetBinding.html) | Assigns a binding between a target and a source. |
| [SetCheckedPseudoState](UIElements.VisualElement.SetCheckedPseudoState.html) | Sets whether or not this element is displayed as being checked. |
| [SetEnabled](UIElements.VisualElement.SetEnabled.html) | Changes the VisualElement enabled state. A disabled visual element does not receive most events. |
| [Sort](UIElements.VisualElement.Sort.html) | Reorders child elements from this VisualElement contentContainer. |
| [ToggleInClassList](UIElements.VisualElement.ToggleInClassList.html) | Toggles between adding and removing the given class name from the class list. |
| [TryGetBinding](UIElements.VisualElement.TryGetBinding.html) | Gets the binding instance for the provided targeted property. |
| [TryGetDataSourceContext](UIElements.VisualElement.TryGetDataSourceContext.html) | Queries the dataSource and dataSourcePath of a binding object. |
| [TryGetLastBindingToSourceResult](UIElements.VisualElement.TryGetLastBindingToSourceResult.html) | Returns the last BindingResult of a binding object from the UI to the data source. |
| [TryGetLastBindingToUIResult](UIElements.VisualElement.TryGetLastBindingToUIResult.html) | Returns the last BindingResult of a binding object from the data source to the UI. |

### Protected Methods

| Method | Description |
| --- | --- |
| [CreateViewController](UIElements.BaseVerticalCollectionView.CreateViewController.html) | Creates the view controller for this view. Override this method in inheritors to change the controller type. |
| [HandleEventBubbleUp](UIElements.CallbackEventHandler.HandleEventBubbleUp.html) | Executes logic on this element during the BubbleUp phase, immediately before this element's BubbleUp callbacks. Calling StopPropagation will prevent further invocations of this method along the propagation path. |
| [HandleEventTrickleDown](UIElements.CallbackEventHandler.HandleEventTrickleDown.html) | Executes logic on this element during the TrickleDown phase, immediately after this element's TrickleDown callbacks. Calling StopPropagation will prevent further invocations of this method along the propagation path. |
| [NotifyPropertyChanged](UIElements.CallbackEventHandler.NotifyPropertyChanged.html) | Informs the data binding system that a property of a control has changed. |

### Events

| Event | Description |
| --- | --- |
| [itemsAdded](UIElements.BaseListView-itemsAdded.html) | This event is called for every item added to the itemsSource. Includes the item index. |
| [itemsRemoved](UIElements.BaseListView-itemsRemoved.html) | This event is called for every item removed from the itemsSource. Includes the item index. |
| [canStartDrag](UIElements.BaseVerticalCollectionView-canStartDrag.html) | Called when a drag operation wants to start in this collection view. |
| [dragAndDropUpdate](UIElements.BaseVerticalCollectionView-dragAndDropUpdate.html) | Called when a drag operation updates in this collection view. |
| [handleDrop](UIElements.BaseVerticalCollectionView-handleDrop.html) | Called when a drag operation is released in this collection view. |
| [itemIndexChanged](UIElements.BaseVerticalCollectionView-itemIndexChanged.html) | Called when an item is moved in the itemsSource. |
| [itemsChosen](UIElements.BaseVerticalCollectionView-itemsChosen.html) | Callback triggered when the user acts on a selection of one or more items, for example by double-clicking or pressing Enter. |
| [itemsSourceChanged](UIElements.BaseVerticalCollectionView-itemsSourceChanged.html) | Raised when the data source of a vertical collection view is assigned a new reference or new type. |
| [onItemsChosen](UIElements.BaseVerticalCollectionView-onItemsChosen.html) | Obsolete. Use BaseVerticalCollectionView.itemsChosen instead. |
| [onSelectedIndicesChange](UIElements.BaseVerticalCollectionView-onSelectedIndicesChange.html) | Obsolete. Use BaseVerticalCollectionView.selectedIndicesChanged instead. |
| [onSelectionChange](UIElements.BaseVerticalCollectionView-onSelectionChange.html) | Obsolete. Use BaseVerticalCollectionView.selectionChanged instead. |
| [selectedIndicesChanged](UIElements.BaseVerticalCollectionView-selectedIndicesChanged.html) | Callback triggered when the selection changes. |
| [selectionChanged](UIElements.BaseVerticalCollectionView-selectionChanged.html) | Callback triggered when the selection changes. |
| [setupDragAndDrop](UIElements.BaseVerticalCollectionView-setupDragAndDrop.html) | Called when a drag operation starts in this collection view. |

Is something described here not working as you expect it to? It might be a **Known Issue**. Please check with the Issue Tracker at
[issuetracker.unity3d.com](https://issuetracker.unity3d.com).

Copyright ©2005-2026 Unity Technologies. All rights reserved. Built from job ID 62603599. Built on: 2026-01-29.

[Tutorials](https://unity3d.com/learn)
[Community Answers](https://answers.unity3d.com)
[Knowledge Base](https://support.unity3d.com/hc/en-us)
[Forums](https://forum.unity3d.com)
[Asset Store](https://unity3d.com/asset-store)
[Terms of use](https://docs.unity3d.com/Manual/TermsOfUse.html)
[Legal](https://unity.com/legal)
[Privacy Policy](https://unity.com/legal/privacy-policy)
[Cookies](https://unity.com/legal/cookie-policy)
[Do Not Sell or Share My Personal Information](https://unity.com/legal/do-not-sell-my-personal-information)

Your Privacy Choices (Cookie Settings)