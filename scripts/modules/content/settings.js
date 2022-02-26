import { theme, themes } from "../../theme.js";
const settings = document.getElementById('settings');

document.getElementById('settings-button').addEventListener('click', () => {
  for (let item of document.getElementsByClassName('content')) {
    item.style.display = 'none';
  }
  settings.style.display = 'block';
});

settings.innerHTML = /*html*/`
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
`

document.getElementById('theme-selector').innerHTML += themes.map(theme => /*html*/`<option value="${theme}">${theme}</option>`).join('');

document.getElementById('theme-selector').addEventListener('change', () => {
  fetch(`/themes/${document.getElementById('theme-selector').value}`)
    .then(response => response.text())
    .then(data => {
      theme.load(data);
      document.getElementById('theme-selector').value = document.getElementById('theme-selector').value;
      document.getElementById('theme-preview').innerHTML = data;
    });
});