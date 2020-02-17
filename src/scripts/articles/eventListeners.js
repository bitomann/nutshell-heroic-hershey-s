import API from "./apiManager.js"
import renderNewsArticles from "./domManager.js"

//event listeners for news section - Katie Wohl
const saveButton = document.querySelector("#newsSave")
const newsTitleInput = document.querySelector("#articleTitle")
const newsUrlInput = document.querySelector("#articleUrl")
const newsSynopsisInput = document.querySelector("#articleSynopsis")
const newsOutputSection = document.querySelector("#newsOutputContainer")
const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

const newsEvents = {
    addSaveEventListener() {
        saveButton.addEventListener("click", () => {
            newsOutputSection.innerHTML = ""
            const newArticle = {
                "userId": currentUserId,
                "url": newsUrlInput.value,
                "title": newsTitleInput.value,
                "synopsis": newsSynopsisInput.value,
                "timestamp": ""
            }
            API.saveNewsArticle(newArticle)
                .then(API.getNewsArticles).then(renderNewsArticles)

            newsUrlInput.value = ""
            newsTitleInput.value = ""
            newsSynopsisInput.value = ""

        })
    }
}

export default newsEvents