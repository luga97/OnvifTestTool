import * as actions from './actionTypes';

export function logIn(login, show, msg){
  return {
    type: actions.LOG_IN,
    login,
    show,
    msg
  };
}