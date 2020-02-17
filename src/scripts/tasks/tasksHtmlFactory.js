const createTaskEntry = (entries) => {
return `
    <div class="entry entry--${entries.id}">
    <section>${entries.name}</section>
    <section>${entries.completionDate}</section>
 </div>
`
}

export default createTaskEntry