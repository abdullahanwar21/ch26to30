// Q-3
document.write(`Q-3 Write a program that displays the absolute value of a
 number.<br><br>`);
let num = prompt('Enter a number i"ll show you Absolute Number : ');
let abs = Math.abs(num);
document.write("The absolute value of " + num + " is " + abs + "<br>");
document.write("<br><hr>");

// Q-4
document.write(`Q-4  Write a program that simulates a dice using random() 
   method of JS Math class. Display the value of dice in your 
   browser.<br><br>`);
let diceBtn = document.createElement("button");
diceBtn.innerHTML = "Dice Me!";
document.body.appendChild(diceBtn);
let h3 = document.createElement("h3");
document.body.appendChild(h3);
console.log(diceBtn);
diceBtn.addEventListener("click", function () {
  function diceMe() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    h3.innerHTML = "Random Dice Value : " + dice1;
  }
  diceMe();
});
document.write("<br><hr>");
