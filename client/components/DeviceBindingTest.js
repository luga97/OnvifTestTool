import React from 'react';
import {SelectField, MenuItem} from 'material-ui';

import * as binding from "../onvif/onvif_bindings";
import Run from '../onvif/onvify';

export default class DeviceBindingTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      deviceBinding: [],
      response: 'waiting...'
    }
  }
  componentWillMount(){
    this.setState({
       deviceBinding: Object.keys(binding.DeviceBinding)
    });
  }

  handleChange(event, value){
    // selected
    this.setState({
      value,
      response: 'Receiving...'
    });

    Run(this.state.deviceBinding[value])
      .then((res) => {
        this.setState({
          response: JSON.stringify(res, (key, value) => {
                      if (key === 'isP')
                        return undefined;
                      if (value === undefined)
                        return undefined;
                      return value;
                    }, 2)
        });
      })
      .catch((err) => {
        this.setState({response: err});
      });
  }

  render(){

    return(
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange.bind(this)}>
          {
            this.state.deviceBinding.map((name, index)=>{
              return (<MenuItem key={index} value={index} primaryText={name} />);
            })
          }
        </SelectField>

        <pre style={{height: '500px', padding: '3px 5px', border: '1px solid black', overflowY: 'auto'}}>
          {this.state.response}
        </pre>
      </div>
    );
  }
}