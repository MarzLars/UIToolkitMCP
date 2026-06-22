# FilterParameter

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Style/FilterFunction.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/FilterFunction.cs)

---

## Documentation


    [Serializable]

<undoc/>
        None,

A built-in tint filter function that expects a single color value (tint).
        Tint,

A built-in invert filter function that expects a single float value between 0.0f and 1.0f (invert percentage).
        Invert,

A built-in sepia filter function that expects a single float value between 0.0f and 1.0f (sepia percentage).
        Sepia,

A built-in contrast filter function that expects a single float value (percent).
        Contrast,

offsetX (float, pixels), offsetY (float, pixels), blur sigma (float, pixels), color (Color).

<undoc/>
        [Obsolete("Use Enum.GetValues(typeof(FilterFunctionType)).Length instead", true)]
        Count
    }

The type of a filter parameter.

A float value.
        Float,


    [Serializable, StructLayout(LayoutKind.Sequential)]

The type of the filter parameter.

The float value of the filter parameter.

The color value of the filter parameter.

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>


    [Serializable, StructLayout(LayoutKind.Sequential)]

When using a `FilterFunctionType.Custom` type, a `FilterFunction.customDefinition` must be provided.

The number of parameters in the filter function.

<param name="p">The parameter to set.</param>

<returns>The filter parameter at the provided index.</returns>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

<undoc/>

## Source Code Reference

For complete source code, see: [FilterParameter.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Style/FilterFunction.cs)

### Public Properties

- **FilterFunctionType**: `enum`
- **FilterParameterType**: `enum`
- **type**: `FilterParameterType`
- **floatValue**: `float`
- **colorValue**: `Color`
- **type**: `FilterFunctionType`
- **customDefinition**: `FilterFunctionDefinition`

### Public Methods

- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **ToString()**: Returns `string`
- **AddParameter()**: Returns `void`
- **SetParameter()**: Returns `void`
- **GetParameter()**: Returns `FilterParameter`
- **ClearParameters()**: Returns `void`

