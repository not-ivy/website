import anime from 'animejs';
const home = document.getElementById('home');

home.innerHTML = /* html */`
<div class="title"><h1>Home</h1></div>
<p>
  Welcome to my website! I create programs and website on my free time, and I'm always looking for new projects to work on.<br>
  I am familar with HTML, CSS, TypeScript, JavaScript, Bash Scripting, and Kotlin. <br>
  I am currently learning rust. <br>
  Use the buttons above to navigate to the different sections of my website.
</p>

<hr class="low">
<h2>Contact</h2>
<p>
  Discord: i-spin#2391 (&lt;8 hours)
  <br>
  Email: <a href="mailto:me@i-sp.in">me@i-sp.in</a> (&lt;10 hours)
</p>
<hr class="low">
<h2>Links</h2>
<p>
  GitHub: <a href="https://github.com/i-spin/">i-spin</a>
  <br>
  PGP Key: <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32">2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32</a>
</p>
`;

anime({
  targets: 'svg',
  direction: 'alternate',
  rotate: {
    value: () => anime.random(0, 180),
    duration: 1800,
    easing: 'easeInOutSine',
  },
  loop: true,
});