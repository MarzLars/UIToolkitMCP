# UIElements.Label

**Source:** https://docs.unity3d.com/ScriptReference/UIElements.Label.html  
**Last Updated:** Thu, 29 Jan 2026 21:16:05 GMT

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

# Label

class in
UnityEngine.UIElements

/

Inherits from:[UIElements.TextElement](UIElements.TextElement.html)

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

Provides an Element displaying text. For more information, refer to [UXML element Label](../Manual/UIE-uxml-element-Label.html).

### Static Properties

| Property | Description |
| --- | --- |
| [ussClassName](UIElements.Label-ussClassName.html) | USS class name of elements of this type. |

### Constructors

| Constructor | Description |
| --- | --- |
| [Label](UIElements.Label-ctor.html) | Constructs a Label with no initial text. |

### Inherited Members

### Static Properties

| Property | Description |
| --- | --- |
| [selectableUssClassName](UIElements.TextElement-selectableUssClassName.html) | USS class name of selectable text elements. |
| [ussClassName](UIElements.TextElement-ussClassName.html) | USS class name of elements of this type. |
| [disabledUssClassName](UIElements.VisualElement-disabledUssClassName.html) | USS class name of local disabled elements. |

### Properties

| Property | Description |
| --- | --- |
| [binding](UIElements.BindableElement-binding.html) | Binding object that will be updated. |
| [bindingPath](UIElements.BindableElement-bindingPath.html) | Path of the target property to be bound. |
| [canGrabFocus](UIElements.Focusable-canGrabFocus.html) | Whether the element can be focused. |
| [delegatesFocus](UIElements.Focusable-delegatesFocus.html) | Whether the element delegates the focus to its children. |
| [focusable](UIElements.Focusable-focusable.html) | Whether an element can potentially receive focus. |
| [focusController](UIElements.Focusable-focusController.html) | Returns the focus controller for this element. |
| [tabIndex](UIElements.Focusable-tabIndex.html) | An integer used to sort focusable elements in the focus ring. Must be greater than or equal to zero. |
| [displayTooltipWhenElided](UIElements.TextElement-displayTooltipWhenElided.html) | When true, a tooltip displays the full version of elided text, and also if a tooltip had been previously provided, it will be overwritten. |
| [emojiFallbackSupport](UIElements.TextElement-emojiFallbackSupport.html) | Specifies the order in which the system should look for Emoji characters when rendering text. If this setting is enabled, the global Emoji Fallback list will be searched first for characters defined as Emoji in the Unicode 14.0 standard. |
| [enableRichText](UIElements.TextElement-enableRichText.html) | When false, rich text tags will not be parsed. |
| [experimental](UIElements.TextElement-experimental.html) | Returns the TextElement experimental interface. |
| [isElided](UIElements.TextElement-isElided.html) | Returns true if text is elided, false otherwise. |
| [parseEscapeSequences](UIElements.TextElement-parseEscapeSequences.html) | Determines how escape sequences are displayed. When set to true, escape sequences (such as \n, \t) are parsed and transformed into their corresponding characters. For example, '\n' will insert a new line. When set to false, escape sequences are displayed as raw text (for example, \n is shown as the characters '\' followed by 'n'). |
| [PostProcessTextVertices](UIElements.TextElement.PostProcessTextVertices.html) | Callback fired after UI Toolkit has generated the vertex data for a TextElement and before the geometry is sent to the renderer. Use it to inspect or modify each glyph’s quad (position, tint, UVs, etc.) to implement custom per‑glyph effects. |
| [selection](UIElements.TextElement-selection.html) | Retrieves this TextElement's ITextSelection |
| [text](UIElements.TextElement-text.html) | The text to be displayed. |
| [childCount](UIElements.VisualElement-childCount.html) | Number of child elements in this object's contentContainer. |
| [contentContainer](UIElements.VisualElement-contentContainer.html) | Logical container where child elements are added. If a child is added to this element, the child is added to this element's content container instead. |
| [contentRect](UIElements.VisualElement-contentRect.html) | The rectangle of the content area of the element, in the local space of the element. (Read Only) |
| [customStyle](UIElements.VisualElement-customStyle.html) | The custom style properties accessor of a VisualElement (Read Only). |
| [dataSource](UIElements.VisualElement-dataSource.html) | Assigns a data source to this VisualElement which overrides any inherited data source. This data source is inherited by all children. |
| [dataSourcePath](UIElements.VisualElement-dataSourcePath.html) | Path from the data source to the value. |
| [dataSourceType](UIElements.VisualElement-dataSourceType.html) | The possible type of data source assignable to this VisualElement. This information is only used by the UI Builder as a hint to provide some completion to the data source path field when the effective data source cannot be specified at design time. |
| [disablePlayModeTint](UIElements.VisualElement-disablePlayModeTint.html) | Play-mode tint is applied by default unless this is set to true. It's applied hierarchically to this VisualElement and to all its children that exist on an editor panel. |
| [enabledInHierarchy](UIElements.VisualElement-enabledInHierarchy.html) | Returns true if the VisualElement is enabled in its own hierarchy. |
| [enabledSelf](UIElements.VisualElement-enabledSelf.html) | Returns true if the VisualElement is enabled locally. |
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
| [HasBubbleUpHandlers](UIElements.CallbackEventHandler.HasBubbleUpHandlers.html) | Return true if event handlers for the event propagation BubbleUp phase have been attached to this object. |
| [HasTrickleDownHandlers](UIElements.CallbackEventHandler.HasTrickleDownHandlers.html) | Returns true if event handlers, for the event propagation TrickleDown phase, are attached to this object. |
| [RegisterCallback](UIElements.CallbackEventHandler.RegisterCallback.html) | Adds an event handler to the instance. |
| [RegisterCallbackOnce](UIElements.CallbackEventHandler.RegisterCallbackOnce.html) | Adds an event handler to the instance. The event handler is automatically unregistered after it has been invoked exactly once. |
| [UnregisterCallback](UIElements.CallbackEventHandler.UnregisterCallback.html) | Remove callback from the instance. |
| [Blur](UIElements.Focusable.Blur.html) | Tell the element to release the focus. |
| [Focus](UIElements.Focusable.Focus.html) | Attempts to give the focus to this element. |
| [MarkDirtyText](UIElements.TextElement.MarkDirtyText.html) | Marks that the TextElement forces a layout and repaint. |
| [MeasureTextSize](UIElements.TextElement.MeasureTextSize.html) | Computes the size needed to display a text string based on element style values such as font, font-size, word-wrap, and so on. |
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
| [HandleEventBubbleUp](UIElements.CallbackEventHandler.HandleEventBubbleUp.html) | Executes logic on this element during the BubbleUp phase, immediately before this element's BubbleUp callbacks. Calling StopPropagation will prevent further invocations of this method along the propagation path. |
| [HandleEventTrickleDown](UIElements.CallbackEventHandler.HandleEventTrickleDown.html) | Executes logic on this element during the TrickleDown phase, immediately after this element's TrickleDown callbacks. Calling StopPropagation will prevent further invocations of this method along the propagation path. |
| [NotifyPropertyChanged](UIElements.CallbackEventHandler.NotifyPropertyChanged.html) | Informs the data binding system that a property of a control has changed. |

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