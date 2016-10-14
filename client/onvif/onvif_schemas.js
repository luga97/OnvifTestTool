import * as types from "./xsd_types";

export const NAMESPACES = {
    "ter": "http://www.onvif.org/ver10/error",
    "tds": "http://www.onvif.org/ver10/device/wsdl",
    "tev": "http://www.onvif.org/ver10/events/wsdl",
    "wsntw": "http://docs.oasis-open.org/wsn/bw-2",
    "tls": "http://www.onvif.org/ver10/display/wsdl",
    "tmd": "http://www.onvif.org/ver10/deviceIO/wsdl",
    "timg": "http://www.onvif.org/ver20/imaging/wsdl",
    "trt": "http://www.onvif.org/ver10/media/wsdl",
    "tr2": "http://www.onvif.org/ver20/media/wsdl",
    "tptz": "http://www.onvif.org/ver20/ptz/wsdl",
    "trv": "http://www.onvif.org/ver10/receiver/wsdl",
    "trc": "http://www.onvif.org/ver10/recording/wsdl",
    "tse": "http://www.onvif.org/ver10/search/wsdl",
    "trp": "http://www.onvif.org/ver10/replay/wsdl",
    "tth": "http://www.onvif.org/ver10/thermal/wsdl",
    "tan": "http://www.onvif.org/ver20/analytics/wsdl",
    "tad": "http://www.onvif.org/ver10/analyticsdevice/wsdl",
    "tae": "http://www.onvif.org/ver10/actionengine/wsdl",
    "tac": "http://www.onvif.org/ver10/accesscontrol/wsdl",
    "tdc": "http://www.onvif.org/ver10/doorcontrol/wsdl",
    "tas": "http://www.onvif.org/ver10/advancedsecurity/wsdl",
    "tar": "http://www.onvif.org/ver10/accessrules/wsdl",
    "tsr": "http://www.onvif.org/ver10/credential/wsdl",
    "tsc": "http://www.onvif.org/ver10/schedule/wsdl",
    "xsd": "http://www.w3.org/2001/XMLSchema",
    "tt": "http://www.onvif.org/ver10/schema",
    "wsnt": "http://docs.oasis-open.org/wsn/b-2",
    "wsa5": "http://www.w3.org/2005/08/addressing",
    "wsrf-r": "http://docs.oasis-open.org/wsrf/r-2",
    "wstop": "http://docs.oasis-open.org/wsn/t-1",
    "pt": "http://www.onvif.org/ver10/pacs",
    "wsrf-rw": "http://docs.oasis-open.org/wsrf/rw-2",
    "xop": "http://www.w3.org/2004/08/xop/include",
    "xmime": "http://www.w3.org/2005/05/xmlmime",
    "wsrf-bf": "http://docs.oasis-open.org/wsrf/bf-2",
    "ns": "http://www.w3.org/XML/1998/namespace",
    "soap": "http://www.w3.org/2003/05/soap-envelope",
    "wsse": "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",
    "wsu": "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd",
    "wsdd": "http://schemas.xmlsoap.org/ws/2005/04/discovery",
    "wsa": "http://schemas.xmlsoap.org/ws/2004/08/addressing",
    "dn": "http://www.onvif.org/ver10/network/wsdl",
};

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

export const PREFIX_SOAP = "soap";
export const PREFIX_WSA = "wsa";
export const PREFIX_WSA5 = "wsa5";
export const PREFIX_WSSE = "wsse";
export const PREFIX_WSU = "wsu";
export const PREFIX_WSDD = "wsdd";

export const xsd_QName = types.xsd_QName;
export const xsd_string = types.xsd_string;
export const xsd_language = types.xsd_language;
export const xsd_anyURI = types.xsd_anyURI;
export const xsd_ID = types.xsd_ID;
export const xsd_boolean = types.xsd_boolean;
export const xsd_int_ = types.xsd_int;
export const xsd_token = types.xsd_token;
export const xsd_duration = types.xsd_duration;
export const xsd_hexBinary = types.xsd_hexBinary;
export const xsd_integer = types.xsd_integer;
export const xsd_base64Binary = types.xsd_base64Binary;
export const xsd_dateTime = types.xsd_dateTime;
export const xsd_anyType = types.xsd_anyType;
export const xsd_nonNegativeInteger = types.xsd_nonNegativeInteger;
export const xsd_float_ = types.xsd_float;
export const xsd_anySimpleType = types.xsd_anySimpleType;
export const xsd_positiveInteger = types.xsd_positiveInteger;
export const xsd_unsignedInt = types.xsd_unsignedInt;
export const xsd_time = types.xsd_time;
export const ns_lang = xsd_language;
export class soap_Header extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const _soap_Header = soap_Header; // using elem "Header"
export class soap_Body extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const _soap_Body = soap_Body; // using elem "Body"
export class soap_Envelope extends types.xsd_type
{
    constructor(){
        super();
        this.Header = new soap_Header(); this.Header['isP'] = true; // soap_Header* Header{};
        this.Body = new soap_Body(); // soap_Body Body{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "soap", "Header", this.Header);
        w.write(obj, "soap", "Body", this.Body);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "Header", this.Header)) return false;
        if (!r.read(obj, "soap", "Body", this.Body)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const _soap_Envelope = soap_Envelope; // using elem "Envelope"
export class soap_faultcodeEnum extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.DataEncodingUnknown= 0;
        this.MustUnderstand= 1;
        this.Receiver= 2;
        this.Sender= 3;
        this.VersionMismatch= 4;
    }

    parse(parser, s){
        if (s.indexOf(":") >= 0) {
            let s0 = parser.find_namespace(s.split(":")[0]);
            let s1 = s.split(":")[1];
            if (s0 == "http://www.w3.org/2003/05/soap-envelope" && s1 == "DataEncodingUnknown") {
                this.v = this.DataEncodingUnknown;
                return true;
            }
        }
        if (s.indexOf(":") >= 0) {
            let s0 = parser.find_namespace(s.split(":")[0]);
            let s1 = s.split(":")[1];
            if (s0 == "http://www.w3.org/2003/05/soap-envelope" && s1 == "MustUnderstand") {
                this.v = this.MustUnderstand;
                return true;
            }
        }
        if (s.indexOf(":") >= 0) {
            let s0 = parser.find_namespace(s.split(":")[0]);
            let s1 = s.split(":")[1];
            if (s0 == "http://www.w3.org/2003/05/soap-envelope" && s1 == "Receiver") {
                this.v = this.Receiver;
                return true;
            }
        }
        if (s.indexOf(":") >= 0) {
            let s0 = parser.find_namespace(s.split(":")[0]);
            let s1 = s.split(":")[1];
            if (s0 == "http://www.w3.org/2003/05/soap-envelope" && s1 == "Sender") {
                this.v = this.Sender;
                return true;
            }
        }
        if (s.indexOf(":") >= 0) {
            let s0 = parser.find_namespace(s.split(":")[0]);
            let s1 = s.split(":")[1];
            if (s0 == "http://www.w3.org/2003/05/soap-envelope" && s1 == "VersionMismatch") {
                this.v = this.VersionMismatch;
                return true;
            }
        }
        return false;
    }

    to_string(){
        if (this.v == this.DataEncodingUnknown) { return "soap:DataEncodingUnknown"; }
        if (this.v == this.MustUnderstand) { return "soap:MustUnderstand"; }
        if (this.v == this.Receiver) { return "soap:Receiver"; }
        if (this.v == this.Sender) { return "soap:Sender"; }
        if (this.v == this.VersionMismatch) { return "soap:VersionMismatch"; }
        return "";
    }
}
export class soap_subcode extends types.xsd_type
{
    constructor(){
        super();
        this.Value = new xsd_QName(); // xsd_QName Value{};
        this.Subcode = new soap_subcode(); this.Subcode['isP'] = true; // soap_subcode* Subcode{};
    }

    write(obj, w){
        w.write(obj, "soap", "Value", this.Value);
        w.write(obj, "soap", "Subcode", this.Subcode);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "Value", this.Value)) return false;
        if (!r.read(obj, "soap", "Subcode", this.Subcode)) return false;
        return true;
    }
}
export class soap_faultcode extends types.xsd_type
{
    constructor(){
        super();
        this.Value = new soap_faultcodeEnum(); // soap_faultcodeEnum Value{};
        this.Subcode = new soap_subcode(); this.Subcode['isP'] = true; // soap_subcode* Subcode{};
    }

    write(obj, w){
        w.write(obj, "soap", "Value", this.Value);
        w.write(obj, "soap", "Subcode", this.Subcode);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "Value", this.Value)) return false;
        if (!r.read(obj, "soap", "Subcode", this.Subcode)) return false;
        return true;
    }
}
export class soap_reasontext extends xsd_string
{
    constructor(){
        super();
        this.lang = new ns_lang(); // ns_lang lang{};
    }

    write(obj, w){
        xsd_string.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "xml.lang", this.lang);
    }

    read(obj, r){
        if (!xsd_string.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "lang", this.lang)) return false;
        return true;
    }
}
export class soap_faultreason extends types.xsd_type
{
    constructor(){
        super();
        this.Text = new types.xsd_list(soap_reasontext); // xsd_list<soap_reasontext> Text{};
    }

    write(obj, w){
        w.write(obj, "soap", "Text", this.Text);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "Text", this.Text)) return false;
        return true;
    }
}
export class soap_detail extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class soap_Fault extends types.xsd_type
{
    constructor(){
        super();
        this.Code = new soap_faultcode(); // soap_faultcode Code{};
        this.Reason = new soap_faultreason(); // soap_faultreason Reason{};
        this.Node = new xsd_anyURI(); this.Node['isP'] = true; // xsd_anyURI* Node{};
        this.Role = new xsd_anyURI(); this.Role['isP'] = true; // xsd_anyURI* Role{};
        this.Detail = new soap_detail(); this.Detail['isP'] = true; // soap_detail* Detail{};
    }

    write(obj, w){
        w.write(obj, "soap", "Code", this.Code);
        w.write(obj, "soap", "Reason", this.Reason);
        w.write(obj, "soap", "Node", this.Node);
        w.write(obj, "soap", "Role", this.Role);
        w.write(obj, "soap", "Detail", this.Detail);
    }

    read(obj, r){
        if (!r.read(obj, "soap", "Code", this.Code)) return false;
        if (!r.read(obj, "soap", "Reason", this.Reason)) return false;
        if (!r.read(obj, "soap", "Node", this.Node)) return false;
        if (!r.read(obj, "soap", "Role", this.Role)) return false;
        if (!r.read(obj, "soap", "Detail", this.Detail)) return false;
        return true;
    }
}
export const _soap_Fault = soap_Fault; // using elem "Fault"
export const wsu_Id = xsd_ID;
export class wsu_commonAtts extends types.xsd_type
{
    constructor(){
        super();
        this.Id = new xsd_ID(); this.Id['isP'] = true; // xsd_ID* Id{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "Id", this.Id);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "Id", this.Id)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsu_AttributedDateTime extends xsd_string
{
    constructor(){
        super();
        this.Id = new xsd_ID(); this.Id['isP'] = true; // xsd_ID* Id{};
    }

    write(obj, w){
        xsd_string.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "Id", this.Id);
    }

    read(obj, r){
        if (!xsd_string.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "Id", this.Id)) return false;
        return true;
    }
}
export const wsu_Created = wsu_AttributedDateTime; // using elem "commonAtts"
export class wsse_SecurityHeaderType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsse", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const wsse_Security = wsse_SecurityHeaderType; // using elem "SecurityHeaderType"
export class wsse_AttributedString extends xsd_string
{
    constructor(){
        super();
        this.Id = new xsd_ID(); this.Id['isP'] = true; // xsd_ID* Id{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        xsd_string.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "Id", this.Id);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!xsd_string.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "Id", this.Id)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsse_PasswordString extends wsse_AttributedString
{
    constructor(){
        super();
        this.Type = new xsd_anyURI(); this.Type['isP'] = true; // xsd_anyURI* Type{};
    }

    write(obj, w){
        wsse_AttributedString.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "Type", this.Type);
    }

    read(obj, r){
        if (!wsse_AttributedString.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        return true;
    }
}
export const wsse_Password = wsse_PasswordString; // using elem "SecurityHeaderType"
export class wsse_EncodedString extends wsse_AttributedString
{
    constructor(){
        super();
        this.EncodingType = new xsd_anyURI(); this.EncodingType['isP'] = true; // xsd_anyURI* EncodingType{};
    }

    write(obj, w){
        wsse_AttributedString.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "EncodingType", this.EncodingType);
    }

    read(obj, r){
        if (!wsse_AttributedString.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "EncodingType", this.EncodingType)) return false;
        return true;
    }
}
export const wsse_Nonce = wsse_EncodedString; // using elem "SecurityHeaderType"
export class wsse_UsernameTokenType extends types.xsd_type
{
    constructor(){
        super();
        this.Username = new wsse_AttributedString(); // wsse_AttributedString Username{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Id = new xsd_ID(); this.Id['isP'] = true; // xsd_ID* Id{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "wsse", "Username", this.Username);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Id", this.Id);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsse", "Username", this.Username)) return false;
        if (!r.read(obj, "wsse", "", this.any)) return false;
        if (!r.read_attribute(obj, "Id", this.Id)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const wsse_UsernameToken = wsse_UsernameTokenType; // using elem "UsernameTokenType"
export class wsa5_AttributedURIType extends xsd_anyURI
{
    constructor(){
        super();
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        xsd_anyURI.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!xsd_anyURI.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsa5_ReferenceParametersType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsa5", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsa5_MetadataType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsa5", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const wsa5_Metadata = wsa5_MetadataType; // using elem "MetadataType"
export class wsa5_EndpointReferenceType extends types.xsd_type
{
    constructor(){
        super();
        this.Address = new wsa5_AttributedURIType(); // wsa5_AttributedURIType Address{};
        this.ReferenceParameters = new wsa5_ReferenceParametersType(); this.ReferenceParameters['isP'] = true; // wsa5_ReferenceParametersType* ReferenceParameters{};
        this.Metadata = new wsa5_MetadataType(); this.Metadata['isP'] = true; // wsa5_MetadataType* Metadata{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "wsa5", "Address", this.Address);
        w.write(obj, "wsa5", "ReferenceParameters", this.ReferenceParameters);
        w.write(obj, "wsa5", "Metadata", this.Metadata);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsa5", "Address", this.Address)) return false;
        if (!r.read(obj, "wsa5", "ReferenceParameters", this.ReferenceParameters)) return false;
        if (!r.read(obj, "wsa5", "Metadata", this.Metadata)) return false;
        if (!r.read(obj, "wsa5", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const wsa5_ReplyTo = wsa5_EndpointReferenceType; // using elem "EndpointReferenceType"
export const wsa5_From = wsa5_EndpointReferenceType; // using elem "EndpointReferenceType"
export const wsa5_FaultTo = wsa5_EndpointReferenceType; // using elem "EndpointReferenceType"
export const wsa5_To = wsa5_AttributedURIType; // using elem "EndpointReferenceType"
export const wsa5_Action = wsa5_AttributedURIType; // using elem "EndpointReferenceType"
export class xop_Include extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.href = new xsd_anyURI(); // xsd_anyURI href{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "href", this.href);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "xop", "", this.any)) return false;
        if (!r.read_attribute(obj, "href", this.href)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const _xop_Include = xop_Include; // using elem "Include"
export const xmime_contentType = xsd_string;
export class wsrf_bf_ErrorCode_0 extends xsd_anyType
{
    constructor(){
        super();
        this.dialect = new xsd_anyURI(); // xsd_anyURI dialect{};
    }

    write(obj, w){
        xsd_anyType.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "dialect", this.dialect);
    }

    read(obj, r){
        if (!xsd_anyType.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "dialect", this.dialect)) return false;
        return true;
    }
}
export class wsrf_bf_Description_0 extends xsd_string
{
    constructor(){
        super();
        this.lang = new ns_lang(); this.lang['isP'] = true; // ns_lang* lang{};
    }

    write(obj, w){
        xsd_string.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "xml.lang", this.lang);
    }

    read(obj, r){
        if (!xsd_string.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "lang", this.lang)) return false;
        return true;
    }
}
export class wsrf_bf_FaultCause_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.any_t({}); // any_t any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsrf_bf", "", this.any)) return false;
        return true;
    }
}
export class wsrf_bf_BaseFaultType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Timestamp = new xsd_dateTime(); // xsd_dateTime Timestamp{};
        this.Originator = new wsa5_EndpointReferenceType(); this.Originator['isP'] = true; // wsa5_EndpointReferenceType* Originator{};
        this.ErrorCode = new wsrf_bf_ErrorCode_0(); this.ErrorCode['isP'] = true; // wsrf_bf_ErrorCode_0* ErrorCode{};
        this.Description = new types.xsd_list(wsrf_bf_Description_0); // xsd_list<wsrf_bf_Description_0> Description{};
        this.FaultCause = new wsrf_bf_FaultCause_0(); this.FaultCause['isP'] = true; // wsrf_bf_FaultCause_0* FaultCause{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "wsrf_bf", "Timestamp", this.Timestamp);
        w.write(obj, "wsrf_bf", "Originator", this.Originator);
        w.write(obj, "wsrf_bf", "ErrorCode", this.ErrorCode);
        w.write(obj, "wsrf_bf", "Description", this.Description);
        w.write(obj, "wsrf_bf", "FaultCause", this.FaultCause);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsrf_bf", "", this.any)) return false;
        if (!r.read(obj, "wsrf_bf", "Timestamp", this.Timestamp)) return false;
        if (!r.read(obj, "wsrf_bf", "Originator", this.Originator)) return false;
        if (!r.read(obj, "wsrf_bf", "ErrorCode", this.ErrorCode)) return false;
        if (!r.read(obj, "wsrf_bf", "Description", this.Description)) return false;
        if (!r.read(obj, "wsrf_bf", "FaultCause", this.FaultCause)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsrf_r_ResourceUnknownFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsrf_r_ResourceUnknownFault = wsrf_r_ResourceUnknownFaultType; // using elem ""
export class wstop_Documentation extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wstop", "", this.any)) return false;
        return true;
    }
}
export class wstop_ExtensibleDocumented extends types.xsd_type
{
    constructor(){
        super();
        this.documentation = new wstop_Documentation(); this.documentation['isP'] = true; // wstop_Documentation* documentation{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "wstop", "documentation", this.documentation);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wstop", "documentation", this.documentation)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wstop_TopicSetType extends wstop_ExtensibleDocumented
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        wstop_ExtensibleDocumented.prototype.write.call(this, obj, w);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!wstop_ExtensibleDocumented.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "wstop", "", this.any)) return false;
        return true;
    }
}
export const wstop_TopicSet = wstop_TopicSetType; // using elem "ExtensibleDocumented"
export const wsnt_SubscriptionReference = wsa5_EndpointReferenceType; // using elem ""
export class wsnt_TopicExpressionType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.any_t({}); this.any['isP'] = true; // any_t* any{};
        this.Dialect = new xsd_anyURI(); // xsd_anyURI Dialect{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Dialect", this.Dialect);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "Dialect", this.Dialect)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const wsnt_Topic = wsnt_TopicExpressionType; // using elem "TopicExpressionType"
export const wsnt_ProducerReference = wsa5_EndpointReferenceType; // using elem "TopicExpressionType"
export class wsnt_Message_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.any_t({}); // any_t any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_NotificationMessageHolderType extends types.xsd_type
{
    constructor(){
        super();
        this.SubscriptionReference = new wsa5_EndpointReferenceType(); this.SubscriptionReference['isP'] = true; // wsa5_EndpointReferenceType* SubscriptionReference{};
        this.Topic = new wsnt_TopicExpressionType(); this.Topic['isP'] = true; // wsnt_TopicExpressionType* Topic{};
        this.ProducerReference = new wsa5_EndpointReferenceType(); this.ProducerReference['isP'] = true; // wsa5_EndpointReferenceType* ProducerReference{};
        this.Message = new wsnt_Message_0(); // wsnt_Message_0 Message{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "SubscriptionReference", this.SubscriptionReference);
        w.write(obj, "wsnt", "Topic", this.Topic);
        w.write(obj, "wsnt", "ProducerReference", this.ProducerReference);
        w.write(obj, "wsnt", "Message", this.Message);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "SubscriptionReference", this.SubscriptionReference)) return false;
        if (!r.read(obj, "wsnt", "Topic", this.Topic)) return false;
        if (!r.read(obj, "wsnt", "ProducerReference", this.ProducerReference)) return false;
        if (!r.read(obj, "wsnt", "Message", this.Message)) return false;
        return true;
    }
}
export const wsnt_NotificationMessage = wsnt_NotificationMessageHolderType; // using elem "NotificationMessageHolderType"
export class wsnt_FilterType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_AbsoluteOrRelativeTimeType extends types.xsd_type // union
{
    constructor(){
        super();
        this._0 = null;
        this._1 = null;
    }

    write(obj, w){
        if( this._0 != null ){ return w.write(obj, "wsnt", "AbsoluteOrRelativeTimeType", this._0); } // union write
        if( this._1 != null ){ return w.write(obj, "wsnt", "AbsoluteOrRelativeTimeType", this._1); } // union write
    }

    read(obj, r){
        if( r.read(obj, "wsnt", "AbsoluteOrRelativeTimeType", this._0) ) return true; // union read
        if( r.read(obj, "wsnt", "AbsoluteOrRelativeTimeType", this._1) ) return true; // union read
        return false;
    }
}
export const wsnt_CurrentTime = xsd_dateTime; // using elem "FilterType"
export const wsnt_TerminationTime = xsd_dateTime; // using elem "FilterType"
export class wsnt_InvalidFilterFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
        this.UnknownFilter = new types.xsd_list(xsd_QName); // xsd_list<xsd_QName> UnknownFilter{};
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
        w.write(obj, "wsnt", "UnknownFilter", this.UnknownFilter);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "wsnt", "UnknownFilter", this.UnknownFilter)) return false;
        return true;
    }
}
export const wsnt_InvalidFilterFault = wsnt_InvalidFilterFaultType; // using elem "FilterType"
export class wsnt_TopicExpressionDialectUnknownFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_TopicExpressionDialectUnknownFault = wsnt_TopicExpressionDialectUnknownFaultType; // using elem "FilterType"
export class wsnt_InvalidTopicExpressionFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_InvalidTopicExpressionFault = wsnt_InvalidTopicExpressionFaultType; // using elem "FilterType"
export class wsnt_TopicNotSupportedFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_TopicNotSupportedFault = wsnt_TopicNotSupportedFaultType; // using elem "FilterType"
export class wsnt_InvalidProducerPropertiesExpressionFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_InvalidProducerPropertiesExpressionFault = wsnt_InvalidProducerPropertiesExpressionFaultType; // using elem "FilterType"
export class wsnt_InvalidMessageContentExpressionFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_InvalidMessageContentExpressionFault = wsnt_InvalidMessageContentExpressionFaultType; // using elem "FilterType"
export class wsnt_UnacceptableInitialTerminationTimeFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
        this.MinimumTime = new xsd_dateTime(); // xsd_dateTime MinimumTime{};
        this.MaximumTime = new xsd_dateTime(); this.MaximumTime['isP'] = true; // xsd_dateTime* MaximumTime{};
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
        w.write(obj, "wsnt", "MinimumTime", this.MinimumTime);
        w.write(obj, "wsnt", "MaximumTime", this.MaximumTime);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "wsnt", "MinimumTime", this.MinimumTime)) return false;
        if (!r.read(obj, "wsnt", "MaximumTime", this.MaximumTime)) return false;
        return true;
    }
}
export const wsnt_UnacceptableInitialTerminationTimeFault = wsnt_UnacceptableInitialTerminationTimeFaultType; // using elem "FilterType"
export class wsnt_UnrecognizedPolicyRequestFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
        this.UnrecognizedPolicy = new types.xsd_list(xsd_QName); // xsd_list<xsd_QName> UnrecognizedPolicy{};
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
        w.write(obj, "wsnt", "UnrecognizedPolicy", this.UnrecognizedPolicy);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "wsnt", "UnrecognizedPolicy", this.UnrecognizedPolicy)) return false;
        return true;
    }
}
export const wsnt_UnrecognizedPolicyRequestFault = wsnt_UnrecognizedPolicyRequestFaultType; // using elem "FilterType"
export class wsnt_UnsupportedPolicyRequestFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
        this.UnsupportedPolicy = new types.xsd_list(xsd_QName); // xsd_list<xsd_QName> UnsupportedPolicy{};
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
        w.write(obj, "wsnt", "UnsupportedPolicy", this.UnsupportedPolicy);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "wsnt", "UnsupportedPolicy", this.UnsupportedPolicy)) return false;
        return true;
    }
}
export const wsnt_UnsupportedPolicyRequestFault = wsnt_UnsupportedPolicyRequestFaultType; // using elem "FilterType"
export class wsnt_NotifyMessageNotSupportedFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_NotifyMessageNotSupportedFault = wsnt_NotifyMessageNotSupportedFaultType; // using elem "FilterType"
export class wsnt_SubscribeCreationFailedFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_SubscribeCreationFailedFault = wsnt_SubscribeCreationFailedFaultType; // using elem "FilterType"
export const wsnt_FixedTopicSet = xsd_boolean; // using elem "FilterType"
export const wsnt_TopicExpressionDialect = xsd_anyURI; // using elem "FilterType"
export class wsnt_Renew extends types.xsd_type
{
    constructor(){
        super();
        this.TerminationTime = new wsnt_AbsoluteOrRelativeTimeType(); // wsnt_AbsoluteOrRelativeTimeType TerminationTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "TerminationTime", this.TerminationTime);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "TerminationTime", this.TerminationTime)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_RenewResponse extends types.xsd_type
{
    constructor(){
        super();
        this.TerminationTime = new xsd_dateTime(); // xsd_dateTime TerminationTime{};
        this.CurrentTime = new xsd_dateTime(); this.CurrentTime['isP'] = true; // xsd_dateTime* CurrentTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "TerminationTime", this.TerminationTime);
        w.write(obj, "wsnt", "CurrentTime", this.CurrentTime);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "TerminationTime", this.TerminationTime)) return false;
        if (!r.read(obj, "wsnt", "CurrentTime", this.CurrentTime)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_UnacceptableTerminationTimeFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
        this.MinimumTime = new xsd_dateTime(); // xsd_dateTime MinimumTime{};
        this.MaximumTime = new xsd_dateTime(); this.MaximumTime['isP'] = true; // xsd_dateTime* MaximumTime{};
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
        w.write(obj, "wsnt", "MinimumTime", this.MinimumTime);
        w.write(obj, "wsnt", "MaximumTime", this.MaximumTime);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "wsnt", "MinimumTime", this.MinimumTime)) return false;
        if (!r.read(obj, "wsnt", "MaximumTime", this.MaximumTime)) return false;
        return true;
    }
}
export const wsnt_UnacceptableTerminationTimeFault = wsnt_UnacceptableTerminationTimeFaultType; // using elem "RenewResponse"
export class wsnt_Unsubscribe extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_UnsubscribeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_UnableToDestroySubscriptionFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_UnableToDestroySubscriptionFault = wsnt_UnableToDestroySubscriptionFaultType; // using elem "UnsubscribeResponse"
export class wsnt_SubscriptionPolicy_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_Subscribe extends types.xsd_type
{
    constructor(){
        super();
        this.ConsumerReference = new wsa5_EndpointReferenceType(); // wsa5_EndpointReferenceType ConsumerReference{};
        this.Filter = new wsnt_FilterType(); this.Filter['isP'] = true; // wsnt_FilterType* Filter{};
        this.InitialTerminationTime = new wsnt_AbsoluteOrRelativeTimeType(); this.InitialTerminationTime['isP'] = true; // wsnt_AbsoluteOrRelativeTimeType* InitialTerminationTime{};
        this.SubscriptionPolicy = new wsnt_SubscriptionPolicy_0(); this.SubscriptionPolicy['isP'] = true; // wsnt_SubscriptionPolicy_0* SubscriptionPolicy{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "ConsumerReference", this.ConsumerReference);
        w.write(obj, "wsnt", "Filter", this.Filter);
        w.write(obj, "wsnt", "InitialTerminationTime", this.InitialTerminationTime);
        w.write(obj, "wsnt", "SubscriptionPolicy", this.SubscriptionPolicy);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "ConsumerReference", this.ConsumerReference)) return false;
        if (!r.read(obj, "wsnt", "Filter", this.Filter)) return false;
        if (!r.read(obj, "wsnt", "InitialTerminationTime", this.InitialTerminationTime)) return false;
        if (!r.read(obj, "wsnt", "SubscriptionPolicy", this.SubscriptionPolicy)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_SubscribeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SubscriptionReference = new wsa5_EndpointReferenceType(); // wsa5_EndpointReferenceType SubscriptionReference{};
        this.CurrentTime = new xsd_dateTime(); this.CurrentTime['isP'] = true; // xsd_dateTime* CurrentTime{};
        this.TerminationTime = new xsd_dateTime(); this.TerminationTime['isP'] = true; // xsd_dateTime* TerminationTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "SubscriptionReference", this.SubscriptionReference);
        w.write(obj, "wsnt", "CurrentTime", this.CurrentTime);
        w.write(obj, "wsnt", "TerminationTime", this.TerminationTime);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "SubscriptionReference", this.SubscriptionReference)) return false;
        if (!r.read(obj, "wsnt", "CurrentTime", this.CurrentTime)) return false;
        if (!r.read(obj, "wsnt", "TerminationTime", this.TerminationTime)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_GetCurrentMessage extends types.xsd_type
{
    constructor(){
        super();
        this.Topic = new wsnt_TopicExpressionType(); // wsnt_TopicExpressionType Topic{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "Topic", this.Topic);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "Topic", this.Topic)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_GetCurrentMessageResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_NoCurrentMessageOnTopicFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_NoCurrentMessageOnTopicFault = wsnt_NoCurrentMessageOnTopicFaultType; // using elem "GetCurrentMessageResponse"
export class wsnt_MultipleTopicsSpecifiedFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_MultipleTopicsSpecifiedFault = wsnt_MultipleTopicsSpecifiedFaultType; // using elem "GetCurrentMessageResponse"
export class wsnt_Notify extends types.xsd_type
{
    constructor(){
        super();
        this.NotificationMessage = new types.xsd_list(wsnt_NotificationMessageHolderType); // xsd_list<wsnt_NotificationMessageHolderType> NotificationMessage{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "NotificationMessage", this.NotificationMessage);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "NotificationMessage", this.NotificationMessage)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_GetMessages extends types.xsd_type
{
    constructor(){
        super();
        this.MaximumNumber = new xsd_nonNegativeInteger(); this.MaximumNumber['isP'] = true; // xsd_nonNegativeInteger* MaximumNumber{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "MaximumNumber", this.MaximumNumber);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "MaximumNumber", this.MaximumNumber)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsnt_GetMessagesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NotificationMessage = new types.xsd_list(wsnt_NotificationMessageHolderType); // xsd_list<wsnt_NotificationMessageHolderType> NotificationMessage{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "NotificationMessage", this.NotificationMessage);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "NotificationMessage", this.NotificationMessage)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsnt_UnableToGetMessagesFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_UnableToGetMessagesFault = wsnt_UnableToGetMessagesFaultType; // using elem "GetMessagesResponse"
export class wsnt_DestroyPullPoint extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsnt_DestroyPullPointResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsnt_UnableToDestroyPullPointFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_UnableToDestroyPullPointFault = wsnt_UnableToDestroyPullPointFaultType; // using elem "DestroyPullPointResponse"
export class wsnt_CreatePullPoint extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsnt_CreatePullPointResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PullPoint = new wsa5_EndpointReferenceType(); // wsa5_EndpointReferenceType PullPoint{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "wsnt", "PullPoint", this.PullPoint);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "PullPoint", this.PullPoint)) return false;
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class wsnt_UnableToCreatePullPointFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_UnableToCreatePullPointFault = wsnt_UnableToCreatePullPointFaultType; // using elem "CreatePullPointResponse"
export class wsnt_PauseSubscription extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_PauseSubscriptionResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_PauseFailedFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_PauseFailedFault = wsnt_PauseFailedFaultType; // using elem "PauseSubscriptionResponse"
export class wsnt_ResumeSubscription extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_ResumeSubscriptionResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        return true;
    }
}
export class wsnt_ResumeFailedFaultType extends wsrf_bf_BaseFaultType
{
    constructor(){
        super();
    }

    write(obj, w){
        wsrf_bf_BaseFaultType.prototype.write.call(this, obj, w);
    }

    read(obj, r){
        if (!wsrf_bf_BaseFaultType.prototype.read.call(this, obj, r))
            return false;
        return true;
    }
}
export const wsnt_ResumeFailedFault = wsnt_ResumeFailedFaultType; // using elem "ResumeSubscriptionResponse"
export class wsnt_QueryExpressionType extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.any_t({}); this.any['isP'] = true; // any_t* any{};
        this.Dialect = new xsd_anyURI(); // xsd_anyURI Dialect{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Dialect", this.Dialect);
    }

    read(obj, r){
        if (!r.read(obj, "wsnt", "", this.any)) return false;
        if (!r.read_attribute(obj, "Dialect", this.Dialect)) return false;
        return true;
    }
}
export class tt_OnvifVersion extends types.xsd_type
{
    constructor(){
        super();
        this.Major = new xsd_int_(); // xsd_int_ Major{};
        this.Minor = new xsd_int_(); // xsd_int_ Minor{};
    }

    write(obj, w){
        w.write(obj, "tt", "Major", this.Major);
        w.write(obj, "tt", "Minor", this.Minor);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Major", this.Major)) return false;
        if (!r.read(obj, "tt", "Minor", this.Minor)) return false;
        return true;
    }
}
export const tt_StringAttrList = new types.xsd_simplelist(xsd_string); // xsd_simplelist<xsd_string>;
export class tt_SetDateTimeType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Manual= 0;
        this.NTP= 1;
    }

    parse(parser, s){
        if (s == "Manual") { this.v = this.Manual; return true; }
        if (s == "NTP") { this.v = this.NTP; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Manual) { return "Manual"; }
        if (this.v == this.NTP) { return "NTP"; }
        return "";
    }
}
export class tt_TimeZone extends types.xsd_type
{
    constructor(){
        super();
        this.TZ = new xsd_token(); // xsd_token TZ{};
    }

    write(obj, w){
        w.write(obj, "tt", "TZ", this.TZ);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "TZ", this.TZ)) return false;
        return true;
    }
}
export class tt_Time extends types.xsd_type
{
    constructor(){
        super();
        this.Hour = new xsd_int_(); // xsd_int_ Hour{};
        this.Minute = new xsd_int_(); // xsd_int_ Minute{};
        this.Second = new xsd_int_(); // xsd_int_ Second{};
    }

    write(obj, w){
        w.write(obj, "tt", "Hour", this.Hour);
        w.write(obj, "tt", "Minute", this.Minute);
        w.write(obj, "tt", "Second", this.Second);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Hour", this.Hour)) return false;
        if (!r.read(obj, "tt", "Minute", this.Minute)) return false;
        if (!r.read(obj, "tt", "Second", this.Second)) return false;
        return true;
    }
}
export class tt_Date extends types.xsd_type
{
    constructor(){
        super();
        this.Year = new xsd_int_(); // xsd_int_ Year{};
        this.Month = new xsd_int_(); // xsd_int_ Month{};
        this.Day = new xsd_int_(); // xsd_int_ Day{};
    }

    write(obj, w){
        w.write(obj, "tt", "Year", this.Year);
        w.write(obj, "tt", "Month", this.Month);
        w.write(obj, "tt", "Day", this.Day);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Year", this.Year)) return false;
        if (!r.read(obj, "tt", "Month", this.Month)) return false;
        if (!r.read(obj, "tt", "Day", this.Day)) return false;
        return true;
    }
}
export class tt_DateTime extends types.xsd_type
{
    constructor(){
        super();
        this.Time = new tt_Time(); // tt_Time Time{};
        this.Date = new tt_Date(); // tt_Date Date{};
    }

    write(obj, w){
        w.write(obj, "tt", "Time", this.Time);
        w.write(obj, "tt", "Date", this.Date);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Time", this.Time)) return false;
        if (!r.read(obj, "tt", "Date", this.Date)) return false;
        return true;
    }
}
export class tt_SystemDateTimeExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_SystemDateTime extends types.xsd_type
{
    constructor(){
        super();
        this.DateTimeType = new tt_SetDateTimeType(); // tt_SetDateTimeType DateTimeType{};
        this.DaylightSavings = new xsd_boolean(); // xsd_boolean DaylightSavings{};
        this.TimeZone = new tt_TimeZone(); this.TimeZone['isP'] = true; // tt_TimeZone* TimeZone{};
        this.UTCDateTime = new tt_DateTime(); this.UTCDateTime['isP'] = true; // tt_DateTime* UTCDateTime{};
        this.LocalDateTime = new tt_DateTime(); this.LocalDateTime['isP'] = true; // tt_DateTime* LocalDateTime{};
        this.Extension = new tt_SystemDateTimeExtension(); this.Extension['isP'] = true; // tt_SystemDateTimeExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "DateTimeType", this.DateTimeType);
        w.write(obj, "tt", "DaylightSavings", this.DaylightSavings);
        w.write(obj, "tt", "TimeZone", this.TimeZone);
        w.write(obj, "tt", "UTCDateTime", this.UTCDateTime);
        w.write(obj, "tt", "LocalDateTime", this.LocalDateTime);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "DateTimeType", this.DateTimeType)) return false;
        if (!r.read(obj, "tt", "DaylightSavings", this.DaylightSavings)) return false;
        if (!r.read(obj, "tt", "TimeZone", this.TimeZone)) return false;
        if (!r.read(obj, "tt", "UTCDateTime", this.UTCDateTime)) return false;
        if (!r.read(obj, "tt", "LocalDateTime", this.LocalDateTime)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_FactoryDefaultType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Hard= 0;
        this.Soft= 1;
    }

    parse(parser, s){
        if (s == "Hard") { this.v = this.Hard; return true; }
        if (s == "Soft") { this.v = this.Soft; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Hard) { return "Hard"; }
        if (this.v == this.Soft) { return "Soft"; }
        return "";
    }
}
export class tt_AttachmentData extends types.xsd_type
{
    constructor(){
        super();
        this.Include = new xop_Include(); // xop_Include Include{};
        this.contentType = new xmime_contentType(); this.contentType['isP'] = true; // xmime_contentType* contentType{};
    }

    write(obj, w){
        w.write(obj, "tt", "Include", this.Include);
        w.write_attribute(obj, "contentType", this.contentType);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Include", this.Include)) return false;
        if (!r.read_attribute(obj, "contentType", this.contentType)) return false;
        return true;
    }
}
export class tt_BackupFile extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Data = new tt_AttachmentData(); // tt_AttachmentData Data{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "Data", this.Data);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "Data", this.Data)) return false;
        return true;
    }
}
export class tt_SystemLogType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.System= 0;
        this.Access= 1;
    }

    parse(parser, s){
        if (s == "System") { this.v = this.System; return true; }
        if (s == "Access") { this.v = this.Access; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.System) { return "System"; }
        if (this.v == this.Access) { return "Access"; }
        return "";
    }
}
export class tt_SystemLog extends types.xsd_type
{
    constructor(){
        super();
        this.Binary = new tt_AttachmentData(); this.Binary['isP'] = true; // tt_AttachmentData* Binary{};
        this.String = new xsd_string(); this.String['isP'] = true; // xsd_string* String{};
    }

    write(obj, w){
        w.write(obj, "tt", "Binary", this.Binary);
        w.write(obj, "tt", "String", this.String);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Binary", this.Binary)) return false;
        if (!r.read(obj, "tt", "String", this.String)) return false;
        return true;
    }
}
export class tt_SupportInformation extends types.xsd_type
{
    constructor(){
        super();
        this.Binary = new tt_AttachmentData(); this.Binary['isP'] = true; // tt_AttachmentData* Binary{};
        this.String = new xsd_string(); this.String['isP'] = true; // xsd_string* String{};
    }

    write(obj, w){
        w.write(obj, "tt", "Binary", this.Binary);
        w.write(obj, "tt", "String", this.String);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Binary", this.Binary)) return false;
        if (!r.read(obj, "tt", "String", this.String)) return false;
        return true;
    }
}
export class tt_ScopeDefinition extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Fixed= 0;
        this.Configurable= 1;
    }

    parse(parser, s){
        if (s == "Fixed") { this.v = this.Fixed; return true; }
        if (s == "Configurable") { this.v = this.Configurable; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Fixed) { return "Fixed"; }
        if (this.v == this.Configurable) { return "Configurable"; }
        return "";
    }
}
export class tt_Scope extends types.xsd_type
{
    constructor(){
        super();
        this.ScopeDef = new tt_ScopeDefinition(); // tt_ScopeDefinition ScopeDef{};
        this.ScopeItem = new xsd_anyURI(); // xsd_anyURI ScopeItem{};
    }

    write(obj, w){
        w.write(obj, "tt", "ScopeDef", this.ScopeDef);
        w.write(obj, "tt", "ScopeItem", this.ScopeItem);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ScopeDef", this.ScopeDef)) return false;
        if (!r.read(obj, "tt", "ScopeItem", this.ScopeItem)) return false;
        return true;
    }
}
export class tt_DiscoveryMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Discoverable= 0;
        this.NonDiscoverable= 1;
    }

    parse(parser, s){
        if (s == "Discoverable") { this.v = this.Discoverable; return true; }
        if (s == "NonDiscoverable") { this.v = this.NonDiscoverable; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Discoverable) { return "Discoverable"; }
        if (this.v == this.NonDiscoverable) { return "NonDiscoverable"; }
        return "";
    }
}
export class tt_NetworkHostType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.IPv4= 0;
        this.IPv6= 1;
        this.DNS= 2;
    }

    parse(parser, s){
        if (s == "IPv4") { this.v = this.IPv4; return true; }
        if (s == "IPv6") { this.v = this.IPv6; return true; }
        if (s == "DNS") { this.v = this.DNS; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.IPv4) { return "IPv4"; }
        if (this.v == this.IPv6) { return "IPv6"; }
        if (this.v == this.DNS) { return "DNS"; }
        return "";
    }
}
export const tt_IPv4Address = xsd_token;
export const tt_IPv6Address = xsd_token;
export const tt_DNSName = xsd_token;
export class tt_NetworkHostExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_NetworkHost extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new tt_NetworkHostType(); // tt_NetworkHostType Type{};
        this.IPv4Address = new tt_IPv4Address(); this.IPv4Address['isP'] = true; // tt_IPv4Address* IPv4Address{};
        this.IPv6Address = new tt_IPv6Address(); this.IPv6Address['isP'] = true; // tt_IPv6Address* IPv6Address{};
        this.DNSname = new tt_DNSName(); this.DNSname['isP'] = true; // tt_DNSName* DNSname{};
        this.Extension = new tt_NetworkHostExtension(); this.Extension['isP'] = true; // tt_NetworkHostExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "IPv4Address", this.IPv4Address);
        w.write(obj, "tt", "IPv6Address", this.IPv6Address);
        w.write(obj, "tt", "DNSname", this.DNSname);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "IPv4Address", this.IPv4Address)) return false;
        if (!r.read(obj, "tt", "IPv6Address", this.IPv6Address)) return false;
        if (!r.read(obj, "tt", "DNSname", this.DNSname)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_RemoteUser extends types.xsd_type
{
    constructor(){
        super();
        this.Username = new xsd_string(); // xsd_string Username{};
        this.Password = new xsd_string(); this.Password['isP'] = true; // xsd_string* Password{};
        this.UseDerivedPassword = new xsd_boolean(); // xsd_boolean UseDerivedPassword{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Username", this.Username);
        w.write(obj, "tt", "Password", this.Password);
        w.write(obj, "tt", "UseDerivedPassword", this.UseDerivedPassword);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Username", this.Username)) return false;
        if (!r.read(obj, "tt", "Password", this.Password)) return false;
        if (!r.read(obj, "tt", "UseDerivedPassword", this.UseDerivedPassword)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_UserLevel extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Administrator= 0;
        this.Operator= 1;
        this.User= 2;
        this.Anonymous= 3;
        this.Extended= 4;
    }

    parse(parser, s){
        if (s == "Administrator") { this.v = this.Administrator; return true; }
        if (s == "Operator") { this.v = this.Operator; return true; }
        if (s == "User") { this.v = this.User; return true; }
        if (s == "Anonymous") { this.v = this.Anonymous; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Administrator) { return "Administrator"; }
        if (this.v == this.Operator) { return "Operator"; }
        if (this.v == this.User) { return "User"; }
        if (this.v == this.Anonymous) { return "Anonymous"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_UserExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_User extends types.xsd_type
{
    constructor(){
        super();
        this.Username = new xsd_string(); // xsd_string Username{};
        this.Password = new xsd_string(); this.Password['isP'] = true; // xsd_string* Password{};
        this.UserLevel = new tt_UserLevel(); // tt_UserLevel UserLevel{};
        this.Extension = new tt_UserExtension(); this.Extension['isP'] = true; // tt_UserExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Username", this.Username);
        w.write(obj, "tt", "Password", this.Password);
        w.write(obj, "tt", "UserLevel", this.UserLevel);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Username", this.Username)) return false;
        if (!r.read(obj, "tt", "Password", this.Password)) return false;
        if (!r.read(obj, "tt", "UserLevel", this.UserLevel)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_CapabilityCategory extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.All= 0;
        this.Analytics= 1;
        this.Device= 2;
        this.Events= 3;
        this.Imaging= 4;
        this.Media= 5;
        this.PTZ= 6;
    }

    parse(parser, s){
        if (s == "All") { this.v = this.All; return true; }
        if (s == "Analytics") { this.v = this.Analytics; return true; }
        if (s == "Device") { this.v = this.Device; return true; }
        if (s == "Events") { this.v = this.Events; return true; }
        if (s == "Imaging") { this.v = this.Imaging; return true; }
        if (s == "Media") { this.v = this.Media; return true; }
        if (s == "PTZ") { this.v = this.PTZ; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.All) { return "All"; }
        if (this.v == this.Analytics) { return "Analytics"; }
        if (this.v == this.Device) { return "Device"; }
        if (this.v == this.Events) { return "Events"; }
        if (this.v == this.Imaging) { return "Imaging"; }
        if (this.v == this.Media) { return "Media"; }
        if (this.v == this.PTZ) { return "PTZ"; }
        return "";
    }
}
export class tt_AnalyticsCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.RuleSupport = new xsd_boolean(); // xsd_boolean RuleSupport{};
        this.AnalyticsModuleSupport = new xsd_boolean(); // xsd_boolean AnalyticsModuleSupport{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "RuleSupport", this.RuleSupport);
        w.write(obj, "tt", "AnalyticsModuleSupport", this.AnalyticsModuleSupport);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "RuleSupport", this.RuleSupport)) return false;
        if (!r.read(obj, "tt", "AnalyticsModuleSupport", this.AnalyticsModuleSupport)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NetworkCapabilitiesExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_NetworkCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Dot11Configuration = new xsd_boolean(); this.Dot11Configuration['isP'] = true; // xsd_boolean* Dot11Configuration{};
        this.Extension = new tt_NetworkCapabilitiesExtension2(); this.Extension['isP'] = true; // tt_NetworkCapabilitiesExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Dot11Configuration", this.Dot11Configuration);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Dot11Configuration", this.Dot11Configuration)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_NetworkCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.IPFilter = new xsd_boolean(); this.IPFilter['isP'] = true; // xsd_boolean* IPFilter{};
        this.ZeroConfiguration = new xsd_boolean(); this.ZeroConfiguration['isP'] = true; // xsd_boolean* ZeroConfiguration{};
        this.IPVersion6 = new xsd_boolean(); this.IPVersion6['isP'] = true; // xsd_boolean* IPVersion6{};
        this.DynDNS = new xsd_boolean(); this.DynDNS['isP'] = true; // xsd_boolean* DynDNS{};
        this.Extension = new tt_NetworkCapabilitiesExtension(); this.Extension['isP'] = true; // tt_NetworkCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "IPFilter", this.IPFilter);
        w.write(obj, "tt", "ZeroConfiguration", this.ZeroConfiguration);
        w.write(obj, "tt", "IPVersion6", this.IPVersion6);
        w.write(obj, "tt", "DynDNS", this.DynDNS);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "IPFilter", this.IPFilter)) return false;
        if (!r.read(obj, "tt", "ZeroConfiguration", this.ZeroConfiguration)) return false;
        if (!r.read(obj, "tt", "IPVersion6", this.IPVersion6)) return false;
        if (!r.read(obj, "tt", "DynDNS", this.DynDNS)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SystemCapabilitiesExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_SystemCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.HttpFirmwareUpgrade = new xsd_boolean(); this.HttpFirmwareUpgrade['isP'] = true; // xsd_boolean* HttpFirmwareUpgrade{};
        this.HttpSystemBackup = new xsd_boolean(); this.HttpSystemBackup['isP'] = true; // xsd_boolean* HttpSystemBackup{};
        this.HttpSystemLogging = new xsd_boolean(); this.HttpSystemLogging['isP'] = true; // xsd_boolean* HttpSystemLogging{};
        this.HttpSupportInformation = new xsd_boolean(); this.HttpSupportInformation['isP'] = true; // xsd_boolean* HttpSupportInformation{};
        this.Extension = new tt_SystemCapabilitiesExtension2(); this.Extension['isP'] = true; // tt_SystemCapabilitiesExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "HttpFirmwareUpgrade", this.HttpFirmwareUpgrade);
        w.write(obj, "tt", "HttpSystemBackup", this.HttpSystemBackup);
        w.write(obj, "tt", "HttpSystemLogging", this.HttpSystemLogging);
        w.write(obj, "tt", "HttpSupportInformation", this.HttpSupportInformation);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "HttpFirmwareUpgrade", this.HttpFirmwareUpgrade)) return false;
        if (!r.read(obj, "tt", "HttpSystemBackup", this.HttpSystemBackup)) return false;
        if (!r.read(obj, "tt", "HttpSystemLogging", this.HttpSystemLogging)) return false;
        if (!r.read(obj, "tt", "HttpSupportInformation", this.HttpSupportInformation)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_SystemCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.DiscoveryResolve = new xsd_boolean(); // xsd_boolean DiscoveryResolve{};
        this.DiscoveryBye = new xsd_boolean(); // xsd_boolean DiscoveryBye{};
        this.RemoteDiscovery = new xsd_boolean(); // xsd_boolean RemoteDiscovery{};
        this.SystemBackup = new xsd_boolean(); // xsd_boolean SystemBackup{};
        this.SystemLogging = new xsd_boolean(); // xsd_boolean SystemLogging{};
        this.FirmwareUpgrade = new xsd_boolean(); // xsd_boolean FirmwareUpgrade{};
        this.SupportedVersions = new types.xsd_list(tt_OnvifVersion); // xsd_list<tt_OnvifVersion> SupportedVersions{};
        this.Extension = new tt_SystemCapabilitiesExtension(); this.Extension['isP'] = true; // tt_SystemCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "DiscoveryResolve", this.DiscoveryResolve);
        w.write(obj, "tt", "DiscoveryBye", this.DiscoveryBye);
        w.write(obj, "tt", "RemoteDiscovery", this.RemoteDiscovery);
        w.write(obj, "tt", "SystemBackup", this.SystemBackup);
        w.write(obj, "tt", "SystemLogging", this.SystemLogging);
        w.write(obj, "tt", "FirmwareUpgrade", this.FirmwareUpgrade);
        w.write(obj, "tt", "SupportedVersions", this.SupportedVersions);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "DiscoveryResolve", this.DiscoveryResolve)) return false;
        if (!r.read(obj, "tt", "DiscoveryBye", this.DiscoveryBye)) return false;
        if (!r.read(obj, "tt", "RemoteDiscovery", this.RemoteDiscovery)) return false;
        if (!r.read(obj, "tt", "SystemBackup", this.SystemBackup)) return false;
        if (!r.read(obj, "tt", "SystemLogging", this.SystemLogging)) return false;
        if (!r.read(obj, "tt", "FirmwareUpgrade", this.FirmwareUpgrade)) return false;
        if (!r.read(obj, "tt", "SupportedVersions", this.SupportedVersions)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const tt_AuxiliaryData = xsd_string;
export class tt_IOCapabilitiesExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_IOCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Auxiliary = new xsd_boolean(); this.Auxiliary['isP'] = true; // xsd_boolean* Auxiliary{};
        this.AuxiliaryCommands = new types.xsd_list(tt_AuxiliaryData); // xsd_list<tt_AuxiliaryData> AuxiliaryCommands{};
        this.Extension = new tt_IOCapabilitiesExtension2(); // tt_IOCapabilitiesExtension2 Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Auxiliary", this.Auxiliary);
        w.write(obj, "tt", "AuxiliaryCommands", this.AuxiliaryCommands);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Auxiliary", this.Auxiliary)) return false;
        if (!r.read(obj, "tt", "AuxiliaryCommands", this.AuxiliaryCommands)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IOCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.InputConnectors = new xsd_int_(); this.InputConnectors['isP'] = true; // xsd_int_* InputConnectors{};
        this.RelayOutputs = new xsd_int_(); this.RelayOutputs['isP'] = true; // xsd_int_* RelayOutputs{};
        this.Extension = new tt_IOCapabilitiesExtension(); this.Extension['isP'] = true; // tt_IOCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "InputConnectors", this.InputConnectors);
        w.write(obj, "tt", "RelayOutputs", this.RelayOutputs);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "InputConnectors", this.InputConnectors)) return false;
        if (!r.read(obj, "tt", "RelayOutputs", this.RelayOutputs)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SecurityCapabilitiesExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1X = new xsd_boolean(); // xsd_boolean Dot1X{};
        this.SupportedEAPMethod = new types.xsd_list(xsd_int_); // xsd_list<xsd_int_> SupportedEAPMethod{};
        this.RemoteUserHandling = new xsd_boolean(); // xsd_boolean RemoteUserHandling{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tt", "Dot1X", this.Dot1X);
        w.write(obj, "tt", "SupportedEAPMethod", this.SupportedEAPMethod);
        w.write(obj, "tt", "RemoteUserHandling", this.RemoteUserHandling);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Dot1X", this.Dot1X)) return false;
        if (!r.read(obj, "tt", "SupportedEAPMethod", this.SupportedEAPMethod)) return false;
        if (!r.read(obj, "tt", "RemoteUserHandling", this.RemoteUserHandling)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_SecurityCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.TLS1_0 = new xsd_boolean(); // xsd_boolean TLS1_0{};
        this.Extension = new tt_SecurityCapabilitiesExtension2(); this.Extension['isP'] = true; // tt_SecurityCapabilitiesExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "TLS1.0", this.TLS1_0);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "TLS1.0", this.TLS1_0)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_SecurityCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.TLS1_1 = new xsd_boolean(); // xsd_boolean TLS1_1{};
        this.TLS1_2 = new xsd_boolean(); // xsd_boolean TLS1_2{};
        this.OnboardKeyGeneration = new xsd_boolean(); // xsd_boolean OnboardKeyGeneration{};
        this.AccessPolicyConfig = new xsd_boolean(); // xsd_boolean AccessPolicyConfig{};
        this.X_509Token = new xsd_boolean(); // xsd_boolean X_509Token{};
        this.SAMLToken = new xsd_boolean(); // xsd_boolean SAMLToken{};
        this.KerberosToken = new xsd_boolean(); // xsd_boolean KerberosToken{};
        this.RELToken = new xsd_boolean(); // xsd_boolean RELToken{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Extension = new tt_SecurityCapabilitiesExtension(); this.Extension['isP'] = true; // tt_SecurityCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "TLS1.1", this.TLS1_1);
        w.write(obj, "tt", "TLS1.2", this.TLS1_2);
        w.write(obj, "tt", "OnboardKeyGeneration", this.OnboardKeyGeneration);
        w.write(obj, "tt", "AccessPolicyConfig", this.AccessPolicyConfig);
        w.write(obj, "tt", "X.509Token", this.X_509Token);
        w.write(obj, "tt", "SAMLToken", this.SAMLToken);
        w.write(obj, "tt", "KerberosToken", this.KerberosToken);
        w.write(obj, "tt", "RELToken", this.RELToken);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "TLS1.1", this.TLS1_1)) return false;
        if (!r.read(obj, "tt", "TLS1.2", this.TLS1_2)) return false;
        if (!r.read(obj, "tt", "OnboardKeyGeneration", this.OnboardKeyGeneration)) return false;
        if (!r.read(obj, "tt", "AccessPolicyConfig", this.AccessPolicyConfig)) return false;
        if (!r.read(obj, "tt", "X.509Token", this.X_509Token)) return false;
        if (!r.read(obj, "tt", "SAMLToken", this.SAMLToken)) return false;
        if (!r.read(obj, "tt", "KerberosToken", this.KerberosToken)) return false;
        if (!r.read(obj, "tt", "RELToken", this.RELToken)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DeviceCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_DeviceCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.Network = new tt_NetworkCapabilities(); this.Network['isP'] = true; // tt_NetworkCapabilities* Network{};
        this.System = new tt_SystemCapabilities(); this.System['isP'] = true; // tt_SystemCapabilities* System{};
        this.IO = new tt_IOCapabilities(); this.IO['isP'] = true; // tt_IOCapabilities* IO{};
        this.Security = new tt_SecurityCapabilities(); this.Security['isP'] = true; // tt_SecurityCapabilities* Security{};
        this.Extension = new tt_DeviceCapabilitiesExtension(); this.Extension['isP'] = true; // tt_DeviceCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "Network", this.Network);
        w.write(obj, "tt", "System", this.System);
        w.write(obj, "tt", "IO", this.IO);
        w.write(obj, "tt", "Security", this.Security);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "Network", this.Network)) return false;
        if (!r.read(obj, "tt", "System", this.System)) return false;
        if (!r.read(obj, "tt", "IO", this.IO)) return false;
        if (!r.read(obj, "tt", "Security", this.Security)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_EventCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.WSSubscriptionPolicySupport = new xsd_boolean(); // xsd_boolean WSSubscriptionPolicySupport{};
        this.WSPullPointSupport = new xsd_boolean(); // xsd_boolean WSPullPointSupport{};
        this.WSPausableSubscriptionManagerInterfaceSupport = new xsd_boolean(); // xsd_boolean WSPausableSubscriptionManagerInterfaceSupport{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "WSSubscriptionPolicySupport", this.WSSubscriptionPolicySupport);
        w.write(obj, "tt", "WSPullPointSupport", this.WSPullPointSupport);
        w.write(obj, "tt", "WSPausableSubscriptionManagerInterfaceSupport", this.WSPausableSubscriptionManagerInterfaceSupport);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "WSSubscriptionPolicySupport", this.WSSubscriptionPolicySupport)) return false;
        if (!r.read(obj, "tt", "WSPullPointSupport", this.WSPullPointSupport)) return false;
        if (!r.read(obj, "tt", "WSPausableSubscriptionManagerInterfaceSupport", this.WSPausableSubscriptionManagerInterfaceSupport)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ImagingCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_RealTimeStreamingCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_RealTimeStreamingCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.RTPMulticast = new xsd_boolean(); this.RTPMulticast['isP'] = true; // xsd_boolean* RTPMulticast{};
        this.RTP_TCP = new xsd_boolean(); this.RTP_TCP['isP'] = true; // xsd_boolean* RTP_TCP{};
        this.RTP_RTSP_TCP = new xsd_boolean(); this.RTP_RTSP_TCP['isP'] = true; // xsd_boolean* RTP_RTSP_TCP{};
        this.Extension = new tt_RealTimeStreamingCapabilitiesExtension(); this.Extension['isP'] = true; // tt_RealTimeStreamingCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "RTPMulticast", this.RTPMulticast);
        w.write(obj, "tt", "RTP_TCP", this.RTP_TCP);
        w.write(obj, "tt", "RTP_RTSP_TCP", this.RTP_RTSP_TCP);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "RTPMulticast", this.RTPMulticast)) return false;
        if (!r.read(obj, "tt", "RTP_TCP", this.RTP_TCP)) return false;
        if (!r.read(obj, "tt", "RTP_RTSP_TCP", this.RTP_RTSP_TCP)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ProfileCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.MaximumNumberOfProfiles = new xsd_int_(); // xsd_int_ MaximumNumberOfProfiles{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "MaximumNumberOfProfiles", this.MaximumNumberOfProfiles);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "MaximumNumberOfProfiles", this.MaximumNumberOfProfiles)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MediaCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileCapabilities = new tt_ProfileCapabilities(); // tt_ProfileCapabilities ProfileCapabilities{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "ProfileCapabilities", this.ProfileCapabilities);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ProfileCapabilities", this.ProfileCapabilities)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MediaCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.StreamingCapabilities = new tt_RealTimeStreamingCapabilities(); // tt_RealTimeStreamingCapabilities StreamingCapabilities{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Extension = new tt_MediaCapabilitiesExtension(); this.Extension['isP'] = true; // tt_MediaCapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "StreamingCapabilities", this.StreamingCapabilities);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "StreamingCapabilities", this.StreamingCapabilities)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DeviceIOCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.VideoSources = new xsd_int_(); // xsd_int_ VideoSources{};
        this.VideoOutputs = new xsd_int_(); // xsd_int_ VideoOutputs{};
        this.AudioSources = new xsd_int_(); // xsd_int_ AudioSources{};
        this.AudioOutputs = new xsd_int_(); // xsd_int_ AudioOutputs{};
        this.RelayOutputs = new xsd_int_(); // xsd_int_ RelayOutputs{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "VideoSources", this.VideoSources);
        w.write(obj, "tt", "VideoOutputs", this.VideoOutputs);
        w.write(obj, "tt", "AudioSources", this.AudioSources);
        w.write(obj, "tt", "AudioOutputs", this.AudioOutputs);
        w.write(obj, "tt", "RelayOutputs", this.RelayOutputs);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "VideoSources", this.VideoSources)) return false;
        if (!r.read(obj, "tt", "VideoOutputs", this.VideoOutputs)) return false;
        if (!r.read(obj, "tt", "AudioSources", this.AudioSources)) return false;
        if (!r.read(obj, "tt", "AudioOutputs", this.AudioOutputs)) return false;
        if (!r.read(obj, "tt", "RelayOutputs", this.RelayOutputs)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DisplayCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.FixedLayout = new xsd_boolean(); // xsd_boolean FixedLayout{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "FixedLayout", this.FixedLayout);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "FixedLayout", this.FixedLayout)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_RecordingCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.ReceiverSource = new xsd_boolean(); // xsd_boolean ReceiverSource{};
        this.MediaProfileSource = new xsd_boolean(); // xsd_boolean MediaProfileSource{};
        this.DynamicRecordings = new xsd_boolean(); // xsd_boolean DynamicRecordings{};
        this.DynamicTracks = new xsd_boolean(); // xsd_boolean DynamicTracks{};
        this.MaxStringLength = new xsd_int_(); // xsd_int_ MaxStringLength{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "ReceiverSource", this.ReceiverSource);
        w.write(obj, "tt", "MediaProfileSource", this.MediaProfileSource);
        w.write(obj, "tt", "DynamicRecordings", this.DynamicRecordings);
        w.write(obj, "tt", "DynamicTracks", this.DynamicTracks);
        w.write(obj, "tt", "MaxStringLength", this.MaxStringLength);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "ReceiverSource", this.ReceiverSource)) return false;
        if (!r.read(obj, "tt", "MediaProfileSource", this.MediaProfileSource)) return false;
        if (!r.read(obj, "tt", "DynamicRecordings", this.DynamicRecordings)) return false;
        if (!r.read(obj, "tt", "DynamicTracks", this.DynamicTracks)) return false;
        if (!r.read(obj, "tt", "MaxStringLength", this.MaxStringLength)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SearchCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.MetadataSearch = new xsd_boolean(); // xsd_boolean MetadataSearch{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "MetadataSearch", this.MetadataSearch);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "MetadataSearch", this.MetadataSearch)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ReplayCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ReceiverCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.RTP_Multicast = new xsd_boolean(); // xsd_boolean RTP_Multicast{};
        this.RTP_TCP = new xsd_boolean(); // xsd_boolean RTP_TCP{};
        this.RTP_RTSP_TCP = new xsd_boolean(); // xsd_boolean RTP_RTSP_TCP{};
        this.SupportedReceivers = new xsd_int_(); // xsd_int_ SupportedReceivers{};
        this.MaximumRTSPURILength = new xsd_int_(); // xsd_int_ MaximumRTSPURILength{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "RTP_Multicast", this.RTP_Multicast);
        w.write(obj, "tt", "RTP_TCP", this.RTP_TCP);
        w.write(obj, "tt", "RTP_RTSP_TCP", this.RTP_RTSP_TCP);
        w.write(obj, "tt", "SupportedReceivers", this.SupportedReceivers);
        w.write(obj, "tt", "MaximumRTSPURILength", this.MaximumRTSPURILength);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "RTP_Multicast", this.RTP_Multicast)) return false;
        if (!r.read(obj, "tt", "RTP_TCP", this.RTP_TCP)) return false;
        if (!r.read(obj, "tt", "RTP_RTSP_TCP", this.RTP_RTSP_TCP)) return false;
        if (!r.read(obj, "tt", "SupportedReceivers", this.SupportedReceivers)) return false;
        if (!r.read(obj, "tt", "MaximumRTSPURILength", this.MaximumRTSPURILength)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsDeviceExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_AnalyticsDeviceCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.RuleSupport = new xsd_boolean(); this.RuleSupport['isP'] = true; // xsd_boolean* RuleSupport{};
        this.Extension = new tt_AnalyticsDeviceExtension(); this.Extension['isP'] = true; // tt_AnalyticsDeviceExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "XAddr", this.XAddr);
        w.write(obj, "tt", "RuleSupport", this.RuleSupport);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tt", "RuleSupport", this.RuleSupport)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_CapabilitiesExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_CapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.DeviceIO = new tt_DeviceIOCapabilities(); this.DeviceIO['isP'] = true; // tt_DeviceIOCapabilities* DeviceIO{};
        this.Display = new tt_DisplayCapabilities(); this.Display['isP'] = true; // tt_DisplayCapabilities* Display{};
        this.Recording = new tt_RecordingCapabilities(); this.Recording['isP'] = true; // tt_RecordingCapabilities* Recording{};
        this.Search = new tt_SearchCapabilities(); this.Search['isP'] = true; // tt_SearchCapabilities* Search{};
        this.Replay = new tt_ReplayCapabilities(); this.Replay['isP'] = true; // tt_ReplayCapabilities* Replay{};
        this.Receiver = new tt_ReceiverCapabilities(); this.Receiver['isP'] = true; // tt_ReceiverCapabilities* Receiver{};
        this.AnalyticsDevice = new tt_AnalyticsDeviceCapabilities(); this.AnalyticsDevice['isP'] = true; // tt_AnalyticsDeviceCapabilities* AnalyticsDevice{};
        this.Extensions = new tt_CapabilitiesExtension2(); this.Extensions['isP'] = true; // tt_CapabilitiesExtension2* Extensions{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "DeviceIO", this.DeviceIO);
        w.write(obj, "tt", "Display", this.Display);
        w.write(obj, "tt", "Recording", this.Recording);
        w.write(obj, "tt", "Search", this.Search);
        w.write(obj, "tt", "Replay", this.Replay);
        w.write(obj, "tt", "Receiver", this.Receiver);
        w.write(obj, "tt", "AnalyticsDevice", this.AnalyticsDevice);
        w.write(obj, "tt", "Extensions", this.Extensions);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "DeviceIO", this.DeviceIO)) return false;
        if (!r.read(obj, "tt", "Display", this.Display)) return false;
        if (!r.read(obj, "tt", "Recording", this.Recording)) return false;
        if (!r.read(obj, "tt", "Search", this.Search)) return false;
        if (!r.read(obj, "tt", "Replay", this.Replay)) return false;
        if (!r.read(obj, "tt", "Receiver", this.Receiver)) return false;
        if (!r.read(obj, "tt", "AnalyticsDevice", this.AnalyticsDevice)) return false;
        if (!r.read(obj, "tt", "Extensions", this.Extensions)) return false;
        return true;
    }
}
export class tt_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.Analytics = new tt_AnalyticsCapabilities(); this.Analytics['isP'] = true; // tt_AnalyticsCapabilities* Analytics{};
        this.Device = new tt_DeviceCapabilities(); this.Device['isP'] = true; // tt_DeviceCapabilities* Device{};
        this.Events = new tt_EventCapabilities(); this.Events['isP'] = true; // tt_EventCapabilities* Events{};
        this.Imaging = new tt_ImagingCapabilities(); this.Imaging['isP'] = true; // tt_ImagingCapabilities* Imaging{};
        this.Media = new tt_MediaCapabilities(); this.Media['isP'] = true; // tt_MediaCapabilities* Media{};
        this.PTZ = new tt_PTZCapabilities(); this.PTZ['isP'] = true; // tt_PTZCapabilities* PTZ{};
        this.Extension = new tt_CapabilitiesExtension(); this.Extension['isP'] = true; // tt_CapabilitiesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Analytics", this.Analytics);
        w.write(obj, "tt", "Device", this.Device);
        w.write(obj, "tt", "Events", this.Events);
        w.write(obj, "tt", "Imaging", this.Imaging);
        w.write(obj, "tt", "Media", this.Media);
        w.write(obj, "tt", "PTZ", this.PTZ);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Analytics", this.Analytics)) return false;
        if (!r.read(obj, "tt", "Device", this.Device)) return false;
        if (!r.read(obj, "tt", "Events", this.Events)) return false;
        if (!r.read(obj, "tt", "Imaging", this.Imaging)) return false;
        if (!r.read(obj, "tt", "Media", this.Media)) return false;
        if (!r.read(obj, "tt", "PTZ", this.PTZ)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_HostnameInformationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_HostnameInformation extends types.xsd_type
{
    constructor(){
        super();
        this.FromDHCP = new xsd_boolean(); // xsd_boolean FromDHCP{};
        this.Name = new xsd_token(); this.Name['isP'] = true; // xsd_token* Name{};
        this.Extension = new tt_HostnameInformationExtension(); this.Extension['isP'] = true; // tt_HostnameInformationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "FromDHCP", this.FromDHCP);
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IPType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.IPv4= 0;
        this.IPv6= 1;
    }

    parse(parser, s){
        if (s == "IPv4") { this.v = this.IPv4; return true; }
        if (s == "IPv6") { this.v = this.IPv6; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.IPv4) { return "IPv4"; }
        if (this.v == this.IPv6) { return "IPv6"; }
        return "";
    }
}
export class tt_IPAddress extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new tt_IPType(); // tt_IPType Type{};
        this.IPv4Address = new tt_IPv4Address(); this.IPv4Address['isP'] = true; // tt_IPv4Address* IPv4Address{};
        this.IPv6Address = new tt_IPv6Address(); this.IPv6Address['isP'] = true; // tt_IPv6Address* IPv6Address{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "IPv4Address", this.IPv4Address);
        w.write(obj, "tt", "IPv6Address", this.IPv6Address);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "IPv4Address", this.IPv4Address)) return false;
        if (!r.read(obj, "tt", "IPv6Address", this.IPv6Address)) return false;
        return true;
    }
}
export class tt_DNSInformationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_DNSInformation extends types.xsd_type
{
    constructor(){
        super();
        this.FromDHCP = new xsd_boolean(); // xsd_boolean FromDHCP{};
        this.SearchDomain = new types.xsd_list(xsd_token); // xsd_list<xsd_token> SearchDomain{};
        this.DNSFromDHCP = new types.xsd_list(tt_IPAddress); // xsd_list<tt_IPAddress> DNSFromDHCP{};
        this.DNSManual = new types.xsd_list(tt_IPAddress); // xsd_list<tt_IPAddress> DNSManual{};
        this.Extension = new tt_DNSInformationExtension(); this.Extension['isP'] = true; // tt_DNSInformationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "FromDHCP", this.FromDHCP);
        w.write(obj, "tt", "SearchDomain", this.SearchDomain);
        w.write(obj, "tt", "DNSFromDHCP", this.DNSFromDHCP);
        w.write(obj, "tt", "DNSManual", this.DNSManual);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tt", "SearchDomain", this.SearchDomain)) return false;
        if (!r.read(obj, "tt", "DNSFromDHCP", this.DNSFromDHCP)) return false;
        if (!r.read(obj, "tt", "DNSManual", this.DNSManual)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NTPInformationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_NTPInformation extends types.xsd_type
{
    constructor(){
        super();
        this.FromDHCP = new xsd_boolean(); // xsd_boolean FromDHCP{};
        this.NTPFromDHCP = new types.xsd_list(tt_NetworkHost); // xsd_list<tt_NetworkHost> NTPFromDHCP{};
        this.NTPManual = new types.xsd_list(tt_NetworkHost); // xsd_list<tt_NetworkHost> NTPManual{};
        this.Extension = new tt_NTPInformationExtension(); this.Extension['isP'] = true; // tt_NTPInformationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "FromDHCP", this.FromDHCP);
        w.write(obj, "tt", "NTPFromDHCP", this.NTPFromDHCP);
        w.write(obj, "tt", "NTPManual", this.NTPManual);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tt", "NTPFromDHCP", this.NTPFromDHCP)) return false;
        if (!r.read(obj, "tt", "NTPManual", this.NTPManual)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DynamicDNSType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.NoUpdate= 0;
        this.ClientUpdates= 1;
        this.ServerUpdates= 2;
    }

    parse(parser, s){
        if (s == "NoUpdate") { this.v = this.NoUpdate; return true; }
        if (s == "ClientUpdates") { this.v = this.ClientUpdates; return true; }
        if (s == "ServerUpdates") { this.v = this.ServerUpdates; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.NoUpdate) { return "NoUpdate"; }
        if (this.v == this.ClientUpdates) { return "ClientUpdates"; }
        if (this.v == this.ServerUpdates) { return "ServerUpdates"; }
        return "";
    }
}
export class tt_DynamicDNSInformationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_DynamicDNSInformation extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new tt_DynamicDNSType(); // tt_DynamicDNSType Type{};
        this.Name = new tt_DNSName(); this.Name['isP'] = true; // tt_DNSName* Name{};
        this.TTL = new xsd_duration(); this.TTL['isP'] = true; // xsd_duration* TTL{};
        this.Extension = new tt_DynamicDNSInformationExtension(); this.Extension['isP'] = true; // tt_DynamicDNSInformationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "TTL", this.TTL);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "TTL", this.TTL)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const tt_ReferenceToken = xsd_string;
export class tt_DeviceEntity extends types.xsd_type
{
    constructor(){
        super();
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
    }

    write(obj, w){
        w.write_attribute(obj, "token", this.token);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "token", this.token)) return false;
        return true;
    }
}
export const tt_HwAddress = xsd_token;
export class tt_NetworkInterfaceInfo extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_string(); this.Name['isP'] = true; // xsd_string* Name{};
        this.HwAddress = new tt_HwAddress(); // tt_HwAddress HwAddress{};
        this.MTU = new xsd_int_(); this.MTU['isP'] = true; // xsd_int_* MTU{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "HwAddress", this.HwAddress);
        w.write(obj, "tt", "MTU", this.MTU);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "HwAddress", this.HwAddress)) return false;
        if (!r.read(obj, "tt", "MTU", this.MTU)) return false;
        return true;
    }
}
export class tt_Duplex extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Full= 0;
        this.Half= 1;
    }

    parse(parser, s){
        if (s == "Full") { this.v = this.Full; return true; }
        if (s == "Half") { this.v = this.Half; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Full) { return "Full"; }
        if (this.v == this.Half) { return "Half"; }
        return "";
    }
}
export class tt_NetworkInterfaceConnectionSetting extends types.xsd_type
{
    constructor(){
        super();
        this.AutoNegotiation = new xsd_boolean(); // xsd_boolean AutoNegotiation{};
        this.Speed = new xsd_int_(); // xsd_int_ Speed{};
        this.Duplex = new tt_Duplex(); // tt_Duplex Duplex{};
    }

    write(obj, w){
        w.write(obj, "tt", "AutoNegotiation", this.AutoNegotiation);
        w.write(obj, "tt", "Speed", this.Speed);
        w.write(obj, "tt", "Duplex", this.Duplex);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AutoNegotiation", this.AutoNegotiation)) return false;
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        if (!r.read(obj, "tt", "Duplex", this.Duplex)) return false;
        return true;
    }
}
export const tt_IANA_IfTypes = xsd_int_;
export class tt_NetworkInterfaceLink extends types.xsd_type
{
    constructor(){
        super();
        this.AdminSettings = new tt_NetworkInterfaceConnectionSetting(); // tt_NetworkInterfaceConnectionSetting AdminSettings{};
        this.OperSettings = new tt_NetworkInterfaceConnectionSetting(); // tt_NetworkInterfaceConnectionSetting OperSettings{};
        this.InterfaceType = new tt_IANA_IfTypes(); // tt_IANA_IfTypes InterfaceType{};
    }

    write(obj, w){
        w.write(obj, "tt", "AdminSettings", this.AdminSettings);
        w.write(obj, "tt", "OperSettings", this.OperSettings);
        w.write(obj, "tt", "InterfaceType", this.InterfaceType);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AdminSettings", this.AdminSettings)) return false;
        if (!r.read(obj, "tt", "OperSettings", this.OperSettings)) return false;
        if (!r.read(obj, "tt", "InterfaceType", this.InterfaceType)) return false;
        return true;
    }
}
export class tt_PrefixedIPv4Address extends types.xsd_type
{
    constructor(){
        super();
        this.Address = new tt_IPv4Address(); // tt_IPv4Address Address{};
        this.PrefixLength = new xsd_int_(); // xsd_int_ PrefixLength{};
    }

    write(obj, w){
        w.write(obj, "tt", "Address", this.Address);
        w.write(obj, "tt", "PrefixLength", this.PrefixLength);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Address", this.Address)) return false;
        if (!r.read(obj, "tt", "PrefixLength", this.PrefixLength)) return false;
        return true;
    }
}
export class tt_IPv4Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.Manual = new types.xsd_list(tt_PrefixedIPv4Address); // xsd_list<tt_PrefixedIPv4Address> Manual{};
        this.LinkLocal = new tt_PrefixedIPv4Address(); this.LinkLocal['isP'] = true; // tt_PrefixedIPv4Address* LinkLocal{};
        this.FromDHCP = new tt_PrefixedIPv4Address(); this.FromDHCP['isP'] = true; // tt_PrefixedIPv4Address* FromDHCP{};
        this.DHCP = new xsd_boolean(); // xsd_boolean DHCP{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Manual", this.Manual);
        w.write(obj, "tt", "LinkLocal", this.LinkLocal);
        w.write(obj, "tt", "FromDHCP", this.FromDHCP);
        w.write(obj, "tt", "DHCP", this.DHCP);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Manual", this.Manual)) return false;
        if (!r.read(obj, "tt", "LinkLocal", this.LinkLocal)) return false;
        if (!r.read(obj, "tt", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tt", "DHCP", this.DHCP)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IPv4NetworkInterface extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
        this.Config = new tt_IPv4Configuration(); // tt_IPv4Configuration Config{};
    }

    write(obj, w){
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Config", this.Config);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Config", this.Config)) return false;
        return true;
    }
}
export class tt_IPv6DHCPConfiguration extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Auto= 0;
        this.Stateful= 1;
        this.Stateless= 2;
        this.Off= 3;
    }

    parse(parser, s){
        if (s == "Auto") { this.v = this.Auto; return true; }
        if (s == "Stateful") { this.v = this.Stateful; return true; }
        if (s == "Stateless") { this.v = this.Stateless; return true; }
        if (s == "Off") { this.v = this.Off; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Auto) { return "Auto"; }
        if (this.v == this.Stateful) { return "Stateful"; }
        if (this.v == this.Stateless) { return "Stateless"; }
        if (this.v == this.Off) { return "Off"; }
        return "";
    }
}
export class tt_PrefixedIPv6Address extends types.xsd_type
{
    constructor(){
        super();
        this.Address = new tt_IPv6Address(); // tt_IPv6Address Address{};
        this.PrefixLength = new xsd_int_(); // xsd_int_ PrefixLength{};
    }

    write(obj, w){
        w.write(obj, "tt", "Address", this.Address);
        w.write(obj, "tt", "PrefixLength", this.PrefixLength);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Address", this.Address)) return false;
        if (!r.read(obj, "tt", "PrefixLength", this.PrefixLength)) return false;
        return true;
    }
}
export class tt_IPv6ConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_IPv6Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.AcceptRouterAdvert = new xsd_boolean(); this.AcceptRouterAdvert['isP'] = true; // xsd_boolean* AcceptRouterAdvert{};
        this.DHCP = new tt_IPv6DHCPConfiguration(); // tt_IPv6DHCPConfiguration DHCP{};
        this.Manual = new types.xsd_list(tt_PrefixedIPv6Address); // xsd_list<tt_PrefixedIPv6Address> Manual{};
        this.LinkLocal = new types.xsd_list(tt_PrefixedIPv6Address); // xsd_list<tt_PrefixedIPv6Address> LinkLocal{};
        this.FromDHCP = new types.xsd_list(tt_PrefixedIPv6Address); // xsd_list<tt_PrefixedIPv6Address> FromDHCP{};
        this.FromRA = new types.xsd_list(tt_PrefixedIPv6Address); // xsd_list<tt_PrefixedIPv6Address> FromRA{};
        this.Extension = new tt_IPv6ConfigurationExtension(); this.Extension['isP'] = true; // tt_IPv6ConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AcceptRouterAdvert", this.AcceptRouterAdvert);
        w.write(obj, "tt", "DHCP", this.DHCP);
        w.write(obj, "tt", "Manual", this.Manual);
        w.write(obj, "tt", "LinkLocal", this.LinkLocal);
        w.write(obj, "tt", "FromDHCP", this.FromDHCP);
        w.write(obj, "tt", "FromRA", this.FromRA);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AcceptRouterAdvert", this.AcceptRouterAdvert)) return false;
        if (!r.read(obj, "tt", "DHCP", this.DHCP)) return false;
        if (!r.read(obj, "tt", "Manual", this.Manual)) return false;
        if (!r.read(obj, "tt", "LinkLocal", this.LinkLocal)) return false;
        if (!r.read(obj, "tt", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tt", "FromRA", this.FromRA)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IPv6NetworkInterface extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
        this.Config = new tt_IPv6Configuration(); this.Config['isP'] = true; // tt_IPv6Configuration* Config{};
    }

    write(obj, w){
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Config", this.Config);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Config", this.Config)) return false;
        return true;
    }
}
export class tt_Dot3Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const tt_Dot11SSIDType = xsd_hexBinary;
export class tt_Dot11StationMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Ad_hoc= 0;
        this.Infrastructure= 1;
        this.Extended= 2;
    }

    parse(parser, s){
        if (s == "Ad-hoc") { this.v = this.Ad_hoc; return true; }
        if (s == "Infrastructure") { this.v = this.Infrastructure; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Ad_hoc) { return "Ad-hoc"; }
        if (this.v == this.Infrastructure) { return "Infrastructure"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export const tt_Name = xsd_string;
export const tt_NetworkInterfaceConfigPriority = xsd_integer;
export class tt_Dot11SecurityMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.None= 0;
        this.WEP= 1;
        this.PSK= 2;
        this.Dot1X= 3;
        this.Extended= 4;
    }

    parse(parser, s){
        if (s == "None") { this.v = this.None; return true; }
        if (s == "WEP") { this.v = this.WEP; return true; }
        if (s == "PSK") { this.v = this.PSK; return true; }
        if (s == "Dot1X") { this.v = this.Dot1X; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.None) { return "None"; }
        if (this.v == this.WEP) { return "WEP"; }
        if (this.v == this.PSK) { return "PSK"; }
        if (this.v == this.Dot1X) { return "Dot1X"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_Dot11Cipher extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.CCMP= 0;
        this.TKIP= 1;
        this.Any= 2;
        this.Extended= 3;
    }

    parse(parser, s){
        if (s == "CCMP") { this.v = this.CCMP; return true; }
        if (s == "TKIP") { this.v = this.TKIP; return true; }
        if (s == "Any") { this.v = this.Any; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.CCMP) { return "CCMP"; }
        if (this.v == this.TKIP) { return "TKIP"; }
        if (this.v == this.Any) { return "Any"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export const tt_Dot11PSK = xsd_hexBinary;
export const tt_Dot11PSKPassphrase = xsd_string;
export class tt_Dot11PSKSetExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_Dot11PSKSet extends types.xsd_type
{
    constructor(){
        super();
        this.Key = new tt_Dot11PSK(); this.Key['isP'] = true; // tt_Dot11PSK* Key{};
        this.Passphrase = new tt_Dot11PSKPassphrase(); this.Passphrase['isP'] = true; // tt_Dot11PSKPassphrase* Passphrase{};
        this.Extension = new tt_Dot11PSKSetExtension(); this.Extension['isP'] = true; // tt_Dot11PSKSetExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Key", this.Key);
        w.write(obj, "tt", "Passphrase", this.Passphrase);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Key", this.Key)) return false;
        if (!r.read(obj, "tt", "Passphrase", this.Passphrase)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot11SecurityConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot11SecurityConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_Dot11SecurityMode(); // tt_Dot11SecurityMode Mode{};
        this.Algorithm = new tt_Dot11Cipher(); this.Algorithm['isP'] = true; // tt_Dot11Cipher* Algorithm{};
        this.PSK = new tt_Dot11PSKSet(); this.PSK['isP'] = true; // tt_Dot11PSKSet* PSK{};
        this.Dot1X = new tt_ReferenceToken(); this.Dot1X['isP'] = true; // tt_ReferenceToken* Dot1X{};
        this.Extension = new tt_Dot11SecurityConfigurationExtension(); this.Extension['isP'] = true; // tt_Dot11SecurityConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Algorithm", this.Algorithm);
        w.write(obj, "tt", "PSK", this.PSK);
        w.write(obj, "tt", "Dot1X", this.Dot1X);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Algorithm", this.Algorithm)) return false;
        if (!r.read(obj, "tt", "PSK", this.PSK)) return false;
        if (!r.read(obj, "tt", "Dot1X", this.Dot1X)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot11Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.SSID = new tt_Dot11SSIDType(); // tt_Dot11SSIDType SSID{};
        this.Mode = new tt_Dot11StationMode(); // tt_Dot11StationMode Mode{};
        this.Alias = new tt_Name(); // tt_Name Alias{};
        this.Priority = new tt_NetworkInterfaceConfigPriority(); // tt_NetworkInterfaceConfigPriority Priority{};
        this.Security = new tt_Dot11SecurityConfiguration(); // tt_Dot11SecurityConfiguration Security{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "SSID", this.SSID);
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Alias", this.Alias);
        w.write(obj, "tt", "Priority", this.Priority);
        w.write(obj, "tt", "Security", this.Security);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "SSID", this.SSID)) return false;
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Alias", this.Alias)) return false;
        if (!r.read(obj, "tt", "Priority", this.Priority)) return false;
        if (!r.read(obj, "tt", "Security", this.Security)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NetworkInterfaceExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_NetworkInterfaceExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.InterfaceType = new tt_IANA_IfTypes(); // tt_IANA_IfTypes InterfaceType{};
        this.Dot3 = new types.xsd_list(tt_Dot3Configuration); // xsd_list<tt_Dot3Configuration> Dot3{};
        this.Dot11 = new types.xsd_list(tt_Dot11Configuration); // xsd_list<tt_Dot11Configuration> Dot11{};
        this.Extension = new tt_NetworkInterfaceExtension2(); this.Extension['isP'] = true; // tt_NetworkInterfaceExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "InterfaceType", this.InterfaceType);
        w.write(obj, "tt", "Dot3", this.Dot3);
        w.write(obj, "tt", "Dot11", this.Dot11);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "InterfaceType", this.InterfaceType)) return false;
        if (!r.read(obj, "tt", "Dot3", this.Dot3)) return false;
        if (!r.read(obj, "tt", "Dot11", this.Dot11)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_NetworkInterface extends tt_DeviceEntity
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
        this.Info = new tt_NetworkInterfaceInfo(); this.Info['isP'] = true; // tt_NetworkInterfaceInfo* Info{};
        this.Link = new tt_NetworkInterfaceLink(); this.Link['isP'] = true; // tt_NetworkInterfaceLink* Link{};
        this.IPv4 = new tt_IPv4NetworkInterface(); this.IPv4['isP'] = true; // tt_IPv4NetworkInterface* IPv4{};
        this.IPv6 = new tt_IPv6NetworkInterface(); this.IPv6['isP'] = true; // tt_IPv6NetworkInterface* IPv6{};
        this.Extension = new tt_NetworkInterfaceExtension(); this.Extension['isP'] = true; // tt_NetworkInterfaceExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Info", this.Info);
        w.write(obj, "tt", "Link", this.Link);
        w.write(obj, "tt", "IPv4", this.IPv4);
        w.write(obj, "tt", "IPv6", this.IPv6);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Info", this.Info)) return false;
        if (!r.read(obj, "tt", "Link", this.Link)) return false;
        if (!r.read(obj, "tt", "IPv4", this.IPv4)) return false;
        if (!r.read(obj, "tt", "IPv6", this.IPv6)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IPv4NetworkInterfaceSetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); this.Enabled['isP'] = true; // xsd_boolean* Enabled{};
        this.Manual = new types.xsd_list(tt_PrefixedIPv4Address); // xsd_list<tt_PrefixedIPv4Address> Manual{};
        this.DHCP = new xsd_boolean(); this.DHCP['isP'] = true; // xsd_boolean* DHCP{};
    }

    write(obj, w){
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Manual", this.Manual);
        w.write(obj, "tt", "DHCP", this.DHCP);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Manual", this.Manual)) return false;
        if (!r.read(obj, "tt", "DHCP", this.DHCP)) return false;
        return true;
    }
}
export class tt_IPv6NetworkInterfaceSetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); this.Enabled['isP'] = true; // xsd_boolean* Enabled{};
        this.AcceptRouterAdvert = new xsd_boolean(); this.AcceptRouterAdvert['isP'] = true; // xsd_boolean* AcceptRouterAdvert{};
        this.Manual = new types.xsd_list(tt_PrefixedIPv6Address); // xsd_list<tt_PrefixedIPv6Address> Manual{};
        this.DHCP = new tt_IPv6DHCPConfiguration(); this.DHCP['isP'] = true; // tt_IPv6DHCPConfiguration* DHCP{};
    }

    write(obj, w){
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "AcceptRouterAdvert", this.AcceptRouterAdvert);
        w.write(obj, "tt", "Manual", this.Manual);
        w.write(obj, "tt", "DHCP", this.DHCP);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "AcceptRouterAdvert", this.AcceptRouterAdvert)) return false;
        if (!r.read(obj, "tt", "Manual", this.Manual)) return false;
        if (!r.read(obj, "tt", "DHCP", this.DHCP)) return false;
        return true;
    }
}
export class tt_NetworkInterfaceSetConfigurationExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_NetworkInterfaceSetConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Dot3 = new types.xsd_list(tt_Dot3Configuration); // xsd_list<tt_Dot3Configuration> Dot3{};
        this.Dot11 = new types.xsd_list(tt_Dot11Configuration); // xsd_list<tt_Dot11Configuration> Dot11{};
        this.Extension = new tt_NetworkInterfaceSetConfigurationExtension2(); this.Extension['isP'] = true; // tt_NetworkInterfaceSetConfigurationExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Dot3", this.Dot3);
        w.write(obj, "tt", "Dot11", this.Dot11);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Dot3", this.Dot3)) return false;
        if (!r.read(obj, "tt", "Dot11", this.Dot11)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_NetworkInterfaceSetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); this.Enabled['isP'] = true; // xsd_boolean* Enabled{};
        this.Link = new tt_NetworkInterfaceConnectionSetting(); this.Link['isP'] = true; // tt_NetworkInterfaceConnectionSetting* Link{};
        this.MTU = new xsd_int_(); this.MTU['isP'] = true; // xsd_int_* MTU{};
        this.IPv4 = new tt_IPv4NetworkInterfaceSetConfiguration(); this.IPv4['isP'] = true; // tt_IPv4NetworkInterfaceSetConfiguration* IPv4{};
        this.IPv6 = new tt_IPv6NetworkInterfaceSetConfiguration(); this.IPv6['isP'] = true; // tt_IPv6NetworkInterfaceSetConfiguration* IPv6{};
        this.Extension = new tt_NetworkInterfaceSetConfigurationExtension(); this.Extension['isP'] = true; // tt_NetworkInterfaceSetConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Link", this.Link);
        w.write(obj, "tt", "MTU", this.MTU);
        w.write(obj, "tt", "IPv4", this.IPv4);
        w.write(obj, "tt", "IPv6", this.IPv6);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Link", this.Link)) return false;
        if (!r.read(obj, "tt", "MTU", this.MTU)) return false;
        if (!r.read(obj, "tt", "IPv4", this.IPv4)) return false;
        if (!r.read(obj, "tt", "IPv6", this.IPv6)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NetworkProtocolType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.HTTP= 0;
        this.HTTPS= 1;
        this.RTSP= 2;
    }

    parse(parser, s){
        if (s == "HTTP") { this.v = this.HTTP; return true; }
        if (s == "HTTPS") { this.v = this.HTTPS; return true; }
        if (s == "RTSP") { this.v = this.RTSP; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.HTTP) { return "HTTP"; }
        if (this.v == this.HTTPS) { return "HTTPS"; }
        if (this.v == this.RTSP) { return "RTSP"; }
        return "";
    }
}
export class tt_NetworkProtocolExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_NetworkProtocol extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_NetworkProtocolType(); // tt_NetworkProtocolType Name{};
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
        this.Port = new types.xsd_list(xsd_int_); // xsd_list<xsd_int_> Port{};
        this.Extension = new tt_NetworkProtocolExtension(); this.Extension['isP'] = true; // tt_NetworkProtocolExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Port", this.Port);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Port", this.Port)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NetworkGateway extends types.xsd_type
{
    constructor(){
        super();
        this.IPv4Address = new types.xsd_list(tt_IPv4Address); // xsd_list<tt_IPv4Address> IPv4Address{};
        this.IPv6Address = new types.xsd_list(tt_IPv6Address); // xsd_list<tt_IPv6Address> IPv6Address{};
    }

    write(obj, w){
        w.write(obj, "tt", "IPv4Address", this.IPv4Address);
        w.write(obj, "tt", "IPv6Address", this.IPv6Address);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "IPv4Address", this.IPv4Address)) return false;
        if (!r.read(obj, "tt", "IPv6Address", this.IPv6Address)) return false;
        return true;
    }
}
export class tt_NetworkZeroConfigurationExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class NetworkZeroConfigurationExtension{}
export class tt_NetworkZeroConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.InterfaceToken = new tt_ReferenceToken(); // tt_ReferenceToken InterfaceToken{};
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
        this.Addresses = new types.xsd_list(tt_IPv4Address); // xsd_list<tt_IPv4Address> Addresses{};
        this.Extension = new tt_NetworkZeroConfigurationExtension(); this.Extension['isP'] = true; // tt_NetworkZeroConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "InterfaceToken", this.InterfaceToken);
        w.write(obj, "tt", "Enabled", this.Enabled);
        w.write(obj, "tt", "Addresses", this.Addresses);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "InterfaceToken", this.InterfaceToken)) return false;
        if (!r.read(obj, "tt", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tt", "Addresses", this.Addresses)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NetworkZeroConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Additional = new types.xsd_list(tt_NetworkZeroConfiguration); // xsd_list<tt_NetworkZeroConfiguration> Additional{};
        this.Extension = new tt_NetworkZeroConfigurationExtension2(); this.Extension['isP'] = true; // tt_NetworkZeroConfigurationExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Additional", this.Additional);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Additional", this.Additional)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_IPAddressFilterType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Allow= 0;
        this.Deny= 1;
    }

    parse(parser, s){
        if (s == "Allow") { this.v = this.Allow; return true; }
        if (s == "Deny") { this.v = this.Deny; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Allow) { return "Allow"; }
        if (this.v == this.Deny) { return "Deny"; }
        return "";
    }
}
export class tt_IPAddressFilterExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_IPAddressFilter extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new tt_IPAddressFilterType(); // tt_IPAddressFilterType Type{};
        this.IPv4Address = new types.xsd_list(tt_PrefixedIPv4Address); // xsd_list<tt_PrefixedIPv4Address> IPv4Address{};
        this.IPv6Address = new types.xsd_list(tt_PrefixedIPv6Address); // xsd_list<tt_PrefixedIPv6Address> IPv6Address{};
        this.Extension = new tt_IPAddressFilterExtension(); this.Extension['isP'] = true; // tt_IPAddressFilterExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "IPv4Address", this.IPv4Address);
        w.write(obj, "tt", "IPv6Address", this.IPv6Address);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "IPv4Address", this.IPv4Address)) return false;
        if (!r.read(obj, "tt", "IPv6Address", this.IPv6Address)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_BinaryData extends types.xsd_type
{
    constructor(){
        super();
        this.Data = new xsd_base64Binary(); // xsd_base64Binary Data{};
        this.contentType = new xmime_contentType(); this.contentType['isP'] = true; // xmime_contentType* contentType{};
    }

    write(obj, w){
        w.write(obj, "tt", "Data", this.Data);
        w.write_attribute(obj, "contentType", this.contentType);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Data", this.Data)) return false;
        if (!r.read_attribute(obj, "contentType", this.contentType)) return false;
        return true;
    }
}
export class tt_Certificate extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); // xsd_token CertificateID{};
        this.Certificate_ = new tt_BinaryData(); // tt_BinaryData Certificate_{};
    }

    write(obj, w){
        w.write(obj, "tt", "CertificateID", this.CertificateID);
        w.write(obj, "tt", "Certificate_", this.Certificate_);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tt", "Certificate_", this.Certificate_)) return false;
        return true;
    }
}
export class tt_CertificateStatus extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); // xsd_token CertificateID{};
        this.Status = new xsd_boolean(); // xsd_boolean Status{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "CertificateID", this.CertificateID);
        w.write(obj, "tt", "Status", this.Status);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tt", "Status", this.Status)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_RelayMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Monostable= 0;
        this.Bistable= 1;
    }

    parse(parser, s){
        if (s == "Monostable") { this.v = this.Monostable; return true; }
        if (s == "Bistable") { this.v = this.Bistable; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Monostable) { return "Monostable"; }
        if (this.v == this.Bistable) { return "Bistable"; }
        return "";
    }
}
export class tt_RelayIdleState extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.closed= 0;
        this.open= 1;
    }

    parse(parser, s){
        if (s == "closed") { this.v = this.closed; return true; }
        if (s == "open") { this.v = this.open; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.closed) { return "closed"; }
        if (this.v == this.open) { return "open"; }
        return "";
    }
}
export class tt_RelayOutputSettings extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_RelayMode(); // tt_RelayMode Mode{};
        this.DelayTime = new xsd_duration(); // xsd_duration DelayTime{};
        this.IdleState = new tt_RelayIdleState(); // tt_RelayIdleState IdleState{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "DelayTime", this.DelayTime);
        w.write(obj, "tt", "IdleState", this.IdleState);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "DelayTime", this.DelayTime)) return false;
        if (!r.read(obj, "tt", "IdleState", this.IdleState)) return false;
        return true;
    }
}
export class tt_RelayOutput extends tt_DeviceEntity
{
    constructor(){
        super();
        this.Properties = new tt_RelayOutputSettings(); // tt_RelayOutputSettings Properties{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Properties", this.Properties);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Properties", this.Properties)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_RelayLogicalState extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.active= 0;
        this.inactive= 1;
    }

    parse(parser, s){
        if (s == "active") { this.v = this.active; return true; }
        if (s == "inactive") { this.v = this.inactive; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.active) { return "active"; }
        if (this.v == this.inactive) { return "inactive"; }
        return "";
    }
}
export class tt_CertificateWithPrivateKey extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); this.CertificateID['isP'] = true; // xsd_token* CertificateID{};
        this.Certificate = new tt_BinaryData(); // tt_BinaryData Certificate{};
        this.PrivateKey = new tt_BinaryData(); // tt_BinaryData PrivateKey{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "CertificateID", this.CertificateID);
        w.write(obj, "tt", "Certificate", this.Certificate);
        w.write(obj, "tt", "PrivateKey", this.PrivateKey);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tt", "Certificate", this.Certificate)) return false;
        if (!r.read(obj, "tt", "PrivateKey", this.PrivateKey)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_CertificateUsage extends xsd_string
{
    constructor(){
        super();
        this.Critical = new xsd_boolean(); // xsd_boolean Critical{};
    }

    write(obj, w){
        xsd_string.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "Critical", this.Critical);
    }

    read(obj, r){
        if (!xsd_string.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "Critical", this.Critical)) return false;
        return true;
    }
}
export class tt_DateTimeRange extends types.xsd_type
{
    constructor(){
        super();
        this.From = new xsd_dateTime(); // xsd_dateTime From{};
        this.Until = new xsd_dateTime(); // xsd_dateTime Until{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "From", this.From);
        w.write(obj, "tt", "Until", this.Until);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "From", this.From)) return false;
        if (!r.read(obj, "tt", "Until", this.Until)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_CertificateInformationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_CertificateInformation extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); // xsd_token CertificateID{};
        this.IssuerDN = new xsd_string(); this.IssuerDN['isP'] = true; // xsd_string* IssuerDN{};
        this.SubjectDN = new xsd_string(); this.SubjectDN['isP'] = true; // xsd_string* SubjectDN{};
        this.KeyUsage = new tt_CertificateUsage(); this.KeyUsage['isP'] = true; // tt_CertificateUsage* KeyUsage{};
        this.ExtendedKeyUsage = new tt_CertificateUsage(); this.ExtendedKeyUsage['isP'] = true; // tt_CertificateUsage* ExtendedKeyUsage{};
        this.KeyLength = new xsd_int_(); this.KeyLength['isP'] = true; // xsd_int_* KeyLength{};
        this.Version = new xsd_string(); this.Version['isP'] = true; // xsd_string* Version{};
        this.SerialNum = new xsd_string(); this.SerialNum['isP'] = true; // xsd_string* SerialNum{};
        this.SignatureAlgorithm = new xsd_string(); this.SignatureAlgorithm['isP'] = true; // xsd_string* SignatureAlgorithm{};
        this.Validity = new tt_DateTimeRange(); this.Validity['isP'] = true; // tt_DateTimeRange* Validity{};
        this.Extension = new tt_CertificateInformationExtension(); this.Extension['isP'] = true; // tt_CertificateInformationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "CertificateID", this.CertificateID);
        w.write(obj, "tt", "IssuerDN", this.IssuerDN);
        w.write(obj, "tt", "SubjectDN", this.SubjectDN);
        w.write(obj, "tt", "KeyUsage", this.KeyUsage);
        w.write(obj, "tt", "ExtendedKeyUsage", this.ExtendedKeyUsage);
        w.write(obj, "tt", "KeyLength", this.KeyLength);
        w.write(obj, "tt", "Version", this.Version);
        w.write(obj, "tt", "SerialNum", this.SerialNum);
        w.write(obj, "tt", "SignatureAlgorithm", this.SignatureAlgorithm);
        w.write(obj, "tt", "Validity", this.Validity);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tt", "IssuerDN", this.IssuerDN)) return false;
        if (!r.read(obj, "tt", "SubjectDN", this.SubjectDN)) return false;
        if (!r.read(obj, "tt", "KeyUsage", this.KeyUsage)) return false;
        if (!r.read(obj, "tt", "ExtendedKeyUsage", this.ExtendedKeyUsage)) return false;
        if (!r.read(obj, "tt", "KeyLength", this.KeyLength)) return false;
        if (!r.read(obj, "tt", "Version", this.Version)) return false;
        if (!r.read(obj, "tt", "SerialNum", this.SerialNum)) return false;
        if (!r.read(obj, "tt", "SignatureAlgorithm", this.SignatureAlgorithm)) return false;
        if (!r.read(obj, "tt", "Validity", this.Validity)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_TLSConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); // xsd_token CertificateID{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "CertificateID", this.CertificateID);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_EapMethodExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_EAPMethodConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.TLSConfiguration = new tt_TLSConfiguration(); this.TLSConfiguration['isP'] = true; // tt_TLSConfiguration* TLSConfiguration{};
        this.Password = new xsd_string(); this.Password['isP'] = true; // xsd_string* Password{};
        this.Extension = new tt_EapMethodExtension(); this.Extension['isP'] = true; // tt_EapMethodExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "TLSConfiguration", this.TLSConfiguration);
        w.write(obj, "tt", "Password", this.Password);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "TLSConfiguration", this.TLSConfiguration)) return false;
        if (!r.read(obj, "tt", "Password", this.Password)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot1XConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_Dot1XConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken Dot1XConfigurationToken{};
        this.Identity = new xsd_string(); // xsd_string Identity{};
        this.AnonymousID = new xsd_string(); this.AnonymousID['isP'] = true; // xsd_string* AnonymousID{};
        this.EAPMethod = new xsd_int_(); // xsd_int_ EAPMethod{};
        this.CACertificateID = new types.xsd_list(xsd_token); // xsd_list<xsd_token> CACertificateID{};
        this.EAPMethodConfiguration = new tt_EAPMethodConfiguration(); this.EAPMethodConfiguration['isP'] = true; // tt_EAPMethodConfiguration* EAPMethodConfiguration{};
        this.Extension = new tt_Dot1XConfigurationExtension(); this.Extension['isP'] = true; // tt_Dot1XConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Dot1XConfigurationToken", this.Dot1XConfigurationToken);
        w.write(obj, "tt", "Identity", this.Identity);
        w.write(obj, "tt", "AnonymousID", this.AnonymousID);
        w.write(obj, "tt", "EAPMethod", this.EAPMethod);
        w.write(obj, "tt", "CACertificateID", this.CACertificateID);
        w.write(obj, "tt", "EAPMethodConfiguration", this.EAPMethodConfiguration);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Dot1XConfigurationToken", this.Dot1XConfigurationToken)) return false;
        if (!r.read(obj, "tt", "Identity", this.Identity)) return false;
        if (!r.read(obj, "tt", "AnonymousID", this.AnonymousID)) return false;
        if (!r.read(obj, "tt", "EAPMethod", this.EAPMethod)) return false;
        if (!r.read(obj, "tt", "CACertificateID", this.CACertificateID)) return false;
        if (!r.read(obj, "tt", "EAPMethodConfiguration", this.EAPMethodConfiguration)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot11Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.TKIP = new xsd_boolean(); // xsd_boolean TKIP{};
        this.ScanAvailableNetworks = new xsd_boolean(); // xsd_boolean ScanAvailableNetworks{};
        this.MultipleConfiguration = new xsd_boolean(); // xsd_boolean MultipleConfiguration{};
        this.AdHocStationMode = new xsd_boolean(); // xsd_boolean AdHocStationMode{};
        this.WEP = new xsd_boolean(); // xsd_boolean WEP{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "TKIP", this.TKIP);
        w.write(obj, "tt", "ScanAvailableNetworks", this.ScanAvailableNetworks);
        w.write(obj, "tt", "MultipleConfiguration", this.MultipleConfiguration);
        w.write(obj, "tt", "AdHocStationMode", this.AdHocStationMode);
        w.write(obj, "tt", "WEP", this.WEP);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "TKIP", this.TKIP)) return false;
        if (!r.read(obj, "tt", "ScanAvailableNetworks", this.ScanAvailableNetworks)) return false;
        if (!r.read(obj, "tt", "MultipleConfiguration", this.MultipleConfiguration)) return false;
        if (!r.read(obj, "tt", "AdHocStationMode", this.AdHocStationMode)) return false;
        if (!r.read(obj, "tt", "WEP", this.WEP)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot11SignalStrength extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.None= 0;
        this.Very_Bad= 1;
        this.Bad= 2;
        this.Good= 3;
        this.Very_Good= 4;
        this.Extended= 5;
    }

    parse(parser, s){
        if (s == "None") { this.v = this.None; return true; }
        if (s == "Very Bad") { this.v = this.Very_Bad; return true; }
        if (s == "Bad") { this.v = this.Bad; return true; }
        if (s == "Good") { this.v = this.Good; return true; }
        if (s == "Very Good") { this.v = this.Very_Good; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.None) { return "None"; }
        if (this.v == this.Very_Bad) { return "Very Bad"; }
        if (this.v == this.Bad) { return "Bad"; }
        if (this.v == this.Good) { return "Good"; }
        if (this.v == this.Very_Good) { return "Very Good"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_Dot11Status extends types.xsd_type
{
    constructor(){
        super();
        this.SSID = new tt_Dot11SSIDType(); // tt_Dot11SSIDType SSID{};
        this.BSSID = new xsd_string(); this.BSSID['isP'] = true; // xsd_string* BSSID{};
        this.PairCipher = new tt_Dot11Cipher(); this.PairCipher['isP'] = true; // tt_Dot11Cipher* PairCipher{};
        this.GroupCipher = new tt_Dot11Cipher(); this.GroupCipher['isP'] = true; // tt_Dot11Cipher* GroupCipher{};
        this.SignalStrength = new tt_Dot11SignalStrength(); this.SignalStrength['isP'] = true; // tt_Dot11SignalStrength* SignalStrength{};
        this.ActiveConfigAlias = new tt_ReferenceToken(); // tt_ReferenceToken ActiveConfigAlias{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "SSID", this.SSID);
        w.write(obj, "tt", "BSSID", this.BSSID);
        w.write(obj, "tt", "PairCipher", this.PairCipher);
        w.write(obj, "tt", "GroupCipher", this.GroupCipher);
        w.write(obj, "tt", "SignalStrength", this.SignalStrength);
        w.write(obj, "tt", "ActiveConfigAlias", this.ActiveConfigAlias);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "SSID", this.SSID)) return false;
        if (!r.read(obj, "tt", "BSSID", this.BSSID)) return false;
        if (!r.read(obj, "tt", "PairCipher", this.PairCipher)) return false;
        if (!r.read(obj, "tt", "GroupCipher", this.GroupCipher)) return false;
        if (!r.read(obj, "tt", "SignalStrength", this.SignalStrength)) return false;
        if (!r.read(obj, "tt", "ActiveConfigAlias", this.ActiveConfigAlias)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Dot11AuthAndMangementSuite extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.None= 0;
        this.Dot1X= 1;
        this.PSK= 2;
        this.Extended= 3;
    }

    parse(parser, s){
        if (s == "None") { this.v = this.None; return true; }
        if (s == "Dot1X") { this.v = this.Dot1X; return true; }
        if (s == "PSK") { this.v = this.PSK; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.None) { return "None"; }
        if (this.v == this.Dot1X) { return "Dot1X"; }
        if (this.v == this.PSK) { return "PSK"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_Dot11AvailableNetworksExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_Dot11AvailableNetworks extends types.xsd_type
{
    constructor(){
        super();
        this.SSID = new tt_Dot11SSIDType(); // tt_Dot11SSIDType SSID{};
        this.BSSID = new xsd_string(); this.BSSID['isP'] = true; // xsd_string* BSSID{};
        this.AuthAndMangementSuite = new types.xsd_list(tt_Dot11AuthAndMangementSuite); // xsd_list<tt_Dot11AuthAndMangementSuite> AuthAndMangementSuite{};
        this.PairCipher = new types.xsd_list(tt_Dot11Cipher); // xsd_list<tt_Dot11Cipher> PairCipher{};
        this.GroupCipher = new types.xsd_list(tt_Dot11Cipher); // xsd_list<tt_Dot11Cipher> GroupCipher{};
        this.SignalStrength = new tt_Dot11SignalStrength(); this.SignalStrength['isP'] = true; // tt_Dot11SignalStrength* SignalStrength{};
        this.Extension = new tt_Dot11AvailableNetworksExtension(); this.Extension['isP'] = true; // tt_Dot11AvailableNetworksExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "SSID", this.SSID);
        w.write(obj, "tt", "BSSID", this.BSSID);
        w.write(obj, "tt", "AuthAndMangementSuite", this.AuthAndMangementSuite);
        w.write(obj, "tt", "PairCipher", this.PairCipher);
        w.write(obj, "tt", "GroupCipher", this.GroupCipher);
        w.write(obj, "tt", "SignalStrength", this.SignalStrength);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "SSID", this.SSID)) return false;
        if (!r.read(obj, "tt", "BSSID", this.BSSID)) return false;
        if (!r.read(obj, "tt", "AuthAndMangementSuite", this.AuthAndMangementSuite)) return false;
        if (!r.read(obj, "tt", "PairCipher", this.PairCipher)) return false;
        if (!r.read(obj, "tt", "GroupCipher", this.GroupCipher)) return false;
        if (!r.read(obj, "tt", "SignalStrength", this.SignalStrength)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SystemLogUri extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new tt_SystemLogType(); // tt_SystemLogType Type{};
        this.Uri = new xsd_anyURI(); // xsd_anyURI Uri{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "Uri", this.Uri);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "Uri", this.Uri)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SystemLogUriList extends types.xsd_type
{
    constructor(){
        super();
        this.SystemLog = new types.xsd_list(tt_SystemLogUri); // xsd_list<tt_SystemLogUri> SystemLog{};
    }

    write(obj, w){
        w.write(obj, "tt", "SystemLog", this.SystemLog);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "SystemLog", this.SystemLog)) return false;
        return true;
    }
}
export class tt_BacklightCompensationMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.OFF= 0;
        this.ON= 1;
    }

    parse(parser, s){
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "ON") { this.v = this.ON; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.ON) { return "ON"; }
        return "";
    }
}
export class tt_BacklightCompensation20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_BacklightCompensationMode(); // tt_BacklightCompensationMode Mode{};
        this.Level = new xsd_float_(); this.Level['isP'] = true; // xsd_float_* Level{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        return true;
    }
}
export class tt_ExposureMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.AUTO= 0;
        this.MANUAL= 1;
    }

    parse(parser, s){
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        if (s == "MANUAL") { this.v = this.MANUAL; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.AUTO) { return "AUTO"; }
        if (this.v == this.MANUAL) { return "MANUAL"; }
        return "";
    }
}
export class tt_ExposurePriority extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.LowNoise= 0;
        this.FrameRate= 1;
    }

    parse(parser, s){
        if (s == "LowNoise") { this.v = this.LowNoise; return true; }
        if (s == "FrameRate") { this.v = this.FrameRate; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.LowNoise) { return "LowNoise"; }
        if (this.v == this.FrameRate) { return "FrameRate"; }
        return "";
    }
}
export class tt_Rectangle extends types.xsd_type
{
    constructor(){
        super();
        this.bottom = new xsd_float_(); this.bottom['isP'] = true; // xsd_float_* bottom{};
        this.top = new xsd_float_(); this.top['isP'] = true; // xsd_float_* top{};
        this.right = new xsd_float_(); this.right['isP'] = true; // xsd_float_* right{};
        this.left = new xsd_float_(); this.left['isP'] = true; // xsd_float_* left{};
    }

    write(obj, w){
        w.write_attribute(obj, "bottom", this.bottom);
        w.write_attribute(obj, "top", this.top);
        w.write_attribute(obj, "right", this.right);
        w.write_attribute(obj, "left", this.left);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "bottom", this.bottom)) return false;
        if (!r.read_attribute(obj, "top", this.top)) return false;
        if (!r.read_attribute(obj, "right", this.right)) return false;
        if (!r.read_attribute(obj, "left", this.left)) return false;
        return true;
    }
}
export class tt_Exposure20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_ExposureMode(); // tt_ExposureMode Mode{};
        this.Priority = new tt_ExposurePriority(); this.Priority['isP'] = true; // tt_ExposurePriority* Priority{};
        this.Window = new tt_Rectangle(); this.Window['isP'] = true; // tt_Rectangle* Window{};
        this.MinExposureTime = new xsd_float_(); this.MinExposureTime['isP'] = true; // xsd_float_* MinExposureTime{};
        this.MaxExposureTime = new xsd_float_(); this.MaxExposureTime['isP'] = true; // xsd_float_* MaxExposureTime{};
        this.MinGain = new xsd_float_(); this.MinGain['isP'] = true; // xsd_float_* MinGain{};
        this.MaxGain = new xsd_float_(); this.MaxGain['isP'] = true; // xsd_float_* MaxGain{};
        this.MinIris = new xsd_float_(); this.MinIris['isP'] = true; // xsd_float_* MinIris{};
        this.MaxIris = new xsd_float_(); this.MaxIris['isP'] = true; // xsd_float_* MaxIris{};
        this.ExposureTime = new xsd_float_(); this.ExposureTime['isP'] = true; // xsd_float_* ExposureTime{};
        this.Gain = new xsd_float_(); this.Gain['isP'] = true; // xsd_float_* Gain{};
        this.Iris = new xsd_float_(); this.Iris['isP'] = true; // xsd_float_* Iris{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Priority", this.Priority);
        w.write(obj, "tt", "Window", this.Window);
        w.write(obj, "tt", "MinExposureTime", this.MinExposureTime);
        w.write(obj, "tt", "MaxExposureTime", this.MaxExposureTime);
        w.write(obj, "tt", "MinGain", this.MinGain);
        w.write(obj, "tt", "MaxGain", this.MaxGain);
        w.write(obj, "tt", "MinIris", this.MinIris);
        w.write(obj, "tt", "MaxIris", this.MaxIris);
        w.write(obj, "tt", "ExposureTime", this.ExposureTime);
        w.write(obj, "tt", "Gain", this.Gain);
        w.write(obj, "tt", "Iris", this.Iris);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Priority", this.Priority)) return false;
        if (!r.read(obj, "tt", "Window", this.Window)) return false;
        if (!r.read(obj, "tt", "MinExposureTime", this.MinExposureTime)) return false;
        if (!r.read(obj, "tt", "MaxExposureTime", this.MaxExposureTime)) return false;
        if (!r.read(obj, "tt", "MinGain", this.MinGain)) return false;
        if (!r.read(obj, "tt", "MaxGain", this.MaxGain)) return false;
        if (!r.read(obj, "tt", "MinIris", this.MinIris)) return false;
        if (!r.read(obj, "tt", "MaxIris", this.MaxIris)) return false;
        if (!r.read(obj, "tt", "ExposureTime", this.ExposureTime)) return false;
        if (!r.read(obj, "tt", "Gain", this.Gain)) return false;
        if (!r.read(obj, "tt", "Iris", this.Iris)) return false;
        return true;
    }
}
export class tt_AutoFocusMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.AUTO= 0;
        this.MANUAL= 1;
    }

    parse(parser, s){
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        if (s == "MANUAL") { this.v = this.MANUAL; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.AUTO) { return "AUTO"; }
        if (this.v == this.MANUAL) { return "MANUAL"; }
        return "";
    }
}
export class tt_FocusConfiguration20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_FocusConfiguration20 extends types.xsd_type
{
    constructor(){
        super();
        this.AutoFocusMode = new tt_AutoFocusMode(); // tt_AutoFocusMode AutoFocusMode{};
        this.DefaultSpeed = new xsd_float_(); this.DefaultSpeed['isP'] = true; // xsd_float_* DefaultSpeed{};
        this.NearLimit = new xsd_float_(); this.NearLimit['isP'] = true; // xsd_float_* NearLimit{};
        this.FarLimit = new xsd_float_(); this.FarLimit['isP'] = true; // xsd_float_* FarLimit{};
        this.Extension = new tt_FocusConfiguration20Extension(); this.Extension['isP'] = true; // tt_FocusConfiguration20Extension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AutoFocusMode", this.AutoFocusMode);
        w.write(obj, "tt", "DefaultSpeed", this.DefaultSpeed);
        w.write(obj, "tt", "NearLimit", this.NearLimit);
        w.write(obj, "tt", "FarLimit", this.FarLimit);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AutoFocusMode", this.AutoFocusMode)) return false;
        if (!r.read(obj, "tt", "DefaultSpeed", this.DefaultSpeed)) return false;
        if (!r.read(obj, "tt", "NearLimit", this.NearLimit)) return false;
        if (!r.read(obj, "tt", "FarLimit", this.FarLimit)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IrCutFilterMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.ON= 0;
        this.OFF= 1;
        this.AUTO= 2;
    }

    parse(parser, s){
        if (s == "ON") { this.v = this.ON; return true; }
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.ON) { return "ON"; }
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.AUTO) { return "AUTO"; }
        return "";
    }
}
export class tt_WideDynamicMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.OFF= 0;
        this.ON= 1;
    }

    parse(parser, s){
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "ON") { this.v = this.ON; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.ON) { return "ON"; }
        return "";
    }
}
export class tt_WideDynamicRange20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_WideDynamicMode(); // tt_WideDynamicMode Mode{};
        this.Level = new xsd_float_(); this.Level['isP'] = true; // xsd_float_* Level{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        return true;
    }
}
export class tt_WhiteBalanceMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.AUTO= 0;
        this.MANUAL= 1;
    }

    parse(parser, s){
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        if (s == "MANUAL") { this.v = this.MANUAL; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.AUTO) { return "AUTO"; }
        if (this.v == this.MANUAL) { return "MANUAL"; }
        return "";
    }
}
export class tt_WhiteBalance20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_WhiteBalance20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_WhiteBalanceMode(); // tt_WhiteBalanceMode Mode{};
        this.CrGain = new xsd_float_(); this.CrGain['isP'] = true; // xsd_float_* CrGain{};
        this.CbGain = new xsd_float_(); this.CbGain['isP'] = true; // xsd_float_* CbGain{};
        this.Extension = new tt_WhiteBalance20Extension(); this.Extension['isP'] = true; // tt_WhiteBalance20Extension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "CrGain", this.CrGain);
        w.write(obj, "tt", "CbGain", this.CbGain);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "CrGain", this.CrGain)) return false;
        if (!r.read(obj, "tt", "CbGain", this.CbGain)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ImageStabilizationMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.OFF= 0;
        this.ON= 1;
        this.AUTO= 2;
        this.Extended= 3;
    }

    parse(parser, s){
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "ON") { this.v = this.ON; return true; }
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.ON) { return "ON"; }
        if (this.v == this.AUTO) { return "AUTO"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_ImageStabilizationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ImageStabilization extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_ImageStabilizationMode(); // tt_ImageStabilizationMode Mode{};
        this.Level = new xsd_float_(); this.Level['isP'] = true; // xsd_float_* Level{};
        this.Extension = new tt_ImageStabilizationExtension(); this.Extension['isP'] = true; // tt_ImageStabilizationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IrCutFilterAutoAdjustmentExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_IrCutFilterAutoAdjustment extends types.xsd_type
{
    constructor(){
        super();
        this.BoundaryType = new xsd_string(); // xsd_string BoundaryType{};
        this.BoundaryOffset = new xsd_float_(); this.BoundaryOffset['isP'] = true; // xsd_float_* BoundaryOffset{};
        this.ResponseTime = new xsd_duration(); this.ResponseTime['isP'] = true; // xsd_duration* ResponseTime{};
        this.Extension = new tt_IrCutFilterAutoAdjustmentExtension(); this.Extension['isP'] = true; // tt_IrCutFilterAutoAdjustmentExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "BoundaryType", this.BoundaryType);
        w.write(obj, "tt", "BoundaryOffset", this.BoundaryOffset);
        w.write(obj, "tt", "ResponseTime", this.ResponseTime);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "BoundaryType", this.BoundaryType)) return false;
        if (!r.read(obj, "tt", "BoundaryOffset", this.BoundaryOffset)) return false;
        if (!r.read(obj, "tt", "ResponseTime", this.ResponseTime)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ToneCompensationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ToneCompensation extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new xsd_string(); // xsd_string Mode{};
        this.Level = new xsd_float_(); this.Level['isP'] = true; // xsd_float_* Level{};
        this.Extension = new tt_ToneCompensationExtension(); this.Extension['isP'] = true; // tt_ToneCompensationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DefoggingExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_Defogging extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new xsd_string(); // xsd_string Mode{};
        this.Level = new xsd_float_(); this.Level['isP'] = true; // xsd_float_* Level{};
        this.Extension = new tt_DefoggingExtension(); this.Extension['isP'] = true; // tt_DefoggingExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NoiseReduction extends types.xsd_type
{
    constructor(){
        super();
        this.Level = new xsd_float_(); // xsd_float_ Level{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ImagingSettingsExtension204 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ImagingSettingsExtension203 extends types.xsd_type
{
    constructor(){
        super();
        this.ToneCompensation = new tt_ToneCompensation(); this.ToneCompensation['isP'] = true; // tt_ToneCompensation* ToneCompensation{};
        this.Defogging = new tt_Defogging(); this.Defogging['isP'] = true; // tt_Defogging* Defogging{};
        this.NoiseReduction = new tt_NoiseReduction(); this.NoiseReduction['isP'] = true; // tt_NoiseReduction* NoiseReduction{};
        this.Extension = new tt_ImagingSettingsExtension204(); this.Extension['isP'] = true; // tt_ImagingSettingsExtension204* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "ToneCompensation", this.ToneCompensation);
        w.write(obj, "tt", "Defogging", this.Defogging);
        w.write(obj, "tt", "NoiseReduction", this.NoiseReduction);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ToneCompensation", this.ToneCompensation)) return false;
        if (!r.read(obj, "tt", "Defogging", this.Defogging)) return false;
        if (!r.read(obj, "tt", "NoiseReduction", this.NoiseReduction)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImagingSettingsExtension202 extends types.xsd_type
{
    constructor(){
        super();
        this.IrCutFilterAutoAdjustment = new types.xsd_list(tt_IrCutFilterAutoAdjustment); // xsd_list<tt_IrCutFilterAutoAdjustment> IrCutFilterAutoAdjustment{};
        this.Extension = new tt_ImagingSettingsExtension203(); this.Extension['isP'] = true; // tt_ImagingSettingsExtension203* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "IrCutFilterAutoAdjustment", this.IrCutFilterAutoAdjustment);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "IrCutFilterAutoAdjustment", this.IrCutFilterAutoAdjustment)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImagingSettingsExtension20 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.ImageStabilization = new tt_ImageStabilization(); this.ImageStabilization['isP'] = true; // tt_ImageStabilization* ImageStabilization{};
        this.Extension = new tt_ImagingSettingsExtension202(); this.Extension['isP'] = true; // tt_ImagingSettingsExtension202* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "ImageStabilization", this.ImageStabilization);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "ImageStabilization", this.ImageStabilization)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImagingSettings20 extends types.xsd_type
{
    constructor(){
        super();
        this.BacklightCompensation = new tt_BacklightCompensation20(); this.BacklightCompensation['isP'] = true; // tt_BacklightCompensation20* BacklightCompensation{};
        this.Brightness = new xsd_float_(); this.Brightness['isP'] = true; // xsd_float_* Brightness{};
        this.ColorSaturation = new xsd_float_(); this.ColorSaturation['isP'] = true; // xsd_float_* ColorSaturation{};
        this.Contrast = new xsd_float_(); this.Contrast['isP'] = true; // xsd_float_* Contrast{};
        this.Exposure = new tt_Exposure20(); this.Exposure['isP'] = true; // tt_Exposure20* Exposure{};
        this.Focus = new tt_FocusConfiguration20(); this.Focus['isP'] = true; // tt_FocusConfiguration20* Focus{};
        this.IrCutFilter = new tt_IrCutFilterMode(); this.IrCutFilter['isP'] = true; // tt_IrCutFilterMode* IrCutFilter{};
        this.Sharpness = new xsd_float_(); this.Sharpness['isP'] = true; // xsd_float_* Sharpness{};
        this.WideDynamicRange = new tt_WideDynamicRange20(); this.WideDynamicRange['isP'] = true; // tt_WideDynamicRange20* WideDynamicRange{};
        this.WhiteBalance = new tt_WhiteBalance20(); this.WhiteBalance['isP'] = true; // tt_WhiteBalance20* WhiteBalance{};
        this.Extension = new tt_ImagingSettingsExtension20(); this.Extension['isP'] = true; // tt_ImagingSettingsExtension20* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "BacklightCompensation", this.BacklightCompensation);
        w.write(obj, "tt", "Brightness", this.Brightness);
        w.write(obj, "tt", "ColorSaturation", this.ColorSaturation);
        w.write(obj, "tt", "Contrast", this.Contrast);
        w.write(obj, "tt", "Exposure", this.Exposure);
        w.write(obj, "tt", "Focus", this.Focus);
        w.write(obj, "tt", "IrCutFilter", this.IrCutFilter);
        w.write(obj, "tt", "Sharpness", this.Sharpness);
        w.write(obj, "tt", "WideDynamicRange", this.WideDynamicRange);
        w.write(obj, "tt", "WhiteBalance", this.WhiteBalance);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "BacklightCompensation", this.BacklightCompensation)) return false;
        if (!r.read(obj, "tt", "Brightness", this.Brightness)) return false;
        if (!r.read(obj, "tt", "ColorSaturation", this.ColorSaturation)) return false;
        if (!r.read(obj, "tt", "Contrast", this.Contrast)) return false;
        if (!r.read(obj, "tt", "Exposure", this.Exposure)) return false;
        if (!r.read(obj, "tt", "Focus", this.Focus)) return false;
        if (!r.read(obj, "tt", "IrCutFilter", this.IrCutFilter)) return false;
        if (!r.read(obj, "tt", "Sharpness", this.Sharpness)) return false;
        if (!r.read(obj, "tt", "WideDynamicRange", this.WideDynamicRange)) return false;
        if (!r.read(obj, "tt", "WhiteBalance", this.WhiteBalance)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_FloatRange extends types.xsd_type
{
    constructor(){
        super();
        this.Min = new xsd_float_(); // xsd_float_ Min{};
        this.Max = new xsd_float_(); // xsd_float_ Max{};
    }

    write(obj, w){
        w.write(obj, "tt", "Min", this.Min);
        w.write(obj, "tt", "Max", this.Max);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Min", this.Min)) return false;
        if (!r.read(obj, "tt", "Max", this.Max)) return false;
        return true;
    }
}
export class tt_BacklightCompensationOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_BacklightCompensationMode); // xsd_list<tt_BacklightCompensationMode> Mode{};
        this.Level = new tt_FloatRange(); this.Level['isP'] = true; // tt_FloatRange* Level{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        return true;
    }
}
export class tt_ExposureOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_ExposureMode); // xsd_list<tt_ExposureMode> Mode{};
        this.Priority = new types.xsd_list(tt_ExposurePriority); // xsd_list<tt_ExposurePriority> Priority{};
        this.MinExposureTime = new tt_FloatRange(); this.MinExposureTime['isP'] = true; // tt_FloatRange* MinExposureTime{};
        this.MaxExposureTime = new tt_FloatRange(); this.MaxExposureTime['isP'] = true; // tt_FloatRange* MaxExposureTime{};
        this.MinGain = new tt_FloatRange(); this.MinGain['isP'] = true; // tt_FloatRange* MinGain{};
        this.MaxGain = new tt_FloatRange(); this.MaxGain['isP'] = true; // tt_FloatRange* MaxGain{};
        this.MinIris = new tt_FloatRange(); this.MinIris['isP'] = true; // tt_FloatRange* MinIris{};
        this.MaxIris = new tt_FloatRange(); this.MaxIris['isP'] = true; // tt_FloatRange* MaxIris{};
        this.ExposureTime = new tt_FloatRange(); this.ExposureTime['isP'] = true; // tt_FloatRange* ExposureTime{};
        this.Gain = new tt_FloatRange(); this.Gain['isP'] = true; // tt_FloatRange* Gain{};
        this.Iris = new tt_FloatRange(); this.Iris['isP'] = true; // tt_FloatRange* Iris{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Priority", this.Priority);
        w.write(obj, "tt", "MinExposureTime", this.MinExposureTime);
        w.write(obj, "tt", "MaxExposureTime", this.MaxExposureTime);
        w.write(obj, "tt", "MinGain", this.MinGain);
        w.write(obj, "tt", "MaxGain", this.MaxGain);
        w.write(obj, "tt", "MinIris", this.MinIris);
        w.write(obj, "tt", "MaxIris", this.MaxIris);
        w.write(obj, "tt", "ExposureTime", this.ExposureTime);
        w.write(obj, "tt", "Gain", this.Gain);
        w.write(obj, "tt", "Iris", this.Iris);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Priority", this.Priority)) return false;
        if (!r.read(obj, "tt", "MinExposureTime", this.MinExposureTime)) return false;
        if (!r.read(obj, "tt", "MaxExposureTime", this.MaxExposureTime)) return false;
        if (!r.read(obj, "tt", "MinGain", this.MinGain)) return false;
        if (!r.read(obj, "tt", "MaxGain", this.MaxGain)) return false;
        if (!r.read(obj, "tt", "MinIris", this.MinIris)) return false;
        if (!r.read(obj, "tt", "MaxIris", this.MaxIris)) return false;
        if (!r.read(obj, "tt", "ExposureTime", this.ExposureTime)) return false;
        if (!r.read(obj, "tt", "Gain", this.Gain)) return false;
        if (!r.read(obj, "tt", "Iris", this.Iris)) return false;
        return true;
    }
}
export class tt_FocusOptions20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_FocusOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.AutoFocusModes = new types.xsd_list(tt_AutoFocusMode); // xsd_list<tt_AutoFocusMode> AutoFocusModes{};
        this.DefaultSpeed = new tt_FloatRange(); this.DefaultSpeed['isP'] = true; // tt_FloatRange* DefaultSpeed{};
        this.NearLimit = new tt_FloatRange(); this.NearLimit['isP'] = true; // tt_FloatRange* NearLimit{};
        this.FarLimit = new tt_FloatRange(); this.FarLimit['isP'] = true; // tt_FloatRange* FarLimit{};
        this.Extension = new tt_FocusOptions20Extension(); this.Extension['isP'] = true; // tt_FocusOptions20Extension* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "AutoFocusModes", this.AutoFocusModes);
        w.write(obj, "tt", "DefaultSpeed", this.DefaultSpeed);
        w.write(obj, "tt", "NearLimit", this.NearLimit);
        w.write(obj, "tt", "FarLimit", this.FarLimit);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AutoFocusModes", this.AutoFocusModes)) return false;
        if (!r.read(obj, "tt", "DefaultSpeed", this.DefaultSpeed)) return false;
        if (!r.read(obj, "tt", "NearLimit", this.NearLimit)) return false;
        if (!r.read(obj, "tt", "FarLimit", this.FarLimit)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_WideDynamicRangeOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_WideDynamicMode); // xsd_list<tt_WideDynamicMode> Mode{};
        this.Level = new tt_FloatRange(); this.Level['isP'] = true; // tt_FloatRange* Level{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        return true;
    }
}
export class tt_WhiteBalanceOptions20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_WhiteBalanceOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_WhiteBalanceMode); // xsd_list<tt_WhiteBalanceMode> Mode{};
        this.YrGain = new tt_FloatRange(); this.YrGain['isP'] = true; // tt_FloatRange* YrGain{};
        this.YbGain = new tt_FloatRange(); this.YbGain['isP'] = true; // tt_FloatRange* YbGain{};
        this.Extension = new tt_WhiteBalanceOptions20Extension(); this.Extension['isP'] = true; // tt_WhiteBalanceOptions20Extension* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "YrGain", this.YrGain);
        w.write(obj, "tt", "YbGain", this.YbGain);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "YrGain", this.YrGain)) return false;
        if (!r.read(obj, "tt", "YbGain", this.YbGain)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImageStabilizationOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ImageStabilizationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_ImageStabilizationMode); // xsd_list<tt_ImageStabilizationMode> Mode{};
        this.Level = new tt_FloatRange(); this.Level['isP'] = true; // tt_FloatRange* Level{};
        this.Extension = new tt_ImageStabilizationOptionsExtension(); this.Extension['isP'] = true; // tt_ImageStabilizationOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DurationRange extends types.xsd_type
{
    constructor(){
        super();
        this.Min = new xsd_duration(); // xsd_duration Min{};
        this.Max = new xsd_duration(); // xsd_duration Max{};
    }

    write(obj, w){
        w.write(obj, "tt", "Min", this.Min);
        w.write(obj, "tt", "Max", this.Max);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Min", this.Min)) return false;
        if (!r.read(obj, "tt", "Max", this.Max)) return false;
        return true;
    }
}
export class tt_IrCutFilterAutoAdjustmentOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_IrCutFilterAutoAdjustmentOptions extends types.xsd_type
{
    constructor(){
        super();
        this.BoundaryType = new types.xsd_list(xsd_string); // xsd_list<xsd_string> BoundaryType{};
        this.BoundaryOffset = new xsd_boolean(); this.BoundaryOffset['isP'] = true; // xsd_boolean* BoundaryOffset{};
        this.ResponseTimeRange = new tt_DurationRange(); this.ResponseTimeRange['isP'] = true; // tt_DurationRange* ResponseTimeRange{};
        this.Extension = new tt_IrCutFilterAutoAdjustmentOptionsExtension(); this.Extension['isP'] = true; // tt_IrCutFilterAutoAdjustmentOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "BoundaryType", this.BoundaryType);
        w.write(obj, "tt", "BoundaryOffset", this.BoundaryOffset);
        w.write(obj, "tt", "ResponseTimeRange", this.ResponseTimeRange);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "BoundaryType", this.BoundaryType)) return false;
        if (!r.read(obj, "tt", "BoundaryOffset", this.BoundaryOffset)) return false;
        if (!r.read(obj, "tt", "ResponseTimeRange", this.ResponseTimeRange)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ToneCompensationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(xsd_string); // xsd_list<xsd_string> Mode{};
        this.Level = new xsd_boolean(); // xsd_boolean Level{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_DefoggingOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(xsd_string); // xsd_list<xsd_string> Mode{};
        this.Level = new xsd_boolean(); // xsd_boolean Level{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_NoiseReductionOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Level = new xsd_boolean(); // xsd_boolean Level{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Level", this.Level);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ImagingOptions20Extension4 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ImagingOptions20Extension3 extends types.xsd_type
{
    constructor(){
        super();
        this.ToneCompensationOptions = new tt_ToneCompensationOptions(); this.ToneCompensationOptions['isP'] = true; // tt_ToneCompensationOptions* ToneCompensationOptions{};
        this.DefoggingOptions = new tt_DefoggingOptions(); this.DefoggingOptions['isP'] = true; // tt_DefoggingOptions* DefoggingOptions{};
        this.NoiseReductionOptions = new tt_NoiseReductionOptions(); this.NoiseReductionOptions['isP'] = true; // tt_NoiseReductionOptions* NoiseReductionOptions{};
        this.Extension = new tt_ImagingOptions20Extension4(); this.Extension['isP'] = true; // tt_ImagingOptions20Extension4* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "ToneCompensationOptions", this.ToneCompensationOptions);
        w.write(obj, "tt", "DefoggingOptions", this.DefoggingOptions);
        w.write(obj, "tt", "NoiseReductionOptions", this.NoiseReductionOptions);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ToneCompensationOptions", this.ToneCompensationOptions)) return false;
        if (!r.read(obj, "tt", "DefoggingOptions", this.DefoggingOptions)) return false;
        if (!r.read(obj, "tt", "NoiseReductionOptions", this.NoiseReductionOptions)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImagingOptions20Extension2 extends types.xsd_type
{
    constructor(){
        super();
        this.IrCutFilterAutoAdjustment = new tt_IrCutFilterAutoAdjustmentOptions(); this.IrCutFilterAutoAdjustment['isP'] = true; // tt_IrCutFilterAutoAdjustmentOptions* IrCutFilterAutoAdjustment{};
        this.Extension = new tt_ImagingOptions20Extension3(); this.Extension['isP'] = true; // tt_ImagingOptions20Extension3* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "IrCutFilterAutoAdjustment", this.IrCutFilterAutoAdjustment);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "IrCutFilterAutoAdjustment", this.IrCutFilterAutoAdjustment)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImagingOptions20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.ImageStabilization = new tt_ImageStabilizationOptions(); this.ImageStabilization['isP'] = true; // tt_ImageStabilizationOptions* ImageStabilization{};
        this.Extension = new tt_ImagingOptions20Extension2(); this.Extension['isP'] = true; // tt_ImagingOptions20Extension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "ImageStabilization", this.ImageStabilization);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "ImageStabilization", this.ImageStabilization)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_ImagingOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.BacklightCompensation = new tt_BacklightCompensationOptions20(); this.BacklightCompensation['isP'] = true; // tt_BacklightCompensationOptions20* BacklightCompensation{};
        this.Brightness = new tt_FloatRange(); this.Brightness['isP'] = true; // tt_FloatRange* Brightness{};
        this.ColorSaturation = new tt_FloatRange(); this.ColorSaturation['isP'] = true; // tt_FloatRange* ColorSaturation{};
        this.Contrast = new tt_FloatRange(); this.Contrast['isP'] = true; // tt_FloatRange* Contrast{};
        this.Exposure = new tt_ExposureOptions20(); this.Exposure['isP'] = true; // tt_ExposureOptions20* Exposure{};
        this.Focus = new tt_FocusOptions20(); this.Focus['isP'] = true; // tt_FocusOptions20* Focus{};
        this.IrCutFilterModes = new types.xsd_list(tt_IrCutFilterMode); // xsd_list<tt_IrCutFilterMode> IrCutFilterModes{};
        this.Sharpness = new tt_FloatRange(); this.Sharpness['isP'] = true; // tt_FloatRange* Sharpness{};
        this.WideDynamicRange = new tt_WideDynamicRangeOptions20(); this.WideDynamicRange['isP'] = true; // tt_WideDynamicRangeOptions20* WideDynamicRange{};
        this.WhiteBalance = new tt_WhiteBalanceOptions20(); this.WhiteBalance['isP'] = true; // tt_WhiteBalanceOptions20* WhiteBalance{};
        this.Extension = new tt_ImagingOptions20Extension(); this.Extension['isP'] = true; // tt_ImagingOptions20Extension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "BacklightCompensation", this.BacklightCompensation);
        w.write(obj, "tt", "Brightness", this.Brightness);
        w.write(obj, "tt", "ColorSaturation", this.ColorSaturation);
        w.write(obj, "tt", "Contrast", this.Contrast);
        w.write(obj, "tt", "Exposure", this.Exposure);
        w.write(obj, "tt", "Focus", this.Focus);
        w.write(obj, "tt", "IrCutFilterModes", this.IrCutFilterModes);
        w.write(obj, "tt", "Sharpness", this.Sharpness);
        w.write(obj, "tt", "WideDynamicRange", this.WideDynamicRange);
        w.write(obj, "tt", "WhiteBalance", this.WhiteBalance);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "BacklightCompensation", this.BacklightCompensation)) return false;
        if (!r.read(obj, "tt", "Brightness", this.Brightness)) return false;
        if (!r.read(obj, "tt", "ColorSaturation", this.ColorSaturation)) return false;
        if (!r.read(obj, "tt", "Contrast", this.Contrast)) return false;
        if (!r.read(obj, "tt", "Exposure", this.Exposure)) return false;
        if (!r.read(obj, "tt", "Focus", this.Focus)) return false;
        if (!r.read(obj, "tt", "IrCutFilterModes", this.IrCutFilterModes)) return false;
        if (!r.read(obj, "tt", "Sharpness", this.Sharpness)) return false;
        if (!r.read(obj, "tt", "WideDynamicRange", this.WideDynamicRange)) return false;
        if (!r.read(obj, "tt", "WhiteBalance", this.WhiteBalance)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AbsoluteFocus extends types.xsd_type
{
    constructor(){
        super();
        this.Position = new xsd_float_(); // xsd_float_ Position{};
        this.Speed = new xsd_float_(); this.Speed['isP'] = true; // xsd_float_* Speed{};
    }

    write(obj, w){
        w.write(obj, "tt", "Position", this.Position);
        w.write(obj, "tt", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Position", this.Position)) return false;
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tt_RelativeFocus extends types.xsd_type
{
    constructor(){
        super();
        this.Distance = new xsd_float_(); // xsd_float_ Distance{};
        this.Speed = new xsd_float_(); this.Speed['isP'] = true; // xsd_float_* Speed{};
    }

    write(obj, w){
        w.write(obj, "tt", "Distance", this.Distance);
        w.write(obj, "tt", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Distance", this.Distance)) return false;
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tt_ContinuousFocus extends types.xsd_type
{
    constructor(){
        super();
        this.Speed = new xsd_float_(); // xsd_float_ Speed{};
    }

    write(obj, w){
        w.write(obj, "tt", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tt_FocusMove extends types.xsd_type
{
    constructor(){
        super();
        this.Absolute = new tt_AbsoluteFocus(); this.Absolute['isP'] = true; // tt_AbsoluteFocus* Absolute{};
        this.Relative = new tt_RelativeFocus(); this.Relative['isP'] = true; // tt_RelativeFocus* Relative{};
        this.Continuous = new tt_ContinuousFocus(); this.Continuous['isP'] = true; // tt_ContinuousFocus* Continuous{};
    }

    write(obj, w){
        w.write(obj, "tt", "Absolute", this.Absolute);
        w.write(obj, "tt", "Relative", this.Relative);
        w.write(obj, "tt", "Continuous", this.Continuous);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Absolute", this.Absolute)) return false;
        if (!r.read(obj, "tt", "Relative", this.Relative)) return false;
        if (!r.read(obj, "tt", "Continuous", this.Continuous)) return false;
        return true;
    }
}
export class tt_MoveStatus extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.IDLE= 0;
        this.MOVING= 1;
        this.UNKNOWN= 2;
    }

    parse(parser, s){
        if (s == "IDLE") { this.v = this.IDLE; return true; }
        if (s == "MOVING") { this.v = this.MOVING; return true; }
        if (s == "UNKNOWN") { this.v = this.UNKNOWN; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.IDLE) { return "IDLE"; }
        if (this.v == this.MOVING) { return "MOVING"; }
        if (this.v == this.UNKNOWN) { return "UNKNOWN"; }
        return "";
    }
}
export class tt_FocusStatus20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_FocusStatus20 extends types.xsd_type
{
    constructor(){
        super();
        this.Position = new xsd_float_(); // xsd_float_ Position{};
        this.MoveStatus = new tt_MoveStatus(); // tt_MoveStatus MoveStatus{};
        this.Error = new xsd_string(); this.Error['isP'] = true; // xsd_string* Error{};
        this.Extension = new tt_FocusStatus20Extension(); this.Extension['isP'] = true; // tt_FocusStatus20Extension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Position", this.Position);
        w.write(obj, "tt", "MoveStatus", this.MoveStatus);
        w.write(obj, "tt", "Error", this.Error);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Position", this.Position)) return false;
        if (!r.read(obj, "tt", "MoveStatus", this.MoveStatus)) return false;
        if (!r.read(obj, "tt", "Error", this.Error)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ImagingStatus20Extension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ImagingStatus20 extends types.xsd_type
{
    constructor(){
        super();
        this.FocusStatus20 = new tt_FocusStatus20(); this.FocusStatus20['isP'] = true; // tt_FocusStatus20* FocusStatus20{};
        this.Extension = new tt_ImagingStatus20Extension(); this.Extension['isP'] = true; // tt_ImagingStatus20Extension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "FocusStatus20", this.FocusStatus20);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "FocusStatus20", this.FocusStatus20)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AbsoluteFocusOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Position = new tt_FloatRange(); // tt_FloatRange Position{};
        this.Speed = new tt_FloatRange(); this.Speed['isP'] = true; // tt_FloatRange* Speed{};
    }

    write(obj, w){
        w.write(obj, "tt", "Position", this.Position);
        w.write(obj, "tt", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Position", this.Position)) return false;
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tt_RelativeFocusOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.Distance = new tt_FloatRange(); // tt_FloatRange Distance{};
        this.Speed = new tt_FloatRange(); this.Speed['isP'] = true; // tt_FloatRange* Speed{};
    }

    write(obj, w){
        w.write(obj, "tt", "Distance", this.Distance);
        w.write(obj, "tt", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Distance", this.Distance)) return false;
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tt_ContinuousFocusOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Speed = new tt_FloatRange(); // tt_FloatRange Speed{};
    }

    write(obj, w){
        w.write(obj, "tt", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tt_MoveOptions20 extends types.xsd_type
{
    constructor(){
        super();
        this.Absolute = new tt_AbsoluteFocusOptions(); this.Absolute['isP'] = true; // tt_AbsoluteFocusOptions* Absolute{};
        this.Relative = new tt_RelativeFocusOptions20(); this.Relative['isP'] = true; // tt_RelativeFocusOptions20* Relative{};
        this.Continuous = new tt_ContinuousFocusOptions(); this.Continuous['isP'] = true; // tt_ContinuousFocusOptions* Continuous{};
    }

    write(obj, w){
        w.write(obj, "tt", "Absolute", this.Absolute);
        w.write(obj, "tt", "Relative", this.Relative);
        w.write(obj, "tt", "Continuous", this.Continuous);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Absolute", this.Absolute)) return false;
        if (!r.read(obj, "tt", "Relative", this.Relative)) return false;
        if (!r.read(obj, "tt", "Continuous", this.Continuous)) return false;
        return true;
    }
}
export class tt_VideoResolution extends types.xsd_type
{
    constructor(){
        super();
        this.Width = new xsd_int_(); // xsd_int_ Width{};
        this.Height = new xsd_int_(); // xsd_int_ Height{};
    }

    write(obj, w){
        w.write(obj, "tt", "Width", this.Width);
        w.write(obj, "tt", "Height", this.Height);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Width", this.Width)) return false;
        if (!r.read(obj, "tt", "Height", this.Height)) return false;
        return true;
    }
}
export class tt_BacklightCompensation extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_BacklightCompensationMode(); // tt_BacklightCompensationMode Mode{};
        this.Level = new xsd_float_(); // xsd_float_ Level{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        return true;
    }
}
export class tt_Exposure extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_ExposureMode(); // tt_ExposureMode Mode{};
        this.Priority = new tt_ExposurePriority(); // tt_ExposurePriority Priority{};
        this.Window = new tt_Rectangle(); // tt_Rectangle Window{};
        this.MinExposureTime = new xsd_float_(); // xsd_float_ MinExposureTime{};
        this.MaxExposureTime = new xsd_float_(); // xsd_float_ MaxExposureTime{};
        this.MinGain = new xsd_float_(); // xsd_float_ MinGain{};
        this.MaxGain = new xsd_float_(); // xsd_float_ MaxGain{};
        this.MinIris = new xsd_float_(); // xsd_float_ MinIris{};
        this.MaxIris = new xsd_float_(); // xsd_float_ MaxIris{};
        this.ExposureTime = new xsd_float_(); // xsd_float_ ExposureTime{};
        this.Gain = new xsd_float_(); // xsd_float_ Gain{};
        this.Iris = new xsd_float_(); // xsd_float_ Iris{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Priority", this.Priority);
        w.write(obj, "tt", "Window", this.Window);
        w.write(obj, "tt", "MinExposureTime", this.MinExposureTime);
        w.write(obj, "tt", "MaxExposureTime", this.MaxExposureTime);
        w.write(obj, "tt", "MinGain", this.MinGain);
        w.write(obj, "tt", "MaxGain", this.MaxGain);
        w.write(obj, "tt", "MinIris", this.MinIris);
        w.write(obj, "tt", "MaxIris", this.MaxIris);
        w.write(obj, "tt", "ExposureTime", this.ExposureTime);
        w.write(obj, "tt", "Gain", this.Gain);
        w.write(obj, "tt", "Iris", this.Iris);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Priority", this.Priority)) return false;
        if (!r.read(obj, "tt", "Window", this.Window)) return false;
        if (!r.read(obj, "tt", "MinExposureTime", this.MinExposureTime)) return false;
        if (!r.read(obj, "tt", "MaxExposureTime", this.MaxExposureTime)) return false;
        if (!r.read(obj, "tt", "MinGain", this.MinGain)) return false;
        if (!r.read(obj, "tt", "MaxGain", this.MaxGain)) return false;
        if (!r.read(obj, "tt", "MinIris", this.MinIris)) return false;
        if (!r.read(obj, "tt", "MaxIris", this.MaxIris)) return false;
        if (!r.read(obj, "tt", "ExposureTime", this.ExposureTime)) return false;
        if (!r.read(obj, "tt", "Gain", this.Gain)) return false;
        if (!r.read(obj, "tt", "Iris", this.Iris)) return false;
        return true;
    }
}
export class tt_FocusConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.AutoFocusMode = new tt_AutoFocusMode(); // tt_AutoFocusMode AutoFocusMode{};
        this.DefaultSpeed = new xsd_float_(); // xsd_float_ DefaultSpeed{};
        this.NearLimit = new xsd_float_(); // xsd_float_ NearLimit{};
        this.FarLimit = new xsd_float_(); // xsd_float_ FarLimit{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AutoFocusMode", this.AutoFocusMode);
        w.write(obj, "tt", "DefaultSpeed", this.DefaultSpeed);
        w.write(obj, "tt", "NearLimit", this.NearLimit);
        w.write(obj, "tt", "FarLimit", this.FarLimit);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AutoFocusMode", this.AutoFocusMode)) return false;
        if (!r.read(obj, "tt", "DefaultSpeed", this.DefaultSpeed)) return false;
        if (!r.read(obj, "tt", "NearLimit", this.NearLimit)) return false;
        if (!r.read(obj, "tt", "FarLimit", this.FarLimit)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_WideDynamicRange extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_WideDynamicMode(); // tt_WideDynamicMode Mode{};
        this.Level = new xsd_float_(); // xsd_float_ Level{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Level", this.Level);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Level", this.Level)) return false;
        return true;
    }
}
export class tt_WhiteBalance extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_WhiteBalanceMode(); // tt_WhiteBalanceMode Mode{};
        this.CrGain = new xsd_float_(); // xsd_float_ CrGain{};
        this.CbGain = new xsd_float_(); // xsd_float_ CbGain{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "CrGain", this.CrGain);
        w.write(obj, "tt", "CbGain", this.CbGain);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "CrGain", this.CrGain)) return false;
        if (!r.read(obj, "tt", "CbGain", this.CbGain)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ImagingSettingsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ImagingSettings extends types.xsd_type
{
    constructor(){
        super();
        this.BacklightCompensation = new tt_BacklightCompensation(); this.BacklightCompensation['isP'] = true; // tt_BacklightCompensation* BacklightCompensation{};
        this.Brightness = new xsd_float_(); this.Brightness['isP'] = true; // xsd_float_* Brightness{};
        this.ColorSaturation = new xsd_float_(); this.ColorSaturation['isP'] = true; // xsd_float_* ColorSaturation{};
        this.Contrast = new xsd_float_(); this.Contrast['isP'] = true; // xsd_float_* Contrast{};
        this.Exposure = new tt_Exposure(); this.Exposure['isP'] = true; // tt_Exposure* Exposure{};
        this.Focus = new tt_FocusConfiguration(); this.Focus['isP'] = true; // tt_FocusConfiguration* Focus{};
        this.IrCutFilter = new tt_IrCutFilterMode(); this.IrCutFilter['isP'] = true; // tt_IrCutFilterMode* IrCutFilter{};
        this.Sharpness = new xsd_float_(); this.Sharpness['isP'] = true; // xsd_float_* Sharpness{};
        this.WideDynamicRange = new tt_WideDynamicRange(); this.WideDynamicRange['isP'] = true; // tt_WideDynamicRange* WideDynamicRange{};
        this.WhiteBalance = new tt_WhiteBalance(); this.WhiteBalance['isP'] = true; // tt_WhiteBalance* WhiteBalance{};
        this.Extension = new tt_ImagingSettingsExtension(); this.Extension['isP'] = true; // tt_ImagingSettingsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "BacklightCompensation", this.BacklightCompensation);
        w.write(obj, "tt", "Brightness", this.Brightness);
        w.write(obj, "tt", "ColorSaturation", this.ColorSaturation);
        w.write(obj, "tt", "Contrast", this.Contrast);
        w.write(obj, "tt", "Exposure", this.Exposure);
        w.write(obj, "tt", "Focus", this.Focus);
        w.write(obj, "tt", "IrCutFilter", this.IrCutFilter);
        w.write(obj, "tt", "Sharpness", this.Sharpness);
        w.write(obj, "tt", "WideDynamicRange", this.WideDynamicRange);
        w.write(obj, "tt", "WhiteBalance", this.WhiteBalance);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "BacklightCompensation", this.BacklightCompensation)) return false;
        if (!r.read(obj, "tt", "Brightness", this.Brightness)) return false;
        if (!r.read(obj, "tt", "ColorSaturation", this.ColorSaturation)) return false;
        if (!r.read(obj, "tt", "Contrast", this.Contrast)) return false;
        if (!r.read(obj, "tt", "Exposure", this.Exposure)) return false;
        if (!r.read(obj, "tt", "Focus", this.Focus)) return false;
        if (!r.read(obj, "tt", "IrCutFilter", this.IrCutFilter)) return false;
        if (!r.read(obj, "tt", "Sharpness", this.Sharpness)) return false;
        if (!r.read(obj, "tt", "WideDynamicRange", this.WideDynamicRange)) return false;
        if (!r.read(obj, "tt", "WhiteBalance", this.WhiteBalance)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoSourceExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_VideoSourceExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Imaging = new tt_ImagingSettings20(); this.Imaging['isP'] = true; // tt_ImagingSettings20* Imaging{};
        this.Extension = new tt_VideoSourceExtension2(); this.Extension['isP'] = true; // tt_VideoSourceExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Imaging", this.Imaging);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Imaging", this.Imaging)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_VideoSource extends tt_DeviceEntity
{
    constructor(){
        super();
        this.Framerate = new xsd_float_(); // xsd_float_ Framerate{};
        this.Resolution = new tt_VideoResolution(); // tt_VideoResolution Resolution{};
        this.Imaging = new tt_ImagingSettings(); this.Imaging['isP'] = true; // tt_ImagingSettings* Imaging{};
        this.Extension = new tt_VideoSourceExtension(); this.Extension['isP'] = true; // tt_VideoSourceExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Framerate", this.Framerate);
        w.write(obj, "tt", "Resolution", this.Resolution);
        w.write(obj, "tt", "Imaging", this.Imaging);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Framerate", this.Framerate)) return false;
        if (!r.read(obj, "tt", "Resolution", this.Resolution)) return false;
        if (!r.read(obj, "tt", "Imaging", this.Imaging)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioSource extends tt_DeviceEntity
{
    constructor(){
        super();
        this.Channels = new xsd_int_(); // xsd_int_ Channels{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Channels", this.Channels);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Channels", this.Channels)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioOutput extends tt_DeviceEntity
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ConfigurationEntity extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.UseCount = new xsd_int_(); // xsd_int_ UseCount{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "UseCount", this.UseCount);
        w.write_attribute(obj, "token", this.token);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "UseCount", this.UseCount)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        return true;
    }
}
export class tt_IntRectangle extends types.xsd_type
{
    constructor(){
        super();
        this.x = new xsd_int_(); // xsd_int_ x{};
        this.y = new xsd_int_(); // xsd_int_ y{};
        this.width = new xsd_int_(); // xsd_int_ width{};
        this.height = new xsd_int_(); // xsd_int_ height{};
    }

    write(obj, w){
        w.write_attribute(obj, "x", this.x);
        w.write_attribute(obj, "y", this.y);
        w.write_attribute(obj, "width", this.width);
        w.write_attribute(obj, "height", this.height);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "x", this.x)) return false;
        if (!r.read_attribute(obj, "y", this.y)) return false;
        if (!r.read_attribute(obj, "width", this.width)) return false;
        if (!r.read_attribute(obj, "height", this.height)) return false;
        return true;
    }
}
export class tt_RotateMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.OFF= 0;
        this.ON= 1;
        this.AUTO= 2;
    }

    parse(parser, s){
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "ON") { this.v = this.ON; return true; }
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.ON) { return "ON"; }
        if (this.v == this.AUTO) { return "AUTO"; }
        return "";
    }
}
export class tt_RotateExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_Rotate extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_RotateMode(); // tt_RotateMode Mode{};
        this.Degree = new xsd_int_(); this.Degree['isP'] = true; // xsd_int_* Degree{};
        this.Extension = new tt_RotateExtension(); this.Extension['isP'] = true; // tt_RotateExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Degree", this.Degree);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Degree", this.Degree)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_LensOffset extends types.xsd_type
{
    constructor(){
        super();
        this.x = new xsd_float_(); this.x['isP'] = true; // xsd_float_* x{};
        this.y = new xsd_float_(); this.y['isP'] = true; // xsd_float_* y{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "x", this.x);
        w.write_attribute(obj, "y", this.y);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "x", this.x)) return false;
        if (!r.read_attribute(obj, "y", this.y)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_LensProjection extends types.xsd_type
{
    constructor(){
        super();
        this.Angle = new xsd_float_(); // xsd_float_ Angle{};
        this.Radius = new xsd_float_(); // xsd_float_ Radius{};
        this.Transmittance = new xsd_float_(); this.Transmittance['isP'] = true; // xsd_float_* Transmittance{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Angle", this.Angle);
        w.write(obj, "tt", "Radius", this.Radius);
        w.write(obj, "tt", "Transmittance", this.Transmittance);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Angle", this.Angle)) return false;
        if (!r.read(obj, "tt", "Radius", this.Radius)) return false;
        if (!r.read(obj, "tt", "Transmittance", this.Transmittance)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_LensDescription extends types.xsd_type
{
    constructor(){
        super();
        this.Offset = new tt_LensOffset(); // tt_LensOffset Offset{};
        this.Projection = new types.xsd_list(tt_LensProjection); // xsd_list<tt_LensProjection> Projection{};
        this.XFactor = new xsd_float_(); // xsd_float_ XFactor{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.FocalLength = new xsd_float_(); this.FocalLength['isP'] = true; // xsd_float_* FocalLength{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Offset", this.Offset);
        w.write(obj, "tt", "Projection", this.Projection);
        w.write(obj, "tt", "XFactor", this.XFactor);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "FocalLength", this.FocalLength);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Offset", this.Offset)) return false;
        if (!r.read(obj, "tt", "Projection", this.Projection)) return false;
        if (!r.read(obj, "tt", "XFactor", this.XFactor)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "FocalLength", this.FocalLength)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoSourceConfigurationExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.LensDescription = new types.xsd_list(tt_LensDescription); // xsd_list<tt_LensDescription> LensDescription{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tt", "LensDescription", this.LensDescription);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "LensDescription", this.LensDescription)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_VideoSourceConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.Rotate = new tt_Rotate(); this.Rotate['isP'] = true; // tt_Rotate* Rotate{};
        this.Extension = new tt_VideoSourceConfigurationExtension2(); this.Extension['isP'] = true; // tt_VideoSourceConfigurationExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "Rotate", this.Rotate);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Rotate", this.Rotate)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_VideoSourceConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.SourceToken = new tt_ReferenceToken(); // tt_ReferenceToken SourceToken{};
        this.Bounds = new tt_IntRectangle(); // tt_IntRectangle Bounds{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Extension = new tt_VideoSourceConfigurationExtension(); this.Extension['isP'] = true; // tt_VideoSourceConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "SourceToken", this.SourceToken);
        w.write(obj, "tt", "Bounds", this.Bounds);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "SourceToken", this.SourceToken)) return false;
        if (!r.read(obj, "tt", "Bounds", this.Bounds)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioSourceConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.SourceToken = new tt_ReferenceToken(); // tt_ReferenceToken SourceToken{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "SourceToken", this.SourceToken);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "SourceToken", this.SourceToken)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoEncoding extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.JPEG= 0;
        this.MPEG4= 1;
        this.H264= 2;
    }

    parse(parser, s){
        if (s == "JPEG") { this.v = this.JPEG; return true; }
        if (s == "MPEG4") { this.v = this.MPEG4; return true; }
        if (s == "H264") { this.v = this.H264; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.JPEG) { return "JPEG"; }
        if (this.v == this.MPEG4) { return "MPEG4"; }
        if (this.v == this.H264) { return "H264"; }
        return "";
    }
}
export class tt_VideoRateControl extends types.xsd_type
{
    constructor(){
        super();
        this.FrameRateLimit = new xsd_int_(); // xsd_int_ FrameRateLimit{};
        this.EncodingInterval = new xsd_int_(); // xsd_int_ EncodingInterval{};
        this.BitrateLimit = new xsd_int_(); // xsd_int_ BitrateLimit{};
    }

    write(obj, w){
        w.write(obj, "tt", "FrameRateLimit", this.FrameRateLimit);
        w.write(obj, "tt", "EncodingInterval", this.EncodingInterval);
        w.write(obj, "tt", "BitrateLimit", this.BitrateLimit);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "FrameRateLimit", this.FrameRateLimit)) return false;
        if (!r.read(obj, "tt", "EncodingInterval", this.EncodingInterval)) return false;
        if (!r.read(obj, "tt", "BitrateLimit", this.BitrateLimit)) return false;
        return true;
    }
}
export class tt_Mpeg4Profile extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.SP= 0;
        this.ASP= 1;
    }

    parse(parser, s){
        if (s == "SP") { this.v = this.SP; return true; }
        if (s == "ASP") { this.v = this.ASP; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.SP) { return "SP"; }
        if (this.v == this.ASP) { return "ASP"; }
        return "";
    }
}
export class tt_Mpeg4Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.GovLength = new xsd_int_(); // xsd_int_ GovLength{};
        this.Mpeg4Profile = new tt_Mpeg4Profile(); // tt_Mpeg4Profile Mpeg4Profile{};
    }

    write(obj, w){
        w.write(obj, "tt", "GovLength", this.GovLength);
        w.write(obj, "tt", "Mpeg4Profile", this.Mpeg4Profile);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "GovLength", this.GovLength)) return false;
        if (!r.read(obj, "tt", "Mpeg4Profile", this.Mpeg4Profile)) return false;
        return true;
    }
}
export class tt_H264Profile extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Baseline= 0;
        this.Main= 1;
        this.Extended= 2;
        this.High= 3;
    }

    parse(parser, s){
        if (s == "Baseline") { this.v = this.Baseline; return true; }
        if (s == "Main") { this.v = this.Main; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        if (s == "High") { this.v = this.High; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Baseline) { return "Baseline"; }
        if (this.v == this.Main) { return "Main"; }
        if (this.v == this.Extended) { return "Extended"; }
        if (this.v == this.High) { return "High"; }
        return "";
    }
}
export class tt_H264Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.GovLength = new xsd_int_(); // xsd_int_ GovLength{};
        this.H264Profile = new tt_H264Profile(); // tt_H264Profile H264Profile{};
    }

    write(obj, w){
        w.write(obj, "tt", "GovLength", this.GovLength);
        w.write(obj, "tt", "H264Profile", this.H264Profile);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "GovLength", this.GovLength)) return false;
        if (!r.read(obj, "tt", "H264Profile", this.H264Profile)) return false;
        return true;
    }
}
export class tt_MulticastConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Address = new tt_IPAddress(); // tt_IPAddress Address{};
        this.Port = new xsd_int_(); // xsd_int_ Port{};
        this.TTL = new xsd_int_(); // xsd_int_ TTL{};
        this.AutoStart = new xsd_boolean(); // xsd_boolean AutoStart{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Address", this.Address);
        w.write(obj, "tt", "Port", this.Port);
        w.write(obj, "tt", "TTL", this.TTL);
        w.write(obj, "tt", "AutoStart", this.AutoStart);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Address", this.Address)) return false;
        if (!r.read(obj, "tt", "Port", this.Port)) return false;
        if (!r.read(obj, "tt", "TTL", this.TTL)) return false;
        if (!r.read(obj, "tt", "AutoStart", this.AutoStart)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoEncoderConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.Encoding = new tt_VideoEncoding(); // tt_VideoEncoding Encoding{};
        this.Resolution = new tt_VideoResolution(); // tt_VideoResolution Resolution{};
        this.Quality = new xsd_float_(); // xsd_float_ Quality{};
        this.RateControl = new tt_VideoRateControl(); this.RateControl['isP'] = true; // tt_VideoRateControl* RateControl{};
        this.MPEG4 = new tt_Mpeg4Configuration(); this.MPEG4['isP'] = true; // tt_Mpeg4Configuration* MPEG4{};
        this.H264 = new tt_H264Configuration(); this.H264['isP'] = true; // tt_H264Configuration* H264{};
        this.Multicast = new tt_MulticastConfiguration(); // tt_MulticastConfiguration Multicast{};
        this.SessionTimeout = new xsd_duration(); // xsd_duration SessionTimeout{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "Resolution", this.Resolution);
        w.write(obj, "tt", "Quality", this.Quality);
        w.write(obj, "tt", "RateControl", this.RateControl);
        w.write(obj, "tt", "MPEG4", this.MPEG4);
        w.write(obj, "tt", "H264", this.H264);
        w.write(obj, "tt", "Multicast", this.Multicast);
        w.write(obj, "tt", "SessionTimeout", this.SessionTimeout);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "Resolution", this.Resolution)) return false;
        if (!r.read(obj, "tt", "Quality", this.Quality)) return false;
        if (!r.read(obj, "tt", "RateControl", this.RateControl)) return false;
        if (!r.read(obj, "tt", "MPEG4", this.MPEG4)) return false;
        if (!r.read(obj, "tt", "H264", this.H264)) return false;
        if (!r.read(obj, "tt", "Multicast", this.Multicast)) return false;
        if (!r.read(obj, "tt", "SessionTimeout", this.SessionTimeout)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioEncoding extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.G711= 0;
        this.G726= 1;
        this.AAC= 2;
    }

    parse(parser, s){
        if (s == "G711") { this.v = this.G711; return true; }
        if (s == "G726") { this.v = this.G726; return true; }
        if (s == "AAC") { this.v = this.AAC; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.G711) { return "G711"; }
        if (this.v == this.G726) { return "G726"; }
        if (this.v == this.AAC) { return "AAC"; }
        return "";
    }
}
export class tt_AudioEncoderConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.Encoding = new tt_AudioEncoding(); // tt_AudioEncoding Encoding{};
        this.Bitrate = new xsd_int_(); // xsd_int_ Bitrate{};
        this.SampleRate = new xsd_int_(); // xsd_int_ SampleRate{};
        this.Multicast = new tt_MulticastConfiguration(); // tt_MulticastConfiguration Multicast{};
        this.SessionTimeout = new xsd_duration(); // xsd_duration SessionTimeout{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "Bitrate", this.Bitrate);
        w.write(obj, "tt", "SampleRate", this.SampleRate);
        w.write(obj, "tt", "Multicast", this.Multicast);
        w.write(obj, "tt", "SessionTimeout", this.SessionTimeout);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "Bitrate", this.Bitrate)) return false;
        if (!r.read(obj, "tt", "SampleRate", this.SampleRate)) return false;
        if (!r.read(obj, "tt", "Multicast", this.Multicast)) return false;
        if (!r.read(obj, "tt", "SessionTimeout", this.SessionTimeout)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SimpleItem_0 extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Value = new xsd_anySimpleType(); // xsd_anySimpleType Value{};
    }

    write(obj, w){
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "Value", this.Value);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "Value", this.Value)) return false;
        return true;
    }
}
export class tt_ElementItem_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Name = new xsd_string(); // xsd_string Name{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Name", this.Name);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        return true;
    }
}
export class tt_ItemListExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ItemList extends types.xsd_type
{
    constructor(){
        super();
        this.SimpleItem = new types.xsd_list(tt_SimpleItem_0); // xsd_list<tt_SimpleItem_0> SimpleItem{};
        this.ElementItem = new types.xsd_list(tt_ElementItem_0); // xsd_list<tt_ElementItem_0> ElementItem{};
        this.Extension = new tt_ItemListExtension(); this.Extension['isP'] = true; // tt_ItemListExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "SimpleItem", this.SimpleItem);
        w.write(obj, "tt", "ElementItem", this.ElementItem);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "SimpleItem", this.SimpleItem)) return false;
        if (!r.read(obj, "tt", "ElementItem", this.ElementItem)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Config extends types.xsd_type
{
    constructor(){
        super();
        this.Parameters = new tt_ItemList(); // tt_ItemList Parameters{};
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Type = new xsd_QName(); // xsd_QName Type{};
    }

    write(obj, w){
        w.write(obj, "tt", "Parameters", this.Parameters);
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "Type", this.Type);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Parameters", this.Parameters)) return false;
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        return true;
    }
}
export class tt_AnalyticsEngineConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_AnalyticsEngineConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.AnalyticsModule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> AnalyticsModule{};
        this.Extension = new tt_AnalyticsEngineConfigurationExtension(); this.Extension['isP'] = true; // tt_AnalyticsEngineConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AnalyticsModule", this.AnalyticsModule);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AnalyticsModule", this.AnalyticsModule)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_RuleEngineConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_RuleEngineConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Rule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> Rule{};
        this.Extension = new tt_RuleEngineConfigurationExtension(); this.Extension['isP'] = true; // tt_RuleEngineConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Rule", this.Rule);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Rule", this.Rule)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoAnalyticsConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.AnalyticsEngineConfiguration = new tt_AnalyticsEngineConfiguration(); // tt_AnalyticsEngineConfiguration AnalyticsEngineConfiguration{};
        this.RuleEngineConfiguration = new tt_RuleEngineConfiguration(); // tt_RuleEngineConfiguration RuleEngineConfiguration{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "AnalyticsEngineConfiguration", this.AnalyticsEngineConfiguration);
        w.write(obj, "tt", "RuleEngineConfiguration", this.RuleEngineConfiguration);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "AnalyticsEngineConfiguration", this.AnalyticsEngineConfiguration)) return false;
        if (!r.read(obj, "tt", "RuleEngineConfiguration", this.RuleEngineConfiguration)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Vector2D extends types.xsd_type
{
    constructor(){
        super();
        this.x = new xsd_float_(); // xsd_float_ x{};
        this.y = new xsd_float_(); // xsd_float_ y{};
        this.space = new xsd_anyURI(); this.space['isP'] = true; // xsd_anyURI* space{};
    }

    write(obj, w){
        w.write_attribute(obj, "x", this.x);
        w.write_attribute(obj, "y", this.y);
        w.write_attribute(obj, "space", this.space);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "x", this.x)) return false;
        if (!r.read_attribute(obj, "y", this.y)) return false;
        if (!r.read_attribute(obj, "space", this.space)) return false;
        return true;
    }
}
export class tt_Vector1D extends types.xsd_type
{
    constructor(){
        super();
        this.x = new xsd_float_(); // xsd_float_ x{};
        this.space = new xsd_anyURI(); this.space['isP'] = true; // xsd_anyURI* space{};
    }

    write(obj, w){
        w.write_attribute(obj, "x", this.x);
        w.write_attribute(obj, "space", this.space);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "x", this.x)) return false;
        if (!r.read_attribute(obj, "space", this.space)) return false;
        return true;
    }
}
export class tt_PTZSpeed extends types.xsd_type
{
    constructor(){
        super();
        this.PanTilt = new tt_Vector2D(); this.PanTilt['isP'] = true; // tt_Vector2D* PanTilt{};
        this.Zoom = new tt_Vector1D(); this.Zoom['isP'] = true; // tt_Vector1D* Zoom{};
    }

    write(obj, w){
        w.write(obj, "tt", "PanTilt", this.PanTilt);
        w.write(obj, "tt", "Zoom", this.Zoom);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PanTilt", this.PanTilt)) return false;
        if (!r.read(obj, "tt", "Zoom", this.Zoom)) return false;
        return true;
    }
}
export class tt_Space2DDescription extends types.xsd_type
{
    constructor(){
        super();
        this.URI = new xsd_anyURI(); // xsd_anyURI URI{};
        this.XRange = new tt_FloatRange(); // tt_FloatRange XRange{};
        this.YRange = new tt_FloatRange(); // tt_FloatRange YRange{};
    }

    write(obj, w){
        w.write(obj, "tt", "URI", this.URI);
        w.write(obj, "tt", "XRange", this.XRange);
        w.write(obj, "tt", "YRange", this.YRange);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "URI", this.URI)) return false;
        if (!r.read(obj, "tt", "XRange", this.XRange)) return false;
        if (!r.read(obj, "tt", "YRange", this.YRange)) return false;
        return true;
    }
}
export class tt_PanTiltLimits extends types.xsd_type
{
    constructor(){
        super();
        this.Range = new tt_Space2DDescription(); // tt_Space2DDescription Range{};
    }

    write(obj, w){
        w.write(obj, "tt", "Range", this.Range);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Range", this.Range)) return false;
        return true;
    }
}
export class tt_Space1DDescription extends types.xsd_type
{
    constructor(){
        super();
        this.URI = new xsd_anyURI(); // xsd_anyURI URI{};
        this.XRange = new tt_FloatRange(); // tt_FloatRange XRange{};
    }

    write(obj, w){
        w.write(obj, "tt", "URI", this.URI);
        w.write(obj, "tt", "XRange", this.XRange);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "URI", this.URI)) return false;
        if (!r.read(obj, "tt", "XRange", this.XRange)) return false;
        return true;
    }
}
export class tt_ZoomLimits extends types.xsd_type
{
    constructor(){
        super();
        this.Range = new tt_Space1DDescription(); // tt_Space1DDescription Range{};
    }

    write(obj, w){
        w.write(obj, "tt", "Range", this.Range);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Range", this.Range)) return false;
        return true;
    }
}
export class tt_EFlipMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.OFF= 0;
        this.ON= 1;
        this.Extended= 2;
    }

    parse(parser, s){
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "ON") { this.v = this.ON; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.ON) { return "ON"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_EFlip extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_EFlipMode(); // tt_EFlipMode Mode{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ReverseMode extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.OFF= 0;
        this.ON= 1;
        this.AUTO= 2;
        this.Extended= 3;
    }

    parse(parser, s){
        if (s == "OFF") { this.v = this.OFF; return true; }
        if (s == "ON") { this.v = this.ON; return true; }
        if (s == "AUTO") { this.v = this.AUTO; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.OFF) { return "OFF"; }
        if (this.v == this.ON) { return "ON"; }
        if (this.v == this.AUTO) { return "AUTO"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_Reverse extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new tt_ReverseMode(); // tt_ReverseMode Mode{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTControlDirectionExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTControlDirection extends types.xsd_type
{
    constructor(){
        super();
        this.EFlip = new tt_EFlip(); this.EFlip['isP'] = true; // tt_EFlip* EFlip{};
        this.Reverse = new tt_Reverse(); this.Reverse['isP'] = true; // tt_Reverse* Reverse{};
        this.Extension = new tt_PTControlDirectionExtension(); this.Extension['isP'] = true; // tt_PTControlDirectionExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "EFlip", this.EFlip);
        w.write(obj, "tt", "Reverse", this.Reverse);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "EFlip", this.EFlip)) return false;
        if (!r.read(obj, "tt", "Reverse", this.Reverse)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZConfigurationExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.PTControlDirection = new tt_PTControlDirection(); this.PTControlDirection['isP'] = true; // tt_PTControlDirection* PTControlDirection{};
        this.Extension = new tt_PTZConfigurationExtension2(); this.Extension['isP'] = true; // tt_PTZConfigurationExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "PTControlDirection", this.PTControlDirection);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "PTControlDirection", this.PTControlDirection)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_PTZConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.NodeToken = new tt_ReferenceToken(); // tt_ReferenceToken NodeToken{};
        this.DefaultAbsolutePantTiltPositionSpace = new xsd_anyURI(); this.DefaultAbsolutePantTiltPositionSpace['isP'] = true; // xsd_anyURI* DefaultAbsolutePantTiltPositionSpace{};
        this.DefaultAbsoluteZoomPositionSpace = new xsd_anyURI(); this.DefaultAbsoluteZoomPositionSpace['isP'] = true; // xsd_anyURI* DefaultAbsoluteZoomPositionSpace{};
        this.DefaultRelativePanTiltTranslationSpace = new xsd_anyURI(); this.DefaultRelativePanTiltTranslationSpace['isP'] = true; // xsd_anyURI* DefaultRelativePanTiltTranslationSpace{};
        this.DefaultRelativeZoomTranslationSpace = new xsd_anyURI(); this.DefaultRelativeZoomTranslationSpace['isP'] = true; // xsd_anyURI* DefaultRelativeZoomTranslationSpace{};
        this.DefaultContinuousPanTiltVelocitySpace = new xsd_anyURI(); this.DefaultContinuousPanTiltVelocitySpace['isP'] = true; // xsd_anyURI* DefaultContinuousPanTiltVelocitySpace{};
        this.DefaultContinuousZoomVelocitySpace = new xsd_anyURI(); this.DefaultContinuousZoomVelocitySpace['isP'] = true; // xsd_anyURI* DefaultContinuousZoomVelocitySpace{};
        this.DefaultPTZSpeed = new tt_PTZSpeed(); this.DefaultPTZSpeed['isP'] = true; // tt_PTZSpeed* DefaultPTZSpeed{};
        this.DefaultPTZTimeout = new xsd_duration(); this.DefaultPTZTimeout['isP'] = true; // xsd_duration* DefaultPTZTimeout{};
        this.PanTiltLimits = new tt_PanTiltLimits(); this.PanTiltLimits['isP'] = true; // tt_PanTiltLimits* PanTiltLimits{};
        this.ZoomLimits = new tt_ZoomLimits(); this.ZoomLimits['isP'] = true; // tt_ZoomLimits* ZoomLimits{};
        this.Extension = new tt_PTZConfigurationExtension(); this.Extension['isP'] = true; // tt_PTZConfigurationExtension* Extension{};
        this.MoveRamp = new xsd_int_(); this.MoveRamp['isP'] = true; // xsd_int_* MoveRamp{};
        this.PresetRamp = new xsd_int_(); this.PresetRamp['isP'] = true; // xsd_int_* PresetRamp{};
        this.PresetTourRamp = new xsd_int_(); this.PresetTourRamp['isP'] = true; // xsd_int_* PresetTourRamp{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "NodeToken", this.NodeToken);
        w.write(obj, "tt", "DefaultAbsolutePantTiltPositionSpace", this.DefaultAbsolutePantTiltPositionSpace);
        w.write(obj, "tt", "DefaultAbsoluteZoomPositionSpace", this.DefaultAbsoluteZoomPositionSpace);
        w.write(obj, "tt", "DefaultRelativePanTiltTranslationSpace", this.DefaultRelativePanTiltTranslationSpace);
        w.write(obj, "tt", "DefaultRelativeZoomTranslationSpace", this.DefaultRelativeZoomTranslationSpace);
        w.write(obj, "tt", "DefaultContinuousPanTiltVelocitySpace", this.DefaultContinuousPanTiltVelocitySpace);
        w.write(obj, "tt", "DefaultContinuousZoomVelocitySpace", this.DefaultContinuousZoomVelocitySpace);
        w.write(obj, "tt", "DefaultPTZSpeed", this.DefaultPTZSpeed);
        w.write(obj, "tt", "DefaultPTZTimeout", this.DefaultPTZTimeout);
        w.write(obj, "tt", "PanTiltLimits", this.PanTiltLimits);
        w.write(obj, "tt", "ZoomLimits", this.ZoomLimits);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "MoveRamp", this.MoveRamp);
        w.write_attribute(obj, "PresetRamp", this.PresetRamp);
        w.write_attribute(obj, "PresetTourRamp", this.PresetTourRamp);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "NodeToken", this.NodeToken)) return false;
        if (!r.read(obj, "tt", "DefaultAbsolutePantTiltPositionSpace", this.DefaultAbsolutePantTiltPositionSpace)) return false;
        if (!r.read(obj, "tt", "DefaultAbsoluteZoomPositionSpace", this.DefaultAbsoluteZoomPositionSpace)) return false;
        if (!r.read(obj, "tt", "DefaultRelativePanTiltTranslationSpace", this.DefaultRelativePanTiltTranslationSpace)) return false;
        if (!r.read(obj, "tt", "DefaultRelativeZoomTranslationSpace", this.DefaultRelativeZoomTranslationSpace)) return false;
        if (!r.read(obj, "tt", "DefaultContinuousPanTiltVelocitySpace", this.DefaultContinuousPanTiltVelocitySpace)) return false;
        if (!r.read(obj, "tt", "DefaultContinuousZoomVelocitySpace", this.DefaultContinuousZoomVelocitySpace)) return false;
        if (!r.read(obj, "tt", "DefaultPTZSpeed", this.DefaultPTZSpeed)) return false;
        if (!r.read(obj, "tt", "DefaultPTZTimeout", this.DefaultPTZTimeout)) return false;
        if (!r.read(obj, "tt", "PanTiltLimits", this.PanTiltLimits)) return false;
        if (!r.read(obj, "tt", "ZoomLimits", this.ZoomLimits)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "MoveRamp", this.MoveRamp)) return false;
        if (!r.read_attribute(obj, "PresetRamp", this.PresetRamp)) return false;
        if (!r.read_attribute(obj, "PresetTourRamp", this.PresetTourRamp)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZFilter extends types.xsd_type
{
    constructor(){
        super();
        this.Status = new xsd_boolean(); // xsd_boolean Status{};
        this.Position = new xsd_boolean(); // xsd_boolean Position{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Status", this.Status);
        w.write(obj, "tt", "Position", this.Position);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Status", this.Status)) return false;
        if (!r.read(obj, "tt", "Position", this.Position)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SubscriptionPolicy_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_EventSubscription extends types.xsd_type
{
    constructor(){
        super();
        this.Filter = new wsnt_FilterType(); this.Filter['isP'] = true; // wsnt_FilterType* Filter{};
        this.SubscriptionPolicy = new tt_SubscriptionPolicy_0(); this.SubscriptionPolicy['isP'] = true; // tt_SubscriptionPolicy_0* SubscriptionPolicy{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Filter", this.Filter);
        w.write(obj, "tt", "SubscriptionPolicy", this.SubscriptionPolicy);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Filter", this.Filter)) return false;
        if (!r.read(obj, "tt", "SubscriptionPolicy", this.SubscriptionPolicy)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MetadataConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_MetadataConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.PTZStatus = new tt_PTZFilter(); this.PTZStatus['isP'] = true; // tt_PTZFilter* PTZStatus{};
        this.Events = new tt_EventSubscription(); this.Events['isP'] = true; // tt_EventSubscription* Events{};
        this.Analytics = new xsd_boolean(); this.Analytics['isP'] = true; // xsd_boolean* Analytics{};
        this.Multicast = new tt_MulticastConfiguration(); // tt_MulticastConfiguration Multicast{};
        this.SessionTimeout = new xsd_duration(); // xsd_duration SessionTimeout{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.AnalyticsEngineConfiguration = new tt_AnalyticsEngineConfiguration(); this.AnalyticsEngineConfiguration['isP'] = true; // tt_AnalyticsEngineConfiguration* AnalyticsEngineConfiguration{};
        this.Extension = new tt_MetadataConfigurationExtension(); this.Extension['isP'] = true; // tt_MetadataConfigurationExtension* Extension{};
        this.CompressionType = new xsd_string(); this.CompressionType['isP'] = true; // xsd_string* CompressionType{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "PTZStatus", this.PTZStatus);
        w.write(obj, "tt", "Events", this.Events);
        w.write(obj, "tt", "Analytics", this.Analytics);
        w.write(obj, "tt", "Multicast", this.Multicast);
        w.write(obj, "tt", "SessionTimeout", this.SessionTimeout);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "AnalyticsEngineConfiguration", this.AnalyticsEngineConfiguration);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "CompressionType", this.CompressionType);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "PTZStatus", this.PTZStatus)) return false;
        if (!r.read(obj, "tt", "Events", this.Events)) return false;
        if (!r.read(obj, "tt", "Analytics", this.Analytics)) return false;
        if (!r.read(obj, "tt", "Multicast", this.Multicast)) return false;
        if (!r.read(obj, "tt", "SessionTimeout", this.SessionTimeout)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "AnalyticsEngineConfiguration", this.AnalyticsEngineConfiguration)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "CompressionType", this.CompressionType)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioOutputConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.OutputToken = new tt_ReferenceToken(); // tt_ReferenceToken OutputToken{};
        this.SendPrimacy = new xsd_anyURI(); this.SendPrimacy['isP'] = true; // xsd_anyURI* SendPrimacy{};
        this.OutputLevel = new xsd_int_(); // xsd_int_ OutputLevel{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "OutputToken", this.OutputToken);
        w.write(obj, "tt", "SendPrimacy", this.SendPrimacy);
        w.write(obj, "tt", "OutputLevel", this.OutputLevel);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "OutputToken", this.OutputToken)) return false;
        if (!r.read(obj, "tt", "SendPrimacy", this.SendPrimacy)) return false;
        if (!r.read(obj, "tt", "OutputLevel", this.OutputLevel)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioDecoderConfiguration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ProfileExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ProfileExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.AudioOutputConfiguration = new tt_AudioOutputConfiguration(); this.AudioOutputConfiguration['isP'] = true; // tt_AudioOutputConfiguration* AudioOutputConfiguration{};
        this.AudioDecoderConfiguration = new tt_AudioDecoderConfiguration(); this.AudioDecoderConfiguration['isP'] = true; // tt_AudioDecoderConfiguration* AudioDecoderConfiguration{};
        this.Extension = new tt_ProfileExtension2(); this.Extension['isP'] = true; // tt_ProfileExtension2* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "AudioOutputConfiguration", this.AudioOutputConfiguration);
        w.write(obj, "tt", "AudioDecoderConfiguration", this.AudioDecoderConfiguration);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "AudioOutputConfiguration", this.AudioOutputConfiguration)) return false;
        if (!r.read(obj, "tt", "AudioDecoderConfiguration", this.AudioDecoderConfiguration)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Profile extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.VideoSourceConfiguration = new tt_VideoSourceConfiguration(); this.VideoSourceConfiguration['isP'] = true; // tt_VideoSourceConfiguration* VideoSourceConfiguration{};
        this.AudioSourceConfiguration = new tt_AudioSourceConfiguration(); this.AudioSourceConfiguration['isP'] = true; // tt_AudioSourceConfiguration* AudioSourceConfiguration{};
        this.VideoEncoderConfiguration = new tt_VideoEncoderConfiguration(); this.VideoEncoderConfiguration['isP'] = true; // tt_VideoEncoderConfiguration* VideoEncoderConfiguration{};
        this.AudioEncoderConfiguration = new tt_AudioEncoderConfiguration(); this.AudioEncoderConfiguration['isP'] = true; // tt_AudioEncoderConfiguration* AudioEncoderConfiguration{};
        this.VideoAnalyticsConfiguration = new tt_VideoAnalyticsConfiguration(); this.VideoAnalyticsConfiguration['isP'] = true; // tt_VideoAnalyticsConfiguration* VideoAnalyticsConfiguration{};
        this.PTZConfiguration = new tt_PTZConfiguration(); this.PTZConfiguration['isP'] = true; // tt_PTZConfiguration* PTZConfiguration{};
        this.MetadataConfiguration = new tt_MetadataConfiguration(); this.MetadataConfiguration['isP'] = true; // tt_MetadataConfiguration* MetadataConfiguration{};
        this.Extension = new tt_ProfileExtension(); this.Extension['isP'] = true; // tt_ProfileExtension* Extension{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
        this.fixed = new xsd_boolean(); this.fixed['isP'] = true; // xsd_boolean* fixed{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "VideoSourceConfiguration", this.VideoSourceConfiguration);
        w.write(obj, "tt", "AudioSourceConfiguration", this.AudioSourceConfiguration);
        w.write(obj, "tt", "VideoEncoderConfiguration", this.VideoEncoderConfiguration);
        w.write(obj, "tt", "AudioEncoderConfiguration", this.AudioEncoderConfiguration);
        w.write(obj, "tt", "VideoAnalyticsConfiguration", this.VideoAnalyticsConfiguration);
        w.write(obj, "tt", "PTZConfiguration", this.PTZConfiguration);
        w.write(obj, "tt", "MetadataConfiguration", this.MetadataConfiguration);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "fixed", this.fixed);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "VideoSourceConfiguration", this.VideoSourceConfiguration)) return false;
        if (!r.read(obj, "tt", "AudioSourceConfiguration", this.AudioSourceConfiguration)) return false;
        if (!r.read(obj, "tt", "VideoEncoderConfiguration", this.VideoEncoderConfiguration)) return false;
        if (!r.read(obj, "tt", "AudioEncoderConfiguration", this.AudioEncoderConfiguration)) return false;
        if (!r.read(obj, "tt", "VideoAnalyticsConfiguration", this.VideoAnalyticsConfiguration)) return false;
        if (!r.read(obj, "tt", "PTZConfiguration", this.PTZConfiguration)) return false;
        if (!r.read(obj, "tt", "MetadataConfiguration", this.MetadataConfiguration)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "fixed", this.fixed)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_IntRange extends types.xsd_type
{
    constructor(){
        super();
        this.Min = new xsd_int_(); // xsd_int_ Min{};
        this.Max = new xsd_int_(); // xsd_int_ Max{};
    }

    write(obj, w){
        w.write(obj, "tt", "Min", this.Min);
        w.write(obj, "tt", "Max", this.Max);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Min", this.Min)) return false;
        if (!r.read(obj, "tt", "Max", this.Max)) return false;
        return true;
    }
}
export class tt_IntRectangleRange extends types.xsd_type
{
    constructor(){
        super();
        this.XRange = new tt_IntRange(); // tt_IntRange XRange{};
        this.YRange = new tt_IntRange(); // tt_IntRange YRange{};
        this.WidthRange = new tt_IntRange(); // tt_IntRange WidthRange{};
        this.HeightRange = new tt_IntRange(); // tt_IntRange HeightRange{};
    }

    write(obj, w){
        w.write(obj, "tt", "XRange", this.XRange);
        w.write(obj, "tt", "YRange", this.YRange);
        w.write(obj, "tt", "WidthRange", this.WidthRange);
        w.write(obj, "tt", "HeightRange", this.HeightRange);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "XRange", this.XRange)) return false;
        if (!r.read(obj, "tt", "YRange", this.YRange)) return false;
        if (!r.read(obj, "tt", "WidthRange", this.WidthRange)) return false;
        if (!r.read(obj, "tt", "HeightRange", this.HeightRange)) return false;
        return true;
    }
}
export class tt_IntList extends types.xsd_type
{
    constructor(){
        super();
        this.Items = new types.xsd_list(xsd_int_); // xsd_list<xsd_int_> Items{};
    }

    write(obj, w){
        w.write(obj, "tt", "Items", this.Items);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Items", this.Items)) return false;
        return true;
    }
}
export class tt_RotateOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_RotateOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_RotateMode); // xsd_list<tt_RotateMode> Mode{};
        this.DegreeList = new tt_IntList(); this.DegreeList['isP'] = true; // tt_IntList* DegreeList{};
        this.Extension = new tt_RotateOptionsExtension(); this.Extension['isP'] = true; // tt_RotateOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "DegreeList", this.DegreeList);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "DegreeList", this.DegreeList)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoSourceConfigurationOptionsExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_VideoSourceConfigurationOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Rotate = new tt_RotateOptions(); this.Rotate['isP'] = true; // tt_RotateOptions* Rotate{};
        this.Extension = new tt_VideoSourceConfigurationOptionsExtension2(); this.Extension['isP'] = true; // tt_VideoSourceConfigurationOptionsExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Rotate", this.Rotate);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Rotate", this.Rotate)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_VideoSourceConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.BoundsRange = new tt_IntRectangleRange(); // tt_IntRectangleRange BoundsRange{};
        this.VideoSourceTokensAvailable = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> VideoSourceTokensAvailable{};
        this.Extension = new tt_VideoSourceConfigurationOptionsExtension(); this.Extension['isP'] = true; // tt_VideoSourceConfigurationOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "BoundsRange", this.BoundsRange);
        w.write(obj, "tt", "VideoSourceTokensAvailable", this.VideoSourceTokensAvailable);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "BoundsRange", this.BoundsRange)) return false;
        if (!r.read(obj, "tt", "VideoSourceTokensAvailable", this.VideoSourceTokensAvailable)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_JpegOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ResolutionsAvailable = new types.xsd_list(tt_VideoResolution); // xsd_list<tt_VideoResolution> ResolutionsAvailable{};
        this.FrameRateRange = new tt_IntRange(); // tt_IntRange FrameRateRange{};
        this.EncodingIntervalRange = new tt_IntRange(); // tt_IntRange EncodingIntervalRange{};
    }

    write(obj, w){
        w.write(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable);
        w.write(obj, "tt", "FrameRateRange", this.FrameRateRange);
        w.write(obj, "tt", "EncodingIntervalRange", this.EncodingIntervalRange);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable)) return false;
        if (!r.read(obj, "tt", "FrameRateRange", this.FrameRateRange)) return false;
        if (!r.read(obj, "tt", "EncodingIntervalRange", this.EncodingIntervalRange)) return false;
        return true;
    }
}
export class tt_Mpeg4Options extends types.xsd_type
{
    constructor(){
        super();
        this.ResolutionsAvailable = new types.xsd_list(tt_VideoResolution); // xsd_list<tt_VideoResolution> ResolutionsAvailable{};
        this.GovLengthRange = new tt_IntRange(); // tt_IntRange GovLengthRange{};
        this.FrameRateRange = new tt_IntRange(); // tt_IntRange FrameRateRange{};
        this.EncodingIntervalRange = new tt_IntRange(); // tt_IntRange EncodingIntervalRange{};
        this.Mpeg4ProfilesSupported = new types.xsd_list(tt_Mpeg4Profile); // xsd_list<tt_Mpeg4Profile> Mpeg4ProfilesSupported{};
    }

    write(obj, w){
        w.write(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable);
        w.write(obj, "tt", "GovLengthRange", this.GovLengthRange);
        w.write(obj, "tt", "FrameRateRange", this.FrameRateRange);
        w.write(obj, "tt", "EncodingIntervalRange", this.EncodingIntervalRange);
        w.write(obj, "tt", "Mpeg4ProfilesSupported", this.Mpeg4ProfilesSupported);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable)) return false;
        if (!r.read(obj, "tt", "GovLengthRange", this.GovLengthRange)) return false;
        if (!r.read(obj, "tt", "FrameRateRange", this.FrameRateRange)) return false;
        if (!r.read(obj, "tt", "EncodingIntervalRange", this.EncodingIntervalRange)) return false;
        if (!r.read(obj, "tt", "Mpeg4ProfilesSupported", this.Mpeg4ProfilesSupported)) return false;
        return true;
    }
}
export class tt_H264Options extends types.xsd_type
{
    constructor(){
        super();
        this.ResolutionsAvailable = new types.xsd_list(tt_VideoResolution); // xsd_list<tt_VideoResolution> ResolutionsAvailable{};
        this.GovLengthRange = new tt_IntRange(); // tt_IntRange GovLengthRange{};
        this.FrameRateRange = new tt_IntRange(); // tt_IntRange FrameRateRange{};
        this.EncodingIntervalRange = new tt_IntRange(); // tt_IntRange EncodingIntervalRange{};
        this.H264ProfilesSupported = new types.xsd_list(tt_H264Profile); // xsd_list<tt_H264Profile> H264ProfilesSupported{};
    }

    write(obj, w){
        w.write(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable);
        w.write(obj, "tt", "GovLengthRange", this.GovLengthRange);
        w.write(obj, "tt", "FrameRateRange", this.FrameRateRange);
        w.write(obj, "tt", "EncodingIntervalRange", this.EncodingIntervalRange);
        w.write(obj, "tt", "H264ProfilesSupported", this.H264ProfilesSupported);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable)) return false;
        if (!r.read(obj, "tt", "GovLengthRange", this.GovLengthRange)) return false;
        if (!r.read(obj, "tt", "FrameRateRange", this.FrameRateRange)) return false;
        if (!r.read(obj, "tt", "EncodingIntervalRange", this.EncodingIntervalRange)) return false;
        if (!r.read(obj, "tt", "H264ProfilesSupported", this.H264ProfilesSupported)) return false;
        return true;
    }
}
export class tt_JpegOptions2 extends tt_JpegOptions
{
    constructor(){
        super();
        this.BitrateRange = new tt_IntRange(); // tt_IntRange BitrateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_JpegOptions.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "BitrateRange", this.BitrateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_JpegOptions.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "BitrateRange", this.BitrateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Mpeg4Options2 extends tt_Mpeg4Options
{
    constructor(){
        super();
        this.BitrateRange = new tt_IntRange(); // tt_IntRange BitrateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_Mpeg4Options.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "BitrateRange", this.BitrateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_Mpeg4Options.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "BitrateRange", this.BitrateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_H264Options2 extends tt_H264Options
{
    constructor(){
        super();
        this.BitrateRange = new tt_IntRange(); // tt_IntRange BitrateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_H264Options.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "BitrateRange", this.BitrateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_H264Options.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "BitrateRange", this.BitrateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoEncoderOptionsExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_VideoEncoderOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.JPEG = new tt_JpegOptions2(); this.JPEG['isP'] = true; // tt_JpegOptions2* JPEG{};
        this.MPEG4 = new tt_Mpeg4Options2(); this.MPEG4['isP'] = true; // tt_Mpeg4Options2* MPEG4{};
        this.H264 = new tt_H264Options2(); this.H264['isP'] = true; // tt_H264Options2* H264{};
        this.Extension = new tt_VideoEncoderOptionsExtension2(); this.Extension['isP'] = true; // tt_VideoEncoderOptionsExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "JPEG", this.JPEG);
        w.write(obj, "tt", "MPEG4", this.MPEG4);
        w.write(obj, "tt", "H264", this.H264);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "JPEG", this.JPEG)) return false;
        if (!r.read(obj, "tt", "MPEG4", this.MPEG4)) return false;
        if (!r.read(obj, "tt", "H264", this.H264)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_VideoEncoderConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.QualityRange = new tt_FloatRange(); // tt_FloatRange QualityRange{};
        this.JPEG = new tt_JpegOptions(); this.JPEG['isP'] = true; // tt_JpegOptions* JPEG{};
        this.MPEG4 = new tt_Mpeg4Options(); this.MPEG4['isP'] = true; // tt_Mpeg4Options* MPEG4{};
        this.H264 = new tt_H264Options(); this.H264['isP'] = true; // tt_H264Options* H264{};
        this.Extension = new tt_VideoEncoderOptionsExtension(); this.Extension['isP'] = true; // tt_VideoEncoderOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "QualityRange", this.QualityRange);
        w.write(obj, "tt", "JPEG", this.JPEG);
        w.write(obj, "tt", "MPEG4", this.MPEG4);
        w.write(obj, "tt", "H264", this.H264);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "QualityRange", this.QualityRange)) return false;
        if (!r.read(obj, "tt", "JPEG", this.JPEG)) return false;
        if (!r.read(obj, "tt", "MPEG4", this.MPEG4)) return false;
        if (!r.read(obj, "tt", "H264", this.H264)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioSourceOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_AudioSourceConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.InputTokensAvailable = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> InputTokensAvailable{};
        this.Extension = new tt_AudioSourceOptionsExtension(); this.Extension['isP'] = true; // tt_AudioSourceOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "InputTokensAvailable", this.InputTokensAvailable);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "InputTokensAvailable", this.InputTokensAvailable)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioEncoderConfigurationOption extends types.xsd_type
{
    constructor(){
        super();
        this.Encoding = new tt_AudioEncoding(); // tt_AudioEncoding Encoding{};
        this.BitrateList = new tt_IntList(); // tt_IntList BitrateList{};
        this.SampleRateList = new tt_IntList(); // tt_IntList SampleRateList{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "BitrateList", this.BitrateList);
        w.write(obj, "tt", "SampleRateList", this.SampleRateList);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "BitrateList", this.BitrateList)) return false;
        if (!r.read(obj, "tt", "SampleRateList", this.SampleRateList)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioEncoderConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new types.xsd_list(tt_AudioEncoderConfigurationOption); // xsd_list<tt_AudioEncoderConfigurationOption> Options{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Options", this.Options);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Options", this.Options)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZStatusFilterOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZStatusFilterOptions extends types.xsd_type
{
    constructor(){
        super();
        this.PanTiltStatusSupported = new xsd_boolean(); // xsd_boolean PanTiltStatusSupported{};
        this.ZoomStatusSupported = new xsd_boolean(); // xsd_boolean ZoomStatusSupported{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.PanTiltPositionSupported = new xsd_boolean(); this.PanTiltPositionSupported['isP'] = true; // xsd_boolean* PanTiltPositionSupported{};
        this.ZoomPositionSupported = new xsd_boolean(); this.ZoomPositionSupported['isP'] = true; // xsd_boolean* ZoomPositionSupported{};
        this.Extension = new tt_PTZStatusFilterOptionsExtension(); this.Extension['isP'] = true; // tt_PTZStatusFilterOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "PanTiltStatusSupported", this.PanTiltStatusSupported);
        w.write(obj, "tt", "ZoomStatusSupported", this.ZoomStatusSupported);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "PanTiltPositionSupported", this.PanTiltPositionSupported);
        w.write(obj, "tt", "ZoomPositionSupported", this.ZoomPositionSupported);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PanTiltStatusSupported", this.PanTiltStatusSupported)) return false;
        if (!r.read(obj, "tt", "ZoomStatusSupported", this.ZoomStatusSupported)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "PanTiltPositionSupported", this.PanTiltPositionSupported)) return false;
        if (!r.read(obj, "tt", "ZoomPositionSupported", this.ZoomPositionSupported)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MetadataConfigurationOptionsExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_MetadataConfigurationOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.CompressionType = new types.xsd_list(xsd_string); // xsd_list<xsd_string> CompressionType{};
        this.Extension = new tt_MetadataConfigurationOptionsExtension2(); this.Extension['isP'] = true; // tt_MetadataConfigurationOptionsExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, "tt", "CompressionType", this.CompressionType);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "CompressionType", this.CompressionType)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_MetadataConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.PTZStatusFilterOptions = new tt_PTZStatusFilterOptions(); // tt_PTZStatusFilterOptions PTZStatusFilterOptions{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Extension = new tt_MetadataConfigurationOptionsExtension(); this.Extension['isP'] = true; // tt_MetadataConfigurationOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "PTZStatusFilterOptions", this.PTZStatusFilterOptions);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PTZStatusFilterOptions", this.PTZStatusFilterOptions)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioOutputConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.OutputTokensAvailable = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> OutputTokensAvailable{};
        this.SendPrimacyOptions = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> SendPrimacyOptions{};
        this.OutputLevelRange = new tt_IntRange(); // tt_IntRange OutputLevelRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "OutputTokensAvailable", this.OutputTokensAvailable);
        w.write(obj, "tt", "SendPrimacyOptions", this.SendPrimacyOptions);
        w.write(obj, "tt", "OutputLevelRange", this.OutputLevelRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "OutputTokensAvailable", this.OutputTokensAvailable)) return false;
        if (!r.read(obj, "tt", "SendPrimacyOptions", this.SendPrimacyOptions)) return false;
        if (!r.read(obj, "tt", "OutputLevelRange", this.OutputLevelRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AACDecOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Bitrate = new tt_IntList(); // tt_IntList Bitrate{};
        this.SampleRateRange = new tt_IntList(); // tt_IntList SampleRateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Bitrate", this.Bitrate);
        w.write(obj, "tt", "SampleRateRange", this.SampleRateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Bitrate", this.Bitrate)) return false;
        if (!r.read(obj, "tt", "SampleRateRange", this.SampleRateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_G711DecOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Bitrate = new tt_IntList(); // tt_IntList Bitrate{};
        this.SampleRateRange = new tt_IntList(); // tt_IntList SampleRateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Bitrate", this.Bitrate);
        w.write(obj, "tt", "SampleRateRange", this.SampleRateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Bitrate", this.Bitrate)) return false;
        if (!r.read(obj, "tt", "SampleRateRange", this.SampleRateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_G726DecOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Bitrate = new tt_IntList(); // tt_IntList Bitrate{};
        this.SampleRateRange = new tt_IntList(); // tt_IntList SampleRateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Bitrate", this.Bitrate);
        w.write(obj, "tt", "SampleRateRange", this.SampleRateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Bitrate", this.Bitrate)) return false;
        if (!r.read(obj, "tt", "SampleRateRange", this.SampleRateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioDecoderConfigurationOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_AudioDecoderConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.AACDecOptions = new tt_AACDecOptions(); this.AACDecOptions['isP'] = true; // tt_AACDecOptions* AACDecOptions{};
        this.G711DecOptions = new tt_G711DecOptions(); this.G711DecOptions['isP'] = true; // tt_G711DecOptions* G711DecOptions{};
        this.G726DecOptions = new tt_G726DecOptions(); this.G726DecOptions['isP'] = true; // tt_G726DecOptions* G726DecOptions{};
        this.Extension = new tt_AudioDecoderConfigurationOptionsExtension(); this.Extension['isP'] = true; // tt_AudioDecoderConfigurationOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AACDecOptions", this.AACDecOptions);
        w.write(obj, "tt", "G711DecOptions", this.G711DecOptions);
        w.write(obj, "tt", "G726DecOptions", this.G726DecOptions);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AACDecOptions", this.AACDecOptions)) return false;
        if (!r.read(obj, "tt", "G711DecOptions", this.G711DecOptions)) return false;
        if (!r.read(obj, "tt", "G726DecOptions", this.G726DecOptions)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_StreamType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.RTP_Unicast= 0;
        this.RTP_Multicast= 1;
    }

    parse(parser, s){
        if (s == "RTP-Unicast") { this.v = this.RTP_Unicast; return true; }
        if (s == "RTP-Multicast") { this.v = this.RTP_Multicast; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.RTP_Unicast) { return "RTP-Unicast"; }
        if (this.v == this.RTP_Multicast) { return "RTP-Multicast"; }
        return "";
    }
}
export class tt_TransportProtocol extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.UDP= 0;
        this.TCP= 1;
        this.RTSP= 2;
        this.HTTP= 3;
    }

    parse(parser, s){
        if (s == "UDP") { this.v = this.UDP; return true; }
        if (s == "TCP") { this.v = this.TCP; return true; }
        if (s == "RTSP") { this.v = this.RTSP; return true; }
        if (s == "HTTP") { this.v = this.HTTP; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.UDP) { return "UDP"; }
        if (this.v == this.TCP) { return "TCP"; }
        if (this.v == this.RTSP) { return "RTSP"; }
        if (this.v == this.HTTP) { return "HTTP"; }
        return "";
    }
}
export class tt_Transport extends types.xsd_type
{
    constructor(){
        super();
        this.Protocol = new tt_TransportProtocol(); // tt_TransportProtocol Protocol{};
        this.Tunnel = new tt_Transport(); this.Tunnel['isP'] = true; // tt_Transport* Tunnel{};
    }

    write(obj, w){
        w.write(obj, "tt", "Protocol", this.Protocol);
        w.write(obj, "tt", "Tunnel", this.Tunnel);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Protocol", this.Protocol)) return false;
        if (!r.read(obj, "tt", "Tunnel", this.Tunnel)) return false;
        return true;
    }
}
export class tt_StreamSetup extends types.xsd_type
{
    constructor(){
        super();
        this.Stream = new tt_StreamType(); // tt_StreamType Stream{};
        this.Transport = new tt_Transport(); // tt_Transport Transport{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Stream", this.Stream);
        w.write(obj, "tt", "Transport", this.Transport);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Stream", this.Stream)) return false;
        if (!r.read(obj, "tt", "Transport", this.Transport)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MediaUri extends types.xsd_type
{
    constructor(){
        super();
        this.Uri = new xsd_anyURI(); // xsd_anyURI Uri{};
        this.InvalidAfterConnect = new xsd_boolean(); // xsd_boolean InvalidAfterConnect{};
        this.InvalidAfterReboot = new xsd_boolean(); // xsd_boolean InvalidAfterReboot{};
        this.Timeout = new xsd_duration(); // xsd_duration Timeout{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Uri", this.Uri);
        w.write(obj, "tt", "InvalidAfterConnect", this.InvalidAfterConnect);
        w.write(obj, "tt", "InvalidAfterReboot", this.InvalidAfterReboot);
        w.write(obj, "tt", "Timeout", this.Timeout);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Uri", this.Uri)) return false;
        if (!r.read(obj, "tt", "InvalidAfterConnect", this.InvalidAfterConnect)) return false;
        if (!r.read(obj, "tt", "InvalidAfterReboot", this.InvalidAfterReboot)) return false;
        if (!r.read(obj, "tt", "Timeout", this.Timeout)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const tt_Description = xsd_string;
export class tt_OSDReference extends tt_ReferenceToken
{
    constructor(){
        super();
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ReferenceToken.prototype.write.call(this, obj, w);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ReferenceToken.prototype.read.call(this, obj, r))
            return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDType extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Text= 0;
        this.Image= 1;
        this.Extended= 2;
    }

    parse(parser, s){
        if (s == "Text") { this.v = this.Text; return true; }
        if (s == "Image") { this.v = this.Image; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Text) { return "Text"; }
        if (this.v == this.Image) { return "Image"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_Vector extends types.xsd_type
{
    constructor(){
        super();
        this.x = new xsd_float_(); this.x['isP'] = true; // xsd_float_* x{};
        this.y = new xsd_float_(); this.y['isP'] = true; // xsd_float_* y{};
    }

    write(obj, w){
        w.write_attribute(obj, "x", this.x);
        w.write_attribute(obj, "y", this.y);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "x", this.x)) return false;
        if (!r.read_attribute(obj, "y", this.y)) return false;
        return true;
    }
}
export class tt_OSDPosConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDPosConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new xsd_string(); // xsd_string Type{};
        this.Pos = new tt_Vector(); this.Pos['isP'] = true; // tt_Vector* Pos{};
        this.Extension = new tt_OSDPosConfigurationExtension(); this.Extension['isP'] = true; // tt_OSDPosConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "Pos", this.Pos);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "Pos", this.Pos)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Color extends types.xsd_type
{
    constructor(){
        super();
        this.X = new xsd_float_(); // xsd_float_ X{};
        this.Y = new xsd_float_(); // xsd_float_ Y{};
        this.Z = new xsd_float_(); // xsd_float_ Z{};
        this.Colorspace = new xsd_anyURI(); this.Colorspace['isP'] = true; // xsd_anyURI* Colorspace{};
    }

    write(obj, w){
        w.write_attribute(obj, "X", this.X);
        w.write_attribute(obj, "Y", this.Y);
        w.write_attribute(obj, "Z", this.Z);
        w.write_attribute(obj, "Colorspace", this.Colorspace);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "X", this.X)) return false;
        if (!r.read_attribute(obj, "Y", this.Y)) return false;
        if (!r.read_attribute(obj, "Z", this.Z)) return false;
        if (!r.read_attribute(obj, "Colorspace", this.Colorspace)) return false;
        return true;
    }
}
export class tt_OSDColor extends types.xsd_type
{
    constructor(){
        super();
        this.Color = new tt_Color(); // tt_Color Color{};
        this.Transparent = new xsd_int_(); this.Transparent['isP'] = true; // xsd_int_* Transparent{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Color", this.Color);
        w.write_attribute(obj, "Transparent", this.Transparent);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Color", this.Color)) return false;
        if (!r.read_attribute(obj, "Transparent", this.Transparent)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDTextConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDTextConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new xsd_string(); // xsd_string Type{};
        this.DateFormat = new xsd_string(); this.DateFormat['isP'] = true; // xsd_string* DateFormat{};
        this.TimeFormat = new xsd_string(); this.TimeFormat['isP'] = true; // xsd_string* TimeFormat{};
        this.FontSize = new xsd_int_(); this.FontSize['isP'] = true; // xsd_int_* FontSize{};
        this.FontColor = new tt_OSDColor(); this.FontColor['isP'] = true; // tt_OSDColor* FontColor{};
        this.BackgroundColor = new tt_OSDColor(); this.BackgroundColor['isP'] = true; // tt_OSDColor* BackgroundColor{};
        this.PlainText = new xsd_string(); this.PlainText['isP'] = true; // xsd_string* PlainText{};
        this.Extension = new tt_OSDTextConfigurationExtension(); this.Extension['isP'] = true; // tt_OSDTextConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "DateFormat", this.DateFormat);
        w.write(obj, "tt", "TimeFormat", this.TimeFormat);
        w.write(obj, "tt", "FontSize", this.FontSize);
        w.write(obj, "tt", "FontColor", this.FontColor);
        w.write(obj, "tt", "BackgroundColor", this.BackgroundColor);
        w.write(obj, "tt", "PlainText", this.PlainText);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "DateFormat", this.DateFormat)) return false;
        if (!r.read(obj, "tt", "TimeFormat", this.TimeFormat)) return false;
        if (!r.read(obj, "tt", "FontSize", this.FontSize)) return false;
        if (!r.read(obj, "tt", "FontColor", this.FontColor)) return false;
        if (!r.read(obj, "tt", "BackgroundColor", this.BackgroundColor)) return false;
        if (!r.read(obj, "tt", "PlainText", this.PlainText)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDImgConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDImgConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ImgPath = new xsd_anyURI(); // xsd_anyURI ImgPath{};
        this.Extension = new tt_OSDImgConfigurationExtension(); this.Extension['isP'] = true; // tt_OSDImgConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "ImgPath", this.ImgPath);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ImgPath", this.ImgPath)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDConfiguration extends tt_DeviceEntity
{
    constructor(){
        super();
        this.VideoSourceConfigurationToken = new tt_OSDReference(); // tt_OSDReference VideoSourceConfigurationToken{};
        this.Type = new tt_OSDType(); // tt_OSDType Type{};
        this.Position = new tt_OSDPosConfiguration(); // tt_OSDPosConfiguration Position{};
        this.TextString = new tt_OSDTextConfiguration(); this.TextString['isP'] = true; // tt_OSDTextConfiguration* TextString{};
        this.Image = new tt_OSDImgConfiguration(); this.Image['isP'] = true; // tt_OSDImgConfiguration* Image{};
        this.Extension = new tt_OSDConfigurationExtension(); this.Extension['isP'] = true; // tt_OSDConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "VideoSourceConfigurationToken", this.VideoSourceConfigurationToken);
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "Position", this.Position);
        w.write(obj, "tt", "TextString", this.TextString);
        w.write(obj, "tt", "Image", this.Image);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "VideoSourceConfigurationToken", this.VideoSourceConfigurationToken)) return false;
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "Position", this.Position)) return false;
        if (!r.read(obj, "tt", "TextString", this.TextString)) return false;
        if (!r.read(obj, "tt", "Image", this.Image)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MaximumNumberOfOSDs extends types.xsd_type
{
    constructor(){
        super();
        this.Total = new xsd_int_(); // xsd_int_ Total{};
        this.Image = new xsd_int_(); this.Image['isP'] = true; // xsd_int_* Image{};
        this.PlainText = new xsd_int_(); this.PlainText['isP'] = true; // xsd_int_* PlainText{};
        this.Date = new xsd_int_(); this.Date['isP'] = true; // xsd_int_* Date{};
        this.Time = new xsd_int_(); this.Time['isP'] = true; // xsd_int_* Time{};
        this.DateAndTime = new xsd_int_(); this.DateAndTime['isP'] = true; // xsd_int_* DateAndTime{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "Total", this.Total);
        w.write_attribute(obj, "Image", this.Image);
        w.write_attribute(obj, "PlainText", this.PlainText);
        w.write_attribute(obj, "Date", this.Date);
        w.write_attribute(obj, "Time", this.Time);
        w.write_attribute(obj, "DateAndTime", this.DateAndTime);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "Total", this.Total)) return false;
        if (!r.read_attribute(obj, "Image", this.Image)) return false;
        if (!r.read_attribute(obj, "PlainText", this.PlainText)) return false;
        if (!r.read_attribute(obj, "Date", this.Date)) return false;
        if (!r.read_attribute(obj, "Time", this.Time)) return false;
        if (!r.read_attribute(obj, "DateAndTime", this.DateAndTime)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ColorspaceRange extends types.xsd_type
{
    constructor(){
        super();
        this.X = new tt_FloatRange(); // tt_FloatRange X{};
        this.Y = new tt_FloatRange(); // tt_FloatRange Y{};
        this.Z = new tt_FloatRange(); // tt_FloatRange Z{};
        this.Colorspace = new xsd_anyURI(); // xsd_anyURI Colorspace{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "X", this.X);
        w.write(obj, "tt", "Y", this.Y);
        w.write(obj, "tt", "Z", this.Z);
        w.write(obj, "tt", "Colorspace", this.Colorspace);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "X", this.X)) return false;
        if (!r.read(obj, "tt", "Y", this.Y)) return false;
        if (!r.read(obj, "tt", "Z", this.Z)) return false;
        if (!r.read(obj, "tt", "Colorspace", this.Colorspace)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ColorOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ColorList = new types.xsd_list(tt_Color); // xsd_list<tt_Color> ColorList{};
        this.ColorspaceRange = new types.xsd_list(tt_ColorspaceRange); // xsd_list<tt_ColorspaceRange> ColorspaceRange{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "ColorList", this.ColorList);
        w.write(obj, "tt", "ColorspaceRange", this.ColorspaceRange);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ColorList", this.ColorList)) return false;
        if (!r.read(obj, "tt", "ColorspaceRange", this.ColorspaceRange)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDColorOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDColorOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Color = new tt_ColorOptions(); this.Color['isP'] = true; // tt_ColorOptions* Color{};
        this.Transparent = new tt_IntRange(); this.Transparent['isP'] = true; // tt_IntRange* Transparent{};
        this.Extension = new tt_OSDColorOptionsExtension(); this.Extension['isP'] = true; // tt_OSDColorOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Color", this.Color);
        w.write(obj, "tt", "Transparent", this.Transparent);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Color", this.Color)) return false;
        if (!r.read(obj, "tt", "Transparent", this.Transparent)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDTextOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDTextOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new types.xsd_list(xsd_string); // xsd_list<xsd_string> Type{};
        this.FontSizeRange = new tt_IntRange(); this.FontSizeRange['isP'] = true; // tt_IntRange* FontSizeRange{};
        this.DateFormat = new types.xsd_list(xsd_string); // xsd_list<xsd_string> DateFormat{};
        this.TimeFormat = new types.xsd_list(xsd_string); // xsd_list<xsd_string> TimeFormat{};
        this.FontColor = new tt_OSDColorOptions(); this.FontColor['isP'] = true; // tt_OSDColorOptions* FontColor{};
        this.BackgroundColor = new tt_OSDColorOptions(); this.BackgroundColor['isP'] = true; // tt_OSDColorOptions* BackgroundColor{};
        this.Extension = new tt_OSDTextOptionsExtension(); this.Extension['isP'] = true; // tt_OSDTextOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "FontSizeRange", this.FontSizeRange);
        w.write(obj, "tt", "DateFormat", this.DateFormat);
        w.write(obj, "tt", "TimeFormat", this.TimeFormat);
        w.write(obj, "tt", "FontColor", this.FontColor);
        w.write(obj, "tt", "BackgroundColor", this.BackgroundColor);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "FontSizeRange", this.FontSizeRange)) return false;
        if (!r.read(obj, "tt", "DateFormat", this.DateFormat)) return false;
        if (!r.read(obj, "tt", "TimeFormat", this.TimeFormat)) return false;
        if (!r.read(obj, "tt", "FontColor", this.FontColor)) return false;
        if (!r.read(obj, "tt", "BackgroundColor", this.BackgroundColor)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDImgOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDImgOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ImagePath = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> ImagePath{};
        this.Extension = new tt_OSDImgOptionsExtension(); this.Extension['isP'] = true; // tt_OSDImgOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "ImagePath", this.ImagePath);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "ImagePath", this.ImagePath)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDConfigurationOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_OSDConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.MaximumNumberOfOSDs = new tt_MaximumNumberOfOSDs(); // tt_MaximumNumberOfOSDs MaximumNumberOfOSDs{};
        this.Type = new types.xsd_list(tt_OSDType); // xsd_list<tt_OSDType> Type{};
        this.PositionOption = new types.xsd_list(xsd_string); // xsd_list<xsd_string> PositionOption{};
        this.TextOption = new tt_OSDTextOptions(); this.TextOption['isP'] = true; // tt_OSDTextOptions* TextOption{};
        this.ImageOption = new tt_OSDImgOptions(); this.ImageOption['isP'] = true; // tt_OSDImgOptions* ImageOption{};
        this.Extension = new tt_OSDConfigurationOptionsExtension(); this.Extension['isP'] = true; // tt_OSDConfigurationOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "MaximumNumberOfOSDs", this.MaximumNumberOfOSDs);
        w.write(obj, "tt", "Type", this.Type);
        w.write(obj, "tt", "PositionOption", this.PositionOption);
        w.write(obj, "tt", "TextOption", this.TextOption);
        w.write(obj, "tt", "ImageOption", this.ImageOption);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "MaximumNumberOfOSDs", this.MaximumNumberOfOSDs)) return false;
        if (!r.read(obj, "tt", "Type", this.Type)) return false;
        if (!r.read(obj, "tt", "PositionOption", this.PositionOption)) return false;
        if (!r.read(obj, "tt", "TextOption", this.TextOption)) return false;
        if (!r.read(obj, "tt", "ImageOption", this.ImageOption)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoResolution2 extends types.xsd_type
{
    constructor(){
        super();
        this.Width = new xsd_int_(); // xsd_int_ Width{};
        this.Height = new xsd_int_(); // xsd_int_ Height{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Width", this.Width);
        w.write(obj, "tt", "Height", this.Height);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Width", this.Width)) return false;
        if (!r.read(obj, "tt", "Height", this.Height)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoRateControl2 extends types.xsd_type
{
    constructor(){
        super();
        this.FrameRateLimit = new xsd_float_(); // xsd_float_ FrameRateLimit{};
        this.BitrateLimit = new xsd_int_(); // xsd_int_ BitrateLimit{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.ConstantBitRate = new xsd_boolean(); this.ConstantBitRate['isP'] = true; // xsd_boolean* ConstantBitRate{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "FrameRateLimit", this.FrameRateLimit);
        w.write(obj, "tt", "BitrateLimit", this.BitrateLimit);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "ConstantBitRate", this.ConstantBitRate);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "FrameRateLimit", this.FrameRateLimit)) return false;
        if (!r.read(obj, "tt", "BitrateLimit", this.BitrateLimit)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "ConstantBitRate", this.ConstantBitRate)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_VideoEncoder2Configuration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.Encoding = new xsd_string(); // xsd_string Encoding{};
        this.Resolution = new tt_VideoResolution2(); // tt_VideoResolution2 Resolution{};
        this.RateControl = new tt_VideoRateControl2(); this.RateControl['isP'] = true; // tt_VideoRateControl2* RateControl{};
        this.Multicast = new tt_MulticastConfiguration(); this.Multicast['isP'] = true; // tt_MulticastConfiguration* Multicast{};
        this.Quality = new xsd_float_(); // xsd_float_ Quality{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.GovLength = new xsd_int_(); this.GovLength['isP'] = true; // xsd_int_* GovLength{};
        this.Profile = new xsd_string(); this.Profile['isP'] = true; // xsd_string* Profile{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "Resolution", this.Resolution);
        w.write(obj, "tt", "RateControl", this.RateControl);
        w.write(obj, "tt", "Multicast", this.Multicast);
        w.write(obj, "tt", "Quality", this.Quality);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "GovLength", this.GovLength);
        w.write_attribute(obj, "Profile", this.Profile);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "Resolution", this.Resolution)) return false;
        if (!r.read(obj, "tt", "RateControl", this.RateControl)) return false;
        if (!r.read(obj, "tt", "Multicast", this.Multicast)) return false;
        if (!r.read(obj, "tt", "Quality", this.Quality)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "GovLength", this.GovLength)) return false;
        if (!r.read_attribute(obj, "Profile", this.Profile)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioEncoder2Configuration extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.Encoding = new xsd_string(); // xsd_string Encoding{};
        this.Multicast = new tt_MulticastConfiguration(); this.Multicast['isP'] = true; // tt_MulticastConfiguration* Multicast{};
        this.Bitrate = new xsd_int_(); // xsd_int_ Bitrate{};
        this.SampleRate = new xsd_int_(); // xsd_int_ SampleRate{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "Multicast", this.Multicast);
        w.write(obj, "tt", "Bitrate", this.Bitrate);
        w.write(obj, "tt", "SampleRate", this.SampleRate);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "Multicast", this.Multicast)) return false;
        if (!r.read(obj, "tt", "Bitrate", this.Bitrate)) return false;
        if (!r.read(obj, "tt", "SampleRate", this.SampleRate)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const tt_IntAttrList = new types.xsd_simplelist(xsd_int_); // xsd_simplelist<xsd_int_>;
export const tt_FloatAttrList = new types.xsd_simplelist(xsd_float_); // xsd_simplelist<xsd_float_>;
export class tt_VideoEncoder2ConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Encoding = new xsd_string(); // xsd_string Encoding{};
        this.QualityRange = new tt_FloatRange(); // tt_FloatRange QualityRange{};
        this.ResolutionsAvailable = new types.xsd_list(tt_VideoResolution2); // xsd_list<tt_VideoResolution2> ResolutionsAvailable{};
        this.BitrateRange = new tt_IntRange(); // tt_IntRange BitrateRange{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.GovLengthRange = new tt_IntAttrList(); this.GovLengthRange['isP'] = true; // tt_IntAttrList* GovLengthRange{};
        this.FrameRatesSupported = new tt_FloatAttrList(); this.FrameRatesSupported['isP'] = true; // tt_FloatAttrList* FrameRatesSupported{};
        this.ProfilesSupported = new tt_StringAttrList(); this.ProfilesSupported['isP'] = true; // tt_StringAttrList* ProfilesSupported{};
        this.ConstantBitRateSupported = new xsd_boolean(); this.ConstantBitRateSupported['isP'] = true; // xsd_boolean* ConstantBitRateSupported{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "QualityRange", this.QualityRange);
        w.write(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable);
        w.write(obj, "tt", "BitrateRange", this.BitrateRange);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "GovLengthRange", this.GovLengthRange);
        w.write_attribute(obj, "FrameRatesSupported", this.FrameRatesSupported);
        w.write_attribute(obj, "ProfilesSupported", this.ProfilesSupported);
        w.write_attribute(obj, "ConstantBitRateSupported", this.ConstantBitRateSupported);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "QualityRange", this.QualityRange)) return false;
        if (!r.read(obj, "tt", "ResolutionsAvailable", this.ResolutionsAvailable)) return false;
        if (!r.read(obj, "tt", "BitrateRange", this.BitrateRange)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "GovLengthRange", this.GovLengthRange)) return false;
        if (!r.read_attribute(obj, "FrameRatesSupported", this.FrameRatesSupported)) return false;
        if (!r.read_attribute(obj, "ProfilesSupported", this.ProfilesSupported)) return false;
        if (!r.read_attribute(obj, "ConstantBitRateSupported", this.ConstantBitRateSupported)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AudioEncoder2ConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Encoding = new xsd_string(); // xsd_string Encoding{};
        this.BitrateList = new tt_IntList(); // tt_IntList BitrateList{};
        this.SampleRateList = new tt_IntList(); // tt_IntList SampleRateList{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Encoding", this.Encoding);
        w.write(obj, "tt", "BitrateList", this.BitrateList);
        w.write(obj, "tt", "SampleRateList", this.SampleRateList);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tt", "BitrateList", this.BitrateList)) return false;
        if (!r.read(obj, "tt", "SampleRateList", this.SampleRateList)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZVector extends types.xsd_type
{
    constructor(){
        super();
        this.PanTilt = new tt_Vector2D(); this.PanTilt['isP'] = true; // tt_Vector2D* PanTilt{};
        this.Zoom = new tt_Vector1D(); this.Zoom['isP'] = true; // tt_Vector1D* Zoom{};
    }

    write(obj, w){
        w.write(obj, "tt", "PanTilt", this.PanTilt);
        w.write(obj, "tt", "Zoom", this.Zoom);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PanTilt", this.PanTilt)) return false;
        if (!r.read(obj, "tt", "Zoom", this.Zoom)) return false;
        return true;
    }
}
export class tt_PTZPreset extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); this.Name['isP'] = true; // tt_Name* Name{};
        this.PTZPosition = new tt_PTZVector(); this.PTZPosition['isP'] = true; // tt_PTZVector* PTZPosition{};
        this.token = new tt_ReferenceToken(); this.token['isP'] = true; // tt_ReferenceToken* token{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "PTZPosition", this.PTZPosition);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "PTZPosition", this.PTZPosition)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZMoveStatus extends types.xsd_type
{
    constructor(){
        super();
        this.PanTilt = new tt_MoveStatus(); this.PanTilt['isP'] = true; // tt_MoveStatus* PanTilt{};
        this.Zoom = new tt_MoveStatus(); this.Zoom['isP'] = true; // tt_MoveStatus* Zoom{};
    }

    write(obj, w){
        w.write(obj, "tt", "PanTilt", this.PanTilt);
        w.write(obj, "tt", "Zoom", this.Zoom);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PanTilt", this.PanTilt)) return false;
        if (!r.read(obj, "tt", "Zoom", this.Zoom)) return false;
        return true;
    }
}
export class tt_PTZStatus extends types.xsd_type
{
    constructor(){
        super();
        this.Position = new tt_PTZVector(); this.Position['isP'] = true; // tt_PTZVector* Position{};
        this.MoveStatus = new tt_PTZMoveStatus(); this.MoveStatus['isP'] = true; // tt_PTZMoveStatus* MoveStatus{};
        this.Error = new xsd_string(); this.Error['isP'] = true; // xsd_string* Error{};
        this.UtcTime = new xsd_dateTime(); // xsd_dateTime UtcTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Position", this.Position);
        w.write(obj, "tt", "MoveStatus", this.MoveStatus);
        w.write(obj, "tt", "Error", this.Error);
        w.write(obj, "tt", "UtcTime", this.UtcTime);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Position", this.Position)) return false;
        if (!r.read(obj, "tt", "MoveStatus", this.MoveStatus)) return false;
        if (!r.read(obj, "tt", "Error", this.Error)) return false;
        if (!r.read(obj, "tt", "UtcTime", this.UtcTime)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZSpacesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZSpaces extends types.xsd_type
{
    constructor(){
        super();
        this.AbsolutePanTiltPositionSpace = new types.xsd_list(tt_Space2DDescription); // xsd_list<tt_Space2DDescription> AbsolutePanTiltPositionSpace{};
        this.AbsoluteZoomPositionSpace = new types.xsd_list(tt_Space1DDescription); // xsd_list<tt_Space1DDescription> AbsoluteZoomPositionSpace{};
        this.RelativePanTiltTranslationSpace = new types.xsd_list(tt_Space2DDescription); // xsd_list<tt_Space2DDescription> RelativePanTiltTranslationSpace{};
        this.RelativeZoomTranslationSpace = new types.xsd_list(tt_Space1DDescription); // xsd_list<tt_Space1DDescription> RelativeZoomTranslationSpace{};
        this.ContinuousPanTiltVelocitySpace = new types.xsd_list(tt_Space2DDescription); // xsd_list<tt_Space2DDescription> ContinuousPanTiltVelocitySpace{};
        this.ContinuousZoomVelocitySpace = new types.xsd_list(tt_Space1DDescription); // xsd_list<tt_Space1DDescription> ContinuousZoomVelocitySpace{};
        this.PanTiltSpeedSpace = new types.xsd_list(tt_Space1DDescription); // xsd_list<tt_Space1DDescription> PanTiltSpeedSpace{};
        this.ZoomSpeedSpace = new types.xsd_list(tt_Space1DDescription); // xsd_list<tt_Space1DDescription> ZoomSpeedSpace{};
        this.Extension = new tt_PTZSpacesExtension(); this.Extension['isP'] = true; // tt_PTZSpacesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AbsolutePanTiltPositionSpace", this.AbsolutePanTiltPositionSpace);
        w.write(obj, "tt", "AbsoluteZoomPositionSpace", this.AbsoluteZoomPositionSpace);
        w.write(obj, "tt", "RelativePanTiltTranslationSpace", this.RelativePanTiltTranslationSpace);
        w.write(obj, "tt", "RelativeZoomTranslationSpace", this.RelativeZoomTranslationSpace);
        w.write(obj, "tt", "ContinuousPanTiltVelocitySpace", this.ContinuousPanTiltVelocitySpace);
        w.write(obj, "tt", "ContinuousZoomVelocitySpace", this.ContinuousZoomVelocitySpace);
        w.write(obj, "tt", "PanTiltSpeedSpace", this.PanTiltSpeedSpace);
        w.write(obj, "tt", "ZoomSpeedSpace", this.ZoomSpeedSpace);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AbsolutePanTiltPositionSpace", this.AbsolutePanTiltPositionSpace)) return false;
        if (!r.read(obj, "tt", "AbsoluteZoomPositionSpace", this.AbsoluteZoomPositionSpace)) return false;
        if (!r.read(obj, "tt", "RelativePanTiltTranslationSpace", this.RelativePanTiltTranslationSpace)) return false;
        if (!r.read(obj, "tt", "RelativeZoomTranslationSpace", this.RelativeZoomTranslationSpace)) return false;
        if (!r.read(obj, "tt", "ContinuousPanTiltVelocitySpace", this.ContinuousPanTiltVelocitySpace)) return false;
        if (!r.read(obj, "tt", "ContinuousZoomVelocitySpace", this.ContinuousZoomVelocitySpace)) return false;
        if (!r.read(obj, "tt", "PanTiltSpeedSpace", this.PanTiltSpeedSpace)) return false;
        if (!r.read(obj, "tt", "ZoomSpeedSpace", this.ZoomSpeedSpace)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourOperation extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Start= 0;
        this.Stop= 1;
        this.Pause= 2;
        this.Extended= 3;
    }

    parse(parser, s){
        if (s == "Start") { this.v = this.Start; return true; }
        if (s == "Stop") { this.v = this.Stop; return true; }
        if (s == "Pause") { this.v = this.Pause; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Start) { return "Start"; }
        if (this.v == this.Stop) { return "Stop"; }
        if (this.v == this.Pause) { return "Pause"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_PTZPresetTourSupportedExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourSupported extends types.xsd_type
{
    constructor(){
        super();
        this.MaximumNumberOfPresetTours = new xsd_int_(); // xsd_int_ MaximumNumberOfPresetTours{};
        this.PTZPresetTourOperation = new types.xsd_list(tt_PTZPresetTourOperation); // xsd_list<tt_PTZPresetTourOperation> PTZPresetTourOperation{};
        this.Extension = new tt_PTZPresetTourSupportedExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourSupportedExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "MaximumNumberOfPresetTours", this.MaximumNumberOfPresetTours);
        w.write(obj, "tt", "PTZPresetTourOperation", this.PTZPresetTourOperation);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "MaximumNumberOfPresetTours", this.MaximumNumberOfPresetTours)) return false;
        if (!r.read(obj, "tt", "PTZPresetTourOperation", this.PTZPresetTourOperation)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZNodeExtension2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZNodeExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.SupportedPresetTour = new tt_PTZPresetTourSupported(); this.SupportedPresetTour['isP'] = true; // tt_PTZPresetTourSupported* SupportedPresetTour{};
        this.Extension = new tt_PTZNodeExtension2(); this.Extension['isP'] = true; // tt_PTZNodeExtension2* Extension{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "SupportedPresetTour", this.SupportedPresetTour);
        w.write(obj, "tt", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "SupportedPresetTour", this.SupportedPresetTour)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tt_PTZNode extends tt_DeviceEntity
{
    constructor(){
        super();
        this.Name = new tt_Name(); this.Name['isP'] = true; // tt_Name* Name{};
        this.SupportedPTZSpaces = new tt_PTZSpaces(); // tt_PTZSpaces SupportedPTZSpaces{};
        this.MaximumNumberOfPresets = new xsd_int_(); // xsd_int_ MaximumNumberOfPresets{};
        this.HomeSupported = new xsd_boolean(); // xsd_boolean HomeSupported{};
        this.AuxiliaryCommands = new types.xsd_list(tt_AuxiliaryData); // xsd_list<tt_AuxiliaryData> AuxiliaryCommands{};
        this.Extension = new tt_PTZNodeExtension(); this.Extension['isP'] = true; // tt_PTZNodeExtension* Extension{};
        this.FixedHomePosition = new xsd_boolean(); this.FixedHomePosition['isP'] = true; // xsd_boolean* FixedHomePosition{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "SupportedPTZSpaces", this.SupportedPTZSpaces);
        w.write(obj, "tt", "MaximumNumberOfPresets", this.MaximumNumberOfPresets);
        w.write(obj, "tt", "HomeSupported", this.HomeSupported);
        w.write(obj, "tt", "AuxiliaryCommands", this.AuxiliaryCommands);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "FixedHomePosition", this.FixedHomePosition);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "SupportedPTZSpaces", this.SupportedPTZSpaces)) return false;
        if (!r.read(obj, "tt", "MaximumNumberOfPresets", this.MaximumNumberOfPresets)) return false;
        if (!r.read(obj, "tt", "HomeSupported", this.HomeSupported)) return false;
        if (!r.read(obj, "tt", "AuxiliaryCommands", this.AuxiliaryCommands)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "FixedHomePosition", this.FixedHomePosition)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_EFlipOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_EFlipOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_EFlipMode); // xsd_list<tt_EFlipMode> Mode{};
        this.Extension = new tt_EFlipOptionsExtension(); this.Extension['isP'] = true; // tt_EFlipOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ReverseOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ReverseOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Mode = new types.xsd_list(tt_ReverseMode); // xsd_list<tt_ReverseMode> Mode{};
        this.Extension = new tt_ReverseOptionsExtension(); this.Extension['isP'] = true; // tt_ReverseOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTControlDirectionOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTControlDirectionOptions extends types.xsd_type
{
    constructor(){
        super();
        this.EFlip = new tt_EFlipOptions(); this.EFlip['isP'] = true; // tt_EFlipOptions* EFlip{};
        this.Reverse = new tt_ReverseOptions(); this.Reverse['isP'] = true; // tt_ReverseOptions* Reverse{};
        this.Extension = new tt_PTControlDirectionOptionsExtension(); this.Extension['isP'] = true; // tt_PTControlDirectionOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "EFlip", this.EFlip);
        w.write(obj, "tt", "Reverse", this.Reverse);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "EFlip", this.EFlip)) return false;
        if (!r.read(obj, "tt", "Reverse", this.Reverse)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZConfigurationOptions2 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Spaces = new tt_PTZSpaces(); // tt_PTZSpaces Spaces{};
        this.PTZTimeout = new tt_DurationRange(); // tt_DurationRange PTZTimeout{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.PTControlDirection = new tt_PTControlDirectionOptions(); this.PTControlDirection['isP'] = true; // tt_PTControlDirectionOptions* PTControlDirection{};
        this.Extension = new tt_PTZConfigurationOptions2(); this.Extension['isP'] = true; // tt_PTZConfigurationOptions2* Extension{};
        this.PTZRamps = new tt_IntAttrList(); this.PTZRamps['isP'] = true; // tt_IntAttrList* PTZRamps{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Spaces", this.Spaces);
        w.write(obj, "tt", "PTZTimeout", this.PTZTimeout);
        w.write(obj, null, null, this.any);
        w.write(obj, "tt", "PTControlDirection", this.PTControlDirection);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "PTZRamps", this.PTZRamps);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Spaces", this.Spaces)) return false;
        if (!r.read(obj, "tt", "PTZTimeout", this.PTZTimeout)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read(obj, "tt", "PTControlDirection", this.PTControlDirection)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "PTZRamps", this.PTZRamps)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourState extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Idle= 0;
        this.Touring= 1;
        this.Paused= 2;
        this.Extended= 3;
    }

    parse(parser, s){
        if (s == "Idle") { this.v = this.Idle; return true; }
        if (s == "Touring") { this.v = this.Touring; return true; }
        if (s == "Paused") { this.v = this.Paused; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Idle) { return "Idle"; }
        if (this.v == this.Touring) { return "Touring"; }
        if (this.v == this.Paused) { return "Paused"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_PTZPresetTourTypeExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourPresetDetail extends types.xsd_type
{
    constructor(){
        super();
        this.PresetToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetToken{};
        this.Home = new xsd_boolean(); // xsd_boolean Home{};
        this.PTZPosition = new tt_PTZVector(); // tt_PTZVector PTZPosition{};
        this.TypeExtension = new tt_PTZPresetTourTypeExtension(); // tt_PTZPresetTourTypeExtension TypeExtension{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "PresetToken", this.PresetToken);
        w.write(obj, "tt", "Home", this.Home);
        w.write(obj, "tt", "PTZPosition", this.PTZPosition);
        w.write(obj, "tt", "TypeExtension", this.TypeExtension);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PresetToken", this.PresetToken)) return false;
        if (!r.read(obj, "tt", "Home", this.Home)) return false;
        if (!r.read(obj, "tt", "PTZPosition", this.PTZPosition)) return false;
        if (!r.read(obj, "tt", "TypeExtension", this.TypeExtension)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourSpotExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourSpot extends types.xsd_type
{
    constructor(){
        super();
        this.PresetDetail = new tt_PTZPresetTourPresetDetail(); // tt_PTZPresetTourPresetDetail PresetDetail{};
        this.Speed = new tt_PTZSpeed(); this.Speed['isP'] = true; // tt_PTZSpeed* Speed{};
        this.StayTime = new xsd_duration(); this.StayTime['isP'] = true; // xsd_duration* StayTime{};
        this.Extension = new tt_PTZPresetTourSpotExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourSpotExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "PresetDetail", this.PresetDetail);
        w.write(obj, "tt", "Speed", this.Speed);
        w.write(obj, "tt", "StayTime", this.StayTime);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PresetDetail", this.PresetDetail)) return false;
        if (!r.read(obj, "tt", "Speed", this.Speed)) return false;
        if (!r.read(obj, "tt", "StayTime", this.StayTime)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourStatusExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourStatus extends types.xsd_type
{
    constructor(){
        super();
        this.State = new tt_PTZPresetTourState(); // tt_PTZPresetTourState State{};
        this.CurrentTourSpot = new tt_PTZPresetTourSpot(); this.CurrentTourSpot['isP'] = true; // tt_PTZPresetTourSpot* CurrentTourSpot{};
        this.Extension = new tt_PTZPresetTourStatusExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourStatusExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "State", this.State);
        w.write(obj, "tt", "CurrentTourSpot", this.CurrentTourSpot);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "State", this.State)) return false;
        if (!r.read(obj, "tt", "CurrentTourSpot", this.CurrentTourSpot)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourDirection extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Forward= 0;
        this.Backward= 1;
        this.Extended= 2;
    }

    parse(parser, s){
        if (s == "Forward") { this.v = this.Forward; return true; }
        if (s == "Backward") { this.v = this.Backward; return true; }
        if (s == "Extended") { this.v = this.Extended; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Forward) { return "Forward"; }
        if (this.v == this.Backward) { return "Backward"; }
        if (this.v == this.Extended) { return "Extended"; }
        return "";
    }
}
export class tt_PTZPresetTourStartingConditionExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourStartingCondition extends types.xsd_type
{
    constructor(){
        super();
        this.RecurringTime = new xsd_int_(); this.RecurringTime['isP'] = true; // xsd_int_* RecurringTime{};
        this.RecurringDuration = new xsd_duration(); this.RecurringDuration['isP'] = true; // xsd_duration* RecurringDuration{};
        this.Direction = new tt_PTZPresetTourDirection(); this.Direction['isP'] = true; // tt_PTZPresetTourDirection* Direction{};
        this.Extension = new tt_PTZPresetTourStartingConditionExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourStartingConditionExtension* Extension{};
        this.RandomPresetOrder = new xsd_boolean(); this.RandomPresetOrder['isP'] = true; // xsd_boolean* RandomPresetOrder{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "RecurringTime", this.RecurringTime);
        w.write(obj, "tt", "RecurringDuration", this.RecurringDuration);
        w.write(obj, "tt", "Direction", this.Direction);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "RandomPresetOrder", this.RandomPresetOrder);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "RecurringTime", this.RecurringTime)) return false;
        if (!r.read(obj, "tt", "RecurringDuration", this.RecurringDuration)) return false;
        if (!r.read(obj, "tt", "Direction", this.Direction)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "RandomPresetOrder", this.RandomPresetOrder)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PresetTour extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); this.Name['isP'] = true; // tt_Name* Name{};
        this.Status = new tt_PTZPresetTourStatus(); // tt_PTZPresetTourStatus Status{};
        this.AutoStart = new xsd_boolean(); // xsd_boolean AutoStart{};
        this.StartingCondition = new tt_PTZPresetTourStartingCondition(); // tt_PTZPresetTourStartingCondition StartingCondition{};
        this.TourSpot = new types.xsd_list(tt_PTZPresetTourSpot); // xsd_list<tt_PTZPresetTourSpot> TourSpot{};
        this.Extension = new tt_PTZPresetTourExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourExtension* Extension{};
        this.token = new tt_ReferenceToken(); this.token['isP'] = true; // tt_ReferenceToken* token{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "Status", this.Status);
        w.write(obj, "tt", "AutoStart", this.AutoStart);
        w.write(obj, "tt", "StartingCondition", this.StartingCondition);
        w.write(obj, "tt", "TourSpot", this.TourSpot);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "Status", this.Status)) return false;
        if (!r.read(obj, "tt", "AutoStart", this.AutoStart)) return false;
        if (!r.read(obj, "tt", "StartingCondition", this.StartingCondition)) return false;
        if (!r.read(obj, "tt", "TourSpot", this.TourSpot)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourStartingConditionOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourStartingConditionOptions extends types.xsd_type
{
    constructor(){
        super();
        this.RecurringTime = new tt_IntRange(); this.RecurringTime['isP'] = true; // tt_IntRange* RecurringTime{};
        this.RecurringDuration = new tt_DurationRange(); this.RecurringDuration['isP'] = true; // tt_DurationRange* RecurringDuration{};
        this.Direction = new types.xsd_list(tt_PTZPresetTourDirection); // xsd_list<tt_PTZPresetTourDirection> Direction{};
        this.Extension = new tt_PTZPresetTourStartingConditionOptionsExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourStartingConditionOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "RecurringTime", this.RecurringTime);
        w.write(obj, "tt", "RecurringDuration", this.RecurringDuration);
        w.write(obj, "tt", "Direction", this.Direction);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "RecurringTime", this.RecurringTime)) return false;
        if (!r.read(obj, "tt", "RecurringDuration", this.RecurringDuration)) return false;
        if (!r.read(obj, "tt", "Direction", this.Direction)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourPresetDetailOptionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_PTZPresetTourPresetDetailOptions extends types.xsd_type
{
    constructor(){
        super();
        this.PresetToken = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> PresetToken{};
        this.Home = new xsd_boolean(); this.Home['isP'] = true; // xsd_boolean* Home{};
        this.PanTiltPositionSpace = new tt_Space2DDescription(); this.PanTiltPositionSpace['isP'] = true; // tt_Space2DDescription* PanTiltPositionSpace{};
        this.ZoomPositionSpace = new tt_Space1DDescription(); this.ZoomPositionSpace['isP'] = true; // tt_Space1DDescription* ZoomPositionSpace{};
        this.Extension = new tt_PTZPresetTourPresetDetailOptionsExtension(); this.Extension['isP'] = true; // tt_PTZPresetTourPresetDetailOptionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "PresetToken", this.PresetToken);
        w.write(obj, "tt", "Home", this.Home);
        w.write(obj, "tt", "PanTiltPositionSpace", this.PanTiltPositionSpace);
        w.write(obj, "tt", "ZoomPositionSpace", this.ZoomPositionSpace);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PresetToken", this.PresetToken)) return false;
        if (!r.read(obj, "tt", "Home", this.Home)) return false;
        if (!r.read(obj, "tt", "PanTiltPositionSpace", this.PanTiltPositionSpace)) return false;
        if (!r.read(obj, "tt", "ZoomPositionSpace", this.ZoomPositionSpace)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourSpotOptions extends types.xsd_type
{
    constructor(){
        super();
        this.PresetDetail = new tt_PTZPresetTourPresetDetailOptions(); // tt_PTZPresetTourPresetDetailOptions PresetDetail{};
        this.StayTime = new tt_DurationRange(); // tt_DurationRange StayTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "PresetDetail", this.PresetDetail);
        w.write(obj, "tt", "StayTime", this.StayTime);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "PresetDetail", this.PresetDetail)) return false;
        if (!r.read(obj, "tt", "StayTime", this.StayTime)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_PTZPresetTourOptions extends types.xsd_type
{
    constructor(){
        super();
        this.AutoStart = new xsd_boolean(); // xsd_boolean AutoStart{};
        this.StartingCondition = new tt_PTZPresetTourStartingConditionOptions(); // tt_PTZPresetTourStartingConditionOptions StartingCondition{};
        this.TourSpot = new tt_PTZPresetTourSpotOptions(); // tt_PTZPresetTourSpotOptions TourSpot{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AutoStart", this.AutoStart);
        w.write(obj, "tt", "StartingCondition", this.StartingCondition);
        w.write(obj, "tt", "TourSpot", this.TourSpot);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AutoStart", this.AutoStart)) return false;
        if (!r.read(obj, "tt", "StartingCondition", this.StartingCondition)) return false;
        if (!r.read(obj, "tt", "TourSpot", this.TourSpot)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SimpleItemDescription_0 extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Type = new xsd_QName(); // xsd_QName Type{};
    }

    write(obj, w){
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "Type", this.Type);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        return true;
    }
}
export class tt_ElementItemDescription_0 extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Type = new xsd_QName(); // xsd_QName Type{};
    }

    write(obj, w){
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "Type", this.Type);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        return true;
    }
}
export class tt_ItemListDescriptionExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ItemListDescription extends types.xsd_type
{
    constructor(){
        super();
        this.SimpleItemDescription = new types.xsd_list(tt_SimpleItemDescription_0); // xsd_list<tt_SimpleItemDescription_0> SimpleItemDescription{};
        this.ElementItemDescription = new types.xsd_list(tt_ElementItemDescription_0); // xsd_list<tt_ElementItemDescription_0> ElementItemDescription{};
        this.Extension = new tt_ItemListDescriptionExtension(); this.Extension['isP'] = true; // tt_ItemListDescriptionExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "SimpleItemDescription", this.SimpleItemDescription);
        w.write(obj, "tt", "ElementItemDescription", this.ElementItemDescription);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "SimpleItemDescription", this.SimpleItemDescription)) return false;
        if (!r.read(obj, "tt", "ElementItemDescription", this.ElementItemDescription)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MessageDescriptionExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_MessageDescription extends types.xsd_type
{
    constructor(){
        super();
        this.Source = new tt_ItemListDescription(); this.Source['isP'] = true; // tt_ItemListDescription* Source{};
        this.Key = new tt_ItemListDescription(); this.Key['isP'] = true; // tt_ItemListDescription* Key{};
        this.Data = new tt_ItemListDescription(); this.Data['isP'] = true; // tt_ItemListDescription* Data{};
        this.Extension = new tt_MessageDescriptionExtension(); this.Extension['isP'] = true; // tt_MessageDescriptionExtension* Extension{};
        this.IsProperty = new xsd_boolean(); this.IsProperty['isP'] = true; // xsd_boolean* IsProperty{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Source", this.Source);
        w.write(obj, "tt", "Key", this.Key);
        w.write(obj, "tt", "Data", this.Data);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "IsProperty", this.IsProperty);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Source", this.Source)) return false;
        if (!r.read(obj, "tt", "Key", this.Key)) return false;
        if (!r.read(obj, "tt", "Data", this.Data)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "IsProperty", this.IsProperty)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_Messages_0 extends tt_MessageDescription
{
    constructor(){
        super();
        this.ParentTopic = new xsd_string(); // xsd_string ParentTopic{};
    }

    write(obj, w){
        tt_MessageDescription.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "ParentTopic", this.ParentTopic);
    }

    read(obj, r){
        if (!tt_MessageDescription.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "ParentTopic", this.ParentTopic)) return false;
        return true;
    }
}
export class tt_ConfigDescriptionExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_ConfigDescription extends types.xsd_type
{
    constructor(){
        super();
        this.Parameters = new tt_ItemListDescription(); // tt_ItemListDescription Parameters{};
        this.Messages = new types.xsd_list(tt_Messages_0); // xsd_list<tt_Messages_0> Messages{};
        this.Extension = new tt_ConfigDescriptionExtension(); this.Extension['isP'] = true; // tt_ConfigDescriptionExtension* Extension{};
        this.Name = new xsd_QName(); // xsd_QName Name{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Parameters", this.Parameters);
        w.write(obj, "tt", "Messages", this.Messages);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Parameters", this.Parameters)) return false;
        if (!r.read(obj, "tt", "Messages", this.Messages)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SupportedRulesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_SupportedRules extends types.xsd_type
{
    constructor(){
        super();
        this.RuleContentSchemaLocation = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> RuleContentSchemaLocation{};
        this.RuleDescription = new types.xsd_list(tt_ConfigDescription); // xsd_list<tt_ConfigDescription> RuleDescription{};
        this.Extension = new tt_SupportedRulesExtension(); this.Extension['isP'] = true; // tt_SupportedRulesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "RuleContentSchemaLocation", this.RuleContentSchemaLocation);
        w.write(obj, "tt", "RuleDescription", this.RuleDescription);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "RuleContentSchemaLocation", this.RuleContentSchemaLocation)) return false;
        if (!r.read(obj, "tt", "RuleDescription", this.RuleDescription)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SupportedAnalyticsModulesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_SupportedAnalyticsModules extends types.xsd_type
{
    constructor(){
        super();
        this.AnalyticsModuleContentSchemaLocation = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> AnalyticsModuleContentSchemaLocation{};
        this.AnalyticsModuleDescription = new types.xsd_list(tt_ConfigDescription); // xsd_list<tt_ConfigDescription> AnalyticsModuleDescription{};
        this.Extension = new tt_SupportedAnalyticsModulesExtension(); this.Extension['isP'] = true; // tt_SupportedAnalyticsModulesExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AnalyticsModuleContentSchemaLocation", this.AnalyticsModuleContentSchemaLocation);
        w.write(obj, "tt", "AnalyticsModuleDescription", this.AnalyticsModuleDescription);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AnalyticsModuleContentSchemaLocation", this.AnalyticsModuleContentSchemaLocation)) return false;
        if (!r.read(obj, "tt", "AnalyticsModuleDescription", this.AnalyticsModuleDescription)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_ModeOfOperation extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.Idle= 0;
        this.Active= 1;
        this.Unknown= 2;
    }

    parse(parser, s){
        if (s == "Idle") { this.v = this.Idle; return true; }
        if (s == "Active") { this.v = this.Active; return true; }
        if (s == "Unknown") { this.v = this.Unknown; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.Idle) { return "Idle"; }
        if (this.v == this.Active) { return "Active"; }
        if (this.v == this.Unknown) { return "Unknown"; }
        return "";
    }
}
export class tt_AnalyticsEngineControl extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.EngineToken = new tt_ReferenceToken(); // tt_ReferenceToken EngineToken{};
        this.EngineConfigToken = new tt_ReferenceToken(); // tt_ReferenceToken EngineConfigToken{};
        this.InputToken = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> InputToken{};
        this.ReceiverToken = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> ReceiverToken{};
        this.Multicast = new tt_MulticastConfiguration(); this.Multicast['isP'] = true; // tt_MulticastConfiguration* Multicast{};
        this.Subscription = new tt_Config(); // tt_Config Subscription{};
        this.Mode = new tt_ModeOfOperation(); // tt_ModeOfOperation Mode{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "EngineToken", this.EngineToken);
        w.write(obj, "tt", "EngineConfigToken", this.EngineConfigToken);
        w.write(obj, "tt", "InputToken", this.InputToken);
        w.write(obj, "tt", "ReceiverToken", this.ReceiverToken);
        w.write(obj, "tt", "Multicast", this.Multicast);
        w.write(obj, "tt", "Subscription", this.Subscription);
        w.write(obj, "tt", "Mode", this.Mode);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "EngineToken", this.EngineToken)) return false;
        if (!r.read(obj, "tt", "EngineConfigToken", this.EngineConfigToken)) return false;
        if (!r.read(obj, "tt", "InputToken", this.InputToken)) return false;
        if (!r.read(obj, "tt", "ReceiverToken", this.ReceiverToken)) return false;
        if (!r.read(obj, "tt", "Multicast", this.Multicast)) return false;
        if (!r.read(obj, "tt", "Subscription", this.Subscription)) return false;
        if (!r.read(obj, "tt", "Mode", this.Mode)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_SourceIdentificationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_SourceIdentification extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Token = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> Token{};
        this.Extension = new tt_SourceIdentificationExtension(); this.Extension['isP'] = true; // tt_SourceIdentificationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Name", this.Name);
        w.write(obj, "tt", "Token", this.Token);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Name", this.Name)) return false;
        if (!r.read(obj, "tt", "Token", this.Token)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_MetadataInputExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_MetadataInput extends types.xsd_type
{
    constructor(){
        super();
        this.MetadataConfig = new types.xsd_list(tt_Config); // xsd_list<tt_Config> MetadataConfig{};
        this.Extension = new tt_MetadataInputExtension(); this.Extension['isP'] = true; // tt_MetadataInputExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "MetadataConfig", this.MetadataConfig);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "MetadataConfig", this.MetadataConfig)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsEngineInput extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.SourceIdentification = new tt_SourceIdentification(); // tt_SourceIdentification SourceIdentification{};
        this.VideoInput = new tt_VideoEncoderConfiguration(); // tt_VideoEncoderConfiguration VideoInput{};
        this.MetadataInput = new tt_MetadataInput(); // tt_MetadataInput MetadataInput{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "SourceIdentification", this.SourceIdentification);
        w.write(obj, "tt", "VideoInput", this.VideoInput);
        w.write(obj, "tt", "MetadataInput", this.MetadataInput);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "SourceIdentification", this.SourceIdentification)) return false;
        if (!r.read(obj, "tt", "VideoInput", this.VideoInput)) return false;
        if (!r.read(obj, "tt", "MetadataInput", this.MetadataInput)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsEngineInputInfoExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_AnalyticsEngineInputInfo extends types.xsd_type
{
    constructor(){
        super();
        this.InputInfo = new tt_Config(); this.InputInfo['isP'] = true; // tt_Config* InputInfo{};
        this.Extension = new tt_AnalyticsEngineInputInfoExtension(); this.Extension['isP'] = true; // tt_AnalyticsEngineInputInfoExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "InputInfo", this.InputInfo);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "InputInfo", this.InputInfo)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_EngineConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.VideoAnalyticsConfiguration = new tt_VideoAnalyticsConfiguration(); // tt_VideoAnalyticsConfiguration VideoAnalyticsConfiguration{};
        this.AnalyticsEngineInputInfo = new tt_AnalyticsEngineInputInfo(); // tt_AnalyticsEngineInputInfo AnalyticsEngineInputInfo{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "VideoAnalyticsConfiguration", this.VideoAnalyticsConfiguration);
        w.write(obj, "tt", "AnalyticsEngineInputInfo", this.AnalyticsEngineInputInfo);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "VideoAnalyticsConfiguration", this.VideoAnalyticsConfiguration)) return false;
        if (!r.read(obj, "tt", "AnalyticsEngineInputInfo", this.AnalyticsEngineInputInfo)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsDeviceEngineConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "", this.any)) return false;
        return true;
    }
}
export class tt_AnalyticsDeviceEngineConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.EngineConfiguration = new types.xsd_list(tt_EngineConfiguration); // xsd_list<tt_EngineConfiguration> EngineConfiguration{};
        this.Extension = new tt_AnalyticsDeviceEngineConfigurationExtension(); this.Extension['isP'] = true; // tt_AnalyticsDeviceEngineConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "EngineConfiguration", this.EngineConfiguration);
        w.write(obj, "tt", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "EngineConfiguration", this.EngineConfiguration)) return false;
        if (!r.read(obj, "tt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsEngine extends tt_ConfigurationEntity
{
    constructor(){
        super();
        this.AnalyticsEngineConfiguration = new tt_AnalyticsDeviceEngineConfiguration(); // tt_AnalyticsDeviceEngineConfiguration AnalyticsEngineConfiguration{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tt_ConfigurationEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tt", "AnalyticsEngineConfiguration", this.AnalyticsEngineConfiguration);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tt_ConfigurationEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tt", "AnalyticsEngineConfiguration", this.AnalyticsEngineConfiguration)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsState extends types.xsd_type
{
    constructor(){
        super();
        this.Error = new xsd_string(); this.Error['isP'] = true; // xsd_string* Error{};
        this.State = new xsd_string(); // xsd_string State{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "Error", this.Error);
        w.write(obj, "tt", "State", this.State);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "Error", this.Error)) return false;
        if (!r.read(obj, "tt", "State", this.State)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tt_AnalyticsStateInformation extends types.xsd_type
{
    constructor(){
        super();
        this.AnalyticsEngineControlToken = new tt_ReferenceToken(); // tt_ReferenceToken AnalyticsEngineControlToken{};
        this.State = new tt_AnalyticsState(); // tt_AnalyticsState State{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tt", "AnalyticsEngineControlToken", this.AnalyticsEngineControlToken);
        w.write(obj, "tt", "State", this.State);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tt", "AnalyticsEngineControlToken", this.AnalyticsEngineControlToken)) return false;
        if (!r.read(obj, "tt", "State", this.State)) return false;
        if (!r.read(obj, "tt", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tds_GetServices extends types.xsd_type
{
    constructor(){
        super();
        this.IncludeCapability = new xsd_boolean(); // xsd_boolean IncludeCapability{};
    }

    write(obj, w){
        w.write(obj, "tds", "IncludeCapability", this.IncludeCapability);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "IncludeCapability", this.IncludeCapability)) return false;
        return true;
    }
}
export class tds_Capabilities_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.any_t({}); // any_t any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "", this.any)) return false;
        return true;
    }
}
export class tds_Service extends types.xsd_type
{
    constructor(){
        super();
        this.Namespace = new xsd_anyURI(); // xsd_anyURI Namespace{};
        this.XAddr = new xsd_anyURI(); // xsd_anyURI XAddr{};
        this.Capabilities = new tds_Capabilities_0(); this.Capabilities['isP'] = true; // tds_Capabilities_0* Capabilities{};
        this.Version = new tt_OnvifVersion(); // tt_OnvifVersion Version{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tds", "Namespace", this.Namespace);
        w.write(obj, "tds", "XAddr", this.XAddr);
        w.write(obj, "tds", "Capabilities", this.Capabilities);
        w.write(obj, "tds", "Version", this.Version);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Namespace", this.Namespace)) return false;
        if (!r.read(obj, "tds", "XAddr", this.XAddr)) return false;
        if (!r.read(obj, "tds", "Capabilities", this.Capabilities)) return false;
        if (!r.read(obj, "tds", "Version", this.Version)) return false;
        if (!r.read(obj, "tds", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tds_GetServicesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Service = new types.xsd_list(tds_Service); // xsd_list<tds_Service> Service{};
    }

    write(obj, w){
        w.write(obj, "tds", "Service", this.Service);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Service", this.Service)) return false;
        return true;
    }
}
export class tds_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_NetworkCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.IPFilter = new xsd_boolean(); this.IPFilter['isP'] = true; // xsd_boolean* IPFilter{};
        this.ZeroConfiguration = new xsd_boolean(); this.ZeroConfiguration['isP'] = true; // xsd_boolean* ZeroConfiguration{};
        this.IPVersion6 = new xsd_boolean(); this.IPVersion6['isP'] = true; // xsd_boolean* IPVersion6{};
        this.DynDNS = new xsd_boolean(); this.DynDNS['isP'] = true; // xsd_boolean* DynDNS{};
        this.Dot11Configuration = new xsd_boolean(); this.Dot11Configuration['isP'] = true; // xsd_boolean* Dot11Configuration{};
        this.Dot1XConfigurations = new xsd_int_(); this.Dot1XConfigurations['isP'] = true; // xsd_int_* Dot1XConfigurations{};
        this.HostnameFromDHCP = new xsd_boolean(); this.HostnameFromDHCP['isP'] = true; // xsd_boolean* HostnameFromDHCP{};
        this.NTP = new xsd_int_(); this.NTP['isP'] = true; // xsd_int_* NTP{};
        this.DHCPv6 = new xsd_boolean(); this.DHCPv6['isP'] = true; // xsd_boolean* DHCPv6{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "IPFilter", this.IPFilter);
        w.write_attribute(obj, "ZeroConfiguration", this.ZeroConfiguration);
        w.write_attribute(obj, "IPVersion6", this.IPVersion6);
        w.write_attribute(obj, "DynDNS", this.DynDNS);
        w.write_attribute(obj, "Dot11Configuration", this.Dot11Configuration);
        w.write_attribute(obj, "Dot1XConfigurations", this.Dot1XConfigurations);
        w.write_attribute(obj, "HostnameFromDHCP", this.HostnameFromDHCP);
        w.write_attribute(obj, "NTP", this.NTP);
        w.write_attribute(obj, "DHCPv6", this.DHCPv6);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "IPFilter", this.IPFilter)) return false;
        if (!r.read_attribute(obj, "ZeroConfiguration", this.ZeroConfiguration)) return false;
        if (!r.read_attribute(obj, "IPVersion6", this.IPVersion6)) return false;
        if (!r.read_attribute(obj, "DynDNS", this.DynDNS)) return false;
        if (!r.read_attribute(obj, "Dot11Configuration", this.Dot11Configuration)) return false;
        if (!r.read_attribute(obj, "Dot1XConfigurations", this.Dot1XConfigurations)) return false;
        if (!r.read_attribute(obj, "HostnameFromDHCP", this.HostnameFromDHCP)) return false;
        if (!r.read_attribute(obj, "NTP", this.NTP)) return false;
        if (!r.read_attribute(obj, "DHCPv6", this.DHCPv6)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export const tds_EAPMethodTypes = new types.xsd_simplelist(xsd_int_); // xsd_simplelist<xsd_int_>;
export class tds_SecurityCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.TLS1_0 = new xsd_boolean(); this.TLS1_0['isP'] = true; // xsd_boolean* TLS1_0{};
        this.TLS1_1 = new xsd_boolean(); this.TLS1_1['isP'] = true; // xsd_boolean* TLS1_1{};
        this.TLS1_2 = new xsd_boolean(); this.TLS1_2['isP'] = true; // xsd_boolean* TLS1_2{};
        this.OnboardKeyGeneration = new xsd_boolean(); this.OnboardKeyGeneration['isP'] = true; // xsd_boolean* OnboardKeyGeneration{};
        this.AccessPolicyConfig = new xsd_boolean(); this.AccessPolicyConfig['isP'] = true; // xsd_boolean* AccessPolicyConfig{};
        this.DefaultAccessPolicy = new xsd_boolean(); this.DefaultAccessPolicy['isP'] = true; // xsd_boolean* DefaultAccessPolicy{};
        this.Dot1X = new xsd_boolean(); this.Dot1X['isP'] = true; // xsd_boolean* Dot1X{};
        this.RemoteUserHandling = new xsd_boolean(); this.RemoteUserHandling['isP'] = true; // xsd_boolean* RemoteUserHandling{};
        this.X_509Token = new xsd_boolean(); this.X_509Token['isP'] = true; // xsd_boolean* X_509Token{};
        this.SAMLToken = new xsd_boolean(); this.SAMLToken['isP'] = true; // xsd_boolean* SAMLToken{};
        this.KerberosToken = new xsd_boolean(); this.KerberosToken['isP'] = true; // xsd_boolean* KerberosToken{};
        this.UsernameToken = new xsd_boolean(); this.UsernameToken['isP'] = true; // xsd_boolean* UsernameToken{};
        this.HttpDigest = new xsd_boolean(); this.HttpDigest['isP'] = true; // xsd_boolean* HttpDigest{};
        this.RELToken = new xsd_boolean(); this.RELToken['isP'] = true; // xsd_boolean* RELToken{};
        this.SupportedEAPMethods = new tds_EAPMethodTypes(); this.SupportedEAPMethods['isP'] = true; // tds_EAPMethodTypes* SupportedEAPMethods{};
        this.MaxUsers = new xsd_int_(); this.MaxUsers['isP'] = true; // xsd_int_* MaxUsers{};
        this.MaxUserNameLength = new xsd_int_(); this.MaxUserNameLength['isP'] = true; // xsd_int_* MaxUserNameLength{};
        this.MaxPasswordLength = new xsd_int_(); this.MaxPasswordLength['isP'] = true; // xsd_int_* MaxPasswordLength{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "TLS1.0", this.TLS1_0);
        w.write_attribute(obj, "TLS1.1", this.TLS1_1);
        w.write_attribute(obj, "TLS1.2", this.TLS1_2);
        w.write_attribute(obj, "OnboardKeyGeneration", this.OnboardKeyGeneration);
        w.write_attribute(obj, "AccessPolicyConfig", this.AccessPolicyConfig);
        w.write_attribute(obj, "DefaultAccessPolicy", this.DefaultAccessPolicy);
        w.write_attribute(obj, "Dot1X", this.Dot1X);
        w.write_attribute(obj, "RemoteUserHandling", this.RemoteUserHandling);
        w.write_attribute(obj, "X.509Token", this.X_509Token);
        w.write_attribute(obj, "SAMLToken", this.SAMLToken);
        w.write_attribute(obj, "KerberosToken", this.KerberosToken);
        w.write_attribute(obj, "UsernameToken", this.UsernameToken);
        w.write_attribute(obj, "HttpDigest", this.HttpDigest);
        w.write_attribute(obj, "RELToken", this.RELToken);
        w.write_attribute(obj, "SupportedEAPMethods", this.SupportedEAPMethods);
        w.write_attribute(obj, "MaxUsers", this.MaxUsers);
        w.write_attribute(obj, "MaxUserNameLength", this.MaxUserNameLength);
        w.write_attribute(obj, "MaxPasswordLength", this.MaxPasswordLength);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "TLS1.0", this.TLS1_0)) return false;
        if (!r.read_attribute(obj, "TLS1.1", this.TLS1_1)) return false;
        if (!r.read_attribute(obj, "TLS1.2", this.TLS1_2)) return false;
        if (!r.read_attribute(obj, "OnboardKeyGeneration", this.OnboardKeyGeneration)) return false;
        if (!r.read_attribute(obj, "AccessPolicyConfig", this.AccessPolicyConfig)) return false;
        if (!r.read_attribute(obj, "DefaultAccessPolicy", this.DefaultAccessPolicy)) return false;
        if (!r.read_attribute(obj, "Dot1X", this.Dot1X)) return false;
        if (!r.read_attribute(obj, "RemoteUserHandling", this.RemoteUserHandling)) return false;
        if (!r.read_attribute(obj, "X.509Token", this.X_509Token)) return false;
        if (!r.read_attribute(obj, "SAMLToken", this.SAMLToken)) return false;
        if (!r.read_attribute(obj, "KerberosToken", this.KerberosToken)) return false;
        if (!r.read_attribute(obj, "UsernameToken", this.UsernameToken)) return false;
        if (!r.read_attribute(obj, "HttpDigest", this.HttpDigest)) return false;
        if (!r.read_attribute(obj, "RELToken", this.RELToken)) return false;
        if (!r.read_attribute(obj, "SupportedEAPMethods", this.SupportedEAPMethods)) return false;
        if (!r.read_attribute(obj, "MaxUsers", this.MaxUsers)) return false;
        if (!r.read_attribute(obj, "MaxUserNameLength", this.MaxUserNameLength)) return false;
        if (!r.read_attribute(obj, "MaxPasswordLength", this.MaxPasswordLength)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tds_SystemCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.DiscoveryResolve = new xsd_boolean(); this.DiscoveryResolve['isP'] = true; // xsd_boolean* DiscoveryResolve{};
        this.DiscoveryBye = new xsd_boolean(); this.DiscoveryBye['isP'] = true; // xsd_boolean* DiscoveryBye{};
        this.RemoteDiscovery = new xsd_boolean(); this.RemoteDiscovery['isP'] = true; // xsd_boolean* RemoteDiscovery{};
        this.SystemBackup = new xsd_boolean(); this.SystemBackup['isP'] = true; // xsd_boolean* SystemBackup{};
        this.SystemLogging = new xsd_boolean(); this.SystemLogging['isP'] = true; // xsd_boolean* SystemLogging{};
        this.FirmwareUpgrade = new xsd_boolean(); this.FirmwareUpgrade['isP'] = true; // xsd_boolean* FirmwareUpgrade{};
        this.HttpFirmwareUpgrade = new xsd_boolean(); this.HttpFirmwareUpgrade['isP'] = true; // xsd_boolean* HttpFirmwareUpgrade{};
        this.HttpSystemBackup = new xsd_boolean(); this.HttpSystemBackup['isP'] = true; // xsd_boolean* HttpSystemBackup{};
        this.HttpSystemLogging = new xsd_boolean(); this.HttpSystemLogging['isP'] = true; // xsd_boolean* HttpSystemLogging{};
        this.HttpSupportInformation = new xsd_boolean(); this.HttpSupportInformation['isP'] = true; // xsd_boolean* HttpSupportInformation{};
        this.StorageConfiguration = new xsd_boolean(); this.StorageConfiguration['isP'] = true; // xsd_boolean* StorageConfiguration{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "DiscoveryResolve", this.DiscoveryResolve);
        w.write_attribute(obj, "DiscoveryBye", this.DiscoveryBye);
        w.write_attribute(obj, "RemoteDiscovery", this.RemoteDiscovery);
        w.write_attribute(obj, "SystemBackup", this.SystemBackup);
        w.write_attribute(obj, "SystemLogging", this.SystemLogging);
        w.write_attribute(obj, "FirmwareUpgrade", this.FirmwareUpgrade);
        w.write_attribute(obj, "HttpFirmwareUpgrade", this.HttpFirmwareUpgrade);
        w.write_attribute(obj, "HttpSystemBackup", this.HttpSystemBackup);
        w.write_attribute(obj, "HttpSystemLogging", this.HttpSystemLogging);
        w.write_attribute(obj, "HttpSupportInformation", this.HttpSupportInformation);
        w.write_attribute(obj, "StorageConfiguration", this.StorageConfiguration);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "DiscoveryResolve", this.DiscoveryResolve)) return false;
        if (!r.read_attribute(obj, "DiscoveryBye", this.DiscoveryBye)) return false;
        if (!r.read_attribute(obj, "RemoteDiscovery", this.RemoteDiscovery)) return false;
        if (!r.read_attribute(obj, "SystemBackup", this.SystemBackup)) return false;
        if (!r.read_attribute(obj, "SystemLogging", this.SystemLogging)) return false;
        if (!r.read_attribute(obj, "FirmwareUpgrade", this.FirmwareUpgrade)) return false;
        if (!r.read_attribute(obj, "HttpFirmwareUpgrade", this.HttpFirmwareUpgrade)) return false;
        if (!r.read_attribute(obj, "HttpSystemBackup", this.HttpSystemBackup)) return false;
        if (!r.read_attribute(obj, "HttpSystemLogging", this.HttpSystemLogging)) return false;
        if (!r.read_attribute(obj, "HttpSupportInformation", this.HttpSupportInformation)) return false;
        if (!r.read_attribute(obj, "StorageConfiguration", this.StorageConfiguration)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tds_MiscCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.AuxiliaryCommands = new tt_StringAttrList(); this.AuxiliaryCommands['isP'] = true; // tt_StringAttrList* AuxiliaryCommands{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write_attribute(obj, "AuxiliaryCommands", this.AuxiliaryCommands);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "AuxiliaryCommands", this.AuxiliaryCommands)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tds_DeviceServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.Network = new tds_NetworkCapabilities(); // tds_NetworkCapabilities Network{};
        this.Security = new tds_SecurityCapabilities(); // tds_SecurityCapabilities Security{};
        this.System = new tds_SystemCapabilities(); // tds_SystemCapabilities System{};
        this.Misc = new tds_MiscCapabilities(); this.Misc['isP'] = true; // tds_MiscCapabilities* Misc{};
    }

    write(obj, w){
        w.write(obj, "tds", "Network", this.Network);
        w.write(obj, "tds", "Security", this.Security);
        w.write(obj, "tds", "System", this.System);
        w.write(obj, "tds", "Misc", this.Misc);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Network", this.Network)) return false;
        if (!r.read(obj, "tds", "Security", this.Security)) return false;
        if (!r.read(obj, "tds", "System", this.System)) return false;
        if (!r.read(obj, "tds", "Misc", this.Misc)) return false;
        return true;
    }
}
export class tds_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tds_DeviceServiceCapabilities(); // tds_DeviceServiceCapabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tds", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tds_GetDeviceInformation extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDeviceInformationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Manufacturer = new xsd_string(); // xsd_string Manufacturer{};
        this.Model = new xsd_string(); // xsd_string Model{};
        this.FirmwareVersion = new xsd_string(); // xsd_string FirmwareVersion{};
        this.SerialNumber = new xsd_string(); // xsd_string SerialNumber{};
        this.HardwareId = new xsd_string(); // xsd_string HardwareId{};
    }

    write(obj, w){
        w.write(obj, "tds", "Manufacturer", this.Manufacturer);
        w.write(obj, "tds", "Model", this.Model);
        w.write(obj, "tds", "FirmwareVersion", this.FirmwareVersion);
        w.write(obj, "tds", "SerialNumber", this.SerialNumber);
        w.write(obj, "tds", "HardwareId", this.HardwareId);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Manufacturer", this.Manufacturer)) return false;
        if (!r.read(obj, "tds", "Model", this.Model)) return false;
        if (!r.read(obj, "tds", "FirmwareVersion", this.FirmwareVersion)) return false;
        if (!r.read(obj, "tds", "SerialNumber", this.SerialNumber)) return false;
        if (!r.read(obj, "tds", "HardwareId", this.HardwareId)) return false;
        return true;
    }
}
export class tds_SetSystemDateAndTime extends types.xsd_type
{
    constructor(){
        super();
        this.DateTimeType = new tt_SetDateTimeType(); // tt_SetDateTimeType DateTimeType{};
        this.DaylightSavings = new xsd_boolean(); // xsd_boolean DaylightSavings{};
        this.TimeZone = new tt_TimeZone(); this.TimeZone['isP'] = true; // tt_TimeZone* TimeZone{};
        this.UTCDateTime = new tt_DateTime(); this.UTCDateTime['isP'] = true; // tt_DateTime* UTCDateTime{};
    }

    write(obj, w){
        w.write(obj, "tds", "DateTimeType", this.DateTimeType);
        w.write(obj, "tds", "DaylightSavings", this.DaylightSavings);
        w.write(obj, "tds", "TimeZone", this.TimeZone);
        w.write(obj, "tds", "UTCDateTime", this.UTCDateTime);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DateTimeType", this.DateTimeType)) return false;
        if (!r.read(obj, "tds", "DaylightSavings", this.DaylightSavings)) return false;
        if (!r.read(obj, "tds", "TimeZone", this.TimeZone)) return false;
        if (!r.read(obj, "tds", "UTCDateTime", this.UTCDateTime)) return false;
        return true;
    }
}
export class tds_SetSystemDateAndTimeResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetSystemDateAndTime extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetSystemDateAndTimeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SystemDateAndTime = new tt_SystemDateTime(); // tt_SystemDateTime SystemDateAndTime{};
    }

    write(obj, w){
        w.write(obj, "tds", "SystemDateAndTime", this.SystemDateAndTime);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "SystemDateAndTime", this.SystemDateAndTime)) return false;
        return true;
    }
}
export class tds_SetSystemFactoryDefault extends types.xsd_type
{
    constructor(){
        super();
        this.FactoryDefault = new tt_FactoryDefaultType(); // tt_FactoryDefaultType FactoryDefault{};
    }

    write(obj, w){
        w.write(obj, "tds", "FactoryDefault", this.FactoryDefault);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "FactoryDefault", this.FactoryDefault)) return false;
        return true;
    }
}
export class tds_SetSystemFactoryDefaultResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_UpgradeSystemFirmware extends types.xsd_type
{
    constructor(){
        super();
        this.Firmware = new tt_AttachmentData(); // tt_AttachmentData Firmware{};
    }

    write(obj, w){
        w.write(obj, "tds", "Firmware", this.Firmware);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Firmware", this.Firmware)) return false;
        return true;
    }
}
export class tds_UpgradeSystemFirmwareResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Message = new xsd_string(); this.Message['isP'] = true; // xsd_string* Message{};
    }

    write(obj, w){
        w.write(obj, "tds", "Message", this.Message);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Message", this.Message)) return false;
        return true;
    }
}
export class tds_SystemReboot extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_SystemRebootResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Message = new xsd_string(); // xsd_string Message{};
    }

    write(obj, w){
        w.write(obj, "tds", "Message", this.Message);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Message", this.Message)) return false;
        return true;
    }
}
export class tds_RestoreSystem extends types.xsd_type
{
    constructor(){
        super();
        this.BackupFiles = new types.xsd_list(tt_BackupFile); // xsd_list<tt_BackupFile> BackupFiles{};
    }

    write(obj, w){
        w.write(obj, "tds", "BackupFiles", this.BackupFiles);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "BackupFiles", this.BackupFiles)) return false;
        return true;
    }
}
export class tds_RestoreSystemResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetSystemBackup extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetSystemBackupResponse extends types.xsd_type
{
    constructor(){
        super();
        this.BackupFiles = new types.xsd_list(tt_BackupFile); // xsd_list<tt_BackupFile> BackupFiles{};
    }

    write(obj, w){
        w.write(obj, "tds", "BackupFiles", this.BackupFiles);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "BackupFiles", this.BackupFiles)) return false;
        return true;
    }
}
export class tds_GetSystemLog extends types.xsd_type
{
    constructor(){
        super();
        this.LogType = new tt_SystemLogType(); // tt_SystemLogType LogType{};
    }

    write(obj, w){
        w.write(obj, "tds", "LogType", this.LogType);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "LogType", this.LogType)) return false;
        return true;
    }
}
export class tds_GetSystemLogResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SystemLog = new tt_SystemLog(); // tt_SystemLog SystemLog{};
    }

    write(obj, w){
        w.write(obj, "tds", "SystemLog", this.SystemLog);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "SystemLog", this.SystemLog)) return false;
        return true;
    }
}
export class tds_GetSystemSupportInformation extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetSystemSupportInformationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SupportInformation = new tt_SupportInformation(); // tt_SupportInformation SupportInformation{};
    }

    write(obj, w){
        w.write(obj, "tds", "SupportInformation", this.SupportInformation);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "SupportInformation", this.SupportInformation)) return false;
        return true;
    }
}
export class tds_GetScopes extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetScopesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Scopes = new types.xsd_list(tt_Scope); // xsd_list<tt_Scope> Scopes{};
    }

    write(obj, w){
        w.write(obj, "tds", "Scopes", this.Scopes);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Scopes", this.Scopes)) return false;
        return true;
    }
}
export class tds_SetScopes extends types.xsd_type
{
    constructor(){
        super();
        this.Scopes = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> Scopes{};
    }

    write(obj, w){
        w.write(obj, "tds", "Scopes", this.Scopes);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Scopes", this.Scopes)) return false;
        return true;
    }
}
export class tds_SetScopesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_AddScopes extends types.xsd_type
{
    constructor(){
        super();
        this.ScopeItem = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> ScopeItem{};
    }

    write(obj, w){
        w.write(obj, "tds", "ScopeItem", this.ScopeItem);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "ScopeItem", this.ScopeItem)) return false;
        return true;
    }
}
export class tds_AddScopesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_RemoveScopes extends types.xsd_type
{
    constructor(){
        super();
        this.ScopeItem = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> ScopeItem{};
    }

    write(obj, w){
        w.write(obj, "tds", "ScopeItem", this.ScopeItem);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "ScopeItem", this.ScopeItem)) return false;
        return true;
    }
}
export class tds_RemoveScopesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ScopeItem = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> ScopeItem{};
    }

    write(obj, w){
        w.write(obj, "tds", "ScopeItem", this.ScopeItem);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "ScopeItem", this.ScopeItem)) return false;
        return true;
    }
}
export class tds_GetDiscoveryMode extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDiscoveryModeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.DiscoveryMode = new tt_DiscoveryMode(); // tt_DiscoveryMode DiscoveryMode{};
    }

    write(obj, w){
        w.write(obj, "tds", "DiscoveryMode", this.DiscoveryMode);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DiscoveryMode", this.DiscoveryMode)) return false;
        return true;
    }
}
export class tds_SetDiscoveryMode extends types.xsd_type
{
    constructor(){
        super();
        this.DiscoveryMode = new tt_DiscoveryMode(); // tt_DiscoveryMode DiscoveryMode{};
    }

    write(obj, w){
        w.write(obj, "tds", "DiscoveryMode", this.DiscoveryMode);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DiscoveryMode", this.DiscoveryMode)) return false;
        return true;
    }
}
export class tds_SetDiscoveryModeResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetRemoteDiscoveryMode extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetRemoteDiscoveryModeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.RemoteDiscoveryMode = new tt_DiscoveryMode(); // tt_DiscoveryMode RemoteDiscoveryMode{};
    }

    write(obj, w){
        w.write(obj, "tds", "RemoteDiscoveryMode", this.RemoteDiscoveryMode);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RemoteDiscoveryMode", this.RemoteDiscoveryMode)) return false;
        return true;
    }
}
export class tds_SetRemoteDiscoveryMode extends types.xsd_type
{
    constructor(){
        super();
        this.RemoteDiscoveryMode = new tt_DiscoveryMode(); // tt_DiscoveryMode RemoteDiscoveryMode{};
    }

    write(obj, w){
        w.write(obj, "tds", "RemoteDiscoveryMode", this.RemoteDiscoveryMode);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RemoteDiscoveryMode", this.RemoteDiscoveryMode)) return false;
        return true;
    }
}
export class tds_SetRemoteDiscoveryModeResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDPAddresses extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDPAddressesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.DPAddress = new types.xsd_list(tt_NetworkHost); // xsd_list<tt_NetworkHost> DPAddress{};
    }

    write(obj, w){
        w.write(obj, "tds", "DPAddress", this.DPAddress);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DPAddress", this.DPAddress)) return false;
        return true;
    }
}
export class tds_GetEndpointReference extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetEndpointReferenceResponse extends types.xsd_type
{
    constructor(){
        super();
        this.GUID = new xsd_string(); // xsd_string GUID{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tds", "GUID", this.GUID);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "GUID", this.GUID)) return false;
        if (!r.read(obj, "tds", "", this.any)) return false;
        return true;
    }
}
export class tds_GetRemoteUser extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetRemoteUserResponse extends types.xsd_type
{
    constructor(){
        super();
        this.RemoteUser = new tt_RemoteUser(); this.RemoteUser['isP'] = true; // tt_RemoteUser* RemoteUser{};
    }

    write(obj, w){
        w.write(obj, "tds", "RemoteUser", this.RemoteUser);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RemoteUser", this.RemoteUser)) return false;
        return true;
    }
}
export class tds_SetRemoteUser extends types.xsd_type
{
    constructor(){
        super();
        this.RemoteUser = new tt_RemoteUser(); this.RemoteUser['isP'] = true; // tt_RemoteUser* RemoteUser{};
    }

    write(obj, w){
        w.write(obj, "tds", "RemoteUser", this.RemoteUser);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RemoteUser", this.RemoteUser)) return false;
        return true;
    }
}
export class tds_SetRemoteUserResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetUsers extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetUsersResponse extends types.xsd_type
{
    constructor(){
        super();
        this.User = new types.xsd_list(tt_User); // xsd_list<tt_User> User{};
    }

    write(obj, w){
        w.write(obj, "tds", "User", this.User);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "User", this.User)) return false;
        return true;
    }
}
export class tds_CreateUsers extends types.xsd_type
{
    constructor(){
        super();
        this.User = new types.xsd_list(tt_User); // xsd_list<tt_User> User{};
    }

    write(obj, w){
        w.write(obj, "tds", "User", this.User);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "User", this.User)) return false;
        return true;
    }
}
export class tds_CreateUsersResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_DeleteUsers extends types.xsd_type
{
    constructor(){
        super();
        this.Username = new types.xsd_list(xsd_string); // xsd_list<xsd_string> Username{};
    }

    write(obj, w){
        w.write(obj, "tds", "Username", this.Username);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Username", this.Username)) return false;
        return true;
    }
}
export class tds_DeleteUsersResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_SetUser extends types.xsd_type
{
    constructor(){
        super();
        this.User = new types.xsd_list(tt_User); // xsd_list<tt_User> User{};
    }

    write(obj, w){
        w.write(obj, "tds", "User", this.User);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "User", this.User)) return false;
        return true;
    }
}
export class tds_SetUserResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetWsdlUrl extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetWsdlUrlResponse extends types.xsd_type
{
    constructor(){
        super();
        this.WsdlUrl = new xsd_anyURI(); // xsd_anyURI WsdlUrl{};
    }

    write(obj, w){
        w.write(obj, "tds", "WsdlUrl", this.WsdlUrl);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "WsdlUrl", this.WsdlUrl)) return false;
        return true;
    }
}
export class tds_GetCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.Category = new types.xsd_list(tt_CapabilityCategory); // xsd_list<tt_CapabilityCategory> Category{};
    }

    write(obj, w){
        w.write(obj, "tds", "Category", this.Category);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Category", this.Category)) return false;
        return true;
    }
}
export class tds_GetCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tt_Capabilities(); // tt_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tds", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tds_SetDPAddresses extends types.xsd_type
{
    constructor(){
        super();
        this.DPAddress = new types.xsd_list(tt_NetworkHost); // xsd_list<tt_NetworkHost> DPAddress{};
    }

    write(obj, w){
        w.write(obj, "tds", "DPAddress", this.DPAddress);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DPAddress", this.DPAddress)) return false;
        return true;
    }
}
export class tds_SetDPAddressesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetHostname extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetHostnameResponse extends types.xsd_type
{
    constructor(){
        super();
        this.HostnameInformation = new tt_HostnameInformation(); // tt_HostnameInformation HostnameInformation{};
    }

    write(obj, w){
        w.write(obj, "tds", "HostnameInformation", this.HostnameInformation);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "HostnameInformation", this.HostnameInformation)) return false;
        return true;
    }
}
export class tds_SetHostname extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new xsd_token(); // xsd_token Name{};
    }

    write(obj, w){
        w.write(obj, "tds", "Name", this.Name);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Name", this.Name)) return false;
        return true;
    }
}
export class tds_SetHostnameResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_SetHostnameFromDHCP extends types.xsd_type
{
    constructor(){
        super();
        this.FromDHCP = new xsd_boolean(); // xsd_boolean FromDHCP{};
    }

    write(obj, w){
        w.write(obj, "tds", "FromDHCP", this.FromDHCP);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "FromDHCP", this.FromDHCP)) return false;
        return true;
    }
}
export class tds_SetHostnameFromDHCPResponse extends types.xsd_type
{
    constructor(){
        super();
        this.RebootNeeded = new xsd_boolean(); // xsd_boolean RebootNeeded{};
    }

    write(obj, w){
        w.write(obj, "tds", "RebootNeeded", this.RebootNeeded);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RebootNeeded", this.RebootNeeded)) return false;
        return true;
    }
}
export class tds_GetDNS extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDNSResponse extends types.xsd_type
{
    constructor(){
        super();
        this.DNSInformation = new tt_DNSInformation(); // tt_DNSInformation DNSInformation{};
    }

    write(obj, w){
        w.write(obj, "tds", "DNSInformation", this.DNSInformation);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DNSInformation", this.DNSInformation)) return false;
        return true;
    }
}
export class tds_SetDNS extends types.xsd_type
{
    constructor(){
        super();
        this.FromDHCP = new xsd_boolean(); // xsd_boolean FromDHCP{};
        this.SearchDomain = new types.xsd_list(xsd_token); // xsd_list<xsd_token> SearchDomain{};
        this.DNSManual = new types.xsd_list(tt_IPAddress); // xsd_list<tt_IPAddress> DNSManual{};
    }

    write(obj, w){
        w.write(obj, "tds", "FromDHCP", this.FromDHCP);
        w.write(obj, "tds", "SearchDomain", this.SearchDomain);
        w.write(obj, "tds", "DNSManual", this.DNSManual);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tds", "SearchDomain", this.SearchDomain)) return false;
        if (!r.read(obj, "tds", "DNSManual", this.DNSManual)) return false;
        return true;
    }
}
export class tds_SetDNSResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNTP extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNTPResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NTPInformation = new tt_NTPInformation(); // tt_NTPInformation NTPInformation{};
    }

    write(obj, w){
        w.write(obj, "tds", "NTPInformation", this.NTPInformation);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NTPInformation", this.NTPInformation)) return false;
        return true;
    }
}
export class tds_SetNTP extends types.xsd_type
{
    constructor(){
        super();
        this.FromDHCP = new xsd_boolean(); // xsd_boolean FromDHCP{};
        this.NTPManual = new types.xsd_list(tt_NetworkHost); // xsd_list<tt_NetworkHost> NTPManual{};
    }

    write(obj, w){
        w.write(obj, "tds", "FromDHCP", this.FromDHCP);
        w.write(obj, "tds", "NTPManual", this.NTPManual);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "FromDHCP", this.FromDHCP)) return false;
        if (!r.read(obj, "tds", "NTPManual", this.NTPManual)) return false;
        return true;
    }
}
export class tds_SetNTPResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDynamicDNS extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDynamicDNSResponse extends types.xsd_type
{
    constructor(){
        super();
        this.DynamicDNSInformation = new tt_DynamicDNSInformation(); // tt_DynamicDNSInformation DynamicDNSInformation{};
    }

    write(obj, w){
        w.write(obj, "tds", "DynamicDNSInformation", this.DynamicDNSInformation);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "DynamicDNSInformation", this.DynamicDNSInformation)) return false;
        return true;
    }
}
export class tds_SetDynamicDNS extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new tt_DynamicDNSType(); // tt_DynamicDNSType Type{};
        this.Name = new tt_DNSName(); this.Name['isP'] = true; // tt_DNSName* Name{};
        this.TTL = new xsd_duration(); this.TTL['isP'] = true; // xsd_duration* TTL{};
    }

    write(obj, w){
        w.write(obj, "tds", "Type", this.Type);
        w.write(obj, "tds", "Name", this.Name);
        w.write(obj, "tds", "TTL", this.TTL);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Type", this.Type)) return false;
        if (!r.read(obj, "tds", "Name", this.Name)) return false;
        if (!r.read(obj, "tds", "TTL", this.TTL)) return false;
        return true;
    }
}
export class tds_SetDynamicDNSResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNetworkInterfaces extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNetworkInterfacesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NetworkInterfaces = new types.xsd_list(tt_NetworkInterface); // xsd_list<tt_NetworkInterface> NetworkInterfaces{};
    }

    write(obj, w){
        w.write(obj, "tds", "NetworkInterfaces", this.NetworkInterfaces);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NetworkInterfaces", this.NetworkInterfaces)) return false;
        return true;
    }
}
export class tds_SetNetworkInterfaces extends types.xsd_type
{
    constructor(){
        super();
        this.InterfaceToken = new tt_ReferenceToken(); // tt_ReferenceToken InterfaceToken{};
        this.NetworkInterface = new tt_NetworkInterfaceSetConfiguration(); // tt_NetworkInterfaceSetConfiguration NetworkInterface{};
    }

    write(obj, w){
        w.write(obj, "tds", "InterfaceToken", this.InterfaceToken);
        w.write(obj, "tds", "NetworkInterface", this.NetworkInterface);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "InterfaceToken", this.InterfaceToken)) return false;
        if (!r.read(obj, "tds", "NetworkInterface", this.NetworkInterface)) return false;
        return true;
    }
}
export class tds_SetNetworkInterfacesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.RebootNeeded = new xsd_boolean(); // xsd_boolean RebootNeeded{};
    }

    write(obj, w){
        w.write(obj, "tds", "RebootNeeded", this.RebootNeeded);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RebootNeeded", this.RebootNeeded)) return false;
        return true;
    }
}
export class tds_GetNetworkProtocols extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNetworkProtocolsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NetworkProtocols = new types.xsd_list(tt_NetworkProtocol); // xsd_list<tt_NetworkProtocol> NetworkProtocols{};
    }

    write(obj, w){
        w.write(obj, "tds", "NetworkProtocols", this.NetworkProtocols);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NetworkProtocols", this.NetworkProtocols)) return false;
        return true;
    }
}
export class tds_SetNetworkProtocols extends types.xsd_type
{
    constructor(){
        super();
        this.NetworkProtocols = new types.xsd_list(tt_NetworkProtocol); // xsd_list<tt_NetworkProtocol> NetworkProtocols{};
    }

    write(obj, w){
        w.write(obj, "tds", "NetworkProtocols", this.NetworkProtocols);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NetworkProtocols", this.NetworkProtocols)) return false;
        return true;
    }
}
export class tds_SetNetworkProtocolsResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNetworkDefaultGateway extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetNetworkDefaultGatewayResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NetworkGateway = new tt_NetworkGateway(); // tt_NetworkGateway NetworkGateway{};
    }

    write(obj, w){
        w.write(obj, "tds", "NetworkGateway", this.NetworkGateway);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NetworkGateway", this.NetworkGateway)) return false;
        return true;
    }
}
export class tds_SetNetworkDefaultGateway extends types.xsd_type
{
    constructor(){
        super();
        this.IPv4Address = new types.xsd_list(tt_IPv4Address); // xsd_list<tt_IPv4Address> IPv4Address{};
        this.IPv6Address = new types.xsd_list(tt_IPv6Address); // xsd_list<tt_IPv6Address> IPv6Address{};
    }

    write(obj, w){
        w.write(obj, "tds", "IPv4Address", this.IPv4Address);
        w.write(obj, "tds", "IPv6Address", this.IPv6Address);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "IPv4Address", this.IPv4Address)) return false;
        if (!r.read(obj, "tds", "IPv6Address", this.IPv6Address)) return false;
        return true;
    }
}
export class tds_SetNetworkDefaultGatewayResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetZeroConfiguration extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetZeroConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ZeroConfiguration = new tt_NetworkZeroConfiguration(); // tt_NetworkZeroConfiguration ZeroConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "ZeroConfiguration", this.ZeroConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "ZeroConfiguration", this.ZeroConfiguration)) return false;
        return true;
    }
}
export class tds_SetZeroConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.InterfaceToken = new tt_ReferenceToken(); // tt_ReferenceToken InterfaceToken{};
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
    }

    write(obj, w){
        w.write(obj, "tds", "InterfaceToken", this.InterfaceToken);
        w.write(obj, "tds", "Enabled", this.Enabled);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "InterfaceToken", this.InterfaceToken)) return false;
        if (!r.read(obj, "tds", "Enabled", this.Enabled)) return false;
        return true;
    }
}
export class tds_SetZeroConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetIPAddressFilter extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetIPAddressFilterResponse extends types.xsd_type
{
    constructor(){
        super();
        this.IPAddressFilter = new tt_IPAddressFilter(); // tt_IPAddressFilter IPAddressFilter{};
    }

    write(obj, w){
        w.write(obj, "tds", "IPAddressFilter", this.IPAddressFilter);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "IPAddressFilter", this.IPAddressFilter)) return false;
        return true;
    }
}
export class tds_SetIPAddressFilter extends types.xsd_type
{
    constructor(){
        super();
        this.IPAddressFilter = new tt_IPAddressFilter(); // tt_IPAddressFilter IPAddressFilter{};
    }

    write(obj, w){
        w.write(obj, "tds", "IPAddressFilter", this.IPAddressFilter);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "IPAddressFilter", this.IPAddressFilter)) return false;
        return true;
    }
}
export class tds_SetIPAddressFilterResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_AddIPAddressFilter extends types.xsd_type
{
    constructor(){
        super();
        this.IPAddressFilter = new tt_IPAddressFilter(); // tt_IPAddressFilter IPAddressFilter{};
    }

    write(obj, w){
        w.write(obj, "tds", "IPAddressFilter", this.IPAddressFilter);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "IPAddressFilter", this.IPAddressFilter)) return false;
        return true;
    }
}
export class tds_AddIPAddressFilterResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_RemoveIPAddressFilter extends types.xsd_type
{
    constructor(){
        super();
        this.IPAddressFilter = new tt_IPAddressFilter(); // tt_IPAddressFilter IPAddressFilter{};
    }

    write(obj, w){
        w.write(obj, "tds", "IPAddressFilter", this.IPAddressFilter);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "IPAddressFilter", this.IPAddressFilter)) return false;
        return true;
    }
}
export class tds_RemoveIPAddressFilterResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetAccessPolicy extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetAccessPolicyResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PolicyFile = new tt_BinaryData(); // tt_BinaryData PolicyFile{};
    }

    write(obj, w){
        w.write(obj, "tds", "PolicyFile", this.PolicyFile);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "PolicyFile", this.PolicyFile)) return false;
        return true;
    }
}
export class tds_SetAccessPolicy extends types.xsd_type
{
    constructor(){
        super();
        this.PolicyFile = new tt_BinaryData(); // tt_BinaryData PolicyFile{};
    }

    write(obj, w){
        w.write(obj, "tds", "PolicyFile", this.PolicyFile);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "PolicyFile", this.PolicyFile)) return false;
        return true;
    }
}
export class tds_SetAccessPolicyResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_CreateCertificate extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); this.CertificateID['isP'] = true; // xsd_token* CertificateID{};
        this.Subject = new xsd_string(); this.Subject['isP'] = true; // xsd_string* Subject{};
        this.ValidNotBefore = new xsd_dateTime(); this.ValidNotBefore['isP'] = true; // xsd_dateTime* ValidNotBefore{};
        this.ValidNotAfter = new xsd_dateTime(); this.ValidNotAfter['isP'] = true; // xsd_dateTime* ValidNotAfter{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateID", this.CertificateID);
        w.write(obj, "tds", "Subject", this.Subject);
        w.write(obj, "tds", "ValidNotBefore", this.ValidNotBefore);
        w.write(obj, "tds", "ValidNotAfter", this.ValidNotAfter);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tds", "Subject", this.Subject)) return false;
        if (!r.read(obj, "tds", "ValidNotBefore", this.ValidNotBefore)) return false;
        if (!r.read(obj, "tds", "ValidNotAfter", this.ValidNotAfter)) return false;
        return true;
    }
}
export class tds_CreateCertificateResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NvtCertificate = new tt_Certificate(); // tt_Certificate NvtCertificate{};
    }

    write(obj, w){
        w.write(obj, "tds", "NvtCertificate", this.NvtCertificate);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NvtCertificate", this.NvtCertificate)) return false;
        return true;
    }
}
export class tds_GetCertificates extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetCertificatesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NvtCertificate = new types.xsd_list(tt_Certificate); // xsd_list<tt_Certificate> NvtCertificate{};
    }

    write(obj, w){
        w.write(obj, "tds", "NvtCertificate", this.NvtCertificate);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NvtCertificate", this.NvtCertificate)) return false;
        return true;
    }
}
export class tds_GetCertificatesStatus extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetCertificatesStatusResponse extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateStatus = new types.xsd_list(tt_CertificateStatus); // xsd_list<tt_CertificateStatus> CertificateStatus{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateStatus", this.CertificateStatus);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateStatus", this.CertificateStatus)) return false;
        return true;
    }
}
export class tds_SetCertificatesStatus extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateStatus = new types.xsd_list(tt_CertificateStatus); // xsd_list<tt_CertificateStatus> CertificateStatus{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateStatus", this.CertificateStatus);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateStatus", this.CertificateStatus)) return false;
        return true;
    }
}
export class tds_SetCertificatesStatusResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_DeleteCertificates extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new types.xsd_list(xsd_token); // xsd_list<xsd_token> CertificateID{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateID", this.CertificateID);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateID", this.CertificateID)) return false;
        return true;
    }
}
export class tds_DeleteCertificatesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetPkcs10Request extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); // xsd_token CertificateID{};
        this.Subject = new xsd_string(); this.Subject['isP'] = true; // xsd_string* Subject{};
        this.Attributes = new tt_BinaryData(); this.Attributes['isP'] = true; // tt_BinaryData* Attributes{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateID", this.CertificateID);
        w.write(obj, "tds", "Subject", this.Subject);
        w.write(obj, "tds", "Attributes", this.Attributes);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateID", this.CertificateID)) return false;
        if (!r.read(obj, "tds", "Subject", this.Subject)) return false;
        if (!r.read(obj, "tds", "Attributes", this.Attributes)) return false;
        return true;
    }
}
export class tds_GetPkcs10RequestResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Pkcs10Request = new tt_BinaryData(); // tt_BinaryData Pkcs10Request{};
    }

    write(obj, w){
        w.write(obj, "tds", "Pkcs10Request", this.Pkcs10Request);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Pkcs10Request", this.Pkcs10Request)) return false;
        return true;
    }
}
export class tds_LoadCertificates extends types.xsd_type
{
    constructor(){
        super();
        this.NVTCertificate = new types.xsd_list(tt_Certificate); // xsd_list<tt_Certificate> NVTCertificate{};
    }

    write(obj, w){
        w.write(obj, "tds", "NVTCertificate", this.NVTCertificate);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "NVTCertificate", this.NVTCertificate)) return false;
        return true;
    }
}
export class tds_LoadCertificatesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetClientCertificateMode extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetClientCertificateModeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
    }

    write(obj, w){
        w.write(obj, "tds", "Enabled", this.Enabled);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Enabled", this.Enabled)) return false;
        return true;
    }
}
export class tds_SetClientCertificateMode extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
    }

    write(obj, w){
        w.write(obj, "tds", "Enabled", this.Enabled);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Enabled", this.Enabled)) return false;
        return true;
    }
}
export class tds_SetClientCertificateModeResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetRelayOutputs extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetRelayOutputsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.RelayOutputs = new types.xsd_list(tt_RelayOutput); // xsd_list<tt_RelayOutput> RelayOutputs{};
    }

    write(obj, w){
        w.write(obj, "tds", "RelayOutputs", this.RelayOutputs);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RelayOutputs", this.RelayOutputs)) return false;
        return true;
    }
}
export class tds_SetRelayOutputSettings extends types.xsd_type
{
    constructor(){
        super();
        this.RelayOutputToken = new tt_ReferenceToken(); // tt_ReferenceToken RelayOutputToken{};
        this.Properties = new tt_RelayOutputSettings(); // tt_RelayOutputSettings Properties{};
    }

    write(obj, w){
        w.write(obj, "tds", "RelayOutputToken", this.RelayOutputToken);
        w.write(obj, "tds", "Properties", this.Properties);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RelayOutputToken", this.RelayOutputToken)) return false;
        if (!r.read(obj, "tds", "Properties", this.Properties)) return false;
        return true;
    }
}
export class tds_SetRelayOutputSettingsResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_SetRelayOutputState extends types.xsd_type
{
    constructor(){
        super();
        this.RelayOutputToken = new tt_ReferenceToken(); // tt_ReferenceToken RelayOutputToken{};
        this.LogicalState = new tt_RelayLogicalState(); // tt_RelayLogicalState LogicalState{};
    }

    write(obj, w){
        w.write(obj, "tds", "RelayOutputToken", this.RelayOutputToken);
        w.write(obj, "tds", "LogicalState", this.LogicalState);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "RelayOutputToken", this.RelayOutputToken)) return false;
        if (!r.read(obj, "tds", "LogicalState", this.LogicalState)) return false;
        return true;
    }
}
export class tds_SetRelayOutputStateResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_SendAuxiliaryCommand extends types.xsd_type
{
    constructor(){
        super();
        this.AuxiliaryCommand = new tt_AuxiliaryData(); // tt_AuxiliaryData AuxiliaryCommand{};
    }

    write(obj, w){
        w.write(obj, "tds", "AuxiliaryCommand", this.AuxiliaryCommand);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "AuxiliaryCommand", this.AuxiliaryCommand)) return false;
        return true;
    }
}
export class tds_SendAuxiliaryCommandResponse extends types.xsd_type
{
    constructor(){
        super();
        this.AuxiliaryCommandResponse = new tt_AuxiliaryData(); this.AuxiliaryCommandResponse['isP'] = true; // tt_AuxiliaryData* AuxiliaryCommandResponse{};
    }

    write(obj, w){
        w.write(obj, "tds", "AuxiliaryCommandResponse", this.AuxiliaryCommandResponse);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "AuxiliaryCommandResponse", this.AuxiliaryCommandResponse)) return false;
        return true;
    }
}
export class tds_GetCACertificates extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetCACertificatesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.CACertificate = new types.xsd_list(tt_Certificate); // xsd_list<tt_Certificate> CACertificate{};
    }

    write(obj, w){
        w.write(obj, "tds", "CACertificate", this.CACertificate);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CACertificate", this.CACertificate)) return false;
        return true;
    }
}
export class tds_LoadCertificateWithPrivateKey extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateWithPrivateKey = new types.xsd_list(tt_CertificateWithPrivateKey); // xsd_list<tt_CertificateWithPrivateKey> CertificateWithPrivateKey{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateWithPrivateKey", this.CertificateWithPrivateKey);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateWithPrivateKey", this.CertificateWithPrivateKey)) return false;
        return true;
    }
}
export class tds_LoadCertificateWithPrivateKeyResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetCertificateInformation extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateID = new xsd_token(); // xsd_token CertificateID{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateID", this.CertificateID);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateID", this.CertificateID)) return false;
        return true;
    }
}
export class tds_GetCertificateInformationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.CertificateInformation = new tt_CertificateInformation(); // tt_CertificateInformation CertificateInformation{};
    }

    write(obj, w){
        w.write(obj, "tds", "CertificateInformation", this.CertificateInformation);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CertificateInformation", this.CertificateInformation)) return false;
        return true;
    }
}
export class tds_LoadCACertificates extends types.xsd_type
{
    constructor(){
        super();
        this.CACertificate = new types.xsd_list(tt_Certificate); // xsd_list<tt_Certificate> CACertificate{};
    }

    write(obj, w){
        w.write(obj, "tds", "CACertificate", this.CACertificate);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "CACertificate", this.CACertificate)) return false;
        return true;
    }
}
export class tds_LoadCACertificatesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_CreateDot1XConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfiguration = new tt_Dot1XConfiguration(); // tt_Dot1XConfiguration Dot1XConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration)) return false;
        return true;
    }
}
export class tds_CreateDot1XConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_SetDot1XConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfiguration = new tt_Dot1XConfiguration(); // tt_Dot1XConfiguration Dot1XConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration)) return false;
        return true;
    }
}
export class tds_SetDot1XConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDot1XConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken Dot1XConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tds", "Dot1XConfigurationToken", this.Dot1XConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Dot1XConfigurationToken", this.Dot1XConfigurationToken)) return false;
        return true;
    }
}
export class tds_GetDot1XConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfiguration = new tt_Dot1XConfiguration(); // tt_Dot1XConfiguration Dot1XConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration)) return false;
        return true;
    }
}
export class tds_GetDot1XConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDot1XConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfiguration = new types.xsd_list(tt_Dot1XConfiguration); // xsd_list<tt_Dot1XConfiguration> Dot1XConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Dot1XConfiguration", this.Dot1XConfiguration)) return false;
        return true;
    }
}
export class tds_DeleteDot1XConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Dot1XConfigurationToken = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> Dot1XConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tds", "Dot1XConfigurationToken", this.Dot1XConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Dot1XConfigurationToken", this.Dot1XConfigurationToken)) return false;
        return true;
    }
}
export class tds_DeleteDot1XConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_GetDot11Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "", this.any)) return false;
        return true;
    }
}
export class tds_GetDot11CapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tt_Dot11Capabilities(); // tt_Dot11Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tds", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tds_GetDot11Status extends types.xsd_type
{
    constructor(){
        super();
        this.InterfaceToken = new tt_ReferenceToken(); // tt_ReferenceToken InterfaceToken{};
    }

    write(obj, w){
        w.write(obj, "tds", "InterfaceToken", this.InterfaceToken);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "InterfaceToken", this.InterfaceToken)) return false;
        return true;
    }
}
export class tds_GetDot11StatusResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Status = new tt_Dot11Status(); // tt_Dot11Status Status{};
    }

    write(obj, w){
        w.write(obj, "tds", "Status", this.Status);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Status", this.Status)) return false;
        return true;
    }
}
export class tds_ScanAvailableDot11Networks extends types.xsd_type
{
    constructor(){
        super();
        this.InterfaceToken = new tt_ReferenceToken(); // tt_ReferenceToken InterfaceToken{};
    }

    write(obj, w){
        w.write(obj, "tds", "InterfaceToken", this.InterfaceToken);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "InterfaceToken", this.InterfaceToken)) return false;
        return true;
    }
}
export class tds_ScanAvailableDot11NetworksResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Networks = new types.xsd_list(tt_Dot11AvailableNetworks); // xsd_list<tt_Dot11AvailableNetworks> Networks{};
    }

    write(obj, w){
        w.write(obj, "tds", "Networks", this.Networks);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Networks", this.Networks)) return false;
        return true;
    }
}
export class tds_GetSystemUris extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_Extension_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "", this.any)) return false;
        return true;
    }
}
export class tds_GetSystemUrisResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SystemLogUris = new tt_SystemLogUriList(); this.SystemLogUris['isP'] = true; // tt_SystemLogUriList* SystemLogUris{};
        this.SupportInfoUri = new xsd_anyURI(); this.SupportInfoUri['isP'] = true; // xsd_anyURI* SupportInfoUri{};
        this.SystemBackupUri = new xsd_anyURI(); this.SystemBackupUri['isP'] = true; // xsd_anyURI* SystemBackupUri{};
        this.Extension = new tds_Extension_0(); this.Extension['isP'] = true; // tds_Extension_0* Extension{};
    }

    write(obj, w){
        w.write(obj, "tds", "SystemLogUris", this.SystemLogUris);
        w.write(obj, "tds", "SupportInfoUri", this.SupportInfoUri);
        w.write(obj, "tds", "SystemBackupUri", this.SystemBackupUri);
        w.write(obj, "tds", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "SystemLogUris", this.SystemLogUris)) return false;
        if (!r.read(obj, "tds", "SupportInfoUri", this.SupportInfoUri)) return false;
        if (!r.read(obj, "tds", "SystemBackupUri", this.SystemBackupUri)) return false;
        if (!r.read(obj, "tds", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tds_StartFirmwareUpgrade extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_StartFirmwareUpgradeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.UploadUri = new xsd_anyURI(); // xsd_anyURI UploadUri{};
        this.UploadDelay = new xsd_duration(); // xsd_duration UploadDelay{};
        this.ExpectedDownTime = new xsd_duration(); // xsd_duration ExpectedDownTime{};
    }

    write(obj, w){
        w.write(obj, "tds", "UploadUri", this.UploadUri);
        w.write(obj, "tds", "UploadDelay", this.UploadDelay);
        w.write(obj, "tds", "ExpectedDownTime", this.ExpectedDownTime);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "UploadUri", this.UploadUri)) return false;
        if (!r.read(obj, "tds", "UploadDelay", this.UploadDelay)) return false;
        if (!r.read(obj, "tds", "ExpectedDownTime", this.ExpectedDownTime)) return false;
        return true;
    }
}
export class tds_StartSystemRestore extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_StartSystemRestoreResponse extends types.xsd_type
{
    constructor(){
        super();
        this.UploadUri = new xsd_anyURI(); // xsd_anyURI UploadUri{};
        this.ExpectedDownTime = new xsd_duration(); // xsd_duration ExpectedDownTime{};
    }

    write(obj, w){
        w.write(obj, "tds", "UploadUri", this.UploadUri);
        w.write(obj, "tds", "ExpectedDownTime", this.ExpectedDownTime);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "UploadUri", this.UploadUri)) return false;
        if (!r.read(obj, "tds", "ExpectedDownTime", this.ExpectedDownTime)) return false;
        return true;
    }
}
export class tds_GetStorageConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_UserCredential extends types.xsd_type
{
    constructor(){
        super();
        this.UserName = new xsd_string(); // xsd_string UserName{};
        this.Password = new xsd_string(); this.Password['isP'] = true; // xsd_string* Password{};
        this.Extension = new tds_Extension_0(); this.Extension['isP'] = true; // tds_Extension_0* Extension{};
    }

    write(obj, w){
        w.write(obj, "tds", "UserName", this.UserName);
        w.write(obj, "tds", "Password", this.Password);
        w.write(obj, "tds", "Extension", this.Extension);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "UserName", this.UserName)) return false;
        if (!r.read(obj, "tds", "Password", this.Password)) return false;
        if (!r.read(obj, "tds", "Extension", this.Extension)) return false;
        return true;
    }
}
export class tds_StorageConfigurationData extends types.xsd_type
{
    constructor(){
        super();
        this.LocalPath = new xsd_anyURI(); this.LocalPath['isP'] = true; // xsd_anyURI* LocalPath{};
        this.StorageUri = new xsd_anyURI(); this.StorageUri['isP'] = true; // xsd_anyURI* StorageUri{};
        this.User = new tds_UserCredential(); this.User['isP'] = true; // tds_UserCredential* User{};
        this.Extension = new tds_Extension_0(); this.Extension['isP'] = true; // tds_Extension_0* Extension{};
        this.type = new xsd_string(); // xsd_string type{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tds", "LocalPath", this.LocalPath);
        w.write(obj, "tds", "StorageUri", this.StorageUri);
        w.write(obj, "tds", "User", this.User);
        w.write(obj, "tds", "Extension", this.Extension);
        w.write_attribute(obj, "type", this.type);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "LocalPath", this.LocalPath)) return false;
        if (!r.read(obj, "tds", "StorageUri", this.StorageUri)) return false;
        if (!r.read(obj, "tds", "User", this.User)) return false;
        if (!r.read(obj, "tds", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "type", this.type)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tds_StorageConfiguration extends tt_DeviceEntity
{
    constructor(){
        super();
        this.Data = new tds_StorageConfigurationData(); // tds_StorageConfigurationData Data{};
    }

    write(obj, w){
        tt_DeviceEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tds", "Data", this.Data);
    }

    read(obj, r){
        if (!tt_DeviceEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tds", "Data", this.Data)) return false;
        return true;
    }
}
export class tds_GetStorageConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.StorageConfigurations = new types.xsd_list(tds_StorageConfiguration); // xsd_list<tds_StorageConfiguration> StorageConfigurations{};
    }

    write(obj, w){
        w.write(obj, "tds", "StorageConfigurations", this.StorageConfigurations);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "StorageConfigurations", this.StorageConfigurations)) return false;
        return true;
    }
}
export class tds_CreateStorageConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.StorageConfiguration = new tds_StorageConfigurationData(); // tds_StorageConfigurationData StorageConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "StorageConfiguration", this.StorageConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "StorageConfiguration", this.StorageConfiguration)) return false;
        return true;
    }
}
export class tds_CreateStorageConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tds", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Token", this.Token)) return false;
        return true;
    }
}
export class tds_GetStorageConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tds", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Token", this.Token)) return false;
        return true;
    }
}
export class tds_GetStorageConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.StorageConfiguration = new tds_StorageConfiguration(); // tds_StorageConfiguration StorageConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "StorageConfiguration", this.StorageConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "StorageConfiguration", this.StorageConfiguration)) return false;
        return true;
    }
}
export class tds_SetStorageConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.StorageConfiguration = new tds_StorageConfiguration(); // tds_StorageConfiguration StorageConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tds", "StorageConfiguration", this.StorageConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "StorageConfiguration", this.StorageConfiguration)) return false;
        return true;
    }
}
export class tds_SetStorageConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tds_DeleteStorageConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tds", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tds", "Token", this.Token)) return false;
        return true;
    }
}
export class tds_DeleteStorageConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tev_PullMessages extends types.xsd_type
{
    constructor(){
        super();
        this.Timeout = new xsd_duration(); // xsd_duration Timeout{};
        this.MessageLimit = new xsd_int_(); // xsd_int_ MessageLimit{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tev", "Timeout", this.Timeout);
        w.write(obj, "tev", "MessageLimit", this.MessageLimit);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "Timeout", this.Timeout)) return false;
        if (!r.read(obj, "tev", "MessageLimit", this.MessageLimit)) return false;
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class tev_PullMessagesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.CurrentTime = new xsd_dateTime(); // xsd_dateTime CurrentTime{};
        this.TerminationTime = new xsd_dateTime(); // xsd_dateTime TerminationTime{};
        this.NotificationMessage = new types.xsd_list(wsnt_NotificationMessageHolderType); // xsd_list<wsnt_NotificationMessageHolderType> NotificationMessage{};
    }

    write(obj, w){
        w.write(obj, "tev", "CurrentTime", this.CurrentTime);
        w.write(obj, "tev", "TerminationTime", this.TerminationTime);
        w.write(obj, "tev", "NotificationMessage", this.NotificationMessage);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "CurrentTime", this.CurrentTime)) return false;
        if (!r.read(obj, "tev", "TerminationTime", this.TerminationTime)) return false;
        if (!r.read(obj, "tev", "NotificationMessage", this.NotificationMessage)) return false;
        return true;
    }
}
export class tev_PullMessagesFaultResponse extends types.xsd_type
{
    constructor(){
        super();
        this.MaxTimeout = new xsd_duration(); // xsd_duration MaxTimeout{};
        this.MaxMessageLimit = new xsd_int_(); // xsd_int_ MaxMessageLimit{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tev", "MaxTimeout", this.MaxTimeout);
        w.write(obj, "tev", "MaxMessageLimit", this.MaxMessageLimit);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "MaxTimeout", this.MaxTimeout)) return false;
        if (!r.read(obj, "tev", "MaxMessageLimit", this.MaxMessageLimit)) return false;
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class tev_Seek extends types.xsd_type
{
    constructor(){
        super();
        this.UtcTime = new xsd_dateTime(); // xsd_dateTime UtcTime{};
        this.Reverse = new xsd_boolean(); this.Reverse['isP'] = true; // xsd_boolean* Reverse{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tev", "UtcTime", this.UtcTime);
        w.write(obj, "tev", "Reverse", this.Reverse);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "UtcTime", this.UtcTime)) return false;
        if (!r.read(obj, "tev", "Reverse", this.Reverse)) return false;
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class tev_SeekResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tev_SetSynchronizationPoint extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tev_SetSynchronizationPointResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tev_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tev_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.WSSubscriptionPolicySupport = new xsd_boolean(); this.WSSubscriptionPolicySupport['isP'] = true; // xsd_boolean* WSSubscriptionPolicySupport{};
        this.WSPullPointSupport = new xsd_boolean(); this.WSPullPointSupport['isP'] = true; // xsd_boolean* WSPullPointSupport{};
        this.WSPausableSubscriptionManagerInterfaceSupport = new xsd_boolean(); this.WSPausableSubscriptionManagerInterfaceSupport['isP'] = true; // xsd_boolean* WSPausableSubscriptionManagerInterfaceSupport{};
        this.MaxNotificationProducers = new xsd_int_(); this.MaxNotificationProducers['isP'] = true; // xsd_int_* MaxNotificationProducers{};
        this.MaxPullPoints = new xsd_int_(); this.MaxPullPoints['isP'] = true; // xsd_int_* MaxPullPoints{};
        this.PersistentNotificationStorage = new xsd_boolean(); this.PersistentNotificationStorage['isP'] = true; // xsd_boolean* PersistentNotificationStorage{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "WSSubscriptionPolicySupport", this.WSSubscriptionPolicySupport);
        w.write_attribute(obj, "WSPullPointSupport", this.WSPullPointSupport);
        w.write_attribute(obj, "WSPausableSubscriptionManagerInterfaceSupport", this.WSPausableSubscriptionManagerInterfaceSupport);
        w.write_attribute(obj, "MaxNotificationProducers", this.MaxNotificationProducers);
        w.write_attribute(obj, "MaxPullPoints", this.MaxPullPoints);
        w.write_attribute(obj, "PersistentNotificationStorage", this.PersistentNotificationStorage);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "", this.any)) return false;
        if (!r.read_attribute(obj, "WSSubscriptionPolicySupport", this.WSSubscriptionPolicySupport)) return false;
        if (!r.read_attribute(obj, "WSPullPointSupport", this.WSPullPointSupport)) return false;
        if (!r.read_attribute(obj, "WSPausableSubscriptionManagerInterfaceSupport", this.WSPausableSubscriptionManagerInterfaceSupport)) return false;
        if (!r.read_attribute(obj, "MaxNotificationProducers", this.MaxNotificationProducers)) return false;
        if (!r.read_attribute(obj, "MaxPullPoints", this.MaxPullPoints)) return false;
        if (!r.read_attribute(obj, "PersistentNotificationStorage", this.PersistentNotificationStorage)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tev_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tev_Capabilities(); // tev_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tev", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tev_SubscriptionPolicy_0 extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class tev_CreatePullPointSubscription extends types.xsd_type
{
    constructor(){
        super();
        this.Filter = new wsnt_FilterType(); this.Filter['isP'] = true; // wsnt_FilterType* Filter{};
        this.InitialTerminationTime = new wsnt_AbsoluteOrRelativeTimeType(); this.InitialTerminationTime['isP'] = true; // wsnt_AbsoluteOrRelativeTimeType* InitialTerminationTime{};
        this.SubscriptionPolicy = new tev_SubscriptionPolicy_0(); this.SubscriptionPolicy['isP'] = true; // tev_SubscriptionPolicy_0* SubscriptionPolicy{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tev", "Filter", this.Filter);
        w.write(obj, "tev", "InitialTerminationTime", this.InitialTerminationTime);
        w.write(obj, "tev", "SubscriptionPolicy", this.SubscriptionPolicy);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "Filter", this.Filter)) return false;
        if (!r.read(obj, "tev", "InitialTerminationTime", this.InitialTerminationTime)) return false;
        if (!r.read(obj, "tev", "SubscriptionPolicy", this.SubscriptionPolicy)) return false;
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class tev_CreatePullPointSubscriptionResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SubscriptionReference = new wsa5_EndpointReferenceType(); // wsa5_EndpointReferenceType SubscriptionReference{};
        this.CurrentTime = new xsd_dateTime(); // xsd_dateTime CurrentTime{};
        this.TerminationTime = new xsd_dateTime(); // xsd_dateTime TerminationTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tev", "SubscriptionReference", this.SubscriptionReference);
        w.write(obj, "tev", "CurrentTime", this.CurrentTime);
        w.write(obj, "tev", "TerminationTime", this.TerminationTime);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "SubscriptionReference", this.SubscriptionReference)) return false;
        if (!r.read(obj, "tev", "CurrentTime", this.CurrentTime)) return false;
        if (!r.read(obj, "tev", "TerminationTime", this.TerminationTime)) return false;
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class tev_GetEventProperties extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tev_GetEventPropertiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.TopicNamespaceLocation = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> TopicNamespaceLocation{};
        this.FixedTopicSet = new xsd_boolean(); // xsd_boolean FixedTopicSet{};
        this.TopicSet = new wstop_TopicSetType(); // wstop_TopicSetType TopicSet{};
        this.TopicExpressionDialect = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> TopicExpressionDialect{};
        this.MessageContentFilterDialect = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> MessageContentFilterDialect{};
        this.ProducerPropertiesFilterDialect = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> ProducerPropertiesFilterDialect{};
        this.MessageContentSchemaLocation = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> MessageContentSchemaLocation{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tev", "TopicNamespaceLocation", this.TopicNamespaceLocation);
        w.write(obj, "tev", "FixedTopicSet", this.FixedTopicSet);
        w.write(obj, "tev", "TopicSet", this.TopicSet);
        w.write(obj, "tev", "TopicExpressionDialect", this.TopicExpressionDialect);
        w.write(obj, "tev", "MessageContentFilterDialect", this.MessageContentFilterDialect);
        w.write(obj, "tev", "ProducerPropertiesFilterDialect", this.ProducerPropertiesFilterDialect);
        w.write(obj, "tev", "MessageContentSchemaLocation", this.MessageContentSchemaLocation);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tev", "TopicNamespaceLocation", this.TopicNamespaceLocation)) return false;
        if (!r.read(obj, "tev", "FixedTopicSet", this.FixedTopicSet)) return false;
        if (!r.read(obj, "tev", "TopicSet", this.TopicSet)) return false;
        if (!r.read(obj, "tev", "TopicExpressionDialect", this.TopicExpressionDialect)) return false;
        if (!r.read(obj, "tev", "MessageContentFilterDialect", this.MessageContentFilterDialect)) return false;
        if (!r.read(obj, "tev", "ProducerPropertiesFilterDialect", this.ProducerPropertiesFilterDialect)) return false;
        if (!r.read(obj, "tev", "MessageContentSchemaLocation", this.MessageContentSchemaLocation)) return false;
        if (!r.read(obj, "tev", "", this.any)) return false;
        return true;
    }
}
export class timg_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class timg_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.ImageStabilization = new xsd_boolean(); this.ImageStabilization['isP'] = true; // xsd_boolean* ImageStabilization{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "ImageStabilization", this.ImageStabilization);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "", this.any)) return false;
        if (!r.read_attribute(obj, "ImageStabilization", this.ImageStabilization)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class timg_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new timg_Capabilities(); // timg_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "timg", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class timg_GetImagingSettings extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class timg_GetImagingSettingsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ImagingSettings = new tt_ImagingSettings20(); // tt_ImagingSettings20 ImagingSettings{};
    }

    write(obj, w){
        w.write(obj, "timg", "ImagingSettings", this.ImagingSettings);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "ImagingSettings", this.ImagingSettings)) return false;
        return true;
    }
}
export class timg_SetImagingSettings extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
        this.ImagingSettings = new tt_ImagingSettings20(); // tt_ImagingSettings20 ImagingSettings{};
        this.ForcePersistence = new xsd_boolean(); this.ForcePersistence['isP'] = true; // xsd_boolean* ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
        w.write(obj, "timg", "ImagingSettings", this.ImagingSettings);
        w.write(obj, "timg", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        if (!r.read(obj, "timg", "ImagingSettings", this.ImagingSettings)) return false;
        if (!r.read(obj, "timg", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class timg_SetImagingSettingsResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class timg_GetOptions extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class timg_GetOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ImagingOptions = new tt_ImagingOptions20(); // tt_ImagingOptions20 ImagingOptions{};
    }

    write(obj, w){
        w.write(obj, "timg", "ImagingOptions", this.ImagingOptions);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "ImagingOptions", this.ImagingOptions)) return false;
        return true;
    }
}
export class timg_Move extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
        this.Focus = new tt_FocusMove(); // tt_FocusMove Focus{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
        w.write(obj, "timg", "Focus", this.Focus);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        if (!r.read(obj, "timg", "Focus", this.Focus)) return false;
        return true;
    }
}
export class timg_MoveResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class timg_Stop extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class timg_StopResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class timg_GetStatus extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class timg_GetStatusResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Status = new tt_ImagingStatus20(); // tt_ImagingStatus20 Status{};
    }

    write(obj, w){
        w.write(obj, "timg", "Status", this.Status);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "Status", this.Status)) return false;
        return true;
    }
}
export class timg_GetMoveOptions extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "timg", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class timg_GetMoveOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.MoveOptions = new tt_MoveOptions20(); // tt_MoveOptions20 MoveOptions{};
    }

    write(obj, w){
        w.write(obj, "timg", "MoveOptions", this.MoveOptions);
    }

    read(obj, r){
        if (!r.read(obj, "timg", "MoveOptions", this.MoveOptions)) return false;
        return true;
    }
}
export class trt_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_ProfileCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.MaximumNumberOfProfiles = new xsd_int_(); this.MaximumNumberOfProfiles['isP'] = true; // xsd_int_* MaximumNumberOfProfiles{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "MaximumNumberOfProfiles", this.MaximumNumberOfProfiles);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "", this.any)) return false;
        if (!r.read_attribute(obj, "MaximumNumberOfProfiles", this.MaximumNumberOfProfiles)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class trt_StreamingCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.RTPMulticast = new xsd_boolean(); this.RTPMulticast['isP'] = true; // xsd_boolean* RTPMulticast{};
        this.RTP_TCP = new xsd_boolean(); this.RTP_TCP['isP'] = true; // xsd_boolean* RTP_TCP{};
        this.RTP_RTSP_TCP = new xsd_boolean(); this.RTP_RTSP_TCP['isP'] = true; // xsd_boolean* RTP_RTSP_TCP{};
        this.NonAggregateControl = new xsd_boolean(); this.NonAggregateControl['isP'] = true; // xsd_boolean* NonAggregateControl{};
        this.NoRTSPStreaming = new xsd_boolean(); this.NoRTSPStreaming['isP'] = true; // xsd_boolean* NoRTSPStreaming{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "RTPMulticast", this.RTPMulticast);
        w.write_attribute(obj, "RTP_TCP", this.RTP_TCP);
        w.write_attribute(obj, "RTP_RTSP_TCP", this.RTP_RTSP_TCP);
        w.write_attribute(obj, "NonAggregateControl", this.NonAggregateControl);
        w.write_attribute(obj, "NoRTSPStreaming", this.NoRTSPStreaming);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "", this.any)) return false;
        if (!r.read_attribute(obj, "RTPMulticast", this.RTPMulticast)) return false;
        if (!r.read_attribute(obj, "RTP_TCP", this.RTP_TCP)) return false;
        if (!r.read_attribute(obj, "RTP_RTSP_TCP", this.RTP_RTSP_TCP)) return false;
        if (!r.read_attribute(obj, "NonAggregateControl", this.NonAggregateControl)) return false;
        if (!r.read_attribute(obj, "NoRTSPStreaming", this.NoRTSPStreaming)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class trt_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileCapabilities = new trt_ProfileCapabilities(); // trt_ProfileCapabilities ProfileCapabilities{};
        this.StreamingCapabilities = new trt_StreamingCapabilities(); // trt_StreamingCapabilities StreamingCapabilities{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.SnapshotUri = new xsd_boolean(); this.SnapshotUri['isP'] = true; // xsd_boolean* SnapshotUri{};
        this.Rotation = new xsd_boolean(); this.Rotation['isP'] = true; // xsd_boolean* Rotation{};
        this.VideoSourceMode = new xsd_boolean(); this.VideoSourceMode['isP'] = true; // xsd_boolean* VideoSourceMode{};
        this.OSD = new xsd_boolean(); this.OSD['isP'] = true; // xsd_boolean* OSD{};
        this.EXICompression = new xsd_boolean(); this.EXICompression['isP'] = true; // xsd_boolean* EXICompression{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileCapabilities", this.ProfileCapabilities);
        w.write(obj, "trt", "StreamingCapabilities", this.StreamingCapabilities);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "SnapshotUri", this.SnapshotUri);
        w.write_attribute(obj, "Rotation", this.Rotation);
        w.write_attribute(obj, "VideoSourceMode", this.VideoSourceMode);
        w.write_attribute(obj, "OSD", this.OSD);
        w.write_attribute(obj, "EXICompression", this.EXICompression);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileCapabilities", this.ProfileCapabilities)) return false;
        if (!r.read(obj, "trt", "StreamingCapabilities", this.StreamingCapabilities)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        if (!r.read_attribute(obj, "SnapshotUri", this.SnapshotUri)) return false;
        if (!r.read_attribute(obj, "Rotation", this.Rotation)) return false;
        if (!r.read_attribute(obj, "VideoSourceMode", this.VideoSourceMode)) return false;
        if (!r.read_attribute(obj, "OSD", this.OSD)) return false;
        if (!r.read_attribute(obj, "EXICompression", this.EXICompression)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class trt_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new trt_Capabilities(); // trt_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "trt", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class trt_GetVideoSources extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetVideoSourcesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSources = new types.xsd_list(tt_VideoSource); // xsd_list<tt_VideoSource> VideoSources{};
    }

    write(obj, w){
        w.write(obj, "trt", "VideoSources", this.VideoSources);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "VideoSources", this.VideoSources)) return false;
        return true;
    }
}
export class trt_GetAudioSources extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetAudioSourcesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.AudioSources = new types.xsd_list(tt_AudioSource); // xsd_list<tt_AudioSource> AudioSources{};
    }

    write(obj, w){
        w.write(obj, "trt", "AudioSources", this.AudioSources);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "AudioSources", this.AudioSources)) return false;
        return true;
    }
}
export class trt_GetAudioOutputs extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetAudioOutputsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.AudioOutputs = new types.xsd_list(tt_AudioOutput); // xsd_list<tt_AudioOutput> AudioOutputs{};
    }

    write(obj, w){
        w.write(obj, "trt", "AudioOutputs", this.AudioOutputs);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "AudioOutputs", this.AudioOutputs)) return false;
        return true;
    }
}
export class trt_CreateProfile extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.Token = new tt_ReferenceToken(); this.Token['isP'] = true; // tt_ReferenceToken* Token{};
    }

    write(obj, w){
        w.write(obj, "trt", "Name", this.Name);
        w.write(obj, "trt", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Name", this.Name)) return false;
        if (!r.read(obj, "trt", "Token", this.Token)) return false;
        return true;
    }
}
export class trt_CreateProfileResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Profile = new tt_Profile(); // tt_Profile Profile{};
    }

    write(obj, w){
        w.write(obj, "trt", "Profile", this.Profile);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Profile", this.Profile)) return false;
        return true;
    }
}
export class trt_GetProfile extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetProfileResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Profile = new tt_Profile(); // tt_Profile Profile{};
    }

    write(obj, w){
        w.write(obj, "trt", "Profile", this.Profile);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Profile", this.Profile)) return false;
        return true;
    }
}
export class trt_GetProfiles extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetProfilesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Profiles = new types.xsd_list(tt_Profile); // xsd_list<tt_Profile> Profiles{};
    }

    write(obj, w){
        w.write(obj, "trt", "Profiles", this.Profiles);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Profiles", this.Profiles)) return false;
        return true;
    }
}
export class trt_AddVideoEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddVideoEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddVideoSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddVideoSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddAudioEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddAudioEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddAudioSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddAudioSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddPTZConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddPTZConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddVideoAnalyticsConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddVideoAnalyticsConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddMetadataConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddMetadataConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddAudioOutputConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddAudioOutputConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_AddAudioDecoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_AddAudioDecoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveVideoEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveVideoEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveVideoSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveVideoSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveAudioEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveAudioEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveAudioSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveAudioSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemovePTZConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemovePTZConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveVideoAnalyticsConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveVideoAnalyticsConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveMetadataConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveMetadataConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveAudioOutputConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveAudioOutputConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_RemoveAudioDecoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_RemoveAudioDecoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_DeleteProfile extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_DeleteProfileResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetVideoSourceConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetVideoSourceConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoSourceConfiguration); // xsd_list<tt_VideoSourceConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetVideoEncoderConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetVideoEncoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoEncoderConfiguration); // xsd_list<tt_VideoEncoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetAudioSourceConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetAudioSourceConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioSourceConfiguration); // xsd_list<tt_AudioSourceConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetAudioEncoderConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetAudioEncoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioEncoderConfiguration); // xsd_list<tt_AudioEncoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetVideoAnalyticsConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetVideoAnalyticsConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoAnalyticsConfiguration); // xsd_list<tt_VideoAnalyticsConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetMetadataConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetMetadataConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_MetadataConfiguration); // xsd_list<tt_MetadataConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetAudioOutputConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetAudioOutputConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioOutputConfiguration); // xsd_list<tt_AudioOutputConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetAudioDecoderConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetAudioDecoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioDecoderConfiguration); // xsd_list<tt_AudioDecoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetVideoSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetVideoSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoSourceConfiguration(); // tt_VideoSourceConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetVideoEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetVideoEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoEncoderConfiguration(); // tt_VideoEncoderConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetAudioSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetAudioSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioSourceConfiguration(); // tt_AudioSourceConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetAudioEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetAudioEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioEncoderConfiguration(); // tt_AudioEncoderConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetVideoAnalyticsConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetVideoAnalyticsConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoAnalyticsConfiguration(); // tt_VideoAnalyticsConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetMetadataConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetMetadataConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_MetadataConfiguration(); // tt_MetadataConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetAudioOutputConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetAudioOutputConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioOutputConfiguration(); // tt_AudioOutputConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetAudioDecoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetAudioDecoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioDecoderConfiguration(); // tt_AudioDecoderConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class trt_GetCompatibleVideoEncoderConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleVideoEncoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoEncoderConfiguration); // xsd_list<tt_VideoEncoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleVideoSourceConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleVideoSourceConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoSourceConfiguration); // xsd_list<tt_VideoSourceConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioEncoderConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioEncoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioEncoderConfiguration); // xsd_list<tt_AudioEncoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioSourceConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioSourceConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioSourceConfiguration); // xsd_list<tt_AudioSourceConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleVideoAnalyticsConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleVideoAnalyticsConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoAnalyticsConfiguration); // xsd_list<tt_VideoAnalyticsConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleMetadataConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleMetadataConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_MetadataConfiguration); // xsd_list<tt_MetadataConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioOutputConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioOutputConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioOutputConfiguration); // xsd_list<tt_AudioOutputConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioDecoderConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetCompatibleAudioDecoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioDecoderConfiguration); // xsd_list<tt_AudioDecoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class trt_SetVideoSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoSourceConfiguration(); // tt_VideoSourceConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetVideoSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetVideoEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoEncoderConfiguration(); // tt_VideoEncoderConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetVideoEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetAudioSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioSourceConfiguration(); // tt_AudioSourceConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetAudioSourceConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetAudioEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioEncoderConfiguration(); // tt_AudioEncoderConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetAudioEncoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetVideoAnalyticsConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoAnalyticsConfiguration(); // tt_VideoAnalyticsConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetVideoAnalyticsConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetMetadataConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_MetadataConfiguration(); // tt_MetadataConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetMetadataConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetAudioOutputConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioOutputConfiguration(); // tt_AudioOutputConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetAudioOutputConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetAudioDecoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioDecoderConfiguration(); // tt_AudioDecoderConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "trt", "Configuration", this.Configuration);
        w.write(obj, "trt", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "trt", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class trt_SetAudioDecoderConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetVideoSourceConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetVideoSourceConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_VideoSourceConfigurationOptions(); // tt_VideoSourceConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetVideoEncoderConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetVideoEncoderConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_VideoEncoderConfigurationOptions(); // tt_VideoEncoderConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetAudioSourceConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetAudioSourceConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_AudioSourceConfigurationOptions(); // tt_AudioSourceConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetAudioEncoderConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetAudioEncoderConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_AudioEncoderConfigurationOptions(); // tt_AudioEncoderConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetMetadataConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetMetadataConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_MetadataConfigurationOptions(); // tt_MetadataConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetAudioOutputConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetAudioOutputConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_AudioOutputConfigurationOptions(); // tt_AudioOutputConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetAudioDecoderConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetAudioDecoderConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_AudioDecoderConfigurationOptions(); // tt_AudioDecoderConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "trt", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Options", this.Options)) return false;
        return true;
    }
}
export class trt_GetGuaranteedNumberOfVideoEncoderInstances extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetGuaranteedNumberOfVideoEncoderInstancesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.TotalNumber = new xsd_int_(); // xsd_int_ TotalNumber{};
        this.JPEG = new xsd_int_(); this.JPEG['isP'] = true; // xsd_int_* JPEG{};
        this.H264 = new xsd_int_(); this.H264['isP'] = true; // xsd_int_* H264{};
        this.MPEG4 = new xsd_int_(); this.MPEG4['isP'] = true; // xsd_int_* MPEG4{};
    }

    write(obj, w){
        w.write(obj, "trt", "TotalNumber", this.TotalNumber);
        w.write(obj, "trt", "JPEG", this.JPEG);
        w.write(obj, "trt", "H264", this.H264);
        w.write(obj, "trt", "MPEG4", this.MPEG4);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "TotalNumber", this.TotalNumber)) return false;
        if (!r.read(obj, "trt", "JPEG", this.JPEG)) return false;
        if (!r.read(obj, "trt", "H264", this.H264)) return false;
        if (!r.read(obj, "trt", "MPEG4", this.MPEG4)) return false;
        return true;
    }
}
export class trt_GetStreamUri extends types.xsd_type
{
    constructor(){
        super();
        this.StreamSetup = new tt_StreamSetup(); // tt_StreamSetup StreamSetup{};
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "StreamSetup", this.StreamSetup);
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "StreamSetup", this.StreamSetup)) return false;
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetStreamUriResponse extends types.xsd_type
{
    constructor(){
        super();
        this.MediaUri = new tt_MediaUri(); // tt_MediaUri MediaUri{};
    }

    write(obj, w){
        w.write(obj, "trt", "MediaUri", this.MediaUri);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "MediaUri", this.MediaUri)) return false;
        return true;
    }
}
export class trt_StartMulticastStreaming extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_StartMulticastStreamingResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_StopMulticastStreaming extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_StopMulticastStreamingResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_SetSynchronizationPoint extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_SetSynchronizationPointResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class trt_GetSnapshotUri extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class trt_GetSnapshotUriResponse extends types.xsd_type
{
    constructor(){
        super();
        this.MediaUri = new tt_MediaUri(); // tt_MediaUri MediaUri{};
    }

    write(obj, w){
        w.write(obj, "trt", "MediaUri", this.MediaUri);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "MediaUri", this.MediaUri)) return false;
        return true;
    }
}
export class trt_GetVideoSourceModes extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export const trt_EncodingTypes = new types.xsd_simplelist(xsd_string); // xsd_simplelist<xsd_string>;
export class trt_VideoSourceModeExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_VideoSourceMode extends types.xsd_type
{
    constructor(){
        super();
        this.MaxFramerate = new xsd_float_(); // xsd_float_ MaxFramerate{};
        this.MaxResolution = new tt_VideoResolution(); // tt_VideoResolution MaxResolution{};
        this.Encodings = new trt_EncodingTypes(); // trt_EncodingTypes Encodings{};
        this.Reboot = new xsd_boolean(); // xsd_boolean Reboot{};
        this.Description = new tt_Description(); this.Description['isP'] = true; // tt_Description* Description{};
        this.Extension = new trt_VideoSourceModeExtension(); this.Extension['isP'] = true; // trt_VideoSourceModeExtension* Extension{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
        this.Enabled = new xsd_boolean(); this.Enabled['isP'] = true; // xsd_boolean* Enabled{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "trt", "MaxFramerate", this.MaxFramerate);
        w.write(obj, "trt", "MaxResolution", this.MaxResolution);
        w.write(obj, "trt", "Encodings", this.Encodings);
        w.write(obj, "trt", "Reboot", this.Reboot);
        w.write(obj, "trt", "Description", this.Description);
        w.write(obj, "trt", "Extension", this.Extension);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "Enabled", this.Enabled);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "MaxFramerate", this.MaxFramerate)) return false;
        if (!r.read(obj, "trt", "MaxResolution", this.MaxResolution)) return false;
        if (!r.read(obj, "trt", "Encodings", this.Encodings)) return false;
        if (!r.read(obj, "trt", "Reboot", this.Reboot)) return false;
        if (!r.read(obj, "trt", "Description", this.Description)) return false;
        if (!r.read(obj, "trt", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "Enabled", this.Enabled)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class trt_GetVideoSourceModesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceModes = new types.xsd_list(trt_VideoSourceMode); // xsd_list<trt_VideoSourceMode> VideoSourceModes{};
    }

    write(obj, w){
        w.write(obj, "trt", "VideoSourceModes", this.VideoSourceModes);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "VideoSourceModes", this.VideoSourceModes)) return false;
        return true;
    }
}
export class trt_SetVideoSourceMode extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
        this.VideoSourceModeToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceModeToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "VideoSourceToken", this.VideoSourceToken);
        w.write(obj, "trt", "VideoSourceModeToken", this.VideoSourceModeToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "VideoSourceToken", this.VideoSourceToken)) return false;
        if (!r.read(obj, "trt", "VideoSourceModeToken", this.VideoSourceModeToken)) return false;
        return true;
    }
}
export class trt_SetVideoSourceModeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Reboot = new xsd_boolean(); // xsd_boolean Reboot{};
    }

    write(obj, w){
        w.write(obj, "trt", "Reboot", this.Reboot);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "Reboot", this.Reboot)) return false;
        return true;
    }
}
export class trt_GetOSDs extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class trt_GetOSDsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSDs = new types.xsd_list(tt_OSDConfiguration); // xsd_list<tt_OSDConfiguration> OSDs{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSDs", this.OSDs);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSDs", this.OSDs)) return false;
        return true;
    }
}
export class trt_GetOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSDToken = new tt_ReferenceToken(); // tt_ReferenceToken OSDToken{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSDToken", this.OSDToken);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSDToken", this.OSDToken)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_GetOSDResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSD = new tt_OSDConfiguration(); // tt_OSDConfiguration OSD{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSD", this.OSD);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSD", this.OSD)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_GetOSDOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_GetOSDOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSDOptions = new tt_OSDConfigurationOptions(); // tt_OSDConfigurationOptions OSDOptions{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSDOptions", this.OSDOptions);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSDOptions", this.OSDOptions)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_SetOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSD = new tt_OSDConfiguration(); // tt_OSDConfiguration OSD{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSD", this.OSD);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSD", this.OSD)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_SetOSDResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_CreateOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSD = new tt_OSDConfiguration(); // tt_OSDConfiguration OSD{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSD", this.OSD);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSD", this.OSD)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_CreateOSDResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSDToken = new tt_ReferenceToken(); // tt_ReferenceToken OSDToken{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSDToken", this.OSDToken);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSDToken", this.OSDToken)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_DeleteOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSDToken = new tt_ReferenceToken(); // tt_ReferenceToken OSDToken{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "trt", "OSDToken", this.OSDToken);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "OSDToken", this.OSDToken)) return false;
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class trt_DeleteOSDResponse extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "trt", "", this.any)) return false;
        return true;
    }
}
export class tr2_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tr2_ProfileCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.MaximumNumberOfProfiles = new xsd_int_(); this.MaximumNumberOfProfiles['isP'] = true; // xsd_int_* MaximumNumberOfProfiles{};
        this.ConfigurationsSupported = new tt_StringAttrList(); this.ConfigurationsSupported['isP'] = true; // tt_StringAttrList* ConfigurationsSupported{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "MaximumNumberOfProfiles", this.MaximumNumberOfProfiles);
        w.write_attribute(obj, "ConfigurationsSupported", this.ConfigurationsSupported);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "", this.any)) return false;
        if (!r.read_attribute(obj, "MaximumNumberOfProfiles", this.MaximumNumberOfProfiles)) return false;
        if (!r.read_attribute(obj, "ConfigurationsSupported", this.ConfigurationsSupported)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_StreamingCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.RTSPStreaming = new xsd_boolean(); this.RTSPStreaming['isP'] = true; // xsd_boolean* RTSPStreaming{};
        this.RTPMulticast = new xsd_boolean(); this.RTPMulticast['isP'] = true; // xsd_boolean* RTPMulticast{};
        this.RTP_RTSP_TCP = new xsd_boolean(); this.RTP_RTSP_TCP['isP'] = true; // xsd_boolean* RTP_RTSP_TCP{};
        this.NonAggregateControl = new xsd_boolean(); this.NonAggregateControl['isP'] = true; // xsd_boolean* NonAggregateControl{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "RTSPStreaming", this.RTSPStreaming);
        w.write_attribute(obj, "RTPMulticast", this.RTPMulticast);
        w.write_attribute(obj, "RTP_RTSP_TCP", this.RTP_RTSP_TCP);
        w.write_attribute(obj, "NonAggregateControl", this.NonAggregateControl);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "", this.any)) return false;
        if (!r.read_attribute(obj, "RTSPStreaming", this.RTSPStreaming)) return false;
        if (!r.read_attribute(obj, "RTPMulticast", this.RTPMulticast)) return false;
        if (!r.read_attribute(obj, "RTP_RTSP_TCP", this.RTP_RTSP_TCP)) return false;
        if (!r.read_attribute(obj, "NonAggregateControl", this.NonAggregateControl)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_Capabilities2 extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileCapabilities = new tr2_ProfileCapabilities(); // tr2_ProfileCapabilities ProfileCapabilities{};
        this.StreamingCapabilities = new tr2_StreamingCapabilities(); // tr2_StreamingCapabilities StreamingCapabilities{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.SnapshotUri = new xsd_boolean(); this.SnapshotUri['isP'] = true; // xsd_boolean* SnapshotUri{};
        this.Rotation = new xsd_boolean(); this.Rotation['isP'] = true; // xsd_boolean* Rotation{};
        this.VideoSourceMode = new xsd_boolean(); this.VideoSourceMode['isP'] = true; // xsd_boolean* VideoSourceMode{};
        this.OSD = new xsd_boolean(); this.OSD['isP'] = true; // xsd_boolean* OSD{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ProfileCapabilities", this.ProfileCapabilities);
        w.write(obj, "tr2", "StreamingCapabilities", this.StreamingCapabilities);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "SnapshotUri", this.SnapshotUri);
        w.write_attribute(obj, "Rotation", this.Rotation);
        w.write_attribute(obj, "VideoSourceMode", this.VideoSourceMode);
        w.write_attribute(obj, "OSD", this.OSD);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ProfileCapabilities", this.ProfileCapabilities)) return false;
        if (!r.read(obj, "tr2", "StreamingCapabilities", this.StreamingCapabilities)) return false;
        if (!r.read(obj, "tr2", "", this.any)) return false;
        if (!r.read_attribute(obj, "SnapshotUri", this.SnapshotUri)) return false;
        if (!r.read_attribute(obj, "Rotation", this.Rotation)) return false;
        if (!r.read_attribute(obj, "VideoSourceMode", this.VideoSourceMode)) return false;
        if (!r.read_attribute(obj, "OSD", this.OSD)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_GetServiceCapabilitiesResponse2 extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tr2_Capabilities2(); // tr2_Capabilities2 Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tr2_ConfigurationRef extends types.xsd_type
{
    constructor(){
        super();
        this.Type = new xsd_string(); // xsd_string Type{};
        this.Token = new tt_ReferenceToken(); this.Token['isP'] = true; // tt_ReferenceToken* Token{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Type", this.Type);
        w.write(obj, "tr2", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Type", this.Type)) return false;
        if (!r.read(obj, "tr2", "Token", this.Token)) return false;
        return true;
    }
}
export class tr2_CreateProfile extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.Configuration = new types.xsd_list(tr2_ConfigurationRef); // xsd_list<tr2_ConfigurationRef> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Name", this.Name);
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Name", this.Name)) return false;
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_CreateProfileResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Token", this.Token)) return false;
        return true;
    }
}
export class tr2_GetProfiles extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new tt_ReferenceToken(); this.Token['isP'] = true; // tt_ReferenceToken* Token{};
        this.Type = new types.xsd_list(xsd_string); // xsd_list<xsd_string> Type{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Token", this.Token);
        w.write(obj, "tr2", "Type", this.Type);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Token", this.Token)) return false;
        if (!r.read(obj, "tr2", "Type", this.Type)) return false;
        return true;
    }
}
export class tr2_ConfigurationSet extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSource = new tt_VideoSourceConfiguration(); this.VideoSource['isP'] = true; // tt_VideoSourceConfiguration* VideoSource{};
        this.AudioSource = new tt_AudioSourceConfiguration(); this.AudioSource['isP'] = true; // tt_AudioSourceConfiguration* AudioSource{};
        this.VideoEncoder = new tt_VideoEncoder2Configuration(); this.VideoEncoder['isP'] = true; // tt_VideoEncoder2Configuration* VideoEncoder{};
        this.AudioEncoder = new tt_AudioEncoder2Configuration(); this.AudioEncoder['isP'] = true; // tt_AudioEncoder2Configuration* AudioEncoder{};
        this.Analytics = new tt_ConfigurationEntity(); this.Analytics['isP'] = true; // tt_ConfigurationEntity* Analytics{};
        this.PTZ = new tt_PTZConfiguration(); this.PTZ['isP'] = true; // tt_PTZConfiguration* PTZ{};
        this.Metadata = new tt_MetadataConfiguration(); this.Metadata['isP'] = true; // tt_MetadataConfiguration* Metadata{};
        this.AudioOutput = new tt_AudioOutputConfiguration(); this.AudioOutput['isP'] = true; // tt_AudioOutputConfiguration* AudioOutput{};
        this.AudioDecoder = new tt_AudioDecoderConfiguration(); this.AudioDecoder['isP'] = true; // tt_AudioDecoderConfiguration* AudioDecoder{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "VideoSource", this.VideoSource);
        w.write(obj, "tr2", "AudioSource", this.AudioSource);
        w.write(obj, "tr2", "VideoEncoder", this.VideoEncoder);
        w.write(obj, "tr2", "AudioEncoder", this.AudioEncoder);
        w.write(obj, "tr2", "Analytics", this.Analytics);
        w.write(obj, "tr2", "PTZ", this.PTZ);
        w.write(obj, "tr2", "Metadata", this.Metadata);
        w.write(obj, "tr2", "AudioOutput", this.AudioOutput);
        w.write(obj, "tr2", "AudioDecoder", this.AudioDecoder);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "VideoSource", this.VideoSource)) return false;
        if (!r.read(obj, "tr2", "AudioSource", this.AudioSource)) return false;
        if (!r.read(obj, "tr2", "VideoEncoder", this.VideoEncoder)) return false;
        if (!r.read(obj, "tr2", "AudioEncoder", this.AudioEncoder)) return false;
        if (!r.read(obj, "tr2", "Analytics", this.Analytics)) return false;
        if (!r.read(obj, "tr2", "PTZ", this.PTZ)) return false;
        if (!r.read(obj, "tr2", "Metadata", this.Metadata)) return false;
        if (!r.read(obj, "tr2", "AudioOutput", this.AudioOutput)) return false;
        if (!r.read(obj, "tr2", "AudioDecoder", this.AudioDecoder)) return false;
        if (!r.read(obj, "tr2", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_MediaProfile extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.Configurations = new tr2_ConfigurationSet(); // tr2_ConfigurationSet Configurations{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
        this.fixed = new xsd_boolean(); this.fixed['isP'] = true; // xsd_boolean* fixed{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Name", this.Name);
        w.write(obj, "tr2", "Configurations", this.Configurations);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "fixed", this.fixed);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Name", this.Name)) return false;
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "fixed", this.fixed)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_GetProfilesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Profiles = new types.xsd_list(tr2_MediaProfile); // xsd_list<tr2_MediaProfile> Profiles{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Profiles", this.Profiles);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Profiles", this.Profiles)) return false;
        return true;
    }
}
export class tr2_AddConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.Name = new tt_Name(); this.Name['isP'] = true; // tt_Name* Name{};
        this.Configuration = new types.xsd_list(tr2_ConfigurationRef); // xsd_list<tr2_ConfigurationRef> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
        w.write(obj, "tr2", "Name", this.Name);
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tr2", "Name", this.Name)) return false;
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_AddConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tr2_RemoveConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.Configuration = new types.xsd_list(tr2_ConfigurationRef); // xsd_list<tr2_ConfigurationRef> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_RemoveConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tr2_DeleteProfile extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Token", this.Token)) return false;
        return true;
    }
}
export class tr2_DeleteProfileResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tr2_GetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
        this.ProfileToken = new tt_ReferenceToken(); this.ProfileToken['isP'] = true; // tt_ReferenceToken* ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export const tr2_GetVideoSourceConfigurations = tr2_GetConfiguration; // using elem "GetConfiguration"
export class tr2_GetVideoSourceConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoSourceConfiguration); // xsd_list<tt_VideoSourceConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetVideoEncoderConfigurations = tr2_GetConfiguration; // using elem "GetVideoSourceConfigurationsResponse"
export class tr2_GetVideoEncoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoEncoder2Configuration); // xsd_list<tt_VideoEncoder2Configuration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetAudioSourceConfigurations = tr2_GetConfiguration; // using elem "GetVideoEncoderConfigurationsResponse"
export class tr2_GetAudioSourceConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioSourceConfiguration); // xsd_list<tt_AudioSourceConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetAudioEncoderConfigurations = tr2_GetConfiguration; // using elem "GetAudioSourceConfigurationsResponse"
export class tr2_GetAudioEncoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioEncoder2Configuration); // xsd_list<tt_AudioEncoder2Configuration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetAnalyticsConfigurations = tr2_GetConfiguration; // using elem "GetAudioEncoderConfigurationsResponse"
export class tr2_GetAnalyticsConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_VideoAnalyticsConfiguration); // xsd_list<tt_VideoAnalyticsConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetMetadataConfigurations = tr2_GetConfiguration; // using elem "GetAnalyticsConfigurationsResponse"
export class tr2_GetMetadataConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_MetadataConfiguration); // xsd_list<tt_MetadataConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetAudioOutputConfigurations = tr2_GetConfiguration; // using elem "GetMetadataConfigurationsResponse"
export class tr2_GetAudioOutputConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioOutputConfiguration); // xsd_list<tt_AudioOutputConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export const tr2_GetAudioDecoderConfigurations = tr2_GetConfiguration; // using elem "GetAudioOutputConfigurationsResponse"
export class tr2_GetAudioDecoderConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configurations = new types.xsd_list(tt_AudioDecoderConfiguration); // xsd_list<tt_AudioDecoderConfiguration> Configurations{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configurations", this.Configurations);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configurations", this.Configurations)) return false;
        return true;
    }
}
export class tr2_SetVideoSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoSourceConfiguration(); // tt_VideoSourceConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_SetConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tr2_SetVideoEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoEncoder2Configuration(); // tt_VideoEncoder2Configuration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_SetAudioSourceConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioSourceConfiguration(); // tt_AudioSourceConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_SetAudioEncoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioEncoder2Configuration(); // tt_AudioEncoder2Configuration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_SetMetadataConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_MetadataConfiguration(); // tt_MetadataConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_SetAudioOutputConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioOutputConfiguration(); // tt_AudioOutputConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tr2_SetAudioDecoderConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AudioDecoderConfiguration(); // tt_AudioDecoderConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export const tr2_GetVideoSourceConfigurationOptions = tr2_GetConfiguration; // using elem "SetAudioDecoderConfiguration"
export class tr2_GetVideoSourceConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_VideoSourceConfigurationOptions(); // tt_VideoSourceConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export const tr2_GetVideoEncoderConfigurationOptions = tr2_GetConfiguration; // using elem "GetVideoSourceConfigurationOptionsResponse"
export class tr2_GetVideoEncoderConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new types.xsd_list(tt_VideoEncoder2ConfigurationOptions); // xsd_list<tt_VideoEncoder2ConfigurationOptions> Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export const tr2_GetAudioSourceConfigurationOptions = tr2_GetConfiguration; // using elem "GetVideoEncoderConfigurationOptionsResponse"
export class tr2_GetAudioSourceConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_AudioSourceConfigurationOptions(); // tt_AudioSourceConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export const tr2_GetAudioEncoderConfigurationOptions = tr2_GetConfiguration; // using elem "GetAudioSourceConfigurationOptionsResponse"
export class tr2_GetAudioEncoderConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new types.xsd_list(tt_AudioEncoder2ConfigurationOptions); // xsd_list<tt_AudioEncoder2ConfigurationOptions> Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export const tr2_GetMetadataConfigurationOptions = tr2_GetConfiguration; // using elem "GetAudioEncoderConfigurationOptionsResponse"
export class tr2_GetMetadataConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_MetadataConfigurationOptions(); // tt_MetadataConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export const tr2_GetAudioOutputConfigurationOptions = tr2_GetConfiguration; // using elem "GetMetadataConfigurationOptionsResponse"
export class tr2_GetAudioOutputConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_AudioOutputConfigurationOptions(); // tt_AudioOutputConfigurationOptions Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export const tr2_GetAudioDecoderConfigurationOptions = tr2_GetConfiguration; // using elem "GetAudioOutputConfigurationOptionsResponse"
export class tr2_GetAudioDecoderConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new types.xsd_list(tt_AudioEncoder2ConfigurationOptions); // xsd_list<tt_AudioEncoder2ConfigurationOptions> Options{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Options", this.Options)) return false;
        return true;
    }
}
export class tr2_GetVideoEncoderInstances extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tr2_EncoderInstance extends types.xsd_type
{
    constructor(){
        super();
        this.Encoding = new xsd_string(); // xsd_string Encoding{};
        this.Number = new xsd_int_(); // xsd_int_ Number{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Encoding", this.Encoding);
        w.write(obj, "tr2", "Number", this.Number);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Encoding", this.Encoding)) return false;
        if (!r.read(obj, "tr2", "Number", this.Number)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_EncoderInstanceInfo extends types.xsd_type
{
    constructor(){
        super();
        this.Codec = new types.xsd_list(tr2_EncoderInstance); // xsd_list<tr2_EncoderInstance> Codec{};
        this.Total = new xsd_int_(); // xsd_int_ Total{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Codec", this.Codec);
        w.write(obj, "tr2", "Total", this.Total);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Codec", this.Codec)) return false;
        if (!r.read(obj, "tr2", "Total", this.Total)) return false;
        if (!r.read(obj, "tr2", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_GetVideoEncoderInstancesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Info = new tr2_EncoderInstanceInfo(); // tr2_EncoderInstanceInfo Info{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Info", this.Info);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Info", this.Info)) return false;
        return true;
    }
}
export class tr2_GetStreamUri extends types.xsd_type
{
    constructor(){
        super();
        this.Protocol = new xsd_string(); // xsd_string Protocol{};
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Protocol", this.Protocol);
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Protocol", this.Protocol)) return false;
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tr2_GetStreamUriResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Uri = new xsd_anyURI(); // xsd_anyURI Uri{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Uri", this.Uri);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Uri", this.Uri)) return false;
        return true;
    }
}
export class tr2_StartStopMulticastStreaming extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export const tr2_StartMulticastStreaming = tr2_StartStopMulticastStreaming; // using elem "StartStopMulticastStreaming"
export class tr2_StartStopMulticastStreamingResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export const tr2_StopMulticastStreaming = tr2_StartStopMulticastStreaming; // using elem "StartStopMulticastStreamingResponse"
export class tr2_SetSynchronizationPoint extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tr2_SetSynchronizationPointResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tr2_GetSnapshotUri extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tr2_GetSnapshotUriResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Uri = new xsd_anyURI(); // xsd_anyURI Uri{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Uri", this.Uri);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Uri", this.Uri)) return false;
        return true;
    }
}
export class tr2_GetVideoSourceModes extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export const tr2_EncodingTypes = new types.xsd_simplelist(xsd_string); // xsd_simplelist<xsd_string>;
export class tr2_VideoSourceMode extends types.xsd_type
{
    constructor(){
        super();
        this.MaxFramerate = new xsd_float_(); // xsd_float_ MaxFramerate{};
        this.MaxResolution = new tt_VideoResolution(); // tt_VideoResolution MaxResolution{};
        this.Encodings = new tr2_EncodingTypes(); // tr2_EncodingTypes Encodings{};
        this.Reboot = new xsd_boolean(); // xsd_boolean Reboot{};
        this.Description = new tt_Description(); this.Description['isP'] = true; // tt_Description* Description{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
        this.Enabled = new xsd_boolean(); this.Enabled['isP'] = true; // xsd_boolean* Enabled{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "MaxFramerate", this.MaxFramerate);
        w.write(obj, "tr2", "MaxResolution", this.MaxResolution);
        w.write(obj, "tr2", "Encodings", this.Encodings);
        w.write(obj, "tr2", "Reboot", this.Reboot);
        w.write(obj, "tr2", "Description", this.Description);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "Enabled", this.Enabled);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "MaxFramerate", this.MaxFramerate)) return false;
        if (!r.read(obj, "tr2", "MaxResolution", this.MaxResolution)) return false;
        if (!r.read(obj, "tr2", "Encodings", this.Encodings)) return false;
        if (!r.read(obj, "tr2", "Reboot", this.Reboot)) return false;
        if (!r.read(obj, "tr2", "Description", this.Description)) return false;
        if (!r.read(obj, "tr2", "", this.any)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "Enabled", this.Enabled)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tr2_GetVideoSourceModesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceModes = new types.xsd_list(tr2_VideoSourceMode); // xsd_list<tr2_VideoSourceMode> VideoSourceModes{};
    }

    write(obj, w){
        w.write(obj, "tr2", "VideoSourceModes", this.VideoSourceModes);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "VideoSourceModes", this.VideoSourceModes)) return false;
        return true;
    }
}
export class tr2_SetVideoSourceMode extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
        this.VideoSourceModeToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceModeToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "VideoSourceToken", this.VideoSourceToken);
        w.write(obj, "tr2", "VideoSourceModeToken", this.VideoSourceModeToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "VideoSourceToken", this.VideoSourceToken)) return false;
        if (!r.read(obj, "tr2", "VideoSourceModeToken", this.VideoSourceModeToken)) return false;
        return true;
    }
}
export class tr2_SetVideoSourceModeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Reboot = new xsd_boolean(); // xsd_boolean Reboot{};
    }

    write(obj, w){
        w.write(obj, "tr2", "Reboot", this.Reboot);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "Reboot", this.Reboot)) return false;
        return true;
    }
}
export class tr2_GetOSDs extends types.xsd_type
{
    constructor(){
        super();
        this.OSDToken = new tt_ReferenceToken(); this.OSDToken['isP'] = true; // tt_ReferenceToken* OSDToken{};
        this.ConfigurationToken = new tt_ReferenceToken(); this.ConfigurationToken['isP'] = true; // tt_ReferenceToken* ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSDToken", this.OSDToken);
        w.write(obj, "tr2", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSDToken", this.OSDToken)) return false;
        if (!r.read(obj, "tr2", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tr2_GetOSDsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSDs = new types.xsd_list(tt_OSDConfiguration); // xsd_list<tt_OSDConfiguration> OSDs{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSDs", this.OSDs);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSDs", this.OSDs)) return false;
        return true;
    }
}
export class tr2_GetOSDOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tr2_GetOSDOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSDOptions = new tt_OSDConfigurationOptions(); // tt_OSDConfigurationOptions OSDOptions{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSDOptions", this.OSDOptions);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSDOptions", this.OSDOptions)) return false;
        return true;
    }
}
export class tr2_SetOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSD = new tt_OSDConfiguration(); // tt_OSDConfiguration OSD{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSD", this.OSD);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSD", this.OSD)) return false;
        return true;
    }
}
export class tr2_CreateOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSD = new tt_OSDConfiguration(); // tt_OSDConfiguration OSD{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSD", this.OSD);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSD", this.OSD)) return false;
        return true;
    }
}
export class tr2_CreateOSDResponse extends types.xsd_type
{
    constructor(){
        super();
        this.OSDToken = new tt_ReferenceToken(); // tt_ReferenceToken OSDToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSDToken", this.OSDToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSDToken", this.OSDToken)) return false;
        return true;
    }
}
export class tr2_DeleteOSD extends types.xsd_type
{
    constructor(){
        super();
        this.OSDToken = new tt_ReferenceToken(); // tt_ReferenceToken OSDToken{};
    }

    write(obj, w){
        w.write(obj, "tr2", "OSDToken", this.OSDToken);
    }

    read(obj, r){
        if (!r.read(obj, "tr2", "OSDToken", this.OSDToken)) return false;
        return true;
    }
}
export class tptz_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.EFlip = new xsd_boolean(); this.EFlip['isP'] = true; // xsd_boolean* EFlip{};
        this.Reverse = new xsd_boolean(); this.Reverse['isP'] = true; // xsd_boolean* Reverse{};
        this.GetCompatibleConfigurations = new xsd_boolean(); this.GetCompatibleConfigurations['isP'] = true; // xsd_boolean* GetCompatibleConfigurations{};
        this.MoveStatus = new xsd_boolean(); this.MoveStatus['isP'] = true; // xsd_boolean* MoveStatus{};
        this.StatusPosition = new xsd_boolean(); this.StatusPosition['isP'] = true; // xsd_boolean* StatusPosition{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "EFlip", this.EFlip);
        w.write_attribute(obj, "Reverse", this.Reverse);
        w.write_attribute(obj, "GetCompatibleConfigurations", this.GetCompatibleConfigurations);
        w.write_attribute(obj, "MoveStatus", this.MoveStatus);
        w.write_attribute(obj, "StatusPosition", this.StatusPosition);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "", this.any)) return false;
        if (!r.read_attribute(obj, "EFlip", this.EFlip)) return false;
        if (!r.read_attribute(obj, "Reverse", this.Reverse)) return false;
        if (!r.read_attribute(obj, "GetCompatibleConfigurations", this.GetCompatibleConfigurations)) return false;
        if (!r.read_attribute(obj, "MoveStatus", this.MoveStatus)) return false;
        if (!r.read_attribute(obj, "StatusPosition", this.StatusPosition)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tptz_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tptz_Capabilities(); // tptz_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tptz", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tptz_GetConfigurations extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GetConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZConfiguration = new types.xsd_list(tt_PTZConfiguration); // xsd_list<tt_PTZConfiguration> PTZConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZConfiguration", this.PTZConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZConfiguration", this.PTZConfiguration)) return false;
        return true;
    }
}
export class tptz_GetPresets extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tptz_GetPresetsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Preset = new types.xsd_list(tt_PTZPreset); // xsd_list<tt_PTZPreset> Preset{};
    }

    write(obj, w){
        w.write(obj, "tptz", "Preset", this.Preset);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "Preset", this.Preset)) return false;
        return true;
    }
}
export class tptz_SetPreset extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetName = new xsd_string(); this.PresetName['isP'] = true; // xsd_string* PresetName{};
        this.PresetToken = new tt_ReferenceToken(); this.PresetToken['isP'] = true; // tt_ReferenceToken* PresetToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetName", this.PresetName);
        w.write(obj, "tptz", "PresetToken", this.PresetToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetName", this.PresetName)) return false;
        if (!r.read(obj, "tptz", "PresetToken", this.PresetToken)) return false;
        return true;
    }
}
export class tptz_SetPresetResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PresetToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PresetToken", this.PresetToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PresetToken", this.PresetToken)) return false;
        return true;
    }
}
export class tptz_RemovePreset extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetToken", this.PresetToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetToken", this.PresetToken)) return false;
        return true;
    }
}
export class tptz_RemovePresetResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GotoPreset extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetToken{};
        this.Speed = new tt_PTZSpeed(); this.Speed['isP'] = true; // tt_PTZSpeed* Speed{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetToken", this.PresetToken);
        w.write(obj, "tptz", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetToken", this.PresetToken)) return false;
        if (!r.read(obj, "tptz", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tptz_GotoPresetResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GetStatus extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tptz_GetStatusResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZStatus = new tt_PTZStatus(); // tt_PTZStatus PTZStatus{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZStatus", this.PTZStatus);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZStatus", this.PTZStatus)) return false;
        return true;
    }
}
export class tptz_GetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.PTZConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken PTZConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZConfigurationToken", this.PTZConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZConfigurationToken", this.PTZConfigurationToken)) return false;
        return true;
    }
}
export class tptz_GetConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZConfiguration = new tt_PTZConfiguration(); // tt_PTZConfiguration PTZConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZConfiguration", this.PTZConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZConfiguration", this.PTZConfiguration)) return false;
        return true;
    }
}
export class tptz_GetNodes extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GetNodesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZNode = new types.xsd_list(tt_PTZNode); // xsd_list<tt_PTZNode> PTZNode{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZNode", this.PTZNode);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZNode", this.PTZNode)) return false;
        return true;
    }
}
export class tptz_GetNode extends types.xsd_type
{
    constructor(){
        super();
        this.NodeToken = new tt_ReferenceToken(); // tt_ReferenceToken NodeToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "NodeToken", this.NodeToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "NodeToken", this.NodeToken)) return false;
        return true;
    }
}
export class tptz_GetNodeResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZNode = new tt_PTZNode(); // tt_PTZNode PTZNode{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZNode", this.PTZNode);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZNode", this.PTZNode)) return false;
        return true;
    }
}
export class tptz_SetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.PTZConfiguration = new tt_PTZConfiguration(); // tt_PTZConfiguration PTZConfiguration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZConfiguration", this.PTZConfiguration);
        w.write(obj, "tptz", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZConfiguration", this.PTZConfiguration)) return false;
        if (!r.read(obj, "tptz", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class tptz_SetConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GetConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tptz_GetConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZConfigurationOptions = new tt_PTZConfigurationOptions(); // tt_PTZConfigurationOptions PTZConfigurationOptions{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZConfigurationOptions", this.PTZConfigurationOptions);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZConfigurationOptions", this.PTZConfigurationOptions)) return false;
        return true;
    }
}
export class tptz_GotoHomePosition extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.Speed = new tt_PTZSpeed(); this.Speed['isP'] = true; // tt_PTZSpeed* Speed{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tptz_GotoHomePositionResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_SetHomePosition extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tptz_SetHomePositionResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_ContinuousMove extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.Velocity = new tt_PTZSpeed(); // tt_PTZSpeed Velocity{};
        this.Timeout = new xsd_duration(); this.Timeout['isP'] = true; // xsd_duration* Timeout{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "Velocity", this.Velocity);
        w.write(obj, "tptz", "Timeout", this.Timeout);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "Velocity", this.Velocity)) return false;
        if (!r.read(obj, "tptz", "Timeout", this.Timeout)) return false;
        return true;
    }
}
export class tptz_ContinuousMoveResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_RelativeMove extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.Translation = new tt_PTZVector(); // tt_PTZVector Translation{};
        this.Speed = new tt_PTZSpeed(); this.Speed['isP'] = true; // tt_PTZSpeed* Speed{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "Translation", this.Translation);
        w.write(obj, "tptz", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "Translation", this.Translation)) return false;
        if (!r.read(obj, "tptz", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tptz_RelativeMoveResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_SendAuxiliaryCommand extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.AuxiliaryData = new tt_AuxiliaryData(); // tt_AuxiliaryData AuxiliaryData{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "AuxiliaryData", this.AuxiliaryData);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "AuxiliaryData", this.AuxiliaryData)) return false;
        return true;
    }
}
export class tptz_SendAuxiliaryCommandResponse extends types.xsd_type
{
    constructor(){
        super();
        this.AuxiliaryResponse = new tt_AuxiliaryData(); // tt_AuxiliaryData AuxiliaryResponse{};
    }

    write(obj, w){
        w.write(obj, "tptz", "AuxiliaryResponse", this.AuxiliaryResponse);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "AuxiliaryResponse", this.AuxiliaryResponse)) return false;
        return true;
    }
}
export class tptz_AbsoluteMove extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.Position = new tt_PTZVector(); // tt_PTZVector Position{};
        this.Speed = new tt_PTZSpeed(); this.Speed['isP'] = true; // tt_PTZSpeed* Speed{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "Position", this.Position);
        w.write(obj, "tptz", "Speed", this.Speed);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "Position", this.Position)) return false;
        if (!r.read(obj, "tptz", "Speed", this.Speed)) return false;
        return true;
    }
}
export class tptz_AbsoluteMoveResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_Stop extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PanTilt = new xsd_boolean(); this.PanTilt['isP'] = true; // xsd_boolean* PanTilt{};
        this.Zoom = new xsd_boolean(); this.Zoom['isP'] = true; // xsd_boolean* Zoom{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PanTilt", this.PanTilt);
        w.write(obj, "tptz", "Zoom", this.Zoom);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PanTilt", this.PanTilt)) return false;
        if (!r.read(obj, "tptz", "Zoom", this.Zoom)) return false;
        return true;
    }
}
export class tptz_StopResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GetPresetTours extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tptz_GetPresetToursResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PresetTour = new types.xsd_list(tt_PresetTour); // xsd_list<tt_PresetTour> PresetTour{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PresetTour", this.PresetTour);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PresetTour", this.PresetTour)) return false;
        return true;
    }
}
export class tptz_GetPresetTour extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetTourToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetTourToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetTourToken", this.PresetTourToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetTourToken", this.PresetTourToken)) return false;
        return true;
    }
}
export class tptz_GetPresetTourResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PresetTour = new tt_PresetTour(); // tt_PresetTour PresetTour{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PresetTour", this.PresetTour);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PresetTour", this.PresetTour)) return false;
        return true;
    }
}
export class tptz_GetPresetTourOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetTourToken = new tt_ReferenceToken(); this.PresetTourToken['isP'] = true; // tt_ReferenceToken* PresetTourToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetTourToken", this.PresetTourToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetTourToken", this.PresetTourToken)) return false;
        return true;
    }
}
export class tptz_GetPresetTourOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Options = new tt_PTZPresetTourOptions(); // tt_PTZPresetTourOptions Options{};
    }

    write(obj, w){
        w.write(obj, "tptz", "Options", this.Options);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "Options", this.Options)) return false;
        return true;
    }
}
export class tptz_CreatePresetTour extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tptz_CreatePresetTourResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PresetTourToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetTourToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PresetTourToken", this.PresetTourToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PresetTourToken", this.PresetTourToken)) return false;
        return true;
    }
}
export class tptz_ModifyPresetTour extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetTour = new tt_PresetTour(); // tt_PresetTour PresetTour{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetTour", this.PresetTour);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetTour", this.PresetTour)) return false;
        return true;
    }
}
export class tptz_ModifyPresetTourResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_OperatePresetTour extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetTourToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetTourToken{};
        this.Operation = new tt_PTZPresetTourOperation(); // tt_PTZPresetTourOperation Operation{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetTourToken", this.PresetTourToken);
        w.write(obj, "tptz", "Operation", this.Operation);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetTourToken", this.PresetTourToken)) return false;
        if (!r.read(obj, "tptz", "Operation", this.Operation)) return false;
        return true;
    }
}
export class tptz_OperatePresetTourResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_RemovePresetTour extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
        this.PresetTourToken = new tt_ReferenceToken(); // tt_ReferenceToken PresetTourToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
        w.write(obj, "tptz", "PresetTourToken", this.PresetTourToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        if (!r.read(obj, "tptz", "PresetTourToken", this.PresetTourToken)) return false;
        return true;
    }
}
export class tptz_RemovePresetTourResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tptz_GetCompatibleConfigurations extends types.xsd_type
{
    constructor(){
        super();
        this.ProfileToken = new tt_ReferenceToken(); // tt_ReferenceToken ProfileToken{};
    }

    write(obj, w){
        w.write(obj, "tptz", "ProfileToken", this.ProfileToken);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "ProfileToken", this.ProfileToken)) return false;
        return true;
    }
}
export class tptz_GetCompatibleConfigurationsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.PTZConfiguration = new types.xsd_list(tt_PTZConfiguration); // xsd_list<tt_PTZConfiguration> PTZConfiguration{};
    }

    write(obj, w){
        w.write(obj, "tptz", "PTZConfiguration", this.PTZConfiguration);
    }

    read(obj, r){
        if (!r.read(obj, "tptz", "PTZConfiguration", this.PTZConfiguration)) return false;
        return true;
    }
}
export class tth_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tth_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Radiometry = new xsd_boolean(); this.Radiometry['isP'] = true; // xsd_boolean* Radiometry{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Radiometry", this.Radiometry);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "", this.any)) return false;
        if (!r.read_attribute(obj, "Radiometry", this.Radiometry)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tth_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tth_Capabilities(); // tth_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tth", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tth_GetConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "tth", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class tth_ColorPalette extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
        this.Type = new xsd_string(); // xsd_string Type{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tth", "Name", this.Name);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "Type", this.Type);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "Name", this.Name)) return false;
        if (!r.read(obj, "tth", "", this.any)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tth_NUCTable extends types.xsd_type
{
    constructor(){
        super();
        this.Name = new tt_Name(); // tt_Name Name{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.token = new tt_ReferenceToken(); // tt_ReferenceToken token{};
        this.LowTemperature = new xsd_float_(); this.LowTemperature['isP'] = true; // xsd_float_* LowTemperature{};
        this.HighTemperature = new xsd_float_(); this.HighTemperature['isP'] = true; // xsd_float_* HighTemperature{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tth", "Name", this.Name);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "token", this.token);
        w.write_attribute(obj, "LowTemperature", this.LowTemperature);
        w.write_attribute(obj, "HighTemperature", this.HighTemperature);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "Name", this.Name)) return false;
        if (!r.read(obj, "tth", "", this.any)) return false;
        if (!r.read_attribute(obj, "token", this.token)) return false;
        if (!r.read_attribute(obj, "LowTemperature", this.LowTemperature)) return false;
        if (!r.read_attribute(obj, "HighTemperature", this.HighTemperature)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tth_CoolerOptions extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); this.Enabled['isP'] = true; // xsd_boolean* Enabled{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tth", "Enabled", this.Enabled);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tth", "", this.any)) return false;
        return true;
    }
}
export class tth_ConfigurationOptions extends types.xsd_type
{
    constructor(){
        super();
        this.ColorPalette = new types.xsd_list(tth_ColorPalette); // xsd_list<tth_ColorPalette> ColorPalette{};
        this.NUCTable = new types.xsd_list(tth_NUCTable); // xsd_list<tth_NUCTable> NUCTable{};
        this.CoolerOptions = new tth_CoolerOptions(); this.CoolerOptions['isP'] = true; // tth_CoolerOptions* CoolerOptions{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tth", "ColorPalette", this.ColorPalette);
        w.write(obj, "tth", "NUCTable", this.NUCTable);
        w.write(obj, "tth", "CoolerOptions", this.CoolerOptions);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "ColorPalette", this.ColorPalette)) return false;
        if (!r.read(obj, "tth", "NUCTable", this.NUCTable)) return false;
        if (!r.read(obj, "tth", "CoolerOptions", this.CoolerOptions)) return false;
        if (!r.read(obj, "tth", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tth_GetConfigurationOptionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationOptions = new tth_ConfigurationOptions(); // tth_ConfigurationOptions ConfigurationOptions{};
    }

    write(obj, w){
        w.write(obj, "tth", "ConfigurationOptions", this.ConfigurationOptions);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "ConfigurationOptions", this.ConfigurationOptions)) return false;
        return true;
    }
}
export class tth_GetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
    }

    write(obj, w){
        w.write(obj, "tth", "VideoSourceToken", this.VideoSourceToken);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "VideoSourceToken", this.VideoSourceToken)) return false;
        return true;
    }
}
export class tth_Polarity extends types.xsd_enum // enum
{
    constructor(e){
        super();
        this.v = e || 0;
        this.WhiteHot= 0;
        this.BlackHot= 1;
    }

    parse(parser, s){
        if (s == "WhiteHot") { this.v = this.WhiteHot; return true; }
        if (s == "BlackHot") { this.v = this.BlackHot; return true; }
        return false;
    }

    to_string(){
        if (this.v == this.WhiteHot) { return "WhiteHot"; }
        if (this.v == this.BlackHot) { return "BlackHot"; }
        return "";
    }
}
export class tth_Cooler extends types.xsd_type
{
    constructor(){
        super();
        this.Enabled = new xsd_boolean(); // xsd_boolean Enabled{};
        this.RunTime = new xsd_float_(); this.RunTime['isP'] = true; // xsd_float_* RunTime{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, "tth", "Enabled", this.Enabled);
        w.write(obj, "tth", "RunTime", this.RunTime);
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "Enabled", this.Enabled)) return false;
        if (!r.read(obj, "tth", "RunTime", this.RunTime)) return false;
        if (!r.read(obj, "tth", "", this.any)) return false;
        return true;
    }
}
export class tth_Configuration extends types.xsd_type
{
    constructor(){
        super();
        this.ColorPalette = new tth_ColorPalette(); // tth_ColorPalette ColorPalette{};
        this.Polarity = new tth_Polarity(); // tth_Polarity Polarity{};
        this.NUCTable = new tth_NUCTable(); this.NUCTable['isP'] = true; // tth_NUCTable* NUCTable{};
        this.Cooler = new tth_Cooler(); this.Cooler['isP'] = true; // tth_Cooler* Cooler{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tth", "ColorPalette", this.ColorPalette);
        w.write(obj, "tth", "Polarity", this.Polarity);
        w.write(obj, "tth", "NUCTable", this.NUCTable);
        w.write(obj, "tth", "Cooler", this.Cooler);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "ColorPalette", this.ColorPalette)) return false;
        if (!r.read(obj, "tth", "Polarity", this.Polarity)) return false;
        if (!r.read(obj, "tth", "NUCTable", this.NUCTable)) return false;
        if (!r.read(obj, "tth", "Cooler", this.Cooler)) return false;
        if (!r.read(obj, "tth", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tth_GetConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tth_Configuration(); // tth_Configuration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tth", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tth_SetConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.VideoSourceToken = new tt_ReferenceToken(); // tt_ReferenceToken VideoSourceToken{};
        this.Configuration = new tth_Configuration(); // tth_Configuration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tth", "VideoSourceToken", this.VideoSourceToken);
        w.write(obj, "tth", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tth", "VideoSourceToken", this.VideoSourceToken)) return false;
        if (!r.read(obj, "tth", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tth_SetConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__GetSupportedRules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tan__GetSupportedRulesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SupportedRules = new tt_SupportedRules(); // tt_SupportedRules SupportedRules{};
    }

    write(obj, w){
        w.write(obj, "tan_", "SupportedRules", this.SupportedRules);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "SupportedRules", this.SupportedRules)) return false;
        return true;
    }
}
export class tan__CreateRules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.Rule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> Rule{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tan_", "Rule", this.Rule);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tan_", "Rule", this.Rule)) return false;
        return true;
    }
}
export class tan__CreateRulesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__DeleteRules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.RuleName = new types.xsd_list(xsd_string); // xsd_list<xsd_string> RuleName{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tan_", "RuleName", this.RuleName);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tan_", "RuleName", this.RuleName)) return false;
        return true;
    }
}
export class tan__DeleteRulesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__GetRules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tan__GetRulesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Rule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> Rule{};
    }

    write(obj, w){
        w.write(obj, "tan_", "Rule", this.Rule);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "Rule", this.Rule)) return false;
        return true;
    }
}
export class tan__ModifyRules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.Rule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> Rule{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tan_", "Rule", this.Rule);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tan_", "Rule", this.Rule)) return false;
        return true;
    }
}
export class tan__ModifyRulesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.RuleSupport = new xsd_boolean(); this.RuleSupport['isP'] = true; // xsd_boolean* RuleSupport{};
        this.AnalyticsModuleSupport = new xsd_boolean(); this.AnalyticsModuleSupport['isP'] = true; // xsd_boolean* AnalyticsModuleSupport{};
        this.CellBasedSceneDescriptionSupported = new xsd_boolean(); this.CellBasedSceneDescriptionSupported['isP'] = true; // xsd_boolean* CellBasedSceneDescriptionSupported{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "RuleSupport", this.RuleSupport);
        w.write_attribute(obj, "AnalyticsModuleSupport", this.AnalyticsModuleSupport);
        w.write_attribute(obj, "CellBasedSceneDescriptionSupported", this.CellBasedSceneDescriptionSupported);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "", this.any)) return false;
        if (!r.read_attribute(obj, "RuleSupport", this.RuleSupport)) return false;
        if (!r.read_attribute(obj, "AnalyticsModuleSupport", this.AnalyticsModuleSupport)) return false;
        if (!r.read_attribute(obj, "CellBasedSceneDescriptionSupported", this.CellBasedSceneDescriptionSupported)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tan__GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tan__Capabilities(); // tan__Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tan_", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tan__GetSupportedAnalyticsModules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tan__GetSupportedAnalyticsModulesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SupportedAnalyticsModules = new tt_SupportedAnalyticsModules(); // tt_SupportedAnalyticsModules SupportedAnalyticsModules{};
    }

    write(obj, w){
        w.write(obj, "tan_", "SupportedAnalyticsModules", this.SupportedAnalyticsModules);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "SupportedAnalyticsModules", this.SupportedAnalyticsModules)) return false;
        return true;
    }
}
export class tan__CreateAnalyticsModules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.AnalyticsModule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> AnalyticsModule{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tan_", "AnalyticsModule", this.AnalyticsModule);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tan_", "AnalyticsModule", this.AnalyticsModule)) return false;
        return true;
    }
}
export class tan__CreateAnalyticsModulesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__DeleteAnalyticsModules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.AnalyticsModuleName = new types.xsd_list(xsd_string); // xsd_list<xsd_string> AnalyticsModuleName{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tan_", "AnalyticsModuleName", this.AnalyticsModuleName);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tan_", "AnalyticsModuleName", this.AnalyticsModuleName)) return false;
        return true;
    }
}
export class tan__DeleteAnalyticsModulesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tan__GetAnalyticsModules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tan__GetAnalyticsModulesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.AnalyticsModule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> AnalyticsModule{};
    }

    write(obj, w){
        w.write(obj, "tan_", "AnalyticsModule", this.AnalyticsModule);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "AnalyticsModule", this.AnalyticsModule)) return false;
        return true;
    }
}
export class tan__ModifyAnalyticsModules extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
        this.AnalyticsModule = new types.xsd_list(tt_Config); // xsd_list<tt_Config> AnalyticsModule{};
    }

    write(obj, w){
        w.write(obj, "tan_", "ConfigurationToken", this.ConfigurationToken);
        w.write(obj, "tan_", "AnalyticsModule", this.AnalyticsModule);
    }

    read(obj, r){
        if (!r.read(obj, "tan_", "ConfigurationToken", this.ConfigurationToken)) return false;
        if (!r.read(obj, "tan_", "AnalyticsModule", this.AnalyticsModule)) return false;
        return true;
    }
}
export class tan__ModifyAnalyticsModulesResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_Capabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tad_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tad_Capabilities(); // tad_Capabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tad", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tad_DeleteAnalyticsEngineControl extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tad_DeleteAnalyticsEngineControlResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_CreateAnalyticsEngineControl extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AnalyticsEngineControl(); // tt_AnalyticsEngineControl Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_CreateAnalyticsEngineControlResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new types.xsd_list(tt_AnalyticsEngineInput); // xsd_list<tt_AnalyticsEngineInput> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_SetAnalyticsEngineControl extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AnalyticsEngineControl(); // tt_AnalyticsEngineControl Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
        w.write(obj, "tad", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "tad", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class tad_SetAnalyticsEngineControlResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetAnalyticsEngineControl extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngineControlResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AnalyticsEngineControl(); // tt_AnalyticsEngineControl Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngineControls extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetAnalyticsEngineControlsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.AnalyticsEngineControls = new types.xsd_list(tt_AnalyticsEngineControl); // xsd_list<tt_AnalyticsEngineControl> AnalyticsEngineControls{};
    }

    write(obj, w){
        w.write(obj, "tad", "AnalyticsEngineControls", this.AnalyticsEngineControls);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "AnalyticsEngineControls", this.AnalyticsEngineControls)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngine extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngineResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AnalyticsEngine(); // tt_AnalyticsEngine Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngines extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetAnalyticsEnginesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new types.xsd_list(tt_AnalyticsEngine); // xsd_list<tt_AnalyticsEngine> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_SetVideoAnalyticsConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoAnalyticsConfiguration(); // tt_VideoAnalyticsConfiguration Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
        w.write(obj, "tad", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "tad", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class tad_SetVideoAnalyticsConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_SetAnalyticsEngineInput extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AnalyticsEngineInput(); // tt_AnalyticsEngineInput Configuration{};
        this.ForcePersistence = new xsd_boolean(); // xsd_boolean ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
        w.write(obj, "tad", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "tad", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class tad_SetAnalyticsEngineInputResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetAnalyticsEngineInput extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngineInputResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_AnalyticsEngineInput(); // tt_AnalyticsEngineInput Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_GetAnalyticsEngineInputs extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetAnalyticsEngineInputsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new types.xsd_list(tt_AnalyticsEngineInput); // xsd_list<tt_AnalyticsEngineInput> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_GetAnalyticsDeviceStreamUri extends types.xsd_type
{
    constructor(){
        super();
        this.StreamSetup = new tt_StreamSetup(); // tt_StreamSetup StreamSetup{};
        this.AnalyticsEngineControlToken = new tt_ReferenceToken(); // tt_ReferenceToken AnalyticsEngineControlToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "StreamSetup", this.StreamSetup);
        w.write(obj, "tad", "AnalyticsEngineControlToken", this.AnalyticsEngineControlToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "StreamSetup", this.StreamSetup)) return false;
        if (!r.read(obj, "tad", "AnalyticsEngineControlToken", this.AnalyticsEngineControlToken)) return false;
        return true;
    }
}
export class tad_GetAnalyticsDeviceStreamUriResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Uri = new xsd_anyURI(); // xsd_anyURI Uri{};
    }

    write(obj, w){
        w.write(obj, "tad", "Uri", this.Uri);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Uri", this.Uri)) return false;
        return true;
    }
}
export class tad_GetVideoAnalyticsConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new tt_ReferenceToken(); // tt_ReferenceToken ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tad_GetVideoAnalyticsConfigurationResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tt_VideoAnalyticsConfiguration(); // tt_VideoAnalyticsConfiguration Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_CreateAnalyticsEngineInputs extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new types.xsd_list(tt_AnalyticsEngineInput); // xsd_list<tt_AnalyticsEngineInput> Configuration{};
        this.ForcePersistence = new types.xsd_list(xsd_boolean); // xsd_list<xsd_boolean> ForcePersistence{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
        w.write(obj, "tad", "ForcePersistence", this.ForcePersistence);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "tad", "ForcePersistence", this.ForcePersistence)) return false;
        return true;
    }
}
export class tad_CreateAnalyticsEngineInputsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new types.xsd_list(tt_AnalyticsEngineInput); // xsd_list<tt_AnalyticsEngineInput> Configuration{};
    }

    write(obj, w){
        w.write(obj, "tad", "Configuration", this.Configuration);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "Configuration", this.Configuration)) return false;
        return true;
    }
}
export class tad_DeleteAnalyticsEngineInputs extends types.xsd_type
{
    constructor(){
        super();
        this.ConfigurationToken = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> ConfigurationToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "ConfigurationToken", this.ConfigurationToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "ConfigurationToken", this.ConfigurationToken)) return false;
        return true;
    }
}
export class tad_DeleteAnalyticsEngineInputsResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tad_GetAnalyticsState extends types.xsd_type
{
    constructor(){
        super();
        this.AnalyticsEngineControlToken = new tt_ReferenceToken(); // tt_ReferenceToken AnalyticsEngineControlToken{};
    }

    write(obj, w){
        w.write(obj, "tad", "AnalyticsEngineControlToken", this.AnalyticsEngineControlToken);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "AnalyticsEngineControlToken", this.AnalyticsEngineControlToken)) return false;
        return true;
    }
}
export class tad_GetAnalyticsStateResponse extends types.xsd_type
{
    constructor(){
        super();
        this.State = new tt_AnalyticsStateInformation(); // tt_AnalyticsStateInformation State{};
    }

    write(obj, w){
        w.write(obj, "tad", "State", this.State);
    }

    read(obj, r){
        if (!r.read(obj, "tad", "State", this.State)) return false;
        return true;
    }
}
export class tae_GetSupportedActions extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_ActionConfigDescription extends types.xsd_type
{
    constructor(){
        super();
        this.ParameterDescription = new tt_ItemListDescription(); // tt_ItemListDescription ParameterDescription{};
        this.Name = new xsd_QName(); // xsd_QName Name{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "ParameterDescription", this.ParameterDescription);
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ParameterDescription", this.ParameterDescription)) return false;
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_SupportedActionsExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_SupportedActions extends types.xsd_type
{
    constructor(){
        super();
        this.ActionContentSchemaLocation = new types.xsd_list(xsd_anyURI); // xsd_list<xsd_anyURI> ActionContentSchemaLocation{};
        this.ActionDescription = new types.xsd_list(tae_ActionConfigDescription); // xsd_list<tae_ActionConfigDescription> ActionDescription{};
        this.Extension = new tae_SupportedActionsExtension(); this.Extension['isP'] = true; // tae_SupportedActionsExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "ActionContentSchemaLocation", this.ActionContentSchemaLocation);
        w.write(obj, "tae", "ActionDescription", this.ActionDescription);
        w.write(obj, "tae", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ActionContentSchemaLocation", this.ActionContentSchemaLocation)) return false;
        if (!r.read(obj, "tae", "ActionDescription", this.ActionDescription)) return false;
        if (!r.read(obj, "tae", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_GetSupportedActionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SupportedActions = new tae_SupportedActions(); // tae_SupportedActions SupportedActions{};
    }

    write(obj, w){
        w.write(obj, "tae", "SupportedActions", this.SupportedActions);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "SupportedActions", this.SupportedActions)) return false;
        return true;
    }
}
export class tae_GetActions extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_ActionConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.Parameters = new tt_ItemList(); // tt_ItemList Parameters{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Name = new xsd_string(); // xsd_string Name{};
        this.Type = new xsd_QName(); // xsd_QName Type{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "Parameters", this.Parameters);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Name", this.Name);
        w.write_attribute(obj, "Type", this.Type);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Parameters", this.Parameters)) return false;
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "Name", this.Name)) return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_Action extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tae_ActionConfiguration(); // tae_ActionConfiguration Configuration{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "Configuration", this.Configuration);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Token", this.Token);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "Token", this.Token)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_GetActionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Action = new types.xsd_list(tae_Action); // xsd_list<tae_Action> Action{};
    }

    write(obj, w){
        w.write(obj, "tae", "Action", this.Action);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Action", this.Action)) return false;
        return true;
    }
}
export class tae_CreateActions extends types.xsd_type
{
    constructor(){
        super();
        this.Action = new types.xsd_list(tae_ActionConfiguration); // xsd_list<tae_ActionConfiguration> Action{};
    }

    write(obj, w){
        w.write(obj, "tae", "Action", this.Action);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Action", this.Action)) return false;
        return true;
    }
}
export class tae_CreateActionsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Action = new types.xsd_list(tae_Action); // xsd_list<tae_Action> Action{};
    }

    write(obj, w){
        w.write(obj, "tae", "Action", this.Action);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Action", this.Action)) return false;
        return true;
    }
}
export class tae_DeleteActions extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> Token{};
    }

    write(obj, w){
        w.write(obj, "tae", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Token", this.Token)) return false;
        return true;
    }
}
export class tae_DeleteActionsResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_ModifyActions extends types.xsd_type
{
    constructor(){
        super();
        this.Action = new types.xsd_list(tae_Action); // xsd_list<tae_Action> Action{};
    }

    write(obj, w){
        w.write(obj, "tae", "Action", this.Action);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Action", this.Action)) return false;
        return true;
    }
}
export class tae_ModifyActionsResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_ActionTypeLimits extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Type = new xsd_QName(); // xsd_QName Type{};
        this.Maximum = new xsd_positiveInteger(); // xsd_positiveInteger Maximum{};
        this.InUse = new xsd_nonNegativeInteger(); this.InUse['isP'] = true; // xsd_nonNegativeInteger* InUse{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Type", this.Type);
        w.write_attribute(obj, "Maximum", this.Maximum);
        w.write_attribute(obj, "InUse", this.InUse);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "Type", this.Type)) return false;
        if (!r.read_attribute(obj, "Maximum", this.Maximum)) return false;
        if (!r.read_attribute(obj, "InUse", this.InUse)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_ActionEngineCapabilitiesExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_ActionEngineCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.ActionCapabilities = new types.xsd_list(tae_ActionTypeLimits); // xsd_list<tae_ActionTypeLimits> ActionCapabilities{};
        this.Extension = new tae_ActionEngineCapabilitiesExtension(); this.Extension['isP'] = true; // tae_ActionEngineCapabilitiesExtension* Extension{};
        this.MaximumTriggers = new xsd_positiveInteger(); this.MaximumTriggers['isP'] = true; // xsd_positiveInteger* MaximumTriggers{};
        this.MaximumActions = new xsd_positiveInteger(); this.MaximumActions['isP'] = true; // xsd_positiveInteger* MaximumActions{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "ActionCapabilities", this.ActionCapabilities);
        w.write(obj, "tae", "Extension", this.Extension);
        w.write_attribute(obj, "MaximumTriggers", this.MaximumTriggers);
        w.write_attribute(obj, "MaximumActions", this.MaximumActions);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ActionCapabilities", this.ActionCapabilities)) return false;
        if (!r.read(obj, "tae", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "MaximumTriggers", this.MaximumTriggers)) return false;
        if (!r.read_attribute(obj, "MaximumActions", this.MaximumActions)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tae_ActionEngineCapabilities(); // tae_ActionEngineCapabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tae", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tae_GetActionTriggers extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_ActionTriggerConfigurationExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_ActionTriggerConfiguration extends types.xsd_type
{
    constructor(){
        super();
        this.TopicExpression = new wsnt_TopicExpressionType(); // wsnt_TopicExpressionType TopicExpression{};
        this.ContentExpression = new wsnt_QueryExpressionType(); this.ContentExpression['isP'] = true; // wsnt_QueryExpressionType* ContentExpression{};
        this.ActionToken = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> ActionToken{};
        this.Extension = new tae_ActionTriggerConfigurationExtension(); this.Extension['isP'] = true; // tae_ActionTriggerConfigurationExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "TopicExpression", this.TopicExpression);
        w.write(obj, "tae", "ContentExpression", this.ContentExpression);
        w.write(obj, "tae", "ActionToken", this.ActionToken);
        w.write(obj, "tae", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "TopicExpression", this.TopicExpression)) return false;
        if (!r.read(obj, "tae", "ContentExpression", this.ContentExpression)) return false;
        if (!r.read(obj, "tae", "ActionToken", this.ActionToken)) return false;
        if (!r.read(obj, "tae", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_ActionTrigger extends types.xsd_type
{
    constructor(){
        super();
        this.Configuration = new tae_ActionTriggerConfiguration(); // tae_ActionTriggerConfiguration Configuration{};
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.Token = new tt_ReferenceToken(); // tt_ReferenceToken Token{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tae", "Configuration", this.Configuration);
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "Token", this.Token);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Configuration", this.Configuration)) return false;
        if (!r.read(obj, "tae", "", this.any)) return false;
        if (!r.read_attribute(obj, "Token", this.Token)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tae_GetActionTriggersResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ActionTrigger = new types.xsd_list(tae_ActionTrigger); // xsd_list<tae_ActionTrigger> ActionTrigger{};
    }

    write(obj, w){
        w.write(obj, "tae", "ActionTrigger", this.ActionTrigger);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ActionTrigger", this.ActionTrigger)) return false;
        return true;
    }
}
export class tae_CreateActionTriggers extends types.xsd_type
{
    constructor(){
        super();
        this.ActionTrigger = new types.xsd_list(tae_ActionTriggerConfiguration); // xsd_list<tae_ActionTriggerConfiguration> ActionTrigger{};
    }

    write(obj, w){
        w.write(obj, "tae", "ActionTrigger", this.ActionTrigger);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ActionTrigger", this.ActionTrigger)) return false;
        return true;
    }
}
export class tae_CreateActionTriggersResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ActionTrigger = new types.xsd_list(tae_ActionTrigger); // xsd_list<tae_ActionTrigger> ActionTrigger{};
    }

    write(obj, w){
        w.write(obj, "tae", "ActionTrigger", this.ActionTrigger);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ActionTrigger", this.ActionTrigger)) return false;
        return true;
    }
}
export class tae_DeleteActionTriggers extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new types.xsd_list(tt_ReferenceToken); // xsd_list<tt_ReferenceToken> Token{};
    }

    write(obj, w){
        w.write(obj, "tae", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "Token", this.Token)) return false;
        return true;
    }
}
export class tae_DeleteActionTriggersResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tae_ModifyActionTriggers extends types.xsd_type
{
    constructor(){
        super();
        this.ActionTrigger = new types.xsd_list(tae_ActionTrigger); // xsd_list<tae_ActionTrigger> ActionTrigger{};
    }

    write(obj, w){
        w.write(obj, "tae", "ActionTrigger", this.ActionTrigger);
    }

    read(obj, r){
        if (!r.read(obj, "tae", "ActionTrigger", this.ActionTrigger)) return false;
        return true;
    }
}
export class tae_ModifyActionTriggersResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export const pt_PositiveInteger = xsd_unsignedInt;
export const pt_ReferenceToken = xsd_string;
export class pt_DataEntity extends types.xsd_type
{
    constructor(){
        super();
        this.token = new pt_ReferenceToken(); // pt_ReferenceToken token{};
    }

    write(obj, w){
        w.write_attribute(obj, "token", this.token);
    }

    read(obj, r){
        if (!r.read_attribute(obj, "token", this.token)) return false;
        return true;
    }
}
export const pt_Name = xsd_string;
export const pt_Description = xsd_string;
export class tsc_GetServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tsc_ServiceCapabilities extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
        this.MaxLimit = new pt_PositiveInteger(); // pt_PositiveInteger MaxLimit{};
        this.MaxSchedules = new pt_PositiveInteger(); // pt_PositiveInteger MaxSchedules{};
        this.MaxTimePeriodsPerDay = new pt_PositiveInteger(); // pt_PositiveInteger MaxTimePeriodsPerDay{};
        this.MaxSpecialDayGroups = new pt_PositiveInteger(); // pt_PositiveInteger MaxSpecialDayGroups{};
        this.MaxDaysInSpecialDayGroup = new pt_PositiveInteger(); // pt_PositiveInteger MaxDaysInSpecialDayGroup{};
        this.MaxSpecialDaysSchedules = new pt_PositiveInteger(); // pt_PositiveInteger MaxSpecialDaysSchedules{};
        this.ExtendedRecurrenceSupported = new xsd_boolean(); // xsd_boolean ExtendedRecurrenceSupported{};
        this.SpecialDaysSupported = new xsd_boolean(); // xsd_boolean SpecialDaysSupported{};
        this.StateReportingSupported = new xsd_boolean(); // xsd_boolean StateReportingSupported{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
        w.write_attribute(obj, "MaxLimit", this.MaxLimit);
        w.write_attribute(obj, "MaxSchedules", this.MaxSchedules);
        w.write_attribute(obj, "MaxTimePeriodsPerDay", this.MaxTimePeriodsPerDay);
        w.write_attribute(obj, "MaxSpecialDayGroups", this.MaxSpecialDayGroups);
        w.write_attribute(obj, "MaxDaysInSpecialDayGroup", this.MaxDaysInSpecialDayGroup);
        w.write_attribute(obj, "MaxSpecialDaysSchedules", this.MaxSpecialDaysSchedules);
        w.write_attribute(obj, "ExtendedRecurrenceSupported", this.ExtendedRecurrenceSupported);
        w.write_attribute(obj, "SpecialDaysSupported", this.SpecialDaysSupported);
        w.write_attribute(obj, "StateReportingSupported", this.StateReportingSupported);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "", this.any)) return false;
        if (!r.read_attribute(obj, "MaxLimit", this.MaxLimit)) return false;
        if (!r.read_attribute(obj, "MaxSchedules", this.MaxSchedules)) return false;
        if (!r.read_attribute(obj, "MaxTimePeriodsPerDay", this.MaxTimePeriodsPerDay)) return false;
        if (!r.read_attribute(obj, "MaxSpecialDayGroups", this.MaxSpecialDayGroups)) return false;
        if (!r.read_attribute(obj, "MaxDaysInSpecialDayGroup", this.MaxDaysInSpecialDayGroup)) return false;
        if (!r.read_attribute(obj, "MaxSpecialDaysSchedules", this.MaxSpecialDaysSchedules)) return false;
        if (!r.read_attribute(obj, "ExtendedRecurrenceSupported", this.ExtendedRecurrenceSupported)) return false;
        if (!r.read_attribute(obj, "SpecialDaysSupported", this.SpecialDaysSupported)) return false;
        if (!r.read_attribute(obj, "StateReportingSupported", this.StateReportingSupported)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tsc_GetServiceCapabilitiesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Capabilities = new tsc_ServiceCapabilities(); // tsc_ServiceCapabilities Capabilities{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Capabilities", this.Capabilities);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Capabilities", this.Capabilities)) return false;
        return true;
    }
}
export class tsc_GetScheduleState extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new pt_ReferenceToken(); // pt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_ScheduleStateExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "", this.any)) return false;
        return true;
    }
}
export class tsc_ScheduleState extends types.xsd_type
{
    constructor(){
        super();
        this.Active = new xsd_boolean(); // xsd_boolean Active{};
        this.SpecialDay = new xsd_boolean(); this.SpecialDay['isP'] = true; // xsd_boolean* SpecialDay{};
        this.Extension = new tsc_ScheduleStateExtension(); this.Extension['isP'] = true; // tsc_ScheduleStateExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Active", this.Active);
        w.write(obj, "tsc", "SpecialDay", this.SpecialDay);
        w.write(obj, "tsc", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Active", this.Active)) return false;
        if (!r.read(obj, "tsc", "SpecialDay", this.SpecialDay)) return false;
        if (!r.read(obj, "tsc", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tsc_GetScheduleStateResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ScheduleState = new tsc_ScheduleState(); // tsc_ScheduleState ScheduleState{};
    }

    write(obj, w){
        w.write(obj, "tsc", "ScheduleState", this.ScheduleState);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "ScheduleState", this.ScheduleState)) return false;
        return true;
    }
}
export class tsc_GetScheduleInfo extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new types.xsd_list(pt_ReferenceToken); // xsd_list<pt_ReferenceToken> Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_ScheduleInfo extends pt_DataEntity
{
    constructor(){
        super();
        this.Name = new pt_Name(); // pt_Name Name{};
        this.Description = new pt_Description(); this.Description['isP'] = true; // pt_Description* Description{};
    }

    write(obj, w){
        pt_DataEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tsc", "Name", this.Name);
        w.write(obj, "tsc", "Description", this.Description);
    }

    read(obj, r){
        if (!pt_DataEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tsc", "Name", this.Name)) return false;
        if (!r.read(obj, "tsc", "Description", this.Description)) return false;
        return true;
    }
}
export class tsc_GetScheduleInfoResponse extends types.xsd_type
{
    constructor(){
        super();
        this.ScheduleInfo = new types.xsd_list(tsc_ScheduleInfo); // xsd_list<tsc_ScheduleInfo> ScheduleInfo{};
    }

    write(obj, w){
        w.write(obj, "tsc", "ScheduleInfo", this.ScheduleInfo);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "ScheduleInfo", this.ScheduleInfo)) return false;
        return true;
    }
}
export class tsc_GetScheduleInfoList extends types.xsd_type
{
    constructor(){
        super();
        this.Limit = new xsd_int_(); this.Limit['isP'] = true; // xsd_int_* Limit{};
        this.StartReference = new xsd_string(); this.StartReference['isP'] = true; // xsd_string* StartReference{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Limit", this.Limit);
        w.write(obj, "tsc", "StartReference", this.StartReference);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Limit", this.Limit)) return false;
        if (!r.read(obj, "tsc", "StartReference", this.StartReference)) return false;
        return true;
    }
}
export class tsc_GetScheduleInfoListResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NextStartReference = new xsd_string(); this.NextStartReference['isP'] = true; // xsd_string* NextStartReference{};
        this.ScheduleInfo = new types.xsd_list(tsc_ScheduleInfo); // xsd_list<tsc_ScheduleInfo> ScheduleInfo{};
    }

    write(obj, w){
        w.write(obj, "tsc", "NextStartReference", this.NextStartReference);
        w.write(obj, "tsc", "ScheduleInfo", this.ScheduleInfo);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "NextStartReference", this.NextStartReference)) return false;
        if (!r.read(obj, "tsc", "ScheduleInfo", this.ScheduleInfo)) return false;
        return true;
    }
}
export class tsc_GetSchedules extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new types.xsd_list(pt_ReferenceToken); // xsd_list<pt_ReferenceToken> Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_TimePeriodExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "", this.any)) return false;
        return true;
    }
}
export class tsc_TimePeriod extends types.xsd_type
{
    constructor(){
        super();
        this.From = new xsd_time(); // xsd_time From{};
        this.Until = new xsd_time(); this.Until['isP'] = true; // xsd_time* Until{};
        this.Extension = new tsc_TimePeriodExtension(); this.Extension['isP'] = true; // tsc_TimePeriodExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tsc", "From", this.From);
        w.write(obj, "tsc", "Until", this.Until);
        w.write(obj, "tsc", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "From", this.From)) return false;
        if (!r.read(obj, "tsc", "Until", this.Until)) return false;
        if (!r.read(obj, "tsc", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tsc_SpecialDaysScheduleExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "", this.any)) return false;
        return true;
    }
}
export class tsc_SpecialDaysSchedule extends types.xsd_type
{
    constructor(){
        super();
        this.GroupToken = new pt_ReferenceToken(); // pt_ReferenceToken GroupToken{};
        this.TimeRange = new types.xsd_list(tsc_TimePeriod); // xsd_list<tsc_TimePeriod> TimeRange{};
        this.Extension = new tsc_SpecialDaysScheduleExtension(); this.Extension['isP'] = true; // tsc_SpecialDaysScheduleExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        w.write(obj, "tsc", "GroupToken", this.GroupToken);
        w.write(obj, "tsc", "TimeRange", this.TimeRange);
        w.write(obj, "tsc", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "GroupToken", this.GroupToken)) return false;
        if (!r.read(obj, "tsc", "TimeRange", this.TimeRange)) return false;
        if (!r.read(obj, "tsc", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tsc_ScheduleExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "", this.any)) return false;
        return true;
    }
}
export class tsc_Schedule extends tsc_ScheduleInfo
{
    constructor(){
        super();
        this.Standard = new xsd_string(); // xsd_string Standard{};
        this.SpecialDays = new types.xsd_list(tsc_SpecialDaysSchedule); // xsd_list<tsc_SpecialDaysSchedule> SpecialDays{};
        this.Extension = new tsc_ScheduleExtension(); this.Extension['isP'] = true; // tsc_ScheduleExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tsc_ScheduleInfo.prototype.write.call(this, obj, w);
        w.write(obj, "tsc", "Standard", this.Standard);
        w.write(obj, "tsc", "SpecialDays", this.SpecialDays);
        w.write(obj, "tsc", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tsc_ScheduleInfo.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tsc", "Standard", this.Standard)) return false;
        if (!r.read(obj, "tsc", "SpecialDays", this.SpecialDays)) return false;
        if (!r.read(obj, "tsc", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tsc_GetSchedulesResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Schedule = new types.xsd_list(tsc_Schedule); // xsd_list<tsc_Schedule> Schedule{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Schedule", this.Schedule);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Schedule", this.Schedule)) return false;
        return true;
    }
}
export class tsc_GetScheduleList extends types.xsd_type
{
    constructor(){
        super();
        this.Limit = new xsd_int_(); this.Limit['isP'] = true; // xsd_int_* Limit{};
        this.StartReference = new xsd_string(); this.StartReference['isP'] = true; // xsd_string* StartReference{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Limit", this.Limit);
        w.write(obj, "tsc", "StartReference", this.StartReference);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Limit", this.Limit)) return false;
        if (!r.read(obj, "tsc", "StartReference", this.StartReference)) return false;
        return true;
    }
}
export class tsc_GetScheduleListResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NextStartReference = new xsd_string(); this.NextStartReference['isP'] = true; // xsd_string* NextStartReference{};
        this.Schedule = new types.xsd_list(tsc_Schedule); // xsd_list<tsc_Schedule> Schedule{};
    }

    write(obj, w){
        w.write(obj, "tsc", "NextStartReference", this.NextStartReference);
        w.write(obj, "tsc", "Schedule", this.Schedule);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "NextStartReference", this.NextStartReference)) return false;
        if (!r.read(obj, "tsc", "Schedule", this.Schedule)) return false;
        return true;
    }
}
export class tsc_CreateSchedule extends types.xsd_type
{
    constructor(){
        super();
        this.Schedule = new tsc_Schedule(); // tsc_Schedule Schedule{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Schedule", this.Schedule);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Schedule", this.Schedule)) return false;
        return true;
    }
}
export class tsc_CreateScheduleResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new pt_ReferenceToken(); // pt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_ModifySchedule extends types.xsd_type
{
    constructor(){
        super();
        this.Schedule = new tsc_Schedule(); // tsc_Schedule Schedule{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Schedule", this.Schedule);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Schedule", this.Schedule)) return false;
        return true;
    }
}
export class tsc_ModifyScheduleResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tsc_DeleteSchedule extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new pt_ReferenceToken(); // pt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_DeleteScheduleResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tsc_GetSpecialDayGroupInfo extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new types.xsd_list(pt_ReferenceToken); // xsd_list<pt_ReferenceToken> Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_SpecialDayGroupInfo extends pt_DataEntity
{
    constructor(){
        super();
        this.Name = new pt_Name(); // pt_Name Name{};
        this.Description = new pt_Description(); this.Description['isP'] = true; // pt_Description* Description{};
    }

    write(obj, w){
        pt_DataEntity.prototype.write.call(this, obj, w);
        w.write(obj, "tsc", "Name", this.Name);
        w.write(obj, "tsc", "Description", this.Description);
    }

    read(obj, r){
        if (!pt_DataEntity.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tsc", "Name", this.Name)) return false;
        if (!r.read(obj, "tsc", "Description", this.Description)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroupInfoResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SpecialDayGroupInfo = new types.xsd_list(tsc_SpecialDayGroupInfo); // xsd_list<tsc_SpecialDayGroupInfo> SpecialDayGroupInfo{};
    }

    write(obj, w){
        w.write(obj, "tsc", "SpecialDayGroupInfo", this.SpecialDayGroupInfo);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "SpecialDayGroupInfo", this.SpecialDayGroupInfo)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroupInfoList extends types.xsd_type
{
    constructor(){
        super();
        this.Limit = new xsd_int_(); this.Limit['isP'] = true; // xsd_int_* Limit{};
        this.StartReference = new xsd_string(); this.StartReference['isP'] = true; // xsd_string* StartReference{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Limit", this.Limit);
        w.write(obj, "tsc", "StartReference", this.StartReference);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Limit", this.Limit)) return false;
        if (!r.read(obj, "tsc", "StartReference", this.StartReference)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroupInfoListResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NextStartReference = new xsd_string(); this.NextStartReference['isP'] = true; // xsd_string* NextStartReference{};
        this.SpecialDayGroupInfo = new types.xsd_list(tsc_SpecialDayGroupInfo); // xsd_list<tsc_SpecialDayGroupInfo> SpecialDayGroupInfo{};
    }

    write(obj, w){
        w.write(obj, "tsc", "NextStartReference", this.NextStartReference);
        w.write(obj, "tsc", "SpecialDayGroupInfo", this.SpecialDayGroupInfo);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "NextStartReference", this.NextStartReference)) return false;
        if (!r.read(obj, "tsc", "SpecialDayGroupInfo", this.SpecialDayGroupInfo)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroups extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new types.xsd_list(pt_ReferenceToken); // xsd_list<pt_ReferenceToken> Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_SpecialDayGroupExtension extends types.xsd_type
{
    constructor(){
        super();
        this.any = new types.xsd_list(types.any_t); // xsd_list<any_t> any{};
    }

    write(obj, w){
        w.write(obj, null, null, this.any);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "", this.any)) return false;
        return true;
    }
}
export class tsc_SpecialDayGroup extends tsc_SpecialDayGroupInfo
{
    constructor(){
        super();
        this.Days = new xsd_string(); this.Days['isP'] = true; // xsd_string* Days{};
        this.Extension = new tsc_SpecialDayGroupExtension(); this.Extension['isP'] = true; // tsc_SpecialDayGroupExtension* Extension{};
        this.anyAttributes = new types.xsd_list(types.anyAttribute_t); // xsd_list<anyAttribute_t> anyAttributes{};
    }

    write(obj, w){
        tsc_SpecialDayGroupInfo.prototype.write.call(this, obj, w);
        w.write(obj, "tsc", "Days", this.Days);
        w.write(obj, "tsc", "Extension", this.Extension);
        w.write_attribute(obj, "", this.anyAttributes);
    }

    read(obj, r){
        if (!tsc_SpecialDayGroupInfo.prototype.read.call(this, obj, r))
            return false;
        if (!r.read(obj, "tsc", "Days", this.Days)) return false;
        if (!r.read(obj, "tsc", "Extension", this.Extension)) return false;
        if (!r.read_attribute(obj, "", this.anyAttributes)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroupsResponse extends types.xsd_type
{
    constructor(){
        super();
        this.SpecialDayGroup = new types.xsd_list(tsc_SpecialDayGroup); // xsd_list<tsc_SpecialDayGroup> SpecialDayGroup{};
    }

    write(obj, w){
        w.write(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroupList extends types.xsd_type
{
    constructor(){
        super();
        this.Limit = new xsd_int_(); this.Limit['isP'] = true; // xsd_int_* Limit{};
        this.StartReference = new xsd_string(); this.StartReference['isP'] = true; // xsd_string* StartReference{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Limit", this.Limit);
        w.write(obj, "tsc", "StartReference", this.StartReference);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Limit", this.Limit)) return false;
        if (!r.read(obj, "tsc", "StartReference", this.StartReference)) return false;
        return true;
    }
}
export class tsc_GetSpecialDayGroupListResponse extends types.xsd_type
{
    constructor(){
        super();
        this.NextStartReference = new xsd_string(); this.NextStartReference['isP'] = true; // xsd_string* NextStartReference{};
        this.SpecialDayGroup = new types.xsd_list(tsc_SpecialDayGroup); // xsd_list<tsc_SpecialDayGroup> SpecialDayGroup{};
    }

    write(obj, w){
        w.write(obj, "tsc", "NextStartReference", this.NextStartReference);
        w.write(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "NextStartReference", this.NextStartReference)) return false;
        if (!r.read(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup)) return false;
        return true;
    }
}
export class tsc_CreateSpecialDayGroup extends types.xsd_type
{
    constructor(){
        super();
        this.SpecialDayGroup = new tsc_SpecialDayGroup(); // tsc_SpecialDayGroup SpecialDayGroup{};
    }

    write(obj, w){
        w.write(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup)) return false;
        return true;
    }
}
export class tsc_CreateSpecialDayGroupResponse extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new pt_ReferenceToken(); // pt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_ModifySpecialDayGroup extends types.xsd_type
{
    constructor(){
        super();
        this.SpecialDayGroup = new tsc_SpecialDayGroup(); // tsc_SpecialDayGroup SpecialDayGroup{};
    }

    write(obj, w){
        w.write(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "SpecialDayGroup", this.SpecialDayGroup)) return false;
        return true;
    }
}
export class tsc_ModifySpecialDayGroupResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export class tsc_DeleteSpecialDayGroup extends types.xsd_type
{
    constructor(){
        super();
        this.Token = new pt_ReferenceToken(); // pt_ReferenceToken Token{};
    }

    write(obj, w){
        w.write(obj, "tsc", "Token", this.Token);
    }

    read(obj, r){
        if (!r.read(obj, "tsc", "Token", this.Token)) return false;
        return true;
    }
}
export class tsc_DeleteSpecialDayGroupResponse extends types.xsd_type
{
    constructor(){
        super();
    }

    write(obj, w){
    }

    read(obj, r){
        return true;
    }
}
export const tds =
{
    message: {
        GetServicesRequest: tds_GetServices,
        GetServicesResponse: tds_GetServicesResponse,
        GetServiceCapabilitiesRequest: tds_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tds_GetServiceCapabilitiesResponse,
        GetDeviceInformationRequest: tds_GetDeviceInformation,
        GetDeviceInformationResponse: tds_GetDeviceInformationResponse,
        SetSystemDateAndTimeRequest: tds_SetSystemDateAndTime,
        SetSystemDateAndTimeResponse: tds_SetSystemDateAndTimeResponse,
        GetSystemDateAndTimeRequest: tds_GetSystemDateAndTime,
        GetSystemDateAndTimeResponse: tds_GetSystemDateAndTimeResponse,
        SetSystemFactoryDefaultRequest: tds_SetSystemFactoryDefault,
        SetSystemFactoryDefaultResponse: tds_SetSystemFactoryDefaultResponse,
        UpgradeSystemFirmwareRequest: tds_UpgradeSystemFirmware,
        UpgradeSystemFirmwareResponse: tds_UpgradeSystemFirmwareResponse,
        SystemRebootRequest: tds_SystemReboot,
        SystemRebootResponse: tds_SystemRebootResponse,
        RestoreSystemRequest: tds_RestoreSystem,
        RestoreSystemResponse: tds_RestoreSystemResponse,
        GetSystemBackupRequest: tds_GetSystemBackup,
        GetSystemBackupResponse: tds_GetSystemBackupResponse,
        GetSystemLogRequest: tds_GetSystemLog,
        GetSystemLogResponse: tds_GetSystemLogResponse,
        GetSystemSupportInformationRequest: tds_GetSystemSupportInformation,
        GetSystemSupportInformationResponse: tds_GetSystemSupportInformationResponse,
        GetScopesRequest: tds_GetScopes,
        GetScopesResponse: tds_GetScopesResponse,
        SetScopesRequest: tds_SetScopes,
        SetScopesResponse: tds_SetScopesResponse,
        AddScopesRequest: tds_AddScopes,
        AddScopesResponse: tds_AddScopesResponse,
        RemoveScopesRequest: tds_RemoveScopes,
        RemoveScopesResponse: tds_RemoveScopesResponse,
        GetDiscoveryModeRequest: tds_GetDiscoveryMode,
        GetDiscoveryModeResponse: tds_GetDiscoveryModeResponse,
        SetDiscoveryModeRequest: tds_SetDiscoveryMode,
        SetDiscoveryModeResponse: tds_SetDiscoveryModeResponse,
        GetRemoteDiscoveryModeRequest: tds_GetRemoteDiscoveryMode,
        GetRemoteDiscoveryModeResponse: tds_GetRemoteDiscoveryModeResponse,
        SetRemoteDiscoveryModeRequest: tds_SetRemoteDiscoveryMode,
        SetRemoteDiscoveryModeResponse: tds_SetRemoteDiscoveryModeResponse,
        GetDPAddressesRequest: tds_GetDPAddresses,
        GetDPAddressesResponse: tds_GetDPAddressesResponse,
        GetEndpointReferenceRequest: tds_GetEndpointReference,
        GetEndpointReferenceResponse: tds_GetEndpointReferenceResponse,
        GetRemoteUserRequest: tds_GetRemoteUser,
        GetRemoteUserResponse: tds_GetRemoteUserResponse,
        SetRemoteUserRequest: tds_SetRemoteUser,
        SetRemoteUserResponse: tds_SetRemoteUserResponse,
        GetUsersRequest: tds_GetUsers,
        GetUsersResponse: tds_GetUsersResponse,
        CreateUsersRequest: tds_CreateUsers,
        CreateUsersResponse: tds_CreateUsersResponse,
        DeleteUsersRequest: tds_DeleteUsers,
        DeleteUsersResponse: tds_DeleteUsersResponse,
        SetUserRequest: tds_SetUser,
        SetUserResponse: tds_SetUserResponse,
        GetWsdlUrlRequest: tds_GetWsdlUrl,
        GetWsdlUrlResponse: tds_GetWsdlUrlResponse,
        GetCapabilitiesRequest: tds_GetCapabilities,
        GetCapabilitiesResponse: tds_GetCapabilitiesResponse,
        SetDPAddressesRequest: tds_SetDPAddresses,
        SetDPAddressesResponse: tds_SetDPAddressesResponse,
        GetHostnameRequest: tds_GetHostname,
        GetHostnameResponse: tds_GetHostnameResponse,
        SetHostnameRequest: tds_SetHostname,
        SetHostnameResponse: tds_SetHostnameResponse,
        SetHostnameFromDHCPRequest: tds_SetHostnameFromDHCP,
        SetHostnameFromDHCPResponse: tds_SetHostnameFromDHCPResponse,
        GetDNSRequest: tds_GetDNS,
        GetDNSResponse: tds_GetDNSResponse,
        SetDNSRequest: tds_SetDNS,
        SetDNSResponse: tds_SetDNSResponse,
        GetNTPRequest: tds_GetNTP,
        GetNTPResponse: tds_GetNTPResponse,
        SetNTPRequest: tds_SetNTP,
        SetNTPResponse: tds_SetNTPResponse,
        GetDynamicDNSRequest: tds_GetDynamicDNS,
        GetDynamicDNSResponse: tds_GetDynamicDNSResponse,
        SetDynamicDNSRequest: tds_SetDynamicDNS,
        SetDynamicDNSResponse: tds_SetDynamicDNSResponse,
        GetNetworkInterfacesRequest: tds_GetNetworkInterfaces,
        GetNetworkInterfacesResponse: tds_GetNetworkInterfacesResponse,
        SetNetworkInterfacesRequest: tds_SetNetworkInterfaces,
        SetNetworkInterfacesResponse: tds_SetNetworkInterfacesResponse,
        GetNetworkProtocolsRequest: tds_GetNetworkProtocols,
        GetNetworkProtocolsResponse: tds_GetNetworkProtocolsResponse,
        SetNetworkProtocolsRequest: tds_SetNetworkProtocols,
        SetNetworkProtocolsResponse: tds_SetNetworkProtocolsResponse,
        GetNetworkDefaultGatewayRequest: tds_GetNetworkDefaultGateway,
        GetNetworkDefaultGatewayResponse: tds_GetNetworkDefaultGatewayResponse,
        SetNetworkDefaultGatewayRequest: tds_SetNetworkDefaultGateway,
        SetNetworkDefaultGatewayResponse: tds_SetNetworkDefaultGatewayResponse,
        GetZeroConfigurationRequest: tds_GetZeroConfiguration,
        GetZeroConfigurationResponse: tds_GetZeroConfigurationResponse,
        SetZeroConfigurationRequest: tds_SetZeroConfiguration,
        SetZeroConfigurationResponse: tds_SetZeroConfigurationResponse,
        GetIPAddressFilterRequest: tds_GetIPAddressFilter,
        GetIPAddressFilterResponse: tds_GetIPAddressFilterResponse,
        SetIPAddressFilterRequest: tds_SetIPAddressFilter,
        SetIPAddressFilterResponse: tds_SetIPAddressFilterResponse,
        AddIPAddressFilterRequest: tds_AddIPAddressFilter,
        AddIPAddressFilterResponse: tds_AddIPAddressFilterResponse,
        RemoveIPAddressFilterRequest: tds_RemoveIPAddressFilter,
        RemoveIPAddressFilterResponse: tds_RemoveIPAddressFilterResponse,
        GetAccessPolicyRequest: tds_GetAccessPolicy,
        GetAccessPolicyResponse: tds_GetAccessPolicyResponse,
        SetAccessPolicyRequest: tds_SetAccessPolicy,
        SetAccessPolicyResponse: tds_SetAccessPolicyResponse,
        CreateCertificateRequest: tds_CreateCertificate,
        CreateCertificateResponse: tds_CreateCertificateResponse,
        GetCertificatesRequest: tds_GetCertificates,
        GetCertificatesResponse: tds_GetCertificatesResponse,
        GetCertificatesStatusRequest: tds_GetCertificatesStatus,
        GetCertificatesStatusResponse: tds_GetCertificatesStatusResponse,
        SetCertificatesStatusRequest: tds_SetCertificatesStatus,
        SetCertificatesStatusResponse: tds_SetCertificatesStatusResponse,
        DeleteCertificatesRequest: tds_DeleteCertificates,
        DeleteCertificatesResponse: tds_DeleteCertificatesResponse,
        GetPkcs10RequestRequest: tds_GetPkcs10Request,
        GetPkcs10RequestResponse: tds_GetPkcs10RequestResponse,
        LoadCertificatesRequest: tds_LoadCertificates,
        LoadCertificatesResponse: tds_LoadCertificatesResponse,
        GetClientCertificateModeRequest: tds_GetClientCertificateMode,
        GetClientCertificateModeResponse: tds_GetClientCertificateModeResponse,
        SetClientCertificateModeRequest: tds_SetClientCertificateMode,
        SetClientCertificateModeResponse: tds_SetClientCertificateModeResponse,
        GetRelayOutputsRequest: tds_GetRelayOutputs,
        GetRelayOutputsResponse: tds_GetRelayOutputsResponse,
        SetRelayOutputSettingsRequest: tds_SetRelayOutputSettings,
        SetRelayOutputSettingsResponse: tds_SetRelayOutputSettingsResponse,
        SetRelayOutputStateRequest: tds_SetRelayOutputState,
        SetRelayOutputStateResponse: tds_SetRelayOutputStateResponse,
        SendAuxiliaryCommandRequest: tds_SendAuxiliaryCommand,
        SendAuxiliaryCommandResponse: tds_SendAuxiliaryCommandResponse,
        GetCACertificatesRequest: tds_GetCACertificates,
        GetCACertificatesResponse: tds_GetCACertificatesResponse,
        LoadCertificateWithPrivateKeyRequest: tds_LoadCertificateWithPrivateKey,
        LoadCertificateWithPrivateKeyResponse: tds_LoadCertificateWithPrivateKeyResponse,
        GetCertificateInformationRequest: tds_GetCertificateInformation,
        GetCertificateInformationResponse: tds_GetCertificateInformationResponse,
        LoadCACertificatesRequest: tds_LoadCACertificates,
        LoadCACertificatesResponse: tds_LoadCACertificatesResponse,
        CreateDot1XConfigurationRequest: tds_CreateDot1XConfiguration,
        CreateDot1XConfigurationResponse: tds_CreateDot1XConfigurationResponse,
        SetDot1XConfigurationRequest: tds_SetDot1XConfiguration,
        SetDot1XConfigurationResponse: tds_SetDot1XConfigurationResponse,
        GetDot1XConfigurationRequest: tds_GetDot1XConfiguration,
        GetDot1XConfigurationResponse: tds_GetDot1XConfigurationResponse,
        GetDot1XConfigurationsRequest: tds_GetDot1XConfigurations,
        GetDot1XConfigurationsResponse: tds_GetDot1XConfigurationsResponse,
        DeleteDot1XConfigurationRequest: tds_DeleteDot1XConfiguration,
        DeleteDot1XConfigurationResponse: tds_DeleteDot1XConfigurationResponse,
        GetDot11CapabilitiesRequest: tds_GetDot11Capabilities,
        GetDot11CapabilitiesResponse: tds_GetDot11CapabilitiesResponse,
        GetDot11StatusRequest: tds_GetDot11Status,
        GetDot11StatusResponse: tds_GetDot11StatusResponse,
        ScanAvailableDot11NetworksRequest: tds_ScanAvailableDot11Networks,
        ScanAvailableDot11NetworksResponse: tds_ScanAvailableDot11NetworksResponse,
        GetSystemUrisRequest: tds_GetSystemUris,
        GetSystemUrisResponse: tds_GetSystemUrisResponse,
        StartFirmwareUpgradeRequest: tds_StartFirmwareUpgrade,
        StartFirmwareUpgradeResponse: tds_StartFirmwareUpgradeResponse,
        StartSystemRestoreRequest: tds_StartSystemRestore,
        StartSystemRestoreResponse: tds_StartSystemRestoreResponse,
        GetStorageConfigurationsRequest: tds_GetStorageConfigurations,
        GetStorageConfigurationsResponse: tds_GetStorageConfigurationsResponse,
        CreateStorageConfigurationRequest: tds_CreateStorageConfiguration,
        CreateStorageConfigurationResponse: tds_CreateStorageConfigurationResponse,
        GetStorageConfigurationRequest: tds_GetStorageConfiguration,
        GetStorageConfigurationResponse: tds_GetStorageConfigurationResponse,
        SetStorageConfigurationRequest: tds_SetStorageConfiguration,
        SetStorageConfigurationResponse: tds_SetStorageConfigurationResponse,
        DeleteStorageConfigurationRequest: tds_DeleteStorageConfiguration,
        DeleteStorageConfigurationResponse: tds_DeleteStorageConfigurationResponse,
    },
}
export const tev =
{
    message: {
        PullMessagesRequest: tev_PullMessages,
        PullMessagesResponse: tev_PullMessagesResponse,
        PullMessagesFaultResponse: tev_PullMessagesFaultResponse,
        SeekRequest: tev_Seek,
        SeekResponse: tev_SeekResponse,
        SetSynchronizationPointRequest: tev_SetSynchronizationPoint,
        SetSynchronizationPointResponse: tev_SetSynchronizationPointResponse,
        GetServiceCapabilitiesRequest: tev_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tev_GetServiceCapabilitiesResponse,
        CreatePullPointSubscriptionRequest: tev_CreatePullPointSubscription,
        CreatePullPointSubscriptionResponse: tev_CreatePullPointSubscriptionResponse,
        GetEventPropertiesRequest: tev_GetEventProperties,
        GetEventPropertiesResponse: tev_GetEventPropertiesResponse,
    },
}
export const wsrf_rw =
{
    message: {
        ResourceUnknownFault: wsrf_r_ResourceUnknownFault,
    },
}
export const wsntw =
{
    message: {
        InvalidFilterFault: wsnt_InvalidFilterFault,
        TopicExpressionDialectUnknownFault: wsnt_TopicExpressionDialectUnknownFault,
        InvalidTopicExpressionFault: wsnt_InvalidTopicExpressionFault,
        TopicNotSupportedFault: wsnt_TopicNotSupportedFault,
        InvalidProducerPropertiesExpressionFault: wsnt_InvalidProducerPropertiesExpressionFault,
        InvalidMessageContentExpressionFault: wsnt_InvalidMessageContentExpressionFault,
        UnacceptableInitialTerminationTimeFault: wsnt_UnacceptableInitialTerminationTimeFault,
        UnrecognizedPolicyRequestFault: wsnt_UnrecognizedPolicyRequestFault,
        UnsupportedPolicyRequestFault: wsnt_UnsupportedPolicyRequestFault,
        NotifyMessageNotSupportedFault: wsnt_NotifyMessageNotSupportedFault,
        SubscribeCreationFailedFault: wsnt_SubscribeCreationFailedFault,
        RenewRequest: wsnt_Renew,
        RenewResponse: wsnt_RenewResponse,
        UnacceptableTerminationTimeFault: wsnt_UnacceptableTerminationTimeFault,
        UnsubscribeRequest: wsnt_Unsubscribe,
        UnsubscribeResponse: wsnt_UnsubscribeResponse,
        UnableToDestroySubscriptionFault: wsnt_UnableToDestroySubscriptionFault,
        SubscribeRequest: wsnt_Subscribe,
        SubscribeResponse: wsnt_SubscribeResponse,
        GetCurrentMessageRequest: wsnt_GetCurrentMessage,
        GetCurrentMessageResponse: wsnt_GetCurrentMessageResponse,
        NoCurrentMessageOnTopicFault: wsnt_NoCurrentMessageOnTopicFault,
        MultipleTopicsSpecifiedFault: wsnt_MultipleTopicsSpecifiedFault,
        Notify: wsnt_Notify,
        GetMessagesRequest: wsnt_GetMessages,
        GetMessagesResponse: wsnt_GetMessagesResponse,
        UnableToGetMessagesFault: wsnt_UnableToGetMessagesFault,
        DestroyPullPointRequest: wsnt_DestroyPullPoint,
        DestroyPullPointResponse: wsnt_DestroyPullPointResponse,
        UnableToDestroyPullPointFault: wsnt_UnableToDestroyPullPointFault,
        CreatePullPointRequest: wsnt_CreatePullPoint,
        CreatePullPointResponse: wsnt_CreatePullPointResponse,
        UnableToCreatePullPointFault: wsnt_UnableToCreatePullPointFault,
        PauseSubscriptionRequest: wsnt_PauseSubscription,
        PauseSubscriptionResponse: wsnt_PauseSubscriptionResponse,
        PauseFailedFault: wsnt_PauseFailedFault,
        ResumeSubscriptionRequest: wsnt_ResumeSubscription,
        ResumeSubscriptionResponse: wsnt_ResumeSubscriptionResponse,
        ResumeFailedFault: wsnt_ResumeFailedFault,
    },
}
export const timg =
{
    message: {
        GetServiceCapabilitiesRequest: timg_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: timg_GetServiceCapabilitiesResponse,
        GetImagingSettingsRequest: timg_GetImagingSettings,
        GetImagingSettingsResponse: timg_GetImagingSettingsResponse,
        SetImagingSettingsRequest: timg_SetImagingSettings,
        SetImagingSettingsResponse: timg_SetImagingSettingsResponse,
        GetOptionsRequest: timg_GetOptions,
        GetOptionsResponse: timg_GetOptionsResponse,
        MoveRequest: timg_Move,
        MoveResponse: timg_MoveResponse,
        StopRequest: timg_Stop,
        StopResponse: timg_StopResponse,
        GetStatusRequest: timg_GetStatus,
        GetStatusResponse: timg_GetStatusResponse,
        GetMoveOptionsRequest: timg_GetMoveOptions,
        GetMoveOptionsResponse: timg_GetMoveOptionsResponse,
    },
}
export const trt =
{
    message: {
        GetServiceCapabilitiesRequest: trt_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: trt_GetServiceCapabilitiesResponse,
        GetVideoSourcesRequest: trt_GetVideoSources,
        GetVideoSourcesResponse: trt_GetVideoSourcesResponse,
        GetAudioSourcesRequest: trt_GetAudioSources,
        GetAudioSourcesResponse: trt_GetAudioSourcesResponse,
        GetAudioOutputsRequest: trt_GetAudioOutputs,
        GetAudioOutputsResponse: trt_GetAudioOutputsResponse,
        CreateProfileRequest: trt_CreateProfile,
        CreateProfileResponse: trt_CreateProfileResponse,
        GetProfileRequest: trt_GetProfile,
        GetProfileResponse: trt_GetProfileResponse,
        GetProfilesRequest: trt_GetProfiles,
        GetProfilesResponse: trt_GetProfilesResponse,
        AddVideoEncoderConfigurationRequest: trt_AddVideoEncoderConfiguration,
        AddVideoEncoderConfigurationResponse: trt_AddVideoEncoderConfigurationResponse,
        AddVideoSourceConfigurationRequest: trt_AddVideoSourceConfiguration,
        AddVideoSourceConfigurationResponse: trt_AddVideoSourceConfigurationResponse,
        AddAudioEncoderConfigurationRequest: trt_AddAudioEncoderConfiguration,
        AddAudioEncoderConfigurationResponse: trt_AddAudioEncoderConfigurationResponse,
        AddAudioSourceConfigurationRequest: trt_AddAudioSourceConfiguration,
        AddAudioSourceConfigurationResponse: trt_AddAudioSourceConfigurationResponse,
        AddPTZConfigurationRequest: trt_AddPTZConfiguration,
        AddPTZConfigurationResponse: trt_AddPTZConfigurationResponse,
        AddVideoAnalyticsConfigurationRequest: trt_AddVideoAnalyticsConfiguration,
        AddVideoAnalyticsConfigurationResponse: trt_AddVideoAnalyticsConfigurationResponse,
        AddMetadataConfigurationRequest: trt_AddMetadataConfiguration,
        AddMetadataConfigurationResponse: trt_AddMetadataConfigurationResponse,
        AddAudioOutputConfigurationRequest: trt_AddAudioOutputConfiguration,
        AddAudioOutputConfigurationResponse: trt_AddAudioOutputConfigurationResponse,
        AddAudioDecoderConfigurationRequest: trt_AddAudioDecoderConfiguration,
        AddAudioDecoderConfigurationResponse: trt_AddAudioDecoderConfigurationResponse,
        RemoveVideoEncoderConfigurationRequest: trt_RemoveVideoEncoderConfiguration,
        RemoveVideoEncoderConfigurationResponse: trt_RemoveVideoEncoderConfigurationResponse,
        RemoveVideoSourceConfigurationRequest: trt_RemoveVideoSourceConfiguration,
        RemoveVideoSourceConfigurationResponse: trt_RemoveVideoSourceConfigurationResponse,
        RemoveAudioEncoderConfigurationRequest: trt_RemoveAudioEncoderConfiguration,
        RemoveAudioEncoderConfigurationResponse: trt_RemoveAudioEncoderConfigurationResponse,
        RemoveAudioSourceConfigurationRequest: trt_RemoveAudioSourceConfiguration,
        RemoveAudioSourceConfigurationResponse: trt_RemoveAudioSourceConfigurationResponse,
        RemovePTZConfigurationRequest: trt_RemovePTZConfiguration,
        RemovePTZConfigurationResponse: trt_RemovePTZConfigurationResponse,
        RemoveVideoAnalyticsConfigurationRequest: trt_RemoveVideoAnalyticsConfiguration,
        RemoveVideoAnalyticsConfigurationResponse: trt_RemoveVideoAnalyticsConfigurationResponse,
        RemoveMetadataConfigurationRequest: trt_RemoveMetadataConfiguration,
        RemoveMetadataConfigurationResponse: trt_RemoveMetadataConfigurationResponse,
        RemoveAudioOutputConfigurationRequest: trt_RemoveAudioOutputConfiguration,
        RemoveAudioOutputConfigurationResponse: trt_RemoveAudioOutputConfigurationResponse,
        RemoveAudioDecoderConfigurationRequest: trt_RemoveAudioDecoderConfiguration,
        RemoveAudioDecoderConfigurationResponse: trt_RemoveAudioDecoderConfigurationResponse,
        DeleteProfileRequest: trt_DeleteProfile,
        DeleteProfileResponse: trt_DeleteProfileResponse,
        GetVideoSourceConfigurationsRequest: trt_GetVideoSourceConfigurations,
        GetVideoSourceConfigurationsResponse: trt_GetVideoSourceConfigurationsResponse,
        GetVideoEncoderConfigurationsRequest: trt_GetVideoEncoderConfigurations,
        GetVideoEncoderConfigurationsResponse: trt_GetVideoEncoderConfigurationsResponse,
        GetAudioSourceConfigurationsRequest: trt_GetAudioSourceConfigurations,
        GetAudioSourceConfigurationsResponse: trt_GetAudioSourceConfigurationsResponse,
        GetAudioEncoderConfigurationsRequest: trt_GetAudioEncoderConfigurations,
        GetAudioEncoderConfigurationsResponse: trt_GetAudioEncoderConfigurationsResponse,
        GetVideoAnalyticsConfigurationsRequest: trt_GetVideoAnalyticsConfigurations,
        GetVideoAnalyticsConfigurationsResponse: trt_GetVideoAnalyticsConfigurationsResponse,
        GetMetadataConfigurationsRequest: trt_GetMetadataConfigurations,
        GetMetadataConfigurationsResponse: trt_GetMetadataConfigurationsResponse,
        GetAudioOutputConfigurationsRequest: trt_GetAudioOutputConfigurations,
        GetAudioOutputConfigurationsResponse: trt_GetAudioOutputConfigurationsResponse,
        GetAudioDecoderConfigurationsRequest: trt_GetAudioDecoderConfigurations,
        GetAudioDecoderConfigurationsResponse: trt_GetAudioDecoderConfigurationsResponse,
        GetVideoSourceConfigurationRequest: trt_GetVideoSourceConfiguration,
        GetVideoSourceConfigurationResponse: trt_GetVideoSourceConfigurationResponse,
        GetVideoEncoderConfigurationRequest: trt_GetVideoEncoderConfiguration,
        GetVideoEncoderConfigurationResponse: trt_GetVideoEncoderConfigurationResponse,
        GetAudioSourceConfigurationRequest: trt_GetAudioSourceConfiguration,
        GetAudioSourceConfigurationResponse: trt_GetAudioSourceConfigurationResponse,
        GetAudioEncoderConfigurationRequest: trt_GetAudioEncoderConfiguration,
        GetAudioEncoderConfigurationResponse: trt_GetAudioEncoderConfigurationResponse,
        GetVideoAnalyticsConfigurationRequest: trt_GetVideoAnalyticsConfiguration,
        GetVideoAnalyticsConfigurationResponse: trt_GetVideoAnalyticsConfigurationResponse,
        GetMetadataConfigurationRequest: trt_GetMetadataConfiguration,
        GetMetadataConfigurationResponse: trt_GetMetadataConfigurationResponse,
        GetAudioOutputConfigurationRequest: trt_GetAudioOutputConfiguration,
        GetAudioOutputConfigurationResponse: trt_GetAudioOutputConfigurationResponse,
        GetAudioDecoderConfigurationRequest: trt_GetAudioDecoderConfiguration,
        GetAudioDecoderConfigurationResponse: trt_GetAudioDecoderConfigurationResponse,
        GetCompatibleVideoEncoderConfigurationsRequest: trt_GetCompatibleVideoEncoderConfigurations,
        GetCompatibleVideoEncoderConfigurationsResponse: trt_GetCompatibleVideoEncoderConfigurationsResponse,
        GetCompatibleVideoSourceConfigurationsRequest: trt_GetCompatibleVideoSourceConfigurations,
        GetCompatibleVideoSourceConfigurationsResponse: trt_GetCompatibleVideoSourceConfigurationsResponse,
        GetCompatibleAudioEncoderConfigurationsRequest: trt_GetCompatibleAudioEncoderConfigurations,
        GetCompatibleAudioEncoderConfigurationsResponse: trt_GetCompatibleAudioEncoderConfigurationsResponse,
        GetCompatibleAudioSourceConfigurationsRequest: trt_GetCompatibleAudioSourceConfigurations,
        GetCompatibleAudioSourceConfigurationsResponse: trt_GetCompatibleAudioSourceConfigurationsResponse,
        GetCompatibleVideoAnalyticsConfigurationsRequest: trt_GetCompatibleVideoAnalyticsConfigurations,
        GetCompatibleVideoAnalyticsConfigurationsResponse: trt_GetCompatibleVideoAnalyticsConfigurationsResponse,
        GetCompatibleMetadataConfigurationsRequest: trt_GetCompatibleMetadataConfigurations,
        GetCompatibleMetadataConfigurationsResponse: trt_GetCompatibleMetadataConfigurationsResponse,
        GetCompatibleAudioOutputConfigurationsRequest: trt_GetCompatibleAudioOutputConfigurations,
        GetCompatibleAudioOutputConfigurationsResponse: trt_GetCompatibleAudioOutputConfigurationsResponse,
        GetCompatibleAudioDecoderConfigurationsRequest: trt_GetCompatibleAudioDecoderConfigurations,
        GetCompatibleAudioDecoderConfigurationsResponse: trt_GetCompatibleAudioDecoderConfigurationsResponse,
        SetVideoSourceConfigurationRequest: trt_SetVideoSourceConfiguration,
        SetVideoSourceConfigurationResponse: trt_SetVideoSourceConfigurationResponse,
        SetVideoEncoderConfigurationRequest: trt_SetVideoEncoderConfiguration,
        SetVideoEncoderConfigurationResponse: trt_SetVideoEncoderConfigurationResponse,
        SetAudioSourceConfigurationRequest: trt_SetAudioSourceConfiguration,
        SetAudioSourceConfigurationResponse: trt_SetAudioSourceConfigurationResponse,
        SetAudioEncoderConfigurationRequest: trt_SetAudioEncoderConfiguration,
        SetAudioEncoderConfigurationResponse: trt_SetAudioEncoderConfigurationResponse,
        SetVideoAnalyticsConfigurationRequest: trt_SetVideoAnalyticsConfiguration,
        SetVideoAnalyticsConfigurationResponse: trt_SetVideoAnalyticsConfigurationResponse,
        SetMetadataConfigurationRequest: trt_SetMetadataConfiguration,
        SetMetadataConfigurationResponse: trt_SetMetadataConfigurationResponse,
        SetAudioOutputConfigurationRequest: trt_SetAudioOutputConfiguration,
        SetAudioOutputConfigurationResponse: trt_SetAudioOutputConfigurationResponse,
        SetAudioDecoderConfigurationRequest: trt_SetAudioDecoderConfiguration,
        SetAudioDecoderConfigurationResponse: trt_SetAudioDecoderConfigurationResponse,
        GetVideoSourceConfigurationOptionsRequest: trt_GetVideoSourceConfigurationOptions,
        GetVideoSourceConfigurationOptionsResponse: trt_GetVideoSourceConfigurationOptionsResponse,
        GetVideoEncoderConfigurationOptionsRequest: trt_GetVideoEncoderConfigurationOptions,
        GetVideoEncoderConfigurationOptionsResponse: trt_GetVideoEncoderConfigurationOptionsResponse,
        GetAudioSourceConfigurationOptionsRequest: trt_GetAudioSourceConfigurationOptions,
        GetAudioSourceConfigurationOptionsResponse: trt_GetAudioSourceConfigurationOptionsResponse,
        GetAudioEncoderConfigurationOptionsRequest: trt_GetAudioEncoderConfigurationOptions,
        GetAudioEncoderConfigurationOptionsResponse: trt_GetAudioEncoderConfigurationOptionsResponse,
        GetMetadataConfigurationOptionsRequest: trt_GetMetadataConfigurationOptions,
        GetMetadataConfigurationOptionsResponse: trt_GetMetadataConfigurationOptionsResponse,
        GetAudioOutputConfigurationOptionsRequest: trt_GetAudioOutputConfigurationOptions,
        GetAudioOutputConfigurationOptionsResponse: trt_GetAudioOutputConfigurationOptionsResponse,
        GetAudioDecoderConfigurationOptionsRequest: trt_GetAudioDecoderConfigurationOptions,
        GetAudioDecoderConfigurationOptionsResponse: trt_GetAudioDecoderConfigurationOptionsResponse,
        GetGuaranteedNumberOfVideoEncoderInstancesRequest: trt_GetGuaranteedNumberOfVideoEncoderInstances,
        GetGuaranteedNumberOfVideoEncoderInstancesResponse: trt_GetGuaranteedNumberOfVideoEncoderInstancesResponse,
        GetStreamUriRequest: trt_GetStreamUri,
        GetStreamUriResponse: trt_GetStreamUriResponse,
        StartMulticastStreamingRequest: trt_StartMulticastStreaming,
        StartMulticastStreamingResponse: trt_StartMulticastStreamingResponse,
        StopMulticastStreamingRequest: trt_StopMulticastStreaming,
        StopMulticastStreamingResponse: trt_StopMulticastStreamingResponse,
        SetSynchronizationPointRequest: trt_SetSynchronizationPoint,
        SetSynchronizationPointResponse: trt_SetSynchronizationPointResponse,
        GetSnapshotUriRequest: trt_GetSnapshotUri,
        GetSnapshotUriResponse: trt_GetSnapshotUriResponse,
        GetVideoSourceModesRequest: trt_GetVideoSourceModes,
        GetVideoSourceModesResponse: trt_GetVideoSourceModesResponse,
        SetVideoSourceModeRequest: trt_SetVideoSourceMode,
        SetVideoSourceModeResponse: trt_SetVideoSourceModeResponse,
        GetOSDsRequest: trt_GetOSDs,
        GetOSDsResponse: trt_GetOSDsResponse,
        GetOSDRequest: trt_GetOSD,
        GetOSDResponse: trt_GetOSDResponse,
        GetOSDOptionsRequest: trt_GetOSDOptions,
        GetOSDOptionsResponse: trt_GetOSDOptionsResponse,
        SetOSDRequest: trt_SetOSD,
        SetOSDResponse: trt_SetOSDResponse,
        CreateOSDRequest: trt_CreateOSD,
        CreateOSDResponse: trt_CreateOSDResponse,
        DeleteOSDRequest: trt_DeleteOSD,
        DeleteOSDResponse: trt_DeleteOSDResponse,
    },
}
export const tr2 =
{
    message: {
        GetServiceCapabilitiesRequest: tr2_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tr2_GetServiceCapabilitiesResponse2,
        CreateProfileRequest: tr2_CreateProfile,
        CreateProfileResponse: tr2_CreateProfileResponse,
        GetProfilesRequest: tr2_GetProfiles,
        GetProfilesResponse: tr2_GetProfilesResponse,
        AddConfigurationRequest: tr2_AddConfiguration,
        AddConfigurationResponse: tr2_AddConfigurationResponse,
        RemoveConfigurationRequest: tr2_RemoveConfiguration,
        RemoveConfigurationResponse: tr2_RemoveConfigurationResponse,
        DeleteProfileRequest: tr2_DeleteProfile,
        DeleteProfileResponse: tr2_DeleteProfileResponse,
        GetVideoSourceConfigurationsRequest: tr2_GetVideoSourceConfigurations,
        GetVideoSourceConfigurationsResponse: tr2_GetVideoSourceConfigurationsResponse,
        GetVideoEncoderConfigurationsRequest: tr2_GetVideoEncoderConfigurations,
        GetVideoEncoderConfigurationsResponse: tr2_GetVideoEncoderConfigurationsResponse,
        GetAudioSourceConfigurationsRequest: tr2_GetAudioSourceConfigurations,
        GetAudioSourceConfigurationsResponse: tr2_GetAudioSourceConfigurationsResponse,
        GetAudioEncoderConfigurationsRequest: tr2_GetAudioEncoderConfigurations,
        GetAudioEncoderConfigurationsResponse: tr2_GetAudioEncoderConfigurationsResponse,
        GetAnalyticsConfigurationsRequest: tr2_GetAnalyticsConfigurations,
        GetAnalyticsConfigurationsResponse: tr2_GetAnalyticsConfigurationsResponse,
        GetMetadataConfigurationsRequest: tr2_GetMetadataConfigurations,
        GetMetadataConfigurationsResponse: tr2_GetMetadataConfigurationsResponse,
        GetAudioOutputConfigurationsRequest: tr2_GetAudioOutputConfigurations,
        GetAudioOutputConfigurationsResponse: tr2_GetAudioOutputConfigurationsResponse,
        GetAudioDecoderConfigurationsRequest: tr2_GetAudioDecoderConfigurations,
        GetAudioDecoderConfigurationsResponse: tr2_GetAudioDecoderConfigurationsResponse,
        SetVideoSourceConfigurationRequest: tr2_SetVideoSourceConfiguration,
        SetConfigurationResponse: tr2_SetConfigurationResponse,
        SetVideoEncoderConfigurationRequest: tr2_SetVideoEncoderConfiguration,
        SetAudioSourceConfigurationRequest: tr2_SetAudioSourceConfiguration,
        SetAudioEncoderConfigurationRequest: tr2_SetAudioEncoderConfiguration,
        SetMetadataConfigurationRequest: tr2_SetMetadataConfiguration,
        SetAudioOutputConfigurationRequest: tr2_SetAudioOutputConfiguration,
        SetAudioDecoderConfigurationRequest: tr2_SetAudioDecoderConfiguration,
        GetVideoSourceConfigurationOptionsRequest: tr2_GetVideoSourceConfigurationOptions,
        GetVideoSourceConfigurationOptionsResponse: tr2_GetVideoSourceConfigurationOptionsResponse,
        GetVideoEncoderConfigurationOptionsRequest: tr2_GetVideoEncoderConfigurationOptions,
        GetVideoEncoderConfigurationOptionsResponse: tr2_GetVideoEncoderConfigurationOptionsResponse,
        GetAudioSourceConfigurationOptionsRequest: tr2_GetAudioSourceConfigurationOptions,
        GetAudioSourceConfigurationOptionsResponse: tr2_GetAudioSourceConfigurationOptionsResponse,
        GetAudioEncoderConfigurationOptionsRequest: tr2_GetAudioEncoderConfigurationOptions,
        GetAudioEncoderConfigurationOptionsResponse: tr2_GetAudioEncoderConfigurationOptionsResponse,
        GetMetadataConfigurationOptionsRequest: tr2_GetMetadataConfigurationOptions,
        GetMetadataConfigurationOptionsResponse: tr2_GetMetadataConfigurationOptionsResponse,
        GetAudioOutputConfigurationOptionsRequest: tr2_GetAudioOutputConfigurationOptions,
        GetAudioOutputConfigurationOptionsResponse: tr2_GetAudioOutputConfigurationOptionsResponse,
        GetAudioDecoderConfigurationOptionsRequest: tr2_GetAudioDecoderConfigurationOptions,
        GetAudioDecoderConfigurationOptionsResponse: tr2_GetAudioDecoderConfigurationOptionsResponse,
        GetVideoEncoderInstancesRequest: tr2_GetVideoEncoderInstances,
        GetVideoEncoderInstancesResponse: tr2_GetVideoEncoderInstancesResponse,
        GetStreamUriRequest: tr2_GetStreamUri,
        GetStreamUriResponse: tr2_GetStreamUriResponse,
        StartMulticastStreamingRequest: tr2_StartMulticastStreaming,
        StartStopMulticastStreamingResponse: tr2_StartStopMulticastStreamingResponse,
        StopMulticastStreamingRequest: tr2_StopMulticastStreaming,
        SetSynchronizationPointRequest: tr2_SetSynchronizationPoint,
        SetSynchronizationPointResponse: tr2_SetSynchronizationPointResponse,
        GetSnapshotUriRequest: tr2_GetSnapshotUri,
        GetSnapshotUriResponse: tr2_GetSnapshotUriResponse,
        GetVideoSourceModesRequest: tr2_GetVideoSourceModes,
        GetVideoSourceModesResponse: tr2_GetVideoSourceModesResponse,
        SetVideoSourceModeRequest: tr2_SetVideoSourceMode,
        SetVideoSourceModeResponse: tr2_SetVideoSourceModeResponse,
        GetOSDsRequest: tr2_GetOSDs,
        GetOSDsResponse: tr2_GetOSDsResponse,
        GetOSDOptionsRequest: tr2_GetOSDOptions,
        GetOSDOptionsResponse: tr2_GetOSDOptionsResponse,
        SetOSDRequest: tr2_SetOSD,
        CreateOSDRequest: tr2_CreateOSD,
        CreateOSDResponse: tr2_CreateOSDResponse,
        DeleteOSDRequest: tr2_DeleteOSD,
    },
}
export const tptz =
{
    message: {
        GetServiceCapabilitiesRequest: tptz_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tptz_GetServiceCapabilitiesResponse,
        GetConfigurationsRequest: tptz_GetConfigurations,
        GetConfigurationsResponse: tptz_GetConfigurationsResponse,
        GetPresetsRequest: tptz_GetPresets,
        GetPresetsResponse: tptz_GetPresetsResponse,
        SetPresetRequest: tptz_SetPreset,
        SetPresetResponse: tptz_SetPresetResponse,
        RemovePresetRequest: tptz_RemovePreset,
        RemovePresetResponse: tptz_RemovePresetResponse,
        GotoPresetRequest: tptz_GotoPreset,
        GotoPresetResponse: tptz_GotoPresetResponse,
        GetStatusRequest: tptz_GetStatus,
        GetStatusResponse: tptz_GetStatusResponse,
        GetConfigurationRequest: tptz_GetConfiguration,
        GetConfigurationResponse: tptz_GetConfigurationResponse,
        GetNodesRequest: tptz_GetNodes,
        GetNodesResponse: tptz_GetNodesResponse,
        GetNodeRequest: tptz_GetNode,
        GetNodeResponse: tptz_GetNodeResponse,
        SetConfigurationRequest: tptz_SetConfiguration,
        SetConfigurationResponse: tptz_SetConfigurationResponse,
        GetConfigurationOptionsRequest: tptz_GetConfigurationOptions,
        GetConfigurationOptionsResponse: tptz_GetConfigurationOptionsResponse,
        GotoHomePositionRequest: tptz_GotoHomePosition,
        GotoHomePositionResponse: tptz_GotoHomePositionResponse,
        SetHomePositionRequest: tptz_SetHomePosition,
        SetHomePositionResponse: tptz_SetHomePositionResponse,
        ContinuousMoveRequest: tptz_ContinuousMove,
        ContinuousMoveResponse: tptz_ContinuousMoveResponse,
        RelativeMoveRequest: tptz_RelativeMove,
        RelativeMoveResponse: tptz_RelativeMoveResponse,
        SendAuxiliaryCommandRequest: tptz_SendAuxiliaryCommand,
        SendAuxiliaryCommandResponse: tptz_SendAuxiliaryCommandResponse,
        AbsoluteMoveRequest: tptz_AbsoluteMove,
        AbsoluteMoveResponse: tptz_AbsoluteMoveResponse,
        StopRequest: tptz_Stop,
        StopResponse: tptz_StopResponse,
        GetPresetToursRequest: tptz_GetPresetTours,
        GetPresetToursResponse: tptz_GetPresetToursResponse,
        GetPresetTourRequest: tptz_GetPresetTour,
        GetPresetTourResponse: tptz_GetPresetTourResponse,
        GetPresetTourOptionsRequest: tptz_GetPresetTourOptions,
        GetPresetTourOptionsResponse: tptz_GetPresetTourOptionsResponse,
        CreatePresetTourRequest: tptz_CreatePresetTour,
        CreatePresetTourResponse: tptz_CreatePresetTourResponse,
        ModifyPresetTourRequest: tptz_ModifyPresetTour,
        ModifyPresetTourResponse: tptz_ModifyPresetTourResponse,
        OperatePresetTourRequest: tptz_OperatePresetTour,
        OperatePresetTourResponse: tptz_OperatePresetTourResponse,
        RemovePresetTourRequest: tptz_RemovePresetTour,
        RemovePresetTourResponse: tptz_RemovePresetTourResponse,
        GetCompatibleConfigurationsRequest: tptz_GetCompatibleConfigurations,
        GetCompatibleConfigurationsResponse: tptz_GetCompatibleConfigurationsResponse,
    },
}
export const tth =
{
    message: {
        GetServiceCapabilitiesRequest: tth_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tth_GetServiceCapabilitiesResponse,
        GetConfigurationOptionsRequest: tth_GetConfigurationOptions,
        GetConfigurationOptionsResponse: tth_GetConfigurationOptionsResponse,
        GetConfigurationRequest: tth_GetConfiguration,
        GetConfigurationResponse: tth_GetConfigurationResponse,
        SetConfigurationRequest: tth_SetConfiguration,
        SetConfigurationResponse: tth_SetConfigurationResponse,
    },
}
export const tan_ =
{
    message: {
        GetSupportedRulesRequest: tan__GetSupportedRules,
        GetSupportedRulesResponse: tan__GetSupportedRulesResponse,
        CreateRulesRequest: tan__CreateRules,
        CreateRulesResponse: tan__CreateRulesResponse,
        DeleteRulesRequest: tan__DeleteRules,
        DeleteRulesResponse: tan__DeleteRulesResponse,
        GetRulesRequest: tan__GetRules,
        GetRulesResponse: tan__GetRulesResponse,
        ModifyRulesRequest: tan__ModifyRules,
        ModifyRulesResponse: tan__ModifyRulesResponse,
        GetServiceCapabilitiesRequest: tan__GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tan__GetServiceCapabilitiesResponse,
        GetSupportedAnalyticsModulesRequest: tan__GetSupportedAnalyticsModules,
        GetSupportedAnalyticsModulesResponse: tan__GetSupportedAnalyticsModulesResponse,
        CreateAnalyticsModulesRequest: tan__CreateAnalyticsModules,
        CreateAnalyticsModulesResponse: tan__CreateAnalyticsModulesResponse,
        DeleteAnalyticsModulesRequest: tan__DeleteAnalyticsModules,
        DeleteAnalyticsModulesResponse: tan__DeleteAnalyticsModulesResponse,
        GetAnalyticsModulesRequest: tan__GetAnalyticsModules,
        GetAnalyticsModulesResponse: tan__GetAnalyticsModulesResponse,
        ModifyAnalyticsModulesRequest: tan__ModifyAnalyticsModules,
        ModifyAnalyticsModulesResponse: tan__ModifyAnalyticsModulesResponse,
    },
}
export const tad =
{
    message: {
        GetServiceCapabilitiesRequest: tad_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tad_GetServiceCapabilitiesResponse,
        DeleteAnalyticsEngineControlRequest: tad_DeleteAnalyticsEngineControl,
        DeleteAnalyticsEngineControlResponse: tad_DeleteAnalyticsEngineControlResponse,
        CreateAnalyticsEngineControlRequest: tad_CreateAnalyticsEngineControl,
        CreateAnalyticsEngineControlResponse: tad_CreateAnalyticsEngineControlResponse,
        SetAnalyticsEngineControlRequest: tad_SetAnalyticsEngineControl,
        SetAnalyticsEngineControlResponse: tad_SetAnalyticsEngineControlResponse,
        GetAnalyticsEngineControlRequest: tad_GetAnalyticsEngineControl,
        GetAnalyticsEngineControlResponse: tad_GetAnalyticsEngineControlResponse,
        GetAnalyticsEngineControlsRequest: tad_GetAnalyticsEngineControls,
        GetAnalyticsEngineControlsResponse: tad_GetAnalyticsEngineControlsResponse,
        GetAnalyticsEngineRequest: tad_GetAnalyticsEngine,
        GetAnalyticsEngineResponse: tad_GetAnalyticsEngineResponse,
        GetAnalyticsEnginesRequest: tad_GetAnalyticsEngines,
        GetAnalyticsEnginesResponse: tad_GetAnalyticsEnginesResponse,
        SetVideoAnalyticsConfigurationRequest: tad_SetVideoAnalyticsConfiguration,
        SetVideoAnalyticsConfigurationResponse: tad_SetVideoAnalyticsConfigurationResponse,
        SetAnalyticsEngineInputRequest: tad_SetAnalyticsEngineInput,
        SetAnalyticsEngineInputResponse: tad_SetAnalyticsEngineInputResponse,
        GetAnalyticsEngineInputRequest: tad_GetAnalyticsEngineInput,
        GetAnalyticsEngineInputResponse: tad_GetAnalyticsEngineInputResponse,
        GetAnalyticsEngineInputsRequest: tad_GetAnalyticsEngineInputs,
        GetAnalyticsEngineInputsResponse: tad_GetAnalyticsEngineInputsResponse,
        GetAnalyticsDeviceStreamUriRequest: tad_GetAnalyticsDeviceStreamUri,
        GetAnalyticsDeviceStreamUriResponse: tad_GetAnalyticsDeviceStreamUriResponse,
        GetVideoAnalyticsConfigurationRequest: tad_GetVideoAnalyticsConfiguration,
        GetVideoAnalyticsConfigurationResponse: tad_GetVideoAnalyticsConfigurationResponse,
        CreateAnalyticsEngineInputsRequest: tad_CreateAnalyticsEngineInputs,
        CreateAnalyticsEngineInputsResponse: tad_CreateAnalyticsEngineInputsResponse,
        DeleteAnalyticsEngineInputsRequest: tad_DeleteAnalyticsEngineInputs,
        DeleteAnalyticsEngineInputsResponse: tad_DeleteAnalyticsEngineInputsResponse,
        GetAnalyticsStateRequest: tad_GetAnalyticsState,
        GetAnalyticsStateResponse: tad_GetAnalyticsStateResponse,
    },
}
export const tae =
{
    message: {
        GetSupportedActionsRequest: tae_GetSupportedActions,
        GetSupportedActionsResponse: tae_GetSupportedActionsResponse,
        GetActionsRequest: tae_GetActions,
        GetActionsResponse: tae_GetActionsResponse,
        CreateActionsRequest: tae_CreateActions,
        CreateActionsResponse: tae_CreateActionsResponse,
        DeleteActionsRequest: tae_DeleteActions,
        DeleteActionsResponse: tae_DeleteActionsResponse,
        ModifyActionsRequest: tae_ModifyActions,
        ModifyActionsResponse: tae_ModifyActionsResponse,
        GetServiceCapabilitiesRequest: tae_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tae_GetServiceCapabilitiesResponse,
        GetActionTriggersRequest: tae_GetActionTriggers,
        GetActionTriggersResponse: tae_GetActionTriggersResponse,
        CreateActionTriggersRequest: tae_CreateActionTriggers,
        CreateActionTriggersResponse: tae_CreateActionTriggersResponse,
        DeleteActionTriggersRequest: tae_DeleteActionTriggers,
        DeleteActionTriggersResponse: tae_DeleteActionTriggersResponse,
        ModifyActionTriggersRequest: tae_ModifyActionTriggers,
        ModifyActionTriggersResponse: tae_ModifyActionTriggersResponse,
    },
}
export const tsc =
{
    message: {
        GetServiceCapabilitiesRequest: tsc_GetServiceCapabilities,
        GetServiceCapabilitiesResponse: tsc_GetServiceCapabilitiesResponse,
        GetScheduleStateRequest: tsc_GetScheduleState,
        GetScheduleStateResponse: tsc_GetScheduleStateResponse,
        GetScheduleInfoRequest: tsc_GetScheduleInfo,
        GetScheduleInfoResponse: tsc_GetScheduleInfoResponse,
        GetScheduleInfoListRequest: tsc_GetScheduleInfoList,
        GetScheduleInfoListResponse: tsc_GetScheduleInfoListResponse,
        GetSchedulesRequest: tsc_GetSchedules,
        GetSchedulesResponse: tsc_GetSchedulesResponse,
        GetScheduleListRequest: tsc_GetScheduleList,
        GetScheduleListResponse: tsc_GetScheduleListResponse,
        CreateScheduleRequest: tsc_CreateSchedule,
        CreateScheduleResponse: tsc_CreateScheduleResponse,
        ModifyScheduleRequest: tsc_ModifySchedule,
        ModifyScheduleResponse: tsc_ModifyScheduleResponse,
        DeleteScheduleRequest: tsc_DeleteSchedule,
        DeleteScheduleResponse: tsc_DeleteScheduleResponse,
        GetSpecialDayGroupInfoRequest: tsc_GetSpecialDayGroupInfo,
        GetSpecialDayGroupInfoResponse: tsc_GetSpecialDayGroupInfoResponse,
        GetSpecialDayGroupInfoListRequest: tsc_GetSpecialDayGroupInfoList,
        GetSpecialDayGroupInfoListResponse: tsc_GetSpecialDayGroupInfoListResponse,
        GetSpecialDayGroupsRequest: tsc_GetSpecialDayGroups,
        GetSpecialDayGroupsResponse: tsc_GetSpecialDayGroupsResponse,
        GetSpecialDayGroupListRequest: tsc_GetSpecialDayGroupList,
        GetSpecialDayGroupListResponse: tsc_GetSpecialDayGroupListResponse,
        CreateSpecialDayGroupRequest: tsc_CreateSpecialDayGroup,
        CreateSpecialDayGroupResponse: tsc_CreateSpecialDayGroupResponse,
        ModifySpecialDayGroupRequest: tsc_ModifySpecialDayGroup,
        ModifySpecialDayGroupResponse: tsc_ModifySpecialDayGroupResponse,
        DeleteSpecialDayGroupRequest: tsc_DeleteSpecialDayGroup,
        DeleteSpecialDayGroupResponse: tsc_DeleteSpecialDayGroupResponse,
    },
}
