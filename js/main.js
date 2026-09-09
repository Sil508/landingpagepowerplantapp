/**
 * Store URL placeholders — replace when the app is published.
 * QR images live in assets/qr/; swap those files for real store QR codes.
 */
window.PowerPlantConfig = {
  googlePlayUrl: "", // e.g. https://play.google.com/store/apps/details?id=...
  appStoreUrl: "", // e.g. https://apps.apple.com/app/id...
};

(function () {
  const { apply, toggle, detectInitialLang } = window.PowerPlantI18n;

  apply(detectInitialLang());

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      toggle();
      const url = new URL(window.location.href);
      url.searchParams.set("lang", document.documentElement.lang);
      window.history.replaceState({}, "", url);
    });
  }

  // Wire QR / store links when URLs are set; otherwise keep placeholders inert.
  function bindStore(linkId, url) {
    const a = document.getElementById(linkId);
    if (!a) return;
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.removeAttribute("aria-disabled");
      a.classList.remove("is-disabled");
    } else {
      a.href = "#download";
      a.setAttribute("aria-disabled", "true");
      a.classList.add("is-disabled");
      a.addEventListener("click", (e) => e.preventDefault());
    }
  }

  bindStore("link-play", window.PowerPlantConfig.googlePlayUrl);
  bindStore("link-appstore", window.PowerPlantConfig.appStoreUrl);

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
