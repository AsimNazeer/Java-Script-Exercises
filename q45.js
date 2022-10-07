// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-45
function car(make,model,color,power){
    return {_Make:String(make), _Model:String(model), _Color:String(color),_Power:Number(power)};
}

let car1=car("Honda","Civic","Red","1800");
let car2=car("Toyota","Corrola","White","1300");

console.log("Car #1 information:");
console.log(car1);
console.log("Car #2 information:");
console.log(car2);
