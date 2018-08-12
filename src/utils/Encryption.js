
import CryptoJS from 'crypto-js';
/**
 * 接口使用AES/ECB/PKCS5Padding
 */
class Encryption {

  static encryptFun (data) {
    let key = CryptoJS.enc.Latin1.parse('IYnGgQe8jDfADSFWDbEWzdPDMEnsdDuI');
    let iv = CryptoJS.enc.Latin1.parse('XYgGnQE2jDFADSXF');
    let encrypted = CryptoJS.AES.encrypt(
      data,
      key,
      {
        iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }
  
  static decayFun (encrypted,key,iv) {
	  key = CryptoJS.enc.Utf8.parse(key);
	  iv = CryptoJS.enc.Utf8.parse(iv);
	  let decrypted = CryptoJS.AES.decrypt(encrypted, key,
		  {
			  iv: iv,
			  mode: CryptoJS.mode.ECB,
			  padding: CryptoJS.pad.Pkcs7
		  });
	  return decrypted.toString(CryptoJS.enc.Utf8);
  }

}

export default Encryption;
