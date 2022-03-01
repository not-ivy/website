import { theme, themes } from '../../theme';

const settings = document.getElementById('settings');

settings.innerHTML = /* html */`
<fieldset>
  <legend>Themes</legend>
  <div>
    <label>Select a theme:</label>
    <select id="theme-selector"></select>
  </div>
  <div>
    <label>Preview:</label>
    <div id="theme-preview"></div>
  </div>
</fieldset>
`;

document.getElementById('theme-selector').innerHTML += themes.map((fetchedTheme) => /* html */`<option value="${fetchedTheme}">${fetchedTheme}</option>`).join('');
document.getElementById('theme-selector').removeChild(document.getElementById('theme-selector').firstChild);
document.getElementById('theme-selector').value = localStorage.getItem('theme-name');

document.getElementById('theme-selector').addEventListener('change', () => {
  fetch(`/themes/${document.getElementById('theme-selector').value}`)
    .then((response) => response.text())
    .then((data) => {
      theme.load(data);
      document.getElementById('theme-selector').value = document.getElementById('theme-selector').value;
      document.getElementById('theme-preview').innerHTML = data;
      localStorage.setItem('theme-name', document.getElementById('theme-selector').value);
    });
});
