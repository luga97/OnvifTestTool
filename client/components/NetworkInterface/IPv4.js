import React from 'react';
import {Toggle, TextField} from 'material-ui';
import { TOGGLE_IPV4, TOGGLE_IPV4_DHCP } from '../../actions/networkInterface';

export default class IPv4 extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    const { id, actions } = this.props ;
    actions.toggleEvent(event.target.name, id, value);
  }

  render(){
    const {enable, dhcp, address, prefixlength} = this.props;
    return(
      <div>
        <Toggle name={TOGGLE_IPV4}
                label="Enable"
                labelPosition="right"
                toggled={enable}
                onToggle={this.handleToggle.bind(this)} />
                
        <Toggle name={TOGGLE_IPV4_DHCP}
                label="DHCP"
                labelPosition="right"
                toggled={dhcp}
                onToggle={this.handleToggle.bind(this)} />
                
        <TextField floatingLabelText="Address" 
                   ref="address" 
                   value={address}
        />
        <br />
        <TextField floatingLabelText="PrefixLength" 
                   ref="prefixlength" 
                   value={prefixlength}
         />
      </div>
    );
  }
}