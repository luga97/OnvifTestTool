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
export function toggleEnable(id, enable){
  return {
    type: TOGGLE_ENABLE,
    id,
    enable
  };
}
export function toggleASAN(id, enable){
  return {
    type: TOGGLE_ASAN,
    id,
    enable
  };
}
export function toggleOSAN(id, enable){
  return {
    type: TOGGLE_OSAN,
    id,
    enable
  };
}
export function toggleIPv4(id, enable){
  return {
    type: TOGGLE_IPV4,
    id,
    enable
  };
}
export function toggleIPv4DHCP(id, dhcp){
  return {
    type: TOGGLE_IPV4_DHCP,
    id,
    dhcp
  };
}
export function toggleIPv6(id, enable){
  return {
    type: TOGGLE_IPV6,
    id,
    enable
  };
}
export function toggleIPv6DHCP(id, dhcp){
  return {
    type: TOGGLE_IPV6_DHCP,
    id,
    dhcp
  };
}
export function toggleIPv6ARA(id, acceptrouteradvert){
  return {
    type: TOGGLE_IPV6_ARA,
    id,
    acceptrouteradvert
  };
}