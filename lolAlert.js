// League of Legends-style Alert Modal
// lolAlert.js 1.0.4

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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z‑index: 10000;
}

.lol-alert-box {
  position: relative;
  background: linear-gradient(180deg, #0A1F2E 0%, #00152A 100%);
  border: 1px solid #C8AA6E;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 0;
  padding: 24px 24px 64px;
  min-width: 360px;
  max-width: 90vw;
  font-family: 'Noto Sans KR','Malgun Gothic','sans-serif';
}

.lol-alert-title {
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
  text-align: center;
}

.lol-alert-message {
  margin: 0 0 32px;
  font-size: 0.9375rem;
  color: #B3B3B3;
  text-align: center;
  line-height: 1.4;
}

/* 상단 ‘×’ 버튼 제거 */
.lol-alert-close {
  display: none;
}

.lol-alert-action {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #F5D06F 0%, #C8AA6E 100%);
  border: none;
  color: #13151C;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 8px 24px;
  cursor: pointer;
}

.lol-alert-action:hover {
  background: linear-gradient(180deg, #ECD47D 0%, #D4AF37 100%);
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
