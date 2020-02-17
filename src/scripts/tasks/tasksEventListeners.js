//event listeners and click events - Cooper Nichols

import renderTasks from "./tasksRender.js"
import tasksAPI from "./tasksApi.js"

const taskEvents = {
    renderAllTasks() {
        tasksAPI.getTaskEntries()
        .then(parsedTasks => {
            renderTasks(parsedTasks)
        })
    }
}

export default taskEvents


