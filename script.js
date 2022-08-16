// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array containing numbers from 0 to 1
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array containing letters from A to Z in uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", ];
// Array containing letters from a to z in lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ];
// Array containing the special characters for the password
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// This variable is used for the concanation of the variables later
var choices = [];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // This next line of code is used to tell the user to add a value, and if they don't add a correct value. They will be reminded.
  while (true) {
    var firstPrompt = prompt("How long would you like your password to be? Choose between 8 to 20 characters.");
    if (!firstPrompt) {
      alert("Please add a value");
    } else if (firstPrompt < 8 || firstPrompt > 20) {
      prompt("Please add a value higher than 8 or lower than 20");
    } else {
      break;
    }
  }

  // This next line of code is used to ask the user how they would like their password to be like.
  if (confirm("Do you want numbers?")) {
    choices = choices.concat(number);
  }
  if (confirm("Do you want special characters?")) {
    choices = choices.concat(spChar);
  }
  if (confirm("Do you want upper case characters?")) {
    choices = choices.concat(upperCase);
  }
  if (confirm("Do you want lower case characters?")) {
    choices = choices.concat(lowerCase);
  }
  // This next line of code is used in case no option has been chosen for the password generator
  if (choices.length == 0) {
    alert("Please choose a criteria");
  }

  // empty array that will contain the new empty password
  var randomPassword = [];
  // This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i < firstPrompt; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);