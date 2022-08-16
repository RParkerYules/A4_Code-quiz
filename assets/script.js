// Assignment Code

var generateBtn = document.querySelector("#generate");
// Array containing numbers from 0 to 9
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array containing letters from A to Z in uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", ];
// Array containing letters from a to z in lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ];
// Array containing the special characters
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// This variable is used for the concanation of the variables later
var choices = [];
var passwordLength = 8;
var password = "";


// Generate the password that will be displayed on screen
function generatePassword() {

var randomPassword = [];

for (var i = 0; i <= passwordLength; i++) {
  var randomPassword = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomPassword, randomPassword +1);
 }
   return randomPassword.join("");

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword () {
  document.getElementById("password").value = password;

}
