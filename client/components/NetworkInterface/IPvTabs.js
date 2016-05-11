import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui';
import IPv4 from './IPv4';
import IPv6 from './IPv6';

export default class IPvTabs extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const { id, ipv4, ipv6, actions } = this.props;
    return(
      <Tabs>
        <Tab label="IPv4">
          <IPv4 id={id}
                {...ipv4} 
                {...actions} />
        </Tab>
        <Tab label="IPv6">
          <IPv6 id={id}
                {...ipv6} 
                {...actions} />
        </Tab>
      </Tabs>
    );
  };
}