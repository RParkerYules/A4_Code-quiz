// Global variable defining the function "Generate"
var generateBtn = document.querySelector("#generatePassword");

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
// This next section tells the user to add a number from 8-20 to select the number of chars in their password.
function generatePassword() {
// The while loop continually loops through this block of code as long as the condition is true.
  while (true) {
    var lengthPrompt = prompt("Pleae enter a number between 8 to 20 for password length.");
    
    if (!lengthPrompt) {
      alert("Please add a value");

    if (lengthPrompt < 8 || lengthPrompt > 20) {
        prompt("Please add a value higher than 8 or lower than 20");
  
    if (length => 8 || length <= 20) break;

    return lengthVal;

  }

  // empty array that will contain the new empty password
  var randomPassword = [];
  // This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i < lengthVal; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");


