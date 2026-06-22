# VisualElementReference

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/Referencing/VisualElementReference.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Referencing/VisualElementReference.cs)

---

## Documentation

This example shows how to use VisualElementReference to reference an element in a UXML file that is loaded by a `PanelRenderer`.

</example>

The following example configures paths to reference elements in a nested UXML structure.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/VisualElementReference_ExampleElement.uxml"/>

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/VisualElementReference_ExampleTemplate.uxml"/>

<example>

</example>
[Serializable]

<seealso cref="SetReference(PanelRenderer, AuthoringIdPath)"/>

<seealso cref="SetReference(PanelRenderer, AuthoringIdPath)"/>

<param name="path">The path of the element to reference.</param>

<param name="path">The path of the element to reference.</param>

When you register a callback, if the reference is already resolved, the callback is immediately invoked.

<param name="callback">The callback to invoke when the reference is resolved.</param>

such as when a live reload occurs after the VisualTreeAsset changes.


    void IVisualElementReferenceHandler.ClearReferences()
    {
        OnReferenceUnloaded();
        m_CurrentTable = null;
    }

Disposes the reference and unregisters it from the table provider.

which can improve performance. If Dispose is not called explicitly, the finalizer will trigger this cleanup.

<returns><see langword="true"/> if <paramref name="other"/> has the same `PanelRenderer` and matching `AuthoringIdPath`.</returns>

<param name="path">The path of the element to reference.</param>

When you register a callback, if the reference is already resolved, the callback is immediately invoked.

<param name="callback">The callback to invoke when the reference is resolved.</param>

such as when a live reload occurs after the VisualTreeAsset changes.

## Source Code Reference

For complete source code, see: [VisualElementReference.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/Referencing/VisualElementReference.cs)

### Public Methods

- **SetReference()**: Returns `void`
- **RegisterReferenceResolvedCallback()**: Returns `void`
- **UnregisterReferenceResolvedCallback()**: Returns `void`
- **RegisterReferenceUnloadedCallback()**: Returns `void`
- **UnregisterReferenceUnloadedCallback()**: Returns `void`
- **Equals()**: Returns `bool`

