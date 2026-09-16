/* ============================================================
   CONFIG — everything personal lives here. Edit freely.
   ============================================================ */
const CONFIG = {
  herName: 'Yunji',
  herEmoji: '❤️🍀',
  yourName: 'Jessup',
  yourEmail: 'jessupb11@gmail.com',
  city: 'Los Angeles',
  dateLabel: 'Friday, October 16, 2026',
  dateShort: 'Fri, Oct 16, 2026',
  fineprint: 'our real anniversary is Oct 20, but we\'re celebrating early. rules are rules (i made them up).',
  closingLine: 'it\'s a date. 3 years down, all of them to go.',
  secretText: 'you found the secret heart. that\'s 3 years of you being the best part of my every day. — J',
  // drop a photo at photo.jpg to show it in the secret modal
  secretPhoto: 'photo.jpg',

  // Start-time options (24h value, display label, silly note)
  startTimes: [
    { v: '09:00', t: '9:00 am',  l: 'early bird 🐦' },
    { v: '09:30', t: '9:30 am',  l: 'ambitious' },
    { v: '10:00', t: '10:00 am', l: 'reasonable' },
    { v: '10:30', t: '10:30 am', l: 'the sweet spot' },
    { v: '11:00', t: '11:00 am', l: 'sleep in (respect) 😴' },
    { v: '11:30', t: '11:30 am', l: 'brunch o\'clock 🥞' },
  ],

  // Each chapter = 2 options. `favorite: true` is where "pick for me" lands.
  // `decoy: true` makes an option a fake choice that snaps to the locked one.
  chapters: [
    {
      id: 'latte', title: 'chapter 1 · morning latte',
      question: 'first, caffeine. lattes from:',
      options: [
        { id: 'damo', name: 'Damo', emoji: '☕', blurb: 'the good window seat + the oat latte that ruined all other oat lattes', favorite: true },
        { id: 'cg', name: 'Community Goods', emoji: '🍵', blurb: 'matcha, a pastry we "split", and pretending we\'re regulars' },
      ],
    },
    {
      id: 'brunch', title: 'chapter 2 · brunch',
      question: 'ok, real food. brunch at:',
      options: [
        { id: 'republique', name: 'République', emoji: '🍳', blurb: 'the pretty one on La Brea. we are getting the kouign-amann.', favorite: true },
        { id: 'greatwhite', name: 'Great White', emoji: '🥑', blurb: 'venice vibes, avocado toast that is actually worth the hype' },
      ],
    },
    {
      id: 'afternoon', title: 'chapter 3 · afternoon',
      question: 'afternoon adventure. pick one:',
      options: [
        { id: 'getty', name: 'The Getty Center', emoji: '🖼️', blurb: 'art, gardens, and the little tram we love for no reason', favorite: true },
        { id: 'huntington', name: 'Huntington Gardens', emoji: '🌹', blurb: 'rose garden first, japanese garden second, in that order' },
      ],
    },
    {
      id: 'golden', title: 'chapter 4 · golden hour',
      question: 'golden hour. where do we watch it?',
      options: [
        { id: 'santamonica', name: 'Santa Monica Pier', emoji: '🎡', blurb: 'ferris wheel at sunset, obviously' },
        { id: 'griffith', name: 'Griffith Observatory', emoji: '🔭', blurb: 'city views, and we pretend to know constellations', favorite: true },
      ],
    },
    {
      id: 'dinner', title: 'chapter 5 · dinner',
      question: 'and for dinner…',
      options: [
        { id: 'lawrys', name: 'Lawry\'s The Prime Rib', emoji: '🥩', blurb: 'the silver cart. the spinning salad bowl. the yorkshire pudding.', time: '6:30 pm', locked: true, favorite: true },
        { id: 'other', name: 'Somewhere else?', emoji: '🤔', blurb: 'surely there are other options…', decoy: true,
          decoyText: 'nope 😌 reservation\'s already made. Lawry\'s, 6:30.' },
      ],
    },
    {
      id: 'dessert', title: 'chapter 6 · dessert',
      question: 'last stop. sweet or scenic?',
      options: [
        { id: 'saltstraw', name: 'Salt & Straw', emoji: '🍦', blurb: 'larchmont, two scoops, we share (i lie)', favorite: true },
        { id: 'drive', name: 'Night drive + a view', emoji: '🌃', blurb: 'mulholland, windows down, our playlist' },
      ],
    },
  ],
};

/* ============================================================
   STATE
   ============================================================ */
const STORE_KEY = 'yunji-invite-v1';
let state = { screen: 'box', time: null, chapter: 0, picks: {}, rsvp: false };
try {
  if (location.search.includes('reset')) localStorage.removeItem(STORE_KEY);
  const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
  if (saved) state = { ...state, ...saved };
} catch (_) {}
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {} }

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

/* ============================================================
   SCREEN NAV
   ============================================================ */
function go(name) {
  const cur = $('.screen.active');
  const next = document.querySelector(`[data-screen="${name}"]`);
  if (!next || cur === next) return;
  cur.classList.add('leaving');
  setTimeout(() => {
    cur.classList.remove('active', 'leaving');
    next.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    state.screen = name; save();
    onEnter(name);
  }, 280);
}
function onEnter(name) {
  if (name === 'flowers') growFlowers();
  if (name === 'time') renderTimes();
  if (name === 'loading') runLoader();
  if (name === 'chapter') renderChapter();
  if (name === 'ticket') renderTicket();
}

/* ============================================================
   CONFETTI / FIREWORKS
   ============================================================ */
const fx = $('#fx'); const ctx = fx.getContext('2d');
let parts = []; let fxRunning = false;
function sizeFx() { fx.width = innerWidth * devicePixelRatio; fx.height = innerHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
addEventListener('resize', sizeFx); sizeFx();
const COLORS = ['#ff6b8b', '#ffb8c9', '#ffe2a8', '#6fb98f', '#ffffff', '#ffd27a'];
function burst(x, y, n = 90, spread = 9, gravity = .18) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2; const s = Math.random() * spread + 2;
    parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 3, g: gravity, life: 1, decay: .008 + Math.random() * .012,
      c: COLORS[(Math.random() * COLORS.length) | 0], r: 3 + Math.random() * 5, rot: Math.random() * 6, vr: (Math.random() - .5) * .3, shape: Math.random() < .3 ? 'heart' : 'rect' });
  }
  if (!fxRunning) { fxRunning = true; requestAnimationFrame(tick); }
}
function heart(x, y, r) { ctx.beginPath(); ctx.moveTo(x, y + r * .3); ctx.bezierCurveTo(x, y - r * .4, x - r, y - r * .4, x - r, y + r * .2); ctx.bezierCurveTo(x - r, y + r * .8, x, y + r * 1.2, x, y + r * 1.5); ctx.bezierCurveTo(x, y + r * 1.2, x + r, y + r * .8, x + r, y + r * .2); ctx.bezierCurveTo(x + r, y - r * .4, x, y - r * .4, x, y + r * .3); ctx.fill(); }
function tick() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(p => p.life > 0 && p.y < innerHeight + 30);
  for (const p of parts) {
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.life -= p.decay; p.rot += p.vr;
    ctx.save(); ctx.globalAlpha = Math.max(p.life, 0); ctx.fillStyle = p.c; ctx.translate(p.x, p.y); ctx.rotate(p.rot);
    if (p.shape === 'heart') heart(0, 0, p.r * .8); else ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6);
    ctx.restore();
  }
  if (parts.length) requestAnimationFrame(tick); else { fxRunning = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
}
function fireworks(rounds = 6) {
  let i = 0; const iv = setInterval(() => {
    burst(innerWidth * (.2 + Math.random() * .6), innerHeight * (.15 + Math.random() * .4), 70, 7, .12);
    if (++i >= rounds) clearInterval(iv);
  }, 380);
}

/* ============================================================
   0. THE BOX
   ============================================================ */
const btnNo = $('#btn-no'); const btnYes = $('#btn-yes'); let noTries = 0;
const NO_LINES = ['nice try', 'the button is shy', 'it keeps running away, weird', 'i think it\'s a sign', 'ok just press the other one', 'yes is getting bigger for some reason'];
function flee() {
  noTries++;
  btnNo.classList.add('fleeing');
  const w = btnNo.offsetWidth, h = btnNo.offsetHeight;
  btnNo.style.left = Math.random() * (innerWidth - w - 20) + 10 + 'px';
  btnNo.style.top = Math.random() * (innerHeight - h - 120) + 60 + 'px';
  btnYes.style.setProperty('--grow', 1 + Math.min(noTries, 6) * .12);
  btnYes.classList.add('grow');
  $('#no-hint').textContent = NO_LINES[Math.min(noTries - 1, NO_LINES.length - 1)];
  if (noTries > 8) btnNo.style.display = 'none';
}
btnNo.addEventListener('pointerenter', flee);
btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); flee(); }, { passive: false });
btnNo.addEventListener('click', (e) => { e.preventDefault(); flee(); });
function openGift() {
  const g = $('#gift'); if (g.classList.contains('open')) return;
  g.classList.add('shake');
  setTimeout(() => {
    g.classList.remove('shake'); g.classList.add('open');
    const r = g.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 3, 140, 10);
    btnNo.style.display = 'none';
    setTimeout(() => go('flowers'), 1100);
  }, 1000);
}
btnYes.addEventListener('click', openGift);
$('#gift').addEventListener('click', openGift);

/* ============================================================
   1. FLOWERS
   ============================================================ */
const FLOWERS = [
  { x: 200, h: 400, c: '#ff6b8b', c2: '#ffd27a', d: 0 },
  { x: 140, h: 340, c: '#ffb8c9', c2: '#ff6b8b', d: .25 },
  { x: 265, h: 350, c: '#ffd27a', c2: '#ff8fa8', d: .4 },
  { x: 95, h: 270, c: '#ff8fa8', c2: '#fff', d: .6 },
  { x: 310, h: 280, c: '#c9a3ff', c2: '#ffd27a', d: .75 },
  { x: 175, h: 250, c: '#fff', c2: '#ffd27a', d: .9 },
  { x: 235, h: 230, c: '#ff6b8b', c2: '#fff', d: 1.05 },
];
let flowersGrown = false;
function growFlowers() {
  if (flowersGrown) return; flowersGrown = true;
  const svg = $('#bouquet'); const NS = 'http://www.w3.org/2000/svg'; svg.innerHTML = '';
  FLOWERS.forEach((f, i) => {
    const top = 520 - f.h; const bend = (i % 2 ? 1 : -1) * 25;
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', `M ${f.x} 520 C ${f.x + bend} ${520 - f.h * .4}, ${f.x - bend} ${520 - f.h * .7}, ${f.x} ${top}`);
    path.setAttribute('class', 'stem'); svg.appendChild(path);
    const len = path.getTotalLength(); path.style.setProperty('--len', len); path.style.setProperty('--d', f.d + 's');
    // leaf
    const lp = path.getPointAtLength(len * .45); const leaf = document.createElementNS(NS, 'ellipse');
    leaf.setAttribute('cx', lp.x + (i % 2 ? 14 : -14)); leaf.setAttribute('cy', lp.y); leaf.setAttribute('rx', 16); leaf.setAttribute('ry', 7);
    leaf.setAttribute('transform', `rotate(${i % 2 ? -30 : 30} ${lp.x} ${lp.y})`); leaf.setAttribute('class', 'leaf'); leaf.style.setProperty('--d', f.d + 's'); svg.appendChild(leaf);
    // bloom
    const g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'bloom'); g.style.setProperty('--d', f.d + 's');
    const petals = 6, R = 30 - i * 1.5;
    for (let p = 0; p < petals; p++) {
      const e = document.createElementNS(NS, 'ellipse');
      e.setAttribute('cx', f.x); e.setAttribute('cy', top - R * .55); e.setAttribute('rx', R * .38); e.setAttribute('ry', R * .62);
      e.setAttribute('fill', f.c); e.setAttribute('transform', `rotate(${p * 360 / petals} ${f.x} ${top})`); g.appendChild(e);
    }
    const c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', f.x); c.setAttribute('cy', top); c.setAttribute('r', R * .32); c.setAttribute('fill', f.c2); g.appendChild(c);
    g.addEventListener('click', () => { g.classList.remove('wiggle'); void g.getBBox(); g.classList.add('wiggle'); burst(0, 0, 0); const r = g.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 14, 4, .1); if (i === 2) showBee(f.x + 30, top - 10); });
    svg.appendChild(g);
  });
  const bee = document.createElementNS(NS, 'text'); bee.setAttribute('class', 'bee'); bee.textContent = '🐝'; bee.setAttribute('id', 'bee'); svg.appendChild(bee);
  // petals falling
  const pw = $('#petals'); pw.innerHTML = '';
  for (let i = 0; i < 14; i++) { const p = document.createElement('span'); p.className = 'petal'; p.style.left = Math.random() * 100 + '%'; p.style.animationDuration = 6 + Math.random() * 6 + 's'; p.style.animationDelay = Math.random() * 8 + 's'; p.style.background = ['#ffb8c9', '#ff8fa8', '#ffd27a'][i % 3]; pw.appendChild(p); }
  setTimeout(() => $('#flower-note').classList.add('show'), 2600);
}
function showBee(x, y) { const b = $('#bee'); b.setAttribute('x', x); b.setAttribute('y', y); b.classList.add('show'); }
$('#btn-flowers-next').addEventListener('click', () => go('invite'));

/* ============================================================
   2. INVITE
   ============================================================ */
$('#letter-date').textContent = CONFIG.dateLabel;
$('#letter-fine').textContent = CONFIG.fineprint;
$('#envelope').addEventListener('click', () => {
  const env = $('#envelope'); if (env.classList.contains('open')) return;
  env.classList.add('open'); $('#env-hint').textContent = '';
  setTimeout(() => { const r = env.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 50, 6); $('#invite-buttons').classList.remove('hidden'); }, 900);
});
$('#btn-invite-next').addEventListener('click', () => go('time'));

/* ============================================================
   3. TIME PICKER
   ============================================================ */
function renderTimes() {
  const grid = $('#time-grid'); grid.innerHTML = '';
  CONFIG.startTimes.forEach(t => {
    const b = document.createElement('button'); b.className = 'time-pill'; b.innerHTML = `<span class="t">${t.t}</span><span class="l">${t.l}</span>`;
    if (state.time === t.v) b.classList.add('selected');
    b.addEventListener('click', () => pickTime(t, b)); grid.appendChild(b);
  });
  if (state.time) { const t = CONFIG.startTimes.find(x => x.v === state.time); if (t) setClock(t); }
}
function setClock(t) {
  const [h, m] = t.v.split(':').map(Number);
  $('#hand-hour').style.transform = `rotate(${(h % 12) * 30 + m * .5}deg)`; $('#hand-minute').style.transform = `rotate(${m * 6}deg)`;
  $('#time-label').textContent = `${t.t} — ${t.l}`; $('#btn-time-next').disabled = false;
}
function pickTime(t, el) { $$('.time-pill').forEach(p => p.classList.remove('selected')); el.classList.add('selected'); state.time = t.v; save(); setClock(t); }
$('#btn-time-next').addEventListener('click', () => go('loading'));

/* ============================================================
   4. FAKE LOADER
   ============================================================ */
function runLoader() {
  const fill = $('#bar-fill'), pct = $('#loader-pct'), txt = $('#loader-text'), emo = $('#loader-emoji');
  const lines = [[0, 'loading your boyfriend\'s plans…', '🧑‍💻'], [25, 'consulting yelp…', '📱'], [50, 'checking reservations…', '📞'], [75, 'ironing a shirt…', '👔'], [99, 'hmm.', '🤨']];
  let p = 0; let li = 0; fill.style.width = '0%';
  const iv = setInterval(() => {
    p += 3 + Math.random() * 4; if (p > 99) p = 99;
    while (li < lines.length && p >= lines[li][0]) { txt.textContent = lines[li][1]; emo.textContent = lines[li][2]; li++; }
    fill.style.width = p + '%'; pct.textContent = Math.floor(p) + '%';
    if (p >= 99) {
      clearInterval(iv);
      setTimeout(() => { txt.textContent = 'just kidding. you\'re planning it. 💅'; emo.textContent = '😌'; fill.style.width = '100%'; pct.textContent = '100%'; }, 1600);
      setTimeout(() => go('chapter'), 3300);
    }
  }, 120);
}

/* ============================================================
   5. CHAPTERS
   ============================================================ */
let toastTimer;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600); }
function renderChapter() {
  const ch = CONFIG.chapters[state.chapter];
  if (!ch) { go('ticket'); return; }
  $('#dots').innerHTML = CONFIG.chapters.map((_, i) => `<span class="dot ${i < state.chapter ? 'done' : ''} ${i === state.chapter ? 'now' : ''}"></span>`).join('');
  $('#ch-title').textContent = ch.title; $('#ch-question').textContent = ch.question;
  const wrap = $('#options'); wrap.innerHTML = ''; $('#toast').classList.remove('show');
  ch.options.forEach(o => {
    const el = document.createElement('div'); el.className = 'option'; el.dataset.id = o.id;
    el.innerHTML = `<div class="opt-emoji">${o.emoji}</div><div><p class="opt-name">${o.name}</p><p class="opt-blurb">${o.blurb}</p>${o.time ? `<span class="opt-time">${o.time}</span>` : ''}</div>`;
    if (state.picks[ch.id] === o.id) el.classList.add(o.locked ? 'locked' : 'selected');
    el.addEventListener('click', () => pickOption(ch, o, el)); wrap.appendChild(el);
  });
  $('#btn-ch-next').disabled = !state.picks[ch.id];
  $('#btn-ch-next').textContent = state.chapter === CONFIG.chapters.length - 1 ? 'see my day →' : 'next →';
  const s = $('.screen[data-screen="chapter"]'); s.classList.remove('active'); void s.offsetWidth; s.classList.add('active');
}
function pickOption(ch, o, el) {
  if (o.decoy) {
    el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); toast(o.decoyText || 'nope.');
    const locked = ch.options.find(x => x.locked) || ch.options.find(x => x !== o);
    setTimeout(() => { el.classList.remove('shake'); selectOption(ch, locked); }, 800);
    return;
  }
  selectOption(ch, o);
}
function selectOption(ch, o) {
  state.picks[ch.id] = o.id; save();
  $$('.option').forEach(x => { x.classList.remove('selected', 'locked'); if (x.dataset.id === o.id) x.classList.add(o.locked ? 'locked' : 'selected'); });
  const el = $(`.option[data-id="${o.id}"]`); const r = el.getBoundingClientRect(); burst(r.right - 30, r.top + 20, 18, 4, .15);
  $('#btn-ch-next').disabled = false;
}
$('#btn-shuffle').addEventListener('click', () => {
  const ch = CONFIG.chapters[state.chapter]; const els = $$('.option'); const real = ch.options.filter(o => !o.decoy);
  const target = real.find(o => o.favorite) || real[(Math.random() * real.length) | 0];
  let n = 0; const iv = setInterval(() => {
    els.forEach(e => e.classList.remove('highlight')); els[n % els.length].classList.add('highlight'); n++;
    if (n > 7) { clearInterval(iv); els.forEach(e => e.classList.remove('highlight')); selectOption(ch, target); toast('the dice have spoken 🎲'); }
  }, 130);
});
$('#btn-ch-next').addEventListener('click', () => {
  if (!state.picks[CONFIG.chapters[state.chapter].id]) return;
  state.chapter++; save();
  if (state.chapter >= CONFIG.chapters.length) go('ticket'); else renderChapter();
});

/* ============================================================
   6. TICKET
   ============================================================ */
function timeLabel() { const t = CONFIG.startTimes.find(x => x.v === state.time); return t ? t.t : '—'; }
function itinerary() {
  return CONFIG.chapters.map(ch => { const o = ch.options.find(x => x.id === state.picks[ch.id]) || ch.options.find(x => x.locked) || ch.options[0]; return { chapter: ch.title.split('·').pop().trim(), ...o }; });
}
function renderTicket() {
  $('#t-date').textContent = CONFIG.dateShort; $('#t-time').textContent = timeLabel(); $('#t-city').textContent = CONFIG.city;
  $('#t-list').innerHTML = itinerary().map(o => `<li><div class="tl-emoji">${o.emoji}</div><div><p class="tl-chapter">${o.chapter}</p><p class="tl-name">${o.name}${o.time ? `<small>${o.time}</small>` : ''}</p></div></li>`).join('');
  if (state.rsvp) afterRsvp();
}
function afterRsvp() { $('#rsvp-block').classList.add('hidden'); $('#after-rsvp').classList.remove('hidden'); $('#closing-line').textContent = CONFIG.closingLine; }
$('#btn-rsvp').addEventListener('click', () => { state.rsvp = true; save(); fireworks(7); afterRsvp(); });

function plainItinerary() {
  const lines = itinerary().map((o, i) => `${i + 1}. ${o.chapter}: ${o.name}${o.time ? ' @ ' + o.time : ''}`);
  return `${CONFIG.herName} ${CONFIG.herEmoji} RSVP'd YES!\n\n3 Year Anniversary Date\n${CONFIG.dateLabel} · ${CONFIG.city}\nPick up: ${timeLabel()}\n\n${lines.join('\n')}\n`;
}
$('#btn-send').addEventListener('click', () => {
  const her = $('#her-email').value.trim();
  const url = `mailto:${CONFIG.yourEmail}${her ? '?cc=' + encodeURIComponent(her) + '&' : '?'}subject=${encodeURIComponent('🍀 ' + CONFIG.herName + ' said yes — our 3 year date')}&body=${encodeURIComponent(plainItinerary())}`;
  location.href = url;
});
$('#btn-save').addEventListener('click', async () => {
  const b = $('#btn-save'); b.textContent = '✨ saving…';
  try {
    if (!window.html2canvas) throw new Error('no html2canvas');
    const canvas = await html2canvas($('#ticket'), { backgroundColor: '#fff7f1', scale: 3, useCORS: true });
    const a = document.createElement('a'); a.download = 'our-3-year-date.png'; a.href = canvas.toDataURL('image/png'); a.click();
    b.textContent = '💾 saved!';
  } catch (e) { b.textContent = '📸 screenshot it instead'; }
  setTimeout(() => b.textContent = '💾 save ticket', 2500);
});

/* ============================================================
   SECRET HEART + RESET + INIT
   ============================================================ */
let heartTaps = 0;
$('#secret-heart').addEventListener('click', (e) => {
  heartTaps++; burst(e.clientX, e.clientY, 10, 3, .1);
  if (heartTaps >= 3) { heartTaps = 0; $('#secret-text').textContent = CONFIG.secretText; $('#secret-modal').classList.remove('hidden');
    const img = new Image(); img.onload = () => { $('#polaroid-img').innerHTML = ''; $('#polaroid-img').appendChild(img); }; img.src = CONFIG.secretPhoto; }
});
$('#btn-secret-close').addEventListener('click', () => $('#secret-modal').classList.add('hidden'));
let footTaps = 0; $('#foot').addEventListener('click', () => { if (++footTaps >= 5) { localStorage.removeItem(STORE_KEY); location.href = location.pathname; } });

$$('.her-name').forEach(e => e.textContent = CONFIG.herName);
$$('.her-emoji').forEach(e => e.textContent = CONFIG.herEmoji);
$$('.your-name').forEach(e => e.textContent = CONFIG.yourName);
document.title = `For ${CONFIG.herName} ${CONFIG.herEmoji}`;

// Resume where she left off (but always replay the box if she hasn't opened it)
(function init() {
  const s = state.screen;
  if (s && s !== 'box' && s !== 'loading') { $('.screen.active').classList.remove('active'); document.querySelector(`[data-screen="${s}"]`).classList.add('active'); onEnter(s); }
  else if (s === 'loading') { $('.screen.active').classList.remove('active'); document.querySelector('[data-screen="time"]').classList.add('active'); onEnter('time'); }
})();
