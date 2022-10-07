// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-43
function make_great(magi){
    var newmaglist=magi.slice();
    for(let i=0;i<newmaglist.length;i++)
    {
        newmaglist[i]="Great " + newmaglist[i];
    }
    return newmaglist;
}
function show_magicians(magician){
    console.log(magician);
       
}

let magicians=["ahsan","saleem","zafar","majid"];
let changedMagicians= make_great(magicians);
console.log("Original Magicians List..");
show_magicians(magicians);
console.log("Changed Magicians List..");
show_magicians(changedMagicians);