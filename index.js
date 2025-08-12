const screenDisplay = document.getElementById("screen");

function toAppend(input) {
    screenDisplay.textContent += input;
}

function clearDisplay() {
    screenDisplay.textContent = "";
}

function deleteDisplay() {
    const currentText = screenDisplay.textContent;
    if (currentText.length > 0) {
        screenDisplay.textContent = currentText.slice(0, -1);
    }
}

function calculate() {
    try{
        const result = eval(screenDisplay.textContent);
        screenDisplay.textContent = result;
    }

    catch (error) {
        screenDisplay.textContent = "Error";
    }
}