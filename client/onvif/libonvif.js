import http from 'http';
import events from 'events';
import crypto from 'crypto';
import * as schemas from "./onvif_schemas";
import * as types from "./xsd_types";

class content {
  constructor(){
    this.header   = new String();
    this.buf      = new String();
    this.buf_size = new Number();
    this.xml      = new window.DOMParser().parseFromString("<?xml version='1.0' encoding='UTF-8'?><ROOT></ROOT>", 'text/xml');
    this.enevlope = new schemas.soap_Envelope();
  }
}

export class soap_object
{
  constructor(){

    this.protocol  = "http";
    this.host      = new String();
    this.port      = 80;
    this.url       = "/onvif/device_service";
    this.username  = new String();
    this.password  = new String();
    this.objs      = new Array(new types.xsd_type());
    this.input     = new content();
    this.output    = new content();
  }

  new_obj(Type, ...args)
  {
    let obj = new Type(...args);
    this.objs.push(obj);
    return obj;
  }

  create_req_options(){
    return {
      hostname: this.host,
      port: this.port,
      path: this.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/soap+xml',
        'Content-Length': this.input.buf.length,
        charset: 'utf-8',
      }
    };
  }

  post(){
    return new Promise((resolve, reject) => {
      let reqOptions = this.create_req_options();
      let _done = false;
      let req = http.request(reqOptions, (res) => {
        let bufs = [], length = 0;
        res.on('data', (chunk) =>{
          bufs.push(chunk);
          length += chunk.length;
        });
        res.on('end', () => {
          if (bufs.length !== 0 && length !== 0)
          {
            this.output.headers = res.headers;
            this.output.buf = bufs;
            this.output.buf_size = length;
            _done = true ;
          }

          resolve(_done);
        });
      });
      req.on('error', (e) => {
        console.log('Error with request: ' + e.message);

        reject(_done);
      });

      req.write(this.input.buf);
      req.end();
    });
  }

  xmlToJson(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType === 1) { // element
      // deal attributes
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};

        xml.attributes.forEach((attr) => {
          obj['@attributes'][attr.nodeName] = attr.nodeValue;
        });
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }

    // deal children
    if (xml.hasChildNodes()) {

      [...xml.childNodes].forEach((child) => {
        let nodeName = child.nodeName.split(':') ;
        nodeName = nodeName.length > 1 ? nodeName[1] : nodeName[0];

        if(typeof(obj[nodeName]) === 'undefined')
        {
          obj[nodeName] = this.xmlToJson(child);
        }
        else{
          if(typeof(obj[nodeName].push) === 'undefined')
          {
            let old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(child));
        }
      });
    }
    return obj;
  }

}

export class soap_writer
{
  constructor(xml){
    this.m_prefix = {};
    this.m_xml = xml;
    this.m_p = null;
  }
  done(length)
  {
    let root = this.m_xml.documentElement.firstElementChild ;
    for ( var p in this.m_prefix )
    {
      let s = "xmlns:";
      s += p;
      root.setAttribute(s, schemas.NAMESPACES[p]);
    }

    return this.m_xml.documentElement.innerHTML;

  }
  add_namespace(ns){ if(this.m_prefix[ns] === undefined) this.m_prefix[ns] = 1; else this.m_prefix[ns]++; }
  set(v){ let n = this.m_xml.createTextNode(v); this.m_p.appendChild(n); }
  write(obj, ns, name, v)
  {
    let old_p;
    if (v instanceof types.xsd_list)
    {
      for ( var m in v.v )
        this.write(obj, ns, name, v.v[m]);
    }
    else if (v.constructor.prototype.__proto__.constructor.name === 'xsd_string')
      this.write(obj, ns, name, v.to_string());
    else if (v instanceof types.any_t)
      v.write(obj, this);
    else
    {
      this.add_namespace(ns);

      let tag = ns + ':' + name ;

      if ( typeof(v) === 'string')
      {
        let elm = this.m_xml.createElement(tag);
        let n = this.m_xml.createTextNode(v);
        elm.appendChild(n);

        old_p = this.m_p;
        this.m_p = elm ;

        old_p.appendChild(elm);
      }
      else if ( v instanceof types.xsd_type )
      {
        let empty = this.m_p == null;

        old_p = this.m_p;
        this.m_p = this.m_xml.createElement(tag);

        if ( empty )
        {
          this.m_xml.documentElement.appendChild(this.m_p);
        }
        else
        {
          old_p.appendChild(this.m_p);
        }


        v.write(obj, this);
      }

      this.m_p = old_p;
    }

  }
  write_attribute(obj, name, v)
  {
    if ( v instanceof types.xsd_list )
    {
      if (v.type === types.anyAttribute_t)
      {
        for(let m in v.v)
          this.write_attribute(obj, v.v[m].name, v.v[m].v);
      }
      else
      {
        let ss;
        let first = true;
        for (let m in v.v)
        {
          if (first)
            ss = v.v[m].to_string();
          else
            ss += ' ' + v.v[m].to_string();
          first = false;
        }
        this.write_attribute(obj, name, ss);
      }
    }
    else if (v instanceof types.anyAttribute_t)
      this.write_attribute(obj, v.name, v.v);
    else if (v instanceof types.primitive)
      this.write_attribute(obj, name, v.to_string());
    else if (typeof(v) === 'string')
      this.m_p.setAttribute(name, v);
  }
}

// extern std::vector<std::string> split(const std::string& s, const char* delimiter);

export class soap_reader extends types.parse_proxy
{
  constructor(xml){
    super();
    this.m_xml = xml;
    this.m_p = {};
    this.m_deleted = new Set();
  }
  get_text(elem) { return elem.childNode[0].nodeValue; }
  parse(size, buf)
  {
    let parser = new window.DOMParser();
    this.m_xml = parser.parseFromString(buf.toString(), "text/xml");
    this.m_p = this.m_xml.documentElement;
    return true ;
  }
  check(ns, name)
  {
    let tag = this.get_tag(this.m_p);
    if (tag[0] != schemas.NAMESPACES[ns])
      return false;
    if (tag[1] != name)
      return false;
    return true;
  }
  set_p(p){ this.m_p = p; }
  find_namespace(elem, prefix)
  {
    if ( !prefix ) // find_namespace(prefix){}
    {
      prefix = elem;
      elem = this.m_p;
    }

    let s = "xmlns";
    if ( prefix != null )
      s += ":" + prefix;

    let attr = elem.getAttribute(s);
    if (attr != null)
      return attr;

    return this.find_namespace(elem.parentNode, prefix);
  }
  find_child(prefix, name)
  {
    let ns = schemas.NAMESPACES[prefix];
    let elem = this.m_p.firstElementChild;
    while (elem != null)
    {
      if (!this.m_deleted.has(elem))
      {
        let tag = this.get_tag(elem);
        if (tag[0] === ns && tag[1] === name)
          return elem;
      }
      elem = elem.nextElementSibling;
    }
    return null;
  }
  get_tag(elem)
  {
    let p = elem.nodeName.split(":");
    if (p.length === 1)
      return [this.find_namespace(elem, null), p[0]];

    return [this.find_namespace(elem, p[0]), p[1]];
  }
  get() { return this.get_text(this.m_p); }
  read(obj, ns, name, v)
  {
    let old_p;
    if (v instanceof types.xsd_list)
    {
      if (v.type === types.any_t)
      {
        let elem = this.m_p.firstElementChild;
        while(true)
        {
          if (!this.m_deleted.has(elem))
          {
            v.v.push(new types.any_t( {v: elem} ));
            this.m_deleted.add(elem);
          }
          let next = elem.nextElementSibling;
          if (!next)
            break;
          elem = next;
        }
        return true;
      }
      else if (v.isP)
      {
        let _T = v.type ;
        let _v = new Array();
        while(true){
          let t = new _T();
          if (!this.read(obj, ns, name, t))
            break;
          _v.push(t);
        }
        if (_v.length === 0)
          return true;

        v = obj.new_obj( types.xsd_list(_T) );
        v.v = _v;
        return true;
      }
      else
      {
        while (true){
          let _type = v.type;
          let t = new _type();
          if (!this.read(obj, ns, name, t))
            break;
          v.v.push(t);
        }
        return true;
      }
    }
    else if ( v.isString ) //( typeof(v) === 'string' )
    {
      let elem = this.find_child(ns, name);
      if (!elem)
        return false ;

      v.v = elem.childNodes[0].nodeValue;
      this.m_deleted.add(elem);
      return true;
    }
    else if (v.isP)
    {
      let _v = obj.new_obj( v.constructor );

      if (!this.read(obj, ns, name, _v))
        return true;

      Object.assign(v, _v);
      return true;
    }
    else if ( v instanceof types.xsd_type )
    {
      if ( v instanceof types.primitive )
      {
        let _v = {isString: true,};
        if (!this.read(obj, ns, name, _v))
            return false;

        if (!v.parse(this, _v.v))
            return false;
        return true;
      }
      else
      {
        let elem = this.find_child(ns, name);
        if (!elem)
          return false;

        old_p = this.m_p;
        this.m_p = elem;
        if (!v.read(obj, this))
          return false;

        this.m_deleted.add(elem);

        this.m_p = old_p;
        return true;
      }
    }
    else if ( v instanceof types.any_t )
    {
      let elem;
      let p = this.m_p.firstElementChild;
      while (p)
      {
        if (this.m_deleted.has(elem))
        {
          elem = p;
          break;
        }
        p = p.nextElementSibling;
      }
      if (!elem)
        return false;

      v.v0 = elem; // some question
      this.m_deleted.add(elem);
      return true;
    }
  }
  read_attribute(obj, name, v)
  {
    if (v instanceof types.xsd_list)
    {
      if (v.isP)
      {
        let s = "";
        if (!this.read_attribute(obj, name, s))
          return false;

        v = obj.new_obj( types.xsd_list(v.type) );
        s.split(" ").forEach((ss) => {
          let _v = new v.type();
          if (!_v.parse(this, ss))
            return false;
          v.v.push(_v);
        });
        return true;
      }
      else if (v.type === types.anyAttribute_t)
      {
        [...this.m_p.attributes].forEach((attr) => {
          v.v.push(new types.anyAttribute_t( {v: attr} ));
        });
        return true;
      }
      else{
        for(let m in v.v)
          if(!this.read_attribute(obj, name, v.v[m]))
            return false;
        return true;
      }
    }
    else if (v.isP) {
      let _v = obj.new_obj( v.type );
      _v['isP'] = true;
      if ( !this.read_attribute(obj, name, _v) )
        return true;

      v = _v;
      return true;
    }
    else if ( v.isString )
    {
      let attr = this.m_p.getAttribute(name);
      if (!attr)
        return false;

      v.v = attr;

      this.m_p.removeAttribute(name);
      return true;
    }
    else if ( v instanceof types.xsd_type )
    {
      if ( v instanceof types.primitive )
      {
        let _v = {isString: true};
        if (!this.read_attribute(obj, name, _v))
          return false;
        if (!v.parse(this, _v.v))
          return false;
        return true;
      }
      else
      return v.read(obj, this);
    }
  }
}

function password_digest(obj){
  // timestamp
  let _now = new Date(Date.now()).toISOString();
  // uuid
  let uuid = new Buffer(16);
  uuid.writeUIntLE(Math.ceil(Math.random() * 0x100000000), 0, 4);
  uuid.writeUIntLE(Math.ceil(Math.random() * 0x100000000), 4, 4);
  uuid.writeUIntLE(Math.ceil(Math.random() * 0x100000000), 8, 4);
  uuid.writeUIntLE(Math.ceil(Math.random() * 0x100000000), 12, 4);
  // nonce
  let _nonce = new Buffer(uuid).toString('base64');
  // password
  let _sha1 = crypto.createHash('sha1');
  _sha1.update(Buffer.concat([uuid, new Buffer(_now, 'ascii'), new Buffer(obj.password, 'ascii')]));
  let _password = _sha1.digest('base64');

  return {
    timestamp: _now,
    nonce: _nonce,
    password: _password,
  } ;
}

export function new_soap_envelope(obj, input_action)
{
  let token = obj.new_obj( schemas.wsse_UsernameToken );
  token.Username.v = obj.username;

  let password = obj.new_obj( schemas.wsse_Password );
  password.Type = obj.new_obj( schemas.xsd_anyURI, "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest" );
  token.any.v.push(new types.any_t( {ns:schemas.PREFIX_WSSE, name:"Password", v:password} ));

  let _passwordDigest = password_digest(obj);

  let nonce = obj.new_obj( schemas.wsse_Nonce );
  nonce.v = _passwordDigest.nonce;
  token.any.v.push(new types.any_t( {ns:schemas.PREFIX_WSSE, name:"Nonce", v:nonce} ) );

  password.v = _passwordDigest.password;

  let created = obj.new_obj( schemas.wsu_Created );
  created.v = _passwordDigest.timestamp;
  token.any.v.push(new types.any_t( {ns:schemas.PREFIX_WSU, name:"Created", v:created} ) );

  let security = obj.new_obj( schemas.wsse_Security );
  security.any.v.push(new types.any_t( {ns:schemas.PREFIX_WSSE, name:"UsernameToken", v:token} ) );

  let envelope = obj.new_obj( schemas.soap_Envelope );
  envelope.Header = new schemas.soap_Header() ;
  envelope.Header.any.v.push(new types.any_t( {ns:schemas.PREFIX_WSSE, name:"Security", v:security} ) );

  if ( input_action != null )
  {
    let action = obj.new_obj( schemas.wsa5_Action );
    action.v = input_action;
    envelope.Header.any.v.push(new types.any_t( {ns:schemas.PREFIX_WSA, name:"Action", v:action} ) );
  }

  return envelope;
}

export function onvif_one_way_operation(obj, input_ns, input_name, input, input_action){
  let i_envelope = new_soap_envelope(obj, input_action);
  i_envelope.Body.any.v.push(new types.any_t({ns:input_ns, name:input_name, v:input}));

  let writer = new soap_writer(obj.input.xml);
  writer.write(obj, schemas.PREFIX_SOAP, "Envelope", i_envelope);
  obj.input.buf = writer.done(obj.input.buf_size);

  if( !obj.post()
        .then((done) => { return true })
        .catch((done) => { return false })
    )
    return false;

  return true;
}

export function onvif_request_response_operation(
                  obj,
                  input_ns, input_name, input, input_action,
                  output_ns, output_name, output, output_action){
  let i_envelope = new_soap_envelope(obj, input_action);
  i_envelope.Body.any.v.push(new types.any_t( {ns:input_ns, name:input_name, v:input} ));

  let writer = new soap_writer(obj.input.xml);
  writer.write(obj, schemas.PREFIX_SOAP, "Envelope", i_envelope);
  obj.input.buf = writer.done(obj.input.buf_size);

  if( !obj.post()
        .then((done) => {
          let reader = new soap_reader(obj.output.xml);
          if (!reader.parse(obj.output.buf_size, obj.output.buf))
            return false;

          if(!reader.check(schemas.PREFIX_SOAP, "Envelope"))
            return false;

          let o_envelope = new schemas.soap_Envelope();
          if (!o_envelope.read(obj, reader))
            return false;

          if (o_envelope.Body.any.v.length != 1)
            return false;

          let r = o_envelope.Body.any.v[0].v0;
          reader.set_p(r);
          if (!reader.check(output_ns, output_name))
            return false;

          if (!output.read(obj, reader))
            return false;

          return true;
        })
      .catch((done) => {
        return false;
      })
  )
    return false
  else
    return true;
}

export class json_writer
{
  constructor(v){
    this.m_v = v;
    this.m_p = this.m_v;
  }
  done(){}
  set(ns, v){ this.m_p["v"] = v.toString(); }
  write(ns, name, v){}
  write_attribute(name, v){}
}

export class json_reader extends types.parse_proxy
{
  constructor(v){
    super();
    this.m_v = v;
    this.m_p = this.m_v;
  }
  find_namespace(prefix){}
  get(){ return this.m_p["v"].toString(); }
  read(obj, ns, name, v){}
  read_attribute(obj, name, v){}
}

export const access_classes =
{
  PRE_AUTH: 0,
  READ_SYSTEM: 1,
  READ_SYSTEM_SENSITIVE: 2,
  READ_SYSTEM_SECRET: 3,
  WRITE_SYSTEM: 4,
  UNRECOVERABLE: 5,
  READ_MEDIA: 6,
  ACTUATE: 7,
};

export const access_policy =
{
  Administrator: 0,
  Operator: 1,
  User: 2,
  Anonymous: 3,
};

export function onvif_dispatch_init(obj, input_ns, input_name)
{
  let reader = new soap_reader( obj.input.xml );
  if (!reader.parse(obj.input.buf_size, obj.input.buf))
    return false;

  if (!reader.check(schemas.PREFIX_SOAP, "Envelope"))
    return false;

  let envelope = new schemas.soap_Envelope();
  if (!envelope.read(obj, reader))
    return false;

  if (envelope.Body.any.v.length != 1)
    return false;

  let r = envelope.Body.any.v[0].v0;
  reader.set_p(r);

  return true;
}

export function onvif_accessible(policy, classes)
{
  let ADMINISTRATOR = {
    [access_classes.PRE_AUTH]: 0,
    [access_classes.READ_SYSTEM]: 1,
    [access_classes.READ_SYSTEM_SENSITIVE]: 2,
    [access_classes.READ_SYSTEM_SECRET]: 3,
    [access_classes.WRITE_SYSTEM]: 4,
    [access_classes.UNRECOVERABLE]: 5,
    [access_classes.READ_MEDIA]: 6,
    [access_classes.ACTUATE]: 7,
  };
  let OPERATOR = {
    [access_classes.PRE_AUTH]: 0,
    [access_classes.READ_SYSTEM]: 1,
    [access_classes.READ_SYSTEM_SENSITIVE]: 2,
    [access_classes.READ_MEDIA]: 3,
    [access_classes.ACTUATE]: 4,
  };
  let USER = {
    [access_classes.PRE_AUTH]: 0,
    [access_classes.READ_SYSTEM]: 1,
    [access_classes.READ_MEDIA]: 2,
  };
  let ANONYMOUS = {
    [access_classes.PRE_AUTH]: 0,
  };

  switch (policy)
  {
    case access_policy.Administrator:
      return ADMINISTRATOR[classes] != ADMINISTRATOR[(Object.keys(ADMINISTRATOR).length-1)];
    case access_policy.Operator:
      return OPERATOR[classes] != OPERATOR[(Object.keys(OPERATOR).length-1)];
    case access_policy.User:
      return USER[classes] != USER[(Object.keys(USER).length-1)];
    case access_policy.Anonymous:
      return ANONYMOUS[classes] != ANONYMOUS[(Object.keys(ANONYMOUS).length-1)];
  }
}

