//roles: user, visitor, admin

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
let users = []

class Guest extends User {
    constructor(username, password, permission) {
        super(username, password);
        this.permission = permission;

    }
    register() {
        users.push({
            username: this.username,
            password: this.password,
            permission: this.permission
        })
    }
}

class Admin extends User {
    constructor(username, password, permission) {
        super(username, password);
        this.permission = permission;

    }
    register() {
        users.push({
            username: this.username,
            password: this.password,
            permission: this.permission
        })
    }
}

let app = new Admin("admin", 12345, "administrator")
//push into array users
app.register();
let app2 = new Guest("John", "piep123", "Guest")
app2.register();
let app3 = new Guest("Pol", "popo321", "Guest")
app3.register();
//console.log(app, app2, app3)
let app4 = new Guest('Jacques', 'polle56', 'Guest')
app4.register()
console.log(users)
console.log(users[2])
users.forEach(user => {
    console.log(user.username)
})

//studentlist
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let students = [];
class Student extends Person {
    constructor(role, name, age) {
        super(name, age);
        this.role = role;
    }
    addStudent() {
        return students.push({
            name: this.name,
            age: this.age
        })
    }
}

let teachers = []
class Teacher extends Person {
    constructor(role, name, age) {
        super(name, age);
        this.role = role;
    }
    addTeachers() {
        return teachers.push({
            name: this.name,
            age: this.age
        })
    }
}
let stud1 = new Student('student', 'Jef', '25')
console.log(stud1.name)
stud1.addStudent()
let stud2 = new Student('student', 'Louis', '22')
stud2.addStudent()
console.log(students)

//andere oplossing
class Client {
    constructor(role = 'user') {
        this.role = role;
    }
}

class Controller extends Client {
    constructor(role) {
        super(role);
        this.users = [];
    }

    getUsers() {
        return this.users;
    }

    register(username, password) {
        this.users.push({
            username,
            password,
            role: this.role
        })
    }
}


let admin = new Controller();
admin.register('mehmet', 'mehmet12345');
admin.register('ali', 'ali12345');
let admin1 = new Controller('administrator')
admin1.register('An', 'BigMama1')
console.log(admin1.getUsers())
console.log(admin.getUsers())
admin.getUsers().forEach(user => {
    console.log(user.username)
})
