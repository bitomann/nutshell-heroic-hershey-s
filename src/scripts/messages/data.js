const baseUrl = "http://localhost:8088"

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

export default {
    // vvv promises promises vvv //
    getAllMessages() {
        return fetch(`${baseUrl}/messages?_sort=timestamp&_expand=user`)
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

    editMessage: (editedMessage) => {
        return fetch(`${baseUrl}/messages/${editedMessage.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editedMessage)
            })
            .then(response => response.json())
    },

    deleteMessage(messageId) {
        return fetch(`${baseUrl}/messages/${messageId}`, {
            method: "DELETE"
        });
    }
}