const WriteForm = document.querySelector("#WriteForm");
const todoInput = document.querySelector("#WriteForm input");
const todoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");




const TODOS_KEY = "todos";
const DONE_KEY = "dones";
let toDos = [];
let Done = [];



function goDoneList(e){
    const li = e.target.parentElement;
    // Done.push(toDos.filter(done => done.id == parseInt(li.id)));
    Done = (toDos.filter(done => done.id == parseInt(li.id)));
    localStorage.setItem(DONE_KEY, JSON.stringify(Done));
    paintDone(Done);
    li.remove();
   
    
}


function paintDone(newDone){
    // console.log(newDone);
        const list2 = document.createElement("li");
        list2.id = newDone[0].id;
        const span2 = document.createElement("span");
        span2.innerText = newDone[0].text;
        const button3 = document.createElement("button");
        button3.innerText = "X";
        // button3.innerHTML = '<i class="fas fa-times"></i>';
        button3.addEventListener("click",deleteTodo);
        list2.appendChild(span2);
        list2.appendChild(button3);
        doneList.appendChild(list2);
    
    }

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function paintToDo(newTodo){
    const list1 = document.createElement("li");
    list1.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button1 = document.createElement("button");
    button1.innerText = "O"; 
    // button1.innerHTML = '<i class="fas fa-check"></i>';
    const button2 = document.createElement("button");
    button2.innerText = "X";
    // button2.innerHTML = '<i class="fas fa-times"></i>';
    button1.addEventListener("click",goDoneList);
    button2.addEventListener("click",deleteTodo);
    list1.appendChild(span);
    list1.appendChild(button1);
    list1.appendChild(button2);
    todoList.appendChild(list1);  

}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    
}

WriteForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDone = localStorage.getItem(DONE_KEY);

if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}


if(savedDone !== null){
    const parsedDone = JSON.parse(savedDone);
    Done = parsedDone;
    parsedDone.forEach(paintDone);
}
