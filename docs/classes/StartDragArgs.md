# StartDragArgs

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/DragAndDrop/IDragAndDropController.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/DragAndDrop/IDragAndDropController.cs)

---

## Documentation


        None,

The drag-and-drop handlers want to copy data.


        Move,

The drag-and-drop operation is being rejected by the handlers.

See `BaseVerticalCollectionView.canStartDrag`.

You can use it to store generic data for the rest of the drag.

See `BaseVerticalCollectionView.dragAndDropUpdate` and `BaseVerticalCollectionView.handleDrop`.

Will always be -1 for drag-and-drop operations in list views.

Will always be -1 for drag-and-drop operations in list views.

<param name="visualMode">The visual mode the drag starts with.</param>

Should be set during the `BaseVerticalCollectionView.setupDragAndDrop` callback.

<param name="data">The data to store.</param>

## Source Code Reference

For complete source code, see: [StartDragArgs.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/DragAndDrop/IDragAndDropController.cs)

### Public Properties

- **DragVisualMode**: `enum`
- **position**: `Vector2`
- **StartDragArgs**: `struct`
- **title**: `string`
- **visualMode**: `DragVisualMode`

### Public Methods

- **SetGenericData()**: Returns `void`
- **SetUnityObjectReferences()**: Returns `void`
- **SetPaths()**: Returns `void`

