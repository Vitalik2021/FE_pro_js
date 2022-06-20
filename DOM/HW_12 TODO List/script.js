const buttonEl = document.getElementById("btn-el");
const inputEL = document.getElementById("input-el");
const listEl = document.getElementById("list-item");

function todoList() {
    if (!inputEL.value.trim()) return;
    const liEl = document.createElement("li");
    liEl.innerText = inputEL.value;
    listEl.append(liEl);
    inputEL.value = "";
}
buttonEl.addEventListener("click", todoList);
