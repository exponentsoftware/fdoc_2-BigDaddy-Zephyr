const users = [
{
	name:'Brook', 
	scores:75,
	skills:['HTM', 'CSS', 'JS'],
	age:16
},
{
	name:'Alex', 
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
}, 
{
	name:'David', 
	scores:75,
	skills:['HTM', 'CSS'],
	age:22
}, 
{
	name:'John', 
	scores:85,
	skills:['HTM'],
	age:25
},
{
	name:'Sara',
	scores:95,
	skills:['HTM', 'CSS', 'JS'],
	age: 26
},
{
	name:'Martha', 
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
},
{
	name:'Thomas',
	scores:90,
	skills:['HTM', 'CSS', 'JS'],
	age:20
}
];

console.log(users.filter(user=>user.scores>85));

// var user1={	name:'Jake',
// 	scores:21,
// 	skills:['HTM', 'CSS', 'JS'],
// 	age:26}

// addUser(user1);

function addUser(user){
for(let i=0;i<users.length;i++){
	if(users.name==user.name){
		return false;
	}

}users.push(user);

}


function addUserSkill(username,skill){
for(let i=0;i<users.length;i++){
	if(users[i].name==username){
		users[i].skills.push(skill);
	}
}
}

function editUser(user){
for(let i=0;i<users.length;i++){
	if(users[i].name==user.name){
		users[i].scores=user.score;
		users[i].skills=user.skills;
		users[i].age=user.age;

	}
}



}