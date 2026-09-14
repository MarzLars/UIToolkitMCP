# CurveField

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Controls/CurveField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/CurveField.cs)

---

## Documentation


    [UxmlElement]
    [Icon("UIToolkit/Icons/CurveField.png")]


        [Obsolete("borderUssClass is not used anymore", false)]


            Texture,

Renders the curve with an anti-aliased mesh.


            Default = Texture
        }

        RenderMode m_RenderMode = RenderMode.Default;

The RenderMode of CurveField. The default is RenderMode.Default.

## Source Code Reference

For complete source code, see: [CurveField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/CurveField.cs)

### Public Properties

- **ranges**: `Rect`
- **RenderMode**: `enum`
- **renderMode**: `RenderMode`
- **value**: `AnimationCurve`
- **curveColor**: `Color`

### Public Methods

- **SetValueWithoutNotify()**: Returns `void`
- **SetMesh()**: Returns `void`

