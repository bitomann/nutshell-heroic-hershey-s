// Matt Reeds - Creates the structure for the data
import eventComponentObj from "./eventComponent.js"

const entryContainer = document.querySelector("#events-container");

const domOperations = {
    eventEntryFactory: (eventName, date, location) => {
        let newEventObject = {
            eventName: eventName,
            date: date,
            location: location
        }
        return newEventObject;
    },

    renderEventEntries: (entries) => {
        entryContainer.innerHTML += "";
        entries.forEach(entry => {
            entryContainer.innerHTML +=
                eventComponentObj.eventCardComponent(entry);
        })
    }
}

export default domOperations