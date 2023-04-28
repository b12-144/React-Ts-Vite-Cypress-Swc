import { formatPhone } from './phoneMask';

describe('Phone Mask', () => {

  it('Should accept only numbers and remove all letters', () => {
    const result = formatPhone('123456789a');
    expect(result).toBe('(12) 3456-789');
  });

  it('Should add phone mask', () => {
    const result = formatPhone('1234567890');
    expect(result).toBe('(12) 3456-7890');
  });

  it('Should add cell phone mask', () => {
    const result = formatPhone('12345678900');
    expect(result).toBe('(12) 34567-8900');
  });

  it('Should accept max 11 digits ', () => {
    const result = formatPhone('123456789000');
    expect(result).toBe('(12) 34567-8900');
  });

});