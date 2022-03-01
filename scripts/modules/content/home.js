const home = document.getElementById('home');

home.style.display = 'block';

document.getElementById('home-button').addEventListener('click', () => {
  for (let item of document.getElementsByClassName('content')) {
    item.style.display = 'none';
  }
  home.style.display = 'block';
});

home.innerHTML = /*html*/`
<div class="title"><h1>Home</h1></div>
<p>
  Welcome to my website! I create programs and website on my free time, and I'm always looking for new projects to work on.<br>
  Use the buttons above to navigate to the different sections of my website.
</p>

<hr class="low">
<h2>Contact</h2>
<p>
  Discord: sourTaste000#2391 (&lt;8 hours)
  <br>
  Email: <a href="mailto:sourtaste000@i-sp.in">sourtaste000@i-sp.in</a> (&lt;10 hours)
 <br>
  Keybase: <a href="https://keybase.io/sussyimpostor">sussyimpostor</a> (&lt;24 hours)
</p>
<hr class="low">
<h2>Links</h2>
<p>
  GitHub: <a href="https://github.com/sourTaste000/">sourTaste000</a>
  <br>
  PGP Key: <a href="https://keys.openpgp.org/vks/v1/by-fingerprint/2377F28C8BDC3BB7CDE8337CD2A1D05E1B5EAA32">D2A1 D05E 1B5E AA32</a>
</p>
`;