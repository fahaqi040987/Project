/*
NOTED:
    FITUR	    :	Simpan data pelaksanaan vaksinasi	
    METHOD	    :	POST
    DESKRIPSI	:	Menyimpan data pelaksananaan vaksinasi			
    USAGE	    :	Entri data pelaksanaan vaksinasi			
    URL	        :	{Base URL}/{Service Name}/vaksin/simpan			

*/

import http from 'k6/http';

var postHasVakUrl = '';
export default function () {
  const url = postHasVakUrl;
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.post(url, payload, params);
}
