import _ from 'lodash';
import { LOG_IN } from '../actions/actionTypes';

const initState = {
  login: false,
  snackbar: {
    show: false,
    msg: ''
  }
};

export default function camStore( state = initState, action ) {
  switch(action.type){
    case LOG_IN:
      return _.assign( {}, state, {
                                    login: action.login,
                                    snackbar: {
                                      show: action.show,
                                      msg:  action.msg
                                    }
                                  });
    default:
      return state;
  }
}