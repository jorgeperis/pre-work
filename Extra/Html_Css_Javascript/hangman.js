var wordsArray = document.querySelectorAll('#novis p');

function selectWord (){
	var num = getRandomInt(0,wordsArray.length);
	if ((wordsArray[num].innerHTML.length >= 5) && (wordsArray[num].innerHTML.length < 13)){
		return wordsArray[num].innerHTML;
	}else{
		return selectWord();
	}
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var word = selectWord();
/* Until here, create an array with words of the HTML file, and select a random word */

var guess=[];
for(i=0;i<word.length;i++){
	guess.push('_');
}
var attempts = 6;
var guessboo = false;
var attemptsWords =[];
var inputPlayer = "";
var guess_words_html = document.getElementById("word_word");
var attem_words_html = document.getElementById("attempt_letters");
var attem_text_html = document.getElementById("attempt_text");

function play(){
	location.reload();
	insert_guess("b",guess.length,guess_words_html);
	insert_guess("a",6,attem_words_html);
	attem_text_html.innerHTML = 'Not the word:';
	startGame();
};
function startGame(){

	inputPlayer = prompt("Write a letter/number or the entire word");
	if (inputPlayer === null){
			return;}
	if (inputPlayer === '$SAVE$'){
		saveAdvance();
	} else {
		for(j=0;j<inputPlayer.length;j++){
			var type = typeof inputPlayer[j];
			if (type === 'string'){
			inputPlayer[j] = inputPlayer[j].toLowerCase();
			}
		}
	
	inputFilter();
	}
};
function inputFilter(){
	if (inputPlayer.length === 1){
		aletter();
	} else if (inputPlayer.length === word.length){
		entire();
	} else{
		alert("Write a letter or the entire word");
		return startGame();
	}
};
function aletter (){
	if((guess.join('').indexOf(inputPlayer) === -1) && (attemptsWords.join('').indexOf(inputPlayer) === -1)){
		guessboo = false;
		for(j=0;j<word.length;j++){
			if (word[j] === inputPlayer){
				guess[j] = inputPlayer;
				insertWordsInGuess('b',guess);
				guessboo = true;
			}
		}
		if (guess.indexOf('_') === -1){
			insertWordsInGuess('b',guess);	
			alert('You win!');
			return location.reload();
		}
		if (guessboo === false){
			attemptsWords.push(inputPlayer);
			fail();
		} else {
			return startGame();
		}
	} else { 
 		return startGame();
 	}

};
function entire (){
	if ( word === inputPlayer){
		insertWordsInGuess("b",word);
		alert('You win!');
		return location.reload();
	} else {
		attemptsWords.push("*");
		fail();
	}
};
function fail(){
	attempts--;
	insertWordsInGuess("a",attemptsWords);
	breakMan(attempts);
	guessAdvance();
};
function guessAdvance(){
	if (attempts === 0){
		insertWordsInGuess("b",word)
		alert("You lose!");
		return location.reload();
	} else {
		return startGame();
	}
};
function saveAdvance(){
	localStorage.setItem('Word',word);
	localStorage.setItem('Attempts',attempts);
	var guessJoin = guess.join('');
	localStorage.setItem('Guess',guessJoin);
	var attemptsWordsJoin = attemptsWords.join('');
	localStorage.setItem('Attemptswords',attemptsWordsJoin);
	location.reload();
};
function loadAdvance(){
	location.reload();
	word = localStorage.getItem('Word');
	attempts = localStorage.getItem('Attempts');
	guess = localStorage.getItem('Guess').split('');
	attemptsWords = localStorage.getItem('Attemptswords').split('');
	for (i=parseInt(attempts); i<6;i++){
		breakMan(i);
	}
	insert_guess("b",guess.length,guess_words_html);
	insert_guess("a",6,attem_words_html);
	insertWordsInGuess('b',guess);
	insertWordsInGuess("a",attemptsWords);
	attem_text_html.innerHTML = 'Not the word:';
	startGame();
};
function insert_guess(id,list,list_ele){
for(h=0;h<list;h++) {
var guess_box = document.createElement('div');
guess_box.id = id + h;
guess_box.className =id;
list_ele.appendChild(guess_box);
}
};
function insertWordsInGuess(id,list) {
	for(o=0;o<list.length;o++){
		var insert_word = document.getElementById(id+o);
		insert_word.innerHTML = list[o].toUpperCase();
	}
};
function breakMan(number) {
	switch(number){
		case 5:
			document.getElementById("rleg").innerHTML = "";
			break;
		case 4:
			document.getElementById("lleg").innerHTML = "";
			break;
		case 3:
			document.getElementById("rarm").style.border = '0px';
			document.getElementById("larm").style.border = '0px';
			break;
		case 2:
			document.getElementById("rarm").innerHTML = "";
			break;
		case 1:
			document.getElementById("larm").innerHTML = "";
			break;
		case 0:
			document.getElementById("head").innerHTML = "";
			break;
	}
};

