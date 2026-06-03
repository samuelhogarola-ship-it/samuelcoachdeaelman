document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".scb-menu-toggle");
  var nav = document.querySelector(".scb-primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (window.CookieBannerCore && typeof window.CookieBannerCore.init === "function") {
    window.CookieBannerCore.init({
      storageKey: "samuelcoach_cookie_consent",
      imageSrc: "https://www.samuelcoachdealeman.com/wp-content/themes/samuel-coach-blog/assets/img/samuel-cookie.webp",
      imageAlt: "Galleta decorativa del banner de cookies",
      title: "Tu privacidad importa",
      noticeHtml:
        '<p>Usamos cookies necesarias para que la web funcione y, solo si lo aceptas, cookies analíticas para entender el uso del sitio y mejorarlo. <a href="https://www.samuelcoachdealeman.com/politica-de-privacidad/">Más información</a>.</p>',
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
      saveConfigLabel: "Guardar configuración"
    });
  }
});
