# UxmlStringAttributeDescription

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/UXML/UxmlAttributeDescription.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlAttributeDescription.cs)

---

## Documentation


            None = 0,

The attribute is optional for the element.


            Prohibited = 2,

The attribute must appear in the element tag.

<param name="cc">The context in which the values are retrieved.</param>

<param name="defaultValue">The value to return if the attribute is not found in the bag.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="defaultValue">The value to return if the attribute is not found in the bag.</param>

The attribute is looked up using `name`. If it is not found, each `obsoleteNames` is tried in turn, from first to last.

<returns>The attribute value from the bag, or defaultValue if the attribute is not found.</returns>

<param name="cc">The creation context.</param>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the method retrieves attribute values.</param>

<param name="cc">The context in which the method retrieves attribute values.</param>

<returns>True if the method can retrieve the attribute's value. False otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>

<param name="cc">The context in which the values are retrieved.</param>

<param name="cc">The context in which the values are retrieved.</param>

<returns>True if the value is found, false otherwise.</returns>


**Remarks:**
UXML objects are defined using `UxmlObjectFactory{TCreatedType,TTraits}` and `UxmlObjectTraits{T}` on a simple class or structure.

<param name="cc">The context in which the values are retrieved.</param>


**Remarks:**
UXML objects are defined using `UxmlObjectFactory{TCreatedType,TTraits}` and `UxmlObjectTraits{T}` on a simple class or structure.

<param name="cc">The context in which the values are retrieved.</param>

## Source Code Reference

For complete source code, see: [UxmlStringAttributeDescription.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/UXML/UxmlAttributeDescription.cs)

### Public Properties

- **Use**: `enum`
- **name**: `string`
- **obsoleteNames**: `IEnumerable<string>`
- **type**: `string`
- **typeNamespace**: `string`
- **use**: `Use`
- **restriction**: `UxmlTypeRestriction`
- **defaultValue**: `T`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`
- **defaultValueAsString**: `string`

### Public Methods

- **GetValueFromBag()**: Returns `string`
- **TryGetValueFromBag()**: Returns `bool`

