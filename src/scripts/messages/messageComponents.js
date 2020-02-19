const messageComponentsToDom = {
    // vvv this takes in stuff to build and populate the list of messages to the DOM vvv //
    messageComponent(messageEntry) {
       
        return `
    <section class="message--${messageEntry.id}">
        <p>User: ${messageEntry.user.username}</p>
        <p>${messageEntry.timestamp}
        <aside class="message-entry">
        ${messageEntry.message}</aside>

    </section>
        <button id="deleteMessage--${messageEntry.id}">Delete</button>
        <button id="editMessage--${messageEntry.id}">Edit</button>
        <br>
        <br>
    `
    },

    // vvv this builds the form that takes in user input that goes into the list of entries vvv //
    messageFormComponent() {
        const entryLog = document.querySelector("#messageForm");
        entryLog.innerHTML = `
    <input type="hidden" id="messageId"/>
            <h1>Messages:</h1>
                <label for="message">
                <textarea name="message" id="messageInput" placeHolder="Type your message here.." 
                id="message" cols="30" rows="1"></textarea>
            <section>  
                <button id="submitBtn" value="submitMessage">
                Submit
                </button>
            </section>
    <br>
    <br>
    `;
    }
}

export default messageComponentsToDom