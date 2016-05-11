import React from 'react';
import { Toggle, MenuItem, Paper, TextField, SelectField, Divider} from 'material-ui';
import Ethernet from './Ethernet';

export default class NetworkInterface extends React.Component{
  constructor(props){
    super(props);
  }
  
  handleChange(event, value){
    this.props.actions.selectEthernet(value);
  }
  handleToggle(event, value){
    if ( event.target.name == 'enable' )
      this.props.actions.toggleEnable(this.props.id, value);
  }
  
  render() {
    const {id, ethernets, actions} = this.props;
    const _Ethernet = ethernets.map( ethernet => 
                        <MenuItem key={ethernet.id} 
                                  value={ethernet.id} 
                                  primaryText={ethernet.info.name} /> );
    return(
      <div className="grid">
        <div className="grid__col grid__col--1-of-5 grid__col--centered">
          <Paper id='setting-form'>
            <form action="/network" method="post" >
              <SelectField floatingLabelText = "Ethernet" 
                           value={id}
                           onChange={this.handleChange.bind(this)} >
                {_Ethernet}
              </SelectField>
              <Divider />
              <Ethernet id={id} 
                        ethernet={ethernets[id]} 
                        actions={actions} />
            </form>
          </Paper>
          
        </div>
      </div>
    );
  }  
}