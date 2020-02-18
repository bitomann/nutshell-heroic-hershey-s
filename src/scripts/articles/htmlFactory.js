//html structure for news article - Katie Wohl

const makeNewsComponent = (newsArticle) => {
    return `
    <div class="article">
    <p>${newsArticle.title}</p>
    <p>${newsArticle.synopsis}</p>
    <p>${newsArticle.url}</p>
    <button id="articleDelBtn--${newsArticle.id}">Delete</button>
    <button id="articleEditBtn--${newsArticle.id}">Edit</button>
    <hr>
    </div>
    `
}

export default makeNewsComponent