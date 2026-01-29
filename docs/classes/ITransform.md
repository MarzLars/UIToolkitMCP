# ITransform

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/ITransform.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/ITransform.cs)

---

## Documentation

Reading properties of this object gives information about the transform of its VisualElement.

///


        [Obsolete("When reading the value, use VisualElement.resolvedStyle.translate. When writing the value, use VisualElement.style.translate instead.")]
        Vector3 position { get; set; }

The rotation of the VisualElement transform stored as a Quaternion.


        [Obsolete("When reading the value, use VisualElement.resolvedStyle.scale. When writing the value, use VisualElement.style.scale instead.")]
        Vector3 scale { get; set; }

Transformation matrix calculated from the position, rotation and scale of the transform (Read Only).


**Remarks:**


## Source Code Reference

For complete source code, see: [ITransform.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/ITransform.cs)

### Public Properties

- **ITransform**: `interface`

