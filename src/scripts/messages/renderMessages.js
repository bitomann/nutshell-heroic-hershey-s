import messageComponentsToDom from './messageComponents.js'

// const entryList = document.querySelector("#entryLog");

const renderMessages = messages => {
    // vvv Clear current content vvv //
    const messageList = document.querySelector('#messages')
    messageList.innerHTML = ""

    // vvv Fill container with entry HTML representations vvv //
    for (const message of messages) {
        const messageLog = messageComponentsToDom.messageComponent(message)
        messageList.innerHTML += messageLog
    }
}

export default renderMessages;