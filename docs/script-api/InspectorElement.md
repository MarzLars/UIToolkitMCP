# InspectorElement

**Namespace:** `UnityEditor.UIElements`

**Source:** [Editor/Mono/UIElements/Inspector/InspectorElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Inspector/InspectorElement.cs)

---

## Documentation

Upon Bind(), the InspectorElement will generate PropertyFields inside according to the SerializedProperties inside the bound SerializedObject.


            UIToolkit,

IMGUI should be used to generate property fields for default inspectors. These will be placed inside of a `IMGUIContainer`.


**Remarks:**



        bool m_OwnsEditor;

The currently bound serialized object.


        Type m_BoundObjectType;

The root element of this inspector. This can either be a full visual hierarchy or an IMGUIContainer.

Placed either inline (non-sticky) or in the PropertyEditor header container (sticky).

Populated once on attach; avoids repeated ancestor walks on subsequent rebuilds while attached.


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

Adds default inspector property fields under a container VisualElement.

<param name="container">The parent VisualElement</param>

<param name="editor">The editor currently used</param>

The following example shows how to fill a container with default inspector fields.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/InspectorElement_Example.cs"/>

<param name="serializedObject">The SerializedObject to inspect.</param>

<param name="propertiesToExclude">Properties to exclude when populating the Inspector. Properties with name matching `SerializedProperty.name` are skipped.</param>

The following example shows how to fill a container with default Inspector fields.

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/InspectorElement_Example.cs"/>

<example>

<code source="../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/InspectorElement_ExampleExclude.cs"/>

<returns>The built inspector, or a help box saying why it was refused.</returns>
        VisualElement CreateCustomInspectorElement(Editor targetEditor)
        {
            var editorType = targetEditor.GetType();
            var targets = targetEditor.targets;

            // A repeated frame does not prove the nesting never ends, so only the depth bound refuses a build.
            if (s_InspectorBuildStack.Count >= k_MaxInspectorBuildDepth)
            {
                var error = IsBuildingInspector(editorType, targets)
                    ? $"{editorType.Name}.CreateInspectorGUI kept creating an InspectorElement for the object it is already inspecting, so it was stopped after {k_MaxInspectorBuildDepth} levels. Use InspectorElement.FillDefaultInspector to add the default fields instead."
                    : $"Inspectors are nested more than {k_MaxInspectorBuildDepth} deep at {editorType.Name}, so this one was not built. Check whether CreateInspectorGUI keeps creating an InspectorElement for a new object.";

                Debug.LogError(error, targetEditor.target);
                return new HelpBox(error, HelpBoxMessageType.Error);
            }

            s_InspectorBuildStack.Push((editorType, targets));

            try
            {
                // Try to use UI toolkit first with an IMGUI fallback.
                return CreateInspectorElementUsingUIToolkit(targetEditor) ?? CreateInspectorElementUsingIMGUI(targetEditor);
            }
            finally
            {
                s_InspectorBuildStack.Pop();
            }
        }

Returns true when the same editor type is already building an inspector for the same objects further

<param name="targets">The objects that editor inspects.</param>

## Source Code Reference

For complete source code, see: [InspectorElement.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Editor/Mono/UIElements/Inspector/InspectorElement.cs)

### Public Methods

- **FillDefaultInspector()**: Returns `void`

