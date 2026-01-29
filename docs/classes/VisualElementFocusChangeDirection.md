# VisualElementFocusChangeDirection

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementFocusRing.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementFocusRing.cs)

---

## Documentation


            ChildOrder,

Order elements according to their position, first by X, then by Y.


            PositionYX
        }

Constructor.

<param name="root">The root of the element tree for which we want to build a focus ring.</param>


**Remarks:**


If the root element is not the absolute root of its own visual tree, navigation within the focus ring

## Source Code Reference

For complete source code, see: [VisualElementFocusChangeDirection.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementFocusRing.cs)

### Public Properties

- **target**: `Focusable`
- **DefaultFocusOrder**: `enum`
- **defaultFocusOrder**: `DefaultFocusOrder`

### Public Methods

- **GetPooled()**: Returns `VisualElementFocusChangeTarget`
- **GetFocusChangeDirection()**: Returns `FocusChangeDirection`
- **GetNextFocusable()**: Returns `Focusable`

