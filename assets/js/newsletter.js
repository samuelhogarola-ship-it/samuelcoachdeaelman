(function () {
  var NEWSLETTER_ENDPOINT = 'https://hocdlmxzghwymamientc.supabase.co/functions/v1/newsletter-subscribe';
  var forms = document.querySelectorAll('.newsletter-form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      var emailInput = form.querySelector('input[name="newsletter-email"]');
      var btn = form.querySelector('button[type="submit"]');
      var section = form.closest('.newsletter-section');
      var msg = form.querySelector('.newsletter-msg') || (section && section.querySelector('.newsletter-msg'));

      var email = emailInput ? emailInput.value.trim() : '';
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (msg) { msg.textContent = form.dataset.errorMsg || 'Email inválido.'; msg.hidden = false; }
        return;
      }

      if (btn) btn.disabled = true;

      var locale = form.dataset.locale || 'es';

      fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, locale: locale })
      })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (data) {
            if (!res.ok) throw new Error(data.error || 'newsletter_failed');
            return data;
          });
        })
        .then(function () {
          if (msg) {
            msg.textContent = form.dataset.successMsg || 'Revisa tu email para confirmar.';
            msg.hidden = false;
          }
          form.reset();
          if (btn) btn.disabled = false;
        })
        .catch(function () {
          if (msg) { msg.textContent = form.dataset.errorMsg || 'Error. Inténtalo de nuevo.'; msg.hidden = false; }
          if (btn) btn.disabled = false;
        });
    });
  }
})();
