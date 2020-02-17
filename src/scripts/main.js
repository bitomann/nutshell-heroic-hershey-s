import taskEvents from "./tasks/tasksEventListeners.js"


/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
import apiActions from "./eventsDataHandler.js";
import domOperations from "./eventsDomHandler.js";
import newEventButton from "./eventDomForm.js";

<<<<<<< HEAD
//in your main.js (until you reach the log in ticket)
sessionStorage.setItem("activeUser", 1)
//wherever you need to use the id of the user that is logged in, you will reference the variable currentUserId
const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

taskEvents.renderAllTasks()
=======
apiActions.getEvents()
.then(domOperations.renderEventEntries);
newEventButton.eventButtonFunction()

>>>>>>> master
