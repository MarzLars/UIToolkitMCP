# ToggleButtonGroupState

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/ToggleButtonGroup/ToggleButtonGroupState.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ToggleButtonGroup/ToggleButtonGroupState.cs)

---

## Documentation

To set properties on how to serialize this type, use `ToggleButtonGroupStatePropertiesAttribute`.

<param name="length">The number of toggle button options.</param>


**Remarks:**


<exception cref="ArgumentOutOfRangeException">If the index exceeds the length assigned or is below 0.</exception>

<exception cref="ArgumentException">If the Span length is smaller than the length of the ToggleButtonGroupState.</exception>

<code>

public void HandleActiveOptions()

var value = myToggleButtonGroup.value;

foreach (option in options)

// handle option

}

</code>

<exception cref="ArgumentException">If the Span length is smaller than the length of the ToggleButtonGroupState.</exception>

<code>

public void HandleInactiveOptions()

var value = myToggleButtonGroup.value;

foreach (option in options)

// handle option

}

</code>

Calling this method will make all the active toggle buttons to be inactive and all the inactive toggle

<returns>a ToggleButtonGroupState created by the list of booleans.</returns>

<param name="length">The number of options.</param>

<returns>A ToggleButtonGroupState based on the EnumFlag passed as an argument.</returns>

<param name="acceptsLengthMismatch">The ability to synchronize two option sets of different sizes.</param>

<returns>A flag enum type.</returns>

<exception cref="ArgumentException">If acceptsLengthMismatch is false and the options does not match the enum's length.</exception>

<returns>True if both option sets are the same, otherwise returns false.</returns>

<param name="value">The value of a given flag enum.</param>

<returns>True if both options sets are the same, otherwise false.</returns>

<param name="rhs">The second option set to be compared against.</param>

<param name="rhs">The second option set to be compared against.</param>

<returns>True if both option has the same data and number of options, otherwise returns false.</returns>

<returns>True if both option sets are not the same, otherwise returns false.</returns>

<inheritdoc />

## Source Code Reference

For complete source code, see: [ToggleButtonGroupState.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/ToggleButtonGroup/ToggleButtonGroupState.cs)

### Public Properties

- **length**: `int`

### Public Methods

- **HandleActiveOptions()**: Returns `void`
- **GetActiveOptions()**: Returns `Span<int>`
- **HandleInactiveOptions()**: Returns `void`
- **GetInactiveOptions()**: Returns `Span<int>`
- **SetAllOptions()**: Returns `void`
- **ResetAllOptions()**: Returns `void`
- **ToggleAllOptions()**: Returns `void`
- **CreateFromOptions()**: Returns `ToggleButtonGroupState`
- **CompareTo()**: Returns `int`
- **Equals()**: Returns `bool`
- **GetHashCode()**: Returns `int`
- **ToString()**: Returns `string`

