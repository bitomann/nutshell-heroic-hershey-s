/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

//in your main.js (until you reach the log in ticket)
sessionStorage.setItem("activeUser", 1)
//wherever you need to use the id of the user that is logged in, you will reference the variable currentUserId
const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

const message = "Time to build an application that gives you all the information you need in a Nutshell"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

console.log(message)
