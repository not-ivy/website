const language = localStorage.getItem('set-language') || navigator.language || navigator.userLanguage;
const translationList = await (await fetch('/api/translations.json')).json();
let translation;
try {
  translation = await (await fetch(`/translations/${language}.json`)).json();
} catch (e) {
  translation = await (await fetch('/translations/en-US.json')).json();
}

const translatable = document.querySelectorAll('.translatable');

const refreshTranslate = () => {
  translatable.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.innerHTML = translation[item.id];
  });
};

const loadTranslation = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      translation = data;
      refreshTranslate();
      return data;
    });
};

const getTranslation = () => translation;

refreshTranslate();

export {
  refreshTranslate,
  loadTranslation,
  getTranslation,
  translationList,
};
