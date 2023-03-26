const createTodoBtn = document.querySelector('.create-todo-btn');
const completeButton = document.querySelector('.check-btn');
const todoInput = document.querySelector('.todo-input');
const saveButton = document.querySelector('.save-btn');
const game = document.getElementById('todos');
const inputForm = document.querySelector('#input-form')

window.addEventListener("load", displayTodos);
createTodoBtn.addEventListener('click', createTodo);
todoInput.focus()
inputForm.addEventListener('keydown', handleInput)
const sound = document.getElementById('click')


function handleInput(e){
    
    if ( e.keyCode === 13 && todoInput.value !== '') {
        e.preventDefault();

        const newDiv = document.createElement('div')
        const newList =document.createElement('li');
        newList.classList.add('bug')
        newDiv.appendChild(newList)
        game.classList.add('case') 
        newList.innerText=todoInput.value;
    
        const completeButton = document.createElement('button')
        completeButton.innerText='Edit';
        completeButton.classList.add('button')
        newDiv.appendChild(completeButton)
        completeButton.addEventListener('click', editTodo);
    
        const deleteButton = document.createElement('button')
        deleteButton.innerText='Delete';
        deleteButton.classList.add('button')
        deleteButton.addEventListener('click', deleteTodo)
        newDiv.appendChild(deleteButton)
    
        const updateButton = document.createElement('button');
        updateButton.id=todoInput.value;
        createTodoToLocalStorage(todoInput.value)
    
        updateButton.innerText='Update';
        updateButton.classList.add('button');
        updateButton.addEventListener('click', updateTodo)
        newDiv.appendChild(updateButton);
        game.appendChild(newDiv);
        todoInput.value='';
    
        sound.play()
    }
}


function displayTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Loop over each todo and add it to the list
    for (let i = 0; i < todos.length; i++) {
        const todoText = todos[i];
        const newDiv = document.createElement('div')
        const newList =document.createElement('li');
        newList.classList.add('bug')
        newDiv.appendChild(newList)
        game.classList.add('case') 
        newList.textContent = todoText;
            
        const completeButton = document.createElement('button')
        completeButton.innerText='Edit';
        completeButton.classList.add('check-btn')
        newDiv.appendChild(completeButton)
        completeButton.addEventListener('click', editTodo);
        game.appendChild(newDiv);

        const deleteButton = document.createElement('button')
        deleteButton.innerText='Delete';
        deleteButton.classList.add('delete-btn')
        deleteButton.addEventListener('click', deleteTodo)
        newDiv.appendChild(deleteButton)
        game.appendChild(newDiv)
        
        // deleteButton=document.getElementById(sound).play();
        const updateButton = document.createElement('button');
        updateButton.id=todoInput.value;
        updateButton.innerText='Update';
        updateButton.classList.add('update-btn');
        updateButton.addEventListener('click', updateTodo)
        newDiv.appendChild(updateButton);
    }
}

function createTodo() {
    if (todoInput.value === '') {
        return
    }

    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newDiv.appendChild(newList)
    game.classList.add('case') 
    newList.innerText=todoInput.value;

    const completeButton = document.createElement('button')
    completeButton.innerText='Edit';
    completeButton.classList.add('button')
    newDiv.appendChild(completeButton)
    completeButton.addEventListener('click', editTodo);

    const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('button')
    deleteButton.addEventListener('click', deleteTodo)
    newDiv.appendChild(deleteButton)

    const updateButton = document.createElement('button');
    updateButton.id=todoInput.value;
    createTodoToLocalStorage(todoInput.value)

    updateButton.innerText='Update';
    updateButton.classList.add('button');
    updateButton.addEventListener('click', updateTodo)
    newDiv.appendChild(updateButton);
    game.appendChild(newDiv);
    todoInput.value='';

    sound.play()
}


function deleteTodo(e) {
    removeFromLocalStorage(e.target.parentElement.firstChild.innerText) 
    e.target.parentElement.remove();
    sound.play()
}

function updateTodo(e) { 
    if (e.target.parentElement.firstChild.classList.contains('strike')){
        e.target.parentElement.firstChild.classList.remove('strike');
    }
    else{
        e.target.parentElement.firstChild.classList.add('strike');
    }
    sound.play()

}

function editTodo(e){
    let editElement = e.target.parentElement.children;
   
    const inputElement = document.createElement('input')
    const newForm = document.createElement('form')
    newForm.appendChild(inputElement)
    let saveButton = document.createElement('button')
    saveButton.addEventListener('click', saveTodo);
    saveButton.innerText='save';
    saveButton.classList.add('save-btn')
    inputElement.setAttribute('placeholder', e.target.parentElement.firstChild.innerText)
   
    newForm.appendChild(saveButton);
    game.appendChild(newForm);
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    sound.play()

}

function saveTodo(e) {
    e.preventDefault()
    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newDiv.appendChild(newList)
    game.classList.add('case') 
    newList.innerText= e.target.parentElement.children[0].value;
    replaceInLocalStorage(e.target.parentElement.firstChild.placeholder, e.target.parentElement.firstChild.value)


    const editBtn = document.createElement('button')
    editBtn.innerText='Edit';
    editBtn.classList.add('edit-btn')
    editBtn.addEventListener('click', editTodo)
    newDiv.appendChild(editBtn)

    const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener('click', deleteTodo)
    newDiv.appendChild(deleteButton)

    const updateButton = document.createElement('button');
    updateButton.id=todoInput.value;
    updateButton.innerText='Update';
    updateButton.classList.add('update-btn');
    updateButton.addEventListener('click', updateTodo)
    newDiv.appendChild(updateButton);
    game.appendChild(newDiv);

    e.target.parentElement.children[0].remove();
    e.target.remove();
    sound.play()
}

function replaceInLocalStorage(todoTextToRemove, todoTextToAdd) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    // Find the index of the matching todo in the array
    const indexToReplace = todos.findIndex(todo => todo === todoTextToRemove);
  
    if (indexToReplace !== -1) { // Only remove if it was found
      // Remove the matching todo from the array
      todos.splice(indexToReplace, 1);
      todos[indexToReplace] = todoTextToAdd
      // Save the updated array back to local storage
      localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function removeFromLocalStorage(todoTextToRemove) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    // Find the index of the matching todo in the array
    const indexToReplace = todos.findIndex(todo => todo === todoTextToRemove);
  
    if (indexToReplace !== -1) { // Only remove if it was found
      // Remove the matching todo from the array
      todos.splice(indexToReplace, 1);
  
      // Save the updated array back to local storage
      localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function createTodoToLocalStorage(todoText) {
    // Save the todo to local storage
        if (todoText) { // only save if there is text
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        }
    }