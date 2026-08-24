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
    if (window.innerWidth > 980) closeMenu();
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

const initHomeGoalPrefill = () => {
  const cards = document.querySelectorAll(".home-need-card[data-goal]");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (card.getAttribute("href") !== "#valoracion") return;

      const goal = card.dataset.goal;
      const form = document.querySelector("#valoracion .offer-form");
      const goalField = form ? form.querySelector('select[name="goal"]') : null;
      const nameField = form ? form.querySelector('input[name="name"]') : null;

      if (goalField) {
        goalField.value = goal;
        goalField.dispatchEvent(new Event("change", { bubbles: true }));
      }

      event.preventDefault();
      history.pushState(null, "", "#valoracion");
      scrollToHashTarget("#valoracion");

      window.setTimeout(() => {
        if (nameField) nameField.focus({ preventScroll: true });
      }, 420);
    });
  });
};

const initMobileStickyCtaGuard = () => {
  const stickyCta = document.querySelector(".mobile-sticky-cta");
  const formSection = document.querySelector("#valoracion");
  const form = formSection ? formSection.querySelector(".offer-form") : null;
  if (!stickyCta || !formSection) return;

  const updateStickyState = () => {
    const formRect = formSection.getBoundingClientRect();
    const isNearForm =
      formRect.top < window.innerHeight - 150 &&
      formRect.bottom > 180;
    const isFormFocused = !!form && form.contains(document.activeElement);

    stickyCta.classList.toggle("is-hidden", isNearForm || isFormFocused);
  };

  updateStickyState();
  window.addEventListener("scroll", updateStickyState, { passive: true });
  window.addEventListener("resize", updateStickyState);
  document.addEventListener("focusin", updateStickyState);
  document.addEventListener("focusout", () => {
    window.setTimeout(updateStickyState, 20);
  });
};

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

  const runtimeConfig = window.__SAMUEL_CONTACT_CONFIG__ || {};
  const getMetaConfig = (name) =>
    (function(el){ return el ? (el.getAttribute("content") || "").trim() : ""; })(document.querySelector(`meta[name="${name}"]`));
  const readPublicConfig = (runtimeValue, metaName) => {
    const value =
      (typeof runtimeValue === "string" ? runtimeValue : "") || getMetaConfig(metaName);

    if (!value) return "";
    return /^REPLACE_WITH_/i.test(value) ? "" : value;
  };

  const locale = (document.documentElement.lang || "es").slice(0, 2);
  const configuredEndpoint = readPublicConfig(
    runtimeConfig.contactEndpoint,
    "samuel-contact-endpoint"
  );
  const normalizeContactEndpoint = (value) => {
    const endpoint = (value || "").trim();
    if (endpoint === "/functions/v1/contact") return "/functions/v1/contact/";
    return endpoint || "https://hocdlmxzghwymamientc.supabase.co/functions/v1/contact";
  };
  const turnstileSiteKey = readPublicConfig(
    runtimeConfig.turnstileSiteKey,
    "samuel-turnstile-site-key"
  );
  let turnstileLoader = null;

  const validationCopy = {
    es: {
      required: "Este campo es obligatorio.",
      email: "Introduce un email válido.",
      review: "Revisa los campos marcados e inténtalo de nuevo.",
      retry: "No hemos podido procesar el formulario. Revíselo e inténtelo de nuevo en un momento.",
      risk: "Hemos detectado datos inconsistentes. Revise el formulario e inténtelo de nuevo.",
      turnstile: "Confirma que no eres un bot.",
      turnstileError: "No se pudo cargar la comprobación de seguridad. Escríbeme por WhatsApp o inténtalo de nuevo en unos minutos."
    },
    de: {
      required: "Dieses Feld ist erforderlich.",
      email: "Bitte gib eine gültige E-Mail-Adresse ein.",
      review: "Bitte prüfe die markierten Felder und versuche es erneut.",
      retry: "Das Formular konnte nicht verarbeitet werden. Bitte prüfe es und versuche es gleich noch einmal.",
      risk: "Wir haben widersprüchliche Angaben erkannt. Bitte prüfe das Formular und versuche es erneut.",
      turnstile: "Bitte bestätige, dass du kein Bot bist.",
      turnstileError: "Die Sicherheitsprüfung konnte nicht geladen werden. Schreib mir per WhatsApp oder versuche es in ein paar Minuten erneut."
    },
    en: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      review: "Please review the highlighted fields and try again.",
      retry: "We could not process the form. Please review it and try again in a moment.",
      risk: "We detected inconsistent details. Please review the form and try again.",
      turnstile: "Please confirm that you are not a bot.",
      turnstileError: "The security check could not be loaded. Please message me on WhatsApp or try again in a few minutes."
    }
  };
  const submitCopy = {
    es: {
      sending: "Enviando...",
      success: "Mensaje enviado. Te responderé lo antes posible.",
      error: "No se pudo enviar el formulario ahora mismo. Escríbeme por WhatsApp o inténtalo de nuevo en unos minutos.",
      fallback: "No se pudo enviar automáticamente, pero he preparado el email con tus datos para que puedas mandarlo en un clic."
    },
    de: {
      sending: "Wird gesendet...",
      success: "Nachricht gesendet. Ich antworte dir so schnell wie möglich.",
      error: "Das Formular konnte gerade nicht gesendet werden. Schreib mir per WhatsApp oder versuche es in ein paar Minuten erneut.",
      fallback: "Der automatische Versand ist nicht verfügbar, aber ich habe die E-Mail mit deinen Angaben vorbereitet."
    },
    en: {
      sending: "Sending...",
      success: "Message sent. I will get back to you as soon as possible.",
      error: "The form could not be sent right now. Please message me on WhatsApp or try again in a few minutes.",
      fallback: "Automatic sending is not available, but I have prepared an email with your details so you can send it in one click."
    }
  };
  const fallbackSubject = {
    es: "Solicitud de valoración desde la web",
    de: "Anfrage über die Website",
    en: "Website assessment request"
  };
  const copy = validationCopy[locale] || validationCopy.es;
  const submitText = submitCopy[locale] || submitCopy.es;

  const buildFallbackBody = (payload) => {
    const rows = [
      ["Nombre / Name", payload.name],
      ["Email", payload.email],
      ["Teléfono / Phone", payload.phone],
      ["Edad / Age", payload.age_band],
      ["Objetivo / Goal", payload.goal],
      ["Nivel / Level", payload.current_level],
      ["Disponibilidad / Availability", payload.availability],
      ["Servicio / Service", payload.service_interest],
      ["Horas por semana / Hours per week", payload.hours_per_week],
      ["Horario preferido / Preferred schedule", payload.preferred_schedule],
      ["Situación / Message", payload.situation || payload.message],
      ["Página / Page", payload.page_path]
    ].filter(([, value]) => value);

    const fieldSummary = rows
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n");

    return [
      "Hola Samuel,",
      "",
      "Te envío mi solicitud de valoración desde la web:",
      "",
      fieldSummary,
      "",
      "Gracias."
    ].join("\n");
  };

  const openEmailFallback = (payload) => {
    const recipient = "samuelcoachdealeman@gmail.com";
    const subject = fallbackSubject[locale] || fallbackSubject.es;
    const body = buildFallbackBody(payload);
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const loadTurnstile = () => {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (turnstileLoader) return turnstileLoader;

    turnstileLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.turnstile) {
          resolve(window.turnstile);
          return;
        }
        reject(new Error("Turnstile loaded without API."));
      };
      script.onerror = () => reject(new Error("Turnstile failed to load."));
      document.head.appendChild(script);
    });

    return turnstileLoader;
  };

  const payloadFromForm = (form) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (typeof data.phone === "string") {
      data.phone = data.phone.replace(/[\s\-().]/g, "");
    }
    data.turnstileToken = data.turnstileToken || "";
    data.locale = locale;
    data.page_path = window.location.pathname;
    return data;
  };

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

    const turnstileContainer = form.querySelector("[data-turnstile-container]");
    const turnstileWidget = turnstileContainer ? turnstileContainer.querySelector(".form-turnstile-widget") : null;
    const turnstileRequiredMessage = (turnstileContainer && turnstileContainer.dataset.turnstileRequired) || copy.turnstile;
    const turnstileLoadErrorMessage = (turnstileContainer && turnstileContainer.dataset.turnstileError) || copy.turnstileError;
    const turnstileState = {
      required: Boolean(turnstileContainer && turnstileWidget),
      enabled: Boolean(turnstileContainer && turnstileWidget && turnstileSiteKey),
      widgetId: null,
      loaded: false
    };

    const setStatusMessage = (message, tone) => {
      if (!statusNode) return;
      statusNode.textContent = message || "";
      statusNode.classList.remove("is-success", "is-error");
      if (tone) {
        statusNode.classList.add(tone === "success" ? "is-success" : "is-error");
      }
    };

    const setFieldError = (field, message) => {
      const errorId = field.getAttribute("aria-describedby");
      const errorNode = errorId ? form.querySelector(`#${errorId}`) : null;
      field.setAttribute("aria-invalid", message ? "true" : "false");
      if (!errorNode) return;
      errorNode.textContent = message || "";
      errorNode.hidden = !message;
    };

    const validateBasicFields = () => {
      let hasErrors = false;

      requiredFields.forEach((field) => {
        const isEmpty = !field.value.trim();
        const isInvalidEmail = field.type === "email" && !isEmpty && !field.checkValidity();
        const message = isEmpty ? copy.required : isInvalidEmail ? copy.email : "";

        setFieldError(field, message);
        if (message) {
          hasErrors = true;
        }
      });

      return !hasErrors;
    };

    requiredFields.forEach((field) => {
      const resetField = () => setFieldError(field, "");
      field.addEventListener("input", resetField);
      field.addEventListener("change", resetField);
    });

    if (turnstileState.required && !turnstileState.enabled) {
      setStatusMessage(turnstileLoadErrorMessage, "error");
    } else if (turnstileState.enabled) {
      loadTurnstile()
        .then((turnstile) => {
          turnstileState.widgetId = turnstile.render(turnstileWidget, {
            sitekey: turnstileSiteKey,
            theme: "light",
            language: locale === "en" ? "en" : locale === "de" ? "de" : "es",
            callback: (token) => {
              const hiddenInput = form.querySelector('input[name="turnstileToken"]');
              if (hiddenInput) {
                hiddenInput.value = token || "";
              }
              if (statusNode && statusNode.textContent === turnstileRequiredMessage) {
                setStatusMessage("");
              }
            },
            "expired-callback": () => {
              const hiddenInput = form.querySelector('input[name="turnstileToken"]');
              if (hiddenInput) hiddenInput.value = "";
              setStatusMessage(turnstileRequiredMessage, "error");
            },
            "error-callback": () => setStatusMessage(turnstileLoadErrorMessage, "error")
          });
          turnstileState.loaded = true;
        })
        .catch(() => {
          turnstileState.loaded = false;
          setStatusMessage(turnstileLoadErrorMessage, "error");
        });
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!validateBasicFields()) {
        setStatusMessage(copy.review, "error");
        return;
      }

      if (turnstileState.required) {
        if (!turnstileState.enabled || !turnstileState.loaded || turnstileState.widgetId === null || !window.turnstile) {
          setStatusMessage(turnstileLoadErrorMessage, "error");
          return;
        }

        const token = window.turnstile.getResponse(turnstileState.widgetId);
        if (!token) {
          setStatusMessage(turnstileRequiredMessage, "error");
          return;
        }

        const hiddenInput = form.querySelector('input[name="turnstileToken"]');
        if (hiddenInput) {
          hiddenInput.value = token;
        }
      }

      const action = normalizeContactEndpoint(configuredEndpoint);
      const payload = payloadFromForm(form);

      setStatusMessage(submitText.sending);
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = submitText.sending;
      }

      try {
        const response = await fetch(action, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        let result = null;
        try {
          result = await response.json();
        } catch (_error) {
          result = null;
        }

        if (!response.ok) {
          if (result && result.messageKey === "risk") {
            setStatusMessage(copy.risk, "error");
            return;
          }

          openEmailFallback(payload);
          setStatusMessage(submitText.fallback, "error");
          return;
        }

        if (result && result.success === false) {
          setStatusMessage(copy.retry, "error");
          return;
        }

        form.reset();
        requiredFields.forEach((field) => setFieldError(field, ""));
        setStatusMessage(
          (result && result.messageKey === "success") ? submitText.success : submitText.success,
          "success"
        );
      } catch (_error) {
        openEmailFallback(payload);
        setStatusMessage(submitText.fallback || submitText.error, "error");
      } finally {
        if (turnstileState.enabled && turnstileState.loaded && turnstileState.widgetId !== null && window.turnstile) {
          window.turnstile.reset(turnstileState.widgetId);
        }
        const hiddenInput = form.querySelector('input[name="turnstileToken"]');
        if (hiddenInput) {
          hiddenInput.value = "";
        }
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
        const correctInput = question.querySelector(
          `input[type="radio"][value="${correctValue}"]`
        );
        const correctOption = correctInput ? correctInput.closest(".blog-quiz-option") : null;

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

function initPageTransitions() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href) return;
    if (a.target === "_blank") return;
    if (a.hasAttribute("download")) return;
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (href.startsWith("#")) return;
    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.hash) return;
    } catch (_e) { return; }
    e.preventDefault();
    document.body.classList.add("is-leaving");
    setTimeout(() => { location.href = href; }, 200);
  });
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) document.body.classList.remove("is-leaving");
  });
}

initCookieBanner();
initAppsWidgetPreference();
initLocaleSwitcher();
initHomeGoalPrefill();
initMobileStickyCtaGuard();
initOfferForms();
initBlogQuiz();
initPageTransitions();
