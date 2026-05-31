const siteLocaleContent = window.siteLocaleContent || {};
const navigationCopy = {
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  ...(siteLocaleContent.navigation || {})
};
const cookieCopy = {
  imageAlt: "Galleta decorativa del banner de cookies",
  title: "Tu privacidad importa",
  noticeHtml:
    '<p>Usamos cookies necesarias para que la web funcione y, solo si lo aceptas, cookies analíticas para entender el uso del sitio y mejorarlo. <a href="/politica-de-privacidad/">Más información</a>.</p>',
  acceptLabel: "Aceptar",
  rejectLabel: "Rechazar",
  configLabel: "Configurar cookies",
  configModalTitle: "Configura tus cookies",
  configModalIntro:
    "Puedes aceptar solo las cookies necesarias o activar también las cookies analíticas. Siempre podrás cambiar tu decisión borrando las cookies del navegador.",
  necessaryTitle: "Cookies necesarias",
  necessaryDescription:
    "Son imprescindibles para funciones básicas como navegación, seguridad y recordar tu elección de consentimiento.",
  necessaryBadge: "Siempre activas",
  analyticsTitle: "Cookies analíticas",
  analyticsDescription:
    "Nos ayudan a entender cómo se usa la web para mejorar contenidos, rendimiento y experiencia de navegación.",
  saveConfigLabel: "Guardar configuración",
  ...(siteLocaleContent.cookieBanner || {})
};

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#mobile-menu");

if (hamburger && mobileMenu) {
  const closeMenu = () => {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", navigationCopy.openMenu);
    mobileMenu.hidden = true;
    mobileMenu.classList.remove("is-open");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    hamburger.setAttribute("aria-label", isOpen ? navigationCopy.openMenu : navigationCopy.closeMenu);
    mobileMenu.hidden = isOpen;
    mobileMenu.classList.toggle("is-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (
      mobileMenu.classList.contains("is-open") &&
      !mobileMenu.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

const getScrollOffset = () => {
  const notice = document.querySelector(".notice");
  const nav = document.querySelector("nav");
  return (notice ? notice.offsetHeight : 0) + (nav ? nav.offsetHeight : 0) + 16;
};

const scrollToHashTarget = (hash) => {
  if (!hash || hash === "#") return;

  const target = document.querySelector(hash);
  if (!target) return;

  const targetTop = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    history.pushState(null, "", hash);
    scrollToHashTarget(hash);
  });
});

window.addEventListener("load", () => {
  if (window.location.hash) {
    requestAnimationFrame(() => {
      scrollToHashTarget(window.location.hash);
    });
  }
});

window.siteHooks = {
  initAnalytics(tracker) {
    if (typeof tracker === "function") tracker();
  },
  initForm(handler) {
    if (typeof handler === "function") handler();
  }
};

const initAppsWidgetPreference = () => {
  const widgetToggle = document.querySelector(".apps-widget-toggle");
  if (!widgetToggle) return;

  const storageKey = "samuelcoach_apps_widget_state";
  let savedState = null;

  try {
    savedState = window.localStorage.getItem(storageKey);
  } catch (_error) {
    savedState = null;
  }

  const isMobileViewport = window.matchMedia("(max-width: 860px)").matches;
  widgetToggle.checked = isMobileViewport ? false : savedState !== "closed";

  widgetToggle.addEventListener("change", () => {
    try {
      window.localStorage.setItem(storageKey, widgetToggle.checked ? "open" : "closed");
    } catch (_error) {
      // Ignore storage errors and keep the widget interactive.
    }
  });
};

const emitCookiePreferences = (preferences) => {
  // Wire GA consent on every user decision
  if (window.GoogleAnalyticsCore) {
    if (preferences && preferences.analiticas) GoogleAnalyticsCore.grantConsent();
    else                                        GoogleAnalyticsCore.revokeConsent();
  }
  window.dispatchEvent(
    new CustomEvent("cookiepreferenceschange", {
      detail: {
        necesarias: true,
        analiticas: !!(preferences && preferences.analiticas)
      }
    })
  );
};

const initCookieBanner = () => {
  if (!window.CookieBannerCore || typeof window.CookieBannerCore.init !== "function") return;

  // GA must init BEFORE the banner so consent defaults are set first (Consent Mode v2)
  if (window.GoogleAnalyticsCore) {
    GoogleAnalyticsCore.init({
      measurementId: 'G-JR13E61YDJ',
      preferencesKey: 'samuelcoach_cookie_consent_preferences',
    });
  }

  window.CookieBannerCore.init({
    storageKey: "samuelcoach_cookie_consent",
    imageSrc: "/assets/img/samuel-cookie.webp",
    imageAlt: cookieCopy.imageAlt,
    title: cookieCopy.title,
    noticeHtml: cookieCopy.noticeHtml,
    acceptLabel: cookieCopy.acceptLabel,
    rejectLabel: cookieCopy.rejectLabel,
    configLabel: cookieCopy.configLabel,
    configModalTitle: cookieCopy.configModalTitle,
    configModalIntro: cookieCopy.configModalIntro,
    necessaryTitle: cookieCopy.necessaryTitle,
    necessaryDescription: cookieCopy.necessaryDescription,
    necessaryBadge: cookieCopy.necessaryBadge,
    analyticsTitle: cookieCopy.analyticsTitle,
    analyticsDescription: cookieCopy.analyticsDescription,
    saveConfigLabel: cookieCopy.saveConfigLabel,
    onAccept: emitCookiePreferences,
    onReject: emitCookiePreferences,
    onSaveConfig: emitCookiePreferences
  });
};

initCookieBanner();
initAppsWidgetPreference();
