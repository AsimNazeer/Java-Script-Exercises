// Course Name : Panaverse
// Section : E
// Author Name: Asim Nazeer
// Date : 06-10-2022
// Code for exercise questions 1-5


// Q-40

function make_album(artistName,albumTitle,tracks){
    
    return {ArtistName:String(artistName),Title:String(albumTitle),Tracks:Number(tracks)};
}

let album1=make_album("Ali Zafar","Awaz");
let album2=make_album("Sahir Ali bagga","Roshni");
let album3=make_album("Mesha shafi","Nazar");
console.log(album1);
console.log(album2);
console.log(album3);
let album4=make_album("Nusrat Fateh Ali","Afreen",4);
console.log(album4);

let dictionary=[album1,album2,album3,album4];

console.log("Now Printing Dictionary Information..");
console.log(dictionary);