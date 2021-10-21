/*
NOTE:
 FITUR	    :	Referensi jenis vaksin	
 METHOD	    :	GET
 DESKRIPSI	:	Mengambil referensi jenis vaksin			
 USAGE	    :	Entri dan update data pelaksanaan vaksinasi			
 URL	    :	{Base URL}/{Service Name}/referensi/alasan			

*/

import http from 'k6/http';

var getRefJenVaksUrl = '';
export default function () {
  const url = getRefJenVaksUrl;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}