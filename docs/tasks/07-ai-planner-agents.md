# Task 07: AI Planner Agents

**Phase:** 3 - AI Intelligence  
**Role:** AI Engineer (Prompt Engineering)

## 1. Purpose
Build the "Brain" that generates complete itineraries. This implements the Multi-Agent architecture defined in the Roadmap.

## 2. Goals
- [ ] Implement **Retriever Agent** (RAG).
- [ ] Implement **Analyst Agent** (Scoring).
- [ ] Implement **Planner Agent** (Scheduling).
- [ ] Wire up `generate_itinerary` to use these agents.

## 3. Gemini 3 Tool Mapping

### A. Orchestrator (Pro)
- **Role:** Controls flow.
- **Model:** `gemini-3-pro-preview`.
- **Tools:** `thinking` (to plan the retrieval strategy).

### B. Retriever (Flash)
- **Role:** Finds candidates.
- **Tools:** `function_call` -> `db_search_places(embedding)`.

### C. Planner (Pro)
- **Role:** The Scheduler.
- **Model:** `gemini-3-pro-preview`.
- **Feature:** **Structured Outputs** (JSON Schema enforcement).
- **Schema:**
```json
{
  "days": [
    {
      "day_index": 0,
      "items": [
        { "place_id": "...", "reason": "...", "time": "morning" }
      ]
    }
  ]
}
```

## 4. Workflow
1. **Trigger:** User finishes Wizard.
2. **Retrieve:** Search DB for 50 candidates matching "Vibe".
3. **Score:** Filter to Top 20 based on "Budget" and "Tags".
4. **Plan:** Pro model groups Top 20 into a logical timeline using Structured Output.
5. **Write:** Save result to `itinerary_items`.

## 5. Acceptance Criteria
- [ ] Wizard submission triggers AI.
- [ ] AI generates a valid JSON itinerary.
- [ ] Itinerary respects constraints (e.g., Budget Tier).
- [ ] Every generated item has an `ai_reason` string ("Chosen because...").
- [ ] Optimization: "Optimize Route" button reorders a single day using TSP logic.
