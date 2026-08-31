# GridTrackSize

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/GridTrackSize.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/GridTrackSize.cs)

---

## Documentation

The track is sized automatically from its content.
        Auto = 0,

A percentage of the grid container's corresponding dimension.
        Percent = 2,

The largest minimal content contribution of the track's items (`min-content`).
        MinContent = 4,

`grid-template-columns`, `grid-template-rows`, `grid-auto-columns` and `grid-auto-rows`.


**Remarks:**


single sizing function (e.g. `100px`, `1fr`, `auto`), a `minmax(min, max)` pair, or

must stay blittable.

A fixed pixel track.

A percentage track.

A flexible `fr` track.
        // A single <flex> is minmax(auto, <flex>) per CSS Grid; the `auto` min floors the track at
        // min-content so a bare fr never collapses below its content (fr is not a valid minimum).

An `auto` track.

A `min-content` track.

A `max-content` track.

A `minmax(min, max)` track.

A `fit-content(length)` track.

A `repeat(auto-fill, track)` track. The repeat count is resolved from the container size.

A `repeat(auto-fit, track)` track: like auto-fill, but empty tracks collapse to 0.

True when this track is a `minmax()` sizing function.

True when this track is a `fit-content()` sizing function.

True when this track is a `repeat(auto-fill, …)` track.

True when this track is a `repeat(auto-fit, …)` track.

The minimum sizing value.

The minimum sizing unit.

The maximum sizing value (or the single value for a plain track).

The maximum sizing unit (or the single unit for a plain track).

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [GridTrackSize.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/GridTrackSize.cs)

### Public Properties

- **GridTrackSizeUnit**: `enum`

### Public Methods

- **Pixels()**: Returns `GridTrackSize`
- **Percent()**: Returns `GridTrackSize`
- **Fraction()**: Returns `GridTrackSize`
- **Auto()**: Returns `GridTrackSize`
- **MinContent()**: Returns `GridTrackSize`
- **MaxContent()**: Returns `GridTrackSize`
- **Minmax()**: Returns `GridTrackSize`
- **FitContent()**: Returns `GridTrackSize`
- **RepeatAutoFill()**: Returns `GridTrackSize`
- **RepeatAutoFit()**: Returns `GridTrackSize`
- **ToString()**: Returns `string`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`

