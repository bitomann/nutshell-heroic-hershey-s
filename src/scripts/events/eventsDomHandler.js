// Matt Reeds - Creates the structure for the data
import eventComponentObj from "./eventComponent.js"
import apiActions from "./eventsDataHandler.js"

const entryContainer = document.querySelector("#events-container");
const newDate = document.querySelector("#eventDate");

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const dateString = year + "-" + (month + 1) + "-" + date;
console.log(Date.parse(dateString))
console.log(Date.parse("2020-1-20"))
console.log(Date.parse("2020-3-20"))

/* Sort entries by date value and render to dom in that new order. 
Loop through new array and use query selector on their class which
grabs the first entry automatically and apply style to that. 
get value of date input, parse date, sort entries, create new object to include date, 
conditional to check if this object equals the other, display only if*/

const domOperations = {
    eventEntryFactory: (eventName, date, location) => {
        let newEventObject = {
            eventName: eventName,
            date: date,
            location: location
        }
        const userDate = Date.parse(date);



        return newEventObject;
    },

    renderEventEntries: (entries) => {
        const newArray = entries.reverse();
        const sortedArray = newArray.sort((dateString, date) => dateString - date)
        entryContainer.innerHTML = "";
        sortedArray.forEach(entry => {
            entryContainer.innerHTML +=
                eventComponentObj.eventCardComponent(entry);
            // add a conditional statement that applies the required styling to upcoming event
        })
    },
    comparingDates: (dates) => {
        dates.forEach(date => {
            Date.parse(date)
        })
    }
}

export default domOperations