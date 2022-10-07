// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5

// Q-20


let data = ['Islamabad', 'Lahore', 'Multan', 'Karachi' ];

// Variable to store List
let list = document.getElementById("cityList");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})