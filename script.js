
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

// want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// Want to run display Todos method, when someone clicks the display todos button
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});


