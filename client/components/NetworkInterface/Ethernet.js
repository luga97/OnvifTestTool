import React from 'react';
import { Toggle, MenuItem, Paper, TextField, Divider} from 'material-ui';
import IPvTabs from './IPvTabs';
import Link from './Link';
import { TOGGLE_ENABLE } from '../../actions/networkInterface';

export default class Ethernet extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleToggle(event, value){
    const { id, actions } = this.props ;
    actions.toggleEvent(event.target.name, id, value);
  }
  
  render() {
    const {id, ethernet, actions} = this.props;
    return(
      <div>
          <Toggle name={TOGGLE_ENABLE}
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