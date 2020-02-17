// render functionality for DOM -- Cooper Nichols

import createTaskEntry from "./tasksHtmlFactory.js"

const tasksContainer = document.getElementById("tasks_container")

const addToDom = (html) => {
    tasksContainer.innerHTML += html 
}

const renderTasks = (tasksArray) => {
tasksContainer.innerHTML = ""
tasksArray.forEach(task => {
    const renderedTask = createTaskEntry(task)
    addToDom(renderedTask)
})
}

export default renderTasks