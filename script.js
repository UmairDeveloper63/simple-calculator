const display = document.getElementById("display");

function appendValue(value) {
display.value += value;
}

function clearDisplay() {
display.value = "";
}

function deleteLast() {
display.value = display.value.slice(0, -1);
}

function calculate() {
try {
const expression = display.value;

    if (!/^[0-9+\-*/%. ]+$/.test(expression)) {
        throw new Error("Invalid input");
    }

    const result = Function('"use strict"; return (' + expression + ')')();

    if (!Number.isFinite(result)) {
        throw new Error("Invalid calculation");
    }

    display.value = result;

} catch (error) {
    display.value = "Error";
}

}