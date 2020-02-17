export default {
    messageInputForm() {
        `
    <form action="">
        <fieldset>
                <textarea name="messageInput" id="messageInput"></textarea>
        </fieldset>
        <fieldset>
            <button id="submitButton" value="submitMessage">
            Submit
            </button>
        </fieldset>
    </form>
    `
    },

    printedMessageComponent() {
        `
        <section>
                <article id="printedMessage">
                ${messages.message}
                </article>
        </section>
        `
    }
}