
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgButton = document.getElementById("bgButton");
const textButton = document.getElementById("textButton");
const outputBox = document.getElementById("outputBox");
bgButton.addEventListener("click", function () {
    const color = colorInput.value.trim();
    outputBox.style.backgroundColor = color;
    if (outputBox.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
});
textButton.addEventListener("click", function () {
    const newText = textInput.value.trim();

    if (newText === "") {
        alert("Please enter some text!");
    } else {
        outputBox.textContent = newText;
    }
});
