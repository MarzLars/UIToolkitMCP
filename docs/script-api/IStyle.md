# IStyle

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/IStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/IStyle.cs)

---

## Documentation

This property is deprecated. Use [BackgroundPropertyHelper] to set the background properties.


        [Obsolete("unityBackgroundScaleMode is deprecated. Use background-* properties instead.")]
        StyleEnum<ScaleMode> unityBackgroundScaleMode { get; set; }

Clears inline style properties of the element.

<param name="clearSourceAssetStyles">Indicates if the inline style properties coming from the source asset must also be cleared for the element. </param>

/// After clearing, the style properties of the element revert to the values defined in stylesheets or default values.

By default, this method clears all inline style properties, including those coming from the source asset from which the element was created.

The following example compares this method and resetting style properties individually.

## Source Code Reference

For complete source code, see: [IStyle.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/IStyle.cs)

