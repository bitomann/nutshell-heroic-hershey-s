const messageComponentsToDom = {
    // vvv this takes in stuff to build and populate the list of messages to the DOM vvv //
    messageComponent(messageEntry) {
       
        return `
    <section class="message--${messageEntry.id}>
        <h4>
        DATE: ${messageEntry.date}
        </h4>
        <aside class="message-entry">
         MESSAGE: ${messageEntry.message}</aside>
    </section>
        <button id="deleteMessage--${messageEntry.id}">Delete</button>
        <button id="editMessage--${messageEntry.id}">Edit</button>
        <br>
        <br>
        <br>
        <br>
    `
    },

    // vvv this builds the form that takes in user input that goes into the list of entries vvv //
    messageFormComponent() {
        const entryLog = document.querySelector("#messageForm");
        entryLog.innerHTML = `
    <form action="">
    <input type="hidden" id="messageId" value="" />
            <h1>Messages:</h1>
                <label for="message">
                <textarea name="message" id="messageInput" placeHolder="Type you message here.." 
                id="message" cols="30" rows="1"></textarea>
                
                <button id="submitBtn" value="submitMessage">
                Submit
                </button>
    </form>
                  `;
    }
}

export default messageComponentsToDom