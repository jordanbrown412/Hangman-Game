var wordlist = [
"tupac",
"drake",
"jadakiss",
"outkast",
"eminem",
"migos"];

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startgame(){

var wrongGuesses = [];
numGuesses = 9;
blankAndSuccesses = [];


chosenWord = wordlist[Math.floor(Math.random() * wordlist.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;


for (var i = 0; i < numBlanks; i++){
	blankAndSuccesses.push("_")
}

document.getElementById('guesses-left').innerHTML = numGuesses;
document.getElementById('word-blank').innerHTML = blankAndSuccesses.join(" ");

}

function checkletters(letter){

var letterInWord = false;

for(var i = 0; i < numBlanks; i++) {
	if(chosenWord[i] === letter){
		letterInWord = true;

	}
	}

	if(letterInWord){
		for(i = 0; i < numBlanks; i++){
	if(chosenWord[i] === letter){
		blankAndSuccesses[i] = letter;
	}
	}

}else{
	numGuesses --;
	wrongGuesses.push(letter)	
	}

}

function roundComplete(){

document.getElementById('word-blank').innerHTML = blankAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses
document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

if(lettersInChosenWord.join(" ") === blankAndSuccesses.join(" ")){
	winCounter++;
	alert("You win!!");
	document.getElementById('win-counter').innerHTML = winCounter;
	startgame();

}else if(numGuesses === 0){
	document.getElementById('loss-counter').innerHTML = lossCounter ++;
	document.getElementById('wrong-guesses').innerHTML = "";
	alert("You Lose");
	startgame();

}



}


startgame();


document.onkeyup = function(event){

var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
checkletters(letterGuessed)
roundComplete();
}