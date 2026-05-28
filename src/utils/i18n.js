const dict = {
  'en-US': {
    'app.greeting': 'Hello',
    'app.farewell': 'Goodbye',
    'nav.home': 'Home',
    'nav.settings': 'Settings',
  },
};

let currentLocale = 'en-US';

export function setLocale(locale) {
  currentLocale = locale;
}

export function t(key) {
  const table = dict[currentLocale] || {};
  return table[key] || key;
}
