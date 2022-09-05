class TodoApp{
    constructor(){
this.todos = [];
    }
    addTodo(todo){
        return this.todos.push(todo)
    }
    getTodo(){
        return this.todos
    }
    deleteTodo(todo){
let index = this.todos.indexOf(todo);
console.log(this.todos[index])
this.todos.splice(index,1)
    }
}
let task = new TodoApp()
task.addTodo('cleaning')
task.addTodo('washing')
// task.deleteTodo('cleaning')
console.log(task.getTodo())