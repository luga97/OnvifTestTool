// ----- ReactJS
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
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
// ----- Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// --
import {intlFormat} from './locales/config/intlFormat';
// ----- Self Components
import { OnvifTestTool } from './containers';
// --
import store from './store';

// ----- Sass require
require("./style/body.scss");
require("./style/login.scss");
// --

ReactDOM.render(
    <IntlProvider {...intlFormat} >
      <MuiThemeProvider>
        <Provider store={store}>
          <OnvifTestTool intlFormat={intlFormat} />
        </Provider>
      </MuiThemeProvider>
    </IntlProvider>,
    document.getElementById('onvif-test-tool')
);