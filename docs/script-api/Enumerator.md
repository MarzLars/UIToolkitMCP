# Enumerator

**Namespace:** `UnityEngine.UIElements.Layout`

**Source:** [Modules/UIElements/Core/Layout/LayoutNode+Hierarchy.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Layout/LayoutNode+Hierarchy.cs)

---

## Documentation

<returns>True if @@child@@ is a child of this node</returns>

<param name="child">The child node to insert.</param>

This uses duck typing and does explicitly implement IEnumerable{YogaNode}.

## Source Code Reference

For complete source code, see: [Enumerator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Layout/LayoutNode+Hierarchy.cs)

### Public Properties

- **Parent**: `LayoutNode`
- **FirstChild**: `LayoutNode`
- **NextSibling**: `LayoutNode`
- **PrevSiblingRing**: `LayoutNode`

### Public Methods

- **Contains()**: Returns `bool`
- **AddChild()**: Returns `void`
- **InsertBefore()**: Returns `void`
- **RemoveChild()**: Returns `void`
- **Clear()**: Returns `void`
- **GetEnumerator()**: Returns `Enumerator`
- **Dispose()**: Returns `void`
- **Reset()**: Returns `void`
- **MoveNext()**: Returns `bool`

