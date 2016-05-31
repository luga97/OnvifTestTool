import React from 'react';
import {Toggle, TextField} from 'material-ui';
import { TOGGLE_IPV6, TOGGLE_IPV6_DHCP, TOGGLE_IPV6_ARA } from '../../actions/networkInterface';

export default class IPv6 extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    const { id, actions } = this.props ;
    actions.toggleEvent(event.target.name, id, value);
  }

  render(){
    const {enable, dhcp, acceptrouteradvert, address, prefixlength} = this.props;

    return(
      <div>
        <Toggle name={TOGGLE_IPV6}
                label="Enable"
                labelPosition="right"
                toggled={enable}
                onToggle={this.handleToggle.bind(this)} />
                
        <Toggle name={TOGGLE_IPV6_DHCP}
                label="DHCP"
                labelPosition="right"
                toggled={dhcp}
                onToggle={this.handleToggle.bind(this)} />
                
        <Toggle name={TOGGLE_IPV6_ARA}
                label="AcceptRouterAdvert"
                labelPosition="right"
                toggled={acceptrouteradvert}
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