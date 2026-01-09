# Task 08: Concierge Chat & Grounding

**Phase:** 3 - AI Intelligence  
**Role:** AI / Frontend

## 1. Purpose
Provide a conversational interface for ad-hoc queries ("Where can I find salsa tonight?") using Live Data.

## 2. Goals
- [ ] Build Chat UI in `/app/concierge`.
- [ ] Implement `chat_concierge` Edge Function.
- [ ] Enable **Google Search Grounding** for live events.
- [ ] Enable **Google Maps Grounding** for location checks.

## 3. Gemini 3 Tool Mapping

**Model:** `gemini-3-flash-preview` (High speed).

**Tools:**
- `google_search`: Triggered for queries like "Events this weekend", "News".
- `google_map`: Triggered for "How far is X?", "Is X open?".
- `interactions_api`: Maintain chat history/context.

## 4. 3-Panel Logic (Chat)
- **Left:** History/Threads.
- **Center:** Chat Stream.
- **Right:** Context Panel (Shows Place Cards mentioned in chat).

## 5. Workflow
1. User asks: "Find me a jazz bar open now."
2. Agent checks Maps Grounding for open places + DB for Jazz tag.
3. Agent replies with text + **UI Component** (PlaceCard).
4. PlaceCard renders in Right Panel.

## 6. Acceptance Criteria
- [ ] Chat persists context (multi-turn).
- [ ] Can answer "What is the weather?" (Search Grounding).
- [ ] Can answer "Is Mondongos open?" (Maps Grounding).
- [ ] Citations/Grounding sources are displayed in UI.
