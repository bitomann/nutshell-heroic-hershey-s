// Matt Reeds - Creates DOM representation

const eventComponentObj = {
    eventCardComponent: (eventEntry) => {
        return `
        <div class="eventEntry">
        <section class="event-entry--${eventEntry.id}"></section>
            <section>${eventEntry.eventName}</section>
            <section class="dateOfEvent">${eventEntry.date}</section>
            <section>${eventEntry.location}</section>
            <button class="editBtn" id="editEvent--${eventEntry.id}">Edit Event</button>
            <button id="deleteEvent--${eventEntry.id}">Delete Event</button>
            </div>
        `
    }
}

export default eventComponentObj