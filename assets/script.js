// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
// Sets the pasword text value to 'password' 
  passwordText.value = password;

  var password=document.getElementById("password");

  function generatePassword() {
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = math.floor(Math.random() *characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
  }

  console.log ('password')

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword () {
  document.getElementById("password").value = password;

}
