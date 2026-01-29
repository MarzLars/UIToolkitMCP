# IValueField

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/TextValueField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/TextValueField.cs)

---

## Documentation


    [MovedFrom(true, UpgradeConstants.EditorNamespace, UpgradeConstants.EditorAssembly)]


        Fast,

The value changes at the normal rate.


        Slow
    }

Base interface for UIElements text value fields.


        T value { get; set; }

Applies the values of a 3D delta and a speed from an input device.

<param name="delta">A vector used to compute the value change.</param>

<param name="startValue">The start value.</param>
        void ApplyInputDeviceDelta(Vector3 delta, DeltaSpeed speed, T startValue);

Indicate when the mouse dragging is starting.


        void StopDragging();
    }

Base class for text fields.

The string follows standard .NET formatting conventions.


**Remarks:**


\\

omitting trailing zeros. For example, `3.5` becomes `3.5` and

\\

places. For example, `3.5` is displayed as `3.50` and `3` as

\\

necessary. For example, `3.5` becomes `4` and `3.0` becomes `3`.

<param name="speed">A multiplier for the value change.</param>

<param name="speed">Speed of the move.</param>

<returns>String representation.</returns>

<returns>The value parsed from the string.</returns>


    [MovedFrom(true, UpgradeConstants.EditorNamespace, UpgradeConstants.EditorAssembly)]
    [Obsolete("TextValueFieldTraits<TValueType, TValueUxmlAttributeType> is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">A bag of UXML attribute name-value pairs used to initialize VisualElement members.</param>

## Source Code Reference

For complete source code, see: [IValueField.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/TextValueField.cs)

### Public Properties

- **DeltaSpeed**: `enum`
- **formatString**: `string`
- **formatString**: `string`

### Public Methods

- **StartDragging()**: Returns `void`
- **StopDragging()**: Returns `void`
- **SetValueWithoutNotify()**: Returns `void`
- **Init()**: Returns `void`

