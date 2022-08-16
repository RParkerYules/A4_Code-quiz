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
    var lengthPrompt = prompt("Password Length: Enter between 8 to 20 to define characters.");
    if (!lengthPrompt) {
      alert("Please add a value");
    } else if (lengthPrompt < 8 || lengthPrompt > 20) {
      prompt("Please add a value higher than 8 or lower than 20");
    
  }
  // There is a problem here, as the app is asking me to enter the numbet of chars, I enter them and it asks again.
  // Then when I insert the second input it accepts, but doesn't run the code below to generate the password
  // I need to fix that bug, and then add the logic to generate a random password





  // empty array that will contain the new empty password
  var randomPassword = [];
  // This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i < lengthPrompt; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);