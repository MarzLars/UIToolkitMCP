# Enumerator

**Namespace:** `UnityEngine.UIElements.Layout`

**Source:** [Modules/UIElements/Core/Layout/LayoutNode+Hierarchy.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Layout/LayoutNode+Hierarchy.cs)

---

## Documentation


    LayoutList<LayoutHandle> Children => m_Access.GetNodeData(m_Handle).Children;

Return the child count for this node.

WARNING: This has no safety checks, use with caution.

<param name="index"></param>

<returns>The index of the specified child; -1 if it's not a child.</returns>

<param name="child">The child node to insert.</param>

This uses duck typing and does explicitly implement IEnumerable{YogaNode}.

## Source Code Reference

For complete source code, see: [Enumerator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Layout/LayoutNode+Hierarchy.cs)

### Public Properties

- **Parent**: `LayoutNode`
- **NextChild**: `LayoutNode`

### Public Methods

- **AddChild()**: Returns `void`
- **RemoveChild()**: Returns `void`
- **IndexOf()**: Returns `int`
- **Insert()**: Returns `void`
- **RemoveAt()**: Returns `void`
- **Clear()**: Returns `void`
- **GetEnumerator()**: Returns `Enumerator`
- **Dispose()**: Returns `void`
- **Reset()**: Returns `void`
- **MoveNext()**: Returns `bool`

