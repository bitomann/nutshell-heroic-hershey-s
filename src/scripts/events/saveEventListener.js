// Matt Reeds - This is the event listener that gets the values of the added event and renders to dom
import domOperations from "./eventsDomHandler.js"
import apiActions from "./eventsDataHandler.js"

const entryContainer = document.querySelector("#events-container");

const clearForm = () => {
    const eventName = document.getElementById("eventName");
    const eventDate = document.getElementById("eventDate");
    const eventLocation = document.getElementById("eventLocation");

    eventName.value = "";
    eventDate.value = "";
    eventLocation.value = "";
}

const saveEventButton = {
    saveEventFunction: () => {
        const saveButton = document.getElementById("save-event");

        saveButton.addEventListener("click", () => {
            entryContainer.innerHTML = "";
            const eventName = document.getElementById("eventName").value;
            const eventDate = document.getElementById("eventDate").value;
            const eventLocation = document.getElementById("eventLocation").value;

            const eventEntryObject = domOperations.eventEntryFactory(eventName, eventDate, eventLocation);

            apiActions.saveEventEntry(eventEntryObject)
                .then(() => {
                    apiActions.getEvents()
                        .then(domOperations.renderEventEntries)
                        .then(clearForm)
                })
        })
    }
}

export default saveEventButton