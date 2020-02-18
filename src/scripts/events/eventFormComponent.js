// Matt Reeds - Skeleton for the form

const formComponentObj = {
    formCard: () => {
        return `
        <div id="eventsDiv">
            <label for="eventName">Event Name: </label>
            <input type="text" name="name" id="eventName">
            <label for="eventDate">Date: </label>
            <input type="date" name="date" id="eventDate">
            <label for="eventLocation">Location: </label>
            <input type="text" name="location" id="eventLocation">
        </div>`
    }
}

export default formComponentObj