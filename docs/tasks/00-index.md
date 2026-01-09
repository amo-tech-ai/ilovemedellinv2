# Master Task Map: I Love Medellín

**Status:** Planning  
**Target:** Production Release 1.0  
**Based on:** PRD v1.0 & Roadmap v1.0

## Overview
This directory contains the step-by-step execution tasks to build the "I Love Medellín" platform.
Tasks are strictly ordered by **Phase** but can be executed in parallel where dependencies allow.

**Core Architecture Rule:**
All UI tasks must adhere to the **3-Panel Layout Logic** (Context | Work | Intelligence) and Responsive Rules defined in the PRD.

---

## Phase List

| Phase | Name | Focus | Goals |
| :--- | :--- | :--- | :--- |
| **1** | **Foundation & Discovery** | Frontend Shell, Catalog | Pixel-perfect UI, 3-panel engine, Read-only data. |
| **2** | **Core Planner (Manual)** | Auth, Trips, Wizard | Users can save items and manually drag-and-drop itineraries. |
| **3** | **AI Intelligence** | Gemini 3 Agents | "Magic" generation, Optimization, Concierge, Grounding. |
| **4** | **Business & CRM** | B2B, Leads | Business profiles, CRM dashboard, Lead scoring. |
| **5** | **Marketplace & Scale** | Payments, Bookings | Transactional layer, Analytics, Monetization. |

---

## Task Index

| ID | Task Name | Phase | Owner | Depends On | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | [Project Foundation & Layout](./01-project-foundation.md) | 1 | FE | - | **Ready** |
| **02** | [Discovery Catalog Modules](./02-discovery-catalog.md) | 1 | FE/BE | 01 | **Ready** |
| **03** | [Auth & User Data](./03-auth-user-data.md) | 2 | Fullstack | 01 | **Pending** |
| **04** | [Trip Planning UI (Wizard + CC)](./04-trip-planning-ui.md) | 2 | FE | 03 | **Pending** |
| **05** | [Trip Data Layer & Logic](./05-trip-data-layer.md) | 2 | BE | 04 | **Pending** |
| **06** | [AI Engine & Edge Setup](./06-ai-engine-setup.md) | 3 | AI/BE | 05 | **Pending** |
| **07** | [AI Planner Agents (Gen + Opt)](./07-ai-planner-agents.md) | 3 | AI | 06 | **Pending** |
| **08** | [Concierge & Grounding](./08-concierge-intelligence.md) | 3 | AI | 06 | **Pending** |
| **09** | [CRM & Business Suite](./09-crm-business-suite.md) | 4 | Fullstack | 03 | **Pending** |
| **10** | [Marketplace & Bookings](./10-marketplace-bookings.md) | 5 | Fullstack | 09 | **Pending** |

---

## Critical Path
1.  **Task 01**: The 3-panel layout engine is the container for *everything*.
2.  **Task 05**: The Trip Data Model (`trips`, `itinerary_items`) is the "Brain's" memory.
3.  **Task 07**: The Orchestrator Agent is the core differentiator.

---

## Quick Links
- [PRD](../prd.md)
- [Roadmap](../roadmap.md)
