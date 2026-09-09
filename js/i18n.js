/**
 * PowerPlant landing page — Dutch (default) / English copy.
 */
window.PowerPlantI18n = (() => {
  const STORAGE_KEY = "pp-lang";

  const dict = {
    nl: {
      "meta.title": "PowerPlant — Energiebalans voor je huis",
      "meta.description":
        "Schat zonne-opbrengst, verbruik, batterij en kosten in voor huishoudens in Nederland.",
      "nav.features": "Functies",
      "nav.screenshots": "Screenshots",
      "nav.download": "Download",
      "nav.privacy": "Privacy",
      "nav.lang": "EN",
      "nav.langAria": "Switch to English",
      "hero.headline": "Zie wat zonnepanelen en een batterij je écht opleveren",
      "hero.lead":
        "PowerPlant schat productie, verbruik en jaarkosten voor huishoudens in Nederland — op basis van jouw locatie en situatie.",
      "hero.ctaPrimary": "Binnenkort downloaden",
      "hero.ctaSecondary": "Bekijk functies",
      "features.eyebrow": "Functies",
      "features.title": "Alles voor een heldere energiebalans",
      "features.lead":
        "Van zonnepanelen tot tarieven: één app die productie, verbruik en kosten samenbrengt.",
      "features.solar.title": "Zonnepanelen",
      "features.solar.body":
        "Stel locatie in via GPS of Nederlands adres (PDOK). Bereken maandelijkse opbrengst met Wp, helling, oriëntatie en systeemrendement — gebaseerd op PVGIS-instraling.",
      "features.usage.title": "Verbruik",
      "features.usage.body":
        "Kies woningtype, bewoners en apparaten. PowerPlant bouwt een realistisch maand- en uurverbruiksprofiel voor jouw huishouden.",
      "features.battery.title": "Batterij",
      "features.battery.body":
        "Voeg opslagcapaciteit toe en zie hoe overtollige zonnestroom thuis blijft in plaats van teruggeleverd te worden.",
      "features.tariffs.title": "Leveranciers & tarieven",
      "features.tariffs.body":
        "Vul inkoop- en teruglevertarieven in plus vaste kosten. Geschikt voor situaties zonder saldering.",
      "features.results.title": "Resultaten",
      "features.results.body":
        "Jaarkosten, zelfvoorzieningsgraad, terugleververgoeding en duidelijke grafieken van energiestroom en maandkosten.",
      "screens.eyebrow": "App",
      "screens.title": "Zo ziet PowerPlant eruit",
      "screens.lead":
        "Donkere, overzichtelijke interface — gericht op snelle inzichten in plaats van spreadsheets.",
      "screens.results": "Resultaten",
      "screens.resultsCosts": "Kosten",
      "screens.resultsKpis": "Kerncijfers",
      "screens.solar": "Zonnepanelen",
      "screens.usage": "Verbruik",
      "screens.battery": "Batterij",
      "download.eyebrow": "Download",
      "download.title": "Binnenkort in de stores",
      "download.lead":
        "De app is nog niet gepubliceerd. Scan later de QR-codes hieronder, of kom terug wanneer we live gaan.",
      "download.play": "Google Play",
      "download.appstore": "App Store",
      "download.soon": "Binnenkort beschikbaar",
      "download.qrHint": "QR-code volgt bij publicatie",
      "footer.tagline": "Energiebalans voor Nederlandse huishoudens",
      "footer.privacy": "Privacyverklaring",
      "footer.company": "GenCode Utrecht",
      "footer.rights": "© 2026 GenCode Utrecht",
      "privacy.meta.title": "Privacyverklaring — PowerPlant",
      "privacy.back": "← Terug naar PowerPlant",
      "privacy.title": "Privacyverklaring",
      "privacy.updated": "Laatst bijgewerkt: 5 september 2026",
      "privacy.intro":
        "Deze privacyverklaring beschrijft hoe GenCode Utrecht persoonsgegevens verwerkt bij het gebruik van de PowerPlant-app en deze website (powerplantapp.nl).",
      "privacy.s1.title": "1. Verantwoordelijke",
      "privacy.s1.body":
        "Verwerkingsverantwoordelijke is GenCode Utrecht, Groenedijk 78, 3544 AB Utrecht, Nederland. Contact: support@powerplantapp.nl.",
      "privacy.s2.title": "2. Welke gegevens we verwerken",
      "privacy.s2.body":
        "PowerPlant verwerkt alleen gegevens die nodig zijn om energie-inschattingen te maken:",
      "privacy.s2.li1":
        "Locatie: GPS-coördinaten of een Nederlands adres dat je zelf invoert, om instraling en productie te berekenen.",
      "privacy.s2.li2":
        "Installatie- en huishoudgegevens die je invult (bijv. Wp, helling, verbruiksprofiel, batterijcapaciteit, tarieven).",
      "privacy.s2.li3":
        "Technische opslag op het apparaat (instellingen en eventuele Pro-aankoopstatus via lokale opslag).",
      "privacy.s2.note":
        "We vragen geen account aan. We verkopen geen persoonsgegevens.",
      "privacy.s3.title": "3. Doeleinden en grondslag",
      "privacy.s3.body":
        "Gegevens worden verwerkt om de functionaliteit van de app te leveren die je zelf vraagt (overeenkomst / uitvoering van de dienst) en om de app te verbeteren of te ondersteunen wanneer je contact opneemt. Rechtsgrondslag: uitvoering van de overeenkomst (AVG art. 6 lid 1 onder b) en, waar van toepassing, gerechtvaardigd belang of toestemming.",
      "privacy.s4.title": "4. Delen met derden",
      "privacy.s4.body":
        "Voor berekeningen stuurt de app alleen de noodzakelijke gegevens naar:",
      "privacy.s4.li1":
        "PDOK Locatieserver (Kadaster / Nederlandse overheid) — adreszoeken en geocodering.",
      "privacy.s4.li2":
        "PVGIS (Joint Research Centre van de Europese Commissie) — maandelijkse / dagelijkse instralingsdata voor jouw coördinaten.",
      "privacy.s4.note":
        "Deze diensten ontvangen locatiegegevens uitsluitend om de gevraagde berekening mogelijk te maken. We gebruiken geen advertentienetwerken of analytische trackers in de app zoals die nu is.",
      "privacy.s5.title": "5. Bewaartermijn",
      "privacy.s5.body":
        "Locatie- en configuratiegegevens blijven in principe op jouw apparaat staan totdat je ze wist of de app verwijdert. Ondersteuningsmail die je stuurt bewaren we zo lang als nodig is om je vraag te beantwoorden, daarna wissen of anonimiseren we die.",
      "privacy.s6.title": "6. Beveiliging",
      "privacy.s6.body":
        "We nemen passende technische maatregelen (versleutelde verbindingen naar externe API’s via HTTPS, minimale gegevensuitwisseling). Geen methode is 100% veilig; gebruik de app met dat bewustzijn.",
      "privacy.s7.title": "7. Jouw rechten",
      "privacy.s7.body":
        "Onder de AVG kun je onder meer inzage, rectificatie, verwijdering, beperking van verwerking en dataportabiliteit vragen, en bezwaar maken tegen verwerking op basis van gerechtvaardigd belang. Neem contact op via support@powerplantapp.nl. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
      "privacy.s8.title": "8. Kinderen",
      "privacy.s8.body":
        "PowerPlant is niet gericht op kinderen onder de 16. We verzamelen niet bewust gegevens van minderjarigen.",
      "privacy.s9.title": "9. Website",
      "privacy.s9.body":
        "Deze marketingwebsite slaat je taalvoorkeur lokaal op (localStorage) zodat de taalkeuze bewaard blijft. We plaatsen geen trackingcookies voor advertenties of analytics op deze site in de huidige versie.",
      "privacy.s10.title": "10. Wijzigingen",
      "privacy.s10.body":
        "We kunnen deze verklaring aanpassen wanneer de app of wetgeving verandert. De datum bovenaan geeft de laatste update aan. Bij materiële wijzigingen vermelden we dat op de website of in de app.",
      "privacy.s11.title": "11. Contact",
      "privacy.s11.body":
        "Vragen over privacy: support@powerplantapp.nl — GenCode Utrecht, Groenedijk 78, 3544 AB Utrecht, Nederland.",
    },
    en: {
      "meta.title": "PowerPlant — Home energy balance",
      "meta.description":
        "Estimate solar production, usage, battery storage and costs for households in the Netherlands.",
      "nav.features": "Features",
      "nav.screenshots": "Screenshots",
      "nav.download": "Download",
      "nav.privacy": "Privacy",
      "nav.lang": "NL",
      "nav.langAria": "Schakel naar Nederlands",
      "hero.headline": "See what solar panels and a battery really earn you",
      "hero.lead":
        "PowerPlant estimates production, usage and annual costs for Dutch households — based on your location and setup.",
      "hero.ctaPrimary": "Download coming soon",
      "hero.ctaSecondary": "Explore features",
      "features.eyebrow": "Features",
      "features.title": "Everything for a clear energy balance",
      "features.lead":
        "From solar panels to tariffs: one app that brings production, usage and costs together.",
      "features.solar.title": "Solar panels",
      "features.solar.body":
        "Set location via GPS or a Dutch address (PDOK). Calculate monthly yield from Wp, tilt, orientation and system efficiency — powered by PVGIS irradiation data.",
      "features.usage.title": "Usage",
      "features.usage.body":
        "Choose house type, residents and appliances. PowerPlant builds a realistic monthly and hourly usage profile for your household.",
      "features.battery.title": "Battery",
      "features.battery.body":
        "Add storage capacity and see how surplus solar stays at home instead of being exported to the grid.",
      "features.tariffs.title": "Suppliers & tariffs",
      "features.tariffs.body":
        "Enter import and export rates plus fixed monthly costs. Built for situations without net metering (saldering).",
      "features.results.title": "Results",
      "features.results.body":
        "Annual cost, self-sufficiency, export credit and clear charts of energy flow and monthly costs.",
      "screens.eyebrow": "App",
      "screens.title": "A look inside PowerPlant",
      "screens.lead":
        "A dark, focused interface — built for quick insight instead of spreadsheets.",
      "screens.results": "Results",
      "screens.resultsCosts": "Costs",
      "screens.resultsKpis": "Key figures",
      "screens.solar": "Solar",
      "screens.usage": "Usage",
      "screens.battery": "Battery",
      "download.eyebrow": "Download",
      "download.title": "Coming soon to the stores",
      "download.lead":
        "The app is not published yet. Scan the QR codes below once we go live, or check back later.",
      "download.play": "Google Play",
      "download.appstore": "App Store",
      "download.soon": "Coming soon",
      "download.qrHint": "QR code will appear at launch",
      "footer.tagline": "Energy balance for Dutch households",
      "footer.company": "GenCode Utrecht",
      "footer.privacy": "Privacy statement",
      "footer.rights": "© 2026 GenCode Utrecht",
      "privacy.meta.title": "Privacy statement — PowerPlant",
      "privacy.back": "← Back to PowerPlant",
      "privacy.title": "Privacy statement",
      "privacy.updated": "Last updated: 5 September 2026",
      "privacy.intro":
        "This privacy statement explains how GenCode Utrecht processes personal data when you use the PowerPlant app and this website (powerplantapp.nl).",
      "privacy.s1.title": "1. Controller",
      "privacy.s1.body":
        "The controller is GenCode Utrecht, Groenedijk 78, 3544 AB Utrecht, The Netherlands. Contact: support@powerplantapp.nl.",
      "privacy.s2.title": "2. Data we process",
      "privacy.s2.body":
        "PowerPlant only processes data needed to produce energy estimates:",
      "privacy.s2.li1":
        "Location: GPS coordinates or a Dutch address you enter, to calculate irradiation and production.",
      "privacy.s2.li2":
        "Installation and household inputs you provide (e.g. Wp, tilt, usage profile, battery capacity, tariffs).",
      "privacy.s2.li3":
        "On-device technical storage (settings and any Pro purchase status via local storage).",
      "privacy.s2.note":
        "We do not require an account. We do not sell personal data.",
      "privacy.s3.title": "3. Purposes and legal basis",
      "privacy.s3.body":
        "Data is processed to deliver the app functionality you request (performance of a contract) and to support you when you contact us. Legal bases: performance of a contract (GDPR Art. 6(1)(b)) and, where applicable, legitimate interest or consent.",
      "privacy.s4.title": "4. Sharing with third parties",
      "privacy.s4.body":
        "For calculations, the app sends only what is necessary to:",
      "privacy.s4.li1":
        "PDOK Locatieserver (Kadaster / Dutch government) — address search and geocoding.",
      "privacy.s4.li2":
        "PVGIS (Joint Research Centre of the European Commission) — monthly / daily irradiation for your coordinates.",
      "privacy.s4.note":
        "These services receive location data solely to perform the requested calculation. The current app does not use ad networks or analytics trackers.",
      "privacy.s5.title": "5. Retention",
      "privacy.s5.body":
        "Location and configuration data generally stay on your device until you clear them or uninstall the app. Support emails you send are kept only as long as needed to answer your request, then deleted or anonymised.",
      "privacy.s6.title": "6. Security",
      "privacy.s6.body":
        "We apply appropriate technical measures (HTTPS to external APIs, minimal data exchange). No method is 100% secure; use the app with that awareness.",
      "privacy.s7.title": "7. Your rights",
      "privacy.s7.body":
        "Under the GDPR you may request access, rectification, erasure, restriction, data portability, and object to processing based on legitimate interest. Contact support@powerplantapp.nl. You may also lodge a complaint with the Dutch Data Protection Authority (autoriteitpersoonsgegevens.nl).",
      "privacy.s8.title": "8. Children",
      "privacy.s8.body":
        "PowerPlant is not directed at children under 16. We do not knowingly collect data from minors.",
      "privacy.s9.title": "9. Website",
      "privacy.s9.body":
        "This marketing site stores your language preference locally (localStorage) so the choice persists. The current version does not set advertising or analytics tracking cookies.",
      "privacy.s10.title": "10. Changes",
      "privacy.s10.body":
        "We may update this statement when the app or law changes. The date at the top shows the latest update. Material changes will be noted on the website or in the app.",
      "privacy.s11.title": "11. Contact",
      "privacy.s11.body":
        "Privacy questions: support@powerplantapp.nl — GenCode Utrecht, Groenedijk 78, 3544 AB Utrecht, The Netherlands.",
    },
  };

  function resolveLang(requested) {
    if (requested === "en" || requested === "nl") return requested;
    return "nl";
  }

  function getStoredLang() {
    try {
      return resolveLang(localStorage.getItem(STORAGE_KEY));
    } catch {
      return "nl";
    }
  }

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    if (fromQuery === "en" || fromQuery === "nl") return fromQuery;
    return getStoredLang();
  }

  function apply(lang) {
    const code = resolveLang(lang);
    const table = dict[code];
    document.documentElement.lang = code;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key] != null) el.textContent = table[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (table[key] != null) el.setAttribute("aria-label", table[key]);
    });

    const titleEl = document.querySelector('meta[name="i18n-title"]');
    const descEl = document.querySelector('meta[name="description"]');
    const titleKey = titleEl?.getAttribute("content") || "meta.title";
    if (table[titleKey]) document.title = table[titleKey];
    if (descEl && table["meta.description"]) {
      descEl.setAttribute("content", table["meta.description"]);
    }

    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }

    document.dispatchEvent(
      new CustomEvent("pp:lang", { detail: { lang: code } }),
    );
    return code;
  }

  function toggle() {
    const next = document.documentElement.lang === "en" ? "nl" : "en";
    return apply(next);
  }

  return { dict, apply, toggle, detectInitialLang, resolveLang };
})();
