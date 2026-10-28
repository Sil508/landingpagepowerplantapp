/**
 * Store links and language-specific QR assets.
 * Google Play is live; App Store stays “coming soon” until published.
 */
window.PowerPlantConfig = {
  googlePlayUrlNl:
    "https://play.google.com/store/apps/details?id=com.powerplant.powerplant&hl=nl",
  googlePlayUrlEn:
    "https://play.google.com/store/apps/details?id=com.powerplant.powerplant&hl=en",
  appStoreUrl: "", // set when published on the App Store
  qr: {
    playNl: "assets/qr/google-play_nl.svg",
    playEn: "assets/qr/google-play_en.svg",
    appStoreNl: "assets/qr/app-store_nl.svg",
    appStoreEn: "assets/qr/app-store_en.svg",
  },
};

(function () {
  const { apply, toggle, detectInitialLang } = window.PowerPlantI18n;
  const cfg = window.PowerPlantConfig;

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "nl";
  }

  function bindStore(linkId, url, { disabled }) {
    const a = document.getElementById(linkId);
    if (!a) return;
    // Avoid stacking preventDefault listeners on re-bind
    a.onclick = null;
    if (url && !disabled) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.removeAttribute("aria-disabled");
      a.classList.remove("is-disabled");
    } else {
      a.href = "#download";
      a.removeAttribute("target");
      a.removeAttribute("rel");
      a.setAttribute("aria-disabled", "true");
      a.classList.add("is-disabled");
      a.onclick = (e) => e.preventDefault();
    }
  }

  function updateStoreUi(lang) {
    const isEn = lang === "en";
    const playUrl = isEn ? cfg.googlePlayUrlEn : cfg.googlePlayUrlNl;
    const playImg = document.getElementById("qr-play-img");
    const appImg = document.getElementById("qr-appstore-img");

    if (playImg) {
      playImg.src = isEn ? cfg.qr.playEn : cfg.qr.playNl;
      playImg.alt = isEn ? "Google Play QR code" : "Google Play QR-code";
    }
    if (appImg) {
      appImg.src = isEn ? cfg.qr.appStoreEn : cfg.qr.appStoreNl;
      appImg.alt = isEn ? "App Store QR code (coming soon)" : "App Store QR-code (binnenkort)";
    }

    bindStore("link-play", playUrl, { disabled: false });
    bindStore("link-appstore", cfg.appStoreUrl, { disabled: true });
  }

  apply(detectInitialLang());
  updateStoreUi(currentLang());

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      toggle();
      const url = new URL(window.location.href);
      url.searchParams.set("lang", document.documentElement.lang);
      window.history.replaceState({}, "", url);
      updateStoreUi(currentLang());
    });
  }

  document.addEventListener("pp:lang", (e) => {
    updateStoreUi(e.detail?.lang === "en" ? "en" : "nl");
  });

  // Reveal-on-scroll for sections
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  // Soft parallax on hero glow (subtle)
  const glow = document.querySelector(".hero-glow");
  if (glow && !reduceMotion) {
    window.addEventListener(
      "pointermove",
      (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      },
      { passive: true },
    );
  }
})();
