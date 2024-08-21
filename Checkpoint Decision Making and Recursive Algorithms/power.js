function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  // Example usage:
power(2, 3) // 2^3 = 8