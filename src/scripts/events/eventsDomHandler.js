// Matt Reeds - Creates the structure for the data
import eventComponentObj from "./eventComponent.js"
import formComponentObj from "./eventFormComponent.js"

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
        const newArray = entries.reverse();
        entryContainer.innerHTML += "";
        newArray.forEach(entry => {
            entryContainer.innerHTML +=
                eventComponentObj.eventCardComponent(entry);
            // add a conditional statement that applies the required styling to upcoming event
        })
    }
}

export default domOperations