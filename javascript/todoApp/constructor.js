//prototype is a property of the Object Constructor. 
//It allows you to add new properties to object constructor

function TwitterApp(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.timeline = []
}
TwitterApp.prototype.showInfo = function () {
    console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`)
}
TwitterApp.prototype.updatePassword = function(newPassword){
    return this.password = newPassword;
}
TwitterApp.prototype.sendTweet = function(tweet){
    this.timeline.push(tweet)
}
TwitterApp.prototype.deleteTweet = function(){
    this.timeline.pop()
}
//add new property to object constructor
TwitterApp.prototype.avatar = "poes-roos.jpg"

// let output = document.querySelector(".tweet")
// output.innerHTML = "poes-roos.jpg"

let user1 = new TwitterApp('Jack', 'JAJA@gmail.com', 'JK2564')
user1.updatePassword('hello654');
user1.sendTweet("Hello World")
user1.sendTweet('What a beautiful weather for a swim')
user1.showInfo()
console.log(user1.timeline)

let user2 = new TwitterApp("Jean", "Jojo@yahoo.com", "Je1258")
user2.sendTweet('What the fuck is JoeMama?')
user2.showInfo()
console.log(user2.timeline)

