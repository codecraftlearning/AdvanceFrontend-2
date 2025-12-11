
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