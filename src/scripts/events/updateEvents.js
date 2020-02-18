import apiActions from "./eventsDataHandler.js"
import domOperations from "./eventsDomHandler.js"

const baseUrl = "http://localhost:8088/events";

const editEventFields = eventId => {
    const hiddenEventId = document.querySelector("#entryId");
    const eventName = document.querySelector("#eventName");
    const eventDate = document.querySelector("#eventDate");
    const eventLocation = document.querySelector("#eventLocation");

    return fetch(`${baseUrl}/${eventId}`)
        .then(resp => resp.json())
        .then(event => {
            hiddenEventId.value = event.id
            eventName.value = event.eventName
            eventDate.value = event.date
            eventLocation.value = event.location
        })
}

export default {
    eventDeleteListener: () => {
        const eventContainer = document.querySelector("#events-container");

        eventContainer.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteEvent--")) {
                const deleteBtnId = event.target.id.split("--")[1]

                apiActions.deleteEventEntry(deleteBtnId)
                    .then(apiActions.getEvents)
                    .then(domOperations.renderEventEntries)
            } else if (event.target.id.startsWith("editEvent--")) {
                const entryToEdit = event.target.id.split("--")[1]
                editEventFields(entryToEdit)
            }
        })
    }
}