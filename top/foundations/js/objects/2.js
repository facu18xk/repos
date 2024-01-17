function isEmpty(obj){
	if(typeof obj != 'object') return "Please enter an object";
	for(let key in obj) return false;
	return true;
}
console.log(isEmpty({ name: "Facu"}));
