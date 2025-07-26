// League of Legends-style Alert Modal
// lolAlert.js

(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    global.lolAlert = factory();
  }
}(typeof window !== "undefined" ? window : this, function () {

  // DOM/CSS
  let initialized = false;
  function injectTemplate() {
    if (initialized) return;
    initialized = true;

    // CSS
    const style = document.createElement('style');
    style.textContent = `
.lol-alert-bg {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
.lol-alert-box {
  background: #1E2023;
  border: 1px solid #D4AF37;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 0;
  padding: 20px 24px 24px;
  min-width: 320px;
  max-width: 85vw;
  position: relative;
}
.lol-alert-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #FFFFFF;
  text-align: left;
}
.lol-alert-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: 1px solid #D4AF37;
  padding: 2px 6px;
  font-size: 0.75rem;
  line-height: 1;
  color: #FFFFFF;
  cursor: pointer;
}
.lol-alert-message {
  margin: 12px 0 20px;
  font-size: 0.9375rem;
  color: #B3B3B3;
  line-height: 1.4;
}
.lol-alert-action {
  display: inline-block;
  margin: 0 auto;
  padding: 6px 16px;
  border: 1px solid #D4AF37;
  background: transparent;
  font-size: 0.875rem;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
}
.lol-alert-action:hover {
  background: rgba(212,175,55,0.1);
}
`;

    document.head.appendChild(style);

    // DOM
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="lol-alert-bg" id="lol-alert-bg" style="display:none;">
        <div class="lol-alert-box" id="lol-alert-box">
          <div class="lol-alert-title" id="lol-alert-title"></div>
          <div class="lol-alert-message" id="lol-alert-message"></div>
          <button class="lol-alert-close" id="lol-alert-close">닫기</button>
        </div>
      </div>
    `;
    document.body.appendChild(div);
  }

  // alert
  function lolAlert(title, message) {
    injectTemplate();

    const bg = document.getElementById('lol-alert-bg');
    const box = document.getElementById('lol-alert-box');
    document.getElementById('lol-alert-title').textContent = title || '';
    document.getElementById('lol-alert-message').innerHTML = message || '';
    bg.style.display = 'flex';

    function close() { bg.style.display = 'none'; }
    document.getElementById('lol-alert-close').onclick = close;
    bg.onclick = e => { if (e.target === bg) close(); };
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc);}
    });
  }

  // API return
  return lolAlert;
}));
