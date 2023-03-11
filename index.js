
const deleteButton = document.querySelector('.delete-btn')
const checkButton= document.querySelector('.check-btn');
const header = document.querySelector('.ink');

const todoInput = document.querySelector('.todo-input');
const game =document.getElementById('game');



checkButton.addEventListener('click',createTodo);

deleteButton.addEventListener('click',deleteTodo);



function createTodo(){
    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    newList.id=todoInput.value;
    newDiv.appendChild(newList)
    game.classList.add('case') 
    newList.innerText=todoInput.value;
    




 
   const completeButton = document.createElement('button')
    completeButton.innerText='Complete';
    completeButton.classList.add('check-btn')
    newDiv.appendChild(completeButton)
    game.appendChild(newDiv)

   const deleteButton = document.createElement('button')
    deleteButton.innerText='Delete';
    deleteButton.classList.add('delete-btn')
    newDiv.appendChild(deleteButton)
    game.appendChild(newDiv)

   const updateButton = document.createElement('button')
    updateButton.innerText='Update';
    updateButton.classList.add('update-btn')
    newDiv.appendChild(updateButton)
    game.appendChild(newDiv)


    

    
    todoInput.value='';
     
}

function deleteTodo(e){
    // const newList = e.target;
    // if (newList.classList[0] === 'delete-btn'){
    //     const list = newList.parentElement;
    //     list.remove();
    // }
    const deleteElement = document.getElementById( todoInput.value);

    deleteElement.remove()
    todoInput.value='';
   
    
   
    
    
     
}

const greatCheck = checkButton.parentElement
console.log(greatCheck);

const headerBlue =header.parentElement;
console.log(headerBlue);
