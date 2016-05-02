
var user = {};
var responses = [];

function question1() {
  var name = prompt('What is your name?');
  user.name = name;
}

question1();

function question2() {
	var firstQuestion = prompt('Does null === 0 ? (Yes or No)');

	if (firstQuestion.toLowerCase() === 'yes' || firstQuestion.toLowerCase() === 'y') {
		firstQuestion = 'true'

	} else if (firstQuestion.toLowerCase() === 'no' || firstQuestion.toLowerCase() === 'n') {
		firstQuestion = 'false'
	} else {
		alert("Please answer either Yes or No");
    	return question2();
	}
	responses.push(firstQuestion);
}

question2();

function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
  	case 'java':
  		responses.push('false')
  		break;
  	case 'livescript':
  		responses.push('true')
  		break;
  	case 'javalive':
  		responses.push('false')
  		break;
  	case 'scriptyscript':
  		responses.push('false')
  		break;
  	default:
  		alert("Please answer one of option")
  		return question3();
  		
 
  }
}

question3();

function question4() {
	var ruby = prompt(" ...is a dynamic, reflective, object-oriented, general-purpose programming language.Language?: Ruby, JavaScript, HTML or CSS");
	ruby = ruby.toLowerCase();
	switch (ruby) {
		case 'ruby':
			responses.push('true')
			break;
		case 'javascript':
			responses.push('false')
			break;
		case 'html':
			responses.push('false')
			break;
		case 'css':
			responses.push('false')
			break;
		default:
			alert("Please answer one option")
  		return question4();
	}
}

question4();

function question5() {
	var endtag = prompt("In HTML which character is used to indicate an end tag?: '/', '*', '>' or '^'")
	switch (endtag) {
	case '/':
		responses.push('true')
		break;
	case '*':
		responses.push('false')
		break;
	case '>':
		responses.push('false')
		break;
	case '^':
		responses.push('false')
		break;
	default:
		alert("Please answer one option")
  		return question5();

	}

	}

question5();

function question6() {
	var number = prompt("( Number('1') - 1 == 0; )What is the result: true, false or ReferenceError?");
		number = number.toLowerCase();
		if (number === "true" || number === "false") {
			responses.push(number);	
		} else if (number === "referenceerror"){ 
			responses.push('false');
		} else {
			alert("Please answer one option")
  			return question6();
		}
}

question6();


function evaluate(array) {
	var totalt = 0;
	var totalf = 0;

	for(i=0;i<array.length;i++){
		if (array[i] === 'true'){
			totalt += 1;
		} else {
			totalf += 1;
		}
	}
	user.correct = totalt
	user.incorrect = totalf

	showresults();
}

function showresults() {

	alert (user.name + " results: " + user.correct + " correct and " + user.incorrect + " incorrect");
}

evaluate(responses);