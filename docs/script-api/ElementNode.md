# ElementNode

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Referencing/VisualElementAssetReferenceTable.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Referencing/VisualElementAssetReferenceTable.cs)

---

## Documentation

This example shows how to use the `VisualElementAssetReferenceTable` to resolve references to VisualElements after calling CloneTree.

</example>

This is stored as a weak reference, which might be null if the element has been destroyed.

<param name="elementNode">The found element node matching <paramref name="id"/>.</param>

You can reference the root with an `AuthoringIdPath` that contains a single ID of 0.

making them available for reuse and reducing allocation overhead.

<param name="idPath">The authoring ID path to search for.</param>

The element found at the given path. It's <see langword="null"/> if the element is no longer

</param>

<param name="documentNode">The document node to search within. This allows searching for a path that is not based on the root.</param>

<param name="element">

part of the hierarchy and has been destroyed.

<returns><see langword="true"/> if the path was found; otherwise <see langword="false"/>.</returns>

Releases all cached references and disposes all nodes.

## Source Code Reference

For complete source code, see: [ElementNode.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Referencing/VisualElementAssetReferenceTable.cs)

### Public Properties

- **visualElement**: `VisualElement`
- **root**: `DocumentNode`

### Public Methods

- **Dispose()**: Returns `void`
- **TryGetChild()**: Returns `bool`
- **ReleaseToPool()**: Returns `void`

