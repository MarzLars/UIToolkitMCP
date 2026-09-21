# IVisualElementComponent

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Components/IVisualElementComponent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Components/IVisualElementComponent.cs)

---

## Documentation

You don't implement this interface yourself: when you declare a `partial struct` with

generated part of the struct. The interface is an implementation detail of that generator: its

The component methods on `VisualElement`, such as

The hooks are emitted by the source generator, never written by hand. They let

`[RegisterCallback]` handlers and validate its `[RequiresElementOfType]` owner

reflection and no boxing of the component struct. A component that declares no callbacks

(`GetComponent`) never calls these, so it is unaffected.

<undoc/>
        [EditorBrowsable(EditorBrowsableState.Never)]
        void __RegisterComponentCallbacks(VisualElement owner);

        // Generator-emitted; do not call directly. Mirror of __RegisterComponentCallbacks, invoked
        // from RemoveComponent.

<undoc/>
        [EditorBrowsable(EditorBrowsableState.Never)]
        void __ValidateOwnerType(VisualElement owner);

        // Generator-emitted; do not call directly. Returns the component's shared [OnComponentChanged]
        // dispatcher (a per-type static delegate, so no per-instance allocation), or null when the
        // component declares no handler. AddComponent stores the result in the component's slot.

<undoc/>
        [EditorBrowsable(EditorBrowsableState.Never)]
        ComponentBindingDispatcher __GetComponentBindingDispatcher();

        // Generator-emitted; do not call directly. Returns the component's [UxmlCreateInstanceMethod]
        // factory as a Func<T>, or null when the component has none. GetOrAddComponent uses it to
        // create a new component.

<undoc/>
        [EditorBrowsable(EditorBrowsableState.Never)]
        void __ResolveComponentRequirements(VisualElement owner);

        // Generator-emitted; do not call directly. Returns the type handles of the component's
        // [RequiresComponentOfType] declarations, or null when there are none. Only used by the
        // editor-only warning in RemoveComponent.

<undoc/>
        [EditorBrowsable(EditorBrowsableState.Never)]
        bool __InvokeComponentAdded(VisualElement owner);

        // Generator-emitted; do not call directly. Mirror of __InvokeComponentAdded for the
        // [OnComponentRemoved] method; RemoveComponent calls it first, before anything is torn down.

<undoc/>
        [EditorBrowsable(EditorBrowsableState.Never)]
        System.Delegate __GetComponentResourceReleaseHandler();
    }

The signature of a <see cref="ReleaseComponentResourcesAttribute">[ReleaseComponentResources]</see>

allocated.


**Remarks:**


`[ReleaseComponentResources]` method in one and hands it to the runtime, which invokes it on

<typeparam name="T">A component struct declared with `VisualElementComponentAttribute`.</typeparam>

## Source Code Reference

For complete source code, see: [IVisualElementComponent.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Components/IVisualElementComponent.cs)

### Public Properties

- **IVisualElementComponent**: `interface`

