// NyayPath — Conference Management System
// City Montessori School, Lucknow

// ── DATA ─────────────────────────────────────────────────────────────────────

const DATA = {
  conference: {
    name: "Chief Justices' International Conference",
    edition: "23rd",
    dates: "November 12–15, 2025",
    day: 1,
    totalDays: 4,
    today: "November 12, 2025"
  },

  delegates: [
    { id:1, name:"Justice Amir Karimov",    country:"Uzbekistan",   role:"Chief Justice",  initials:"AK", av:"av-blue",   flight:"AI 201",  terminal:"T3", eta:"14:00", status:"checked-in",  hotel_delhi:"Taj Diplomats",   room_delhi:"401",  hotel_lko:"Taj Lucknow",  room_lko:"201", diet:"Halal",       receiver:"Mr. R. Sharma",  city:"Delhi" },
    { id:2, name:"CJ Maxwell Osei",          country:"Ghana",        role:"Chief Justice",  initials:"MO", av:"av-teal",   flight:"ET 621",  terminal:"T3", eta:"13:45", status:"en-route",    hotel_delhi:"Leela Palace",    room_delhi:"810",  hotel_lko:"Vivanta",      room_lko:"105", diet:"Vegetarian",  receiver:"Mr. S. Sinha",   city:"Delhi" },
    { id:3, name:"Justice Linh Nguyen",      country:"Vietnam",      role:"Assoc. Justice", initials:"LN", av:"av-amber",  flight:"VN 3",   terminal:"T2", eta:"11:30", status:"checked-in",  hotel_delhi:"Leela Palace",    room_delhi:"312",  hotel_lko:"Taj Lucknow",  room_lko:"310", diet:"None",        receiver:"Ms. Priya",      city:"Delhi" },
    { id:4, name:"CJ Perfecto Santos",       country:"Philippines",  role:"Chief Justice",  initials:"PS", av:"av-purple", flight:"PR 704",  terminal:"T3", eta:"10:10", status:"checked-in",  hotel_delhi:"Taj Diplomats",   room_delhi:"508",  hotel_lko:"Vivanta",      room_lko:"210", diet:"None",        receiver:"Mr. Arun",       city:"Delhi" },
    { id:5, name:"Justice B. Al-Rashidi",    country:"Kuwait",       role:"Chief Justice",  initials:"BR", av:"av-coral",  flight:"KU 117",  terminal:"T3", eta:"16:30", status:"awaiting",    hotel_delhi:"ITC Maurya",      room_delhi:"607",  hotel_lko:"Taj Lucknow",  room_lko:"415", diet:"Halal",       receiver:"Mr. Verma",      city:"Arriving" },
    { id:6, name:"Justice Yoshi Tanaka",     country:"Japan",        role:"Assoc. Justice", initials:"YT", av:"av-pink",   flight:"NH 826",  terminal:"T3", eta:"15:50", status:"landed",      hotel_delhi:"Taj Diplomats",   room_delhi:"702",  hotel_lko:"Vivanta",      room_lko:"308", diet:"None",        receiver:"Mr. Gupta",      city:"Delhi" },
    { id:7, name:"CJ Fatou Diallo",          country:"Senegal",      role:"Chief Justice",  initials:"FD", av:"av-green",  flight:"AF 208",  terminal:"T2", eta:"Nov 13",status:"scheduled",   hotel_delhi:"ITC Maurya",      room_delhi:"510",  hotel_lko:"Taj Lucknow",  room_lko:"418", diet:"Halal",       receiver:"Mr. Khan",       city:"Arriving" },
    { id:8, name:"Justice S. Petrov",        country:"Bulgaria",     role:"Assoc. Justice", initials:"SP", av:"av-blue",   flight:"BU 440",  terminal:"T2", eta:"17:00", status:"in-transit",  hotel_delhi:"Leela Palace",    room_delhi:"TBC",  hotel_lko:"Vivanta",      room_lko:"TBC", diet:"None",        receiver:"Mr. Das",        city:"Delhi" },
  ],

  hotels: {
    delhi: [
      { name:"Taj Diplomats",  city:"New Delhi · Diplomatic Enclave",     occupied:18, total:20, checkins:7,  coordinator:"Mr. Arun Kumar",   phone:"9811001122" },
      { name:"The Leela Palace",city:"New Delhi · Chanakyapuri",          occupied:12, total:15, checkins:4,  coordinator:"Ms. Priya Nair",   phone:"9822003344" },
      { name:"ITC Maurya",     city:"New Delhi · Sardar Patel Marg",      occupied:8,  total:10, checkins:1,  coordinator:"Mr. Ramesh Verma", phone:"9833005566" },
    ],
    agra: [
      { name:"ITC Mughal Agra",city:"Agra · Fatehabad Road",              occupied:0,  total:47, checkins:0,  coordinator:"Mr. Imtiaz Khan",  phone:"9844007788", night:"Nov 13" },
    ],
    lucknow: [
      { name:"Taj Hotel Lucknow",  city:"Lucknow · Vipin Khand, Gomti Nagar", occupied:0, total:25, checkins:0, coordinator:"Mr. R. Mehta",  phone:"9855009900", arrival:"Nov 14" },
      { name:"Vivanta Lucknow",    city:"Lucknow · Hazratganj",               occupied:0, total:18, checkins:0, coordinator:"Ms. Anjali S.", phone:"9866001111", arrival:"Nov 14" },
    ]
  },

  transport: [
    { delegate:"Justice A. Karimov",    leg:"IGI Airport → Taj Diplomats",  driver:"Ravi Kumar",    phone:"9876543210", vehicle:"DL 4C 9921 (Innova)",    time:"14:00", status:"done"      },
    { delegate:"CJ M. Osei",            leg:"IGI Airport → Leela Palace",   driver:"Suresh P.",     phone:"9811002233", vehicle:"DL 7B 1234 (Fortuner)",   time:"13:45", status:"en-route"  },
    { delegate:"Justice B. Al-Rashidi", leg:"IGI Airport → ITC Maurya",     driver:"Mohan Singh",   phone:"9988776655", vehicle:"HR 26 AA 5678 (Innova)",  time:"16:30", status:"standby"   },
    { delegate:"Justice Y. Tanaka",     leg:"IGI Airport → Taj Diplomats",  driver:"Mr. Gupta",     phone:"9911223344", vehicle:"DL 8D 4433 (Innova)",     time:"15:50", status:"dispatched"},
    { delegate:"All Delegates",         leg:"Delhi → Agra (Group Convoy)",   driver:"Fleet Coord.",  phone:"9900112233", vehicle:"4 × Coaches (45-seater)", time:"Nov 13 07:00", status:"scheduled" },
    { delegate:"All Delegates",         leg:"Agra → Lucknow",                driver:"Fleet Coord.",  phone:"9900112233", vehicle:"4 × Coaches (45-seater)", time:"Nov 14 09:00", status:"scheduled" },
    { delegate:"All Delegates",         leg:"Lucknow Airport Departures",    driver:"Fleet Coord.",  phone:"9900112233", vehicle:"Multiple vehicles",        time:"Nov 15 15:00", status:"scheduled" },
  ],

  programme: [
    // Day 1
    [
      { time:"14:00", type:"",       title:"Delegate Arrivals",         venue:"IGI Airport — all terminals",         tag:"All day" },
      { time:"16:30", type:"",       title:"Welcome Tea & Registration", venue:"Taj Diplomats — Lobby Lounge",        tag:"All delegates" },
      { time:"18:00", type:"keynote",title:"Inaugural Ceremony",         venue:"Auditorium A · Taj Diplomats",        tag:"Keynote" },
      { time:"20:00", type:"social", title:"Welcome Dinner",             venue:"Grand Ballroom — Taj Diplomats",      tag:"Formal dinner" },
    ],
    // Day 2
    [
      { time:"07:00", type:"transit",title:"Departure for Agra",         venue:"Hotel lobbies — 4 coaches",           tag:"Group movement" },
      { time:"10:30", type:"",       title:"Taj Mahal & Agra Fort Visit", venue:"Agra — guided heritage tour",         tag:"Sightseeing" },
      { time:"13:00", type:"social", title:"Lunch at ITC Mughal",         venue:"ITC Mughal — Nauratna Restaurant",    tag:"Lunch" },
      { time:"15:00", type:"student",title:"Seminar: Children's Rights",  venue:"ITC Mughal — Conference Hall A",      tag:"Speaker sessions" },
      { time:"17:30", type:"student",title:"Panel: Rule of Law Globally", venue:"ITC Mughal — Conference Hall B",      tag:"Panel discussion" },
      { time:"19:30", type:"social", title:"Cultural Evening",            venue:"ITC Mughal — Garden Lawns",           tag:"Cultural programme" },
    ],
    // Day 3
    [
      { time:"09:00", type:"transit",title:"Departure for Lucknow",       venue:"ITC Mughal Agra — 4 coaches",         tag:"Group movement" },
      { time:"14:00", type:"keynote",title:"Main Conference Session I",   venue:"CMS Auditorium, Lucknow",             tag:"Keynote · All delegates" },
      { time:"16:30", type:"student",title:"Interaction with Students",   venue:"CMS Campus — 5 seminar halls",        tag:"Student interaction" },
      { time:"18:30", type:"",       title:"Hotel Check-in Lucknow",      venue:"Taj Lucknow & Vivanta",               tag:"Check-in" },
      { time:"20:00", type:"social", title:"Dinner by Chief Guest",       venue:"Taj Lucknow — Grand Ballroom",        tag:"State dinner" },
    ],
    // Day 4
    [
      { time:"09:00", type:"keynote",title:"Main Conference Session II",  venue:"CMS Auditorium — Panel discussion",   tag:"Keynote" },
      { time:"11:30", type:"keynote",title:"Resolution & Closing Address",venue:"CMS Auditorium",                      tag:"Keynote" },
      { time:"13:00", type:"student",title:"Awards & Recognition Ceremony",venue:"CMS Main Stage",                    tag:"Ceremony" },
      { time:"14:30", type:"social", title:"Farewell Lunch",              venue:"CMS Lawns",                           tag:"Closing" },
      { time:"16:00", type:"transit",title:"Delegate Departures",         venue:"Lucknow Airport — LKO",               tag:"All day" },
    ],
  ],

  notifications: [
    { msg:"Justice Tanaka has landed at T3 — car dispatched (Mr. Gupta)",         time:"15:52", from:"Airport Team",   read:false },
    { msg:"Welcome Tea moved to 16:30 — Hall B, Taj Diplomats (logistics update)", time:"15:30", from:"Admin",          read:false },
    { msg:"CJ Osei en route — ETA Leela Palace 15:05, DL 7B 1234",               time:"14:12", from:"Transport",       read:false },
    { msg:"Room 607 confirmed for Justice Al-Rashidi at ITC Maurya",              time:"13:45", from:"Hotel Team",      read:false },
    { msg:"Justice Petrov — room number TBC, hotel coordinator notified",         time:"13:20", from:"Admin",          read:false },
    { msg:"Reminder: Inaugural Ceremony at 18:00 — Auditorium A, Taj Diplomats", time:"13:00", from:"System",         read:true  },
    { msg:"Justice Nguyen checked in — Leela Palace Room 312",                    time:"12:47", from:"Hotel Team",     read:true  },
    { msg:"CJ Santos checked in — Taj Diplomats Room 508",                        time:"11:25", from:"Hotel Team",     read:true  },
    { msg:"Justice Karimov received at T3 by Mr. Sharma, DL 4C 9921",            time:"14:35", from:"Airport Team",   read:true  },
  ]
};

// ── HELPERS ──────────────────────────────────────────────────────────────────

const statusConfig = {
  "checked-in":  { label:"Checked In",  cls:"pill-green"  },
  "en-route":    { label:"En Route",    cls:"pill-blue"   },
  "landed":      { label:"Landed",      cls:"pill-blue"   },
  "awaiting":    { label:"Awaiting",    cls:"pill-amber"  },
  "scheduled":   { label:"Scheduled",  cls:"pill-gray"   },
  "in-transit":  { label:"In Transit",  cls:"pill-amber"  },
  "done":        { label:"Done",        cls:"pill-green"  },
  "dispatched":  { label:"Dispatched",  cls:"pill-blue"   },
  "standby":     { label:"Standby",     cls:"pill-amber"  },
};

function pill(status) {
  const c = statusConfig[status] || { label: status, cls: "pill-gray" };
  return `<span class="pill ${c.cls}">${c.label}</span>`;
}

function avatar(d) {
  return `<div class="avatar ${d.av}">${d.initials}</div>`;
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────

function showPanel(id, btn) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  document.getElementById("panel-" + id).classList.add("active");
  if (btn) btn.classList.add("active");
  else {
    document.querySelectorAll(".nav-item").forEach(n => {
      if (n.dataset.panel === id) n.classList.add("active");
    });
  }
  const titles = {
    dashboard:"Dashboard", arrivals:"Arrivals — Today",
    delegates:"All Delegates", schedule:"Conference Programme",
    hotels:"Hotel Management", transport:"Transport & Logistics",
    notifications:"Notifications & Broadcast"
  };
  document.getElementById("topbar-title").textContent = titles[id] || id;
}

// ── RENDER ARRIVALS ───────────────────────────────────────────────────────────

function renderArrivals(filter = "") {
  const tbody = document.getElementById("arrivals-tbody");
  const list  = filter
    ? DATA.delegates.filter(d =>
        d.name.toLowerCase().includes(filter.toLowerCase()) ||
        d.flight.toLowerCase().includes(filter.toLowerCase()) ||
        d.country.toLowerCase().includes(filter.toLowerCase()))
    : DATA.delegates;

  tbody.innerHTML = list.map(d => `
    <tr>
      <td><div class="name-cell">${avatar(d)}<div><div style="font-weight:600">${d.name}</div><div style="font-size:11px;color:var(--text-muted)">${d.country}</div></div></div></td>
      <td>${d.flight}</td>
      <td>${d.terminal}</td>
      <td style="font-weight:600">${d.eta}</td>
      <td>${pill(d.status)}</td>
      <td>${d.receiver}</td>
      <td>${d.hotel_delhi}</td>
      <td>
        <button class="btn" style="font-size:11px;padding:4px 10px" onclick="updateStatus(${d.id})">Update</button>
      </td>
    </tr>`).join("");
}

// ── RENDER DELEGATES ─────────────────────────────────────────────────────────

function renderDelegates(filter = "") {
  const tbody = document.getElementById("delegates-tbody");
  const list  = filter
    ? DATA.delegates.filter(d =>
        d.name.toLowerCase().includes(filter.toLowerCase()) ||
        d.country.toLowerCase().includes(filter.toLowerCase()))
    : DATA.delegates;

  tbody.innerHTML = list.map(d => `
    <tr>
      <td><div class="name-cell">${avatar(d)}<div><div style="font-weight:600">${d.name}</div><div style="font-size:11px;color:var(--text-muted)">${d.role}</div></div></div></td>
      <td>${d.country}</td>
      <td>${d.hotel_delhi} <span style="color:var(--text-muted)">Rm ${d.room_delhi}</span></td>
      <td>${d.hotel_lko} <span style="color:var(--text-muted)">Rm ${d.room_lko}</span></td>
      <td>${d.diet || "—"}</td>
      <td>${pill(d.status)}</td>
      <td><button class="btn" style="font-size:11px;padding:4px 10px" onclick="viewDelegate(${d.id})">View</button></td>
    </tr>`).join("");
}

// ── RENDER PROGRAMME ─────────────────────────────────────────────────────────

let currentDay = 0;
function renderDay(idx) {
  currentDay = idx;
  document.querySelectorAll(".day-btn").forEach((b,i) => b.classList.toggle("active", i===idx));
  const sessions = DATA.programme[idx];
  document.getElementById("day-content").innerHTML = sessions.map(s => `
    <div class="session-card ${s.type}">
      <div class="session-time">${s.time} &nbsp;·&nbsp; ${s.tag}</div>
      <div class="session-title">${s.title}</div>
      <div class="session-meta">${s.venue}</div>
    </div>`).join("");
}

// ── RENDER HOTELS ────────────────────────────────────────────────────────────

function renderHotels() {
  function hotelCard(h) {
    const pct = Math.round((h.occupied / h.total) * 100);
    const nightLabel = h.night ? `Transit night: <strong>${h.night}</strong>` : `Arrival: <strong>${h.arrival}</strong>`;
    return `
    <div class="hotel-block">
      <div class="hotel-name">${h.name}</div>
      <div class="hotel-city">${h.city}</div>
      <div style="background:var(--bg);border-radius:4px;height:6px;margin-bottom:10px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:var(--primary-mid);border-radius:4px;transition:width 0.4s"></div>
      </div>
      <div class="hotel-stats">
        <div class="hstat">Rooms: <strong>${h.occupied} / ${h.total}</strong></div>
        ${h.checkins !== undefined ? `<div class="hstat">Check-ins today: <strong>${h.checkins}</strong></div>` : `<div class="hstat">${nightLabel}</div>`}
        <div class="hstat">Coordinator: <strong>${h.coordinator}</strong></div>
        <div class="hstat">Phone: <strong>${h.phone}</strong></div>
      </div>
    </div>`;
  }

  document.getElementById("hotels-delhi").innerHTML   = DATA.hotels.delhi.map(hotelCard).join("");
  document.getElementById("hotels-agra").innerHTML    = DATA.hotels.agra.map(hotelCard).join("");
  document.getElementById("hotels-lucknow").innerHTML = DATA.hotels.lucknow.map(hotelCard).join("");
}

// ── RENDER TRANSPORT ─────────────────────────────────────────────────────────

function renderTransport() {
  const tbody = document.getElementById("transport-tbody");
  tbody.innerHTML = DATA.transport.map(t => `
    <tr>
      <td style="font-weight:600">${t.delegate}</td>
      <td>${t.leg}</td>
      <td>${t.driver}<br><span style="font-size:11px;color:var(--text-muted)">${t.phone}</span></td>
      <td style="font-size:12px">${t.vehicle}</td>
      <td style="font-weight:600">${t.time}</td>
      <td>${pill(t.status)}</td>
    </tr>`).join("");
}

// ── RENDER NOTIFICATIONS ─────────────────────────────────────────────────────

function renderNotifications() {
  const list = document.getElementById("notif-list");
  const unread = DATA.notifications.filter(n => !n.read).length;
  document.getElementById("notif-count").textContent = unread + " unread";

  list.innerHTML = DATA.notifications.map((n,i) => `
    <div class="notif-item" onclick="markRead(${i})">
      <div class="notif-dot-wrap"><div class="notif-dot ${n.read?'read':''}"></div></div>
      <div>
        <div class="notif-msg">${n.msg}</div>
        <div class="notif-meta">${n.time} &nbsp;·&nbsp; ${n.from}</div>
      </div>
    </div>`).join("");
}

function markRead(i) {
  DATA.notifications[i].read = true;
  renderNotifications();
}

// ── RENDER DASHBOARD ─────────────────────────────────────────────────────────

function renderDashboard() {
  // Stats
  const total    = DATA.delegates.length;
  const arriving = DATA.delegates.filter(d => ["awaiting","landed","en-route","in-transit"].includes(d.status)).length;
  const checkedIn= DATA.delegates.filter(d => d.status === "checked-in").length;
  const unread   = DATA.notifications.filter(n => !n.read).length;

  document.getElementById("stat-total").textContent    = total;
  document.getElementById("stat-arriving").textContent  = arriving;
  document.getElementById("stat-checkedin").textContent = checkedIn;
  document.getElementById("stat-alerts").textContent    = unread;

  // Recent arrivals
  const recentList = document.getElementById("recent-arrivals");
  const recent = DATA.notifications.slice(0,4);
  recentList.innerHTML = recent.map(n => `
    <div class="notif-item">
      <div class="notif-dot-wrap"><div class="notif-dot ${n.read?'read':''}"></div></div>
      <div><div class="notif-msg">${n.msg}</div><div class="notif-meta">${n.time} · ${n.from}</div></div>
    </div>`).join("");

  // Pending actions
  const pending = DATA.delegates.filter(d => ["awaiting","in-transit","landed"].includes(d.status));
  const ptbody  = document.getElementById("pending-tbody");
  ptbody.innerHTML = pending.map(d => `
    <tr>
      <td><div class="name-cell">${avatar(d)}<span style="font-weight:600">${d.name}</span></div></td>
      <td>${pill(d.status)}</td>
      <td>${d.status==="awaiting"?"Airport pickup needed":d.status==="landed"?"Car dispatched, waiting":"Room confirmation needed"}</td>
      <td>${d.receiver}</td>
    </tr>`).join("");
}

// ── MODAL: ADD DELEGATE ───────────────────────────────────────────────────────

function openModal() {
  document.getElementById("modal-add").classList.add("open");
}
function closeModal() {
  document.getElementById("modal-add").classList.remove("open");
}
function saveDelegate() {
  const name = document.getElementById("new-name").value.trim();
  if (!name) { showToast("Please enter a delegate name."); return; }
  const d = {
    id: DATA.delegates.length + 1,
    name,
    country:     document.getElementById("new-country").value.trim() || "—",
    role:        document.getElementById("new-role").value.trim() || "Delegate",
    initials:    name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(),
    av:          ["av-blue","av-teal","av-amber","av-purple","av-coral","av-pink","av-green"][DATA.delegates.length % 7],
    flight:      document.getElementById("new-flight").value.trim() || "—",
    terminal:    document.getElementById("new-terminal").value,
    eta:         document.getElementById("new-eta").value || "—",
    status:      "scheduled",
    hotel_delhi: document.getElementById("new-hotel-delhi").value,
    room_delhi:  document.getElementById("new-room-delhi").value || "TBC",
    hotel_lko:   document.getElementById("new-hotel-lko").value,
    room_lko:    "TBC",
    diet:        document.getElementById("new-diet").value,
    receiver:    document.getElementById("new-receiver").value.trim() || "—",
    city:        "Arriving",
  };
  DATA.delegates.push(d);
  closeModal();
  renderDashboard();
  renderArrivals();
  renderDelegates();
  showToast(`${d.name} added successfully.`);
  document.getElementById("new-name").value = "";
}

// ── MODAL: VIEW DELEGATE ──────────────────────────────────────────────────────

function viewDelegate(id) {
  const d = DATA.delegates.find(x => x.id === id);
  if (!d) return;
  document.getElementById("view-content").innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
      <div class="avatar ${d.av}" style="width:52px;height:52px;font-size:16px">${d.initials}</div>
      <div>
        <div style="font-size:18px;font-weight:700">${d.name}</div>
        <div style="font-size:13px;color:var(--text-muted)">${d.role} · ${d.country}</div>
      </div>
      <div style="margin-left:auto">${pill(d.status)}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="background:var(--bg);border-radius:var(--radius-md);padding:12px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:8px">Travel</div>
        <div style="font-size:13px;margin-bottom:4px"><span style="color:var(--text-muted)">Flight:</span> <strong>${d.flight}</strong></div>
        <div style="font-size:13px;margin-bottom:4px"><span style="color:var(--text-muted)">Terminal:</span> <strong>${d.terminal}</strong></div>
        <div style="font-size:13px"><span style="color:var(--text-muted)">ETA:</span> <strong>${d.eta}</strong></div>
      </div>
      <div style="background:var(--bg);border-radius:var(--radius-md);padding:12px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:8px">Pickup</div>
        <div style="font-size:13px;margin-bottom:4px"><span style="color:var(--text-muted)">Receiver:</span> <strong>${d.receiver}</strong></div>
        <div style="font-size:13px"><span style="color:var(--text-muted)">Dietary:</span> <strong>${d.diet||"None"}</strong></div>
      </div>
      <div style="background:var(--bg);border-radius:var(--radius-md);padding:12px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:8px">Delhi Accommodation</div>
        <div style="font-size:13px;margin-bottom:4px"><strong>${d.hotel_delhi}</strong></div>
        <div style="font-size:13px;color:var(--text-muted)">Room ${d.room_delhi}</div>
      </div>
      <div style="background:var(--bg);border-radius:var(--radius-md);padding:12px">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:8px">Lucknow Accommodation</div>
        <div style="font-size:13px;margin-bottom:4px"><strong>${d.hotel_lko}</strong></div>
        <div style="font-size:13px;color:var(--text-muted)">Room ${d.room_lko}</div>
      </div>
    </div>`;
  document.getElementById("modal-view").classList.add("open");
}
function closeViewModal() {
  document.getElementById("modal-view").classList.remove("open");
}

// ── UPDATE STATUS ─────────────────────────────────────────────────────────────

function updateStatus(id) {
  const d = DATA.delegates.find(x => x.id === id);
  if (!d) return;
  const flow = ["scheduled","awaiting","landed","en-route","checked-in"];
  const idx  = flow.indexOf(d.status);
  if (idx < flow.length - 1) {
    d.status = flow[idx + 1];
    DATA.notifications.unshift({
      msg:  `${d.name} status updated to: ${statusConfig[d.status]?.label || d.status}`,
      time: new Date().toLocaleTimeString("en-IN", {hour:"2-digit",minute:"2-digit"}),
      from: "Coordinator",
      read: false
    });
    renderArrivals();
    renderDashboard();
    renderDelegates();
    renderNotifications();
    showToast(`${d.name} → ${statusConfig[d.status]?.label}`);
  } else {
    showToast("Status is already at final stage.");
  }
}

// ── BROADCAST ────────────────────────────────────────────────────────────────

function sendBroadcast() {
  const msg   = document.getElementById("broadcast-msg").value.trim();
  const group = document.getElementById("broadcast-group").value;
  if (!msg) { showToast("Please type a message first."); return; }
  DATA.notifications.unshift({
    msg:  `[BROADCAST to ${group}] ${msg}`,
    time: new Date().toLocaleTimeString("en-IN", {hour:"2-digit",minute:"2-digit"}),
    from: "Admin Broadcast",
    read: false
  });
  document.getElementById("broadcast-msg").value = "";
  renderNotifications();
  showToast(`Broadcast sent to: ${group}`);
}

// ── TOAST ─────────────────────────────────────────────────────────────────────

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

// ── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  renderArrivals();
  renderDelegates();
  renderHotels();
  renderTransport();
  renderNotifications();
  renderDay(0);

  // Search wiring
  document.getElementById("arrivals-search").addEventListener("input", e => renderArrivals(e.target.value));
  document.getElementById("delegates-search").addEventListener("input", e => renderDelegates(e.target.value));
});
