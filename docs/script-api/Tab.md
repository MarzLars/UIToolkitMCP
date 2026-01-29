# Tab

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Tab.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Tab.cs)

---

## Documentation

A Tab has a header that can respond to pointer and mouse events. The header can hold an icon, a label, or both.

/// For more information, refer to [wiki:UIE-uxml-element-tab|UXML element Tab].


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

This class defines the properties of a Tab element that you can use in a UXML file.

In the case where more than one event are assigned, all of them will be executed synchronously but only the


        [CreateProperty]


        [CreateProperty]

The default value is `false`.


        [CreateProperty]

<param name="iconImage">The icon used as the header icon.</param>

## Source Code Reference

For complete source code, see: [Tab.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Tab.cs)

### Public Properties

- **label**: `string`
- **iconImage**: `Background`
- **closeable**: `bool`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

