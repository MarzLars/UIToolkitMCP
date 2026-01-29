# UQueryState

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/UQuery.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UQuery.cs)

---

## Documentation

See UQuery [wiki:UIE-UQuery|manual page] for further information.

<returns>A new QueryState with the same selection rules, applied on this element.</returns>

<returns>The match element at the specified index.</returns>

<param name="funcCall">The function to be invoked with each matching element.</param>

<undoc/>

<undoc/>

<undoc/>
            object IEnumerator.Current => Current;

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

A generic class that allows you to build queries for UI elements of type T.

It enables you to search for elements and execute the query on any VisualElement, making it easier to navigate

/// For more information, refer to the [wiki:UIE-UQuery|UQuery manual page].

<example>

<code source="../Tests/UIElementsExamples/Assets/Examples/UQueryBuilderExample.cs"/>


**Remarks:**


To select elements by their C# type, use `OfType{T2}(string,string[])`.

<code>

// Get all children, recursively, of root that are buttons and have classes "health-button" or "unity-button".

]]>

</example>

<code>

// Get all children, recursively, of root that are buttons and have class "health-button".

]]>

</example>

<code>

// Get all direct children of root that are buttons and have classes "health-button" or "unity-button".

]]>

</example>

<code>

// Get all children, recursively, of root that are buttons and have class "health-button".

]]>

</example>

<param name="classes">If provided, it selects elements with all the specified classes (case sensitive, to be distinguished from Type).</param>

<param name="className">If specified, will select elements with the given class (not to be confused with Type).</param>

<returns>QueryBuilder configured with the associated selection rules.</returns>


        [Obsolete("Use Checked() instead")]


        [Obsolete("Use NotChecked() instead")]

<undoc/>

<undoc/>

<undoc/>

<seealso cref="UQueryState{T}.First"/>

<param name="funcCall">The function to be invoked with each matching element.</param>

<undoc/>

<undoc/>

For more information, refer to [wiki:UIE-UQuery|Find visual elements with UQuery].

<param name="name">If specified, will select elements with this name.</param>

<returns>The first element matching all the criteria, or null if none was found.</returns>

<param name="name">If specified, will select elements with this name.</param>

<returns>The first element matching all the criteria, or null if none was found.</returns>

<param name="name">If specified, will select elements with this name.</param>

<returns>The first element matching all the criteria, or null if none was found.</returns>

<param name="name">If specified, will select elements with this name.</param>

<returns>The first element matching all the criteria, or null if none was found.</returns>

<param name="name">If specified, will select elements with this name. The default value is @@null@@.</param>

<returns>QueryBuilder configured with the associated selection rules.</returns>

<param name="name">If specified, will select elements with this name. The default value is @@null@@.</param>

<returns>QueryBuilder configured with the associated selection rules.</returns>

<param name="name">If specified, will select elements with this name. The default value is @@null@@.</param>

<returns>QueryBuilder configured with the associated selection rules.</returns>

<param name="name">If specified, will select elements with this name. The default value is @@null@@.</param>

<returns>QueryBuilder configured with the associated selection rules.</returns>

<returns>QueryBuilder configured with the associated selection rules.</returns>

## Source Code Reference

For complete source code, see: [UQueryState.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UQuery.cs)

### Public Properties

- **UQuery**: `class`
- **match**: `VisualElement`
- **matchIndex**: `int`
- **matches**: `List<TElement>`
- **callBack**: `Func<T, TReturnType>`
- **result**: `List<TReturnType>`
- **UQueryExtensions**: `class`

### Public Methods

- **ToString()**: Returns `string`
- **Predicate()**: Returns `bool`
- **Traverse()**: Returns `void`
- **TraverseRecursive()**: Returns `void`
- **Run()**: Returns `void`
- **IsInUse()**: Returns `bool`
- **CreateNew()**: Returns `SingleQueryMatcher`
- **RebuildOn()**: Returns `UQueryState<T>`
- **First()**: Returns `T`
- **Last()**: Returns `T`
- **Reset()**: Returns `void`
- **ToList()**: Returns `void`
- **AtIndex()**: Returns `T`
- **ForEach()**: Returns `void`
- **GetEnumerator()**: Returns `Enumerator`
- **MoveNext()**: Returns `bool`
- **Dispose()**: Returns `void`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **Class()**: Returns `UQueryBuilder<T>`

