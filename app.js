/* ============================================================
   CONFIG — everything personal lives here. Edit freely.
   ============================================================ */
const CONFIG = {
  herName: 'Yunji',
  herEmoji: '❤️🍀',
  yourName: 'Jessup',
  yourEmail: 'jessupb11@gmail.com',
  city: 'Los Angeles',
  // The invite shows "Friday, October ~~20~~ 16, 2026" with the 20 scratched out.
  date: { prefix: 'Friday, October', crossedOut: '20', actual: '16', year: '2026' },
  dateShort: 'Oct 16, 2026',
  fineprint: '',
  closingLine: 'three years down… many more to come.',
  secretText: 'you found the secret heart. three years of you being the best part of my every day. — J',
  secretPhoto: 'img/album/p20.jpg',
  secretCaption: '',
  loaderPhoto: 'img/album/loader.jpg',
  stampPhoto: 'img/album/p10.jpg',

  // Album — order matters. Captions are yours to rewrite.
  album: [
    { src: 'img/album/p03.jpg', cap: 'freshmen year photobooth' },
    { src: 'img/album/p01.jpg', cap: 'santa monica spring picnic' },
    { src: 'img/album/p10.jpg', cap: 'standard procedure' },
    { src: 'img/album/p12.jpg', cap: 'nyc summit one' },
    { src: 'img/album/p28.jpg', cap: 'our first valentines' },
    { src: 'img/album/p24.jpg', cap: 'SD beach' },
    { src: 'img/album/p22.jpg', cap: 'the grove' },
    { src: 'img/album/p02.jpg', cap: 'CABO' },
    { src: 'img/album/p16.jpg', cap: 'brooklyn' },
    { src: 'img/album/p13.jpg', cap: 'first impressions era' },
    { src: 'img/album/p19.jpg', cap: 'the getty' },
    { src: 'img/album/p04.jpg', cap: 'the best bouquet i made' },
    { src: 'img/album/p05.jpg', cap: 'kazu nori x getty' },
    { src: 'img/album/p06.jpg', cap: 'SF' },
    { src: 'img/album/p07.jpg', cap: 'brunch this past spring' },
    { src: 'img/album/p08.jpg', cap: 'me' },
    { src: 'img/album/p09.jpg', cap: 'you' },
    { src: 'img/album/p11.jpg', cap: 'MCO coffee' },
    { src: 'img/album/p14.jpg', cap: 'you and newdle' },
    { src: 'img/album/p15.jpg', cap: 'our first ever' },
    { src: 'img/album/p17.jpg', cap: 'me n angelines dino' },
    { src: 'img/album/p18.jpg', cap: 'grad surprise party (ty)' },
    { src: 'img/album/p21.jpg', cap: 'brentwood bacio' },
    { src: 'img/album/p23.jpg', cap: 'old memories' },
    { src: 'img/album/p25.jpg', cap: 'my 19th birthday gift' },
    { src: 'img/album/p26.jpg', cap: 'usc adventures' },
    { src: 'img/album/p27.jpg', cap: 'rieber 7N lounge' },
  ],

  startTimes: [
    { v: '09:00', t: '9:00 am',  l: 'early bird' },
    { v: '09:30', t: '9:30 am',  l: 'ambitious' },
    { v: '10:00', t: '10:00 am', l: 'reasonable' },
    { v: '10:30', t: '10:30 am', l: 'the sweet spot' },
    { v: '11:00', t: '11:00 am', l: 'sleep in (respect)' },
    { v: '11:30', t: '11:30 am', l: 'brunch o\'clock' },
  ],

  // Each chapter = 2 options. Images live at img/places/<id>.jpg
  // `favorite: true` is where "pick for me" lands. `decoy: true` snaps to the `locked` option.
  chapters: [
    { id: 'latte', title: 'chapter 1 · morning coffee', question: 'first, caffeine. lattes from:',
      options: [
        { id: 'damo', name: 'Damo', blurb: 'the OG #1', favorite: true },
        { id: 'cg', name: 'Community Goods', blurb: 'the best in the world' },
      ] },
    { id: 'brunch', title: 'chapter 2 · brunch', question: 'brunch spots.',
      options: [
        { id: 'republique', name: 'République', blurb: 'the pretty one on La Brea. we are getting the kouign-amann.', favorite: true },
        { id: 'greatwhite', name: 'Great White', blurb: 'venice, avocado toast that is actually worth the hype' },
      ] },
    { id: 'afternoon', title: 'chapter 3 · afternoon', question: 'somewhere to wander.',
      options: [
        { id: 'getty', name: 'The Getty Center', blurb: 'art, the garden maze, and the little tram we love for no reason', favorite: true },
        { id: 'huntington', name: 'Huntington Gardens', blurb: 'rose garden first, japanese garden second, in that order' },
      ] },
    { id: 'golden', title: 'chapter 4 · golden hour', question: 'where do we watch the sun go down?',
      options: [
        { id: 'santamonica', name: 'Santa Monica Pier', blurb: 'the ferris wheel at sunset, snacks on the sand like last time' },
        { id: 'griffith', name: 'Griffith Observatory', blurb: 'city views, and we pretend to know constellations', favorite: true },
      ] },
    { id: 'dinner', title: 'chapter 5 · dinner', question: 'and for dinner…',
      options: [
        { id: 'lawrys', name: 'Lawry\'s The Prime Rib', blurb: 'the silver cart. the spinning salad bowl. the yorkshire pudding.', time: '6:30 pm', locked: true, favorite: true },
        { id: 'other', name: 'Somewhere else?', blurb: 'surely there are other options…', decoy: true, decoyText: 'nope. reservation\'s already made. Lawry\'s, 6:30.' },
      ] },
    { id: 'dessert', title: 'chapter 6 · after', question: 'last stop. sweet or scenic?',
      options: [
        { id: 'saltstraw', name: 'Salt & Straw', blurb: 'larchmont, two scoops, we share (i lie)', favorite: true },
        { id: 'drive', name: 'Night drive + a view', blurb: 'mulholland, windows down, our playlist' },
      ] },
  ],
};

/* ============================================================
   STATE
   ============================================================ */
const STORE_KEY = 'yunji-invite-v2';
let state = { screen: 'box', time: null, chapter: 0, picks: {}, rsvp: false };
try {
  if (location.search.includes('reset')) localStorage.removeItem(STORE_KEY);
  const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
  if (saved) state = { ...state, ...saved };
} catch (_) {}
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {} }
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs = {}, parent) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }

/* ============================================================
   SCREEN NAV
   ============================================================ */
function go(name) {
  const cur = $('.screen.active'); const next = document.querySelector(`.screen[data-screen="${name}"]`);
  if (!next || cur === next) return;
  cur.classList.add('leaving');
  setTimeout(() => { cur.classList.remove('active', 'leaving'); next.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); state.screen = name; save(); document.body.dataset.screen = name; onEnter(name); }, 280);
}
function onEnter(name) {
  if (name === 'flowers') growFlowers();
  if (name === 'album') renderAlbum();
  if (name === 'time') renderTimes();
  if (name === 'loading') runLoader();
  if (name === 'chapter') renderChapter();
  if (name === 'ticket') renderTicket();
}

/* ============================================================
   CONFETTI
   ============================================================ */
const fx = $('#fx'); const ctx = fx.getContext('2d'); let parts = []; let fxRunning = false;
function sizeFx() { fx.width = innerWidth * devicePixelRatio; fx.height = innerHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
addEventListener('resize', sizeFx); sizeFx();
const COLORS = ['#f0c75e', '#e4a49a', '#a9c2d6', '#8c9c7e', '#fffaf3', '#dccbb0'];
function burst(x, y, n = 90, spread = 9, gravity = .18, colors = COLORS) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2; const s = Math.random() * spread + 2;
    parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 3, g: gravity, life: 1, decay: .008 + Math.random() * .012, c: colors[(Math.random() * colors.length) | 0], r: 3 + Math.random() * 5, rot: Math.random() * 6, vr: (Math.random() - .5) * .3 });
  }
  if (!fxRunning && parts.length) { fxRunning = true; requestAnimationFrame(tick); }
}
function tick() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(p => p.life > 0 && p.y < innerHeight + 30);
  for (const p of parts) {
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.life -= p.decay; p.rot += p.vr;
    ctx.save(); ctx.globalAlpha = Math.max(p.life, 0); ctx.fillStyle = p.c; ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); ctx.restore();
  }
  if (parts.length) requestAnimationFrame(tick); else { fxRunning = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
}
function fireworks(rounds = 6) { let i = 0; const iv = setInterval(() => { burst(innerWidth * (.2 + Math.random() * .6), innerHeight * (.15 + Math.random() * .4), 70, 7, .12); if (++i >= rounds) clearInterval(iv); }, 380); }

/* ============================================================
   0. THE BOX
   ============================================================ */
const btnNo = $('#btn-no'); const btnYes = $('#btn-yes'); let noTries = 0;
const NO_LINES = ['nice try', 'the button is shy', 'it keeps running away, weird', 'i think it\'s a sign', 'ok just press the other one', 'yes is getting bigger for some reason', 'still no?', 'you can do this all day, so can it'];
// The "no" button: on first touch it is re-parented to <body> (so no ancestor transform can
// throw off position: fixed), then hops with a small JS spring that is clamped to the viewport.
let lastFlee = 0, noPos = { x: 0, y: 0 }, noAnim = null;
function noBounds() { const w = btnNo.offsetWidth, h = btnNo.offsetHeight, pad = 24; return { minX: pad, maxX: innerWidth - w - pad, minY: 70, maxY: innerHeight - h - pad, w, h }; }
function placeNo(x, y) { const b = noBounds(); noPos.x = Math.min(Math.max(x, b.minX), b.maxX); noPos.y = Math.min(Math.max(y, b.minY), b.maxY); btnNo.style.transform = `translate(${noPos.x}px, ${noPos.y}px)`; }
function hopTo(tx, ty) {
  cancelAnimationFrame(noAnim);
  const sx = noPos.x, sy = noPos.y, t0 = performance.now(), dur = 620;
  const ease = (t) => 1 + 2.4 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2); // soft overshoot, settles at 1
  const step = (now) => { const t = Math.min(1, (now - t0) / dur); const e = ease(t); placeNo(sx + (tx - sx) * e, sy + (ty - sy) * e); if (t < 1) noAnim = requestAnimationFrame(step); };
  noAnim = requestAnimationFrame(step);
}
function flee(e) {
  const now = performance.now(); if (now - lastFlee < 700) return; lastFlee = now;
  if (!btnNo.classList.contains('fleeing')) { const r = btnNo.getBoundingClientRect(); document.body.appendChild(btnNo); btnNo.classList.add('fleeing'); placeNo(r.left, r.top); }
  noTries++;
  const b = noBounds(); const px = e && e.clientX != null ? e.clientX : innerWidth / 2, py = e && e.clientY != null ? e.clientY : innerHeight / 2;
  let best = null, bestD = -1;
  for (let i = 0; i < 8; i++) {
    const x = b.minX + Math.random() * Math.max(1, b.maxX - b.minX), y = b.minY + Math.random() * Math.max(1, b.maxY - b.minY);
    const d = Math.hypot(x + b.w / 2 - px, y + b.h / 2 - py); if (d > bestD) { bestD = d; best = { x, y }; }
  }
  hopTo(best.x, best.y);
  btnYes.style.setProperty('--grow', 1 + Math.min(noTries, 6) * .12); btnYes.classList.add('grow');
  $('#no-hint').textContent = NO_LINES[(noTries - 1) % NO_LINES.length];
}
addEventListener('resize', () => { if (btnNo.classList.contains('fleeing')) placeNo(noPos.x, noPos.y); });
btnNo.addEventListener('pointerenter', flee);
btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); flee(); }, { passive: false });
btnNo.addEventListener('click', (e) => { e.preventDefault(); flee(); });
function openGift() {
  const g = $('#gift'); if (g.classList.contains('open')) return;
  g.classList.add('shake');
  setTimeout(() => { g.classList.remove('shake'); g.classList.add('open'); const r = g.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 3, 140, 10); btnNo.style.display = 'none'; setTimeout(() => go('flowers'), 1100); }, 1000);
}
btnYes.addEventListener('click', openGift); $('#gift').addEventListener('click', openGift);

/* ============================================================
   1. BOUQUET — hand-drawn SVG flowers
   ============================================================ */
const BUNDLE = { x: 200, y: 500 };
function grad(defs, id, inner, outer, cx = '50%', cy = '35%') {
  const g = el('radialGradient', { id, cx, cy, r: '70%' }, defs);
  el('stop', { offset: '0%', 'stop-color': inner }, g); el('stop', { offset: '100%', 'stop-color': outer }, g);
}
function stemTo(svg, x, y, delay, color = '#5f7355', width = 4) {
  const bend = (x - BUNDLE.x) * -.35;
  const p = el('path', { d: `M ${BUNDLE.x} ${BUNDLE.y} C ${BUNDLE.x + bend * .3} ${BUNDLE.y - 80}, ${x + bend} ${y + 90}, ${x} ${y}`, class: 'stem', stroke: color, 'stroke-width': width }, svg);
  const len = p.getTotalLength(); p.style.setProperty('--len', len); p.style.setProperty('--d', delay + 's'); return p;
}
function leafOn(svg, path, t, side, delay, color = '#7d8f6a', len = 34, w = 11) {
  const L = path.getTotalLength(); const pt = path.getPointAtLength(L * t); const pt2 = path.getPointAtLength(L * t + 1);
  const ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI + (side > 0 ? 40 : -40);
  const outer = el('g', { transform: `translate(${pt.x} ${pt.y}) rotate(${ang})` }, svg);
  const leaf = el('path', { d: `M0 0 C ${len * .3} ${-w}, ${len * .75} ${-w}, ${len} 0 C ${len * .75} ${w}, ${len * .3} ${w}, 0 0 Z`, fill: color, class: 'leaf' }, outer);
  leaf.style.setProperty('--d', delay + 's'); leaf.style.setProperty('--ox', '0%');
  return leaf;
}
function bloomGroup(svg, x, y, delay) { const outer = el('g', { transform: `translate(${x} ${y})` }, svg); const g = el('g', { class: 'bloom' }, outer); g.style.setProperty('--d', delay + 's'); return g; }
function tulip(svg, x, y, delay, fill, fillDark) {
  const g = bloomGroup(svg, x, y, delay);
  el('path', { d: 'M0 4 C -24 -6 -30 -48 -2 -70 C 26 -48 24 -6 0 4 Z', fill: fillDark }, g);
  el('path', { d: 'M0 6 C -26 -2 -34 -40 -16 -64 C -6 -46 -2 -20 0 6 Z', fill }, g);
  el('path', { d: 'M0 6 C 26 -2 34 -40 16 -64 C 6 -46 2 -20 0 6 Z', fill }, g);
  el('path', { d: 'M-12 6 C -4 10 4 10 12 6 C 6 -10 -6 -10 -12 6 Z', fill: fillDark, opacity: .35 }, g);
  return g;
}
function layeredPetals(g, rings, shapeFn) {
  rings.forEach(({ n, r, fill, rot = 0, jitter = 8 }) => {
    for (let i = 0; i < n; i++) { const a = rot + i * 360 / n + (Math.random() - .5) * jitter; el('path', { d: shapeFn(r), fill, transform: `rotate(${a})` }, g); }
  });
}
const peonyPetal = (r) => `M0 0 C ${-r * .62} ${-r * .18}, ${-r * .72} ${-r * .9}, ${-r * .16} ${-r} L 0 ${-r * .92} L ${r * .16} ${-r} C ${r * .72} ${-r * .9}, ${r * .62} ${-r * .18}, 0 0 Z`;
const roundPetal = (r) => `M0 0 C ${-r * .55} ${-r * .25}, ${-r * .55} ${-r * .95}, 0 ${-r} C ${r * .55} ${-r * .95}, ${r * .55} ${-r * .25}, 0 0 Z`;
function peony(svg, x, y, delay, c1, c2, c3, size = 1) {
  const g = bloomGroup(svg, x, y, delay);
  layeredPetals(g, [ { n: 9, r: 40 * size, fill: c1, jitter: 10 }, { n: 8, r: 31 * size, fill: c2, rot: 20 }, { n: 7, r: 23 * size, fill: c3, rot: 8 }, { n: 5, r: 14 * size, fill: c2, rot: 30 } ], peonyPetal);
  el('circle', { r: 4 * size, fill: c1, opacity: .7 }, g); return g;
}
function ranunculus(svg, x, y, delay, c1, c2, size = 1) {
  const g = bloomGroup(svg, x, y, delay);
  layeredPetals(g, [ { n: 10, r: 30 * size, fill: c1, jitter: 4 }, { n: 9, r: 24 * size, fill: c2, rot: 18, jitter: 4 }, { n: 8, r: 18 * size, fill: c1, rot: 5, jitter: 4 }, { n: 7, r: 13 * size, fill: c2, rot: 25, jitter: 4 }, { n: 6, r: 8 * size, fill: c1, rot: 12, jitter: 4 } ], roundPetal);
  el('circle', { r: 3 * size, fill: '#6f8a5c' }, g); return g;
}
function daisy(svg, x, y, delay, petal = '#fffdf9', center = '#f0c75e', size = 1) {
  const g = bloomGroup(svg, x, y, delay);
  for (let i = 0; i < 16; i++) el('ellipse', { cx: 0, cy: -14 * size, rx: 3.6 * size, ry: 14 * size, fill: petal, transform: `rotate(${i * 22.5})`, stroke: 'rgba(0,0,0,.06)', 'stroke-width': .6 }, g);
  el('circle', { r: 8 * size, fill: center }, g); el('circle', { r: 5 * size, fill: '#d9a93a', opacity: .7 }, g); return g;
}
function babysBreath(svg, x, y, delay) {
  const g = bloomGroup(svg, x, y, delay);
  for (let i = 0; i < 12; i++) {
    const a = Math.random() * Math.PI * 2, d = 8 + Math.random() * 30; const px = Math.cos(a) * d, py = Math.sin(a) * d - 10;
    el('line', { x1: 0, y1: 8, x2: px, y2: py, stroke: '#8c9c7e', 'stroke-width': 1 }, g);
    el('circle', { cx: px, cy: py, r: 3.2, fill: '#fffdf9', stroke: '#ece3d3', 'stroke-width': .8 }, g);
  }
  return g;
}
function delphinium(svg, x, y, delay, c1, c2) {
  const g = bloomGroup(svg, x, y, delay);
  el('line', { x1: 0, y1: 0, x2: 0, y2: -80, stroke: '#5f7355', 'stroke-width': 2.5 }, g);
  for (let i = 0; i < 7; i++) {
    const fy = -i * 12, s = 1 - i * .1, side = i % 2 ? 9 : -9;
    for (let p = 0; p < 5; p++) el('ellipse', { cx: side * .4, cy: fy - 6 * s, rx: 3.6 * s, ry: 6.5 * s, fill: i % 2 ? c1 : c2, transform: `rotate(${p * 72} ${side * .4} ${fy})` }, g);
    el('circle', { cx: side * .4, cy: fy, r: 2.2 * s, fill: '#fffaf3' }, g);
  }
  return g;
}
function eucalyptus(svg, x, y, delay) {
  const p = stemTo(svg, x, y, delay, '#7d8f6a', 2.5); const L = p.getTotalLength();
  for (let t = .35; t < .98; t += .09) { const pt = p.getPointAtLength(L * t); const side = Math.round(t * 100) % 2 ? 1 : -1; const c = el('circle', { cx: pt.x + side * 9, cy: pt.y, r: 8.5, fill: t > .8 ? '#a4b394' : '#8c9c7e', class: 'leaf' }, svg); c.style.setProperty('--d', (delay + t * .5) + 's'); c.style.setProperty('--ox', '50%'); }
}
function wrapPaper(svg) {
  const back = el('g', { class: 'wrap-paper' }, svg);
  el('path', { d: 'M 92 388 C 150 428 250 428 308 388 L 216 556 C 208 563 192 563 184 556 Z', fill: 'url(#kraft)' }, back);
  return back;
}
function wrapFront(svg) {
  const f = el('g', { class: 'wrap-paper' }, svg);
  el('path', { d: 'M 108 412 C 160 450 240 450 292 412 L 216 556 C 208 563 192 563 184 556 Z', fill: 'url(#kraft2)' }, f);
  el('path', { d: 'M 108 412 C 160 450 240 450 292 412', fill: 'none', stroke: 'rgba(0,0,0,.12)', 'stroke-width': 1.5 }, f);
  el('path', { d: 'M 146 470 C 180 484 220 484 254 470 L 252 484 C 220 498 180 498 148 484 Z', fill: '#e4a49a' }, f);
  el('path', { d: 'M 200 478 C 184 466 172 484 188 490 C 196 493 200 486 200 478 C 200 466 222 468 214 484 C 210 491 202 488 200 478 Z', fill: '#d98b80' }, f);
  el('path', { d: 'M 197 486 L 190 512 M 203 486 L 211 514', stroke: '#d98b80', 'stroke-width': 3.5, 'stroke-linecap': 'round', fill: 'none' }, f);
}
let flowersGrown = false;
function growFlowers() {
  if (flowersGrown) return; flowersGrown = true;
  const svg = $('#bouquet'); svg.innerHTML = '';
  let s; const defs = el('defs', {}, svg);
  const lg = el('linearGradient', { id: 'kraft', x1: 0, y1: 0, x2: 0, y2: 1 }, defs); el('stop', { offset: 0, 'stop-color': '#b98f5f' }, lg); el('stop', { offset: 1, 'stop-color': '#9c7448' }, lg);
  const lg2 = el('linearGradient', { id: 'kraft2', x1: 0, y1: 0, x2: 1, y2: 1 }, defs); el('stop', { offset: 0, 'stop-color': '#dcbd92' }, lg2); el('stop', { offset: 1, 'stop-color': '#c29d6b' }, lg2);
  grad(defs, 'coral', '#f6b19a', '#e0674f'); grad(defs, 'coralD', '#e88a72', '#c24f3b');
  grad(defs, 'butter', '#fbe7a9', '#eebc4a'); grad(defs, 'butterD', '#f3cf6b', '#d9a12e');
  grad(defs, 'blushW', '#fff6f1', '#efb8ad'); grad(defs, 'blushWD', '#f5d3cb', '#e39d90');
  grad(defs, 'peony1', '#f5c9c1', '#e39a8f'); grad(defs, 'peony2', '#fbe1dc', '#efb5aa'); grad(defs, 'peony3', '#fff1ee', '#f6cfc7');
  grad(defs, 'cream1', '#f7ead6', '#e2c9a5'); grad(defs, 'cream2', '#fdf5e9', '#eddbbf'); grad(defs, 'cream3', '#fffaf3', '#f5e8d3');
  grad(defs, 'ran1', '#ffe19a', '#f0b24a'); grad(defs, 'ran2', '#fff0c5', '#f7cf7a');
  grad(defs, 'blue1', '#c5d7e8', '#7d9cc0'); grad(defs, 'blue2', '#dde8f2', '#9db8d4');
  grad(defs, 'lav1', '#d6c8ea', '#9a82c2'); grad(defs, 'lav2', '#ebe3f5', '#b9a6d8'); grad(defs, 'lavD', '#c3b1e0', '#7f66ad');

  wrapPaper(svg);
  // far back layer (fills out the bouquet)
  eucalyptus(svg, 44, 292, 0); eucalyptus(svg, 358, 300, .05); eucalyptus(svg, 150, 150, .1); eucalyptus(svg, 262, 130, .1);
  s = stemTo(svg, 100, 148, .1); delphinium(svg, 100, 148, .1, 'url(#lav1)', 'url(#lav2)');
  s = stemTo(svg, 322, 130, .15); delphinium(svg, 322, 130, .15, 'url(#lav2)', 'url(#lav1)');
  s = stemTo(svg, 200, 96, .12); delphinium(svg, 200, 96, .12, 'url(#blue1)', 'url(#blue2)');
  s = stemTo(svg, 124, 102, .2); tulip(svg, 124, 102, .2, 'url(#blushW)', 'url(#blushWD)');
  s = stemTo(svg, 298, 100, .22); tulip(svg, 298, 100, .22, 'url(#lav2)', 'url(#lavD)');
  s = stemTo(svg, 232, 122, .28); tulip(svg, 232, 122, .28, 'url(#coral)', 'url(#coralD)');
  s = stemTo(svg, 58, 262, .35); peony(svg, 58, 262, .35, 'url(#peony2)', 'url(#peony3)', 'url(#peony1)', .8);
  s = stemTo(svg, 346, 268, .38); peony(svg, 346, 268, .38, 'url(#cream1)', 'url(#cream2)', 'url(#cream3)', .8);
  s = stemTo(svg, 156, 226, .42); daisy(svg, 156, 226, .42, '#fffdf9', '#f0c75e', .8);
  s = stemTo(svg, 250, 236, .45); daisy(svg, 250, 236, .45, '#fffaf3', '#e9b94c', .8);
  s = stemTo(svg, 96, 300, .48, '#7d8f6a', 2); babysBreath(svg, 96, 300, .48);
  s = stemTo(svg, 300, 350, .5, '#7d8f6a', 2); babysBreath(svg, 300, 350, .5);
  s = stemTo(svg, 150, 292, .52, '#7d8f6a', 2); babysBreath(svg, 150, 292, .52);
  s = stemTo(svg, 262, 200, .3); ranunculus(svg, 262, 200, .3, 'url(#lav2)', 'url(#lav1)', .8);
  // back layer
  eucalyptus(svg, 88, 236, 0); eucalyptus(svg, 318, 222, .1);
  s = stemTo(svg, 140, 132, .15); delphinium(svg, 140, 132, .15, 'url(#blue1)', 'url(#blue2)');
  s = stemTo(svg, 284, 150, .25); delphinium(svg, 284, 150, .25, 'url(#blue2)', 'url(#blue1)');
  s = stemTo(svg, 62, 322, .5, '#7d8f6a', 2); babysBreath(svg, 62, 322, .5);
  s = stemTo(svg, 338, 318, .55, '#7d8f6a', 2); babysBreath(svg, 338, 318, .55);
  s = stemTo(svg, 212, 112, .3, '#7d8f6a', 2); babysBreath(svg, 212, 112, .3);
  // mid layer
  s = stemTo(svg, 118, 330, .6); leafOn(svg, s, .55, 1, .6); daisy(svg, 118, 330, .6, '#fffdf9', '#f0c75e', .95);
  s = stemTo(svg, 306, 292, .65); daisy(svg, 306, 292, .65, '#fffaf3', '#e9b94c', .85);
  s = stemTo(svg, 166, 158, .4); leafOn(svg, s, .5, -1, .4, '#6f8a5c', 44, 13); tulip(svg, 166, 158, .4, 'url(#coral)', 'url(#coralD)');
  s = stemTo(svg, 258, 182, .5); leafOn(svg, s, .45, 1, .5, '#6f8a5c', 40, 12); tulip(svg, 258, 182, .5, 'url(#butter)', 'url(#butterD)');
  s = stemTo(svg, 340, 214, .7); tulip(svg, 340, 214, .7, 'url(#blushW)', 'url(#blushWD)');
  s = stemTo(svg, 74, 214, .75); leafOn(svg, s, .6, 1, .75, '#6f8a5c', 40, 12); tulip(svg, 74, 214, .75, 'url(#butter)', 'url(#butterD)');
  // front layer
  s = stemTo(svg, 112, 232, .8); peony(svg, 112, 232, .8, 'url(#cream1)', 'url(#cream2)', 'url(#cream3)', .9);
  s = stemTo(svg, 200, 246, .9); peony(svg, 200, 246, .9, 'url(#peony1)', 'url(#peony2)', 'url(#peony3)', 1.1);
  s = stemTo(svg, 272, 300, 1.0); ranunculus(svg, 272, 300, 1.0, 'url(#ran1)', 'url(#ran2)', 1);
  s = stemTo(svg, 176, 352, 1.1); peony(svg, 176, 352, 1.1, 'url(#peony2)', 'url(#peony3)', 'url(#peony1)', .75);
  s = stemTo(svg, 246, 372, 1.15); ranunculus(svg, 246, 372, 1.15, 'url(#cream2)', 'url(#ran2)', .8);
  wrapFront(svg);

  $$('#bouquet .bloom').forEach(g => g.addEventListener('click', () => {
    g.classList.remove('wiggle'); void g.getBBox(); g.classList.add('wiggle');
    const r = g.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 12, 4, .1, ['#f0c75e', '#e4a49a', '#fffaf3']);
  }));
  const pw = $('#petals'); pw.innerHTML = '';
  for (let i = 0; i < 12; i++) { const p = document.createElement('span'); p.className = 'petal'; p.style.left = Math.random() * 100 + '%'; p.style.animationDuration = 7 + Math.random() * 6 + 's'; p.style.animationDelay = Math.random() * 8 + 's'; p.style.background = ['#e4a49a', '#f7e3a6', '#f2cfc8', '#fffaf3'][i % 4]; pw.appendChild(p); }
  setTimeout(() => $('#flower-note').classList.add('show'), 2800);
}
$('#btn-flowers-next').addEventListener('click', () => go('album'));

/* ============================================================
   2. ALBUM
   ============================================================ */
let albumRendered = false;
function renderAlbum() {
  if (albumRendered) return; albumRendered = true;
  const wrap = $('#album'); wrap.innerHTML = '';
  CONFIG.album.forEach((ph, i) => {
    const d = document.createElement('div'); d.className = 'polaroid'; d.style.setProperty('--rot', ((i % 3) - 1) * 2.2 + 'deg');
    d.innerHTML = `<div class="polaroid-img"><img src="${ph.src}" alt="" loading="lazy" /></div><p class="caption">${ph.cap}</p>`;
    d.addEventListener('click', () => { $('#lightbox-img').src = ph.src; $('#lightbox-cap').textContent = ph.cap; $('#lightbox').classList.remove('hidden'); });
    wrap.appendChild(d);
  });
  wrap.addEventListener('scroll', () => { $('#album-hint').style.opacity = 0; }, { once: true });
}
$('#lightbox').addEventListener('click', () => $('#lightbox').classList.add('hidden'));
$('#btn-album-next').addEventListener('click', () => go('invite'));

/* ============================================================
   3. INVITE
   ============================================================ */
$('#ld-day').textContent = CONFIG.date.prefix; $('#ld-old').textContent = CONFIG.date.crossedOut; $('#ld-new').textContent = CONFIG.date.actual; $('#ld-year').textContent = ', ' + CONFIG.date.year;
$('#letter-fine').textContent = CONFIG.fineprint; if (!CONFIG.fineprint) $('#letter-fine').classList.add('hidden');
$('#envelope').addEventListener('click', () => {
  const env = $('#envelope'); if (env.classList.contains('open')) return;
  env.classList.add('open'); $('#env-hint').textContent = '';
  setTimeout(() => { const r = env.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 40, 5); $('#invite-buttons').classList.remove('hidden'); }, 2200);
});
$('#btn-invite-next').addEventListener('click', () => go('time'));

/* ============================================================
   4. TIME PICKER
   ============================================================ */
function renderTimes() {
  const grid = $('#time-grid'); grid.innerHTML = '';
  CONFIG.startTimes.forEach(t => { const b = document.createElement('button'); b.className = 'time-pill'; b.innerHTML = `<span class="t">${t.t}</span><span class="l">${t.l}</span>`; if (state.time === t.v) b.classList.add('selected'); b.addEventListener('click', () => pickTime(t, b)); grid.appendChild(b); });
  if (state.time) { const t = CONFIG.startTimes.find(x => x.v === state.time); if (t) setClock(t); }
}
function setClock(t) { const [h, m] = t.v.split(':').map(Number); $('#hand-hour').style.transform = `rotate(${(h % 12) * 30 + m * .5}deg)`; $('#hand-minute').style.transform = `rotate(${m * 6}deg)`; $('#time-label').textContent = `${t.t} — ${t.l}`; $('#btn-time-next').disabled = false; }
function pickTime(t, elm) { $$('.time-pill').forEach(p => p.classList.remove('selected')); elm.classList.add('selected'); state.time = t.v; save(); setClock(t); }
$('#btn-time-next').addEventListener('click', () => go('loading'));

/* ============================================================
   5. FAKE LOADER
   ============================================================ */
function runLoader() {
  const fill = $('#bar-fill'), pct = $('#loader-pct'), txt = $('#loader-text'); $('#loader-photo').style.backgroundImage = `url(${CONFIG.loaderPhoto})`;
  const lines = [[0, 'loading your boyfriend\'s plans…'], [20, 'now that i came to LA, u have to visit me in pittsburgh'], [40, 'i hope your feet don\'t smell like kombucha'], [60, 'when are we going to japan?'], [80, 'thanks for being the best gf in the whole world'], [99, 'hmm.']];
  let p = 0, li = 0; fill.style.width = '0%';
  const iv = setInterval(() => {
    p += 1.3 + Math.random() * 1.4; if (p > 99) p = 99;
    while (li < lines.length && p >= lines[li][0]) { txt.textContent = lines[li][1]; li++; }
    fill.style.width = p + '%'; pct.textContent = Math.floor(p) + '%';
    if (p >= 99) { clearInterval(iv); setTimeout(() => { txt.textContent = 'just kidding. you\'re planning it.'; fill.style.width = '100%'; pct.textContent = '100%'; }, 1600); setTimeout(() => go('chapter'), 3300); }
  }, 120);
}

/* ============================================================
   6. CHAPTERS
   ============================================================ */
let toastTimer;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600); }
function optImg(o) { return o.decoy ? `<div class="opt-img"><span class="q">?</span></div>` : `<div class="opt-img"><img src="img/places/${o.id}.jpg" alt="${o.name}" loading="lazy" /></div>`; }
function renderChapter() {
  const ch = CONFIG.chapters[state.chapter]; if (!ch) { go('ticket'); return; }
  $('#dots').innerHTML = CONFIG.chapters.map((_, i) => `<span class="dot ${i < state.chapter ? 'done' : ''} ${i === state.chapter ? 'now' : ''}"></span>`).join('');
  $('#ch-title').textContent = ch.title; $('#ch-question').textContent = ch.question;
  const wrap = $('#options'); wrap.innerHTML = ''; $('#toast').classList.remove('show');
  ch.options.forEach(o => {
    const d = document.createElement('div'); d.className = 'option'; d.dataset.id = o.id;
    d.innerHTML = `${optImg(o)}<p class="opt-name">${o.name}</p><p class="opt-blurb">${o.blurb}</p>${o.time ? `<span class="opt-time">${o.time}</span>` : ''}`;
    if (state.picks[ch.id] === o.id) d.classList.add(o.locked ? 'locked' : 'selected');
    d.addEventListener('click', () => pickOption(ch, o, d)); wrap.appendChild(d);
  });
  $('#btn-ch-next').disabled = !state.picks[ch.id];
  $('#btn-ch-next').textContent = state.chapter === CONFIG.chapters.length - 1 ? 'see my day' : 'next';
  const s = $('.screen[data-screen="chapter"]'); s.classList.remove('active'); void s.offsetWidth; s.classList.add('active');
}
function pickOption(ch, o, d) {
  if (o.decoy) { d.classList.remove('shake'); void d.offsetWidth; d.classList.add('shake'); toast(o.decoyText || 'nope.'); const locked = ch.options.find(x => x.locked) || ch.options.find(x => x !== o); setTimeout(() => { d.classList.remove('shake'); selectOption(ch, locked); }, 800); return; }
  selectOption(ch, o);
}
function selectOption(ch, o) {
  state.picks[ch.id] = o.id; save();
  $$('.option').forEach(x => { x.classList.remove('selected', 'locked'); if (x.dataset.id === o.id) x.classList.add(o.locked ? 'locked' : 'selected'); });
  const d = $(`.option[data-id="${o.id}"]`); const r = d.getBoundingClientRect(); burst(r.right - 30, r.top + 20, 16, 4, .15); $('#btn-ch-next').disabled = false;
}
$('#btn-shuffle').addEventListener('click', () => {
  const ch = CONFIG.chapters[state.chapter]; const els = $$('.option'); const real = ch.options.filter(o => !o.decoy); const target = real.find(o => o.favorite) || real[(Math.random() * real.length) | 0];
  let n = 0; const iv = setInterval(() => { els.forEach(e => e.classList.remove('highlight')); els[n % els.length].classList.add('highlight'); n++; if (n > 7) { clearInterval(iv); els.forEach(e => e.classList.remove('highlight')); selectOption(ch, target); toast('the dice have spoken.'); } }, 130);
});
$('#btn-ch-next').addEventListener('click', () => { if (!state.picks[CONFIG.chapters[state.chapter].id]) return; state.chapter++; save(); if (state.chapter >= CONFIG.chapters.length) go('ticket'); else renderChapter(); });

/* ============================================================
   7. TICKET
   ============================================================ */
function timeLabel() { const t = CONFIG.startTimes.find(x => x.v === state.time); return t ? t.t : '—'; }
function itinerary() { return CONFIG.chapters.map(ch => { const o = ch.options.find(x => x.id === state.picks[ch.id]) || ch.options.find(x => x.locked) || ch.options[0]; return { chapter: ch.title.split('·').pop().trim(), ...o }; }); }
function renderTicket() {
  $('#t-date').textContent = CONFIG.dateShort; $('#t-time').textContent = timeLabel(); $('#t-city').textContent = CONFIG.city;
  $('#t-stamp').innerHTML = `<img src="${CONFIG.stampPhoto}" alt="" />`;
  $('#t-list').innerHTML = itinerary().map(o => `<li><div class="tl-img"><img src="img/places/${o.id}.jpg" alt="" /></div><div><p class="tl-chapter">${o.chapter}</p><p class="tl-name">${o.name}${o.time ? `<small>${o.time}</small>` : ''}</p></div></li>`).join('');
  if (state.rsvp) afterRsvp();
}
function afterRsvp() { $('#rsvp-block').classList.add('hidden'); $('#after-rsvp').classList.remove('hidden'); $('#closing-line').textContent = CONFIG.closingLine; }
$('#btn-rsvp').addEventListener('click', () => { state.rsvp = true; save(); fireworks(7); afterRsvp(); });
function plainItinerary() { const lines = itinerary().map((o, i) => `${i + 1}. ${o.chapter}: ${o.name}${o.time ? ' @ ' + o.time : ''}`); return `${CONFIG.herName} RSVP'd YES.\n\nYear 3 Anniversary\n${CONFIG.date.prefix} ${CONFIG.date.actual}, ${CONFIG.date.year} · ${CONFIG.city}\nWe leave: ${timeLabel()}\n\n${lines.join('\n')}\n`; }
$('#btn-send').addEventListener('click', () => { const her = $('#her-email').value.trim(); location.href = `mailto:${CONFIG.yourEmail}${her ? '?cc=' + encodeURIComponent(her) + '&' : '?'}subject=${encodeURIComponent(CONFIG.herName + ' said yes — year 3 anniversary date')}&body=${encodeURIComponent(plainItinerary())}`; });
$('#btn-save').addEventListener('click', async () => {
  const b = $('#btn-save'); b.textContent = 'saving…';
  try { if (!window.html2canvas) throw new Error('no html2canvas'); const canvas = await html2canvas($('#ticket'), { backgroundColor: '#f4ede2', scale: 3, useCORS: true }); const a = document.createElement('a'); a.download = 'year-3-anniversary.png'; a.href = canvas.toDataURL('image/png'); a.click(); b.textContent = 'saved'; }
  catch (e) { b.textContent = 'screenshot it instead'; }
  setTimeout(() => b.textContent = 'save ticket', 2500);
});

/* ============================================================
   SECRET HEART + RESET + INIT
   ============================================================ */
let heartTaps = 0;
$('#secret-heart').addEventListener('click', (e) => {
  heartTaps++; burst(e.clientX, e.clientY, 10, 3, .1, ['#e4a49a', '#f0c75e']);
  if (heartTaps >= 1) { heartTaps = 0; $('#secret-text').textContent = CONFIG.secretText; $('#polaroid-img').innerHTML = `<img src="${CONFIG.secretPhoto}" alt="" />`; $('#secret-cap').textContent = CONFIG.secretCaption; $('#secret-modal').classList.remove('hidden'); }
});
$('#btn-secret-close').addEventListener('click', () => $('#secret-modal').classList.add('hidden'));
let footTaps = 0; $('#foot').addEventListener('click', () => { if (++footTaps >= 5) { localStorage.removeItem(STORE_KEY); location.href = location.pathname; } });
$$('.her-name').forEach(e => e.textContent = CONFIG.herName); $$('.her-emoji').forEach(e => e.textContent = CONFIG.herEmoji); $$('.your-name').forEach(e => e.textContent = CONFIG.yourName);
document.title = `For ${CONFIG.herName} ${CONFIG.herEmoji}`;
(function init() {
  const s = state.screen; document.body.dataset.screen = s || 'box';
  if (s && s !== 'box' && s !== 'loading') { $('.screen.active').classList.remove('active'); document.querySelector(`.screen[data-screen="${s}"]`).classList.add('active'); onEnter(s); }
  else if (s === 'loading') { $('.screen.active').classList.remove('active'); document.querySelector('.screen[data-screen="time"]').classList.add('active'); onEnter('time'); }
})();
