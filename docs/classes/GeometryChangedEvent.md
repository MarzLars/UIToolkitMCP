# GeometryChangedEvent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Events/LayoutEvents.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/LayoutEvents.cs)

---

## Documentation

This event does not trickle down or bubble up. It cannot be cancelled.

instead of instancing new events. Use Dispose() to release events back to the event pool.

<param name="oldRect">The old dimensions of the element.</param>

<returns>An initialized event.</returns>

## Source Code Reference

For complete source code, see: [GeometryChangedEvent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Events/LayoutEvents.cs)

### Public Properties

- **oldRect**: `Rect`
- **newRect**: `Rect`

### Public Methods

- **GetPooled()**: Returns `GeometryChangedEvent`

