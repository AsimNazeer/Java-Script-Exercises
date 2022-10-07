// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5

// Q-01
// A variable to Store Geust name
console.log("--Welcome To Panaverse--");
let fname="Saleem jaVaId";

// Display Guest Greeting Message on Web page
console.log("Welcome " + fname + ", would you like to learn something New Today? ");

// Q-02 -05 
// Explicit Casting name into a String Object
let lname=String(fname);

// A simple Function To Convert Name in Title Case
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 return sentence.join(" ");
 
 }
 // Q-02 Q-03 Q-04
console.log(" Your Name in Lower Case is : " + lname.toLowerCase());
console.log(" Your Name in Upper Case is : " + lname.toUpperCase());
console.log(" Your Name in title Case is : " + titleCase(lname) );
