# Task 05: Trip Data Layer & Logic

**Phase:** 2 - Core Planner  
**Role:** Backend / Logic

## 1. Purpose
Connect the shiny UI from Task 04 to Supabase. This makes trips persistent and shareable.

## 2. Goals
- [ ] Implement `trips` and `itinerary_items` tables.
- [ ] Implement Realtime subscriptions (optional but recommended for collaboration).
- [ ] Build optimisitic UI logic for drag-and-drop.

## 3. Backend Requirements (Supabase)

### Tables
**`trips`**
- `id` (uuid)
- `user_id` (uuid)
- `title` (text)
- `start_date` (date)
- `end_date` (date)
- `preferences` (jsonb: the output from Wizard)
- `status` ('draft', 'active', 'archived')

**`itinerary_items`**
- `id` (uuid)
- `trip_id` (uuid)
- `place_id` (uuid, nullable)
- `custom_title` (text, for manual entries)
- `day_index` (int, 0 = Day 1)
- `order_index` (int)
- `time_slot` (text: 'morning', 'lunch', 'afternoon', 'dinner', 'evening')
- `ai_reason` (text, nullable)

### RLS
- Users can CRUD their own trips.

## 4. Logic & State
- **Optimistic Updates:** When user drops item, update local React state immediately. Send DB request in background. Revert if fail.
- **Conflict Checking (Basic):** Ensure user doesn't book 2 dinners on same day (Frontend warning).

## 5. Acceptance Criteria
- [ ] Creating a trip in Wizard creates a row in `trips`.
- [ ] Dragging an item to timeline creates a row in `itinerary_items`.
- [ ] Refreshing page persists the timeline.
- [ ] Deleting an item removes it from DB.
