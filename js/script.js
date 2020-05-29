// USERNAME INPUT

var person;

window.onload = function wizard() {
    person = prompt("Welcome to Hogwarts! Please write your name:", "Great Wizard");
    
    
    if (person === null || person === false || person === "") { // Canceled, canceled, OK but no name 
       person = "You-Who-Must-Not-Be-Named";
   }        
};



// RANDOM SORTED HOUSE

function sorting() {
    var houses = [
    "You're brave, courageous, chivalrous and daring.\n\n"+ person + ", better be... Gryffindor!", 
    "You're ambitious, cunning, resourceful and pure-blood.\n\n" + person + ", you belong to Slytherin!", 
    "You're loyal, just and patient.\n\n" + person + ", you will do well in Hufflepuff!",
    "You're intelligent, wit, creative and wise.\n\n" + person + ", your house is Ravenclaw!", 
    "Hmm... What is this!?\n\nYou're a Muggle!\n\nSomeone Obliviate " + person + "!" ];
    
    var result = houses[Math.floor(Math.random() * houses.length)];
    
    alert(result);
}
