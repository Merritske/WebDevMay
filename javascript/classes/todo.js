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
    toString(){
        this.todos.forEach((todo, index)=>{
            console.log(`#${index} task: ${todo}`)
        })
    }
    getTodoByValue(todo){
        let singleTodo = this.todos.filter((val)=>val.toLowerCase().trim() == todo.toLowerCase().trim())
   console.log(singleTodo)
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

task.addTodo('walking')
task.toString()
task.getTodoByValue('WALKING  ')