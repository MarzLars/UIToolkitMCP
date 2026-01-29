# IVisualElementScheduledItem

**Namespace:** `UnityEngine.UIElements`

**Source:** [Modules/UIElements/Core/VisualElementScheduler.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementScheduler.cs)

---

## Documentation


        VisualElement element { get; }

Will be true when this item is scheduled. Note that an item's callback will only be executed when it's VisualElement is attached to a panel.


        void Resume();

Removes this item from its VisualElement's scheduler.

<returns>This ScheduledItem.</returns>
        IVisualElementScheduledItem StartingIn(long delayMs);

Repeats this action after a specified time.

<param name="intervalMs">Minimum amount of time in milliseconds between each action execution.</param>

<returns>This ScheduledItem.</returns>
        IVisualElementScheduledItem Until(Func<bool> stopCondition);

After specified duration, the item will be automatically unscheduled.

<param name="durationMs">The total duration in milliseconds where this item will be active.</param>

You can use the scheduler to create animations, update the UI, or create tasks that require a delay or repeated action.


**Remarks:**


A `VisualElement` associates with the scheduler, which you can access through the `VisualElement.schedule` property.

For example, you can delay running of the action with the `IVisualElementScheduledItem.StartingIn` method.

To repeat the action at a specified interval, use the `IVisualElementScheduledItem.Every` method.

The scheduler is active only when the VisualElement is attached to a panel. Detaching the VisualElement from the panel

<code lang="cs">

// This example uses the scheduler to animate the title logo by changing its background image

int m_CurrentTitleLogoFrame = 0;

// Animate title logo.

titleLogo?.schedule.Execute(() =>

if (m_TitleLogoFrames.Count == 0)

///         m_CurrentTitleLogoFrame = (m_CurrentTitleLogoFrame + 1) % m_TitleLogoFrames.Count;

titleLogo.style.backgroundImage = frame;

]]>

</example>

<code lang="cs">

// This example uses the scheduler to animate the scaling of a VisualElement.

/// public void DoScale()

// Scale the VisualElement.

/// m_AnimationScheduler = this.schedule.Execute(DoScale).Every(1).StartingIn(0);

// Stop the animation

]]>

</example>

SA: [VisualElement.schedule], [VisualElement.panel], [IVisualElementScheduledItem]

<returns>Reference to the scheduled action.</returns>
        IVisualElementScheduledItem Execute(Action<TimerState> timerUpdateEvent);

Schedule this action to be executed later.

<param name="updateEvent">The action to be executed.</param>

## Source Code Reference

For complete source code, see: [IVisualElementScheduledItem.cs](https://github.com/Unity-Technologies/UnityCsReference/blob/master/Modules/UIElements/Core/VisualElementScheduler.cs)

### Public Properties

- **IVisualElementScheduledItem**: `interface`
- **IVisualElementScheduler**: `interface`
- **schedule**: `IVisualElementScheduler`
- **element**: `VisualElement`
- **isActive**: `bool`
- **isDetaching**: `bool`

### Public Methods

- **DoScale()**: Returns `void`
- **StartingIn()**: Returns `IVisualElementScheduledItem`
- **Until()**: Returns `IVisualElementScheduledItem`
- **ForDuration()**: Returns `IVisualElementScheduledItem`
- **Every()**: Returns `IVisualElementScheduledItem`
- **Resume()**: Returns `void`
- **Pause()**: Returns `void`
- **ExecuteLater()**: Returns `void`
- **OnPanelActivate()**: Returns `void`
- **OnPanelDeactivate()**: Returns `void`
- **CanBeActivated()**: Returns `bool`
- **Matches()**: Returns `bool`
- **PerformTimerUpdate()**: Returns `void`

