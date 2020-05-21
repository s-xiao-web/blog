import cssVars from 'css-vars-ponyfill';

export const THEME = {
  normal: {
    '--font-color': '#000',
    '--bg-color': '#000',
  },
  dark: {
    '--font-color': '#fff',
    '--bg-color': '#fff',
  },
};

export const setTheme = themeKey => {
  const themeKeys = Object.keys(THEME);
  let KEY = null;
  if (themeKeys.includes(themeKey)) {
    KEY = themeKey;
  } else {
    KEY = localStorage.theme || 'normal';
  }
  localStorage.theme = KEY;

  let styleLink = document.getElementById('theme-style');
  let hrefSrc = '/theme/normal.css';
  if (KEY === 'normal') {
    hrefSrc = '/theme/normal.css';
  } else if (KEY === 'dark') {
    hrefSrc = '/theme/dark.css';
  }

  if (styleLink) {
    styleLink.href = hrefSrc;
  } else {
    styleLink = document.createElement('link');
    styleLink.type = 'text/css';
    styleLink.rel = 'stylesheet';
    styleLink.id = 'theme-style';
    styleLink.href = hrefSrc;
    document.body.append(styleLink);
  }
  cssVars({
    onlyLegacy: false,
    variables: THEME[KEY],
  });
};