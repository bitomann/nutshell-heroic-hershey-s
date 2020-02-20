//database fetch calls for tasks - Cooper Nichols
const baseUrl = "http://localhost:8088/tasks";

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

const tasksAPI = {
    getTaskEntries () {
       return fetch(`${baseUrl}`)
            .then(entry => entry.json())
            
    },
    saveTaskEntry (entryObject) {
        return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObject)
   })
    },
    completeTaskEntry (id) {
       return fetch(`${baseUrl}/${id}`, {
          method: "PATCH",
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify({
             isComplete: true
          })
       })
    },
    deleteTask(id) {
      return fetch(`${baseUrl}/${id}`, {
          method: "DELETE"
      })
      .then(response => response.json())
  },
    editTaskEntry (id) {
         const updatedObject = {
            userId: currentUserId,
            name: document.querySelector("#task_description").value,
            completionDate: document.querySelector("#task_completion_date").value,
            isComplete: false
         }
        return fetch(`${baseUrl}/${id}`, {
         method: "PUT",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(updatedObject)
        })
        .then(res => res.json())
        .then(() => {
            document.querySelector("#tasks_hiddenInput").value = ""
        })
    

    },
    updateFormFields (id) {

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
}

export default tasksAPI