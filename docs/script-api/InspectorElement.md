# InspectorElement

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Inspector/InspectorElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Inspector/InspectorElement.cs)

---

## Documentation

Upon Bind(), the InspectorElement will generate PropertyFields inside according to the SerializedProperties inside the bound SerializedObject.


            UIToolkit,

IMGUI should be used to generate property fields for default inspectors. These will be placed inside of a `IMGUIContainer`.


        [Obsolete("UxmlFactory is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


        [Obsolete("UxmlTraits is deprecated and will be removed. Use UxmlElementAttribute instead.", false)]


**Remarks:**



        bool m_OwnsEditor;

The currently bound serialized object.


        Type m_BoundObjectType;

The root element of this inspector. This can either be a full visual hierarchy or an IMGUIContainer.


        DefaultInspectorFramework m_DefaultInspectorFramework;

The cached tracker name.

<returns>The generated performance tracker name.</returns>


        static SerializedObject CreateSerializedObjectForTarget(Object target)
        {
            if (target == null)
            {
                // ReSharper disable once ExpressionIsAlwaysNull
                // Check if this is a 'fake null' object (i.e. equals operator reports null but the object still exists)
                if (!GenericInspector.ObjectIsMonoBehaviourOrScriptableObjectWithoutScript(target))
                    return null;
            }

            return new SerializedObject(target);
        }

Initialized a new instance of `InspectorElement`.


        void DestroyOwnedEditor()
        {
            if (!m_OwnsEditor || m_Editor == null)
                return;

            Object.DestroyImmediate(m_Editor);

            m_Editor = null;
            m_OwnsEditor = false;
        }

        [EventInterest(typeof(SerializedObjectBindEvent))]

<returns>The found or created instance.</returns>
        Editor GetOrCreateEditor(SerializedObject serializedObject)
        {
            Object[] targets = null;

            if (serializedObject != null && serializedObject.m_NativeObjectPtr != IntPtr.Zero)
                targets = serializedObject.targetObjects;

            if (m_Editor != null)
            {
                // First try to re-use the instance we have on hand. If this matches our given object we can simply re-use it.
                if (m_Editor.serializedObject == serializedObject || ArrayUtility.ArrayReferenceEquals(m_Editor.targets, targets))
                    return m_Editor;

                // We need to generate a new editor instance, first cleanup any owned editor resources we have.
                DestroyOwnedEditor();
            }

            // Fallback to creating our own editor instance for the given object.
            m_Editor = Editor.CreateEditor(targets);
            m_OwnsEditor = true;

            return m_Editor;
        }

Adds default inspector property fields under a container VisualElement

<param name="container">The parent VisualElement</param>

<param name="editor">The editor currently used</param>

## Source Code Reference

For complete source code, see: [InspectorElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Inspector/InspectorElement.cs)

### Public Methods

- **CreateInstance()**: Returns `object`
- **FillDefaultInspector()**: Returns `void`

