//articles section - Katie Wohl
const baseURL = "http://localhost:8088"

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

const API = {
    getNewsArticles() {
        return fetch(`${baseURL}/articles`)
            .then(response => response.json())
    },
    saveNewsArticle(newArticle) {
        return fetch(`${baseURL}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        })
    },
    deleteNewsArticle(articleId) {
        return fetch(`${baseURL}/articles/${articleId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    editNewsArticle(articleId) {
        const urlInput = document.querySelector("#articleUrl")
        const titleInput = document.querySelector("#articleTitle")
        const synopsisInput = document.querySelector("#articleSynopsis")

        fetch(`${baseURL}/articles/${articleId}`)
            .then(response => response.json())
            .then(article => {
                urlInput.value = article.url
                titleInput.value = article.title
                synopsisInput.value = article.synopsis
            })
    },
    updateNewsArticle(articleId) {
        const urlInput = document.querySelector("#articleUrl")
        const titleInput = document.querySelector("#articleTitle")
        const synopsisInput = document.querySelector("#articleSynopsis")

        const updatedNewsObject = {
            'userId': currentUserId,
            'url': urlInput.value,
            'title': titleInput.value,
            'synopsis': synopsisInput.value,
            'timestamp': ""
            }
        return fetch(`${baseURL}/articles/${articleId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedNewsObject)
        })
    }
}

export default API