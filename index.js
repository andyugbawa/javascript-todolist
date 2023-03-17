

const checkButton= document.querySelector('.check-btn');
const header = document.querySelector('.ink');
const updateButton = document.querySelector('.update-btn');
const deleteButton =document.querySelector('.delete-btn')
const completeButton = document.querySelector('.check-btn')

const todoInput = document.querySelector('.todo-input');
const game =document.getElementById('game');

//manos edited this

// andy edited also =

checkButton.addEventListener('click',createTodo);







function createTodo(){
    const newDiv = document.createElement('div')
    const newList =document.createElement('li');
    newList.classList.add('bug')
    // newList.id=todoInput.value;
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
    e.target.parentElement.remove()

    // e.target.parentElement.children[0].remove()
    // console.log(e.target)

    // e.target.parentElement.remove();
    // const newList = e.target;
    // newList.classList.add('andy')
    // newList.classList.add('manos')
    // console.log('1',newList,'2',newList.classList,'3',newList.classList['0'])
    
    
    // if (newList.classList[0] === 'delete-btn'){
        
    //     const list = newList.parentElement;
    //     list.remove();
    // }
   

    
}

function update(e){
    // console.log(e.target.parentElement.firstChild);
    
    if (e.target.parentElement.firstChild.classList.contains('strike')){
        e.target.parentElement.firstChild.classList.remove('strike');
    }
    else{
        e.target.parentElement.firstChild.classList.add('strike');
    }
    

    
    
    
}
let saveButton2 = document.createElement('button')
saveButton2.addEventListener('click',saveBtn2);
function editButton(e){
    let editElement = e.target.parentElement.children;
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();
    editElement[0].remove();

   
    
  
    const inputElement = document.createElement('input')
    const newForm = document.createElement('form')
    newForm.appendChild(inputElement)
    
  
 
    saveButton2.innerText='save';
    saveButton2.classList.add('save-btn')
    inputElement.setAttribute('placeholder','Edit...')
    newForm.appendChild(saveButton2);
    game.appendChild(newForm);
    
    
    
    



    

}




function saveBtn2(e){
    console.log('smmt')

    
}



