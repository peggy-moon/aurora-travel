const featuredArticleContainer =
    document.querySelector("#featuredArticle");

const newsGrid =
    document.querySelector("#newsGrid");

const categoryTabs =
    document.querySelectorAll(".filter-tab");

const featuredSection =
    document.querySelector(".news-featured");

const newsPagination =
    document.querySelector("#newsPagination");

let selectedCategory = "all";

let currentPage = 1;

/* 一頁有幾篇文章 */
const articlesPerPage = 6;

/* 檢查精選文章數量 */
const featuredArticles =
    newsData.filter((article) => article.featured);

if (featuredArticles.length === 0) {

    console.warn(
        "目前沒有設定精選文章，請設定一篇 featured: true"
    );

} else if (featuredArticles.length > 1) {

    console.warn(
        `目前有 ${featuredArticles.length} 篇精選文章，請只保留一篇 featured: true`
    );

}

/* 建立 Tag class */
function getCategoryTagClass(article) {

    return `
        tag
        tag--${article.categoryColor}-soft
        tag--text-${article.categoryColor}
    `;
}

/* 取得篩選後的文章 */

function getFilteredArticles() {

    if (selectedCategory === "all") {

        return newsData.filter(
            (article) => !article.featured
        );

    }


    return newsData.filter(
        (article) =>
            article.category === selectedCategory
    );
}


/* 精選文章 */

function renderFeaturedArticle() {

    const featuredArticle =
        newsData.find((article) => article.featured);

    if (!featuredArticleContainer || !featuredArticle) return;


    featuredArticleContainer.innerHTML = `

        <a
            href="news-detail.html?id=${featuredArticle.id}"
            class="news-featured__card card card--media card--hover split">

            <figure
                class="news-featured__media card__media flex-1">

                <img
                    src="${featuredArticle.image}"
                    alt="${featuredArticle.imageAlt}"
                    class="news-featured__image card__image">

            </figure>


            <div class="news-featured__content flex-1">

                <div class="news-featured__meta">

                    <span class="${getCategoryTagClass(featuredArticle)}">
                        ${featuredArticle.categoryName}
                    </span>

                    <time datetime="${featuredArticle.date}">
                        ${featuredArticle.dateDisplay}
                    </time>

                </div>


                <h2 class="news-featured__title">
                    ${featuredArticle.title}
                </h2>


                <p class="news-featured__desc">
                    ${featuredArticle.description}
                </p>


                <div class="news-featured__footer">

                    <div class="news-featured__author">

                        <span>
                            ${featuredArticle.author}
                        </span>

                        <span aria-hidden="true">
                            ·
                        </span>

                        <span>
                            閱讀時間 ${featuredArticle.readingTime}
                        </span>

                    </div>


                    <span class="news-featured__link">

                        閱讀全文

                        <i
                            class="ti ti-arrow-up-right"
                            aria-hidden="true">
                        </i>

                    </span>

                </div>

            </div>

        </a>

    `;

    // 通知 animations.js：精選文章已渲染完成
    document.dispatchEvent(
        new CustomEvent("featured-news-rendered")
    );

}

/* 控制精選文章顯示 */

function updateFeaturedVisibility(animate = true) {

    if (!featuredSection) return;


    const shouldShow =
        selectedCategory === "all";

    featuredSection.hidden =
        !shouldShow;


    if (shouldShow && animate) {

        document.dispatchEvent(
            new CustomEvent("featured-news-rendered")
        );

    }
}

/* 一般文章卡片 */

function renderNewsCards(animate = true) {

    if (!newsGrid) return;


    const articles =
        getFilteredArticles();

    const startIndex =
        (currentPage - 1) * articlesPerPage;

    const endIndex =
        startIndex + articlesPerPage;

    const paginatedArticles =
        articles.slice(startIndex, endIndex);


    newsGrid.innerHTML =
        paginatedArticles
            .map((article) => {

                return `

    <a
        href="news-detail.html?id=${article.id}"
        class="news-card card card--media card--hover">

        <figure
            class="news-card__media
                   card__media">

            <img
                src="${article.image}"
                alt="${article.imageAlt}"
                class="news-card__image card__image">

        </figure>


        <div
            class="news-card__body
                   card__body">

            <div class="news-card__meta">

                <span class="${getCategoryTagClass(article)}">
                    ${article.categoryName}
                </span>

                <time datetime="${article.date}">
                    ${article.dateDisplay}
                </time>

            </div>


            <h2 class="news-card__title">
                ${article.title}
            </h2>


            <p class="news-card__desc">
                ${article.description}
            </p>


            <span class="news-card__link">

                閱讀全文

                <i
                    class="ti ti-arrow-up-right"
                    aria-hidden="true">
                </i>

            </span>

        </div>

    </a>

`;

            })
            .join("");

    // 通知 animations.js：文章卡片已渲染完成
    if (animate) {
        document.dispatchEvent(
            new CustomEvent("news-cards-rendered")
        );
    }

}

/* Pagination */

function renderPagination() {

    if (!newsPagination) return;


    const articles =
        getFilteredArticles();

    const totalPages =
        Math.ceil(
            articles.length / articlesPerPage
        );


    if (totalPages <= 1) {

        newsPagination.innerHTML = "";
        return;

    }


    let paginationHTML = "";


    paginationHTML += `

        <button
            class="icon-btn news-pagination__arrow"
            type="button"
            data-page="prev"
            aria-label="上一頁"
            ${currentPage === 1 ? "disabled" : ""}>

            <i
                class="ti ti-chevron-left"
                aria-hidden="true">
            </i>

        </button>

    `;


    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        paginationHTML += `

            <button
                class="news-pagination__page
                       ${page === currentPage ? "is-active" : ""}"
                type="button"
                data-page="${page}"
                aria-label="第 ${page} 頁"
                ${page === currentPage
                ? 'aria-current="page"'
                : ""}>

                ${page}

            </button>

        `;

    }


    paginationHTML += `

        <button
            class="icon-btn news-pagination__arrow"
            type="button"
            data-page="next"
            aria-label="下一頁"
            ${currentPage === totalPages
            ? "disabled"
            : ""}>

            <i
                class="ti ti-chevron-right"
                aria-hidden="true">
            </i>

        </button>

    `;


    newsPagination.innerHTML =
        paginationHTML;
}

function setupPagination() {

    if (!newsPagination) return;


    newsPagination.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    "[data-page]"
                );

            if (!button) return;


            const articles =
                getFilteredArticles();

            const totalPages =
                Math.ceil(
                    articles.length /
                    articlesPerPage
                );


            const page =
                button.dataset.page;


            if (page === "prev") {

                if (currentPage > 1) {
                    currentPage--;
                }

            } else if (page === "next") {

                if (currentPage < totalPages) {
                    currentPage++;
                }

            } else {

                currentPage =
                    Number(page);

            }


            renderNewsCards(false);
            renderPagination();

            const header =
                document.querySelector(".site-header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const newsGridTop =
                newsGrid.getBoundingClientRect().top
                + window.scrollY;

            window.addEventListener(
                "scrollend",
                () => {
                    document.dispatchEvent(
                        new CustomEvent("news-cards-rendered")
                    );
                },
                { once: true }
            );

            window.scrollTo({
                top: newsGridTop - headerHeight - 24,
                behavior: "smooth"
            });
        }
    );
}

/* 分類按鈕 */

function setupCategoryTabs() {

    if (!categoryTabs.length) return;


    categoryTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            selectedCategory =
                tab.dataset.category;

            currentPage = 1;


            categoryTabs.forEach((item) => {

                item.classList.remove("is-active");

                item.setAttribute(
                    "aria-selected",
                    "false"
                );

            });


            tab.classList.add("is-active");

            tab.setAttribute(
                "aria-selected",
                "true"
            );


            updateFeaturedVisibility();
            renderNewsCards();
            renderPagination();

        });

    });

}


/* 初始畫面 */

renderFeaturedArticle();
updateFeaturedVisibility(false);

renderNewsCards();
renderPagination();

setupCategoryTabs();
setupPagination();