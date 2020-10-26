
const dateNow = document.getElementById('date');
const types = {weekday: "long", month: "short", day: "numeric"}
const today = new Date();
dateNow.innerHTML = today.toLocaleDateString("en-US", types);


let id = 0;
const list = document.querySelector('#list');

// UI Actions
class UI{
    
    //display todos
    static displayToDo(){
        const todos = Store.getToDos();
        todos.forEach((todo) => UI.addToDoToList(todo.text, todo.id, todo.completed));
    }

    // adding a list of Todos
    static addToDoToList(toDo, id, ifChecked){
        // 
        const completed = ifChecked ? 'checkedLine' : 'noYet';
        const statusIcon = ifChecked ? 'fa-check-circle' : 'fa-circle';
        const liItem = `<li>
        <p class="text ${completed}">${toDo}</p>
        <i class="far ${statusIcon} co" action="complete" id="${id}"></i>
        <i class="far fa-trash-alt" action="delete" id="${id}"></i>
        </li>`;
        //inserting the list below each other
        const position = "beforeend";
        list.insertAdjacentHTML(position, liItem);
    }

    //this function removes a list 
    static removeToDo(element){
        
        element.parentNode.parentNode.removeChild(element.parentNode);
        
        //you make sure to also erase from the storage that it is saved
        // and not only from the Display
        const curId = element.attributes.id.value;
        const todos = Store.getToDos();
        todos.forEach((todo, index) => {
            if(+todo.id === +curId){
                todos.splice(index, 1);
            }
        });

        localStorage.setItem('toDo', JSON.stringify(todos));
    }

    
    static completeToDo(element){
        const CHECK = "fa-check-circle";
        const UNCHECK = "fa-circle";

        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle("checkedLine");

       // makes sure the list is completed and it updates it to the storage
        const curId = element.attributes.id.value;
        const todos = Store.getToDos();
        todos.forEach((todo, index) => {
            if(+todo.id === +curId){
                todos[index].completed = todos[index].completed ? false : true;
            }
        });

        localStorage.setItem('toDo', JSON.stringify(todos));
    }    
}




document.addEventListener('DOMContentLoaded', UI.displayToDo);

document.addEventListener("keyup", function(){
    if(event.keyCode == 13){
        const toDoItem = input.value;
        if(toDoItem){
            
            Todos.showAll();
            UI.addToDoToList(toDoItem, Date.now());
           
            Store.addToDoToList(toDoItem, Date.now());
          
            id++;
        }
        input.value = "";
    }
});

// making a task completed or erase from the display and storage
list.addEventListener("click", (event) => {
    
    const element = event.target;
    if(element.attributes.action){
        const elementAction = element.attributes.action.value;
        if(elementAction == "complete"){
            UI.completeToDo(element);
        }else if(elementAction == "delete"){
            UI.removeToDo(element);
        }
    }
    
});


