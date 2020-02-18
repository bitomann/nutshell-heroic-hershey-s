//event listeners and click events - Cooper Nichols

import renderTasks from "./tasksRender.js"
import tasksAPI from "./tasksApi.js"

const taskSave = document.getElementById("tasks_save_button")
const taskCancel = document.getElementById("tasks_cancel_button")

const taskDescription = document.getElementById("task_description")
const taskDate = document.getElementById("task_completion_date")
const newTaskButton = document.getElementById("openTaskForm")

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
    addNewTask() {
        newTaskButton.addEventListener("click", () => {
            const formToggle = document.querySelectorAll(".tasks_visToggle")
            const formToggleArray = Array.from(formToggle)

            formToggleArray.forEach(item => item.classList.toggle("tasks_hidden"))
        })
    },
    cancelNewTask() {
        taskCancel.addEventListener("click", () => {
            const formToggle = document.querySelectorAll(".tasks_visToggle")
            const formToggleArray = Array.from(formToggle)
            taskDescription.value = ""
            taskDate.value = ""
            formToggleArray.forEach(item => item.classList.toggle("tasks_hidden"))
        })
    },
    createTask() {
        taskSave.addEventListener("click", event => {
            const createNewTask = createNewTaskFactory(taskDescription.value, taskDate.value)
            if (taskDescription.value !== "" && taskDate.value !== "") {
                tasksAPI.saveTaskEntry(createNewTask)
                    .then(() => {
                        tasksAPI.getTaskEntries()
                            .then(renderTasks)
                    })
                taskDate.value = ""
                taskDescription.value = ""

                const formToggle = document.querySelectorAll(".tasks_visToggle")
                const formToggleArray = Array.from(formToggle)

                formToggleArray.forEach(item => item.classList.toggle("tasks_hidden"))

            }
        })
    }
 
}

export default taskEvents


