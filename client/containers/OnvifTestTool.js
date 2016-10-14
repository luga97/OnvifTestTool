import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/actionCreator';

import {LocaleSelector, MainComponent} from '../components';

class OnvifTestTool extends Component {
  render() {
    const {intlFormat, camStore, actions} = this.props;

    return (
      <div>
        <MainComponent camStore={camStore}
                       actions={actions}/>
        <LocaleSelector {...intlFormat} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnvifTestTool);