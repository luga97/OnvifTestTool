import React from 'react';
import { Toggle, MenuItem, Paper, TextField, Divider} from 'material-ui';
import IPvTabs from './IPvTabs';
import Link from './Link';

export default class Ethernet extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    if ( event.target.name == 'enable' )
      this.props.actions.toggleEnable(this.props.id, value);
  }
  
  render() {
    const {id, ethernet, actions} = this.props;
    return(
      <div>
          <Toggle name="enable"
                  label="Enable"
                  labelPosition="right"
                  toggled={ethernet.enable}
                  onToggle={this.handleToggle.bind(this)} />
                  
          <fieldset>
            <legend>Info</legend>
            <TextField floatingLabelText="Name" 
                       ref="name"
                       value={ethernet.info.name} />
            <TextField floatingLabelText="HwAddress" 
                       ref="hwaddress" 
                       value={ethernet.info.hwaddress} />
            <TextField floatingLabelText="MTU" 
                       ref="mtu" 
                       value={ethernet.info.mtu}/>
          </fieldset>
          
          <fieldset>
            <legend>Link</legend>
            <Link id={id} 
                  link={ethernet.link} 
                  actions={actions} />
          </fieldset>
          
          <IPvTabs id={id}
                   ipv4={ethernet.ipv4}
                   ipv6={ethernet.ipv6}
                   actions={actions} />
            
      </div>
    );
  }  
}