import { decryptValue, encryptValue } from './crypto';

describe('crypto', () => {
  describe('encryptValue', () => {
    it('correctly encrypts a value', () => {
      const value = 'test';
      const password = 'password';
      const encryptedValue = encryptValue(value, password);

      expect(encryptedValue).not.toEqual(value);
    });
  });

  describe('decryptValue', () => {
    it('correctly decrypts a value', () => {
      const value = 'John Doe';
      const password = 'password';
      const encryptedValue = 'U2FsdGVkX19UBJVClGhZ6Nc3riJfWfvkMpp9O97SiPk=';
      const decryptedValue = decryptValue(encryptedValue, password);

      expect(decryptedValue).toEqual(value);
    });

    it('returns wrong result for bad password', () => {
      const value = 'John Doe';
      const password = 'passsword';
      const encryptedValue = 'U2FsdGVkX19UBJVClGhZ6Nc3riJfWfvkMpp9O97SiPk=';
      const decryptedValue = decryptValue(encryptedValue, password);

      expect(decryptedValue).not.toEqual(value);
    });
  });
});
