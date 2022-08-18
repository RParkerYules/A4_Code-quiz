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





// Code to write the randomly generated password to the screen; Initiated via 'click' in HTML;

function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");
      passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)


// This next section tells the user to add a number from 8-128 to select the number of chars in their password.

function generatePassword() {

var lengthPrompt = "";

  while (true) {
    var lengthPrompt = prompt("Pleae enter a number between 8 to 128 for password length.");

// If no input, then prompt to entewr a value
    if (!lengthPrompt) {
      lengthPrompt = prompt("Please add a value");
    }    

// If a number less than 8, greater than 128, or a special char is entered, then this applies
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      lengthPrompt = prompt("Please add a value higher than 8 or lower than 128");
    }

// If a valid number is entered, then this applies
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      break;
    } 
  }

  lengthPrompt = parseInt(lengthPrompt);

  console.log(lengthPrompt)

  var choices = []

// ask if user wants to include numbers
    let includeNumbers = window.confirm ("Would you like to include Numbers?");

      if (includeNumbers) {
        choices = choices.concat(number);
    }

// ask if user wants to include lower case
    let includeLowerCase = window.confirm ("Would you like to include Lower Case characters?");

      if (includeLowerCase) {
        choices = choices.concat(lowerCase);
    }

// ask if user wants to include upper case
    let includeUpperCase = window.confirm ("Would you like to include Upper Case characters?");

    if (includeUpperCase) {
      choices = choices.concat(lowerCase);
    }

// ask if user wants to include special characters
    let includeSpChar = window.confirm ("Would you like to include Special Characters?");

    if (includeSpChar) {
      choices = choices.concat(lowerCase);
    }
    
 var totalChoices = choices.length  


// Function that will generate the new password - length is the number of chars entered
  var randomPassword = [];
  

// This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i < lengthPrompt; i++) {
    var randomChoice = choices[Math.floor(Math.random() * totalChoices)];
    
    randomPassword.push(randomChoice);
  }

  console.log(randomPassword);

// Display the randomly generated password
  return randomPassword.join("");
}

