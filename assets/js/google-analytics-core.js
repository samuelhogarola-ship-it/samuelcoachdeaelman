/* Compatibility URL for existing pages and cached main.js.
   Analytics is exclusively anonymous, cookieless Umami. */
(function () {
  'use strict';

  function loadUmamiAnalyticsCore() {
    if (window.UmamiAnalyticsCore) return window.UmamiAnalyticsCore.init();
    if (document.querySelector('script[data-samuel-umami-bootstrap]')) return;

    var script = document.createElement('script');
    script.defer = true;
    script.dataset.samuelUmamiBootstrap = 'true';
    script.src = '/assets/js/umami-analytics-core.js';
    document.head.appendChild(script);
  }

  // Older main.js versions still call these methods when cookie settings change.
  // They intentionally do nothing and never create a Google tracker or dataLayer.
  function noop() {}
  window.GoogleAnalyticsCore = {
    init: noop,
    grantConsent: noop,
    revokeConsent: noop,
    trackEvent: noop,
    trackPageview: noop
  };

  loadUmamiAnalyticsCore();
})();
