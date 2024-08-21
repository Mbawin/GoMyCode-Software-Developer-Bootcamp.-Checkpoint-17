function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (str.length <= 1) {
      return true;
    }
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  
isPalindrome("Radar")