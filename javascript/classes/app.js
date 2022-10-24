class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
}

class Teacher extends Person{
    constructor(name, age, role){
        super(name, age);
        this.role = role;
    }
}

let student1 = new Student("John", 20, "Student");
let teacher1 = new Teacher("Pol", 40, "Teacher");
console.log(student1.name)

class App{
    constructor(username){
        this.username = username;
        this.users = [];
    }
    getUsername(){
        return this.username
    }
    addUser(){
        this.users.push(this.username)
        return this.users
    }
    getUsers(){
        return this.users
    }
static 
}

let app = new App('An')
console.log(app)
app.addUser()
console.log(app.getUsername())

let app1 = new App('Louis')
console.log(app1.getUsername())
app1.addUser()
console.log(app1.getUsers())