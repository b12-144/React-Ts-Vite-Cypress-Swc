import { formatDecimalNumber } from './decimalNumberMask';

describe('Decimal Numbers Mask', () => {

  it('Should accept only numbers and remove all letters', () => {
    const result = formatDecimalNumber('12a', 2);
    expect(result).toBe('0.12');
  });

  it('Should add decimal mask', () => {
    const result = formatDecimalNumber('1234', 3);
    expect(result).toBe('1.234');
  });

  it('Should add decimal mask to numbers with 0 at right side', () => {
    const result = formatDecimalNumber('5000', 2);
    expect(result).toBe('50.00');
  });

  it('Should return 0 if value is empty', () => {
    const result = formatDecimalNumber('', 3);
    expect(result).toBe('0.00');
  });

  it('Should return 0 if value has no numbers', () => {
    const result = formatDecimalNumber('a', 3);
    expect(result).toBe('0.00');
  });

});