// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var input = [""];

var randomPassword = "";


// Function to prompt user for password options
function getPasswordOptions() {


  //Prompts user choice for lowercases
  var lowercaseConfirm = confirm("Include lowercase letters?");
  if (lowercaseConfirm === true) {
    for (var i = 0; i < lowerCasedCharacters.length; i++) {
      input.push(lowerCasedCharacters[i]);
    }

  }

  //Prompts user choice for uppercases
  var uppercaseConfirm = confirm("Include uppercase letters?");
  if (uppercaseConfirm === true) {
    for (var i = 0; i < upperCasedCharacters.length; i++) {
      input.push(upperCasedCharacters[i]);
    }

  }

  //Prompts user choice for numbers
  var numberConfirm = confirm("Include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < numericCharacters.length; i++) {
      input.push(numericCharacters[i]);
    }

  }

  //Prompts user choice for specialscharacters
  var specialsConfirm = confirm("Include special characters?");
  if (specialsConfirm === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      input.push(specialCharacters[i]);
    }

  }

  // condition for select at least one character type for their password.
  if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialsConfirm === false) {
    alert("You must chose at least 1 type of character.")
    return;
  }


}

// Function for getting a random element from an array
function getRandom(arr) {

  var passwordLength = prompt("Enter required amount of characters:")

  //validate for valid password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid entry - Please enter a number between 8 and 128");
    return
  }

  //calling getPasswordOptions function
  input[arr] = getPasswordOptions();


  var randomPassword = ""

  //Changes passLength string to intergers
  const confirmLength = parseInt(passwordLength)

  for (var i = 0; i < confirmLength; i++) {
    input[
      Math.floor(Math.random() * input.length)];

    randomPassword += input[
      Math.floor(Math.random() * input.length)];
  }
  return randomPassword;

}

// Function to generate password with user input
function generatePassword() {

  //calling getRandom function
  randomPassword = getRandom();

  return randomPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);