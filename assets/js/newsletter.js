(function () {
  var forms = document.querySelectorAll('.newsletter-form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      var emailInput = form.querySelector('input[name="newsletter-email"]');
      var companyInput = form.querySelector('input[name="company"]');
      var btn = form.querySelector('button[type="submit"]');
      var msg = form.querySelector('.newsletter-msg');

      var email = emailInput ? emailInput.value.trim() : '';
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (msg) { msg.textContent = form.dataset.errorMsg || 'Email inválido.'; msg.hidden = false; }
        return;
      }

      if (btn) btn.disabled = true;

      var locale = form.dataset.locale || 'es';

      fetch('/functions/v1/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          locale: locale,
          company: companyInput ? companyInput.value.trim() : '',
          page_path: window.location.pathname
        })
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (!result.ok) throw new Error('Newsletter request failed');
          var data = result.data || {};
          if (msg) {
            if (data.status === 'already_confirmed') {
              msg.textContent = form.dataset.alreadyMsg || 'Ya estás suscrito. ¡Gracias!';
            } else {
              msg.textContent = form.dataset.successMsg || 'Solicitud recibida. Te añadiré a la lista del newsletter.';
            }
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
