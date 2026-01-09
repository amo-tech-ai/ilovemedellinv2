# Task 10: Marketplace & Bookings

**Phase:** 5 - Marketplace & Scale  
**Role:** Full Stack / Payment Ops

## 1. Purpose
Close the loop by allowing transactions directly on platform.

## 2. Goals
- [ ] Implement `bookings` table.
- [ ] Integrate Stripe Connect (Mock for MVP).
- [ ] Build "My Bookings" Dashboard.

## 3. UI Requirements
- **Bookings Panel (Right Panel Mode):** Shows Tickets/Reservations linked to Itinerary Items.
- **Checkout Modal:** Secure card input.

## 4. Backend Requirements
**`bookings`**
- `id`
- `trip_id`
- `itinerary_item_id`
- `status` ('pending', 'confirmed')
- `stripe_payment_id`

## 5. Automations
- **Confirmation Email:** Triggered via Edge Function (`send_email`) on successful booking.
- **Calendar Sync:** Generate .ics file attachment.

## 6. Acceptance Criteria
- [ ] Clicking "Book" on Event Card opens Checkout.
- [ ] Successful mock payment creates Booking record.
- [ ] Booking is linked to Trip Timeline (visual indicator).
