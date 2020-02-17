import Api  from './Api'

// vvv Targets 'messages' container on DOM vvv //
const messages = document.querySelector("#messages")
// vvv targets 'submitButton' vvv //
newMessageEntryEvent: () => {
    const submitButton = document.querySelector("#submitButton");
// vvv adds an event listener to the 'submitButton'
    submitButton.addEventListener("click", (event) => {
        // vvv prevents auto-refresh vvv //
        event.preventDefault()
       // vvv targets 'messageInput' textArea vvv //
        const messageInput = document.querySelector("#messageInput");
        
        const message = {
            // date: dateInput.value,
            message: messageInput.value
        };

        if (messageId.value !== "") {
            message.id = parseInt(messageId.value);
            Api.editMessage(message)
                .then(Api.getAllMessages)
                .then(renderMessages)
        } else {
            Api.addJournalEntry(entry)
                .then(data.getAllJournalEntries)
                .then(renderEntries)
        }
        // vvv outside of scope this won't work; have to use "events".
        events.clearForm();
    });
}