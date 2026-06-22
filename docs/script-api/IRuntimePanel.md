# IRuntimePanel

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/GameObjects/RuntimePanel.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/RuntimePanel.cs)

---

## Documentation


        PanelSettings panelSettings { get; }

A GameObject from the Scene that can be used by `UnityEngine.EventSystems.EventSystem`

Event System selection.

## Source Code Reference

For complete source code, see: [IRuntimePanel.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/GameObjects/RuntimePanel.cs)

### Public Methods

- **AddOnCreatePanelAction()**: Returns `void`
- **RemoveOnCreatePanelAction()**: Returns `void`
- **AddOnWillDestroyPanelAction()**: Returns `void`
- **RemoveOnWillDestroyPanelAction()**: Returns `void`
- **RegisterEventSystem()**: Returns `void`
- **UnregisterEventSystem()**: Returns `void`
- **GetCapturingElement()**: Returns `IEventHandler`
- **GetSortedPlayerPanelsInternal()**: Returns `List<IRuntimePanel>`
- **SetElementWithSoftPointerCapture()**: Returns `void`
- **GetPlayerPanelWithSoftPointerCapture()**: Returns `IRuntimePanel`
- **PressButton()**: Returns `void`
- **ReleaseButton()**: Returns `void`
- **GetPressedButtons()**: Returns `int`
- **GetPointerDeltaPosition()**: Returns `Vector3`
- **GetCameraWithSoftPointerCapture()**: Returns `Camera`
- **GetWorldSpacePanelComponentWithSoftPointerCapture()**: Returns `IPanelComponent`
- **HasActiveDocuments()**: Returns `bool`
- **Create()**: Returns `RuntimePanel`

