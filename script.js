// ===============================
// DATA COVID (STATIS, DI JS)
// ===============================
const covidData = {
  positif: 6812450,
  sembuh: 6640120,
  meninggal: 161850
};

// ===============================
// ANIMASI ANGKA
// ===============================
function animate(id, value) {
  let current = 0;
  const el = document.getElementById(id);
  const step = Math.ceil(value / 100);

  const timer = setInterval(() => {
    current += step;
    if (current >= value) {
      el.textContent = value.toLocaleString("id-ID");
      clearInterval(timer);
    } else {
      el.textContent = current.toLocaleString("id-ID");
    }
  }, 20);
}

// ===============================
// NAVIGASI SPA
// ===============================
function initNav() {
  const navs = document.querySelectorAll(".nav");
  const pages = document.querySelectorAll(".page");

  navs.forEach(nav => {
    nav.addEventListener("click", e => {
      e.preventDefault();

      navs.forEach(n => n.classList.remove("active"));
      nav.classList.add("active");

      const page = nav.dataset.page;
      pages.forEach(p => p.classList.remove("active"));
      document.getElementById(page).classList.add("active");

      if (page === "beranda") {
        animate("positif", covidData.positif);
        animate("sembuh", covidData.sembuh);
        animate("meninggal", covidData.meninggal);
      }
    });
  });
}

// ===============================
// ON LOAD (PASTI JALAN)
// ===============================
window.onload = () => {
  animate("positif", covidData.positif);
  animate("sembuh", covidData.sembuh);
  animate("meninggal", covidData.meninggal);
  initNav();
};
