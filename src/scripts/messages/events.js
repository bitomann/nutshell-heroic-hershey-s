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
        // const hiddenInput = document.querySelector("#messageId")
        submitButton.addEventListener("click", (event) => {
            const messageInput = document.querySelector("#messageInput");

            const message = {
                userId: userId,
                message: messageInput.value,
                timestamp: timestamp
            };
            // vvv needs hidden Id ('messageId') to be cleared in order to add new message vvv //
            if (messageId.value !== "") {
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