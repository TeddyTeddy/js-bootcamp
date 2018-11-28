var User = {
    init: function(email, name) {
        this.email = email
        this.name = name
        this.online = false
    },
    login: function() {
        this.online = true;
        console.log(this.email, 'has logged in');        
    },
    logout: function() {
        this.online = false;
        console.log(this.email, 'has logged out');        
    }
}

var Admin = Object.create(User)
Admin.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

// userOne --> User --> Object.prototype
var userOne = Object.create(User) 
userOne.init('ryu@ninjas.com', 'Ryu');

// userTwo --> User --> Object.prototype
var userTwo = Object.create(User)
userTwo.init('yoshi@mariokorp.com', 'Yoshi')

// admin --> Admin --> User --> Object.prototype
var admin = Object.create(Admin)
admin.init('shaun@ninjas.com', 'Shaun')

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo)