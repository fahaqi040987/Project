/*
 FITUR	    :	Simpan data Sasaran Baru	
 METHOD	    :	POST
 DESKRIPSI	:	Menyimpan data pendaftaran sasaran baru			
 USAGE	    :	Entri data sasaran baru (go show)			
 URL	      :	{Base URL}/{Service Name}/sasaran/simpan			

RULES:
BODY
1. Hanya dapat disimpan apabila petugas sudah menanyakan inform concern kepada peserta yang ditandai dengan 
centang inform concern

Isian inform concern:
□ Data telah di input dengan BENAR dan Peserta menyetujui data yang bersangkutan akan disimpan pada database 
BPJS Kesehatan dan selanjutnya akan disampaikan ke Kementerian Kesehatan untuk kepentingan 
pelaksanaan pelayanan Vaksinasi COVID - 19
*/
import http from 'k6/http';
const loginUrl = '';
const userLogin = '';
const emailUser = '';
export default function () {
  const url = loginUrl;
  const payload = JSON.stringify({ 
    "nik":"11111111111111",
    "noTiket":"XXXXXX",
    "nama":"XXXXX",
    "tglLahir":"YYYY-MM-DD",
    "noHp" : "081232432532",
    "kodeKategori": "XX",
    "alamat":"sadasdsafas",
    "isCetak":"0"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kddpk' : '0905R002'
    },
  };

  http.post(url, payload, params);
}