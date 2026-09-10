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
      "privacy.updated": "Laatst bijgewerkt: 10 september 2026",
      "privacy.intro":
        "Deze privacyverklaring beschrijft hoe GenCode Utrecht persoonsgegevens verwerkt bij het gebruik van de PowerPlant-app en de bijbehorende website (powerplantapp.nl).",
      "privacy.s1.title": "1. Verantwoordelijke",
      "privacy.s1.body":
        "De verwerkingsverantwoordelijke voor de gegevensverwerking is:\nGenCode Utrecht\nGroenedijk 78\n3544 AB Utrecht\nNederland\nContact: support@powerplantapp.nl",
      "privacy.s2.title": "2. Welke gegevens we verwerken",
      "privacy.s2.body":
        "PowerPlant is ontworpen op basis van het principe van minimale gegevensverwerking. Wij verwerken uitsluitend gegevens die technisch noodzakelijk zijn om energie-inschattingen te maken en de app te laten functioneren:",
      "privacy.s2.li1":
        "Locatiegegevens: GPS-coördinaten of een handmatig ingevoerd Nederlands adres, uitsluitend om de lokale zonne-instraling en energieproductie te berekenen.",
      "privacy.s2.li2":
        "Installatie- en huishoudgegevens: Gegevens die je zelf invult (zoals het vermogen in Wp, de hellingshoek van panelen, je verbruiksprofiel, batterijcapaciteit en energietarieven).",
      "privacy.s2.li3":
        "Technische opslag op het apparaat: Instellingen en je Pro-aankoopstatus worden uitsluitend via lokale opslag op jouw eigen apparaat bewaard.",
      "privacy.s2.li4":
        "Transactiegegevens (Pro-versie): Indien je de Pro-versie aanschaft, wordt de betaling volledig afgehandeld door de app-store van jouw apparaat (Apple App Store of Google Play Store). GenCode Utrecht heeft geen toegang tot jouw bank- of creditcardgegevens.",
      "privacy.s2.note":
        "Wij verplichten je niet om een account aan te maken. Wij verkopen geen persoonsgegevens aan derden.",
      "privacy.s3.title": "3. Doeleinden en grondslag",
      "privacy.s3.body":
        "Wij verwerken jouw gegevens voor de volgende doeleinden en op basis van de volgende AVG-rechtsgrondslagen:",
      "privacy.s3.li1":
        "Uitvoering van de overeenkomst (art. 6 lid 1 onder b AVG): Om de functies en berekeningen van de app te leveren die je zelf opstart.",
      "privacy.s3.li2":
        "Gerechtvaardigd belang (art. 6 lid 1 onder f AVG): Voor het technisch optimaliseren en beveiligen van de website en de app, en om ondersteuning te bieden wanneer je contact met ons opneemt.",
      "privacy.s3.li3":
        "Toestemming (art. 6 lid 1 onder a AVG): Indien van toepassing voor specifieke functies waar je expliciet akkoord voor geeft (zoals het live ophalen van je GPS-locatie). Gegeven toestemming kun je op elk moment weer intrekken via de instellingen van je apparaat.",
      "privacy.s4.title": "4. Delen met derden en internationale doorgifte",
      "privacy.s4.body":
        "Voor het uitvoeren van de berekeningen en het tonen van de website deelt de app of website uitsluitend strikt noodzakelijke gegevens met de volgende partijen:",
      "privacy.s4.li1":
        "PDOK Locatieserver (Kadaster / Nederlandse overheid): Voor het omzetten van een handmatig ingevoerd adres naar coördinaten (geocodering).",
      "privacy.s4.li2":
        "PVGIS (Joint Research Centre van de Europese Commissie): Voor het ophalen van historische en actuele instralingsdata op basis van jouw coördinaten.",
      "privacy.s4.li3":
        "GitHub Inc. (GitHub Pages): Voor het hosten en tonen van de website powerplantapp.nl. GitHub verwerkt hierbij technische serverlogs (zoals IP-adressen). Omdat GitHub een Amerikaans bedrijf is, worden deze gegevens doorgegeven naar de Verenigde Staten. GitHub waarborgt een passend beschermingsniveau via de EU-U.S. Data Privacy Framework-certificering.",
      "privacy.s4.note":
        "Wij gebruiken in de huidige versie van de app en website geen commerciële advertentienetwerken of analytische trackers (zoals Google Analytics).",
      "privacy.s5.title": "5. Bewaartermijn",
      "privacy.s5.body":
        "Locatie- en configuratiegegevens blijven op jouw eigen apparaat staan totdat je deze zelf wist of de app verwijdert. E-mails die je naar onze ondersteuningsservice stuurt, bewaren wij zolang als nodig is om je vraag volledig te beantwoorden en eventuele nazorg te leveren. Daarna worden deze berichten binnen een redelijke termijn verwijderd of geanonimiseerd.",
      "privacy.s6.title": "6. Beveiliging",
      "privacy.s6.body":
        "Wij nemen passende technische en organisatorische maatregelen om jouw gegevens te beschermen. Alle gegevensuitwisseling met externe API's en servers verloopt via streng versleutelde HTTPS-verbindingen. We minimaliseren de data die wordt verzonden tot het absolute minimum dat nodig is voor de werking van de dienst.",
      "privacy.s7.title": "7. Jouw rechten",
      "privacy.s7.body":
        "Onder de AVG heb je verschillende rechten met betrekking tot je persoonsgegevens:",
      "privacy.s7.li1":
        "Recht op inzage, rectificatie of verwijdering van je gegevens.",
      "privacy.s7.li2":
        "Recht op beperking van de verwerking of om bezwaar te maken tegen de verwerking (bijvoorbeeld tegen verwerking op basis van gerechtvaardigd belang).",
      "privacy.s7.li3": "Recht op dataportabiliteit.",
      "privacy.s7.body2":
        "Omdat de meeste gegevens uitsluitend lokaal op jouw telefoon staan, kun je het recht op verwijdering en inzage grotendeels zelf uitoefenen door de app-gegevens te wissen of de app te deinstalleren. Voor overige vragen of verzoeken kun je contact met ons opnemen via support@powerplantapp.nl.",
      "privacy.s7.body3":
        "Je hebt daarnaast altijd het recht om een klacht in te dienen bij de bevoegde privacytoezichthouder, de Nederlandse Autoriteit Persoonsgegevens.",
      "privacy.s8.title": "8. Kinderen",
      "privacy.s8.body":
        "PowerPlant is niet specifiek gericht op kinderen onder de 16 jaar. Wij verzamelen niet bewust gegevens van minderjarigen.",
      "privacy.s9.title": "9. Website-specifieke informatie",
      "privacy.s9.body":
        "Onze website powerplantapp.nl slaat jouw taalvoorkeur lokaal op in je browser via localStorage zodat de website de volgende keer in de juiste taal opent. Wij plaatsen geen trackingcookies of marketingcookies van derden.",
      "privacy.s10.title": "10. Wijzigingen",
      "privacy.s10.body":
        "Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen, bijvoorbeeld wanneer de app updates krijgt of wanneer wetgeving verandert. De datum bovenaan deze pagina geeft aan wanneer de laatste wijziging heeft plaatsgevonden. Bij ingrijpende wijzigingen zullen we dit duidelijk vermelden op de website of via een notificatie in de app.",
      "privacy.s11.title": "11. Contact",
      "privacy.s11.body":
        "Voor vragen, opmerkingen of verzoeken omtrent jouw privacy kun je contact opnemen met:\nGenCode Utrecht\nGroenedijk 78\n3544 AB Utrecht\nNederland\nE-mail: support@powerplantapp.nl",
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
      "footer.privacy": "Privacy Policy",
      "footer.rights": "© 2026 GenCode Utrecht",
      "privacy.meta.title": "Privacy Policy — PowerPlant",
      "privacy.back": "← Back to PowerPlant",
      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: September 10, 2026",
      "privacy.intro":
        "This privacy policy describes how GenCode Utrecht processes personal data when you use the PowerPlant app and the associated website (powerplantapp.nl).",
      "privacy.s1.title": "1. Data Controller",
      "privacy.s1.body":
        "The data controller responsible for processing your data is:\nGenCode Utrecht\nGroenedijk 78\n3544 AB Utrecht\nThe Netherlands\nContact: support@powerplantapp.nl",
      "privacy.s2.title": "2. What Data We Process",
      "privacy.s2.body":
        "PowerPlant is designed based on the principle of data minimization. We only process data that is technically necessary to provide energy estimates and ensure the app functions properly:",
      "privacy.s2.li1":
        "Location Data: GPS coordinates or a manually entered Dutch address, solely used to calculate local solar irradiance and energy production.",
      "privacy.s2.li2":
        "Installation and Household Data: Information you enter yourself (such as solar panel capacity in Wp, tilt angle, electricity consumption profile, battery capacity, and energy tariffs).",
      "privacy.s2.li3":
        "Technical Local Storage: Settings and your Pro purchase status are stored exclusively in the local storage of your own device.",
      "privacy.s2.li4":
        "Transaction Data (Pro Version): If you purchase the Pro version, the payment is fully handled by the app store of your device (Apple App Store or Google Play Store). GenCode Utrecht does not have access to your banking or credit card details.",
      "privacy.s2.note":
        "We do not require you to create an account. We do not sell personal data to third parties.",
      "privacy.s3.title": "3. Purposes and Legal Basis",
      "privacy.s3.body":
        "We process your data for the following purposes and based on the following GDPR legal bases:",
      "privacy.s3.li1":
        "Performance of a Contract (Art. 6(1)(b) GDPR): To deliver the app features and calculations that you actively request.",
      "privacy.s3.li2":
        "Legitimate Interests (Art. 6(1)(f) GDPR): For the technical optimization and security of the website and the app, and to provide customer support when you contact us.",
      "privacy.s3.li3":
        "Consent (Art. 6(1)(a) GDPR): Where applicable for specific features you explicitly approve (such as retrieving your live GPS location). You can withdraw your consent at any time through your device settings.",
      "privacy.s4.title": "4. Third-Party Sharing and International Data Transfers",
      "privacy.s4.body":
        "To perform the required calculations and display the website, the app or website only shares strictly necessary data with the following parties:",
      "privacy.s4.li1":
        "PDOK Locatieserver (Kadaster / Dutch Government): For converting a manually entered address into geographic coordinates (geocoding).",
      "privacy.s4.li2":
        "PVGIS (Joint Research Centre of the European Commission): To retrieve historical and current solar irradiance data based on your coordinates.",
      "privacy.s4.li3":
        "GitHub Inc. (GitHub Pages): For hosting and displaying the website powerplantapp.nl. GitHub processes technical server logs (such as IP addresses) for this purpose. Because GitHub is a US-based company, this data is transferred to the United States. GitHub ensures an adequate level of data protection through its EU-U.S. Data Privacy Framework certification.",
      "privacy.s4.note":
        "In the current version of the app and website, we do not use commercial advertising networks or analytical trackers (such as Google Analytics).",
      "privacy.s5.title": "5. Data Retention",
      "privacy.s5.body":
        "Location and configuration data remain on your own device until you delete them yourself or uninstall the app. Emails sent to our support service are retained for as long as necessary to fully answer your question and provide any follow-up assistance. Afterward, these messages are deleted or anonymized within a reasonable timeframe.",
      "privacy.s6.title": "6. Data Security",
      "privacy.s6.body":
        "We implement appropriate technical and organizational measures to protect your data. All data exchange with external APIs and servers is conducted over securely encrypted HTTPS connections. We minimize the data transmitted to the absolute minimum required to operate the service.",
      "privacy.s7.title": "7. Your Rights",
      "privacy.s7.body":
        "Under the GDPR, you have several rights regarding your personal data:",
      "privacy.s7.li1":
        "The right to access, rectify, or erase your data.",
      "privacy.s7.li2":
        "The right to restrict processing or to object to processing (for instance, when processing is based on legitimate interests).",
      "privacy.s7.li3": "The right to data portability.",
      "privacy.s7.body2":
        "Since most data is stored exclusively local to your phone, you can exercise your right to erasure and access directly by clearing the app data or uninstalling the app. For any other questions or requests, you can contact us at support@powerplantapp.nl.",
      "privacy.s7.body3":
        "You also have the right to lodge a complaint with the competent supervisory authority, the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).",
      "privacy.s8.title": "8. Children",
      "privacy.s8.body":
        "PowerPlant is not specifically directed at children under the age of 16. We do not knowingly collect data from minors.",
      "privacy.s9.title": "9. Website-Specific Information",
      "privacy.s9.body":
        "Our website powerplantapp.nl stores your language preference locally in your browser using localStorage so that the website opens in the correct language during your next visit. We do not place tracking cookies or third-party marketing cookies.",
      "privacy.s10.title": "10. Changes to this Policy",
      "privacy.s10.body":
        "We may update this privacy policy from time to time, for example, when the app receives updates or when legislation changes. The date at the top of this page indicates when the last update occurred. In the event of material changes, we will clearly state this on the website or via a notification within the app.",
      "privacy.s11.title": "11. Contact",
      "privacy.s11.body":
        "For questions, comments, or requests regarding your privacy, please contact:\nGenCode Utrecht\nGroenedijk 78\n3544 AB Utrecht\nThe Netherlands\nEmail: support@powerplantapp.nl",
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
