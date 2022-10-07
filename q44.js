// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-44
function burgertoppings(toppings){
    console.log("Your requried Burger will be Topped with :" + toppings);

}

let toppings=["chicken","onion","ketchup","mayonese"];
burgertoppings(toppings);
toppings.shift();
toppings.push("red sauce");
burgertoppings(toppings);
toppings.push("Salsa");
burgertoppings(toppings);