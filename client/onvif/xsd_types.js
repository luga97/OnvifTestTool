//import {NS_PREFIX} from './onvif_schema';

export const NS_PREFIX = {
    "http://www.onvif.org/ver10/error": "ter",
    "http://www.onvif.org/ver10/device/wsdl": "tds",
    "http://www.onvif.org/ver10/events/wsdl": "tev",
    "http://docs.oasis-open.org/wsn/bw-2": "wsntw",
    "http://www.onvif.org/ver10/display/wsdl": "tls",
    "http://www.onvif.org/ver10/deviceIO/wsdl": "tmd",
    "http://www.onvif.org/ver20/imaging/wsdl": "timg",
    "http://www.onvif.org/ver10/media/wsdl": "trt",
    "http://www.onvif.org/ver20/media/wsdl": "tr2",
    "http://www.onvif.org/ver20/ptz/wsdl": "tptz",
    "http://www.onvif.org/ver10/receiver/wsdl": "trv",
    "http://www.onvif.org/ver10/recording/wsdl": "trc",
    "http://www.onvif.org/ver10/search/wsdl": "tse",
    "http://www.onvif.org/ver10/replay/wsdl": "trp",
    "http://www.onvif.org/ver10/thermal/wsdl": "tth",
    "http://www.onvif.org/ver20/analytics/wsdl": "tan",
    "http://www.onvif.org/ver10/analyticsdevice/wsdl": "tad",
    "http://www.onvif.org/ver10/actionengine/wsdl": "tae",
    "http://www.onvif.org/ver10/accesscontrol/wsdl": "tac",
    "http://www.onvif.org/ver10/doorcontrol/wsdl": "tdc",
    "http://www.onvif.org/ver10/advancedsecurity/wsdl": "tas",
    "http://www.onvif.org/ver10/accessrules/wsdl": "tar",
    "http://www.onvif.org/ver10/credential/wsdl": "tsr",
    "http://www.onvif.org/ver10/schedule/wsdl": "tsc",
    "http://www.w3.org/2001/XMLSchema": "xsd",
    "http://www.onvif.org/ver10/schema": "tt",
    "http://docs.oasis-open.org/wsn/b-2": "wsnt",
    "http://www.w3.org/2005/08/addressing": "wsa5",
    "http://docs.oasis-open.org/wsrf/r-2": "wsrf-r",
    "http://docs.oasis-open.org/wsn/t-1": "wstop",
    "http://www.onvif.org/ver10/pacs": "pt",
    "http://docs.oasis-open.org/wsrf/rw-2": "wsrf-rw",
    "http://www.w3.org/2004/08/xop/include": "xop",
    "http://www.w3.org/2005/05/xmlmime": "xmime",
    "http://docs.oasis-open.org/wsrf/bf-2": "wsrf-bf",
    "http://www.w3.org/XML/1998/namespace": "ns",
    "http://www.w3.org/2003/05/soap-envelope": "soap",
    "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd": "wsse",
    "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd": "wsu",
    "http://schemas.xmlsoap.org/ws/2005/04/discovery": "wsdd",
    "http://schemas.xmlsoap.org/ws/2004/08/addressing": "wsa",
    "http://www.onvif.org/ver10/network/wsdl": "dn",
};

export class parse_proxy
{
  find_namespace(prefix) {}
}

export class xsd_type
{
  write(obj, writer) {}

  read(obj, reader) {}
}

export class primitive extends xsd_type
{
  constructor(){
    super();
    this.v = {};
  }
  write(obj, writer) { writer.set(this.to_string()); }
  read(obj, reader) { return false; }
  parse(proxy, s) { }
  to_string() { }
}

export class xsd_boolean extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    if (s == "0" || s == "false")
    {
      this.v = false;
      return true;
    }
    if (s == "1" || s == "true")
    {
      this.v = true;
      return true;
    }
    return false;
  }
  to_string() { return this.v ? "true" : "false" ; }
}

export class xsd_int extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = parseInt(s, 10);
    return s.slice(-1) == s[s.length - 1];
  }
  to_string() { return this.v.toString(); }
}

export class xsd_integer extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = parseInt(s, 10);
    return s.slice(-1) == s[s.length - 1];
  }
  to_string() { return this.v.toString(); }
}

export class xsd_unsignedInt extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = parseInt(s, 10);
    return this.v >= 0;
  }
  to_string() { return this.v.toString(); }
}

export class xsd_positiveInteger extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = parseInt(s, 10);
    return this.v > 0;
  }
  to_string() { return this.v.toString(); }
}

export class xsd_nonNegativeInteger extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = parseInt(s, 10);
    return this.v >= 0;
  }
  to_string() { return this.v.toString(); }
}

export class xsd_float extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = parseFloat(s);
    return this.v >= 0;
  }
  to_string() { return this.v.toString(); }
}

export class xsd_string extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_language extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_token extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_ID extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_anyURI extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_anySimpleType extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_anyType extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_NCName extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    this.v = s;
    return true;
  }
  to_string() { return this.v; }
}

export class xsd_base64Binary extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s) { return false; }
  to_string() { return window.atob(this.v); }
}

export class xsd_hexBinary extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s) { return false; }
  to_string() { return ""; }
}

export class xsd_QName extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s)
  {
    let p = s.indexOf(":");
    if (p < 0)
      return false;

    var s0 = proxy.find_namespace(s.split(":")[0]);
    var s1 = s.split(":")[1];
    this.v = {
      [s0]: s1,
    };
    return true;
  }
  to_string()
  {
    return NS_PREFIX[Object.keys(this.v)[0]] + ":" + Object.values(this.v)[0];
  }
}

export class xsd_dateTime extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s) { return false; }
  to_string() { return ""; }
}

export class xsd_time extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s) { return false; }
  to_string() { return ""; }
}

export class xsd_duration extends primitive
{
  constructor(v) { super(); this.v = v; }
  parse(proxy, s) { return false; }
  to_string() { return ""; }
}

export class any_t extends xsd_type
{
  constructor({ns, name, v}) {
    super();
    this.ns = ns;
    this.name = name;
    (ns !== undefined) ? this.v = v : this.v0 = v;
  }
  write(obj, writer) { writer.write(obj, this.ns, this.name, this.v); }
  read(obj, reader) { reader.read(obj, "", "", this); }
}

export class anyAttribute_t extends xsd_type
{
  constructor({name, v}) {
    super();
    this.name = name;
    (name !== undefined) ? this.v = v : this.v0 = v;
  }
  write(obj, writer) { writer.write_attribute(obj, this.name, this.v); }
  read(obj, reader) { return false; }
}

export const xsd_enum = primitive ;

export class xsd_list extends xsd_type
{
  constructor(type){
    super();
    this.v = new Array();
    this.type = type;
  }
  write(obj, writer) {}
  read(obj, reader) {}
}

export class xsd_simplelist extends primitive
{
  constructor(type){
    super();
    this.v = new Array();
    this.type = type;
  }
  write(obj, writer) {}
  read(obj, reader) {}
}