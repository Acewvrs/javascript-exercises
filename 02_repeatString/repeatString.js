const repeatString = function(string_input, n) {
  if (n < 0) {
      return 'ERROR';
  }
  else if (n === 0) {
      return '';
  }

  concatenated_str = string_input;
  for (let i = 0; i < n - 1; i++) {
    concatenated_str += string_input;
  }
  return concatenated_str;
};

// Do not edit below this line
module.exports = repeatString;
