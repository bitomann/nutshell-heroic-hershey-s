// HTML component for task section -- Cooper Nichols

const createTaskEntry = (entry) => {
    return `
    <div class="entry entry--${entry.id}">
    <p>${entry.name}</p>
    <br>
    <p>Complete By:</p>
    <p>${entry.completionDate}</p>
    <input type="checkbox" id="completeTask--${entry.id}" name="completeTask">
    <label for="completeTask">Done</label>
    <hr>
    </div>
`
}

export default createTaskEntry