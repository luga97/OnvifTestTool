import React from 'react';
import ReactDOM from 'react-dom';

// ----- Self Components
import LoginBlock from './components/LoginBlock';
import LocaleSelector from './components/LocaleSelector';
// --

// ----- Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// --
// ----- Intl for React by react-intl
import {IntlProvider} from 'react-intl';
// --
import {intlFormat} from './intlFormat';

// ----- Sass require
require("./style/body.scss");
require("./style/login.scss");
require("./style/_grid.scss");
// --

ReactDOM.render( 
    <IntlProvider {...intlFormat} >
      <LoginBlock />
    </IntlProvider>,
    document.getElementById('login-block')
);

ReactDOM.render(
    <IntlProvider {...intlFormat} >
      <LocaleSelector {...intlFormat} />
    </IntlProvider>,
    document.getElementById('locale-block')
);