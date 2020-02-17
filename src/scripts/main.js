/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
import apiActions from "./eventsDataHandler.js";
import domOperations from "./eventsDomHandler.js";
import newEventButton from "./eventFormListener.js";

apiActions.getEvents()
.then(domOperations.renderEventEntries);
newEventButton.eventButtonFunction()

