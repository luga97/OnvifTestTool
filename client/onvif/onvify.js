import * as lib from './libonvif';
import * as schemas from "./onvif_schemas";
import * as binding from "./onvif_bindings";

export default function Run(cmd){
  let obj = new lib.soap_object();
  obj.host = location.host;
  obj.username = "admin";
  obj.password = "admin";

  let _def, input, output;
  _def = eval('new schemas.tds.message.' + cmd + 'Request()');
  input = _def;

  _def = eval('new schemas.tds.message.' + cmd + 'Response()');
  output = _def;

  _def = eval('binding.DeviceBinding.' + cmd + '(obj, input, output)');
  let result = _def;

  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if ( result )
        resolve( output );
      else
        reject(new Error('[Failed]'));
    }, 500);
  });
}