var fs = require("fs");
//require BasicCard.js?
var BasicCard = require("./BasicCard.js");

function ClozedCard(clozeQuestion, clozeAnswer) {
	this.clozeQuestion = clozeQuestion;
	this.clozeAnswer = clozeAnswer;
	this.fullText = clozeQuestion.replace("_", clozeAnswer.trim() + " ");
	this.card = function(clozeQuestion, clozeAnswer){
		var newFullText = new fullText(clozeQuestion, clozeAnswer, fullText);
			file.append("clozed-cards.txt", ClozedCard);
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