const themeBtn = document.getElementById("themeChanger");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeBtn.innerText = document.body.classList.contains("light-theme") ? "Dark Theme" : "Light Theme";
});

const buttons = document.querySelectorAll(".calpanel td");
const expressionPanel = document.getElementById("expressionPannel");
const solutionPanel = document.getElementById("solutionPannel");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            expressionPanel.innerText = "";
            solutionPanel.innerText = "";
            return;
        }

        if (value === "<=") {
            expression = expression.slice(0, -1);
            expressionPanel.innerText = expression;
            return;
        }

        if (value === "=") {
            try {
                const result = eval(expression);
                solutionPanel.innerText = result;
            } catch {
                solutionPanel.innerText = "Error";
            }
            return;
        }

        if (value === "%") {
            expression += "/100";
            expressionPanel.innerText = expression;
            return;
        }

        expression += value;
        expressionPanel.innerText = expression;
    });
});
