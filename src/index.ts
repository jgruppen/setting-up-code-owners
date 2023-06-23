// Todo interface
interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Todo class
  class TodoApp {
    todos: Todo[];
  
    constructor() {
      this.todos = [];
    }
  
    addTodo(title: string) {
      const newTodo: Todo = {
        id: this.todos.length + 1,
        title: title,
        completed: false,
      };
      this.todos.push(newTodo);
    }
  
    completeTodoById(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = true;
      }
    }
  
    deleteTodoById(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  
    displayTodos() {
      console.log('Todos:');
      for (const todo of this.todos) {
        console.log(`- ${todo.title} (${todo.completed ? 'Completed' : 'Pending'})`);
      }
    }
  }
  
  // Create a new instance of the TodoApp class
  const todoApp = new TodoApp();
  
  // Add some sample todos
  todoApp.addTodo('Buy groceries');
  todoApp.addTodo('Finish homework');
  todoApp.addTodo('Go for a run');
  
  // Complete a todo and delete another
  todoApp.completeTodoById(2);
  todoApp.deleteTodoById(3);
  
  // Display the current todos
  todoApp.displayTodos();
  