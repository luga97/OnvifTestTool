import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NetworkInterfaceActions from '../actions/networkInterface';
import {NetworkInterface} from '../components';

class NetworkInterfacePage extends Component {
  render(){
    const { networkInterface, actions } = this.props;
    return (
      <NetworkInterface {...networkInterface} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NetworkInterfaceActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkInterfacePage);