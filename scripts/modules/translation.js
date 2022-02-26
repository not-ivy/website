const language = navigator.language || navigator.userLanguage;
const languages = ['en-US.json'];
const translation = await (await fetch(`/translations/${language}.json`)).json();

export {
  translation,
  languages
};
