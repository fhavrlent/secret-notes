import { AES, enc } from 'crypto-js';

export const encryptValue = (value: string, password: string) =>
  AES.encrypt(value, password, {
    iv: enc.Base64.parse(password),
  }).toString();

export const decryptValue = (encryptedValue: string, password: string) =>
  AES.decrypt(encryptedValue, password).toString(enc.Utf8);
