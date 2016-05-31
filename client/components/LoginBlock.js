// ----- React.js
import React from 'react';
// ----- material-ui - css framewrok for React
import {Paper, TextField, RaisedButton} from 'material-ui';
import {_i18n} from '../locales/_i18n';
// ----- Action Type
import { USERNAME_CHANGE, PASSWORD_CHANGE, IPADDRESS_CHANGE } from '../actions/loginBlock';

class LoginBlock extends React.Component {
  // ===== Constructor
  constructor(props) {
    super(props);
  }
  
  // ===== Handle Event
  handleChange(event){
    const {actions} = this.props;
    actions.contentChange( event.target.name, event.target.value );
  }
  
  // ===== Render Component
  render(){
    const { username, password, ipAddress } = this.props;
    
    return (
      <div className="grid">
        <div className="grid__col grid__col--1-of-5 grid__col--centered">
          <Paper id='login-form'>
            <form action="/login" method="post" >
              <TextField name={USERNAME_CHANGE}
                         floatingLabelText={_i18n.username} 
                         value={username}
                         onChange={this.handleChange.bind(this)} />
                         
              <TextField name={PASSWORD_CHANGE}
                         floatingLabelText={_i18n.pwd} 
                         type="password" 
                         value={password}
                         onChange={this.handleChange.bind(this)} />
                         
              <TextField name={IPADDRESS_CHANGE}
                         floatingLabelText="IP address"
                         value={ipAddress}
                         onChange={this.handleChange.bind(this)} />
            </form>
          </Paper>
          
          <RaisedButton label={_i18n.login}
                        secondary={true} 
                        fullWidth={true} />
          
        </div>
      </div>
    );
  }
}

export default LoginBlock;