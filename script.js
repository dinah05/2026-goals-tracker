const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked
      ? "line-through"
      : "none";
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  todoList.appendChild(li);

  todoInput.value = "";
});
