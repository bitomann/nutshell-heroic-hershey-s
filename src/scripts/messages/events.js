import data from './data.js'
import renderMessages from './renderMessages.js'


const messageList = document.querySelector("#messages")

const events = {

    clearForm: () => {
        const messageInput = document.querySelector("#messageInput");
    
        messageInput.value = "";
    },

    messageEventListener: () => {

        const submitButton = document.querySelector("#submitBtn");
        submitButton.addEventListener("click", (event) => {
            const messageInput = document.querySelector("#messageInput");

            const message = {
                // vvv grabs user id from sessionStorage. Needed to have parseInt
                // vvv so userId will come up as integer //
                userId: parseInt(sessionStorage.getItem("activeUser")),
                message: messageInput.value,
                // vvv creates timestamp of now vvv //
                timestamp: new Date()
            };
            if (messageInput.value === "") {
                window.alert("You didn't type a message silly🤪")
            }
            // vvv needs hidden Id ('messageId') to be cleared in order to add new message vvv //
            else if (messageId.value !== "") {
                message.id = parseInt(messageId.value);
                messageId.value = ""
                data.editMessage(message)
                    .then(data.getAllMessages)
                    .then(renderMessages)
            } else {
                data.addNewMessage(message)
                    .then(data.getAllMessages)
                    .then(renderMessages)
            }
            events.clearForm();
        });
    },

    editDeleteEventListener: () => {

        messageList.addEventListener("click", (event) => {
            // vvv DELETE vvv //
            if (event.target.id.startsWith("deleteMessage--")) {
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const messageIdToDelete = deleteBtnArray[1];

                data.deleteMessage(messageIdToDelete)
                    .then(data.getAllMessages)
                    .then(renderMessages);
            }
            // vvv EDIT vvv //
            if (event.target.id.startsWith("editMessage--")) {
                const messageToEdit = event.target.id.split("--")[1]
                messageList.innerHtml = ""
                data.getSingleMessage(messageToEdit)
                    .then(message => {
                        document.querySelector("#messageId").value = message.id
                        document.querySelector("#messageInput").value = message.message
                    })
            }
        })
    }
}


export default events