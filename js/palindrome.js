var isPalindrome = function (x) {
  return x == x.toString().split("").reverse().join("");
};

console.log(isPalindrome(232));
console.log(isPalindrome(223));
