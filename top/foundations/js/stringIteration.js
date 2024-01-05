const MINIMUM_LENGTH = 1;


function downUp(word){
	let originalWord = word;
	//while the length of the letter is greather than 1 print the word and next pop a letter

	for(let i = word.length; i > MINIMUM_LENGTH; i--){
		console.log(word);
		word.pop();
	}
	for(let i = MINIMUM_LENGTH; i <= originalWord.lenght; i++){
		word.concat(originalWord[i]);
		console.log(word);
	}
}

downUp("HelloBitch")
