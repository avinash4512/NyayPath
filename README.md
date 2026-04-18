# NyayPath — न्यायपथ
### Chief Justices' International Conference Management System
**City Montessori School, Lucknow**

---

## What is NyayPath?

NyayPath is a web-based conference management dashboard built for the **Chief Justices' International Conference** organized annually by City Montessori School, Lucknow.

It manages the complete 4-day journey of delegates across three cities:

```
Delhi (Day 1–2)  →  Agra (Day 2 night)  →  Lucknow (Day 3–4)
```

---

## Features

| Module | What it does |
|---|---|
| **Dashboard** | Live overview — arrivals, today's programme, pending actions |
| **Arrivals** | Flight-by-flight tracking with receiver, status, hotel assignment |
| **All Delegates** | Complete registry — hotels, rooms, dietary needs, status |
| **Programme** | 4-day conference schedule with session types |
| **Hotels** | Delhi + Agra + Lucknow hotel occupancy & coordinators |
| **Transport** | Per-delegate driver/vehicle assignments + group coaches |
| **Notifications** | Broadcast to any team group + live notification feed |

---

## How to Use

### Option 1 — Open directly (no server needed)
```
Double-click index.html in your browser
```

### Option 2 — GitHub Pages (recommended)
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → main branch → / (root)**
3. Your app will be live at: `https://yourusername.github.io/nyaypath/`

### Option 3 — Local server
```bash
cd nyaypath
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## Project Structure

```
nyaypath/
├── index.html          ← Main app (open this)
├── css/
│   └── style.css       ← All styling
├── js/
│   └── app.js          ← All data & logic
└── README.md           ← This file
```

---

## Roadmap

- [x] Phase 1 — Static web prototype (this version)
- [ ] Phase 2 — Connect to Supabase (live database)
- [ ] Phase 3 — User login (Admin / Coordinator / Delegate roles)
- [ ] Phase 4 — Push notifications via Firebase
- [ ] Phase 5 — Mobile app (Flutter)

---

## Built With

- Pure HTML5, CSS3, JavaScript (no frameworks, no build step)
- Hosted on GitHub Pages (free)
- Future: Supabase (database + auth)

---

*NyayPath — न्यायपथ — The Path of Justice*
*City Montessori School, Lucknow · Est. 1959*
