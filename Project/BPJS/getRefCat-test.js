/*
 FITUR	    :	Referensi Kategori Sasaran	
 METHOD	    :	GET
 DESKRIPSI	:	Mengambil data referensi kategori sasaran			
 USAGE	    :	Pemilihan referensi sasaran pada proses entri data sasaran baru (go show)			
 URL	      :	{Base URL}/{Service Name}/referensi/kategorisasaran			

RULES:
BODY
1. Pencarian referensi kategori sasaran berdasarkan input oleh user, minimal 3 karakter
RESP
2. proses memilih kategori sasaran harus diawali dengan pencarian dari petugas terlebih dahulu"
1. Menampilkan referensi kategori sasaran dalam bentuk row data dengan informasi Nama Kelompok dan Nama Kategori Sasaran

*/

import http from 'k6/http';

var getRefCatUrl = '';
export default function () {
  const url = getRefCatUrl;
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kdppk' : '0905R002'
    },
  };

  http.get(url, params);
}


/*
expected response
 {
        "kodekategori": "11",
        "namakelompok": "PETUGAS PUBLIK",
        "namakategori": "ATLIT"
      },
      {
        "kodekategori": "17",
        "namakelompok": "PETUGAS PUBLIK",
        "namakategori": "BUMD"
      },
      {
        "kodekategori": "16",
        "namakelompok": "PETUGAS PUBLIK",
        "namakategori": "BUMN "
      }
    ]
  },
  "metaData": {
    "message": "OK",
    "code": 200
  }
}
*/