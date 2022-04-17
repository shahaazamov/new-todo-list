const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todoBtn')
const todoList  = document.querySelector('.todo-list')
const filter = document.querySelector('.filter-todo')

todoBtn.addEventListener('click' , addTodo)
todoList.addEventListener('click', deleteCheck)
filter.addEventListener('click' , filterTodo)




function addTodo(e){
    e.preventDefault();
    //make todo div
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')
//li
const newTodo = document.createElement('li')
newTodo.innerText = todoInput.value
newTodo.classList.add('todo-item')
tododiv.appendChild(newTodo)
//check button
const checkbtn = document.createElement('button')
checkbtn.innerHTML = '<i class="fas fa-check"></i>';
checkbtn.classList.add('check-btn')
tododiv.appendChild(checkbtn)
//trash
const trashbtn = document.createElement('button')
trashbtn.innerHTML = '<i class="fas fa-trash"></i>';
trashbtn.classList.add('trash-btn')
tododiv.appendChild(trashbtn)
//append to list
todoList.appendChild(tododiv)
// empty todo input
todoInput.value = ''

}
function deleteCheck(e){
    const item = e.target
    if(item.classList[0] == 'trash-btn'){
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function (){
            todo.remove()
        })
    }

    //check
    if(item.classList[0] == 'check-btn'){
        const todo = item.parentElement
        todo.classList.toggle("done")
    }

    
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
            if(todo.classList.contains("done")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
            case "uncompleted":
                if(!todo.classList.contains("done")){
                todo.style.display = "flex"
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}