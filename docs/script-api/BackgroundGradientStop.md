# BackgroundGradientStop

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/BackgroundGradient.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/BackgroundGradient.cs)

---

## Documentation

An axis-aligned ellipse stretched to the gradient size.
        Ellipse,

Reach the corner of the element farthest from the gradient center (CSS default).
        FarthestCorner,

Reach the corner of the element closest to the gradient center.
        ClosestCorner,


    [Serializable]

Color of the stop.

when true, expressed as a fraction in [0,1]; when false, expressed as a length in element-local pixels.

True when `position` is a percentage (fraction of the gradient extent).

Construct a stop expressed as a percentage of the gradient extent.

Construct a stop expressed as a pixel length along the gradient axis.

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

linear-gradient() / radial-gradient() functions.


**Remarks:**


as "no gradient" — see `IsEmpty`.

Whether the gradient transitions linearly or radiates from a center point.

matching `linear-gradient(0deg, ...)`). Ignored for radial gradients.

Ordered list of color stops along the gradient axis.

Shape used to interpret `size` for radial gradients. Ignored for linear gradients.

Extent of a radial gradient. Ignored for linear gradients.

(0 = top-left, 1 = bottom-right). Default (0.5, 0.5) places the gradient at the

True when this gradient has no color stops, meaning it represents "no gradient".

Construct a linear gradient from an angle (radians) and a stop list.

Construct a radial gradient at the element center with default extent / shape.

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [BackgroundGradientStop.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/BackgroundGradient.cs)

### Public Properties

- **BackgroundGradientShape**: `enum`
- **BackgroundGradientSize**: `enum`
- **type**: `GradientType`
- **angle**: `float`
- **shape**: `BackgroundGradientShape`
- **size**: `BackgroundGradientSize`
- **position**: `Vector2`

### Public Methods

- **Percent()**: Returns `BackgroundGradientStop`
- **Pixels()**: Returns `BackgroundGradientStop`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **ToString()**: Returns `string`
- **IsEmpty()**: Returns `bool`
- **Linear()**: Returns `BackgroundGradient`
- **Radial()**: Returns `BackgroundGradient`

