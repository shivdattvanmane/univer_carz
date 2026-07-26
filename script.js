/* =========================================================
   DATA — Car Lineup
   To use your own photos: put an image in the /images folder
   and set "img" below to its filename (e.g. "images/my-car.jpg").
   Recommended size: at least 800x500px, landscape orientation.
   If an image is missing or fails to load, a styled fallback
   card with the model name is shown automatically.
========================================================= */
const cars = [
  {
    id:"solis", name:"Univer Eartho", tagline:"Compact electric sedan", price:"₹42,50,000",
    fuel:"electric", fuelLabel:"Electric", trans:"Automatic", color:"#e6c34a",
    img:"images/eartho.png",
    range:"421 km", power:"201 bhp", accel:"6.9s", top:"185",
    engine:"Single-motor RWD, 58 kWh battery", torque:"310 Nm", seats:"5", warranty:"8 yrs / 1.6L km (battery)",
    features:["10.3\" digital cockpit","Level-2 ADAS suite","Wireless charging pad","Regenerative braking, 3 levels","Ventilated front seats","Over-the-air updates"]
  },
  {
    id:"vantre", name:"Univer Mars", tagline:"All-terrain crossover", price:"₹35,20,000",
    fuel:"diesel", fuelLabel:"Diesel", trans:"Manual", color:"#c9a227",
    img:"images/mari.png",
    range:"18 km/l", power:"148 bhp", accel:"9.8s", top:"178",
    engine:"2.0L turbo-diesel, inline-4", torque:"340 Nm", seats:"5", warranty:"5 yrs / 1L km",
    features:["All-wheel drive w/ terrain modes","Panoramic sunroof","360° camera","Hill-descent control","Ambient lighting, 8 colors","Wireless Android Auto / CarPlay"]
  },
  {
    id:"terra", name:"Univer Urano", tagline:"Hybrid compact SUV", price:"₹28,75,000",
    fuel:"hybrid", fuelLabel:"Hybrid", trans:"Automatic", color:"#4fd1c5",
    img:"images/urano.png",
    range:"26 km/l", power:"126 bhp", accel:"10.4s", top:"165",
    engine:"1.5L petrol-electric hybrid", torque:"215 Nm", seats:"5", warranty:"6 yrs / 1.2L km",
    features:["EV-only city mode","Auto-hold hill assist","9-speaker premium audio","Adaptive cruise control","Rear collision alert","Cooled glovebox"]
  },
  {
    id:"aegis", name:"Univer Nepti", tagline:"Full-size luxury SUV", price:"₹68,90,000",
    fuel:"petrol", fuelLabel:"Petrol", trans:"Automatic", color:"#c9a227",
    img:"images/nepti.png",
    range:"12 km/l", power:"296 bhp", accel:"6.1s", top:"220",
    engine:"3.0L turbo-petrol, inline-6", torque:"450 Nm", seats:"7", warranty:"5 yrs / unlimited km",
    features:["Air suspension, 5 modes","Massage seats, front row","Night-vision assist","Rear entertainment screens","22-speaker sound system","Self-parking assist"]
  },
  {
    id:"kestra", name:"Univer Venus", tagline:"Sports performance coupe", price:"₹95,00,000",
    fuel:"petrol", fuelLabel:"Petrol", trans:"Automatic", color:"#e4573d",
    img:"images/venus.png",
    range:"9 km/l", power:"512 bhp", accel:"3.4s", top:"305",
    engine:"4.0L twin-turbo V8", torque:"680 Nm", seats:"2+2", warranty:"4 yrs / 80k km",
    features:["Launch control","Carbon-ceramic brakes","Adjustable exhaust note","Track telemetry data-logger","Racing bucket seats","Aero-active rear wing"]
  },
  {
    id:"zenith", name:"Univer Saturnaus", tagline:"Flagship electric limousine", price:"₹1,20,00,000",
    fuel:"electric", fuelLabel:"Electric", trans:"Automatic", color:"#e6c34a",
    img:"images/saturnus.png",
    range:"612 km", power:"402 bhp", accel:"4.2s", top:"250",
    engine:"Dual-motor AWD, 108 kWh battery", torque:"680 Nm", seats:"4", warranty:"10 yrs / 2L km (battery)",
    features:["Executive rear recline suite","Rear-wheel steering","Active noise cancellation","Chauffeur / owner drive modes","31-speaker studio audio","800V ultra-fast charging"]
  }
];

/* Fallback shown in place of an <img> if the file is missing / fails to load */
function fallbackMarkup(c){
  return `<div class="img-fallback" style="color:${c.color}">${c.name}<br><span style="font-size:12px; color:var(--muted-2); font-weight:400;">(add images/${c.id}.jpg)</span></div>`;
}

/* =========================================================
   RENDER — Featured Cars
========================================================= */
const carGrid = document.getElementById('carGrid');
carGrid.innerHTML = cars.map(c => `
  <div class="car-card reveal">
    <div class="car-media">
      <span class="fuel-tag ${c.fuel}">${c.fuelLabel}</span>
      <img src="${c.img}" alt="${c.name}" loading="lazy"
           onerror="this.replaceWith(Object.assign(document.createElement('div'), {innerHTML: fallbackMarkup(cars.find(x=>x.id==='${c.id}'))}).firstChild)">
    </div>
    <div class="car-body">
      <div class="model">${c.name}</div>
      <div class="tagline">${c.tagline}</div>
      <div class="price">${c.price} <span>on-road, ex-showroom</span></div>
      <div class="spec-row">
        <div class="spec">Fuel<b>${c.fuelLabel}</b></div>
        <div class="spec">Transmission<b>${c.trans}</b></div>
        <div class="spec">${c.fuel==='electric' ? 'Range' : 'Mileage'}<b>${c.range}</b></div>
      </div>
      <button class="btn btn-ghost" onclick="openCar('${c.id}')">View Details</button>
    </div>
  </div>
`).join('');

/* =========================================================
   MODAL LOGIC
========================================================= */
const overlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');

function openCar(id){
  const c = cars.find(x => x.id === id);
  if(!c) return;
  modalBox.innerHTML = `
    <div class="modal-head">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      <div class="modal-head-img">
        <img src="${c.img}" alt="${c.name}"
             onerror="this.replaceWith(Object.assign(document.createElement('div'), {innerHTML: fallbackMarkup(cars.find(x=>x.id==='${c.id}')), style:'height:100%'}).firstChild)">
      </div>
      <div class="modal-head-info">
        <div class="eyebrow">${c.fuelLabel} · ${c.trans}</div>
        <div class="model">${c.name}</div>
        <div class="tagline">${c.tagline}</div>
        <div class="price">${c.price} <span style="color:var(--muted-2); font-size:12px; font-weight:400;">on-road, ex-showroom</span></div>
      </div>
    </div>
    <div class="modal-body">
      <div class="dash-cluster">
        <div class="dash-cell"><div class="val">${c.power}</div><div class="lbl">Power</div></div>
        <div class="dash-cell"><div class="val">${c.accel}</div><div class="lbl">0–100 km/h</div></div>
        <div class="dash-cell"><div class="val">${c.top}<span style="font-size:12px;">km/h</span></div><div class="lbl">Top Speed</div></div>
        <div class="dash-cell"><div class="val">${c.seats}</div><div class="lbl">Seating</div></div>
      </div>

      <h4>Powertrain</h4>
      <div class="feature-list" style="margin-bottom:28px;">
        <li>${c.engine}</li>
        <li>Peak torque: ${c.torque}</li>
        <li>${c.fuel==='electric' ? 'Range: '+c.range : 'Mileage: '+c.range}</li>
        <li>Warranty: ${c.warranty}</li>
      </div>

      <h4>Key Features</h4>
      <ul class="feature-list">
        ${c.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <div class="modal-actions">
        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Book Test Drive</a>
        <button class="btn btn-ghost" onclick="closeModal()">Continue Browsing</button>
      </div>
    </div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* =========================================================
   RENDER — Reviews
========================================================= */
const reviews = [
  {
    name: "Aarav Sharma",
    role: "Eartho Owner",
    rating: 5,
    initials: "AS",
    color: "#3CB371",
    text: "The Eartho feels connected to nature with its stunning design and premium comfort. Every drive feels refreshing and unique."
  },
  {
    name: "Priya Mehta",
    role: "Mari Owner",
    rating: 5,
    initials: "PM",
    color: "#E4573D",
    text: "Mari delivers incredible performance and a bold personality. Its aggressive styling turns heads wherever I go."
  },
  {
    name: "Rohan Kulkarni",
    role: "Nepti Owner",
    rating: 5,
    initials: "RK",
    color: "#3B82F6",
    text: "The futuristic blue finish and smooth handling of Nepti make it my favorite. It feels like driving into the future."
  },
  {
    name: "Sneha Patil",
    role: "Saturanus Owner",
    rating: 4,
    initials: "SP",
    color: "#D4AF37",
    text: "Saturanus combines luxury and elegance perfectly. The spacious cabin and premium features exceeded my expectations."
  },
  {
    name: "Kabir Malhotra",
    role: "Venus Owner",
    rating: 5,
    initials: "KM",
    color: "#FF8C42",
    text: "Venus is absolutely breathtaking. The fiery design and thrilling acceleration make every journey unforgettable."
  },
  {
    name: "Meera Desai",
    role: "Urano Owner",
    rating: 5,
    initials: "MD",
    color: "#40E0D0",
    text: "Urano offers a futuristic experience with exceptional comfort and advanced technology. It's unlike any car I've owned."
  }
];
document.getElementById('reviewTrack').innerHTML = reviews.map(r => `
  <div class="review-card reveal">
    <div class="review-top">
      <div class="avatar" style="background:${r.color}">${r.initials}</div>
      <div>
        <div class="review-name">${r.name}</div>
        <div class="review-role">${r.role}</div>
      </div>
    </div>
    <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
    <p>"${r.text}"</p>
  </div>
`).join('');

/* =========================================================
   STICKY NAVBAR + SCROLL GAUGE
========================================================= */
const header = document.getElementById('site-header');
const gauge = document.getElementById('scroll-gauge');
const backTop = document.getElementById('back-to-top');
const navCta = document.getElementById('navCta');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  navCta.style.display = y > 40 ? 'inline-flex' : 'none';
  backTop.classList.toggle('show', y > 500);

  const docH = document.documentElement.scrollHeight - window.innerHeight;
  gauge.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
}, {passive:true});

backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* =========================================================
   MOBILE NAV
========================================================= */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* =========================================================
   DARK / LIGHT MODE
========================================================= */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if(next === 'light'){ html.setAttribute('data-theme','light'); } else { html.removeAttribute('data-theme'); }
});

/* =========================================================
   SCROLL REVEAL (IntersectionObserver)
========================================================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
setTimeout(() => { document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el)); }, 50);

/* =========================================================
   ANIMATED COUNTERS (odometer style)
========================================================= */
function animateCounter(el){
  const target = parseFloat(el.dataset.target);
  const decimal = el.dataset.decimal ? parseInt(el.dataset.decimal) : 0;
  const duration = 1600;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = decimal ? (target/10*eased).toFixed(1) : Math.floor(target * eased);
    el.textContent = val;
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ animateCounter(e.target); counterObserver.unobserve(e.target); }
  });
}, {threshold:0.4});
document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const nameInvalid = name.length < 2;
  const phoneInvalid = !/^\d{10}$/.test(phone);
  const emailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const messageInvalid = message.length < 5;

  toggleError('fld-name', nameInvalid);
  toggleError('fld-phone', phoneInvalid);
  toggleError('fld-email', emailInvalid);
  toggleError('fld-message', messageInvalid);

  const valid = !(nameInvalid || phoneInvalid || emailInvalid || messageInvalid);

  if(valid){
    formMsg.classList.add('show');
    form.reset();
    setTimeout(() => formMsg.classList.remove('show'), 5000);
  }
});

function toggleError(id, isInvalid){
  document.getElementById(id).classList.toggle('invalid', isInvalid);
}
