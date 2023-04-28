export const formatDecimalNumber = (rawNumber: string, decimalPoints: number) => {
    const onlyNumbers = parseFloat(rawNumber.replace(/\D/g, ''));
  
    if (!isNaN(onlyNumbers)) {
      return (onlyNumbers / Math.pow(10, decimalPoints)).toFixed(decimalPoints);
    }
  
    return '0.00';
  };