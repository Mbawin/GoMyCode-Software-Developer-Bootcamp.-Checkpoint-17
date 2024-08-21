function isLeapYear(year) {
    switch (true) {
      case year % 400 === 0:
        return true;
      case year % 100 === 0:
        return false;
      case year % 4 === 0:
        return true;
      default:
        return false;
    }
  }
  
  const year = 2024;
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }