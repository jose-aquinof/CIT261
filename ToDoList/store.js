class Store{
    static getToDos(){
        let todos;
        if(localStorage.getItem('toDo') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('toDo'));
        }
        return todos;
    }

    static addToDoToList(toDo, id){

        const todos = Store.getToDos();

        todos.push({text: toDo, id: id, completed: false});

        localStorage.setItem('toDo', JSON.stringify(todos));
    }
}



