// League of Legends-style Alert Modal
// lolAlert.js v1.0.7

(function (global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory();
  } else {
    global.lolAlert = factory();
  }
}(typeof window !== "undefined" ? window : this, function () {

  var initialized = false;

  function injectTemplate() {
    if (initialized) return;
    initialized = true;

    // CSS
    var style = document.createElement('style');
    style.textContent = `
.lol-alert-bg {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
.lol-alert-box {
  position: relative;
  background: linear-gradient(180deg, #061822 0%, #00131C 100%);
  border: 2px solid #8C7837;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  border-radius: 0;
  padding: 20px;
  padding-bottom: 40px; /* space for button */
  width: fit-content;      /* auto-expand horizontally */
  max-width: 90vw;         /* prevent too wide */
  min-width: 280px;        /* maintain sensible minimum */
  font-family: 'Noto Sans KR','Malgun Gothic','sans-serif';
}
.lol-alert-box::before {
  content: "";
  position: absolute;
  top: -6px;
  bottom: -6px;
  left: 12px;
  right: 12px;
  background: linear-gradient(180deg, #061822 0%, #00131C 100%);
  border: 2px solid #8C7837;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  border-radius: 0;
  z-index: -1;
}
.lol-alert-title {
  margin: 0;
  padding: 0 0 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #EDEBE8;
  text-align: center;
}
.lol-alert-message {
  margin: 0;
  padding: 0 0 16px;
  font-size: 0.9375rem;
  color: #8A8A8A;
  text-align: center;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}
.lol-alert-action {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #5E482F;
  /* gradient border top-to-bottom, darker at bottom */
  border: 2px solid;
  border-image: linear-gradient(180deg, #C8AA6E 0%, #8C7837 100%) 1;
  color: #C8AA6E;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 8px 16px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  width: auto;
  white-space: nowrap;
}
.lol-alert-action:hover {
  background: #67502E;
}
`;
    document.head.appendChild(style);

    // HTML structure
    var div = document.createElement('div');
    div.innerHTML =
      '<div class="lol-alert-bg" id="lol-alert-bg" style="display:none;">' +
      '  <div class="lol-alert-box" id="lol-alert-box">' +
      '    <div class="lol-alert-title" id="lol-alert-title"></div>' +
      '    <div class="lol-alert-message" id="lol-alert-message"></div>' +
      '    <button class="lol-alert-action" id="lol-alert-action">확인</button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(div);
  }

  // Alert API
  function lolAlert(title, message) {
    injectTemplate();
    var bg = document.getElementById('lol-alert-bg');
    document.getElementById('lol-alert-title').textContent = title || '';
    document.getElementById('lol-alert-message').innerHTML = message || '';
    bg.style.display = 'flex';

    function close() {
      bg.style.display = 'none';
      document.removeEventListener('keydown', esc);
    }
    function esc(e) {
      if (e.key === 'Escape') close();
    }

    document.getElementById('lol-alert-action').onclick = close;
    bg.onclick = function(e) { if (e.target === bg) close(); };
    document.addEventListener('keydown', esc);
  }

  return lolAlert;
}));
