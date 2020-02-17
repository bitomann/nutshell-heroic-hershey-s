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
API.getNewsArticles().then(renderNewsArticles)

newsEvents.addSaveEventListener()
import apiActions from "./eventsDataHandler.js";
import domOperations from "./eventsDomHandler.js";
import newEventButton from "./eventFormListener.js";
import saveEventButton from "./saveEventListener.js"

apiActions.getEvents()
.then(domOperations.renderEventEntries);
newEventButton.eventButtonFunction()
saveEventButton.saveEventFunction()

