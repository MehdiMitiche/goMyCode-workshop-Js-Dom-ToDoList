const addBtn = document.querySelector(".add-btn");
const todosContent = document.querySelector(".todos-content");

const addNewTodo = () => {
  const todoInput = document.querySelector(".todo-input");
  if (todoInput.value) {
    const newTodo = document.createElement("div");
    const newTodoText = document.createElement("div");
    const newTodoCheck = document.createElement("div");
    const newTodoDelete = document.createElement("div");
    const newCheck = document.createElement("input");
    newCheck.setAttribute("type", "checkbox");
    newTodoCheck.appendChild(newCheck);
    newTodoText.classList.add("todo-text");
    newTodoText.innerHTML = todoInput.value;
    newTodoCheck.classList.add("todo-check");
    newTodoDelete.classList.add("todo-delete");
    newTodo.classList.add("todo-item");
    newTodoDelete.innerHTML = "Delete";
    newTodo.appendChild(newTodoText);
    newTodo.appendChild(newTodoCheck);
    newTodo.appendChild(newTodoDelete);
    todosContent.appendChild(newTodo);
    todoInput.value = "";
    const index = document.querySelectorAll(".todo-item").length - 1;
    newTodoDelete.addEventListener("click", () => {
      deleteTodo(index);
    });
  }
};

const deleteTodo = (i) => {
  console.log(i);
  const todoItems = document.querySelectorAll(".todo-item");
  todoItems[i].style.display = "none";
};

addBtn.addEventListener("click", () => {
  addNewTodo();
});
