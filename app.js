
// const inputText = document.querySelector('.input-todo')
// const todos = document.querySelector('.todo-list')
// const todoForm = document.querySelector('.site-form')

// todoForm.addEventListener('submit' , (e) =>{
//     e.preventDefault()
//     const inputValue = inputText.value
//     inputText.value = ''
//     if(inputValue){
//         toDoList(inputValue)
//     }else{
//         alert('add anything')
//         inputText.value = ''
        
//     }
// })
// function toDoList(todo) {
// //li
// const li = document.createElement('li')
// li.textContent = todo
// li.classList.add('todo-item')
// //paaragraph
// const p = document.createElement('p')
// p.textContent.todo
// li.appendChild(p)
// //check-btn
// const checkBtn = document.createElement('button')
// checkBtn.innerHTML = '<i class="fas fa-check"></i>'
// checkBtn.classList.add('check-btn')
// li.appendChild(checkBtn)

// //trash-btn
// const trashBtn = document.createElement('button')
// trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
// trashBtn.classList.add('trash-btn')
// li.appendChild(trashBtn)
// // todos.style.padding = '10px'
// todos.appendChild(li)
// // console.log(li)


// document.addEventListener('click' , (e) =>{
//     if(e.target.classList[0] == 'trash-btn') {
//             const item = e.target.parentElement
//             item.remove() 
//             const listel = document.querySelectorAll('.todo-item')
//             if(listel.length == '0'){
//                 // modal.classList.remove('hidden')
//                 // overlay.classList.remove('hidden')
//                 // todos.style.padding = '10px'
//             }
//         }
//         if(e.target.classList[0] == 'check-btn'){
//             const item = e.target.parentElement
//             item.classList.add("done")
//         }
//         })


// }











const addTodo = document.querySelector('.addTodo')
const todoInput = document.querySelector('.input-todo')
const todoList = document.querySelector('.todo-list')

addTodo.addEventListener('click' , () =>{
})
function adder(e){
    e.preventDefault()
    //creating lies
    const newTodo = document.createElement('div')
    newTodo.classList.add('todo-item')
    const todo = document.createElement('li')
    todo.classList.add('todo')
    todoList.textContent = todoInput.value
    newTodo.appendChild('todo')
    //buttons
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('checkBtn')
    checkBtn.innerHTML = '<i class="fas fa-circle-check"></i>'
    newTodo.appendChild(checkBtn)

    //trash
    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trahBtn')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    newTodo.appendChild(trashBtn)

    //add to ul
    todoList.appendChild(newTodo)

    todoInput.value = ''
    // console(todoInput.value)
}

