# TransformOrigin

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/TransformOrigin.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/TransformOrigin.cs)

---

## Documentation

By default, transform-origin is set in percentages relative to the element's size.

These percentages are calculated based on the element’s resulting layout size (resolvedStyle.height and resolvedStyle.width).

The origin is determined based on the local coordinate system of the element, where the top-left corner is considered the origin point (0,0)

Negative values and values larger than 100% are valid and move the transform-origin outside the element.

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [TransformOrigin.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/TransformOrigin.cs)

### Public Properties

- **x**: `Length`
- **y**: `Length`
- **z**: `float`

### Public Methods

- **Initial()**: Returns `TransformOrigin`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **ToString()**: Returns `string`

