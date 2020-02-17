// Matt Reeds - This is the function that shows and hides a form when you click to enter a new event
const newEventButton = {
    eventButtonFunction: () => {

const button = document.getElementById("new-event");
const eventsDiv = document.getElementById("eventsDiv");

function show() {
    eventsDiv.style.visibility = "visible";
}

function hide() {
    eventsDiv.style.visibility = "hidden";
}

function toggle() {
    if (eventsDiv.style.visibility === "hidden") {
        show();
    } else {
        hide();
    }
}
hide();

button.addEventListener("click", toggle, false);

    }
}

export default newEventButton