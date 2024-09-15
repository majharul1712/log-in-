const submit = document.getElementById("submit");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

let loginInfo = JSON.parse(localStorage.getItem("loginInfo")) || [];


const matchingUser = userInfo.find(
    (user) => user.username.toLowerCase() === user.username.toLowerCase() && user.password === user.password

);
let isLoggedIn = matchingUser && matchingUser.isLoggedIn;

const username = document.getElementById("username").value.toLowerCase(); // Access the input field values
const password = document.getElementById("password").value

function LogginData(event) {
    // event.preventDefault();


    // Find a matching user in the userInfo array
    const user = userInfo.find(
        (user) => user.username.toLowerCase() === username && user.password === user.password)


    if (user) {
        user.isLoggedIn = true;  // Set the logged-in flag to true
        localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Update localStorage
        window.location.replace("./home.html");  // Redirect to home page

    }

    else {
        alert("Invalid username or password");  // Show an error message
    }
    submit.addEventListener("click", LogginData);
}

