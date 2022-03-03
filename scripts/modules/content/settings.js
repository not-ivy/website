import { loadTheme, themes } from '../../theme';
import { loadTranslation, translationList } from '../translation';

const settings = document.getElementById('settings');

settings.innerHTML = /* html */`
<fieldset>
  <legend>Themes</legend>
  <div>
    <label>Select a theme:</label>
    <select id="theme-selector"></select>
  </div>
</fieldset>
<fieldset>
  <legend>Language</legend>
  <div>
    <label>Select a language:</label>
    <select id="language-selector"></select>
  </div>
</fieldset>
`;

const themeSelector = document.getElementById('theme-selector');

themeSelector.innerHTML += themes.map((fetchedTheme) => /* html */`<option value="${fetchedTheme}">${fetchedTheme}</option>`).join('');
themeSelector.removeChild(document.getElementById('theme-selector').firstChild);
themeSelector.value = localStorage.getItem('theme-name');

themeSelector.addEventListener('change', () => {
  loadTheme(`/themes/${themeSelector.value}`);
  localStorage.setItem('theme-name', themeSelector.value);
});

const languageSelector = document.getElementById('language-selector');
languageSelector.innerHTML += translationList.map((fetchedLanguage) => /* html */`<option value="${fetchedLanguage}">${fetchedLanguage}</option>`).join('');
languageSelector.value = localStorage.getItem('set-language') || `${navigator.language || navigator.userLanguage}`;

languageSelector.addEventListener('change', () => {
  loadTranslation(`/translations/${languageSelector.value}`);
  localStorage.setItem('set-language', languageSelector.value.split('.json')[0]);
});
