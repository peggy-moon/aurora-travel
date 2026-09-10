document.addEventListener("DOMContentLoaded", () => {

    const tourList = document.querySelector(
        '[data-role="tour-list"]'
    );

    const tourCount = document.querySelector(
        '[data-role="tour-count"]'
    );

    const tourSearch = document.querySelector(
        "#tour-search"
    );

    // 如果目前頁面沒有行程清單，就停止執行
    if (!tourList) return;


    // 確認資料檔有先載入
    if (typeof travelData === "undefined") {
        console.error(
            "找不到 travelData，請確認 travel-data.js 已先載入。"
        );

        return;
    }

    // 讀取網址參數
    const params = new URLSearchParams(window.location.search);
    const destinationParam = params.get("destination");

    // 網站目前支援的國家
    const validCountries = [
        "iceland",
        "finland",
        "norway",
        "sweden"
    ];

    // 目前選擇的篩選條件
    let selectedCountry =
        validCountries.includes(destinationParam)
            ? destinationParam
            : "all";

    let selectedDays = "all";
    let selectedDifficulty = "all";
    let selectedSort = "featured";

    // 目前搜尋關鍵字
    let searchKeyword = "";

    function syncCountryDropdown() {

        const countryDropdown = document.querySelector(
            '[data-filter="country"]'
        );

        if (!countryDropdown) return;


        const label = countryDropdown.querySelector(
            "[data-dropdown-label]"
        );

        const options = countryDropdown.querySelectorAll(
            ".tour-dropdown__option"
        );

        const activeOption = countryDropdown.querySelector(
            `.tour-dropdown__option[data-value="${selectedCountry}"]`
        );


        if (!activeOption) return;


        // 更新 Dropdown 顯示文字
        if (label) {
            label.textContent =
                activeOption.textContent.trim();
        }


        // 清除原本選中狀態
        options.forEach((option) => {
            option.classList.remove("is-active");
        });


        // 套用目前選中的國家
        activeOption.classList.add("is-active");

    }

    function formatPrice(price) {
        return `NT$ ${price.toLocaleString("zh-TW")}`;
    }


    function createTags(tags) {

        const visibleTags = tags.slice(0, 3);

        const remainingCount =
            tags.length - visibleTags.length;


        const tagHTML = visibleTags
            .map((tag) => {
                return `
                    <span class="tag tag--secondary-soft tag--text-secondary">
                        ${tag}
                    </span>
                `;
            })
            .join("");


        const moreTagHTML =
            remainingCount > 0
                ? `
                    <span class="tag tag--secondary-soft tag--text-secondary">
                        +${remainingCount}
                    </span>
                `
                : "";


        return tagHTML + moreTagHTML;
    }


    function createTravelCard(tour) {

        const featuredHTML =
            tour.featured
                ? `
                    <span class="tag tag--warning travel-card__featured">
                        <i class="ti ti-award" aria-hidden="true"></i>
                        精選推薦
                    </span>
                `
                : "";


        return `
            <article class="card card--media card--hover travel-card">

                <a
                href="travel-detail.html?id=${tour.id}"
                class="travel-card__stretched-link"
                aria-label="查看${tour.title}詳細行程">
                </a>

                <!-- 圖片區 -->
                <div class="card__media travel-card__media">

                    <img
                        class="card__image"
                        src="${tour.image}"
                        alt="${tour.imageAlt}"
                        loading="lazy"
                        decoding="async">

                    <span class="tag tag--white travel-card__country">
                        <i class="ti ti-map-pin" aria-hidden="true"></i>
                        ${tour.countryName}
                    </span>

                    <span class="tour-card__rating">
                    <span class="tour-card__rating-star" aria-hidden="true">★</span>
                        ${tour.rating}
                    </span>

                    ${featuredHTML}

                </div>


                <!-- 卡片內容 -->
                <div class="card__body travel-card__body">

                    <h2 class="card__title travel-card__title">
                        ${tour.title}
                    </h2>

                    <p class="travel-card__desc">
                        ${tour.description}
                    </p>


                    <div class="travel-card__tags">
                        ${createTags(tour.tags)}
                    </div>


                    <div class="travel-card__meta">

                        <span>
                            <i class="ti ti-clock" aria-hidden="true"></i>
                            ${tour.days} 天 ${tour.nights} 夜
                        </span>

                        <span>
                            <i class="ti ti-users" aria-hidden="true"></i>
                            ${tour.groupSize}
                        </span>

                        <span class="tag tag--primary-soft tag--text-primary travel-card__difficulty">
                            ${tour.difficultyName}
                        </span>

                    </div>


                    <div class="card__footer travel-card__footer">

                        <div>
                            <p class="travel-card__reviews">
                                ${tour.reviews} 則評價
                            </p>

                            <p class="travel-card__price">
                                ${formatPrice(tour.price)}
                            </p>
                        </div>

                        <span
                            class="icon-btn icon-btn--primary travel-card__link"
                            aria-hidden="true">

                            <i class="ti ti-arrow-right" aria-hidden="true"></i>
                        </span>

                    </div>

                </div>

            </article>
        `;
    }

    function createEmptyState() {

        return `
            <div class="tour-empty">
    
                <div class="tour-empty__icon" aria-hidden="true">
                    <i class="ti ti-search"></i>
                </div>
    
                <h2 class="tour-empty__title">
                    沒有找到符合的行程
                </h2>
    
                <p class="tour-empty__desc">
                    試著調整搜尋關鍵字、國家、天數或難度，
                    找找其他適合你的旅程。
                </p>
    
                <button
                    class="btn btn-secondary tour-empty__reset"
                    type="button"
                    data-role="reset-filters">
                    清除篩選條件
                </button>
    
            </div>
        `;

    }

    function renderTravelCards(tours) {

        if (tours.length === 0) {

            tourList.innerHTML =
                createEmptyState();

        } else {

            tourList.innerHTML = tours
                .map((tour) => createTravelCard(tour))
                .join("");

        }


        if (tourCount) {
            tourCount.textContent = tours.length;
        }

    }

    function matchesDays(tour, dayRange) {

        if (dayRange === "all") {
            return true;
        }

        if (dayRange === "5-6") {
            return tour.days >= 5 && tour.days <= 6;
        }

        if (dayRange === "7-9") {
            return tour.days >= 7 && tour.days <= 9;
        }

        if (dayRange === "10-plus") {
            return tour.days >= 10;
        }

        return true;
    }

    function matchesSearch(tour, keyword) {

        // 沒輸入關鍵字 → 全部符合
        if (!keyword) {
            return true;
        }

        const searchableText = [
            tour.title,
            tour.description,
            tour.countryName,
            tour.difficultyName,
            ...tour.tags
        ]
            .join(" ")
            .toLowerCase();


        return searchableText.includes(
            keyword.toLowerCase()
        );
    }

    function sortTours(tours, sortType) {

        const sortedTours = [...tours];

        switch (sortType) {

            case "price-asc":
                sortedTours.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "price-desc":
                sortedTours.sort(
                    (a, b) => b.price - a.price
                );
                break;

            case "rating-desc":
                sortedTours.sort(
                    (a, b) => b.rating - a.rating
                );
                break;

            case "reviews-desc":
                sortedTours.sort(
                    (a, b) => b.reviews - a.reviews
                );
                break;

            case "days-asc":
                sortedTours.sort(
                    (a, b) => a.days - b.days
                );
                break;

            case "days-desc":
                sortedTours.sort(
                    (a, b) => b.days - a.days
                );
                break;

            case "featured":
                sortedTours.sort(
                    (a, b) =>
                        Number(b.featured) -
                        Number(a.featured)
                );
                break;
        }

        return sortedTours;
    }

    function applyFilters() {

        const filteredTours =
            travelData.filter((tour) => {

                const matchesCountry =
                    selectedCountry === "all" ||
                    tour.country === selectedCountry;

                const matchesDuration =
                    matchesDays(tour, selectedDays);

                const matchesDifficulty =
                    selectedDifficulty === "all" ||
                    tour.difficulty === selectedDifficulty;

                const matchesKeyword =
                    matchesSearch(tour, searchKeyword);

                return (
                    matchesCountry &&
                    matchesDuration &&
                    matchesDifficulty &&
                    matchesKeyword
                );

            });

        const sortedTours =
            sortTours(filteredTours, selectedSort);

        renderTravelCards(sortedTours);
    }

    function resetFilters() {

        // 1. 重設篩選資料
        selectedCountry = "all";
        selectedDays = "all";
        selectedDifficulty = "all";
        searchKeyword = "";


        // 2. 清空搜尋框
        if (tourSearch) {
            tourSearch.value = "";
        }


        // 3. 重設所有 Dropdown 畫面
        const filterDropdowns =
            document.querySelectorAll(
                '[data-filter]:not([data-filter="sort"])'
            );

        filterDropdowns.forEach((dropdown) => {

            const label = dropdown.querySelector(
                "[data-dropdown-label]"
            );

            const options = dropdown.querySelectorAll(
                ".tour-dropdown__option"
            );

            const defaultOption = dropdown.querySelector(
                '.tour-dropdown__option[data-value="all"]'
            );


            if (!defaultOption) return;


            // 恢復預設文字
            if (label) {
                label.textContent =
                    defaultOption.textContent.trim();
            }


            // 移除目前選中的狀態
            options.forEach((option) => {
                option.classList.remove("is-active");
            });


            // 「全部○○」恢復選中
            defaultOption.classList.add("is-active");

        });


        // 4. 重新顯示全部行程
        applyFilters();

    }

    tourList.addEventListener("click", (event) => {

        const resetButton =
            event.target.closest(
                '[data-role="reset-filters"]'
            );

        if (!resetButton) return;

        resetFilters();

    });


    // Dropdown 篩選與排序
    document.addEventListener(
        "tour-filter-change",
        (event) => {

            const { filter, value } =
                event.detail;


            if (filter === "country") {
                selectedCountry = value;
            }

            if (filter === "days") {
                selectedDays = value;
            }

            if (filter === "difficulty") {
                selectedDifficulty = value;
            }

            if (filter === "sort") {
                selectedSort = value;
            }

            applyFilters();

        }
    );

    // 搜尋行程
    if (tourSearch) {

        tourSearch.addEventListener("input", () => {

            searchKeyword =
                tourSearch.value.trim();

            applyFilters();

        });

    }

    // 第一次載入時同步網址篩選畫面
    syncCountryDropdown();

    // 第一次載入時套用預設篩選與排序
    applyFilters();

});