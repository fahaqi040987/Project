/*
NOTE:
 FITUR	    :	Cek Tiket Aktif By NIK	
 METHOD	    :	GET
 DESKRIPSI	:	Dipergunakan dalam melakukan validasi pada proses go show dengan parameter NIK.			
 USAGE	    :	Cek tiket pada proses entri data sasaran baru (go show)			
 URL	      :	{Base URL}/{Service Name}/tiket/nik/{nik}			

RULES:
BODY
1. Parameter NIK  harus 16 digit dan numerik
RESP
1. Jika data ditemukan dengan parameter response isEdit = 1, maka form dipergunakan untuk perubahan data
2. Jika data ditemukan dengan parameter response isEdit = 0, maka form dipergunakan untuk tambah data sasaran baru
3. Jika data tidak ditemukan, maka tampilkan pesan ""Data tidak ditemukan di dukcapil"" / sesuai dengan metaData message"

*/
import http from 'k6/http';

var getTicketByNik = '';
export default function () {
  const url = getTicketByNik;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}