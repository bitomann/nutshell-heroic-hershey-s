//database fetch calls for tasks - Cooper Nichols

const tasksAPI = {
    getTaskEntries () {
       return fetch("http://localhost:8088/tasks")
            .then(entry => entry.json())
            
    }
}

export default tasksAPI