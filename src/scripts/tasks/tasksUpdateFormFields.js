const updateFormFields = id => {

const hiddenId = document.querySelector("#tasks_hiddenInput")
const taskDescriptionInput = document.querySelector("#task_description")
const taskDateInput = document.querySelector("#task_completion_date")

fetch (`http://localhost:8088/tasks/${id}`)
.then(response => response.json())
.then(task => {
hiddenId.value = task.id
taskDescriptionInput.value = task.name
taskDateInput.value = task.completionDate

})

}

export default updateFormFields