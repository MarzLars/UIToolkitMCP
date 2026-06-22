# FillGradient

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Native/Renderer/UIPainter2D.bindings.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Native/Renderer/UIPainter2D.bindings.cs)

---

## Documentation

The "non-zero" winding rule.
        NonZero,

The join converts to a beveled join when the `Painter2D.miterLimit` ratio is reached.

Joins the sub-paths with a beveled corner.
        Bevel,

Terminates the path with no tip.
        Butt,

A clockwise direction.
        Clockwise,

The start, end , center, focus, and radius properties are pixel coordinate relative to the painter's coordinate system.


**Remarks:**


the type of gradient (linear or radial), and the parameters that control the direction or focus of the gradient.

The color gradient used for the fill.

The type of gradient to use (linear or radial).

Specifies how the gradient is sampled when UV coordinates are outside the [0, 1] range.

The start point for a linear gradient.

The end point for a linear gradient.

The center point for a radial gradient.

The Focus point for radial gradient.

The radius for a radial gradient.

<param name="endColor"></param>

<param name="end"></param>

<param name="start"></param>

<param name="addressMode"></param>
        static public FillGradient MakeLinearGradient(
           Gradient gradient,
           Vector2 start,
           Vector2 end,
           AddressMode addressMode = AddressMode.Clamp)
        {
            FillGradient fillGradient = new FillGradient();
            fillGradient.gradient = gradient;
            fillGradient.gradientType = GradientType.Linear;
            fillGradient.addressMode = addressMode;
            fillGradient.start = start;
            fillGradient.end = end;
            fillGradient.center = Vector2.zero;
            fillGradient.focus = Vector2.zero;
            fillGradient.radius = 0f;
            return fillGradient;
        }

Helper method to create a radial gradient fill, using startColor and endColor to define the gradient.

<param name="startColor"></param>

<param name="center"></param>

<param name="focus"></param>

<param name="center"></param>

<param name="focus"></param>

## Source Code Reference

For complete source code, see: [FillGradient.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Native/Renderer/UIPainter2D.bindings.cs)

### Public Properties

- **FillRule**: `enum`
- **LineJoin**: `enum`
- **LineCap**: `enum`
- **ArcDirection**: `enum`
- **FillGradient**: `struct`
- **gradient**: `Gradient`
- **gradientType**: `GradientType`
- **addressMode**: `AddressMode`
- **start**: `Vector2`
- **end**: `Vector2`
- **center**: `Vector2`
- **focus**: `Vector2`
- **radius**: `float`

### Public Methods

- **MakeLinearGradient()**: Returns `FillGradient`
- **MakeRadialGradient()**: Returns `FillGradient`

