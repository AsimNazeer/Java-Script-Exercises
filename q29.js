// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-29
let fruits=['apple','banana','orange','mango','cherry','guava'];


function findfruits(string){
    for(let i=0;i<fruits.length;i++)
    {
        if(fruits[i]===string)
        console.log("Match found\t" + string);
    }
    
}

findfruits("blueberry");
findfruits('apple');
findfruits("dragonfruit");
findfruits('orange');

let fav_fruits=["mango",'apple',"peach"];
if(fav_fruits.includes('orange'))
console.log("You really like orange" )

if(fav_fruits.includes('apple'))
console.log("You really like apple" )

if(fav_fruits.includes('mango'))
console.log("You really like mango" )

if(fav_fruits.includes('banana'))
console.log("You really like banana" )

if(fav_fruits.includes('peach'))
console.log("You really like peach" )