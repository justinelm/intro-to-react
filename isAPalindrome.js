console.clear()
function isPalindrome(input) {
  let reversedWord = input.split('')
    .reverse()
    .join('')
  const isAPalindrome = input === reversedWord
  return isAPalindrome
}

console.log(isPalindrome('racecar'))