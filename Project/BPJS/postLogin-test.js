/*
NOTE:
 FITUR	    :	Login	
 METHOD	    :	POST
 DESKRIPSI	:	Verifikasi username dan password sesuai dengan login aplikasi PCare Vaksin			
 URL	      :	{Base URL}/{Service Name}/login			

RULES:
BODY
1. Username dan Password tidak boleh null
RESP
1. Apabila sukses maka response code = 200
2. Selain response code 200, tampilkan metaData message
3. KodePPK dan NamaPPK dipergunakan untuk menampilkan identitas dari user login
4. KodePPK akan dipergunakan sebagai header pada method lainnya

*/
import http from 'k6/http';
const loginUrl = '';
const userLogin = '';
const emailUser = '';
export default function () {
  const url = loginUrl;
  const payload = JSON.stringify({
    username :"user4",
    email:"xxxx@gmail.com"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'x-kddpk' : '0905R002'
    },
  };

  http.post(url, payload, params);
}

/*
EXPECTED RESULT:
{
  "response": {
    "kdPpk": "0905R002",
    "nmPpk": "RSPI SULIANTI SAROSO",
    "email": "rspi3@gmail.com"
  },
  "metaData": {
    "message": "OK",
    "code": 200
  }
} 
*/