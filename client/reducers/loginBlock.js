import _ from 'lodash';
import { USERNAME_CHANGE, PASSWORD_CHANGE, IPADDRESS_CHANGE } from '../actions/loginBlock';

const initState = {
  username: '',
  password: '',
  ipAddress: '',
};

export default function login( state = initState, action ) {
  switch(action.type){
    case USERNAME_CHANGE:
      return _.assign( {}, state, {username: action.value} );
    case PASSWORD_CHANGE:
      return _.assign( {}, state, {password: action.value} );
    case IPADDRESS_CHANGE:
      return _.assign( {}, state, {ipAddress: action.value} );
    default:
      return state;
  }
}