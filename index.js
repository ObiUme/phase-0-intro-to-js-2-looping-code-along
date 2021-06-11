const names = ["Lisa", "Kaitlin", "Jan"];
const greeting = [];
function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    greeting.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
return greeting;
}

function countDown() {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter--);
    }
}