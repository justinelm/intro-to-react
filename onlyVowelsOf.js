console.clear()
function onlyVowelsOf(input){
  return input.toLowerCase().match(/[aeiou]/ig).join('')
}

console.log(onlyVowelsOf('letsgoboiis'))