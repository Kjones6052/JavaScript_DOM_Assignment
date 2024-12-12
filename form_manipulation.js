// JavaScript file containing the code that completes all tasks under section 'Form Manipulation with JavaScript'.

// Task 2
function User(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

let users = []

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;
    let user = new User(userName, userEmail, userMessage);
    users.push(user);
    alert(`New User Added: ${userName}`);
    document.getElementById("userForm").reset();
});