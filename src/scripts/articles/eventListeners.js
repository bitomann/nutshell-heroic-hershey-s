import API from "./apiManager.js"
import renderNewsArticles from "./domManager.js"

//event listeners for news section - Katie Wohl
const newsSaveButton = document.querySelector("#newsSave")
const newArticleButton = document.querySelector("#openNewsForm")
const newsCancelButton = document.querySelector("#closeNewsForm")
const newsLegend = document.querySelector("#newsLegend")

const hiddenInput = document.querySelector("#newsHiddenInput")
const newsTitleInput = document.querySelector("#articleTitle")
const newsUrlInput = document.querySelector("#articleUrl")
const newsSynopsisInput = document.querySelector("#articleSynopsis")

const newsOutputSection = document.querySelector("#newsOutputContainer")
let newsDate = new Date()
const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

const visToggleFunction = () => {
    const visToggle = document.querySelectorAll(".visToggle")
    const toggleArray = Array.from(visToggle)

    toggleArray.forEach(item => item.classList.toggle("hidden"))
}

const editToggleFunction = () => {
    const newsEditToggle = document.querySelectorAll(".newsEditToggle")
    const newsEditToggleArray = Array.from(newsEditToggle)

    newsEditToggleArray.forEach(item => item.classList.toggle("hidden"))
}
const clearInputFields = () => {
    newsUrlInput.value = ""
    newsTitleInput.value = ""
    newsSynopsisInput.value = ""
}

const editSaveFunction = (editId) => {
    API.updateNewsArticle(editId)
        .then(API.getNewsArticles)
        .then(renderNewsArticles)
        .then(clearInputFields)
        .then(editToggleFunction)
    newsLegend.textContent = "Save a News Article"
    newsSaveButton.textContent = "Save"
    hiddenInput.value = ""
}

const newsEvents = {
    addNewArticleEventListener() {
        newArticleButton.addEventListener("click", () => {
            visToggleFunction()
        })
    },
    addSaveEventListener() {
        newsSaveButton.addEventListener("click", () => {
            if (hiddenInput.value === "") {
                
            newsOutputSection.innerHTML = ""
            const newArticle = {
                "userId": currentUserId,
                "url": newsUrlInput.value,
                "title": newsTitleInput.value,
                "synopsis": newsSynopsisInput.value,
                "timestamp": newsDate.getTime()
            }
            API.saveNewsArticle(newArticle)
                .then(API.getNewsArticles).then(renderNewsArticles)

            clearInputFields()

            visToggleFunction()
        } else {
            editSaveFunction(hiddenInput.value)
        }
            
        })
    },
    addCancelEventListener() {
        newsCancelButton.addEventListener("click", () => {
            clearInputFields()
            visToggleFunction()
            newsLegend.textContent = "Save a News Article"
            newsSaveButton.textContent = "Save"
        })
    },
    addOutputButtonListeners() {
        newsOutputSection.addEventListener("click", event => {
            if (event.target.id.startsWith("articleDelBtn--")) {
                const articleToDelete = event.target.id.split("--")[1]
                API.deleteNewsArticle(articleToDelete)
                .then(API.getNewsArticles)
                .then(renderNewsArticles)
            }
            if (event.target.id.startsWith("articleEditBtn--")) {
                const articleToEdit = event.target.id.split("--")[1]
                editToggleFunction()
                newsLegend.textContent = "Edit a News Article"
                newsSaveButton.textContent = "Update"

                API.editNewsArticle(articleToEdit)
            }
        })
    }
}

export default newsEvents