import { messageInputForm, printedMessageComponent } from './components.js'

// const messageLog = document.querySelector("#messages");

const renderMessages = messages => {
    // vvv Clear current content vvv //
    const clearMessageLog = document.querySelector("#messages")
    clearMessageLog.innerHTML = ""

    // vvv Fill container with entry HTML representations vvv //
    for (const message of messages) {
        const messageLog = printedMessageComponent(message)
        clearMessageLog.innerHTML += messageLog
    }
}

export default renderMessages;