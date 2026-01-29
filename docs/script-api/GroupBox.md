# GroupBox

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/GroupBox.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/GroupBox.cs)

---

## Documentation

container will interact together to allow a single selection, using the `DefaultGroupManager`.

If no `IGroupBox` is found in the hierarchy, the default container will be the panel.


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]

<param name="bag">The attribute bag.</param>

Unity adds this USS class to every instance of the GroupBox element. Any styling applied to

Unity adds this USS class to the `Label` sub-element of the `GroupBox` if the GroupBox has a Label.


        [CreateProperty]

## Source Code Reference

For complete source code, see: [GroupBox.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/GroupBox.cs)

### Public Properties

- **text**: `string`

### Public Methods

- **CreateInstance()**: Returns `object`
- **Deserialize()**: Returns `void`
- **Init()**: Returns `void`

