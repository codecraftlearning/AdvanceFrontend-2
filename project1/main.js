
const count = 20;

const myDiv = document.getElementById("myDiv");
const list = document.createElement('ul');

for(let i = 0; i<count; i++) {
    const li = document.createElement('li');
    li.innerText = i;
    list.appendChild(li);
}

myDiv.appendChild(list);
