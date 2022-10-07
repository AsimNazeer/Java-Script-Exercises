// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-32
let current_users= ['admin','ali','asim','shahid','shaheer'];
let new_users =    ['Admin','naveed','asif','shahid','sameer'];
let notAvailaleuser=[];
for(let i=0;i<current_users.length;i++)
{
    for(let j=0;j<new_users.length;j++)
    {
        if(current_users[i].toLowerCase() === new_users[j].toLowerCase())
        {
            console.log("User Name already Exists -- > " + new_users[j] + " You Need to enter a new username");
            notAvailaleuser.push(new_users[j]);   
            break;
        }
    }
}

for(let j=0;j<new_users.length;j++)
{
    if(!notAvailaleuser.includes(new_users[j]))
    {
        console.log("User Name:  " + new_users[j] + "  is available");
    }
}