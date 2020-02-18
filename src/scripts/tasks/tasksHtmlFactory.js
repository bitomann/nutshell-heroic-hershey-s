// HTML component for task section -- Cooper Nichols

const createTaskEntry = (entries) => {
return `
    <div class="entry entry--${entries.id}">
    <p>${entries.name}</p>
    <br>
    <p>Complete By:</p>
    <p>${entries.completionDate}</p>
    <hr>
 </div>
`
}

export default createTaskEntry