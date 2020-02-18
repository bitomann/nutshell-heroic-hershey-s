import data from './data.js'
import renderMessages from './renderMessages.js'
// import searchManager from './searchManager.js'


const messageList = document.querySelector("#messages")

const events = {

    clearForm: () => {
        const messageInput = document.querySelector("#messageInput");
    
        messageInput.value = "";
    },

    messageEventListener: () => {

        const submitButton = document.querySelector("#submitBtn");

        submitButton.addEventListener("click", (event) => {
            event.preventDefault()
            const messageInput = document.querySelector("#messageInput");

            const message = {
                message: messageInput.value
            };

            if (messageId.value !== "") {
                message.id = parseInt(messageId.value);
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

    editEventListener: () => {

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
                // entryList.innerHtml = ""
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