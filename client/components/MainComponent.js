// ----- React.js
import React from 'react';

import {Snackbar} from 'material-ui';

import {_i18n} from '../locales/_i18n';

import {LoginBlock, DeviceBindingTest} from '../components';

class MainComponent extends React.Component {
  // ===== Constructor
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      open: nextProps.camStore.snackbar.show
    });
  }

  // ===== Render Component
  render(){
    const { camStore, actions } = this.props;
    const close = () => this.setState({open: false});
    return (
      <div>
        {
          (!camStore.login) ?
          <LoginBlock actions={actions}/> :
          <DeviceBindingTest />
        }
        <Snackbar
          open={this.state.open}
          message={camStore.snackbar.msg}
          autoHideDuration={3000}
          onRequestClose={close} />
      </div>
    );
  }
}

export default MainComponent;