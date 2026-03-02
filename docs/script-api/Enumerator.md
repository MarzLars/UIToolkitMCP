# Enumerator

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/ScriptBindings/VisualNodeChildrenData.bindings.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/ScriptBindings/VisualNodeChildrenData.bindings.cs)

---

## Documentation


[StructLayout(LayoutKind.Explicit, Size = 32)]
readonly unsafe struct VisualNodeChildrenData : IEnumerable<VisualNodeHandle>
{

<returns>The child handle.</returns>

<returns>The child handle.</returns>

<exception cref="IndexOutOfRangeException">The given index is out of range.</exception>

<exception cref="IndexOutOfRangeException">The given index is out of range.</exception>

## Source Code Reference

For complete source code, see: [Enumerator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/ScriptBindings/VisualNodeChildrenData.bindings.cs)

### Public Properties

- **Count**: `int`

### Public Methods

- **MoveNext()**: Returns `bool`
- **Reset()**: Returns `void`
- **Dispose()**: Returns `void`
- **ElementAt()**: Returns `VisualNodeHandle`
- **GetEnumerator()**: Returns `Enumerator`

