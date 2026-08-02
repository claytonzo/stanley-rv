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
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></svg>'
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
