// ----- React.js
import React from 'react';
// ----- material-ui - css framewrok for React
import {Paper, TextField, RaisedButton, Snackbar,} from 'material-ui';
import {_i18n} from '../locales/_i18n';

class LoginBlock extends React.Component {
  // ===== Constructor
  constructor(props) {
    super(props);
    this.state = {
      email     : '',
      password  : '',
      ipAddress : '',
      open      : false,
      snackOpen : false,
    };
  }
  
  // ===== Handle Event
  handleLogin(){
    this.setState({
      email     : this.refs.email.getValue(),
      password  : this.refs.password.getValue(),
      ipAddress : this.refs.password.getValue(),
      open      : true,
      snackOpen : true,
    });
  }
  handleClose(){
    this.setState({
      open      : false,
      snackOpen : false
    });
  }
  
  // ===== Render Component
  render(){
    return (
      <div>
        <div className="grid">
          <div className="grid__col grid__col--1-of-5 grid__col--centered">
            <Paper id='login-form'>
              <form action="/login" method="post" >
                <TextField floatingLabelText={_i18n.user} ref="email" />
                <TextField floatingLabelText={_i18n.pwd} ref="password" type="password" />
                <TextField floatingLabelText="IP Address" ref="ipaddress" />
              </form>
            </Paper>
            
            <RaisedButton label={_i18n.login}
              onTouchTap={this.handleLogin.bind(this)}
              secondary={true} 
              fullWidth={true} 
            />
            
          </div>
        </div>
        
        <Snackbar
          open             = {this.state.snackOpen}
          message          = {"> Login: \"" + this.state.ipAddress + "\" with " + this.state.email + " ."}
          autoHideDuration = {4000}
          onRequestClose   = {this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

export default LoginBlock;