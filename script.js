// Year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Simple mobile menu (show/hide kabana links by cloning them below header on small screens)
const toggle = document.querySelector('.menu-toggle');
const kabana = document.querySelector('.kabana');
let mobileNav;
toggle?.addEventListener('click', () => {
  if (!mobileNav) {
    mobileNav = kabana.cloneNode(true);
    mobileNav.classList.add('kabana-mobile');
    Object.assign(mobileNav.style, {
      display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px',
      background: '#0b0f1a', borderTop: '1px solid #1d2741'
    });
    document.querySelector('.site-header .container').appendChild(mobileNav);
  } else {
    mobileNav.style.display = mobileNav.style.display === 'none' ? 'flex' : 'none';
  }
});

// --- Our Games (from the brochure) ---
const games = [
  { name: "Renovation", blurb: "Team-based VR shooter across multiple maps." },
  { name: "Bomberman", blurb: "Cute chaos—throw, dodge, and outlast in PVP." },
  { name: "Puyo Shooter", blurb: "Bow-and-arrow PVP with wild arrow types." },
  { name: "Puyo Shooter Adventure", blurb: "Co-op PVE journey with monsters and a boss." },
  { name: "Cyber Dash", blurb: "Team arena with energy skills, shields, and strikes." },
  { name: "Zombies", blurb: "Free-roam survival against waves of the undead." },
  { name: "Future War", blurb: "Capture resource points while battling enemies." },
  { name: "Field Knights", blurb: "Light up cubes, control the grid, score big." },
  { name: "Table Boomerang", blurb: "Party brawler—throw, dash, and outplay." },
  { name: "Island Defense", blurb: "Defend the island with crossbows & turrets." },
  { name: "Leader of Darkness", blurb: "Biochemical shooter with powerful weapons." },
  { name: "Nimble Magic Cube", blurb: "Co-op cube elimination—think fast, move faster." }
];

const grid = document.getElementById('gamesGrid');
grid.innerHTML = games.map(g => `
  <article class="card">
    <h3>${g.name}</h3>
    <p>${g.blurb}</p>
  </article>
`).join('');
