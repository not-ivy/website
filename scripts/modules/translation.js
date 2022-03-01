const language = navigator.language || navigator.userLanguage;
const translation = await (await fetch(`/translations/${language}.json`)).json();

const translatable = document.querySelectorAll('.translatable');

const refreshTranslate = () => {
  translatable.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.innerHTML = translation[item.id];
  });
};

refreshTranslate();

export {
  refreshTranslate,
  translation,
};
