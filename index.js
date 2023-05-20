// Write your code here!
const m = document.getElementById('main');
m.remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = "Dom is the champion";

document.body.append(newHeader);