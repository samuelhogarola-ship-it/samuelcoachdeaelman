/* Anonymous, cookieless Umami tracking for Samuel Coach. */
(function () {
  'use strict';

  var PERSONAL_HOST_URL = 'https://analytics.187.124.55.36.sslip.io';
  var PERSONAL_SCRIPT_SRC = PERSONAL_HOST_URL + '/script.js';
  var WEBSITE_ID_PATTERN = /^[A-Za-z0-9_-]{8,128}$/;
  var STANDARD_EVENTS = [
    'whatsapp_click',
    'phone_click',
    'email_click',
    'contact_form_submit',
    'landing_cta_click',
    'external_booking_click'
  ];
  var _ready = null;

  function normalizeString(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  function findExistingTracker() {
    return document.querySelector('script[data-umami-analytics-core]');
  }

  function isAllowedConfig(config) {
    if (!config) return false;
    var scriptSrc = normalizeString(config.scriptSrc) || PERSONAL_SCRIPT_SRC;
    var hostUrl = normalizeString(config.hostUrl) || PERSONAL_HOST_URL;
    return scriptSrc === PERSONAL_SCRIPT_SRC && hostUrl === PERSONAL_HOST_URL;
  }

  function installTracker(config) {
    var existingTracker = findExistingTracker();
    if (existingTracker) return existingTracker;
    if (!isAllowedConfig(config)) return null;

    var websiteId = typeof config.websiteId === 'string'
      ? config.websiteId.trim()
      : '';
    if (!WEBSITE_ID_PATTERN.test(websiteId)) return null;

    var tracker = document.createElement('script');
    tracker.defer = true;
    tracker.dataset.domains = 'samuelcoachdealeman.com,www.samuelcoachdealeman.com';
    tracker.dataset.hostUrl = PERSONAL_HOST_URL;
    tracker.dataset.umamiAnalyticsCore = 'true';
    tracker.dataset.websiteId = websiteId;
    tracker.src = PERSONAL_SCRIPT_SRC;
    document.head.appendChild(tracker);
    return tracker;
  }

  function hasTracker() {
    return !!(window.umami && typeof window.umami.track === 'function');
  }

  function collectUtmParams() {
    var params = {};
    var search = window.location && window.location.search ? window.location.search : '';
    if (!search || typeof URLSearchParams !== 'function') return params;

    var query = new URLSearchParams(search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (key) {
      var value = query.get(key);
      if (value) params[key] = value;
    });
    return params;
  }

  function truncate(value) {
    var normalized = normalizeString(value).replace(/\s+/g, ' ');
    return normalized.length > 80 ? normalized.slice(0, 80) : normalized;
  }

  function getHref(element) {
    return element && typeof element.getAttribute === 'function'
      ? normalizeString(element.getAttribute('href'))
      : '';
  }

  function detectEvent(element) {
    if (!element || typeof element.getAttribute !== 'function') return '';

    var explicit = normalizeString(element.getAttribute('data-analytics-event'));
    if (explicit) return explicit;

    var href = getHref(element).toLowerCase();
    if (!href) return '';
    if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) return 'whatsapp_click';
    if (href.indexOf('tel:') === 0) return 'phone_click';
    if (href.indexOf('mailto:') === 0) return 'email_click';
    if (
      href.indexOf('calendly.') !== -1 ||
      href.indexOf('acuityscheduling.') !== -1 ||
      href.indexOf('superprof.') !== -1 ||
      href.indexOf('book') !== -1 ||
      href.indexOf('reserv') !== -1
    ) {
      if (href.indexOf('http') === 0 && href.indexOf(window.location.hostname) === -1) {
        return 'external_booking_click';
      }
    }
    if (
      href.indexOf('/contacto/') !== -1 ||
      href.indexOf('#contacto-formulario') !== -1 ||
      href.indexOf('#valoracion') !== -1
    ) {
      return 'landing_cta_click';
    }
    return '';
  }

  function eventIsAllowed(eventName) {
    return STANDARD_EVENTS.indexOf(eventName) !== -1;
  }

  function trackConversion(eventName, params) {
    if (!eventIsAllowed(eventName) || !hasTracker()) return false;
    window.umami.track(eventName, params || {});
    return true;
  }

  function buildElementParams(element) {
    var params = collectUtmParams();
    var href = getHref(element);
    var label = truncate(element && element.textContent ? element.textContent : '');
    params.path = window.location && window.location.pathname ? window.location.pathname : '';
    if (href) params.href = href;
    if (label) params.label = label;
    return params;
  }

  function bindConversionEvents() {
    if (!document || typeof document.addEventListener !== 'function') return;

    document.addEventListener('click', function (event) {
      var target = event && event.target;
      var element = target && typeof target.closest === 'function'
        ? target.closest('a,button,[data-analytics-event]')
        : target;
      var eventName = detectEvent(element);
      if (!eventName) return;
      trackConversion(eventName, buildElementParams(element));
    });

    document.addEventListener('submit', function (event) {
      var form = event && event.target;
      if (!form || typeof form.matches !== 'function') return;
      if (!form.matches('form.offer-form, form[action*="/contact"]')) return;
      trackConversion('contact_form_submit', {
        path: window.location && window.location.pathname ? window.location.pathname : ''
      });
    });
  }

  function init() {
    if (_ready) return _ready;
    if (typeof fetch !== 'function') return Promise.resolve(null);

    _ready = fetch('/umami-config.json', {
      cache: 'no-store',
      credentials: 'same-origin'
    })
      .then(function (response) {
        return response && response.ok ? response.json() : null;
      })
      .then(installTracker)
      .catch(function () { return null; });

    return _ready;
  }

  window.UmamiAnalyticsCore = {
    init: init,
    trackConversion: trackConversion,
    getStandardEvents: function () { return STANDARD_EVENTS.slice(); }
  };
  bindConversionEvents();
  window.UmamiAnalyticsCore.ready = init();
})();
