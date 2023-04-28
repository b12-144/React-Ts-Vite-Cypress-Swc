import { formatPostalCode } from "./postalCodeMask";

describe('CEP Mask', () => {

    it('Should accept only numbers and remove all letters', () => {
      const result = formatPostalCode('1234567a');
      expect(result).toBe('12345-67');
    });
  
    it('Should add cep mask', () => {
      const result = formatPostalCode('12345678');
      expect(result).toBe('12345-678');
    });
  
    it('Should accept only 8 digits', () => {
      const result = formatPostalCode('123456789');
      expect(result).toBe('12345-678');
    });
  
  });