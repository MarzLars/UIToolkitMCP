# Statistics

**Namespace:** `UnityEngine.UIElements.UIR`

**Source:** [Modules/UIElements/Core/Renderer/UIRTempAllocator.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRTempAllocator.cs)

---

## Documentation

<param name="poolCapacity">Size of the persistent alloc</param>

<param name="excessMaxCapacity">Maximum size of an excess page. Also defines the threshold from which dedicated pages are allocated for large allocs.</param>

## Source Code Reference

For complete source code, see: [Statistics.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRTempAllocator.cs)

### Public Properties

- **Statistics**: `struct`
- **PageStatistics**: `struct`

### Public Methods

- **Dispose()**: Returns `void`
- **Reset()**: Returns `void`
- **GatherStatistics()**: Returns `Statistics`

