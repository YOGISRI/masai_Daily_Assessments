
const ul = document.querySelector("#item-list");
const button = document.getElementById("add-btn");


button.addEventListener("click", function () {

    
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";

    
    const index = ul.children.length + 1;

    
    if (index % 2 !== 0) {
        // Odd → bold & blue
        newItem.style.fontWeight = "bold";
        newItem.style.color = "blue";
    } else {
        
        newItem.style.fontStyle = "italic";
        newItem.style.color = "red";
    }

    
    ul.appendChild(newItem);
});
