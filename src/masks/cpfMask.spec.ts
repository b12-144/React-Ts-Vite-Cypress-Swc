import { formatCpf } from './cpfMask';

describe('CPF Mask', () => {

  it('Should accept only numbers and remove all letters', () => {
    const result = formatCpf('1234567890a');
    expect(result).toBe('123.456.789-0');
  });

  it('Should add cpf mask', () => {
    const result = formatCpf('12345678900');
    expect(result).toBe('123.456.789-00');
  });

  it('Should accept only 11 digits', () => {
    const result = formatCpf('123456789012');
    expect(result).toBe('123.456.789-01');
  });

});