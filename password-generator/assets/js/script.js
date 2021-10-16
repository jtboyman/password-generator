// Assignment code here

//function generatePassword() {}

var userPasswordMaker = [];
const lowercaseOptions = ["a","b","c","d","e","f","g","h",'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseOptions = ["A","B","C","D","E","F","G","H",'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numericOptions = ["0",'1','2','3','4','5','6','7','8','9'];
const specialOptions = ['(','@','!','#','$','%','^','&','*',')'];

let getLength = function() {
  //Prompt for password length and only accept integers 8-128, otherwise prompt again
let promptLength = prompt("Please select the number of characters to determine your password's length. You can type any number 8 through 128 (Decimals will be rounded to the nearest integer).");
if (promptLength === "" || promptLength === null) {
  alert("Please type a number 8 through 128.");
  return getLength();
}

  else if (promptLength >= 8 && promptLength <= 128) {
    return passwordLength = Math.round(promptLength);
  } 
    else {
      alert("Please type a number 8 through 128.");
      return getLength();
    }
}

let confirmLowercase = function () {
  //Prompt to ask if password should include lowercase letters

  let promptLowercase = prompt("Should password include lowercase characters? Type 'Y' for yes or 'N' for no.");

  if (promptLowercase === "" || promptLowercase === null) {
    alert("Please type 'Y' or 'N' to make your selection.");
    return confirmLowercase();
  }
    else if (promptLowercase === 'y' || promptLowercase === 'Y') {
      //move on to uppercase prompt, push lowercase array into empty
      for (let i of lowercaseOptions) {
        userPasswordMaker.push(i);
      };
      alert("Lowercase characters have been added.");
      return userPasswordMaker;
    }
      else if (promptLowercase === 'n' || promptLowercase === 'N') {
        //move on to uppercase prompt, disallow lowercase letters;
        alert("Lowercase characters have not been added.")
        return userPasswordMaker;
      }
        else {
          alert("Please type 'Y' or 'N' to make your selection.");
          return confirmLowercase();
        }
}

let confirmUppercase = function() {

  let promptUppercase = prompt("Should password include uppercase characters? Type 'Y' for yes or 'N' for no.");

  if (promptUppercase === "" || promptUppercase === null) {
    alert("Please type 'Y' or 'N' to make your selection.");
    return confirmUppercase();
  }
    else if (promptUppercase === 'y' || promptUppercase === 'Y') {
      //move on to numeric prompt, allow uppercase letters;
      for (let i of uppercaseOptions) {
        userPasswordMaker.push(i);
      };
      alert("Uppercase characters have been added.");
      return userPasswordMaker;
    }
      else if (promptUppercase === 'n' || promptUppercase === 'N') {
        //move on to numeric prompt, disallow uppercase letters;
        alert("Uppercase characters have not been added.")
        return userPasswordMaker;
      }
        else {
          alert("Please type 'Y' or 'N' to make your selection.");
          return confirmUppercase();
        }
}

let confirmNumerics = function() {

    //prompt for numerics

    let promptNumerics = prompt("Should password include numbers? Type 'Y' for yes or 'N' for no.");

    if (promptNumerics === "" || promptNumerics === null) {
      alert("Please type 'Y' or 'N' to make your selection.");
      return confirmNumerics();
    }
      else if (promptNumerics === 'y' || promptNumerics === 'Y') {
        //move on to specials prompt, allow numbers;
        for (let i of numericOptions) {
          userPasswordMaker.push(i);
        };
        alert("Numbers have been added.");
        return userPasswordMaker;
      }
        else if (promptNumerics === 'n' || promptNumerics === 'N') {
          //move on to specials prompt, disallow numbers;
          alert("Numbers have not been added.");
          return userPasswordMaker;
        }
          else {
            alert("Please type 'Y' or 'N' to make your selection.");
            return confirmNumerics();
          }
}

let confirmSpecials = function() {

    //prompt for special characters

    let promptSpecials = prompt("Should password include special characters? Type 'Y' for yes or 'N' for no.");

    if (promptSpecials === "" || promptSpecials === null) {
      alert("Please type 'Y' or 'N' to make your selection.");
      return confirmSpecials();
    }
      else if (promptSpecials === 'y' || promptSpecials === 'Y') {
        //create password, allow special characters;
        for (let i of specialOptions) {
          userPasswordMaker.push(i);
        };
        alert("Special characters have been added.");
        return userPasswordMaker;
      }
        else if (promptSpecials === 'n' || promptSpecials === 'N') {
          //create password, disallow special characters;
          alert("Special characters have not been added.");
          return userPasswordMaker;
        }
          else {
            alert("Please type 'Y' or 'N' to make your selection.");
            return confirmSpecials();
          }
}
//gen random value
let randomCharacter = function() {
  let value = userPasswordMaker[Math.floor(Math.random() * userPasswordMaker.length)];
  return value;
};

let generatePassword = function() {
  getLength();
  confirmLowercase();
  confirmUppercase();
  confirmNumerics();
  confirmSpecials();

  let finalPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    finalPassword.push(randomCharacter());

  }
  if (userPasswordMaker.length === 0) {
    alert("Please choose at least one type of character to include.");
    generatePassword();
  }
      else 

        return finalPassword.join("");
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
