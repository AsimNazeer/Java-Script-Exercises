// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-24

let a=5;
let b=10;

console.log("Is a>b ? I predicted it false and answer is\t" + (a > b) );
console.log("Is a<b ? I predicted it true and answer is\t" +  (a < b) );

a=10;
console.log("Is a >= b ? I predicted it false and answer is\t" + ( a>= b) );
console.log("Is a <= b ? I predicted it true and answer is\t"  + (a <= b) );

console.log("Is a = b ? I predicted it true and answer is\t" + (a == b) );
console.log("Is a != b ? I predicted it false and answer is\t" + (a !=b ) );

// Strict Equality & Inequality
// Strict Equality compare data types as well as their values 
// where as normal equality compares only values
console.log("Is 8 === 8 ? I predicted it true and answer is\t" + (8 === 8) );
// comparing number with string with normal equality we get true
console.log("Is 8== '8' ? I predicted it false and answer is\t" + (8 == '8') );

console.log("Is 8==='8' ? I predicted it false and answer is\t" + (8 === '8') );


// Test For Equality & inequality in strings
let name='asim';

console.log("Does the name  =='asim'  I predict it to be true and the answer is:\t" + (name=='asim'));
console.log("Does the name !='asim'  I predict it to be false and the answer is:\t" +  (name!='asim'));
console.log("Does the name=='ASIM'  I predict it to be true and the answer is:\t" + (name=='ASIM'));

// Test using and or operators
// In order to travle inside a city and be disease free you need to be checked for different diseases
// and you get two green codes if you are fully healthy
// and if you get only one code you can only check in to a quarantine area and get quarntined and tested till your code 
// turns green.
let code1=true;    // True = green
let code2=true;    // True = green

if( code1&&code2)
{
    console.log(" Happy travel :) You have no disease");
}
else if(code1||code2)
{
    console.log("Sorry you need to be quarantined in order to get disease free");
}


// Check for a value to be present in the array or not
let array = [11, 20, 8, 6, 17];
console.log("Does This array " + array+ " contains 6 ? the answer is:\t"+array.includes(6) ); //True
console.log("Does This array " + array+ " contains 10 ? the answer is:\t"+array.includes(10) ); //True