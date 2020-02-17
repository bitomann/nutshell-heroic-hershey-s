import API from "./articles/apiManager.js"
import renderNewsArticles from "./articles/domManager.js"
import newsEvents from "./articles/eventListeners.js"
import apiActions from "./events/eventsDataHandler.js";
import domOperations from "./events/eventsDomHandler.js";
import newEventButton from "./events/eventFormListener.js";
import saveEventButton from "./events/saveEventListener.js"

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/
sessionStorage.setItem("activeUser", 1)

//news section tools - Katie Wohl
API.getNewsArticles().then(renderNewsArticles)

newsEvents.addSaveEventListener()


//Matt Reeds - getting the events data, rendering to dom, and calling the event listeners on the events buttons
apiActions.getEvents()
.then(domOperations.renderEventEntries);
newEventButton.eventButtonFunction()
saveEventButton.saveEventFunction()

