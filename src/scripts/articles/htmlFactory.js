//html structure for news article - Katie Wohl

const makeNewsComponent = (newsArticle) => {
    return `
    <div class="article">
    <p>${newsArticle.title}</p>
    <p>${newsArticle.synopsis}</p>
    <p>${newsArticle.url}</p>
    <hr>
    </div>
    `
}

export default makeNewsComponent