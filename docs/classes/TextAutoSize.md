# TextAutoSize

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/TextAutoSize.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextAutoSize.cs)

---

## Documentation

Defines how a text element adapts its `font-size`.

Use the explicit `font-size`.
        None,

Setting controls automatic font‑size adjustment.

BestFit – ignore `font-size` and scale text between `minSize` and `maxSize`.

Lower font‑size limit used when `mode` is `TextAutoSizeMode.BestFit`.

Upper font‑size limit used when `mode` is `TextAutoSizeMode.BestFit`.

<param name="mode">Auto‑size mode.</param>

<param name="maxSize">Upper bound.</param>

Returns a preset with auto‑sizing disabled.

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [TextAutoSize.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/TextAutoSize.cs)

### Public Properties

- **TextAutoSizeMode**: `enum`
- **mode**: `TextAutoSizeMode`
- **minSize**: `Length`
- **maxSize**: `Length`

### Public Methods

- **None()**: Returns `TextAutoSize`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`

