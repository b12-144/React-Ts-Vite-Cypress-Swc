import { formatDate } from './dateMask';

describe('Date Mask', () => {

  it('Should accept only numbers and remove all letters', () => {
    const result = formatDate('1212200a');
    expect(result).toBe('12/12/200');
  });

  it('Should add date mask', () => {
    const result = formatDate('12122000');
    expect(result).toBe('12/12/2000');
  });

  it('Should accept only 8 digits', () => {
    const result = formatDate('121220001');
    expect(result).toBe('12/12/2000');
  });

});