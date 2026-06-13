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
    '<p>Usamos cookies necesarias para que la web funcione y, solo si lo aceptas, cookies analíticas para entender el uso del sitio y mejorarlo. <a href="/politica-de-privacidad/">Consulta la política de privacidad</a>.</p>',
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
const navInner = document.querySelector(".nav-inner");

const initLocaleSwitcher = () => {
  if (!navInner) return;

  const alternateLinks = Array.from(
    document.querySelectorAll('link[rel="alternate"][hreflang]')
  );
  const supportedLocales = ["es", "de", "en"];
  const localeLabels = { es: "ES", de: "DE", en: "EN" };
  const localeNames = {
    es: "Español",
    de: "Deutsch",
    en: "English"
  };
  const switcherAriaLabels = {
    es: "Selector de idioma",
    de: "Sprachauswahl",
    en: "Language selector"
  };

  const localeEntries = supportedLocales
    .map((locale) => {
      const match = alternateLinks.find(
        (link) => link.getAttribute("hreflang") === locale
      );
      return match
        ? {
            locale,
            href: match.getAttribute("href"),
            label: localeLabels[locale]
          }
        : null;
    })
    .filter(Boolean);

  if (localeEntries.length < 2) return;

  const currentLocale = (document.documentElement.lang || "es").slice(0, 2);

  const switcher = document.createElement("div");
  switcher.className = "lang-switch";
  switcher.setAttribute("role", "navigation");
  switcher.setAttribute(
    "aria-label",
    switcherAriaLabels[currentLocale] || switcherAriaLabels.es
  );

  localeEntries.forEach(({ locale, href, label }) => {
    const link = document.createElement("a");
    link.className = "lang-switch-link";
    link.href = href;
    link.textContent = label;
    link.setAttribute("hreflang", locale);
    link.setAttribute("lang", locale);
    link.setAttribute("title", localeNames[locale]);
    link.setAttribute("aria-label", localeNames[locale]);
    if (locale === currentLocale) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "true");
    }
    switcher.appendChild(link);
  });

  const navLinks = navInner.querySelector(".nav-links");
  if (navLinks) navLinks.insertAdjacentElement("afterend", switcher);
  else navInner.appendChild(switcher);

  if (mobileMenu) {
    const mobileSwitcher = switcher.cloneNode(true);
    mobileSwitcher.classList.add("lang-switch-mobile");
    mobileMenu.insertAdjacentElement("afterbegin", mobileSwitcher);
  }
};

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

const initOfferForms = () => {
  const forms = document.querySelectorAll(".offer-form");
  if (!forms.length) return;

  const locale = (document.documentElement.lang || "es").slice(0, 2);
  const validationCopy = {
    es: {
      title: "Por favor, completa estos campos obligatorios:",
      required: "Este campo es obligatorio.",
      email: "Introduce un email válido."
    },
    de: {
      title: "Bitte fülle diese Pflichtfelder aus:",
      required: "Dieses Feld ist erforderlich.",
      email: "Bitte gib eine gültige E-Mail-Adresse ein."
    },
    en: {
      title: "Please complete these required fields:",
      required: "This field is required.",
      email: "Please enter a valid email address."
    }
  };
  const copy = validationCopy[locale] || validationCopy.es;
  const submitCopy = {
    es: {
      sending: "Enviando...",
      success: "Mensaje enviado. Te responderé lo antes posible.",
      error: "No se pudo enviar el formulario ahora mismo. Escríbeme por WhatsApp o inténtalo de nuevo en unos minutos."
    },
    de: {
      sending: "Wird gesendet...",
      success: "Nachricht gesendet. Ich antworte dir so schnell wie möglich.",
      error: "Das Formular konnte gerade nicht gesendet werden. Schreib mir per WhatsApp oder versuche es in ein paar Minuten erneut."
    },
    en: {
      sending: "Sending...",
      success: "Message sent. I will get back to you as soon as possible.",
      error: "The form could not be sent right now. Please message me on WhatsApp or try again in a few minutes."
    }
  };
  const submitText = submitCopy[locale] || submitCopy.es;

  forms.forEach((form) => {
    const requiredFields = Array.from(
      form.querySelectorAll("input[required], select[required], textarea[required]")
    );
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultButtonLabel = submitButton ? submitButton.textContent : "";
    let statusNode = form.querySelector(".form-status");

    if (!statusNode) {
      statusNode = document.createElement("p");
      statusNode.className = "form-status";
      statusNode.setAttribute("aria-live", "polite");
      form.appendChild(statusNode);
    }

    const setFieldError = (field, message) => {
      const errorId = field.getAttribute("aria-describedby");
      const errorNode = errorId ? form.querySelector(`#${errorId}`) : null;
      field.setAttribute("aria-invalid", message ? "true" : "false");
      if (!errorNode) return;
      errorNode.textContent = message || "";
      errorNode.hidden = !message;
    };

    requiredFields.forEach((field) => {
      const resetField = () => setFieldError(field, "");
      field.addEventListener("input", resetField);
      field.addEventListener("change", resetField);
    });

    form.addEventListener("submit", async (event) => {
      const missingLabels = [];

      requiredFields.forEach((field) => {
        const isEmpty = !field.value.trim();
        const isInvalidEmail = field.type === "email" && !isEmpty && !field.checkValidity();
        const message = isEmpty ? copy.required : isInvalidEmail ? copy.email : "";

        setFieldError(field, message);

        if (message) {
          const fieldLabel = field.closest(".form-field");
          const text = fieldLabel?.querySelector("span")?.textContent || field.name;
          missingLabels.push(text.replace(/\s*\*$/, ""));
        }
      });

      if (missingLabels.length) {
        event.preventDefault();
        if (statusNode) {
          statusNode.textContent = "";
          statusNode.classList.remove("is-success", "is-error");
        }
        window.alert(`${copy.title}\n\n- ${missingLabels.join("\n- ")}`);
        return;
      }

      const action = form.getAttribute("action") || "";
      if (!action.includes("formsubmit.co")) return;

      event.preventDefault();

      if (statusNode) {
        statusNode.textContent = submitText.sending;
        statusNode.classList.remove("is-success", "is-error");
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = submitText.sending;
      }

      try {
        const actionUrl = new URL(action, window.location.href);
        const ajaxUrl = `${actionUrl.origin}/ajax${actionUrl.pathname}`;
        const response = await fetch(ajaxUrl, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: new FormData(form)
        });

        if (!response.ok) {
          throw new Error(`Unexpected response status: ${response.status}`);
        }

        const payload = await response.json();
        if (payload.success !== "true" && payload.success !== true) {
          throw new Error("FormSubmit did not confirm success.");
        }

        form.reset();
        requiredFields.forEach((field) => setFieldError(field, ""));
        if (statusNode) {
          statusNode.textContent = submitText.success;
          statusNode.classList.remove("is-error");
          statusNode.classList.add("is-success");
        }
      } catch (_error) {
        if (statusNode) {
          statusNode.textContent = submitText.error;
          statusNode.classList.remove("is-success");
          statusNode.classList.add("is-error");
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = defaultButtonLabel;
        }
      }
    });
  });
};

const initBlogQuiz = () => {
  const quizForms = document.querySelectorAll("[data-blog-quiz]");
  if (!quizForms.length) return;

  quizForms.forEach((form) => {
    const result = form.querySelector("[data-quiz-result]");
    const feedback = form.querySelector("[data-quiz-feedback]");
    const questions = Array.from(form.querySelectorAll("[data-quiz-question]"));

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let score = 0;
      let missingAnswer = false;

      if (feedback) {
        feedback.innerHTML = "";
        feedback.hidden = true;
      }

      questions.forEach((question, index) => {
        const correctValue = question.getAttribute("data-correct");
        const checked = question.querySelector('input[type="radio"]:checked');
        const options = question.querySelectorAll(".blog-quiz-option");

        options.forEach((option) => {
          option.classList.remove("is-correct", "is-wrong");
        });

        if (!checked) {
          missingAnswer = true;
          return;
        }

        const selectedOption = checked.closest(".blog-quiz-option");
        const correctOption = question.querySelector(
          `input[type="radio"][value="${correctValue}"]`
        )?.closest(".blog-quiz-option");

        if (checked.value === correctValue) {
          score += 1;
          if (selectedOption) selectedOption.classList.add("is-correct");
        } else {
          if (selectedOption) selectedOption.classList.add("is-wrong");
          if (correctOption) correctOption.classList.add("is-correct");
        }

        if (feedback) {
          const item = document.createElement("div");
          item.className = "blog-quiz-feedback-item";
          item.innerHTML = `<strong>Pregunta ${index + 1}.</strong> ${question.getAttribute("data-explanation") || ""}`;
          feedback.appendChild(item);
        }
      });

      if (missingAnswer) {
        if (result) {
          result.textContent = "Completa las tres preguntas antes de corregir.";
          result.classList.add("is-error");
        }
        return;
      }

      if (result) {
        result.textContent = `Resultado: ${score} de ${questions.length} correctas.`;
        result.classList.remove("is-error");
      }
      if (feedback) feedback.hidden = false;
    });
  });
};

initCookieBanner();
initAppsWidgetPreference();
initLocaleSwitcher();
initOfferForms();
initBlogQuiz();
