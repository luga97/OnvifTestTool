import React, {Component} from 'react';
import { Toggle, TextField } from 'material-ui';
import LinkSettings from './LinkSettings';

export default class Link extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const { id, link, actions} = this.props;
    return(
      <div>
        <TextField floatingLabelText="InterfaceType" 
                   ref="interfacetype" 
                   value={link.interfacetype} />
        <fieldset>
          <legend>AdminSettings</legend>
          <LinkSettings adminOrOper="admin"
                        id={id}
                        settings={link.adminsettings}
                        {...actions} />
        </fieldset>
        <fieldset>
          <legend>OperSettings</legend>
          <LinkSettings adminOrOper="oper"
                        id={id}
                        settings={link.opersettings}
                        {...actions} />
        </fieldset>
      </div>
    );
  }
}