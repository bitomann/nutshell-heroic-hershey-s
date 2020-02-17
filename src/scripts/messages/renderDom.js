import { messageInputForm, printedMessageComponent } from './components'

const messageLog = document.querySelector("#messages");

const renderMessages = messages => {
    // vvv Clear current content vvv //
    const messageLog = document.querySelector('#journalList')
    entryList.innerHTML = ""

    // vvv Fill container with entry HTML representations vvv //
    for (const entry of entries) {
        const entryLog = entryComponentsToDom.journalEntryComponent(entry)
        entryList.innerHTML += entryLog
    }
}

export default renderEntries;