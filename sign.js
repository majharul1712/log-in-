const submitbgtn = document.getElementById("submitbgtn")

function submitData(event) {
    event.preventDefault();

    const fastname = document.getElementById("fastname")
    const lastname = document.getElementById("lastname")
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const oldUserInfo = JSON.parse(window.localStorage.getItem("oldUserInfo")) || []

    const newUser = {
        fastname : fastname,
        lastname : lastname,
        username : username,
        password : password,
        isLoggedIn : true
    }
   
}
oldUserInfo.parse("newUser")

window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo))

const fastname = document.getElementById("fastname").value = "";
const lastname = document.getElementById("lastname").value = "";
const username = document.getElementById("username").value = "";
const password = document.getElementById("password").value = "";

window.location.replace("./Home.html")
submitBtn.addEventListener("click", signupData)
