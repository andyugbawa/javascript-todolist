const checkButton= document.querySelector('.check-btn');
const header = document.querySelector('.ink');
const updateButton = document.querySelector('.update-btn');
const completeButton = document.querySelector('.check-btn');
const todoInput = document.querySelector('.todo-input');
const saveButton = document.querySelector('.save-btn');
const game =document.getElementById('game');
const sound = document.getElementById('click')





const inputLoader = document.querySelector('input');
const placeButton =document.querySelector('save-btn');
let newLi = document.querySelector('li');

newLi=localStorage.getItem('value')


function editButton(){
    localStorage.setItem('value','input.value');
    newLi=localStorage.getItem('value')
}









checkButton.addEventListener('click',createTodo);

function createTodo(){
    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newDiv.appendChild(newList)
    game.classList.add('case') 
    newList.innerText=todoInput.value;

    const completeButton = document.createElement('button')
    completeButton.innerText='Edit';
    completeButton.classList.add('check-btn')
    newDiv.appendChild(completeButton)
    completeButton.addEventListener('click',editButton);
    game.appendChild(newDiv)

    const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener('click',cancelButton)
    newDiv.appendChild(deleteButton)
    game.appendChild(newDiv)
    // deleteButton=document.getElementById(sound).play();


    const updateButton = document.createElement('button');
    updateButton.id=todoInput.value;
    updateButton.innerText='Update';
    updateButton.classList.add('update-btn');
    updateButton.addEventListener('click',update)
    newDiv.appendChild(updateButton);
    game.appendChild(newDiv);
    todoInput.value='';
}

function cancelButton(e){
    e.target.parentElement.remove();

}

function update(e){ 
    if (e.target.parentElement.firstChild.classList.contains('strike')){
        e.target.parentElement.firstChild.classList.remove('strike');
    }
    else{
        e.target.parentElement.firstChild.classList.add('strike');
    }
}

function playSound() {
    let audio = document.getElementById("myAudio");
    audio.play();
  }

function editButton(e){
    let editElement = e.target.parentElement.children;
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    const inputElement = document.createElement('input')
    const newForm = document.createElement('form')
    newForm.appendChild(inputElement)
    let saveButton = document.createElement('button')
    saveButton.addEventListener('click', saveBtn);
    saveButton.innerText='save';
    saveButton.classList.add('save-btn')
    inputElement.setAttribute('placeholder','Edit...')
    newForm.appendChild(saveButton);
    game.appendChild(newForm);
}

function saveBtn(e){
    e.preventDefault()

    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newDiv.appendChild(newList)
    game.classList.add('case') 
 
    newList.innerText=e.target.parentElement.children[0].value;
    completeButton.innerText='Edit';
    completeButton.classList.add('check-btn')
    newDiv.appendChild(completeButton)
    completeButton.addEventListener('click',editButton);
    game.appendChild(newDiv)

    const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener('click',cancelButton)
    newDiv.appendChild(deleteButton)
    game.appendChild(newDiv)

    const updateButton = document.createElement('button');
    updateButton.id=todoInput.value;
    updateButton.innerText='Update';
    updateButton.classList.add('update-btn');
    updateButton.addEventListener('click',update)
    newDiv.appendChild(updateButton);
    game.appendChild(newDiv);

    e.target.parentElement.children[0].remove();
    e.target.remove();
}