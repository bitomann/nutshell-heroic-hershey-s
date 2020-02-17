import API from "./articles/apiManager.js"
import renderNewsArticles from "./articles/domManager.js"
import newsEvents from "./articles/eventListeners.js"
/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
sessionStorage.setItem("activeUser", 1)

//news section tools - Katie Wohl
import API from "./articles/apiManager.js"
import renderNewsArticles from "./articles/domManager.js"
import newsEvents from "./articles/eventListeners.js"

API.getNewsArticles().then(renderNewsArticles)
newsEvents.addSaveEventListener()

<<<<<<< HEAD

//events section tools - Matt Reeds
=======
>>>>>>> 6491274a4dad0f02d8c2d493529e50b90391f1dd
import apiActions from "./eventsDataHandler.js";
import domOperations from "./eventsDomHandler.js";
import newEventButton from "./eventDomForm.js";

<<<<<<< HEAD

=======
//events section tools - Matt Reeds
>>>>>>> 6491274a4dad0f02d8c2d493529e50b90391f1dd
apiActions.getEvents()
.then(domOperations.renderEventEntries);
newEventButton.eventButtonFunction()

//tasks section tools - Cooper Nichols
import taskEvents from "./tasks/tasksEventListeners.js"
taskEvents.renderAllTasks()