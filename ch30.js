
      // Q-6
      document.write(`Q-6   Write a program that shows a random number between 1 
      and 100 in your browser..<br><br>`);
      let h4 = document.createElement("h4");
      document.body.appendChild(h4);
      let randNum = Math.floor(Math.random() * 100) + 1;
      h4.innerHTML = `Random Number Between 1 And 100 is ${randNum} :`;
      document.write("<br><hr>");

      // Q-8
      document.write(`Q-8 Write a program that shows a random number between 1 
      and 100 in your browser..<br><br>`);
      function userGuessNumber(){
        let inputUser = +prompt("Guess The Number between 1 to 10");
        let secretNum = Math.floor(Math.random() * 10) + 1;
        if(inputUser === secretNum){
          document.write(`Congratulations You Guesses ${inputUser} Right ${secretNum} `)
        } else {
          document.write(`Try Again ${inputUser} Not Same : ${secretNum} `)
          
        }
       
      }
      userGuessNumber();
