
document.getElementById("main-title").textContent = "Welcome to the DOM World!";
let paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.color = "blue";
}

let containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
