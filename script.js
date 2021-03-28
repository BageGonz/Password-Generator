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

var passChart = [];




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Math.random();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // passChart.concat(specCharacterSet);
   var lastPass = "";

  //ask user how many would you like
  var passwordLength = prompt("Enter the length of you password between 8 and 128 characters");
  //If statement to dertermine if length is between 8 and 128
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must be at least 8 charcters and no more than 128. Please input again.")
    return

  }
// When user says ok, it will add numbers. If cancel, nothing will be added and the next question will load.
  var yesNumbers = confirm("Include Numbers?");
  if (yesNumbers) {
    passChart = passChart.concat(numberSet);
  }
// If user says ok, it will add special characters. 
  var yesSpecialChat = confirm("Includes special characters?");
  if (yesSpecialChat) {
    passChart = passChart.concat(specCharacterSet);
  }
  // If user says ok, uppercase letters will be added.
  var yesUpperCase = confirm("Includes uppercase?");
  if (yesUpperCase) {
    passChart = passChart.concat(upperCaseSet);
  }
// If user says ok, lowercase letters will be added.
  var yesLowerCase = confirm("Includes lowercase?")
  if (yesLowerCase) {
    passChart = passChart.concat(lowerCaseSet);
  }
// For loop will pull a random numbers and/or from 0-96 and place them in index
  for (let i = 0; i < passwordLength; i++) {
    var charInd = Math.floor(Math.random() * passChart.length);
    
    lastPass += passChart[charInd];

  }
  console.log(lastPass)
  
  console.log(yesNumbers);

  console.log(passwordLength);

  console.log(yesSpecialChat);

  console.log(yesUpperCase);

  console.log(lowerCaseSet);

  return lastPass;

}//End of generatePassword
