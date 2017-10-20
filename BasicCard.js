var fs = require("fs");
function BasicCard(baseQuestion, baseAnswer) {
	this.baseQuestion = baseQuestion;
	this.baseAnswer = baseAnswer;
	this.cardCreation = function(baseQuestion, baseAnswer){
		var newBasicCard = "\nQuestion: " + baseQuestion;
		newBasicCard += " Answer: " + baseAnswer;
		//console.log(newBasicCard);
		fs.appendFile("basic-card.txt", newBasicCard);
	}
}
module.exports = BasicCard;
