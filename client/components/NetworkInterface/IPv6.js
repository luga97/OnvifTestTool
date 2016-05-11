import React from 'react';
import {Toggle, TextField} from 'material-ui';

export default class IPv6 extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    if ( event.target.name == 'enable' )
      this.props.toggleIPv6(this.props.id, value);
    else if (event.target.name == 'dhcp')
      this.props.toggleIPv6DHCP(this.props.id, value);
    else if (event.target.name == 'acceptrouteradvert')
      this.props.toggleIPv6ARA(this.props.id, value);
  }

  render(){
    const {enable, dhcp, acceptrouteradvert, address, prefixlength} = this.props;
    return(
      <div>
        <Toggle name="enable"
                label="Enable"
                labelPosition="right"
                toggled={enable}
                onToggle={this.handleToggle.bind(this)} />
                
        <Toggle name="dhcp"
                label="DHCP"
                labelPosition="right"
                toggled={dhcp}
                onToggle={this.handleToggle.bind(this)} />
                
        <Toggle name="acceptrouteradvert"
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