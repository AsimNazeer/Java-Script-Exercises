// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-6

let name_white="\t  Asim   Nazeer      ";
name_white=String(name_white);
console.log("Before White space Removal");
console.log(name_white);


console.log("After White space Removal");
console.log(name_white.replace(/\s/g,''));