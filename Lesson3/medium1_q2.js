let munstersDescription = "The Munsters are creepy and spooky.";

let newMunsters = '';

for(let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === ' ')
    newMunsters += ' ';
  else if (munstersDescription[i] === munstersDescription[i].toUpperCase())
    newMunsters += munstersDescription[i].toLowerCase();
  else
    newMunsters += munstersDescription[i].toUpperCase();
}

console.log(newMunsters);