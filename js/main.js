// ===================== Icons =====================
const ICONS = {
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1M12 2l-2 2 2 2 2-2-2-2M12 22l-2-2 2-2 2 2-2 2M2 12l2-2 2 2-2 2-2-2M22 12l-2-2-2 2 2 2 2-2"/></svg>',
  awning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8c2-3 16-3 18 0M3 8l1 5h3l-1-5M9 8l1 5h4l1-5M15 8l1 5h3l-1-5M4 21V13M20 21V13"/></svg>',
  badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5 7 22l5-3 5 3-2-8.5"/></svg>',
  tire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2" stroke-linecap="round"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  paw: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="7" cy="9" r="2.1"/><circle cx="12" cy="6.5" r="2.1"/><circle cx="17" cy="9" r="2.1"/><path d="M12 12c-3.3 0-6.5 2.6-6.5 5.4 0 1.7 1.4 2.9 3.1 2.4.9-.3 1.8-.5 2.4-.5.9 0 2.1.5 3.4.5 1.8 0 3.1-1.3 3.1-3 0-3-3.2-4.8-5.5-4.8z"/></svg>',
  wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8.5c5.5-5.3 14.5-5.3 20 0M5.5 12.5c3.8-3.6 9.2-3.6 13 0M9 16.5c1.8-1.7 4.2-1.7 6 0"/><circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13.5" r="3.4"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="1.5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
  radio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="2"/><path d="M4.9 19.1a10 10 0 0 1 0-14.1M19.1 5a10 10 0 0 1 0 14.1M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20v-3"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8 7 6 10 6 14c0 4.4 2.7 8 6 8s6-3.6 6-8c0-4-2-7-6-12Z"/></svg>'
};

// ===================== Hotspot data (positions are % of image width/height) =====================
const HOTSPOTS = [
  {
    x: 18, y: 43, icon: 'snow',
    title: 'Rooftop AC',
    body: "A Coleman Mach unit keeps the cabin cool. We're mid-project reverse-engineering its Bluetooth protocol so Home Assistant can control it directly — no dash-mounted app required."
  },
  {
    x: 54, y: 38, icon: 'awning',
    title: '13ft Power Awning',
    body: 'Push-button retractable awning for instant shade or rain cover — no wrestling with poles.'
  },
  {
    x: 47, y: 49, icon: 'badge',
    title: 'National Park Foundation Edition',
    body: 'A limited trim built for going further off the pavement, with proceeds supporting the National Park Foundation.'
  },
  {
    x: 74, y: 69, icon: 'bolt',
    title: 'Off-Grid Power',
    body: 'A Pure³ Advanced Energy System plus an upgraded lithium battery bank. State of charge, voltage, and current are all monitored live through Home Assistant.'
  },
  {
    x: 82, y: 86, icon: 'tire',
    title: 'Trail-Ready',
    body: 'Black alloy wheels, BFGoodrich All-Terrain tires, and front/rear SumoSprings for a smoother ride once the pavement ends.'
  },
  {
    x: 63, y: 60, icon: 'paw',
    title: "Stanley's Co-Pilot",
    body: 'Non-negotiable crew member. Approves all routes.'
  },
  {
    x: 39, y: 40, icon: 'wifi',
    title: 'Always Connected',
    body: "A roof-mounted Starlink dish plus a GL-iNet travel router keep the whole rig online — which means the smart-home dashboards work from a trailhead just as well as the driveway."
  },
  {
    x: 28, y: 59, icon: 'camera',
    title: 'Smart & Secure',
    body: 'A camera-based security system arms and disarms itself based on presence, with the whole mesh (Zigbee + Bluetooth sensors) tied together in Home Assistant.'
  },
  {
    x: 66, y: 80, icon: 'flame',
    title: 'Propane Heat',
    body: "A built-in propane furnace keeps things warm well below freezing. The tank level is monitored through Home Assistant too, with a low-propane alert before it runs out mid-winter."
  }
];

// ===================== Tech stack cards =====================
const TECH_CARDS = [
  {
    icon: 'chip', title: 'The Brain',
    body: 'A Raspberry Pi 5 running Home Assistant OS — the hub every other system below reports into.'
  },
  {
    icon: 'bolt', title: 'Volta Battery Monitoring',
    body: 'Live state-of-charge, voltage, and current from the house battery bank, reverse-engineered over Bluetooth.',
    repo: 'https://github.com/claytonzo/myvolta'
  },
  {
    icon: 'snow', title: 'Coleman Mach Climate',
    body: 'An in-progress project to control the rooftop AC directly over BLE instead of through its phone app.',
    repo: 'https://github.com/claytonzo/colemanmach'
  },
  {
    icon: 'camera', title: 'Security',
    body: 'Camera-based monitoring with presence-aware automation — arms and disarms itself, no manual toggling.'
  },
  {
    icon: 'radio', title: 'Zigbee &amp; BLE Sensor Mesh',
    body: 'Propane level, temperature, humidity, and more — a mix of Zigbee and Bluetooth sensors feeding straight into Home Assistant.'
  },
  {
    icon: 'flame', title: 'Propane Monitoring',
    body: 'A tank-level sensor feeds propane readings straight into Home Assistant, with a low-propane alert — handy once the furnace starts working overtime in winter.'
  },
  {
    icon: 'wifi', title: 'Connectivity',
    body: 'Starlink for the pipe, a GL-iNet router for the local network, keeping everything reachable off-grid.'
  },
  {
    icon: 'chart', title: 'Dashboards & History',
    body: 'Grafana and InfluxDB keep long-term history so trends (battery health, propane usage) are visible over an entire season, not just right now.'
  },
  {
    icon: 'home', title: 'Voice & Casting',
    body: 'Google Cast speakers and an Assist voice pipeline for hands-free control while parked.'
  }
];

// ===================== Render hotspots =====================
const layer = document.getElementById('hotspotLayer');
const tooltip = document.getElementById('tooltip');
const tooltipIcon = document.getElementById('tooltipIcon');
const tooltipTitle = document.getElementById('tooltipTitle');
const tooltipBody = document.getElementById('tooltipBody');
const tooltipClose = document.getElementById('tooltipClose');
const frame = document.getElementById('photoFrame');

let activeDot = null;

HOTSPOTS.forEach((h, i) => {
  const btn = document.createElement('button');
  btn.className = 'hotspot';
  btn.style.left = h.x + '%';
  btn.style.top = h.y + '%';
  btn.setAttribute('aria-label', h.title);
  btn.innerHTML = '<span class="dot-core"></span>';

  btn.addEventListener('mouseenter', () => showTooltip(btn, h));
  btn.addEventListener('focus', () => showTooltip(btn, h));
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (activeDot === btn && tooltip.classList.contains('visible')) {
      hideTooltip();
    } else {
      showTooltip(btn, h);
    }
  });

  layer.appendChild(btn);
});

function showTooltip(btn, h) {
  document.querySelectorAll('.hotspot.active').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  activeDot = btn;

  tooltipIcon.innerHTML = ICONS[h.icon] || '';
  tooltipTitle.textContent = h.title;
  tooltipBody.textContent = h.body;

  const btnRect = btn.getBoundingClientRect();
  tooltip.classList.add('visible');
  tooltip.setAttribute('aria-hidden', 'false');

  const tw = tooltip.offsetWidth || 300;
  const th = tooltip.offsetHeight || 140;
  let left = btnRect.left + btnRect.width / 2 - tw / 2;
  let top = btnRect.top - th - 16;

  if (top < 12) top = btnRect.bottom + 16;
  left = Math.max(12, Math.min(left, window.innerWidth - tw - 12));

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
}

function hideTooltip() {
  tooltip.classList.remove('visible');
  tooltip.setAttribute('aria-hidden', 'true');
  if (activeDot) activeDot.classList.remove('active');
  activeDot = null;
}

tooltipClose.addEventListener('click', hideTooltip);
document.addEventListener('click', (e) => {
  if (!tooltip.contains(e.target) && !e.target.closest('.hotspot')) hideTooltip();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideTooltip(); });
window.addEventListener('scroll', hideTooltip, { passive: true });
window.addEventListener('resize', hideTooltip);

// ===================== Travels map =====================
// Add a stop for every place Stanley's parked overnight.
// See images/travels/README.md for how to add a photo + entry.
const TRAVELS = [
  {
    name: 'Slatington, PA',
    lat: 40.75142, lng: -75.60456,
    date: '2025-02-11',
    photo: 'images/travels/slatington-pa.jpg'
  },
  {
    name: 'Tatamy, PA',
    lat: 40.73907, lng: -75.25225,
    date: '2025-05-02',
    photo: 'images/travels/tatamy-pa.jpg'
  },
  {
    name: 'York County, NE',
    lat: 40.81337, lng: -97.41703,
    date: '2025-08-04',
    photo: 'images/travels/york-county-ne.jpg'
  },
  {
    name: 'Dawson County, NE',
    lat: 40.80126, lng: -99.7466,
    date: '2025-08-06',
    photo: 'images/travels/dawson-county-ne.jpg'
  },
  {
    name: 'Weldona, CO',
    lat: 40.36301, lng: -103.96874,
    date: '2025-08-07',
    photo: 'images/travels/weldona-co.jpg'
  },
  {
    name: 'Boulder, CO',
    lat: 39.99998, lng: -105.28594,
    date: '2025-08-13',
    photo: 'images/travels/boulder-co.jpg'
  },
  {
    name: 'Bar Harbor, ME',
    lat: 44.43301, lng: -68.2646,
    date: '2025-10-12',
    photo: 'images/travels/bar-harbor-me.jpg'
  },
  {
    name: 'Bethlehem, PA',
    lat: 40.58349, lng: -75.35444,
    date: '2025-10-27',
    photo: 'images/travels/bethlehem-pa.jpg'
  },
  {
    name: 'Fulton County, PA',
    lat: 40.05882, lng: -78.08195,
    date: '2025-10-29',
    photo: 'images/travels/fulton-county-pa.jpg'
  },
  {
    name: 'Highlands, NY',
    lat: 41.38823, lng: -73.96674,
    date: '2025-12-31',
    photo: 'images/travels/highlands-ny.jpg'
  },
  {
    name: 'Boston, MA',
    lat: 42.34676, lng: -71.09924,
    date: '2026-02-21',
    photo: 'images/travels/boston-ma.jpg'
  },
  {
    name: 'Worcester, MA',
    lat: 42.23605, lng: -71.80741,
    date: '2026-03-15',
    photo: 'images/travels/worcester-ma.jpg'
  },
  {
    name: 'Brigantine, NJ',
    lat: 39.39884, lng: -74.37276,
    date: '2026-03-24',
    photo: 'images/travels/brigantine-nj.jpg'
  },
  {
    name: 'Outer Banks, NC',
    lat: 35.81848, lng: -75.56348,
    date: '2026-03-29',
    photo: 'images/travels/outer-banks-nc.jpg'
  },
  {
    name: 'Lookout Mountain, TN',
    lat: 35.00707, lng: -85.34347,
    date: '2026-04-05',
    photo: 'images/travels/lookout-mountain-tn.jpg'
  },
  {
    name: 'Eagan, MN',
    lat: 44.84405, lng: -93.12472,
    date: '2026-06-14',
    photo: 'images/travels/eagan-mn.jpg'
  },
];

const mapEl = document.getElementById('travelMap');
if (mapEl && window.L) {
  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    minZoom: 3,
    maxZoom: 14,
  }).setView([39.5, -98.35], 4);

  // Standard OSM raster tiles — no API key required, unlike CARTO's basemap
  // service (their free anonymous tile endpoint now returns a watermark).
  // There's no official dark style for these, so dark mode is faked with a
  // CSS filter on the tile pane (see .map-dark in style.css).
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) mapEl.classList.add('map-dark');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    subdomains: 'abc',
    maxZoom: 19,
  }).addTo(map);

  const travelIcon = L.divIcon({
    className: 'travel-marker-wrap',
    html: '<span class="travel-marker"><span class="dot-core"></span></span>',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });

  TRAVELS.forEach(stop => {
    const popupHtml = `
      <div class="travel-popup">
        ${stop.photo ? `<img src="${stop.photo}" alt="Stanley at ${stop.name}" loading="lazy">` : ''}
        <h4>${stop.name}</h4>
        ${stop.date ? `<div class="travel-date">${stop.date}</div>` : ''}
        ${stop.caption ? `<p>${stop.caption}</p>` : ''}
      </div>
    `;
    L.marker([stop.lat, stop.lng], { icon: travelIcon }).addTo(map).bindPopup(popupHtml);
  });

  if (TRAVELS.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'map-empty';
    empty.textContent = 'No pins yet — first trip coming soon.';
    mapEl.parentElement.appendChild(empty);
  } else if (TRAVELS.length > 1) {
    const bounds = L.latLngBounds(TRAVELS.map(s => [s.lat, s.lng]));
    map.fitBounds(bounds.pad(0.3));
  }
}

// ===================== Render tech cards =====================
const grid = document.getElementById('techGrid');
TECH_CARDS.forEach(c => {
  const card = document.createElement('div');
  card.className = 'tech-card reveal';
  card.innerHTML = `
    <div class="tech-icon">${ICONS[c.icon] || ''}</div>
    <h3>${c.title}</h3>
    <p>${c.body}</p>
    ${c.repo ? `<a class="repo-link" href="${c.repo}" target="_blank" rel="noopener">See the code &rarr;</a>` : ''}
  `;
  grid.appendChild(card);
});

// ===================== Reveal on scroll =====================
const revealEls = document.querySelectorAll('.reveal, .tech-card, .spec-group, .mock-dash, .qr-card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => { el.classList.add('reveal'); io.observe(el); });

// ===================== Copy link =====================
const copyBtn = document.getElementById('copyBtn');
const shareUrl = document.getElementById('shareUrl');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const url = shareUrl.textContent.trim();
    try {
      await navigator.clipboard.writeText(url);
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = original; }, 1600);
    } catch (err) {
      /* clipboard API unavailable; no-op */
    }
  });
}
