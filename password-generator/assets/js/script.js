// Assignment code here

function generatePassword() {

    //Prompt for password length and only accept integers 8-128, otherwise prompt again
  let promptLength = window.prompt("Please select the number of characters to determine your password's length. You can type any number 8 through 128 (Decimals will be rounded to the nearest integer).");
//turn this into a FUNCTION
  if (promptLength === "" || promptLength === null) {
    window.alert("Please type a number 8 through 128.");
    return generatePassword();
  }

    else if (promptLength >= 8 && promptLength <= 128) {
      Math.round(promptLength);
    } 
      else {
        window.alert("Please type a number 8 through 128.");
        return generatePassword();
      }

  //Prompt to ask if password should include lowercase letters

  let promptLowercase = window.prompt("Should password include lowercase characters? Type 'Y' for yes or 'N' for no.");

  if (promptLowercase === "" || promptLowercase === null) {
    window.alert("Please type 'Y' or 'N' to make your selection.");
    return //whatever this function gets named
  }
    else if (promptLowercase === 'y' || promptLowercase === 'Y') {
      //move on to uppercase prompt, allow lowercase letters;
    }
      else if (promptLowercase === 'n' || promptLowercase === 'N') {
        //move on to uppercase prompt, disallow lowercase letters;
      }
        else {
          window.alert("Please type 'Y' or 'N' to make your selection.");
          return //whatever this function gets named
        }

  //prompt for uppercase

  let promptUppercase = window.prompt("Should password include uppercase characters? Type 'Y' for yes or 'N' for no.");

  if (promptUppercase === "" || promptUppercase === null) {
    window.alert("Please type 'Y' or 'N' to make your selection.");
    return //whatever this function gets named
  }
    else if (promptUppercase === 'y' || promptUppercase === 'Y') {
      //move on to numeric prompt, allow uppercase letters;
    }
      else if (promptUppercase === 'n' || promptUppercase === 'N') {
        //move on to numeric prompt, disallow uppercase letters;
      }
        else {
          window.alert("Please type 'Y' or 'N' to make your selection.");
          return //whatever this function gets named
        }

  //prompt for numerics

  let promptNumerics = window.prompt("Should password include numbers? Type 'Y' for yes or 'N' for no.");

  if (promptNumerics === "" || promptNumerics === null) {
    window.alert("Please type 'Y' or 'N' to make your selection.");
    return //whatever this function gets named
  }
    else if (promptNumerics === 'y' || promptNumerics === 'Y') {
      //move on to specials prompt, allow numbers;
    }
      else if (promptNumerics === 'n' || promptNumerics === 'N') {
        //move on to specials prompt, disallow numbers;
      }
        else {
          window.alert("Please type 'Y' or 'N' to make your selection.");
          return //whatever this function gets named
        }

  //prompt for special characters

  let promptSpecials = window.prompt("Should password include special characters? Type 'Y' for yes or 'N' for no.");

  if (promptSpecials === "" || promptSpecials === null) {
    window.alert("Please type 'Y' or 'N' to make your selection.");
    return //whatever this function gets named
  }
    else if (promptSpecials === 'y' || promptSpecials === 'Y') {
      //create password, allow special characters;
    }
      else if (promptSpecials === 'n' || promptSpecials === 'N') {
        //create password, disallow special characters;
      }
        else {
          window.alert("Please type 'Y' or 'N' to make your selection.");
          return //whatever this function gets named
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
