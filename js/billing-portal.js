(function () {
  var params = new URLSearchParams(window.location.search);
  var checkoutSessionId = params.get('session_id');
  var block = document.getElementById('billing-portal-block');
  var btn = document.getElementById('billing-portal-btn');
  if (!checkoutSessionId || !block || !btn) return;

  block.style.display = 'block';

  btn.addEventListener('click', function () {
    btn.disabled = true;
    var original = btn.textContent;
    btn.textContent = 'Opening…';

    fetch('/api/create-billing-portal-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: checkoutSessionId }),
    })
      .then(function (response) {
        return response.text().then(function (raw) {
          var data = {};
          try {
            data = raw ? JSON.parse(raw) : {};
          } catch (_) {}
          if (!response.ok) {
            throw new Error(data.message || data.error || 'Request failed');
          }
          return data;
        });
      })
      .then(function (data) {
        if (data.url) {
          window.location.assign(data.url);
          return;
        }
        throw new Error('No portal URL');
      })
      .catch(function (err) {
        alert('Could not open billing portal. ' + (err && err.message ? err.message : ''));
        btn.disabled = false;
        btn.textContent = original;
      });
  });
})();
