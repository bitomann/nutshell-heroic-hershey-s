// Matt Reeds - Gets data from api

const baseUrl = "http://localhost:8088/events";

const apiActions = {
    getEvents: () => {
        return fetch(`${baseUrl}`)
        .then(resp => resp.json())
    },
    saveEventEntry: eventEntryObj => {
        return fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventEntryObj)
        }).then(resp => resp.json());
    },
    updateEventEntry(event) {
        return fetch (`${baseUrl}/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
    },
    deleteEventEntry(eventEntryId) {
        return fetch(`${baseUrl}/${eventEntryId}`, {
            method: "DELETE"
        });
    }
}

export default apiActions