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

const translations = {
  id: {
    pageTitle: "Naruto Senki Remastered - Rieyu Xhen",
    metaDescription: "Jelajahi proyek Naruto Senki Remastered oleh Rieyu Xhen, termasuk mod, peningkatan gameplay, dan tools untuk pengembangan mod Naruto Senki.",
    youtubeLabel: "Kunjungi channel YouTube Rieyu Xhen",
    tagline: "Melampaui yang asli",
    brandDescription: "Membangun kembali warisan Naruto Senki.",
    brandRole: "Developer & Kreator Naruto Senki Remastered.",
    languageLabel: "Bahasa",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    navHome: "Beranda",
    navDownload: "Menu",
    navTools: "Tools",
    navAbout: "Tentang",
    heroBanner: "Banner Toneri Otsutsuki Tenseigan Chakra Mode",
    heroSubtitle: "Bangkitkan kembali semangat shinobi. Naruto Senki Remastered hadir dengan sentuhan baru, gameplay yang disempurnakan, dan modifikasi yang terus berkembang—melampaui batas versi aslinya.",
    downloadMods: "DOWNLOAD",
    discordCta: "GABUNG DISCORD",
    aboutProject: "TENTANG PROYEK",
    toneriPortrait: "Potret Toneri Otsutsuki",
    tenseiganArchive: "ARSIP TENSEIGAN",
    collection: "KOLEKSI",
    explore: "Jelajahi",
    mods: "Mod.",
    modsIntro: "Cari versi yang kamu butuhkan dan periksa detailnya sebelum mengunduh.",
    releases: "RILIS",
    searchPlaceholder: "Cari mod...",
    filterLabel: "Filter kategori dan toolkit",
    filterAll: "Semua",
    filterRemastered: "Remastered",
    filterClassic: "Klasik",
    filterTools: "Tools",
    emptyState: "Mod tidak ditemukan. Coba kata kunci lain.",
    downloadNote: "Pastikan file berasal dari sumber tepercaya. Periksa versi, ukuran, dan petunjuk instalasi sebelum memasang APK.",
    creatorToolkit: "PERANGKAT KREATOR",
    toolsFor: "Tools untuk",
    modding: "Modding Naruto Senki.",
    toolsIntro: "Tools khusus untuk mendukung pembuatan dan pengembangan mod Naruto Senki.",
    toolVersion: "VERSI 0.1.0",
    toolAvailable: "TERSEDIA UNTUK DIUNDUH",
    toolDescription: "Tool pengembangan buatan Rieyu Xhen yang terinspirasi dari Texture Packer.",
    downloadTool: "UNDUH RX TOOLKIT",
    aboutEyebrow: "TENTANG PROYEK",
    aboutHeading: "Lebih dari sekadar",
    game: "Game",
    aboutDescription: "Proyek pengembangan independen yang berfokus mengeksplorasi berbagai kemungkinan Naruto Senki.<br><br>Dari rilis remastered dan peningkatan gameplay hingga tools modding dan dokumentasi teknis, platform ini mendokumentasikan perjalanan pengembangan Naruto Senki melampaui batas aslinya.",
    brandFooter: "Proyek Naruto Senki Remastered",
    footerDisclaimer: "Proyek buatan penggemar. Naruto dan aset terkait adalah milik pemegang hak masing-masing.",
    backToTop: "KEMBALI KE ATAS ↑",
    download: "UNDUH ↗",
    comingSoon: "SEGERA HADIR",
    downloadUnavailable: "Tautan unduhan belum tersedia",
    sizeMissing: "Ukuran belum ditambahkan",
    remasteredBadge: "VISUAL TENSEIGAN",
    remasteredDescription: "Informasi APK Naruto Senki Remastered V1.23. Detail ukuran file dan tautan unduhan akan diperbarui saat tersedia.",
    alternateBadge: "ARSIP ŌTSUTSUKI",
    alternateDescription: "Edisi alternatif dengan tampilan antarmuka bertema bulan & Tenseigan. Periksa kompatibilitas dan catatan rilis sebelum memasang."
  },
  en: {
    pageTitle: "Naruto Senki Remastered - Rieyu Xhen",
    metaDescription: "Explore Rieyu Xhen's Naruto Senki Remastered project, including mods, gameplay improvements, and tools for Naruto Senki mod development.",
    youtubeLabel: "Visit Rieyu Xhen's YouTube channel",
    tagline: "Beyond the original",
    brandDescription: "Rebuilding the legacy of Naruto Senki.",
    brandRole: "Developer & Creator of Naruto Senki Remastered.",
    languageLabel: "Language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navHome: "Home",
    navDownload: "Menu",
    navTools: "Tools",
    navAbout: "About",
    heroBanner: "Toneri Otsutsuki Tenseigan Chakra Mode banner",
    heroSubtitle: "Reignite the shinobi spirit. Naruto Senki Remastered brings a fresh touch, refined gameplay, and evolving modifications—pushing beyond the limits of the original.",
    downloadMods: "DOWNLOAD",
    discordCta: "JOIN DISCORD",
    aboutProject: "ABOUT PROJECT",
    toneriPortrait: "Toneri Otsutsuki portrait",
    tenseiganArchive: "TENSEIGAN ARCHIVE",
    collection: "THE COLLECTION",
    explore: "Explore",
    mods: "Mods.",
    modsIntro: "Find the version you need and check its details before downloading.",
    releases: "RELEASES",
    searchPlaceholder: "Search mods...",
    filterLabel: "Category filters and toolkit link",
    filterAll: "All",
    filterRemastered: "Remastered",
    filterClassic: "Classic",
    filterTools: "Tools",
    emptyState: "No mods found. Try another search term.",
    downloadNote: "Make sure files come from a trusted source. Check the version, file size, and installation instructions before installing an APK.",
    creatorToolkit: "CREATOR TOOLKIT",
    toolsFor: "Tools for",
    modding: "Naruto Senki Modding.",
    toolsIntro: "Custom-built tools to support the creation and development of Naruto Senki mods.",
    toolVersion: "VERSION 0.1.0",
    toolAvailable: "AVAILABLE FOR DOWNLOAD",
    toolDescription: "A development tool by Rieyu Xhen, inspired by Texture Packer.",
    downloadTool: "DOWNLOAD RX TOOLKIT",
    aboutEyebrow: "ABOUT THE PROJECT",
    aboutHeading: "More than just a",
    game: "Game",
    aboutDescription: "An independent development project focused on exploring the possibilities of Naruto Senki.<br><br>From remastered releases and gameplay improvements to modding tools and technical documentation, this platform documents the ongoing journey of developing Naruto Senki beyond its original limitations.",
    brandFooter: "Naruto Senki Remastered Project",
    footerDisclaimer: "Fan-made project. Naruto and related assets belong to their respective rights holders.",
    backToTop: "BACK TO TOP ↑",
    download: "DOWNLOAD ↗",
    comingSoon: "COMING SOON",
    downloadUnavailable: "Download link is not available yet",
    sizeMissing: "Size not specified",
    remasteredBadge: "TENSEIGAN VISUAL",
    remasteredDescription: "Naruto Senki Remastered V1.23 APK information. File size and download link details will be updated when available.",
    alternateBadge: "ŌTSUTSUKI ARCHIVE",
    alternateDescription: "An alternative edition with a moon and Tenseigan-themed interface. Check compatibility and release notes before installing."
  },
  "zh-CN": {
    pageTitle: "火影战记重制版 - Rieyu Xhen",
    metaDescription: "了解 Rieyu Xhen 的火影战记重制项目，包括游戏模组、玩法改进以及火影战记模组开发工具。",
    youtubeLabel: "访问 Rieyu Xhen 的 YouTube 频道",
    tagline: "超越原作",
    brandDescription: "重塑火影战记的经典传承。",
    brandRole: "火影战记重制版开发者与创作者。",
    languageLabel: "语言",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    navHome: "首页",
    navDownload: "下载",
    navTools: "工具",
    navAbout: "关于",
    heroBanner: "大筒木舍人转生眼查克拉模式横幅",
    heroSubtitle: "重燃忍者之魂。火影战记重制版带来全新体验、优化玩法与持续更新的改版内容，突破原作的限制。",
    downloadMods: "下载",
    discordCta: "加入 Discord",
    aboutProject: "关于项目",
    toneriPortrait: "大筒木舍人肖像",
    tenseiganArchive: "转生眼档案",
    collection: "模组合集",
    explore: "探索",
    mods: "模组",
    modsIntro: "查找所需版本，并在下载前查看详细信息。",
    releases: "个版本",
    searchPlaceholder: "搜索模组...",
    filterLabel: "分类筛选和工具箱链接",
    filterAll: "全部",
    filterRemastered: "重制版",
    filterClassic: "经典版",
    filterTools: "工具",
    emptyState: "未找到模组，请尝试其他关键词。",
    downloadNote: "请确保文件来自可信来源。安装 APK 前，请检查版本、文件大小和安装说明。",
    creatorToolkit: "创作者工具箱",
    toolsFor: "火影战记",
    modding: "模组制作工具",
    toolsIntro: "为火影战记模组创作与开发提供的定制工具。",
    toolVersion: "版本 0.1.0",
    toolAvailable: "现已提供下载",
    toolDescription: "由 Rieyu Xhen 开发的工具，灵感来自 Texture Packer。",
    downloadTool: "下载 RX Toolkit",
    aboutEyebrow: "关于项目",
    aboutHeading: "不只是",
    game: "游戏",
    aboutDescription: "这是一个专注探索火影战记更多可能性的独立开发项目。<br><br>从重制版发布、玩法改进，到模组工具与技术文档，本平台记录着不断突破原有限制的火影战记开发历程。",
    brandFooter: "火影战记重制版项目",
    footerDisclaimer: "粉丝制作项目。火影忍者及相关素材归各自权利持有人所有。",
    backToTop: "返回顶部 ↑",
    download: "下载 ↗",
    comingSoon: "即将推出",
    downloadUnavailable: "下载链接暂不可用",
    sizeMissing: "尚未添加文件大小",
    remasteredBadge: "转生眼视觉效果",
    remasteredDescription: "火影战记重制版 V1.23 APK 信息。文件大小和下载链接将在可用时更新。",
    alternateBadge: "大筒木档案",
    alternateDescription: "采用月亮与转生眼主题界面的特别版本。安装前请检查兼容性和更新说明。"
  }
};

const list = document.querySelector("#mod-list");
const searchInput = document.querySelector("#search-input");
const filterList = document.querySelector("#filter-list");
const emptyState = document.querySelector("#empty-state");
const collectionCount = document.querySelector("#collection-count");
const languageSelect = document.querySelector("#language-select");
let currentLanguage = "en";
let activeFilter = "all";

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderMods() {
  const text = translations[currentLanguage];
  const query = searchInput.value.trim().toLowerCase();
  const filtered = mods.filter(mod => {
    const matchesQuery = [mod.name, mod.version, text[mod.id === "remastered" ? "remasteredDescription" : "alternateDescription"], mod.categoryLabel, text[mod.id === "remastered" ? "remasteredBadge" : "alternateBadge"]]
      .join(" ").toLowerCase().includes(query);
    const matchesFilter = activeFilter === "all" || mod.category === activeFilter ||
      (activeFilter === "other" && !["remastered", "classic"].includes(mod.category));
    return matchesQuery && matchesFilter;
  });

  collectionCount.textContent = `${String(filtered.length).padStart(2, "0")} ${text.releases}`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);

  list.innerHTML = filtered.map(mod => {
    const pos = mod.imagePos || "center";
    const coverStyle = mod.image
      ? `background-image: linear-gradient(0deg, rgba(4,10,18,.88), rgba(4,10,18,.18)), url("${safeText(mod.image)}"); background-position:${safeText(pos)}; background-size:cover;`
      : "";
    const download = mod.downloadUrl
      ? `<a class="download-link" href="${safeText(mod.downloadUrl)}" target="_blank" rel="noopener noreferrer">${safeText(text.download)}</a>`
      : `<span class="download-link disabled" aria-label="${safeText(text.downloadUnavailable)}">${safeText(text.comingSoon)}</span>`;

    return `
      <article class="mod-card">
        <div class="mod-cover" style="${coverStyle}">
          ${mod.image ? "" : `<span class="cover-symbol" aria-hidden="true">${safeText(mod.symbol)}</span>`}
          <span class="cover-label">${safeText(text[mod.id === "remastered" ? "remasteredBadge" : "alternateBadge"])}</span>
        </div>
        <div class="mod-body">
          <div class="mod-meta">
            <span class="pill">${safeText(mod.id === "remastered" ? text.filterRemastered.toUpperCase() : text.filterClassic.toUpperCase())}</span>
            <span class="pill neutral">${safeText(mod.version)}</span>
            <span class="pill gold">${safeText(currentLanguage === "id" ? "TEMA TONERI" : currentLanguage === "zh-CN" ? "舍人主题" : "TONERI THEME")}</span>
          </div>
          <h3>${safeText(mod.name)}</h3>
          <p>${safeText(text[mod.id === "remastered" ? "remasteredDescription" : "alternateDescription"])}</p>
          <div class="mod-bottom">
            <span class="mod-size">${safeText(text.sizeMissing)}</span>
            ${download}
          </div>
        </div>
      </article>`;
  }).join("");
}

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  const text = translations[language];
  document.documentElement.lang = language;
  document.title = text.pageTitle;
  document.querySelector('meta[name="description"]').content = text.metaDescription;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.innerHTML = text[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = text[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", text[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    element.alt = text[element.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-i18n-content]").forEach(element => {
    element.content = text[element.dataset.i18nContent];
  });
  menuToggle.setAttribute("aria-label", nav.classList.contains("open") ? text.menuClose : text.menuOpen);
  renderMods();
}

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));

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
  menuToggle.setAttribute("aria-label", translations[currentLanguage][isOpen ? "menuClose" : "menuOpen"]);
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].menuOpen);
  });
});

setLanguage(currentLanguage);
