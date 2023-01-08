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

// new empty array to push selected characters too
var randomArray = [];
charLength = 0;
var password = '';

//Character confirm Questions
function getRandom() {

  var charLower = confirm("Would you like lower case characters?");
  var charUpper = confirm("Would you like Uppercase characters?");
  var charNum = confirm("Would you like numbers?");
  var charSpec = confirm("Would you like special characters?");

  //conditions, at least one character type needs to be selected to loop through objects
  if (!charLower && !charUpper && !charNum && !charSpec) {
    alert("You must select at least one character type")
    return;
  } else {
      // Push the chosen arrays from the prompt to an empty array
      if (charLower) randomArray.push(lowerCasedCharacters);
      if (charUpper) randomArray.push(upperCasedCharacters);
      if (charNum) randomArray.push(numericCharacters);
      if (charSpec) randomArray.push(specialCharacters);

      // Initialize the password string
      var password = '';

      //while password length is less than chosen length
      while (password.length < charLength) {
        //add a random character to the empty array/randomArray
        var randomArrayIndex = Math.floor(Math.random() * randomArray.length);
        var randomCharIndex = Math.floor(Math.random() * randomArray[randomArrayIndex].length);

        // Add the randomly selected character to the password string
        password += randomArray[randomArrayIndex][randomCharIndex];

      
    }

    // return password;
    return console.log(password);

  }
  
}



// Function to generate password with user input
function generatePassword() {
  
      //assign user input to this variable. As prompt is input as string, use number constructor to convert
      charLength = Number(prompt("Enter the number of characters you would like in your password"));

      //validate the length of the password, and check input is integer or user clicks cancel 
      if (charLength === null || !Number.isInteger(charLength) || charLength < 10 || charLength > 64) {
        alert("Password must be a number between 10 and 64");
        // Checking the typeof input as was always returning true when typing a letter
        // return console.log(typeof charLength);

      } else {
        // go through confirm questions
        getRandom();
      }
    
      
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