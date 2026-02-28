# Calendar integration (Calendly / Cal.com)

Users can book a consultation directly from the **Book a Consultation** page once a calendar URL is set.

## 1. Get your scheduling link

- **Calendly:** Sign up at [calendly.com](https://calendly.com), create an event type (e.g. “30-min consultation”), and copy the scheduling link (e.g. `https://calendly.com/yourname/30min`).
- **Cal.com:** Sign up at [cal.com](https://cal.com), create an event type, and copy the booking link.

## 2. Add it to the site

In `src/lib/site-config.ts`, set `calendarUrl` to your full link:

```ts
calendarUrl: "https://calendly.com/yourname/30min",
```

(Replace with your real Calendly or Cal.com URL.)

## 3. What appears on the site

- The “Or schedule directly” card will link to your calendar.
- If the URL is a Calendly link, the page will also show an **embedded calendar** (“Or pick a time below”) so users can choose a time without leaving the site.
- A fallback “Open calendar in new tab” link is shown below the embed.

## 4. Testing

1. Set `calendarUrl` in `site-config.ts` and restart the dev server.
2. Go to **Book a Consultation**.
3. Click “Open calendar to book” or scroll to the embed and pick a time.
4. Complete a test booking to confirm availability and emails work as expected.
