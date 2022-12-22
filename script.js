// Assignment code here

var generateBtn = document.querySelector("#generate"); //Created a variable that will bring the button to life
generateBtn.addEventListener("click", writePassword); //When the button is clicked, it will run the writePassword function

var length; //The length variable will contain the size of the password being created
var passwordCriteria = []; //The passwordCriteria variable, will contain the characters that the user wants to included in his password

//lengthFunction uses a prompt, to ask the user how long he wants the password to be. The answer will be stored in the length variable above
function lengthFunction() {
  let i; 
  do {
    i = prompt("Hom many characters would you like your password to have? Select a number from 8 to 128.", 0);
  } while (i < 8 || i > 128); //The prompt will disappear, once the user selects a number from 8 to 128
  length = i; 
};

//lowercaseLettersFunction will ask the user if he wants to include lowercase letters in his password. If he does, the lowercase letters will be added to the passwordCriteria Array. If not, nothing is added and the function ends
function lowercaseLettersFunction () {
  let i; //variable i contains the users answer (yes or no)
  let x; //variable x is used to end the loop. 
  //Code below loops until an acceptable answer is given. A version of this code was also used in the uppercaseFunction, numericCharactersFunction and specialCharactersFunction
  //Credit to Tony De Araujo https://www.codecademy.com/forum_questions/54de5c2586f552b10a0029b9
  do {
    i = prompt("Would you like to have lowercase letters? \nYes or No"); //backslash n is used to add a line break between the question and (yes/no)
    if (i.toLowerCase() == "yes") { 
      passwordCriteria.push("a", "b", "c", "d", "e", "f", "g", "h", 
                            "i", "j", "k", "l", "m", "n", "o", "p", 
                            "q", "r", "s", "t", "u", "v", "w", "x", 
                            "y", "z");
      x = 1;
    } else if (i.toLowerCase() == "no") {
      x = 1;
    }
  } while (x !== 1); 
}

//uppercaseLettersFunction will ask the user if he wants to include uppercase letters in his password. If he does, they will be pushed into the passwordCriteria array. If he answers no, the function will end
function uppercaseLettersFunction () {
  let i;
  let x;
  do {
    i = prompt("Would you like to have Uppercase letters? \nYes or No");
    if (i.toLocaleLowerCase() == "yes") {
      passwordCriteria.push("A", "B", "C", "D", "E", "F", "G", "H",
                                    "I", "J", "K", "L", "M", "N", "O", "P",
                                    "Q", "R", "S", "T", "U", "V", "W", "X",
                                    "Y", "Z");
      x = 1;
    } else if (i.toLocaleLowerCase() == "no") {
      x = 1;
    }
  } while (x !== 1);
}

//numericCharactersFunction will ask the user if he wants to include numbers in his password. If he does, all the numbers will be pushed into the passwordCriteria array. If not, the function will end
function numericCharactersFunction () {
  let i;
  let x;
  do {
    i = prompt("Would you like to have Numerica characters in your password? \nYes or No.");
    if (i.toLocaleLowerCase() == "yes") {
      passwordCriteria.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
      x = 1;
    } else if (i.toLocaleLowerCase() == "no") {
      x = 1;
    }
  } while (x !== 1);
}

//specialCharactersFunction will ask the user if he wants to include special characters in his password. If he does, all of the special characters will be pushed into the passwordCriteria array. If not, the funciton will end
function specialCharactersFunction () {
  let i;
  let x;
  do {
    i = prompt("Would you like to include Special Characters in your password? \nYes or No");
    if (i.toLocaleLowerCase() == "yes") {
      //The code below will ensure that backslash and quotation marks are included. An extra backslash is added to make them literals 
      //Credits to Pshemo on stack overflow: https://stackoverflow.com/questions/17612778/how-to-define-special-characters-in-string-array-java 
      passwordCriteria.push("!", "\"", "#", "$", "%", "&", "\'",  //index 1
                                           "(", ")", "*", "+", ",", "-", ".",
                                           "/", ":", ";", "<", "=", ">", "?",
                                           "@", "[", "\\", "]", "^", "_", "`",   //index 24 
                                           "{", "|", "}", "~");  
      x = 1; 
    } else if (i.toLocaleLowerCase() == "no") {
      x = 1;
    }
  } while (x !== 1);
};

//generatePassword picks a random value from the passwordCriteria array and pushes it to the newPassword array. It will repeat until newPassword array is the size, indicated by the user. It gets the size by referencing the length variable
function generatePassword() {
  var newPassword = []; 
  for (let i = 0; i < length; i++) {
    var randomItem = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];  //Gets a random item from an array. Credits to Kelly on stack overflow: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    newPassword.push(randomItem);
  }
  const withoutCommas = newPassword.join(''); //Returns the array's items without any commas inbetween. Credits to Borislav: https://bobbyhadz.com/blog/javascript-convert-array-to-string-without-commas#:~:text=To%20convert%20an%20array%20to,joined%20by%20the%20provided%20separator.&text=Copied!
  return withoutCommas;
};

//resetValues function will reset the values of length and passwordCriteria. This is done so that each time the user creates a new password, the old criteria will not be used. Credits to Brad Morton: https://www.linuxscrew.com/javascript-reset-clear-array
function resetValues() {
  length = null; 
  passwordCriteria.length = 0;
}

//writePassword brings all of the functions together to create a new password. 
function writePassword() {
  resetValues(); //first we reset all the values, to start with a fresh canvas 
  lengthFunction(); //Then we ask the user how big he wants the password to be
  lowercaseLettersFunction(); //Next we ask if he wants to add lowercase letters
  uppercaseLettersFunction(); //Ask if he wants to add uppercase letters
  numericCharactersFunction(); //Ask if he wants to add numbers
  specialCharactersFunction(); //Ask if he wants to add special characters
  var password = generatePassword(); //After gathering all of the information, we pick random values from the passwordCriteria array to generate a password
  var passwordText = document.querySelector("#password"); //The password is then linked to the textarea element
  console.log(passwordCriteria); //Will show the criteria selected in the console
  console.log(length) //Will show the length of the password in the console
  console.log(password); //Will show the password in the console
  passwordText.value = password; //Password generated is displayed on the webpage 
}
