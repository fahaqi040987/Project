/*
NOTE:
 FITUR	    :	Get data vaksinasi	
 METHOD	    :	GET
 DESKRIPSI	:	Mengambil spesifik data pelaksanaan vaksinasi per tiket			
 USAGE	    :	Initial data saat perubahan data pelaksanaan vaksinasi			
 URL	    :	{Base URL}/{Service Name}/datavaksin/notiket/{notiket}			

RULES:
BODY
1. No Tiket didapat pada proses List Vaksinasi
RESP
1. Response dipergunakan sebagai initial data dalam perubahan data pelaksanaan vaksinasi
*/

import http from 'k6/http';

var getDataVaksinasiUrl = '';
export default function () {
  const url = getDataVaksinasiUrl   ;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}