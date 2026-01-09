# Changelog

All notable changes to the **"I Love Medellín"** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2024-05-22

### Added
- **AI Recommendations**: Added a horizontal carousel to the top of the Restaurants feed featuring AI-curated picks.
- **Smart Hints**: Enhanced `aiHint` data to provide contextual "Why you'll like it" explanations based on specific user preferences (e.g., "Authentic Local Food", "Healthy Options").
- **Deep Linking**: Implemented query-parameter based navigation (`?id=...`) to support direct linking to specific places and events.

### Changed
- **Router Architecture**: Refactored `App.tsx` to use `createHashRouter` and `RouterProvider`. This replaces the legacy JSX `<Routes>` pattern to ensure strict compliance with system architecture guardrails.
- **Responsive Layouts**: improved the 3-panel sliding logic for the details pane on Tablet (`md`) and Desktop (`xl`) breakpoints.

### Fixed
- Addressed routing inconsistencies when navigating between dashboard modules.

## [0.2.0] - 2024-05-21

### Added
- **Restaurants Module**:
  - Dedicated page (`/app/restaurants`) with infinite scroll layout.
  - Search bar and category filters (Trending, Romantic, Cafés).
  - Mock data specific to Medellín dining (El Cielo, Mondongo's, etc.).
- **Events Module**:
  - Dedicated page (`/app/events`) with date-focused card designs.
  - `EventDetailsPanel` featuring organizer info, ticketing actions, and location previews.
- **UI Components**:
  - `PlaceDetailsPanel`: A reusable slide-over panel for displaying rich location data, hours, and map previews.
  - `EventCard`: Specialized component for temporal listings.

## [0.1.0] - 2024-05-20

### Added
- **Project Initialization**:
  - Vite + React + TypeScript setup.
  - Tailwind CSS configuration with custom `medellin` and `brand` color palettes.
  - Lucide React icon integration.
- **Core Dashboard**:
  - `Layout` shell with responsive Sidebar and Mobile Header.
  - `Explore` page acting as the main discovery feed.
  - `Concierge` page (UI Mockup) for AI chat interactions.
  - `TripWizard`: A 4-step modal for planning itineraries.
- **Marketing Site**:
  - Public facing landing pages (Home, About, Features, Services, Media, Blog, Contact).
- **Placeholders**:
  - Empty states for Trips, Rentals, and Saved Places.
