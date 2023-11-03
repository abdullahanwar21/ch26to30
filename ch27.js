// Q-2
document.write(`Q-2 Write a program that takes a negative floating point
      number from user & display the following in your browser.
      a. number
      b. round off value of the number
      c. floor value of the number
      d. ceil value of the number <br><br>`);
let negativeNum = +prompt("Enter Negative Number e.g -2.673");
document.write(`<b>Number :  ${negativeNum} </b> <br>`);
document.write(`<b>Round Off Value : ${Math.round(negativeNum)} </b> <br>`);
document.write(`<b>Floor Value : ${Math.floor(negativeNum)} </b> <br>`);
document.write(`<b>Ceil Value : ${Math.ceil(negativeNum)} </b> <br>`);
document.write("<br> <hr>");
