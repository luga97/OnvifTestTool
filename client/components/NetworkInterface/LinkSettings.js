import React, {Component} from 'react';
import { Toggle, TextField } from 'material-ui';

export default class LinkSettings extends Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    if ( this.props.adminOrOper == 'admin' )
      this.props.toggleASAN(this.props.id, value);
    else if ( this.props.adminOrOper == 'oper' )
      this.props.toggleOSAN(this.props.id, value);
  }
  
  render(){
    const {settings} = this.props;
    return(
      <div>
        <Toggle name="autonegotation"
                label="AutoNegotation"
                labelPosition="right"
                toggled={settings.autonegotation}
                onToggle={this.handleToggle.bind(this)} />
                
        <TextField floatingLabelText="Speed" 
                   ref="speed" 
                   value={settings.speed} />
        <TextField floatingLabelText="Duplex" 
                   ref="duplex" 
                   value={settings.duplex} />
      </div>
    );
  }
}