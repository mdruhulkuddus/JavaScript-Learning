// Get references to DOM elements
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Add event listener to the "Add Todo" button
addTodoBtn.addEventListener("click", addTodo);

// Function to add a new todo item
function addTodo() {
  // Get the trimmed value from the todo input field
  const todoText = todoInput.value.trim();

  // Check if the input is not empty
  if (todoText !== "") {
    // Create a new list item
    const li = document.createElement("li");

    // Create a div to hold the edit and delete buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Create a span element to display the todo text
    const span = document.createElement("span");
    span.textContent = todoText;

    // Create an Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("link-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);
    buttonsDiv.appendChild(editButton);

    // Create a Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("link-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    buttonsDiv.appendChild(deleteButton);

    // Clear the input field
    todoInput.value = "";

    // Append the elements to the list item
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(buttonsDiv);
  }
}

// Function to edit a todo item
function editTodo() {
  // Prompt the user for the updated todo text
  const newText = prompt("Enter updated todo:");

  // Check if the prompt was not cancelled
  if (newText !== null) {
    // Get a reference to the parent list item
    const li = this.parentElement.parentElement;

    // Create a new span element with the updated text
    const span = document.createElement("span");
    span.textContent = newText;

    // Clear the contents of the parent list item
    li.innerHTML = "";

    // Create a div to hold the edit and delete buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Create an Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("link-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodo);
    buttonsDiv.appendChild(editButton);

    // Create a Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("link-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    buttonsDiv.appendChild(deleteButton);

    // Append the updated span and buttonsDiv to the parent list item
    li.appendChild(span);
    li.appendChild(buttonsDiv);
  }
}

// Function to delete a todo item
function deleteTodo() {
  // Remove the parent list item of the delete button
  this.parentElement.parentElement.remove();
}