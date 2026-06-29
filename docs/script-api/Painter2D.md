# Painter2D

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Renderer/UIRPainter2D.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRPainter2D.cs)

---

## Documentation

The example below demonstrates how to use the Painter2D class to draw content in a `VisualElement` with

///

and use the `Painter2D.SaveToVectorImage` method to save the painter content in a `VectorImage` asset.

<example>

<![CDATA[

using UnityEngine.UIElements;

[RequireComponent(typeof(UIDocument))]

{

{

doc.rootVisualElement.generateVisualContent += Draw;

///     void Draw(MeshGenerationContext ctx)

var painter = ctx.painter2D;

painter.lineCap = LineCap.Round;

colorKeys = new GradientColorKey[] {

new GradientColorKey() { color = Color.blue, time = 1.0f }

};

painter.MoveTo(new Vector2(10, 10));

painter.Stroke();

}

</code>

Setting a stroke color will override the currently set `strokeGradient`.

Setting a stroke gradient will override the currently set `strokeColor`.

Setting a fill gradient will override the currently set `fillColor`.

Setting a stroke fill gradient will override the currently set `strokeColor`.

stroke width before converting the miter to a bevel.


        [Obsolete("Use SetDashPattern(ReadOnlySpan<float>) and GetDashPattern(Span<float>) instead.", false)]

Use `GetDashPattern` to retrieve the current pattern.

<param name="pattern">The dash pattern values to set.</param>

The destination span. Must have a length greater than or equal to the current dash pattern length.

</param>

The number of elements in the dash pattern. If <paramref name="values"/> is too short to hold the

</returns>

<param name="p2">The final point of the arc.</param>

<param name="radius">The radius of the arc.</param>

<param name="endAngle">The ending angle of the arc.</param>

<param name="p2">The second control point of the cubic bezier.</param>

<param name="p2">The final position of the quadratic bezier.</param>

user identifier, surfaced on `DrawData.userData` in mesh modifiers.

<param name="userData">User-defined identifier propagated to every `DrawData` produced by this stroke.</param>

user identifier, surfaced on `DrawData.userData` in mesh modifiers.

<param name="fillRule">The fill rule (non-zero or odd-even) to use.</param>

<para>

the complexity of both the clipping path and the clipped content. Also avoid nested clipping regions when possible,

</para>

Note that the clipped shapes will not have antialiased edges since the clipping path is applied by doing a per-triangle

</para>

The size and content of the vector image will be determined from the bounding-box of the visible content of the painter object.

<returns>True if the VectorImage initialization succeeded. False otherwise.</returns>

## Source Code Reference

For complete source code, see: [Painter2D.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Renderer/UIRPainter2D.cs)

### Public Properties

- **lineWidth**: `float`
- **strokeColor**: `Color`
- **strokeGradient**: `Gradient`
- **fillGradient**: `FillGradient`
- **strokeFillGradient**: `FillGradient`
- **fillTexture**: `Texture2D`
- **fillColor**: `Color`
- **lineJoin**: `LineJoin`
- **lineCap**: `LineCap`
- **miterLimit**: `float`
- **dashPattern**: `ReadOnlySpan<float>`
- **dashOffset**: `float`

### Public Methods

- **OnEnable()**: Returns `void`
- **Clear()**: Returns `void`
- **Dispose()**: Returns `void`
- **SetDashPattern()**: Returns `void`
- **GetDashPattern()**: Returns `int`
- **BeginPath()**: Returns `void`
- **ClosePath()**: Returns `void`
- **MoveTo()**: Returns `void`
- **LineTo()**: Returns `void`
- **ArcTo()**: Returns `void`
- **Arc()**: Returns `void`
- **BezierCurveTo()**: Returns `void`
- **QuadraticCurveTo()**: Returns `void`
- **Stroke()**: Returns `void`
- **Fill()**: Returns `void`
- **PushClip()**: Returns `void`
- **PopClip()**: Returns `void`
- **Execute()**: Returns `void`
- **SaveToVectorImage()**: Returns `bool`

