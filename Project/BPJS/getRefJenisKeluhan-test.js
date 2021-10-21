/*
NOTED:
 FITUR	    :	Referensi jenis keluhan	
 METHOD	    :	GET
 DESKRIPSI	:	Mengambil referensi jenis keluhan apabila hasil observasi adalah ada keluhan			
 USAGE	    :	Entri dan update data pelaksanaan vaksinasi			
 URL	    :	{Base URL}/{Service Name}/referensi/keluhan			

*/

import http from 'k6/http';

var getRefJenKelUrl = '';
export default function () {
  const url = getRefJenKelUrl;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}