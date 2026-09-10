const params =
    new URLSearchParams(window.location.search);

const articleId =
    params.get("id");

const currentArticle =
    newsData.find(
        (article) =>
            article.id === articleId
    );

const relatedArticlesContainer =
    document.querySelector("#relatedArticles");

const articleHeroBackground =
    document.querySelector("#articleHeroBackground");

const articleBreadcrumbCategory =
    document.querySelector("#articleBreadcrumbCategory");

const articleCategory =
    document.querySelector("#articleCategory");

const articleTitle =
    document.querySelector("#articleTitle");

const articleAuthor =
    document.querySelector("#articleAuthor");

const articleDate =
    document.querySelector("#articleDate");

const articleReadingTime =
    document.querySelector("#articleReadingTime");

const articleContent =
    document.querySelector("#articleContent");

const articleAuthorAvatar =
    document.querySelector("#articleAuthorAvatar");

const articleAuthorName =
    document.querySelector("#articleAuthorName");

const articleAuthorBio =
    document.querySelector("#articleAuthorBio");

/* 格式化文章標題 */
function formatArticleTitle(title) {

    if (!title.includes("：")) {
        return title;
    }

    return title.replace(
        "：",
        "：<br>"
    );
}

/* Article Hero */

function renderArticleHero() {

    if (!currentArticle) return;


    if (articleHeroBackground) {

        articleHeroBackground.style.backgroundImage =
            `url("${currentArticle.image}")`;

    }


    if (articleBreadcrumbCategory) {

        articleBreadcrumbCategory.textContent =
            currentArticle.categoryName;

    }


    if (articleCategory) {

        articleCategory.className =
            getCategoryTagClass(currentArticle);

        articleCategory.id =
            "articleCategory";

        articleCategory.textContent =
            currentArticle.categoryName;

    }


    if (articleTitle) {

        articleTitle.innerHTML =
            formatArticleTitle(
                currentArticle.title
            );

    }


    if (articleAuthor) {

        articleAuthor.textContent =
            currentArticle.author;

    }


    if (articleDate) {

        articleDate.textContent =
            currentArticle.dateDisplay;

        articleDate.setAttribute(
            "datetime",
            currentArticle.date
        );

    }


    if (articleReadingTime) {

        articleReadingTime.textContent =
            currentArticle.readingTime;

    }


    document.title =
        `${currentArticle.title}｜極光旅行 Aurora Travel`;

}

/* Article Content */

function renderArticleContent() {

    if (!articleContent || !currentArticle) return;

    if (!currentArticle.content) return;


    articleContent.innerHTML =
        currentArticle.content
            .map((block) => {

                if (block.type === "paragraph") {

                    return `
                        <p>
                            ${block.text}
                        </p>
                    `;

                }


                if (block.type === "heading") {

                    return `
                        <h2>
                            ${block.text}
                        </h2>
                    `;

                }


                if (block.type === "image") {

                    return `
                        <figure class="article-figure">

                            <img
                                src="${block.src}"
                                alt="${block.alt}"
                                class="article-figure__image">

                            <figcaption class="article-figure__caption">
                                ${block.caption}
                            </figcaption>

                        </figure>
                    `;

                }


                if (block.type === "list") {

                    const listItems =
                        block.items
                            .map((item) => {

                                return `
                                    <li>

                                        <i
                                            class="ti ti-check"
                                            aria-hidden="true">
                                        </i>

                                        <span>
                                            ${item}
                                        </span>

                                    </li>
                                `;

                            })
                            .join("");


                    return `
                        <ul class="article-list">
                            ${listItems}
                        </ul>
                    `;

                }


                if (block.type === "quote") {

                    return `
                        <blockquote class="article-quote">

                            <p>
                                ${block.text}
                            </p>

                        </blockquote>
                    `;

                }


                return "";

            })
            .join("");
}

/* Article Author */

function renderArticleAuthor() {

    if (!currentArticle) return;


    if (articleAuthorAvatar) {

        articleAuthorAvatar.textContent =
            currentArticle.authorInitial;

    }


    if (articleAuthorName) {

        articleAuthorName.textContent =
            currentArticle.author;

    }


    if (articleAuthorBio) {

        articleAuthorBio.textContent =
            currentArticle.authorBio;

    }

}

function getCategoryTagClass(article) {

    return `
        tag
        tag--${article.categoryColor}-soft
        tag--text-${article.categoryColor}
    `;
}


function getRelatedArticles() {

    if (!currentArticle) return [];


    const sameCategoryArticles =
        newsData.filter(
            (article) =>
                article.id !== currentArticle.id &&
                article.category === currentArticle.category
        );


    const otherArticles =
        newsData.filter(
            (article) =>
                article.id !== currentArticle.id &&
                article.category !== currentArticle.category
        );


    return [
        ...sameCategoryArticles,
        ...otherArticles
    ].slice(0, 3);
}


function renderRelatedArticles() {

    if (!relatedArticlesContainer) return;


    const relatedArticles =
        getRelatedArticles();


    relatedArticlesContainer.innerHTML =
        relatedArticles
            .map((article) => {

                return `

                    <a
                        href="news-detail.html?id=${article.id}"
                        class="article-related__card card card--media card--hover">

                        <figure
                            class="article-related__media card__media">

                            <img
                                src="${article.image}"
                                alt="${article.imageAlt}"
                                class="article-related__image card__image">

                            <span
                                class="${getCategoryTagClass(article)} article-related__tag">

                                ${article.categoryName}

                            </span>

                        </figure>


                        <div
                            class="article-related__body card__body">

                            <div class="article-related__meta">

                                <time datetime="${article.date}">
                                    ${article.dateDisplay}
                                </time>

                                <span aria-hidden="true">
                                    ·
                                </span>

                                <span>
                                    ${article.readingTime}
                                </span>

                            </div>


                            <h3 class="article-related__card-title">
                                ${article.title}
                            </h3>

                        </div>

                    </a>

                `;

            })
            .join("");
}

renderArticleHero();
renderArticleContent();
renderArticleAuthor();
renderRelatedArticles();