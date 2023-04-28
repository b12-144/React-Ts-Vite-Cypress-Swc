export const formatPhone = (rawPhone: string) => {
    let onlyNumbers = rawPhone.replace(/\D/g, '').replace(/^0/, '');
    if (onlyNumbers.length > 10) {
      onlyNumbers = onlyNumbers.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (onlyNumbers.length > 5) {
      onlyNumbers = onlyNumbers.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (onlyNumbers.length > 2) {
      onlyNumbers = onlyNumbers.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    } else {
      onlyNumbers = onlyNumbers.replace(/^(\d*)/, '($1');
    }
    return onlyNumbers;
  };