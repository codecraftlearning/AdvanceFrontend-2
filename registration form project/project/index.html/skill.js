const skillForm = document.querySelector(".skillForm");
const skillInput = document.querySelector(".skillInput");

const primaryContainer = document.querySelector(".addSkillPRIMARY");
const secondaryContainer = document.querySelector(".addskillSECONDARY");

let draggedSkillText = "";

skillForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = skillInput.value.trim();
    if (!value) return;

    const primarySkill = document.createElement("span");
    primarySkill.className = "primaryskillcreation";
    primarySkill.draggable = true;

    primarySkill.innerHTML = `
        <button class="drag">::</button>
        <span class="skilladdedP">${value}</span>
        <button class="delete">X</button>
    `;

    primaryContainer.appendChild(primarySkill);
    skillInput.value = "";

    // DELETE PRIMARY
    primarySkill.querySelector(".delete").addEventListener("click", () => {
        primarySkill.remove();
    });

    // DRAG START (only text is transferred)
    primarySkill.addEventListener("dragstart", () => {
        draggedSkillText = value;
        primarySkill.classList.add("dragging");
    });

    primarySkill.addEventListener("dragend", () => {
        primarySkill.classList.remove("dragging");
    });
});


secondaryContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
});


secondaryContainer.addEventListener("drop", function (e) {
    e.preventDefault();
    if (!draggedSkillText) return;

    const secondarySkill = document.createElement("span");
    secondarySkill.className = "secondaryskillcreation";

    secondarySkill.innerHTML = `
        <span class="skilladdeds">${draggedSkillText}</span>
        <button class="delete">X</button>
    `;

    secondaryContainer.appendChild(secondarySkill);


    secondarySkill.querySelector(".delete").addEventListener("click", () => {
        secondarySkill.remove();
    });

    const draggedElement = document.querySelector(".primaryskillcreation.dragging");
    if (draggedElement) draggedElement.remove();

    draggedSkillText = "";
});
