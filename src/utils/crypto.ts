import { AES, enc, lib } from 'crypto-js';

export const encryptValue = (value: string, password: string) =>
  AES.encrypt(value, password).toString();

export const decryptValue = (encryptedValue: string, password: string) =>
  AES.decrypt(encryptedValue, password).toString(enc.Utf8);

export const getRandomPassword = () => lib.WordArray.random(128 / 8).toString();
