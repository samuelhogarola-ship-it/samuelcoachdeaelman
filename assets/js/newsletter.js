(function () {
  var forms = document.querySelectorAll('.newsletter-form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      var emailInput = form.querySelector('input[name="newsletter-email"]');
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
        body: JSON.stringify({ email: email, locale: locale })
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (msg) {
            if (data.status === 'already_confirmed') {
              msg.textContent = form.dataset.alreadyMsg || 'Ya estás suscrito. ¡Gracias!';
            } else {
              msg.textContent = form.dataset.successMsg || 'Revisa tu email para confirmar.';
            }
            msg.hidden = false;
          }
          form.reset();
        })
        .catch(function () {
          if (msg) { msg.textContent = form.dataset.errorMsg || 'Error. Inténtalo de nuevo.'; msg.hidden = false; }
          if (btn) btn.disabled = false;
        });
    });
  }
})();
