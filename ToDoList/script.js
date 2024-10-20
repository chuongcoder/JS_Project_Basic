const input = document.querySelector(".input");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector(".btn");  // Define the btn variable

btn.addEventListener("click", addTask);

function addTask() {
    if (input.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    SaveData();
}

listContainer.addEventListener("click", function (e) {
    // click li 
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } 
    // click close icon 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData();  // Save data after an item is removed
    }
}, false);

function SaveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();
