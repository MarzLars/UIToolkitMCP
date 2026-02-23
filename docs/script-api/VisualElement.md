# VisualElement

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementHierarchy.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementHierarchy.cs)

---

## Documentation

///

Unlike the `Hierarchy.parent` property, this property reflects for logical hierarchy.

the ScrollView itself, whereas the physical parent returned by the `Hierarchy.parent` property


        [CreateProperty(ReadOnly = true)]

If a child is added to this element, the child is added to this element's content container instead.


**Remarks:**


element's content container hierarchy is used instead of the element itself.

if they are not directly in the content container's hierarchy.

If the content container is the same as the element itself, child elements are added directly to the element.

/// The `ScrollView`, for example, has a content container that is different from itself.

While the physical parent (`VisualElement.Hierarchy.parent`) of the child elements is the

still refers to the scroll view itself.

`Scroller` elements, these focusable children are not considered by default when using

Refer to

for an example of a workaround solution if the default navigation rules don't correspond to your needs.

<seealso cref="VisualElement.hierarchy"/>


        [CreateProperty(ReadOnly = true)]

Adds the child element to the <see cref="VisualElement.hierarchy">hierarchy</see> if this element is the content container; otherwise, adds the child element to the content container of this element.

Exits without performing any action if the child element is <see langword="null"/>.

Throws an InvalidOperationException if the contentContainer is <see langword="null"/>.

<param name="child">The child element to add to the content container.</param>

The following example shows how to add a [Button] to a visual element.

</example>


**Remarks:**


Removes the element from both the child list and the layout list. This also removes and invalidates the rendering data of the element at the index

descendants.

\\

\\

__Note__: Avoid removing an element during a layout pass to prevent invalid operation exceptions and potential side effects.

///
        [CreateProperty(ReadOnly = true)]

<returns>The index of the child, or -1 if the child is not found.</returns>

Use this method along with `FindElementInTree`.

<param name="childIndexes">An array of indexes that represents the path of elements that this method follows through the visual tree.</param>

Use this method along with `ElementAtTreePath`.

<param name="element">The element to look for.</param>

The elements returned by this method are the logical children of the element.

property doesn't return the element itself. For more information, refer to `VisualElement.contentContainer`.

To access the physical children of the element, use `VisualElement.Hierarchy.Children`.

<seealso cref="VisualElement.contentContainer"/>


**Remarks:**



**Remarks:**


This method will first calculate the index of the child, followed by calling the `RemoveAt(int)` method to remove it from the hierarchy.

Removes the element from both the child list and the layout list. This also releases the rendering data of the element at the index

descendants.

\\

\\

__Note__: Avoid removing an element during a layout pass to prevent invalid operation exceptions and potential side effects.

///

Throws an `IndexOutOfRangeException` exception if the index is invalid.

<param name="key">The index of the child</param>

<returns>The index of the element, or -1 if the element is not found.</returns>

This might differ from the logical children of the element if the element's contentContainer

<returns>Returns true if the two instances refer to the same element, false otherwise.</returns>

<undoc/>

<param name="y">The right operand of the comparison.</param>

<param name="y">The right operand of the comparison.</param>

<returns>The first ancestor satisfying the predicate or null otherwise.</returns>
        [VisibleToOtherModules("UnityEditor.UIBuilderModule")]

This method "walks up" the hierarchy of the child element until it reaches this element or the root of the visual tree.

<param name="child">The child element to test against.</param>

## Source Code Reference

For complete source code, see: [VisualElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementHierarchy.cs)

### Public Properties

- **hierarchy**: `Hierarchy`
- **cacheAsBitmap**: `bool`
- **parent**: `VisualElement`
- **panel**: `IPanel`
- **contentContainer**: `VisualElement`
- **visualTreeAssetSource**: `VisualTreeAsset`
- **childCount**: `int`
- **Hierarchy**: `struct`
- **parent**: `VisualElement`
- **childCount**: `int`

### Public Methods

- **Add()**: Returns `void`
- **Insert()**: Returns `void`
- **Remove()**: Returns `void`
- **RemoveAt()**: Returns `void`
- **Clear()**: Returns `void`
- **ElementAt()**: Returns `VisualElement`
- **IndexOf()**: Returns `int`
- **Children()**: Returns `IEnumerable<VisualElement>`
- **Sort()**: Returns `void`
- **BringToFront()**: Returns `void`
- **SendToBack()**: Returns `void`
- **PlaceBehind()**: Returns `void`
- **PlaceInFront()**: Returns `void`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **RemoveFromHierarchy()**: Returns `void`
- **Contains()**: Returns `bool`
- **FindCommonAncestor()**: Returns `VisualElement`

