// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-27


// A Function to check the alien color
function checkcolor(string){
    if(string==='green')
    {
        console.log("you just earned 5 points for shooting the alien");
    }
    if(string=='yellow')
    {
        console.log("you just earned 10 points for shooting the alien");
    }
    if(string==='red')
    {
        console.log("you just earned 15 points for shooting the alien");
    }
    
}
let alien_color='green';
checkcolor(alien_color);
alien_color='yellow';
checkcolor(alien_color);
alien_color='red';
checkcolor(alien_color);