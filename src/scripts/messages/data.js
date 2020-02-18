const baseUrl = "http://localhost:8088"

export default {
    // vvv promises promises vvv //
    getAllMessages() {
        return fetch(`${baseUrl}/messages`)
            .then(response => response.json());
    },

    getSingleMessage(id) {
        return fetch(`${baseUrl}/messages/${id}`)
            .then(response => response.json());
    },

    addNewMessage(newMessage) {
        return fetch(`${baseUrl}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            })
            .then(response => response.json())
    },

    editMessage: (edit) => {
        return fetch(`${baseUrl}/messages/${edit.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(edit)
            })
            .then(response => response.json())
    },

    deleteMessage(messageId) {
        return fetch(`${baseUrl}/messages/${messageId}`, {
            method: "DELETE"
        });
    }
}