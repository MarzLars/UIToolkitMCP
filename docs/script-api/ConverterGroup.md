# ConverterGroup

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Bindings/ConverterGroup.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/ConverterGroup.cs)

---

## Documentation

You can apply converter groups on a `DataBinding` in UXML with the `source-to-ui-converters` or

`DataBinding.ApplyConverterGroupToUI` methods.

Converter groups can be queried through `ConverterGroups.TryGetConverterGroup`.

or is used for, to be displayed to users to assist while authoring.

<param name="displayName">The group display name.</param>

<typeparam name="TSource">The source type to convert from.</typeparam>

<param name="destination">The converted destination value if the conversion succeeded, and the default value otherwise.</param>

<typeparam name="TDestination">The destination type to convert to.</typeparam>

This method isn't thread-safe.

<param name="container">The container whose property needs to be set.</param>

<param name="value">The value to assign to the property.</param>

<typeparam name="TContainer">The container type to set the value on.</typeparam>

<returns><see langword="true"/> if the value was set correctly, and <see langword="false"/> otherwise.</returns>

## Source Code Reference

For complete source code, see: [ConverterGroup.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Bindings/ConverterGroup.cs)

### Public Properties

- **ConverterGroup**: `class`
- **id**: `string`
- **displayName**: `string`
- **description**: `string`

### Public Methods

- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **Create()**: Returns `TypeConverterRegistry`
- **Register()**: Returns `void`
- **Unregister()**: Returns `void`
- **GetConverter()**: Returns `Delegate`
- **TryGetConverter()**: Returns `bool`
- **GetAllTypesConvertingToType()**: Returns `void`
- **GetAllTypesConvertingFromType()**: Returns `void`
- **GetAllConversions()**: Returns `void`

