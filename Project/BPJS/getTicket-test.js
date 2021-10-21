/*
NOTE:
 FITUR	    :	Cek Tiket Aktif	
 METHOD	    :	GET
 DESKRIPSI	:	Untuk melihat apabila peserta memiliki tiket yang aktif dan dapat dipergunakan untuk melakukan vaksinasi			
 USAGE	    :	Cek tiket pada proses entri data pelaksanaan vaksinasi			
 URL	      :	{Base URL}/{Service Name}/tiket/jenis/{jns}/nopencarian/{no}/tanggal/{tgl}			

RULES:
BODY
1. Parameter no Pencarian dapat berupa No Tiket/ NIK / ID PNA OI, ketentuan sebagai berikut:
No Tiket : panjang harus 10 digit dengan digit kedua karakter -, contoh (A-01J783G1) 
NIK : panjang harus 16 digit dan numerik
ID PNA / OI : panjang minimal 6 digit dan alfanumerik
2. Parameter tanggal : format YYYY-MM-DD
*/
import http from 'k6/http';

var getTicket = '';
export default function () {
  const url = getTicket;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}