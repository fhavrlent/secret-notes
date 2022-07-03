import cryptoJs from 'crypto-js';

export const encryptValue = (value: string, password: string) =>
  cryptoJs.AES.encrypt(value, password, {
    iv: cryptoJs.enc.Base64.parse(password),
  }).toString();

export const decryptValue = (encryptedValue: string, password: string) => {
  console.log('hh');
  return cryptoJs.AES.decrypt(encryptedValue, password).toString(cryptoJs.enc.Utf8);
};
