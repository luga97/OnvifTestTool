// ----- React.js
import React from 'react';
// ----- material-ui - css framewrok for React
import {Paper, TextField, RaisedButton} from 'material-ui';
import {_i18n} from '../locales/_i18n';

import Run from '../onvif/onvify';

class LoginBlock extends React.Component {
  // ===== Constructor
  constructor(props) {
    super(props);
  }

  // ===== Handle Event
  handleChange(e){
  }
  handleClick(e){
    const {actions} = this.props;

    let hasUser    = false,
        correctPWD = false;

    // LOGIN
    Run('GetUsers')
      .then((res) => {
        res.User.v.forEach((u) => {
          if ( u.Username.v === this.refs.username.getValue() ){
            hasUser = true;
            if ( u.Password.v === this.refs.password.getValue() ){
              correctPWD = true;
              actions.logIn(true, true, '[SUCCESS] login success');
            }
          }

        });

        if (hasUser && !correctPWD)
          actions.logIn(false, true, '[FAILED] Sorry you have wrong password, please try again.');
        else if (!hasUser)
          actions.logIn(false, true, '[FAILED] Oh! Username doesn\'t exist, please try the other one.');
      })
      .catch((err) => {
        alert('[ERROR] ' + err);
      });
  }

  // ===== Render Component
  render(){
    return (
      <div id='login-block'>
        <Paper id='login-form'>
          <form action="/login" method="post" >
            <TextField ref='username'
                       floatingLabelText={_i18n.username}
                       onChange={this.handleChange.bind(this)} />

            <TextField ref='password'
                       floatingLabelText={_i18n.pwd}
                       type="password"
                       onChange={this.handleChange.bind(this)} />

            <TextField ref='ipaddress'
                       floatingLabelText="IP address"
                       disabled={true}
                       defaultValue={"192.168.3.123"}
                       onChange={this.handleChange.bind(this)} />
          </form>
        </Paper>

        <RaisedButton label={_i18n.login}
                      secondary={true}
                      fullWidth={true}
                      onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default LoginBlock;