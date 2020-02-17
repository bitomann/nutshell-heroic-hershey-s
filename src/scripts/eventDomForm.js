// Matt Reeds - This is the dom rep of the form that appears when you click to enter a new event


const newEventButton = {
    
    eventButtonFunction: () => {
        
        const button = document.getElementById("new-event");
        
        button.addEventListener("click", () => {
            console.log("been clicked")
        })
    }
}

export default newEventButton