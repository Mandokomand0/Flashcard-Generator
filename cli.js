//requiring file system for appending and reading.
var fs = require("fs");
//requiring clozed brings both Clozed-Card.js and Basic-Card.js.
var ClozedCard = require("./Clozed-Card.js");
var BasicCard = require("./BasicCard.js");
console.log(BasicCard);
var basicCreation = new BasicCard();
var clozedCreation = new ClozedCard();


//Inquirer is the basis of my commanding structure.
var inquirer = require("inquirer");


//Basic Card counter
var b = 0;
//Clozed Card counter
var c = 0;


//beginning of function to provide.
var cardUserAndMaker = function() {
  //initial prompting for branching paths.
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Make a basic card.", "Make a clozed statement card.", "Answer a basic card.", "Answer a clozed card."]
      }
      ]).then(function(answer){
        //make initial prompt a var for easy access down the code.
        var choice = answer.action;
        //for making basic cards
          if (choice === "Make a basic card.") {
            console.log("make a card.");
            inquirer.prompt([
              {
                name: "question",
                message: "What is the question you want to have asked?"
              },
              {
                name: "answer",
                message: "What is the answer to your question"
              }
              ]).then(function(basic){
                var basicCardCreation = new BasicCard(basic.question, basic.answer);
                //console.log(basicCardCreation);
                basicCreation.cardCreation(basic.question, basic.answer);
                //function that generates a basic card.
              })
          } else {
            //
            if (choice === "Make a clozed statement card.") {
              console.log("I love clozes.");
              inquirer.prompt([
              {
                name: "question",
                message: "What statement do you want completed?\nPlease put a _ where the answer should be.\nExample: _ invented the mine detector."
              },
              {
                name: "answer",
                message: "What is the answer to your question"
              }
              ]).then(function(cloze){
                var clozedAnswer = cloze.answer.trim();
                fullText = cloze.question.replace("_", clozedAnswer + " ");
                //function that generates a clozed cards.
                var clozeCardCreation = new ClozedCard(cloze.question, clozedAnswer, fullText);
                //console.log(basicCardCreation);
                clozedCreation.cardCreation(cloze.question, clozedAnswer, fullText);
              })
            } else {
              if (choice === "Answer a basic card.") {
                console.log("Here is a basic card.");
              } else {
                if (choice === "Answer a clozed card.") {
                  console.log("Here is a clozed card.");

                } else{
                  console.log("How the hell did you get this message? You done made an error!");
                }
              }
            }
          }
        })
//       {
//         name: "name",
//         message: "Hello user! What is your name "
//       }, {
//         name: "location",
//         message: "Where would you like to the weather of? \n Please write the location like this:  'Dallas, TX'"
//       }
//     ]).then(function(answers) {
//       if (answers.logIn === "Admin") {
//         weatherAdmin.getData();
//       } else {
//        var searchNew = weatherAdmin.newUserSearch(answers.name, answers.location);
//           fs.append("user.txt", searchNew, function(err) {
//         if (err) {
//           return console.log(err);
//         }
//       })
// 	}
// })
}

cardUserAndMaker();