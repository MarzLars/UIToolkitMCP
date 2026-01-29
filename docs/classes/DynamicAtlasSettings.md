# DynamicAtlasSettings

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/GameObjects/DynamicAtlasSettings.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/DynamicAtlasSettings.cs)

---

## Documentation


    [Serializable]

and must be greater than 0 and less than or equal to `maxAtlasSize`.

and must be greater than or equal to `minAtlasSize`.

contains `DynamicAtlasFilters.Size`, textures larger than this size are excluded from the atlas. Otherwise, this

When you assign a delegate to the atlas's custom filter, activeFilters is passed to the custom filter.

## Source Code Reference

For complete source code, see: [DynamicAtlasSettings.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/DynamicAtlasSettings.cs)

### Public Properties

- **DynamicAtlasSettings**: `class`
- **minAtlasSize**: `int`
- **maxAtlasSize**: `int`
- **maxSubTextureSize**: `int`
- **activeFilters**: `DynamicAtlasFilters`
- **customFilter**: `DynamicAtlasCustomFilter`

