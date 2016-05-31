export const LOGGED_IN = 'LOGGED_IN';
export const USERNAME_CHANGE = 'USERNAME_CHANGE';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const IPADDRESS_CHANGE = 'IPADDRESS_CHANGE';

export function contentChange(type, value){
  return {
    type,
    value
  }
}