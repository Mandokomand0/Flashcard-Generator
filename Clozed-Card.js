var fs = require("fs");
//require BasicCard.js?
var BasicCard = require("./BasicCard.js");

function ClozedCard(clozeQuestion, clozeAnswer, fullText) {
	this.clozeQuestion = clozeQuestion;
	this.clozeAnswer = clozeAnswer;
	this.fullText = fullText;
	//fullText = this.clozeQuestion.replace("_", clozeAnswer.trim() + " ");
	this.cardCreation = function(clozeQuestion, clozeAnswer, fullText){
		//var newFullText = new fullText(clozeQuestion, clozeAnswer, fullText);
		var newFullText = "\nQuestion: " + clozeQuestion;
		newFullText+= " Answer: " + clozeAnswer;
		newFullText += " Full Text: " + fullText;

		//console.log(newBasicCard);
		fs.appendFile("clozed-cards.txt", newFullText);

	}
// 	this.fullClozed = function(clozeQuestion, clozeAnswer){
// 	var newClozeCard = new ClozedCard (name, location);
// 		var clozeCard = "\nQuestion: " + clozeQuestion;
// 		clozeCard += "Answer: " + clozeAnswer;
// 		file.append("clozed-cards.txt", clozeCard);
// 		newUserSerch.getWeather();
// 	}
}
module.exports = ClozedCard;
	// this.fullBasic = function(baseQuestion, baseAnswer){
	// 	var newBasicCard = new BasicCard (baseQuestion, baseAnswer);
	// 	var baseCard = "\nQuestion: " + baseQuestion;
	// 	baseCard += "Answer: " + baseAnswer;
	// 	file.append("basic-card.txt", BasicCard);
	// }