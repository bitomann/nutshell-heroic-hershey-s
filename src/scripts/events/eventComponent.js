// Matt Reeds - Creates DOM representation

const eventComponentObj = {
    eventCardComponent: (eventEntry) => {
        return `
        <section class="event-entry--${eventEntry.id}"></section>
            <h1>${eventEntry.eventName}</h1>
            <section>${eventEntry.date}</section>
            <section>${eventEntry.location}</section>
            <button id="editEvent--${eventEntry.id}">Edit Event</button>
            <button id="deleteEvent--${eventEntry.id}">Delete Event</button>
        `
    }
}

export default eventComponentObj