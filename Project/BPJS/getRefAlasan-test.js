/*
NOTE:
 FITUR	    :	Referensi alasan entri backdate	
 METHOD	    :	GET
 DESKRIPSI	:	Mengambil data alasan entri backdate apabila saat memilih anggal vaksin <> tanggal today			
 USAGE	    :	Entri dan update data pelaksanaan vaksinasi			
 URL	    :	{Base URL}/{Service Name}/referensi/jenisvaksin			

*/
import http from 'k6/http';

var getRefAlasanUrl = '';
export default function () {
  const url = getRefAlasanUrl;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}