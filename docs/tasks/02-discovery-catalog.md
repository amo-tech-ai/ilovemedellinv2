# Task 02: Discovery Catalog Modules

**Phase:** 1 - Foundation & Discovery  
**Role:** Full Stack (FE heavy)

## 1. Purpose
Build the read-only "Catalog" of the application. This populates the app with content (Restaurants, Events, Tourist spots) so users get immediate value before logging in.

## 2. Goals
- [ ] Implement `Explore` feed with infinite scroll.
- [ ] Implement `Tourist`, `Restaurants`, `Events` specialized views.
- [ ] Build `PlaceDetailsPanel` (Right Panel content).
- [ ] Setup Supabase `places` and `events` tables with initial seed data.

## 3. Scope
**In Scope:**
- Displaying data.
- Search & Filtering (Client-side initially).
- "AI Hint" static badges (pre-generated).
- 3-Panel interaction (Click card -> Open Right Panel).

**Out of Scope:**
- User auth / Saving items.
- Live AI generation (use static fields for now).

## 4. Backend Requirements (Supabase)

### Tables
**`places`**
- `id` (uuid)
- `name` (text)
- `category` (text)
- `location` (geography point)
- `metadata` (jsonb: hours, price, website)
- `ai_summary` (text) - *The "Why this fits" text*
- `tags` (text[])
- `images` (text[])

**`events`**
- `id` (uuid)
- `place_id` (fk)
- `title` (text)
- `start_time` (timestamptz)
- `end_time` (timestamptz)
- `ticket_link` (text)

### RLS
- Public Read access for all.

## 5. Frontend Requirements

### Components
- `PlaceCard`: Image, Title, Rating, AI Hint Chip.
- `EventCard`: Date badge, Title, Location.
- `PlaceDetailsPanel`:
    - **Hero:** Image carousel.
    - **Actions:** "Add to Trip" (Disabled/Tooltip), "Directions".
    - **AI Section:** "Why you'll love this" (Static).
    - **Map:** Google Maps Static integration or Leaflet.

### 3-Panel Logic
- **Left:** Filter/Category Facets.
- **Center:** Grid of Cards.
- **Right:** Details Panel (populated when `?id=xyz` is active).

## 6. Gemini Features (Static Prep)
- Although live AI isn't active, ensure the UI has slots for:
    - `aiHint`: "Perfect for digital nomads..."
    - `matchScore`: "95% Match" badge.

## 7. Workflows
**Traveler Discovery:**
1. Opens `/app/explore`.
2. Clicks "Restaurants".
3. Clicks "El Cielo".
4. Right panel opens with details.
5. URL updates to `/app/restaurants?id=el-cielo`.

## 8. Acceptance Criteria
- [ ] Explore page renders 20+ items mock data (or db data).
- [ ] URL deep linking works (refreshing page with `?id` opens panel).
- [ ] "Tourist" page features "Comuna 13" with special 'Tour' metadata.
- [ ] Mobile users see Bottom Sheet when clicking a card.
