
// const count = 20;

// // const myDiv = document.getElementById("myDiv");
// // myDiv.style.backgroundColor = "blue";

// // const list = document.createElement('ul');

// // for(let i = 0; i<count; i++) {
// //     const li = document.createElement('li');
// //     li.innerText = i;
// //     list.appendChild(li);
// // }

// // myDiv.appendChild(list);


// const myDivs = document.getElementsByClassName("myDiv");

// for(let i = 0; i<myDivs.length; i++) {
//     myDivs[i].style.backgroundColor = "blue";
// }


// const myInput = document.getElementById("myInput");
// const outputParagraph = document.getElementById("outputParagraph");

// myInput.addEventListener("input", function() {
//     outputParagraph.innerText = myInput.value;
// });


function addTextToParagraph(event) {    
    const outputParagraph = document.getElementById(event.target.getAttribute("aria-details"));
    outputParagraph.textContent = event.target.value;
}

function handleEvent(event) {
    // event.stopPropagation();
    // console.log("Target:", event.currentTarget.className);
}   

function handleEvent2(event) {
    event.stopPropagation();
    console.log("Target:", event.currentTarget.className);
}

document.getElementById("block_a").addEventListener("click", handleEvent2, true);
document.getElementById("block_b").addEventListener("click", handleEvent2, true);
document.getElementById("block_c").addEventListener("click", handleEvent2, true);

document.getElementById("block_a").removeEventListener("click", handleEvent2, true);

//event bubling: when an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
//event capturing: the event goes down to the element from the document root.