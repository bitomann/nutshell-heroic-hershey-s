const baseUrl = "http://localhost:8088"

export default {
    // vvv promises promises vvv //
    getAllMessages() {
        return fetch(`${baseUrl}/messages`)
            .then(allMessages => allMessages.json());
    },

    getSingleMessage(id) {
        return fetch(`${baseUrl}/messages/${id}`)
            .then(singleMessage => singleMessage.json());
    },

    addNewMessage(newMessage) {
        return fetch(`${baseUrl}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            })
            .then(newMessage => newMessage.json())
    }
    // ,

    // moodFilter: (filterByMood) => {
    //     return fetch(`${baseUrl}/journalEntries?mood=${filterByMood}`)
    //         .then(response => response.json())
    // },

    // editJournalEntry: (editedEntry) => {
    //     return fetch(`${baseUrl}/journalEntries/${editedEntry.id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(editedEntry)
    //         })
    //         .then(response => response.json())
    // },

    // deleteJournalEntry(entryId) {
    //     return fetch(`${baseUrl}/journalEntries/${entryId}`, {
    //         method: "DELETE"
    //     });
    // }
}