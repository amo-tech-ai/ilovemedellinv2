# Task 04: Trip Planning UI (Wizard + Command Center)

**Phase:** 2 - Core Planner  
**Role:** Frontend Engineer (UX Heavy)

## 1. Purpose
Build the core "Work" surfaces of the application: The creation wizard and the day-by-day planner.

## 2. Goals
- [ ] Build 5-Step **Trip Wizard** (Modal).
- [ ] Build **Trip Command Center** (Timeline + Drag & Drop).
- [ ] Implement "Manual" planning mode (User drags Saved items to Timeline).

## 3. 3-Panel UI Requirements (Command Center)

**Route:** `/app/trips/:id`

| Panel | Content | Interaction |
| :--- | :--- | :--- |
| **Left** | Trip Meta (Dates, Travelers), Budget Bar, "Unscheduled" Bin. | Drag items from Bin. |
| **Main** | **Vertical Timeline** (Day 1, Day 2...). Slots for Morning/Afternoon/Eve. | Drop items here. Reorder. |
| **Right** | **Intelligence Panel**. Defaults to "Trip Summary". Shows Item Details on selection. | View details. |

## 4. Components

### Trip Wizard
- **Step 1:** DatePicker Range + Traveler Count.
- **Step 2:** Vibe Select (Chips).
- **Step 3:** Pace (Slider).
- **Step 4:** Budget (Tier Cards).
- **Step 5:** Loading/Success state.

### Command Center
- `TimelineDay`: A container for a single day's items.
- `ItineraryItemCard`: Compact card (Time + Title + DragHandle).
- `UnscheduledBin`: A droppable area for ideas.

## 5. Workflows
**Manual Plan:**
1. User clicks "Plan New Trip".
2. Completes Wizard (Manual Mode saves trip shell).
3. Lands on Command Center.
4. Left panel shows "Saved Places".
5. User drags "El Cielo" from Left Panel to "Day 2 - Evening".

## 6. Acceptance Criteria
- [ ] Wizard collects all 4 inputs and returns a JSON object.
- [ ] Command Center renders empty days based on Date Range.
- [ ] Drag and Drop works (using `dnd-kit` or `react-beautiful-dnd`).
- [ ] Dropping an item updates its visual position.
- [ ] Responsive: On mobile, Drag & Drop might be replaced by "Move to Day..." dropdowns.
