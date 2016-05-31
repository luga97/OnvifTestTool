import React, {Component} from 'react';
import { Toggle, TextField } from 'material-ui';
import { TOGGLE_ASAN, TOGGLE_OSAN } from '../../actions/networkInterface';

export default class LinkSettings extends Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    const { id, actions } = this.props ;
    actions.toggleEvent(event.target.name, id, value);
  }
  
  render(){
    const { adminOrOper, settings} = this.props;
    const TOGGLE_AN = adminOrOper === "admin" ? TOGGLE_ASAN : TOGGLE_OSAN ;
    
    return(
      <div>
        <Toggle name={TOGGLE_AN}
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