const themes = await (await fetch('/api/themes.json')).json();

// eslint-disable-next-line no-undef
const theme = new Theme();
theme.install();
theme.start();

const loadTheme = (url) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      theme.load(data);
      return data;
    });
};

export {
  themes,
  theme,
  loadTheme,
};
