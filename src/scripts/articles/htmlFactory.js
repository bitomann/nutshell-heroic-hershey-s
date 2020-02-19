//html structure for news article - Katie Wohl

const makeNewsComponent = (newsArticle) => {
    return `
    <div class="article">
    <p><a href="${newsArticle.url}">${newsArticle.title}</a></p>
    <p>${newsArticle.synopsis}</p>
    <button id="articleDelBtn--${newsArticle.id}">Delete</button>
    <button id="articleEditBtn--${newsArticle.id}">Edit</button>
    </div>
    `
}

export default makeNewsComponent