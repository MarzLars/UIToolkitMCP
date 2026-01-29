# IBindable

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Controls/Binding.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Binding.cs)

---

## Documentation


        IBinding binding { get; set; }

Path of the target property to be bound.


        void PreUpdate();

Called at regular intervals to synchronize bound properties to their IBindable counterparts.


        void Release();
    }

Extensions methods to provide additional IBindable functionality.

<returns>True if this IBindable is bound to a property.</returns>

## Source Code Reference

For complete source code, see: [IBindable.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Controls/Binding.cs)

### Public Properties

- **IBindable**: `interface`
- **IBinding**: `interface`
- **IBindingExtensions**: `class`

### Public Methods

- **IsBound()**: Returns `bool`

