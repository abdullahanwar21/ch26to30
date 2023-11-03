
     
      // Q-5
      document.write(`Q-5   Write a program that simulates a coin toss using random()
          method of JS Math class. Display the value of coin in your
          browser.<br><br>`);
      let h2 = document.createElement("h2");
      document.body.appendChild(h2);
      let headOrTail = document.createElement("button");
      headOrTail.innerHTML = "Head Or Tail";
      document.body.appendChild(headOrTail);
      headOrTail.addEventListener("click", function () {
        let coins = Math.floor(Math.random() * 2) + 1;
        let answer;
        if (coins === 2) {
          console.log("Heads");
          answer = "Heads";
          h2.innerHTML = "Random Coin Values : " + answer;
        } else {
          answer = "Tails";
          h2.innerHTML ="Random Coin Values : " + answer;
        }
        console.log(h2);
      });
      document.write("<br><hr>");

