# CurveField

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Controls/CurveField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Controls/CurveField.cs)

---

## Documentation


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


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

- **CreateInstance()**: Returns `object`
- **SetValueWithoutNotify()**: Returns `void`
- **SetMesh()**: Returns `void`

