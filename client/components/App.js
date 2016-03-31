import React from 'react';
import {Paper, TextField, RaisedButton, FlatButton, Dialog} from 'material-ui';
import {loginPanel, loginButton} from './styles/login';

class App extends React.Component {
  // ===== Constructor
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  
  // ===== Handle Event
  handleLogin(){
    var email     = this.refs.email.getValue();
    var password  = this.refs.password.getValue();
    var ipaddress = this.refs.ipaddress.getValue();
    alert("> email: " + email + ", password: " + password + ", ipaddress: " + ipaddress);
    this.setState({open: false});
  }
  handleOpen(){
    this.setState({open: true});
  }
  handleClose(){
    this.setState({open: false});
  }
  
  // ===== Render Component
  render(){
    const actions = [
      <FlatButton label="Cancel"
        onMouseDown={this.handleClose.bind(this)}
      />,
      <FlatButton label="Login"
        primary={true}
        keyboardFocused={true}
        onMouseDown={this.handleLogin.bind(this)}
      />,
    ];
    
    return (
      <Paper style={loginPanel}>
        <h1 style={{textAlign:"center"}}><span>Login</span></h1>
        <form action="/login" method="post" >
          
          <TextField floatingLabelText="Email" ref="email" />
          <TextField floatingLabelText="Password" ref="password" type="password" />
          
          <div style={loginButton}>
            <RaisedButton label="Login" 
              onMouseDown={this.handleOpen.bind(this)} 
              secondary={true} 
              fullWidth={true} 
            />
          </div>
          <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose.bind(this)}
          >
            <TextField floatingLabelText="IP Address" ref="ipaddress" />
          </Dialog>
          
        </form>
      </Paper>
    );
  }
}

export default App;