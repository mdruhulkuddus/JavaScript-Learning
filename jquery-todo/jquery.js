// Add event listener to the "Add Todo" button
$("#addTodoBtn").on("click", addTodo);

// Function to add a new todo item
function addTodo() {
  // Get the trimmed value from the todo input field
  const todoText = $("#todoInput").val().trim();

  // Check if the input is not empty
  if (todoText !== "") {
    // Create a new list item with span and buttons
    const listItem = $("<li>").append(
      $("<span>").text(todoText),
      $("<div>").addClass("buttons").append(
        $("<button>").addClass("link-button").text("Edit").on("click", editTodo),
        $("<button>").addClass("link-button").text("Delete").on("click", deleteTodo)
      )
    );

    // Clear the input field
    $("#todoInput").val("");

    // Append the new list item to the todo list
    $("#todoList").append(listItem);
  }
}

// Function to edit a todo item
function editTodo() {
  // Prompt the user for the updated todo text
  const newText = prompt("Enter updated todo:");

  // Check if the prompt was not cancelled
  if (newText !== null) {
    // Get a reference to the parent list item
    const listItem = $(this).closest("li");

    // Update the text of the span element
    listItem.find("span").text(newText);
  }
}

// Function to delete a todo item
function deleteTodo() {
  // Remove the parent list item of the delete button
  $(this).closest("li").remove();
}
