"use strict";
// const input = <HTMLInputElement>document.getElementById("input-id"); // type assertion
// or 
const input = document.getElementById("input-id");
const form = document.getElementById("form-id");
const ul = document.getElementById("ul-id");
let todos = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(input.value);
    const value = input.value.trim(); // remove spaces
    if(value === ""){
        alert("Todo cannot be empty!");
        return;
    }
    todos.push({
        id: Math.random(),
        text: input.value,
    });
    // console.log(todos);
    renderTodo();
    input.value = ""; // clear input after adding
});
function renderTodo() {
    ul.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = todo.text;

        const div = document.createElement("div");
        div.className = "actions";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit";
        editButton.onclick = () => editBtn(todo.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteBtn(todo.id);

        div.appendChild(editButton);
        div.appendChild(deleteButton);

        li.appendChild(span);
        li.appendChild(div);
        ul.appendChild(li);
    });
}
function editBtn(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        const updatedText = prompt("Enter updated todo:", todo.text);
        if (updatedText.trim() !== "") {
            todo.text = updatedText;
            renderTodo();
        }
    }
}
function deleteBtn(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
}
