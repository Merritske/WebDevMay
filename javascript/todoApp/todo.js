class TodoApp {
    constructor() {
        this.todos = []
    }
    addTodo(todo) {
        this.todos.push(todo)
    }
    showTodo() {
        console.log(this.todos)
    }
    deleteTodo(value) {
        let temp = [];
        this.todos.forEach(todo => {
            temp.push(todo.toLowerCase())
        })
        let index = temp.indexOf(value.toLowerCase())
        console.log("todo found", index, temp[index])
        temp.splice(index, 1);
        //console.log(temp)
        this.todos = [...temp]
    }
}
let app = new TodoApp()
app.addTodo("wassen")
app.addTodo('kuisen')
app.addTodo('strijken')
app.addTodo("tuinieren")
app.deleteTodo("tuinieren")
app.showTodo()


//KAN OOK GESCHREVEN WORDEN ALS FUNCTIE
function todoApp() {
    this.tasks = []
}
todoApp.prototype.addTask = function (task) {
    this.tasks.push(task)
}
todoApp.prototype.showTask = function () {
    console.log(this.tasks)
}
todoApp.prototype.deleteTask = function (value) {
    let temp = [];
    this.tasks.forEach(task => {
        temp.push(task.toLowerCase())
    })
    let index = temp.indexOf(value.toLowerCase())
    temp.splice(index, 1);
    this.tasks = [...temp]
}
let todoTask = new todoApp()
todoTask.addTask("lopen")
todoTask.addTask("fietsen")
todoTask.showTask()