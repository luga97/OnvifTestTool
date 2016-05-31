import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginBlockActions from '../actions/loginBlock';
import {LoginBlock} from '../components';

class LoginBlockPage extends Component {
  render(){
    const { loginBlock, actions } = this.props;
    return (
      <LoginBlock {...loginBlock} actions={actions} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginBlockActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBlockPage);