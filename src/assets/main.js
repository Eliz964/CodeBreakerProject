let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt === '') {
    	setHiddenFields();
    }
    if(!validateInput(input.value)) {
    	return false;
    } else {
    	attempt += 1;
    }
}

//implement new functions here
function setHiddenFields() {
	answer.value = Math.round(Math.random()*10000).toString();
	while(answer.value.length < 4) {
		answer.value = "0" + answer.value;
	}
	attempt = 0;
}

function setMessage(input) {
	message.innerHTML = input;
}

function validateInput(parameter1) {
	if (parameter1.length === 4) {
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.")
		return false;
	}
}