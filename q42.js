// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-42
function make_great(magi){
    for(let i=0;i<magi.length;i++)
    {
        magi[i]="Great " + magi[i];
    }
    return magi;
}
function show_magicians(magician){
    magician=make_great(magician);
    console.log(magician);
       
}

let magicians=["ahsan","saleem","zafar","majid"];
show_magicians(magicians);