# Task 03: Auth & User Data

**Phase:** 2 - Core Planner  
**Role:** Backend / Security

## 1. Purpose
Enable users to create accounts, allowing them to have "Write" access (Saving places, Creating trips).

## 2. Goals
- [ ] Implement Supabase Auth (Email/Password + Google OAuth).
- [ ] Create `users` (profiles) table.
- [ ] Create `saved_places` table.
- [ ] Implement UI for Login/Signup.

## 3. Scope
**In Scope:**
- Auth Flows (Sign Up, Sign In, Forgot Password).
- Protected Routes wrapper.
- Profile management (Avatar, Name).

**Out of Scope:**
- Payment profiles.
- Business account verification.

## 4. Backend Requirements

### Tables
**`profiles`** (extends auth.users)
- `id` (uuid, fk to auth.users)
- `full_name` (text)
- `avatar_url` (text)
- `preferences` (jsonb: 'party_animal', 'foodie', etc.)

**`saved_places`**
- `user_id` (uuid)
- `place_id` (uuid)
- `created_at`

### RLS Policies
- `profiles`: Users can read/update their own. Public can read basics (name/avatar).
- `saved_places`: Users can CRUD their own.

## 5. Frontend Requirements
- `AuthGuard` component: Redirects to `/login` if null session.
- `Sidebar`: Updates to show User Avatar/Name.
- `SavedPage`: Displays grid of saved places.

## 6. Acceptance Criteria
- [ ] User can sign up with email.
- [ ] User is redirected to `/app/explore` after login.
- [ ] Clicking "Save" bookmark icon on a PlaceCard writes to DB.
- [ ] `/app/saved` shows the saved items.
- [ ] Logging out clears session and redirects to Home.
