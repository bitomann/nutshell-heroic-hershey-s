// Matt Reeds - This is the event listener that gets the values of the added event and renders to dom
import domOperations from "./eventsDomHandler.js"
import apiActions from "./eventsDataHandler.js"

const entryContainer = document.querySelector("#events-container");

const clearForm = () => {
    const entryId = document.getElementById("entryId")
    const eventName = document.getElementById("eventName");
    const eventDate = document.getElementById("eventDate");
    const eventLocation = document.getElementById("eventLocation");

    entryId.value = "";
    eventName.value = "";
    eventDate.value = "";
    eventLocation.value = "";
}

const saveEventButton = {
    saveEventFunction: () => {
        const saveButton = document.getElementById("save-event");

        saveButton.addEventListener("click", () => {
            entryContainer.innerHTML = "";
            const entryId = document.getElementById("entryId");
            const eventName = document.getElementById("eventName").value;
            const eventDate = document.getElementById("eventDate").value;
            const eventLocation = document.getElementById("eventLocation").value;

            const eventEntryObject = domOperations.eventEntryFactory(eventName, eventDate, eventLocation);

            if (entryId.value !== "") {
                eventEntryObject.id = parseInt(entryId.value);
                apiActions.updateEventEntry(eventEntryObject)
                    .then(apiActions.getEvents)
                    .then(domOperations.renderEventEntries)
                    .then(clearForm)
            } else if (eventName === "" || eventDate === "" || eventLocation === "") {
                apiActions.getEvents()
                    .then(domOperations.renderEventEntries)
                    .then(clearForm)
                alert("Please fill out the form.")
            } else {
                apiActions.saveEventEntry(eventEntryObject)
                    .then(() => {
                        apiActions.getEvents()
                            .then(domOperations.renderEventEntries)
                            .then(clearForm)
                    })
            }
        })
    }
}
export default saveEventButton