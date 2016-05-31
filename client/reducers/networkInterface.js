import _ from 'lodash';
import { SELECT_ETHERNET,
         TOGGLE_ENABLE, 
         TOGGLE_ASAN, TOGGLE_OSAN,
         TOGGLE_IPV4, TOGGLE_IPV4_DHCP, 
         TOGGLE_IPV6, TOGGLE_IPV6_DHCP, TOGGLE_IPV6_ARA, 
       } from '../actions/networkInterface';

const defaultInfo = {
  name: 'eth0',
  hwaddress: '',
  mtu: 1500,
};
const defaultSettings = {
  autonegotation: true,
  speed: 0,
  duplex: 'Full'
};
const defaultLink = {
  interfacetype: 0,
  adminsettings: _.assign({}, defaultSettings),
  opersettings: _.assign({}, defaultSettings),
};
const defaultIPv4 = {
  enable: true,
  dhcp: true,
  address: '127.0.0.1',
  prefixlength: 0,
};
const defaultIPv6 = _.assign( 
  { 
    acceptrouteradvert: true,
    extension: '',
  },
  defaultIPv4 );
const defaultNetworkInterface = {
  id: 0,
  enable: true,
  info: defaultInfo,
  link: defaultLink,
  ipv4: defaultIPv4,
  ipv6: defaultIPv6,
};
const defaultNetworkInterface2 = _.defaultsDeep({id: 1, enable: false, info: {name: 'eth1'}}, 
                                                defaultNetworkInterface) ;
const initState = {
  id: 0,
  ethernets: [defaultNetworkInterface, defaultNetworkInterface2]
};

const changeEthernetContent = (curState, changeState, action) => {
// 改變 Ethernet state 內容
  return _.assign({}, curState, { ethernets: _.map( curState.ethernets, 
                                                    ethernet => 
                                                      ethernet.id === action.id ?
                                                      _.defaultsDeep(changeState, ethernet ) :
                                                      ethernet 
                                                  )
                                });
};

export default function networkInterface(state = initState, action) {
  
  switch (action.type) {
    case SELECT_ETHERNET:
      return _.assign({}, state, { id: action.value });
    case TOGGLE_ENABLE:
      return changeEthernetContent( state, 
                                    {enable: action.enable}, 
                                    action
                                  );
    case TOGGLE_ASAN:
      return changeEthernetContent( state, 
                                    {link: { adminsettings: { autonegotation: action.enable }}}, 
                                    action
                                  );
    case TOGGLE_OSAN:
      return changeEthernetContent( state, 
                                    {link: { opersettings: { autonegotation: action.enable }}}, 
                                    action
                                  );
    case TOGGLE_IPV4:
      return changeEthernetContent( state, 
                                    {ipv4: { enable: action.enable }}, 
                                    action
                                  );
    case TOGGLE_IPV4_DHCP:
      return changeEthernetContent( state, 
                                    {ipv4: { dhcp: action.enable }}, 
                                    action
                                  );
    case TOGGLE_IPV6:
      return changeEthernetContent( state, 
                                    {ipv6: { enable: action.enable }}, 
                                    action
                                  );
    case TOGGLE_IPV6_DHCP:
      return changeEthernetContent( state, 
                                    {ipv6: { dhcp: action.enable }}, 
                                    action
                                  );
    case TOGGLE_IPV6_ARA:
      return changeEthernetContent( state, 
                                    {ipv6: { acceptrouteradvert: action.enable }}, 
                                    action
                                  );
    default:
      return state;
  }
}

