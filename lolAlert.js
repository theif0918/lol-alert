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
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.72);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadein-lolalert 0.15s;
}
@keyframes fadein-lolalert {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.lol-alert-box {
  background: #171717;
  border: 2px solid #c8aa6e;
  box-shadow: 0 8px 32px #000c;
  border-radius: 0;
  min-width: 360px;
  max-width: 92vw;
  padding: 38px 32px 32px 32px;
  text-align: center;
  position: relative;
  font-family: 'Noto Sans KR','Malgun Gothic','sans-serif';
}
.lol-alert-title {
  font-size: 1.45rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.lol-alert-message {
  color: #b3b3b3;
  font-size: 1.05rem;
  margin-bottom: 24px;
  line-height: 1.5;
}
.lol-alert-message a {
  color: #44bbf7;
  text-decoration: underline;
}
.lol-alert-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  color: #fff;
  border: 1.5px solid #c8aa6e;
  border-radius: 0;
  padding: 4px 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter .1s;
}
.lol-alert-close:hover {
  filter: brightness(1.15);
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
