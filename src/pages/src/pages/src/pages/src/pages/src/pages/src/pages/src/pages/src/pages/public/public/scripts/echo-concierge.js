(function () {
  const btn = document.createElement('button');
  btn.id = 'echoBtn';
  btn.style.position = 'fixed';
  btn.style.right = '18px';
  btn.style.bottom = '18px';
  btn.style.padding = '10px 14px';
  btn.style.borderRadius = '999px';
  btn.style.border = 'none';
  btn.style.background = '#0b74de';
  btn.style.color = '#ffffff';
  btn.style.fontSize = '0.9rem';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = 9999;
  btn.textContent = 'Ask Echo';
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(btn));

  const modal = document.createElement('div');
  modal.id = 'echoModal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.inset = '0';
  modal.style.background = 'rgba(0,0,0,0.6)';
  modal.style.zIndex = 10000;
  modal.innerHTML = `
    <div style="max-width:520px;margin:80px auto;background:#fff;padding:20px;border-radius:12px;position:relative;">
      <button id="closeEcho" style="position:absolute;right:14px;top:10px;border:none;background:transparent;font-size:18px;cursor:pointer;">✕</button>
      <h3>Echo — AI Concierge</h3>
      <p>Ask Echo how Rein can upgrade your business or explain the $99 ReinStarter.</p>
      <input id="echoInput" placeholder="Type your question…" style="width:100%;padding:10px;margin-top:8px;border-radius:8px;border:1px solid #eee" />
      <button id="echoSend" style="margin-top:10px;padding:8px 14px;border-radius:8px;border:none;background:#0b74de;color:#fff;cursor:pointer;">Ask</button>
      <div id="echoReply" style="margin-top:12px;font-size:0.9rem;color:#333;"></div>
    </div>
  `;
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(modal));

  document.addEventListener('click', (e) => {
    if (e.target.id === 'echoBtn') {
      modal.style.display = 'block';
    }
    if (e.target.id === 'closeEcho' || e.target === modal) {
      modal.style.display = 'none';
    }
    if (e.target.id === 'echoSend') {
      const input = document.getElementById('echoInput');
      const reply = document.getElementById('echoReply');
      const q = input.value.trim();
      if (!q) return;
      reply.textContent = 'Thinking…';
      setTimeout(() => {
        reply.textContent =
          'Echo would start by scanning your site and Google presence, then recommend a ReinStarter or custom automation.';
      }, 700);
    }
  });
})();
