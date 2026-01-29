# INotifyValueChanged

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/INotifyValueChanged.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/INotifyValueChanged.cs)

---

## Documentation


        T value { get; set; }

Sets the value and, even if different, doesn't notify registers callbacks with a `ChangeEvent{T}`

<param name="newValue">The new value to be set.</param>
        void SetValueWithoutNotify(T newValue);
    }

INotifyValueChangedExtensions is a set of extension methods useful for objects implementing `INotifyValueChanged{T}`.

## Source Code Reference

For complete source code, see: [INotifyValueChanged.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/INotifyValueChanged.cs)

### Public Properties

- **INotifyValueChangedExtensions**: `class`

