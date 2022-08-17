// Global variable defining the function "Generate"
var generateBtn = document.querySelector("#generatePassword");

// Array containing numbers from 0 to 9
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array containing letters from A to Z in uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", ];
// Array containing letters from a to z in lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ];
// Array containing the special characters for the password
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// This variable is used to concanate the numbers, upper case, lower case & special characters into one string

var choices = (upperCase.concat(number).concat(spChar).concat(lowerCase));
var totalChoices = choices.length


// Code to write the randomly generated password to the screen; 
// Initiated via 'click' in HTML;
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// This next section tells the user to add a number from 8-20 to select the number of chars in their password.
function generatePassword() {
// The while loop continually loops through this block of code as long as the condition is true.
  while (true) {
    var lengthPrompt = prompt("Pleae enter a number between 8 to 20 for password length.");

// If no input, then prompt to entewr a value
    if (!lengthPrompt) {
      prompt("Please add a value");
    }    

// If a number less than 8, greater than 20, or a special char is entered, then this applies
    if (lengthPrompt < 8 || lengthPrompt > 20) {
      prompt("Please add a value higher than 8 or lower than 20");
  }

// If a valid number is entered, then this applies
  if (lengthPrompt >= 8 && lengthPrompt <= 20) {
      break;
    } 
  }

// Function that will generate the new password - length is the number of chars entered
  var randomPassword = [];

// This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i < lengthPrompt; i++) {
    var randomChoice = choices[Math.floor(Math.random() * totalChoices)];
    
    randomPassword.push(randomChoice);
  }
// Display the randomly generated password
  return randomPassword.join("");
}

