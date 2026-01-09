# Task 06: AI Engine & Edge Setup

**Phase:** 3 - AI Intelligence  
**Role:** AI Engineer / Backend

## 1. Purpose
Prepare the infrastructure for Gemini 3 agents. This involves setting up the environment, API keys, and the "Orchestrator" pattern in Edge Functions.

## 2. Goals
- [ ] Configure `GOOGLE_API_KEY` in Supabase Secrets (Vault).
- [ ] Create `generate_itinerary` Edge Function skeleton.
- [ ] Install `@google/genai` SDK in Edge Functions.
- [ ] Setup Vector Store (pgvector) in Supabase.

## 3. Gemini 3 Configuration
- **Models:**
    - `gemini-3-pro-preview` (Reasoning/Planning).
    - `gemini-3-flash-preview` (Retrieval/Scoring).
- **Pattern:** Stateless Edge Functions invoked by Frontend.

## 4. Backend Requirements

### Vector Store
- Enable `vector` extension in Postgres.
- Add `embedding` column to `places` table (768 dimensions for Gemini Embeddings).
- Create generic `match_places` RPC function for similarity search.

### Edge Function: `generate_itinerary`
- **Input:** `trip_id` (UUID).
- **Process:**
    1. Fetch Trip Preferences from DB.
    2. (Placeholder for Agent Logic).
    3. Return Success.

## 5. Acceptance Criteria
- [ ] Edge Function is deployable.
- [ ] Can invoke function via `curl` or Postman.
- [ ] Embedding column exists.
- [ ] Securely accessing API Key (not exposed to client).
