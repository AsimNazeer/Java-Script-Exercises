// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-31
let users=['admin','ali','asim','shahid','shaheer'];

console.log("There are :" + users.length+"\t users in the current list");
let len=users.length;

console.log("Clearing list of users....");

for(let i=0;i<len;i++)
{
      users.splice(0, 1); 
}

console.log("There are :" + users.length+"\t users in the current list");

if(users.length<=0)
{
console.log("Please find some new users");
}