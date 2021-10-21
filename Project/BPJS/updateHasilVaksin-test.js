/*
NOTED:
    FITUR	    :	Update data pelaksanaan vaksinasi	
    METHOD	    :	PUT
    DESKRIPSI	:	Menyimpan data perubahan hasil pelaksananaan vaksinasi			
    USAGE	    :	Update data pelaksanaan vaksinasi			
    URL	        :	{Base URL}/{Service Name}/vaksin/ubah			

*/
import http from 'k6/http';

var updateHasVaksUrl = '';
export default function () {
  const url = updateHasVaksUrl;
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

  http.put(url, payload, params);
}