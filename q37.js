// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-37
function makeshirt(){
    console.log("The Default size of the shirt is: Large \n The Default message is: I LOVE JavaScript");
}
function make_shirt(size,text){
    
    let tsize=String(size);
    if(tsize.toLowerCase()==="large" || tsize.toLowerCase()==="medium")
    {
        console.log('The size of the shirt is: '+tsize+' \n The message is: I LOVE JavaScript');
    }else{
        console.log('the size of the required T-shirt is:\t' + tsize);
        console.log("Printed Message on the shirt is:\t" + text);
    }
    
}
makeshirt();

make_shirt("XL","Hello World");
make_shirt("medium","This is My size");