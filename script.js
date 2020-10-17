// Assignment Code
var chars = ["a", "b", "c", "d"]
var nums = [1, 2, 3, 4, 5, 6, 7, 8,]
var sChars = ["@", "$", "!", "(", "^"]
var emojis = ["😁", "😎", "🤞", "✌"]
var possibles = []
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

function generate(){
  var possibles = []

  // prompt length of pass
var length = parseInt(prompt("How long does this password need to be?"))

// character type prompts
if (length <8 || length > 128 || isNaN(length)) {
  alert("no can do, refresh the page")
} else {
  var charsTrue = confirm("do you want chars?")
  var numsTrue = confirm("do you want numbers?")
  var sCharsTrue = confirm("do you want special characters")
  var emojisTrue = confirm("do you want emojis")

  if(charsTrue) {possibles.push(chars)}
  if(numsTrue) {possibles.push(nums)} 
  if(sCharsTrue) {possibles.push(sChars)}
  if(emojisTrue) {possibles.push(emojis)}


  var pw = ""

  while (pw.length < length) {
    for(let i = 0; i < possibles.length; i++) {
      if (pw.length < length) {
        let rand = Math.floor(Math.random() * possibles[i].length)
        pw += possibles[i][rand]
      }
    }
  }
  console.log(pw)
  passwordText.value = pw;

}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();


}

// Add event listener to generate button
generateBtn.addEventListener("click", generate);
