const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
for(const key in user){
	console.log(key, user[key]);
}
