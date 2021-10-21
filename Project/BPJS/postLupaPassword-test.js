/*
NOTE:
 FITUR	    :	Lupa Password	
 METHOD	    :	POST
 DESKRIPSI	:	Fitur untuk mengirimkan data perubahan password			
 URL	      :	{Base URL}/{Service Name}/login/ubahpassword			

RULES:
RESP
1. validasi terhadap username dan email
2. di mobile pastikan
3. mengirimkan link perubahan ke email
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
