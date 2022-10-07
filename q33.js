// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-33
let numbers=[1,2,3,4,5,6,7,8,9];

function getSuffix(n) {
    let ord = 'th';
  
    if (n % 10 == 1 )
    {
      ord = 'st';
    }
    else if (n % 10 == 2)
    {
      ord = 'nd';
    }
    else if (n % 10 == 3 )
    {
      ord = 'rd';
    }
  
    return ord;
  }

  for(let i=0;i<numbers.length;i++)
  {
    console.log(numbers[i]+getSuffix(numbers[i])+'\n');
  }