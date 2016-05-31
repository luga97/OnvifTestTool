export const SELECT_ETHERNET = 'SELECT_ETHERNET';
export const TOGGLE_ENABLE = 'TOGGLE_ENABLE';
export const TOGGLE_ASAN = 'TOGGLE_ASAN';
export const TOGGLE_OSAN = 'TOGGLE_OSAN';
export const TOGGLE_IPV4 = 'TOGGLE_IPV4';
export const TOGGLE_IPV4_DHCP = 'TOGGLE_IPV4_DHCP';
export const TOGGLE_IPV6 = 'TOGGLE_IPV6';
export const TOGGLE_IPV6_DHCP = 'TOGGLE_IPV6_DHCP';
export const TOGGLE_IPV6_ARA = 'TOGGLE_IPV6_ARA';

export function selectEthernet(value){
  return {
    type: SELECT_ETHERNET,
    value
  };
}
export function toggleEvent(type, id, enable){
  return {
    type,
    id,
    enable
  };
}