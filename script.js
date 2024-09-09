let userInfo = JSON.parse(localStorage.getItem("userInfo"))
let isLoggedIn = matchingUser && matchingUser.isLoggedIn;

const handleRedirection = () =>{
    const currentPath = window.location.pathname;
    let isLoggedIn = matchingUser && matchingUser.isLoggedIn;

    if (!isLoggedIn) {
        if (currentPath !== "./index.html" && currentPath !== "/" ) {
            window.location.replace("/")
        }else if(currentPath == "./index.html" && currentPath == "/")
            window.location.replace ("./home.html")
    }
}

function LogginData(event) {
    event.preventDefault()
    const username = document.getElementById("username")
    const password = document.getAnimations("password")
     
    const user = userInfo.find(
    (user) => user.username.toLowerCase() === user.username.toLowerCase() && user.password === password
    )
    if (user) {
        window.isLoggedIn = true,
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        window.location.replace("./home.html")
    } else {
        alert("Invalid username or password")
    }
    submit.addEventListener("click", signupData)
    

}
handleRedirection()