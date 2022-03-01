const themes = await (await fetch('/themes/themes.json')).json();

// eslint-disable-next-line no-undef
const theme = new Theme();
theme.install();
theme.start();

export {
  themes,
  theme,
};
