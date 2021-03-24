// Assignment Code
var specCharacterSet = [
  "!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "]", "[", "{", "}", "||", "="
];

var numberSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"

];

var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"

];

var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"

];




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var passwordLength = prompt("Enter the length of you password");
  //If statement to dertermine if length is between 8 and 128

  var yesNumbers = confirm("Include Numbers ");
  var yesSpecialChat = confirm("Includes special characters");
  var yesUpperCase = confirm("Includes uppercase");
  console.log(yesNumbers);

  console.log(passwordLength);
  return 
}