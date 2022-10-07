// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5

// NOTE : for Q-19 Number of Guests invited are printed on different stages in the program
// Q-15    --- Using Common Array Functions

let guests=["Mr.Nazeer Ahmed", "Mr.Muhammad Tauheed", "Mr.Muhammad Ilyas"]
for (let i=0;i<guests.length;i++)
{
    console.log("Assalamualykum Wb !"+guests[i] + "  I would Like to invite you to dinner tonight Please");

}

console.log("Sorry -" + guests[0]+" \t will not be able to attend the meeting new list of guests is here");
guests.shift();

guests.push("Mr.Rehan Qayyum");
for (let i=0;i<guests.length;i++)
{
    console.log("Assalamualykum Wb !"+guests[i] + "  I would Like to invite you to dinner tonight Please");

}

// Q-16
console.log(" Well Guests We Have a Bigger Dinner Table Which can accomodate 6 guests");

// Adding a guest at start of array
guests.unshift("Mr.Abdul Basit");

// Adding guest at end of array
guests.push("Mr.Muhammad Naveed");

// Adding Guests in the center of array
guests.splice(3,0,"Mr. Shahid Nazeer");

for (let i=0;i<guests.length;i++)
{
    console.log("Assalamualykum Wb !"+guests[i] + "  I would Like to invite you to dinner tonight Please");

}


// Q-17
console.log("I am sorry but i would be able to accomodate only two guest");


do
{
    console.log("I am Sorry " + guests[guests.length-1] + " you are no more invited");
    guests.pop();
} while (guests.length!=2);

console.log("Total Number of Guests Invited Finally :" + guests.length);


for (let i=0; i<guests.length; i++)
{
    console.log("Assalamualykum Wb !"+guests[i] + "  I would Like to invite you to dinner tonight Please");
}

console.log("Dinner Party End");
for (let i=0;guests.length!=0;i++)
{
    guests.pop();
}


console.log("Number of remaining guests = " + guests.length);