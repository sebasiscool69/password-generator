var password = [''];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '#', '$', '%', '&', '*', '+', '/', '<', '=', '>', '?', '@', '~'];


function generatePassword() {

var characterQuestion = parseInt(
  window.prompt("How many characters would you like to include?")
);
if (characterQuestion === '') {
  window.alert("Password length must be provided as a number");
}
if (characterQuestion < 8) {
  window.alert("Minimum character count should be 8");
}
else if (characterQuestion > 128) {
  window.alert("Maximum character count should be 128");
}
  var numberQuestion = window.confirm("Would you like to include numbers?");
  var specialCharactersQuestion = window.confirm("Would you like to include special characters?");
  var uppercaseQuestion = window.confirm("Would you like to include uppercase characters?");
  var lowercaseQuestion = window.confirm("Would you like to include lower case characters?");

  if (numberQuestion === true) {
    password = password += numberQuestion;
  }
  if (specialCharactersQuestion === true) {
    password = password += specialCharactersQuestion;
  }
  if (uppercaseQuestion === true) {
    password = password += uppercaseQuestion;
  }
  if (lowercaseQuestion === true) {
    password = password += lowercaseQuestion;
  }
}

generatePassword();

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
