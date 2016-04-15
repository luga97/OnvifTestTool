// ----- React.js
import React from 'react';
// ----- material-ui - css framewrok for React
import {Paper, TextField, RaisedButton, FlatButton, Dialog, Snackbar,} from 'material-ui';
import {_i18n} from '../locales/_i18n';


class LoginDialog extends React.Component {
  // ===== Constructor
  constructor(props){
    super(props);
  }
  
  handleClose(){
    this.props.onCancel();
  }
  handleLogin(){
    this.props.onLogin(this.refs.ipaddress.getValue());
  }
  
  render(){
    const actions = [
      <FlatButton label={_i18n.cancel}
                  onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton label           = {_i18n.login}
                  primary         = {true}
                  keyboardFocused = {true}
                  onTouchTap      = {this.handleLogin.bind(this)}
      />,
    ];
    
    return(
      <Dialog actions = {actions}
              modal   = {false}
              open    = {this.props.open}
              onRequestClose = {this.handleClose.bind(this)}
      >
        <TextField floatingLabelText="IP Address" ref="ipaddress" />
      </Dialog>
    );
  }
}

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
  handleOpen(){
    this.setState({
      email     : this.refs.email.getValue(),
      password  : this.refs.password.getValue(),
    });
    
    this.setState({open: true});
  }
  handleClose(){
    this.setState({
      open      : false,
      snackOpen : false
    });
  }
  handleLogin(ipAddress){
    this.setState({
      ipAddress : ipAddress, 
      open      : false,
      snackOpen : true,
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
              </form>
            </Paper>
            
            <RaisedButton label={_i18n.login}
              onTouchTap={this.handleOpen.bind(this)}
              secondary={true} 
              fullWidth={true} 
            />
            
          </div>
        </div>
        
        <LoginDialog open         = {this.state.open}
                     onLogin      = {this.handleLogin.bind(this)}
                     onCancel     = {this.handleClose.bind(this)}
        />
        
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