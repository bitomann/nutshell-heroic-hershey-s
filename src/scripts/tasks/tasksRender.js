import createTaskEntry from "./tasksHtmlFactory.js"


const addToDom = (html) => {
    const tasksContainer = document.getElementById("tasks_container")
    tasksContainer.innerHTML += html 
}

const renderTasks = (tasksArray) => {
// tasksContainer.innerHTML = ""
tasksArray.forEach(task => {
    const renderedTask = createTaskEntry(task)
    addToDom(renderedTask)
})
}

export default renderTasks