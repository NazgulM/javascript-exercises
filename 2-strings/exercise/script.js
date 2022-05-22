function checkJavascript() {
  const input = document.querySelector("#jsTest").value;
  if (input.includes("javascript")) {
    console.log("Yes")
  } else {
    console.log("No")
  }
  /* SOLUTION */
}

function vowels() {
  const input = document.querySelector("#vowelsInput").value;
    console.log(input.match(/[aeiou]/gi).length)

  /* SOLUTION #1 */

  /* SOLUTION #2 */
}

function isPalindrome() {
  let input = document.querySelector("#palindrome").value;
  input = input.toLowerCase().replace(/[\W_]/g, '')

  let reversedInput  = '';
  for (let i of input) {
    reversedInput =  i + reversedInput
  }
  let paragraph = document.querySelector('#palindromeResult');
  
  if (input === reversedInput){
    console.log("Yes, it is a palindrome")
    paragraph.innerHTML = 'Yes, it is a palindrome';
  } else {
    console.log("No, it is not a palindrome")
  }
  
  

  /* SOLUTION #1 */
  //  Bonus point if you do a .lowercase() first
}
