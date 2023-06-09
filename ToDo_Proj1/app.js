//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //TdoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = "todoInput.value";
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);


  //Check mark button

  const completedButton=document.createElement('button')
  completedButton.innerHTML='<i class="fa-sharp fa-solid fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton)

  // Check trash button
    const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

//Append todo

todoList.appendChild(todoDiv)








}


