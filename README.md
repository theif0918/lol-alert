<h1>lol-alert</h1>

<p>
  League of Legends 계정 제한 알림창 스타일의 웹 Alert 라이브러리
</p>

<h2>Features</h2>
<ul>
  <li>LoL 계정 제한 알림창 디자인</li>
  <li>한 줄 호출</li>
  <li>Vanilla JS, 별도 의존성 없음</li>
  <li>CSS/JS 커스터마이즈 가능</li>
</ul>

<h2>Installation</h2>
<p>npm</p>
<pre><code>npm install lol-alert
</code></pre>
<p>CDN</p>
<pre><code>&lt;script src="https://unpkg.com/lol-alert"&gt;&lt;/script&gt;
</code></pre>

<h2>Usage</h2>
<p>ESM</p>
<pre><code>import lolAlert from 'lol-alert';

lolAlert(
  '계정 이용 제한',
  '이 계정은 2021년 1월 10일까지 이용이 정지되었습니다.&lt;br&gt;자세한 정보는 &lt;a href="#"&gt;고객지원 문의하기&lt;/a&gt;를 이용해 주세요.'
);
</code></pre>
<p>CDN 예제</p>
<pre><code>&lt;script src="https://unpkg.com/lol-alert"&gt;&lt;/script&gt;
&lt;script&gt;
  lolAlert('타이틀', 'HTML 사용 가능');
&lt;/script&gt;
</code></pre>

<h2>Customization</h2>
<ul>
  <li>메시지에 HTML 사용 가능</li>
  <li>CSS 및 JS 수정으로 디자인 변경 가능</li>
  <li>배경 클릭, ESC 키로 닫기</li>
</ul>

<h2>License</h2>
<p>MIT</p>

<h2>Author</h2>
<p>theif0918</p>
