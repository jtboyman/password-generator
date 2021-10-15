// Assignment code here

function generatePassword() {
  let promptLength = window.prompt("Please select the number of characters to determine your password's length. You can type any number 8 through 128 (Decimals will be rounded to the nearest integer).");
  //Prompt for password length and only accept integers 8-128 
  if (promptLength === "" || promptLength === null) {
    window.alert("Please type a number 8 through 128.");
    return generatePassword();
  }

    else if (promptLength >= 8 && promptLength <= 128) {
      console.log(Math.round(promptLength));
    } 
      else {
        window.alert("Please type a number 8 through 128.");
        return generatePassword();
      }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
