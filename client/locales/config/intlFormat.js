import messages from './messages';
import cookie from 'react-cookie';
// React Intl requires that locale data be loaded and added to the library in order to support a locale. 
import {addLocaleData} from 'react-intl';
// Have to load locales from react-intl
import zh from 'react-intl/locale-data/zh';
addLocaleData(zh);

var locale = cookie.load('usrLocale');
var strings = Object.assign(messages['en'], messages[locale]);

export const intlFormat = {
  locale   : locale,
  messages : strings,
}