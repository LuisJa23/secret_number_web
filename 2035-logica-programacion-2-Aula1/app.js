

let secretNumber = generateSecretNumber();
let userNumber = document.getElementById('userNumber');
let maxAttempts = 3;
let attempts = 0;
let button = document.getElementById('intentar');
let seletedNumbers = [];
let isThere = false;

function setText(element, text) {
	let elementHTML = document.querySelector(element);
	elementHTML.textContent = text;
}

function generateSecretNumber() {
	return Math.floor(Math.random() * 10) + 1;
}

setText('h1', 'Game of Numbers');
setText('p', 'Guess the number between 1 and 10');



function checkNumber() {
	console.log(secretNumber)

	console.log(seletedNumbers);









	if (userNumber.value != "" && seletedNumbers.includes(userNumber.value) != true) {






		if (attempts < maxAttempts) {
			attempts++;
			if (userNumber.value == secretNumber) {
				setText('p', 'You win!');
				// Reemplaza 'yourButtonId' con el ID de tu botón
				button.disabled = true;



			} else {
				
				seletedNumbers.push(userNumber.value);
				clearBox();

				if (userNumber.value > secretNumber) {
					setText('p', 'Too high!');
				}
				if (userNumber.value < secretNumber) {
					setText('p', 'Too low!');
				}
			}
		} else {
			setText('p', `You lose! The number was ${secretNumber}`);
			document.getElementById('intentar').disabled = true;

		}



	}else{
		setText('p', 'You already tried this number');
		clearBox();
	}
}

function resetGame() {
	setText('p', 'Guess the number between 1 and 10');
	secretNumber = generateSecretNumber();
	attempts = 0;
	button.disabled = false;
	seletedNumbers = [];
	clearBox();
}

function clearBox() {
	document.getElementById('userNumber').value = "";

}