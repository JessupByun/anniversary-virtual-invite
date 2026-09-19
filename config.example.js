/* Copy this file to config.js and fill it in. config.js is git-ignored. */
const CONFIG = {
  herName: 'Her Name',
  greeting: 'Hello',                        // front page, above the title
  herEmoji: '❤️',
  yourName: 'Your Name',
  yourEmail: 'you@example.com',             // "send to" button addresses the email here
  appTitle: 'Invite',                       // home-screen name + browser tab
  city: 'Los Angeles',
  startFrom: 'home',
  date: { prefix: 'Friday, October', crossedOut: '20', actual: '16', year: '2026' },
  dateShort: 'Oct 16, 2026',
  fineprint: '',
  flowerNote: 'peonies, tulips,<br>ranunculus & daisies<br>for you.',
  closingLine: 'see you there.',
  secretText: 'you found the secret heart.',
  secretPhoto: 'img/album/secret.jpg',
  secretCaption: '',
  loaderPhoto: 'img/album/loader.jpg',
  stampPhoto: 'img/album/stamp.jpg',
  footer: 'made by your boyfriend',

  // Album: web-sized photos in img/album/. Order matters. Keep related shots adjacent.
  album: [
    { src: 'img/album/p01.jpg', cap: 'first photo' },
    { src: 'img/album/p02.jpg', cap: 'second photo' },
  ],

  // Departure-time options: value, label, silly note
  startTimes: [
    { v: '09:00', t: '9:00 am',  l: 'early bird' },
    { v: '10:00', t: '10:00 am', l: 'reasonable' },
    { v: '11:00', t: '11:00 am', l: 'sleep in' },
  ],

  // Chapters. Each option shows img/places/<id>.jpg.
  //   locked: true   → the real stop; "pick for me" lands here (with favorite: true)
  //   decoy: true    → tapping it shakes, shows decoyText, then confirms the locked option
  //   noPhoto: true  → show a "?" instead of a photo
  //   tease          → optional italic line under the question
  chapters: [
    { id: 'coffee', title: 'chapter 1 · morning coffee', question: 'first, caffeine.',
      options: [
        { id: 'cafe-a', name: 'Café A', blurb: 'the usual', locked: true, favorite: true },
        { id: 'cafe-b', name: 'Café B', blurb: 'the other usual', decoy: true, decoyText: 'close. but it\'s Café A.' },
      ] },
    { id: 'dinner', title: 'chapter 2 · dinner', question: 'and for dinner…', tease: 'we both know how this one ends.',
      options: [
        { id: 'restaurant', name: 'The Restaurant', blurb: 'reservation at 6:30', time: '6:30 pm', locked: true, favorite: true },
        { id: 'other', name: 'Somewhere else?', blurb: 'surely there are other options…', decoy: true, noPhoto: true, decoyText: 'nope. reservation\'s already made.' },
      ] },
    { id: 'dessert', title: 'chapter 3 · dessert', question: 'this one is actually your call.', tease: 'you can have whatever dessert you\'d like',
      options: [
        { id: 'icecream', name: 'Ice cream', favorite: true },
        { id: 'cake', name: 'Cake' },
        { id: 'drink', name: 'Drink' },
      ] },
  ],
};
