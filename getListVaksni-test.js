/*
 FITUR	    :	Get list vaksinasi	
 METHOD	    :	GET
 DESKRIPSI	:	Mengambil data pelaksanaan vaksinasi yang telah dientri oleh faskes per tanggal			
 USAGE	    :	Lihat data untuk melakukan perubahan data pelaksanaan vaksinasi			
 URL	    :	{Base URL}/{Service Name}/datavaksin/tanggal/{tglvaksin}			

RULES:
BODY:
1. Pemilihan tanggal pelaksanaan vaksin
2. terdapat input pencarian data minimal 3 karakter
3. Parameter tanggal : format YYYY-MM-DD
RESP:
1. Menampilkan data dalam bentuk row data apabila terdapat lebih dari 1 data lainnya
2. Dapat diklik untuk melakukan perubahan data dengan hit API Get Data Vaksinasi

*/
import http from 'k6/http';

var getListVaksinUrl = '';
export default function () {
  const url = getListVaksinUrl;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}