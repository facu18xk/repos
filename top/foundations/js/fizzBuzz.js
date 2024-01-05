
const BUZZ = 5;
const FIZZ = 3;
//Takes user input ==> convert into a number and save it 
let userNumber = parseInt("15");
//initialize a increment in one
//While thi increment in less or equal than the number entered by the user print the number if is not multiple of five or three, if it's multiple of three print fizz, if it's multiple of five print buzz
for(let i = 1; i <= userNumber; i++){

	let isMultipleOfThree = i % FIZZ == 0; 
	let isMultipleOfFive =  i % BUZZ == 0;

	if(!(isMultipleOfThree || isMultipleOfFive)){
		console.log(i);
	}else{
		if(isMultipleOfThree)
			process.stdout.write("Fizz");

		if(isMultipleOfFive)
			process.stdout.write("Buzz");
		process.stdout.write("\n")
	}
}
