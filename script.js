/*
  EDIT DATA MOD DI SINI:
  - Ganti nama, versi, kategori, deskripsi, ukuran.
  - Isi downloadUrl dengan URL file yang benar-benar tersedia.
  - Isi image dengan path gambar sendiri, misalnya "assets/toneri-banner.jpg".
  Jangan mengisi link palsu atau belum diuji.
*/

const mods = [
  {
    id: "remastered",
    name: "Naruto Senki Remastered",
    version: "V1.23",
    category: "remastered",
    categoryLabel: "REMASTERED",
    badge: "TENSEIGAN VISUAL",
    description: "Informasi APK Naruto Senki Remastered V1.23. Detail ukuran file dan tautan unduhan akan diperbarui saat tersedia.",
    size: "Ukuran belum ditambahkan",
    symbol: "RX",
    image: "assets/toneri-banner.jpg",
    imagePos: "center center",
    downloadUrl: ""
  },
  {
    id: "tlf",
    name: "Naruto Senki TLF",
    version: "V1.23",
    category: "classic",
    categoryLabel: "ALTERNATIVE",
    badge: "ŌTSUTSUKI ARCHIVE",
    description: "Edisi alternatif dengan tampilan antarmuka bertema bulan & Tenseigan. Periksa kompatibilitas dan catatan rilis sebelum memasang.",
    size: "Ukuran belum ditambahkan",
    symbol: "転",
    image: "assets/toneri-portrait.jpg",
    imagePos: "center 22%",
    downloadUrl: ""
  }
];

const list = document.querySelector("#mod-list");
const searchInput = document.querySelector("#search-input");
const filterList = document.querySelector("#filter-list");
const emptyState = document.querySelector("#empty-state");
const collectionCount = document.querySelector("#collection-count");
let activeFilter = "all";

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderMods() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = mods.filter(mod => {
    const matchesQuery = [mod.name, mod.version, mod.description, mod.categoryLabel, mod.badge || ""]
      .join(" ").toLowerCase().includes(query);
    const matchesFilter = activeFilter === "all" || mod.category === activeFilter ||
      (activeFilter === "other" && !["remastered", "classic"].includes(mod.category));
    return matchesQuery && matchesFilter;
  });

  collectionCount.textContent = `${String(filtered.length).padStart(2, "0")} RELEASES`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);

  list.innerHTML = filtered.map(mod => {
    const pos = mod.imagePos || "center";
    const coverStyle = mod.image
      ? `background-image: linear-gradient(0deg, rgba(4,10,18,.88), rgba(4,10,18,.18)), url("${safeText(mod.image)}"); background-position:${safeText(pos)}; background-size:cover;`
      : "";
    const download = mod.downloadUrl
      ? `<a class="download-link" href="${safeText(mod.downloadUrl)}" target="_blank" rel="noopener noreferrer">DOWNLOAD ↗</a>`
      : `<span class="download-link disabled" aria-label="Tautan download belum tersedia">COMING SOON</span>`;

    return `
      <article class="mod-card">
        <div class="mod-cover" style="${coverStyle}">
          ${mod.image ? "" : `<span class="cover-symbol" aria-hidden="true">${safeText(mod.symbol)}</span>`}
          <span class="cover-label">${safeText(mod.badge || "FAN-MADE RELEASE")}</span>
        </div>
        <div class="mod-body">
          <div class="mod-meta">
            <span class="pill">${safeText(mod.categoryLabel)}</span>
            <span class="pill neutral">${safeText(mod.version)}</span>
            <span class="pill gold">TONERI THEME</span>
          </div>
          <h3>${safeText(mod.name)}</h3>
          <p>${safeText(mod.description)}</p>
          <div class="mod-bottom">
            <span class="mod-size">${safeText(mod.size)}</span>
            ${download}
          </div>
        </div>
      </article>`;
  }).join("");
}

searchInput.addEventListener("input", renderMods);

filterList.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filterList.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip === button;
    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderMods();
});

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderMods();
