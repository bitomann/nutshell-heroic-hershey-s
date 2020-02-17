//event listeners and click events - Cooper Nichols

import renderTasks from "./tasksRender.js"
import tasksAPI from "./tasksApi.js"

const taskSave = document.getElementById("tasks_save_button")
const taskDescription = document.getElementById("task_description")
const taskDate = document.getElementById("task_completion_date")

const createNewTaskFactory = (name, date) => {
  return {  
    "userId": 1,
    "name": name,
    "completionDate": date,
    "isComplete": false
}
}

const taskEvents = {
    renderAllTasks() {
        tasksAPI.getTaskEntries()
        .then(parsedTasks => {
            renderTasks(parsedTasks)
        })
    },
    createTask() {
        taskSave.addEventListener("click", event => {
            const createNewTask = createNewTaskFactory(taskDescription.value, taskDate.value)
            tasksAPI.saveTaskEntry(createNewTask)
            .then(() => {
                tasksAPI.getTaskEntries()
                .then(renderTasks)
            })
        })
    }

}

export default taskEvents


