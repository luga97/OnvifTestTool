import React from 'react';
import update from 'react/lib/update';
import {SelectField, MenuItem, Paper, RaisedButton } from 'material-ui';

import * as binding from "../onvif/onvif_bindings";
import Run from '../onvif/onvify';

export default class DeviceBindingTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 0,
      device: {
        value: 0,
        binding: []
      },
      media: {
        value: 0,
        bindgin: []
      },
      /*
      value: 0,
      deviceBinding: [],
      mediaBinding: [],
      */
      response: 'waiting...',
      test: {}
    }
  }
  componentWillMount(){
    /*
    this.setState({
       deviceBinding: Object.keys(binding.DeviceBinding),
       mediaBinding: Object.keys(binding.MediaBinding)
    });
    */
    this.setState(update(this.state, {
       device: { 
         binding: Object.keys(binding.DeviceBinding)
       },
       media: {
         binding: Object.keys(binding.MediaBinding)
       }
    }));
  }

  handleChange(e, value){
    // selected
    this.setState(update(this.state, {
      type: (e.target.name === 'deviceBinding') ? 0 : 1,
      value,
      response: 'Press START to test command.'
    }));

  }
  handleClick(e){
    let _CMD = this.state.type === 0 ? this.state.deviceBinding[this.state.value] : this.state.mediaBinding[this.state.value];

    this.setState({
      response: 'Receiving...'
    });

    Run(_CMD)
      .then((res) => {
        console.log(res);
        this.setState({
          response: JSON.stringify(res, (key, value) => {
                      if (key === 'isP')
                        return undefined;
                      if (value === undefined)
                        return undefined;
                      return value;
                    }, 2),
          test: res
        });
      })
      .catch((err) => {
        this.setState({response: err});
      });
  }

  render(){
    return(
      <section>
        <div>
          <SelectField name='deviceBinding'
                      floatingLabelText='DeviceBindingTest'
                      value={this.state.value} 
                      onChange={this.handleChange.bind(this)}>
            {
              this.state.deviceBinding.map((name, index)=>{
                return (<MenuItem key={index} value={index} primaryText={name} />);
              })
            }
          </SelectField>
        </div>
        <div>
          <SelectField name='deviceMedia'
                      floatingLabelText='DeviceMediaTest'
                      value={this.state.value} 
                      onChange={this.handleChange.bind(this)}>
            {
              this.state.mediaBinding.map((name, index)=>{
                return (<MenuItem key={index} value={index} primaryText={name} />);
              })
            }
          </SelectField>
        </div>
        <div>
          <RaisedButton label='Start'
                        primary={true}
                        onClick={this.handleClick.bind(this)} />
        </div>

        <pre style={{height: '500px', padding: '3px 5px', border: '1px solid black', overflowY: 'auto'}}>
          {this.state.response}
        </pre>

      </section>
    );
  }
}