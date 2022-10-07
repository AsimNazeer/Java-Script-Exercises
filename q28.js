// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-28
function ageGroup(int){

    //If the person is less than 2 years old, print a message that the person is a baby.
if(int <2 )
console.log("You are a baby");
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if(int >=2 )
{
    if(int <4)
    console.log("You are a Toddler");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if(int >= 4 )
{
    if(int < 13)
    console.log("You are a Kid");    
} 

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if(int >= 13 )
{
    if( int < 20)
    console.log("You are a Teenager");
}

// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if(int >=20 )
{
    if( int < 65 )
    console.log("You are an Adult");
}

// If the person is age 65 or older, print a message that the person is an elder.
if(int>=65)
console.log("You are an Elder");
}

// for age <2
ageGroup(1);
ageGroup(3);
ageGroup(12);
ageGroup(19);
ageGroup(57);
ageGroup(65);