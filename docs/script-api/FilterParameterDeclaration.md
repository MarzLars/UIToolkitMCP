# FilterParameterDeclaration

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/FilterFunctionDefinition.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/FilterFunctionDefinition.cs)

---

## Documentation


    [Serializable, StructLayout(LayoutKind.Sequential)]


        [CreateProperty]

Example: Transition from source filter "blur(2px)" to destination "blur(2px) invert(80%)" would


        [CreateProperty]


    [HelpURL("ui-systems/custom-filters")]
    [Serializable]

The name of the filter function used for display.
        [CreateProperty]

The description of the function parameters.

The post-processing effects applied by the filter function.
        [CreateProperty]


    [Serializable]

The index of the parameter in the filter function.
        [CreateProperty]

The name of the material property.
        [CreateProperty]

This is used as part of a `FilterFunctionDefinition`.

The material to use for the effect.
        [CreateProperty]

The pass index to use in the material.
        [CreateProperty]

The parameter bindings for the effect.
        [CreateProperty]

The extra margins, in points, required for the effect to read from the source texture.

The extra margins, in points, required for the effect to write to destination texture.

The optional callback to prepare the material property block for the effect.

<param name="context">The context of the filter pass for which the function is being called.</param>

The optional callback to apply the pass settings to the material property block.

The optional callback to compute the required read and write margins for the effect.

<returns>The required margins for that effect for that `FilterFunction`.</returns>

The optional callback to compute the required read margins for the effect.

The optional callback to compute the required write margins for the effect.

The context of the filter.

The filter function for which the specified pass is being executed.

The filter pass that is being executed.

The index of the pass.

Indicates if sampling the source texture yields a color in the gamma color space.

Indicates if the shader must return a color in the gamma color space.

The DPI scaling factor of the render tree.


    [Serializable]

The left margin value.
        [CreateProperty]

The top margin value.
        [CreateProperty]

The right margin value.
        [CreateProperty]

The bottom margin value.
        [CreateProperty]

## Source Code Reference

For complete source code, see: [FilterParameterDeclaration.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/FilterFunctionDefinition.cs)

### Public Properties

- **FilterParameterDeclaration**: `struct`
- **name**: `string`
- **interpolationDefaultValue**: `FilterParameter`
- **filterName**: `string`
- **ParameterBinding**: `struct`
- **index**: `int`
- **name**: `string`
- **PostProcessingPass**: `struct`
- **material**: `Material`
- **passIndex**: `int`
- **writeMargins**: `PostProcessingMargins`
- **applySettingsCallback**: `ApplyFilterPassSettingsDelegate`
- **computeRequiredReadMarginsCallback**: `ComputeRequiredMarginsDelegate`
- **computeRequiredWriteMarginsCallback**: `ComputeRequiredMarginsDelegate`
- **FilterPassContext**: `struct`
- **filterFunction**: `FilterFunction`
- **filterPassIndex**: `int`
- **readsGamma**: `bool`
- **writesGamma**: `bool`
- **scaledPixelsPerPoint**: `float`

