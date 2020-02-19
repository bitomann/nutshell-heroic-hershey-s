//database fetch calls for tasks - Cooper Nichols
const baseUrl = "http://localhost:8088/tasks";

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
    }
}

export default tasksAPI