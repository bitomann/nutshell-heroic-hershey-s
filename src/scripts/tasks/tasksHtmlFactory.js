// HTML component for task section -- Cooper Nichols

const createTaskEntry = (entry) => {
    return `
    <div class="entry entry--${entry.id}">
    <hr>
    <p>${entry.name}</p>
    <br>
    <p>Complete By:</p>
    <p>${entry.completionDate}</p>
    <input type="checkbox" id="completeTask--${entry.id}" name="completeTask">
    <label for="completeTask">Done</label>
    <button id="editTask--${entry.id}">Edit</button>
    </div>
`
}

export default createTaskEntry