
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:');
    if (this.todos.length === 0){
      console.log('Your todo list is empty!')
    }else {
      for (var i = 0; i < this.todos.length; i++) {
        
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        }else {
          console.log('()', this.todos[i].todoText);
        }  
      }
    }
  },
  addTodo: function(todoText) { // addTodo()
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(x, todoText) {
    this.todos[x].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(x) {
    this.todos.splice(x,1);
    this.displayTodos();
  },
  toggleCompleted: function(x){
    var todo = this.todos[x];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //get number of completed todos.
    for (var i = 0; i< totalTodos; i++){
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1: if everything's true, make everything false.
    if(completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: if everything's not true, make everything true
    }else{
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      } 
    }
    this.displayTodos();
  }
};


var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
