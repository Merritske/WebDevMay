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
console.log(users)