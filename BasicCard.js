var fs = require("fs");
function BasicCard(baseQuestion, baseAnswer) {
	this.baseQuestion = baseQuestion;
	this.baseAnswer = baseAnswer;
	this.cardCreation = function(){
		var newBasicCard = "\nQuestion: " + baseQuestion;
		newBasicCard += "Answer: " + baseAnswer;
		console.log(newBasicCard);
		file.append("basic-card.txt", newBasicCard);
	}
}
module.exports = BasicCard;