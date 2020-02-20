// Matt Reeds - Creates the structure for the data
import eventComponentObj from "./eventComponent.js"
import apiActions from "./eventsDataHandler.js"

const entryContainer = document.querySelector("#events-container");
const newDate = document.querySelector("#eventDate");

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
let dateString = year + "-" + (month + 1) + "-" + date;

/* Sort entries by date value and render to dom in that new order. 
Loop through new array and use query selector on their class which
grabs the first entry automatically and apply style to that. 
get value of date input, parse date, sort entries, create new object to include date, 
conditional to check if this object equals the other, display only if*/

const domOperations = {
    eventEntryFactory: (eventName, date, location) => {
        let userDate = Date.parse(date);
        
        let newEventObject = {
            eventName: eventName,
            date: date,
            location: location,
            parsedDate: userDate
        }
        
        return newEventObject;
    },

    renderEventEntries: (entries) => {
        entryContainer.innerHTML = "";
        const sortedEntries = entries.sort(function(a, b) {
            return a.parsedDate - b.parsedDate
        })
        sortedEntries.forEach(entry => {
            entryContainer.innerHTML +=
            eventComponentObj.eventCardComponent(entry);
            document.querySelector(".eventEntry").style.fontWeight = "bold";
            document.querySelector(".eventEntry").style.fontSize = "20px";
            document.querySelector(".eventEntry").style.backgroundColor = "lightgrey";
            document.querySelector(".eventEntry").style.padding = "10px";
        })
    }
}

export default domOperations