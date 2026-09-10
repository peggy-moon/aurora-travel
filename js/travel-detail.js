document.addEventListener("DOMContentLoaded", () => {

    // 1. 讀取網址參數
    const params =
        new URLSearchParams(
            window.location.search
        );

    const tourId =
        params.get("id");


    // 2. 確認 travelData 存在
    if (typeof travelData === "undefined") {

        console.error(
            "找不到 travelData，請確認 travel-data.js 已先載入。"
        );

        return;
    }


    // 3. 根據 id 找出對應行程
    const tour =
        travelData.find(
            (item) => item.id === tourId
        );


    // 4. 找不到行程
    if (!tour) {

        console.error(
            `找不到行程：${tourId}`
        );

        return;
    }

    // 5. 抓取 Hero 元素
    const heroImage = document.querySelector(
        '[data-role="detail-hero-image"]'
    );

    const country = document.querySelector(
        '[data-role="detail-country"]'
    );

    const title = document.querySelector(
        '[data-role="detail-title"]'
    );

    const desc = document.querySelector(
        '[data-role="detail-desc"]'
    );

    const rating = document.querySelector(
        '[data-role="detail-rating"]'
    );

    const reviews = document.querySelector(
        '[data-role="detail-reviews"]'
    );

    const duration = document.querySelector(
        '[data-role="detail-duration"]'
    );

    const groupSize = document.querySelector(
        '[data-role="detail-group-size"]'
    );

    const difficulty = document.querySelector(
        '[data-role="detail-difficulty"]'
    );

    const bestSeason = document.querySelector(
        '[data-role="detail-best-season"]'
    );

    const infoGroupSize = document.querySelector(
        '[data-role="detail-info-group-size"]'
    );

    const price = document.querySelector(
        '[data-role="detail-price"]'
    );

    const overview = document.querySelector(
        '[data-role="detail-overview"]'
    );

    const overviewNote = document.querySelector(
        '[data-role="detail-overview-note"] span'
    );

    const gallery = document.querySelector(
        '[data-role="detail-gallery"]'
    );

    const itinerary = document.querySelector(
        '[data-role="detail-itinerary"]'
    );

    const includedList = document.querySelector(
        '[data-role="detail-included"]'
    );

    const excludedList = document.querySelector(
        '[data-role="detail-excluded"]'
    );

    const bookingDescription = document.querySelector(
        '[data-role="booking-description"]'
    );

    const bookingMeetingPoint = document.querySelector(
        '[data-role="booking-meeting-point"]'
    );

    const bookingMeetingTime = document.querySelector(
        '[data-role="booking-meeting-time"]'
    );

    const bookingButton = document.querySelector(
        '[data-role="booking-button"]'
    );

    const bookingNotices = document.querySelector(
        '[data-role="booking-notices"]'
    );

    const bookingPrice = document.querySelector(
        '[data-role="booking-price"]'
    );

    function formatPrice(price) {
        return `NT$ ${price.toLocaleString("zh-TW")}`;
    }

    function renderHero(tour) {

        if (heroImage) {
            heroImage.src = tour.heroImage;
            heroImage.alt = tour.heroImageAlt;
        }

        if (country) {
            country.textContent = tour.countryName;
        }

        if (title) {
            title.textContent = tour.title;
        }

        if (desc) {
            desc.textContent = tour.description;
        }

        if (rating) {
            rating.textContent = tour.rating;
        }

        if (reviews) {
            reviews.textContent = tour.reviews;
        }

        if (duration) {
            duration.textContent =
                `${tour.days} 天 ${tour.nights} 夜`;
        }

        if (groupSize) {
            groupSize.textContent = tour.groupSize;
        }

        if (difficulty) {
            difficulty.textContent =
                tour.difficultyName;
        }

    }

    function renderInfo(tour) {

        if (bestSeason) {
            bestSeason.textContent = tour.bestSeason;
        }

        if (infoGroupSize) {
            infoGroupSize.textContent = tour.groupSize;
        }

        if (price) {
            price.textContent = formatPrice(tour.price);
        }

    }

    function renderOverview(tour) {

        if (overview) {
            overview.textContent =
                tour.overview;
        }

        if (overviewNote) {
            overviewNote.textContent =
                tour.overviewNote;
        }

    }

    function renderGallery(tour) {

        if (!gallery || !tour.gallery?.length) return;

        gallery.innerHTML = tour.gallery
            .map((image, index) => {

                const sizeClass =
                    index === 0
                        ? "travel-gallery__item--large"
                        : "";

                return `
                        <figure class="travel-gallery__item ${sizeClass}">
                    
                            <img
                                src="${image.src}"
                                alt="${image.alt}"
                                loading="lazy"
                                decoding="async">
                    
                            <figcaption class="travel-gallery__caption">
                    
                                <p
                                    class="travel-gallery__caption-title"
                                    lang="en">
                                    ${image.title}
                                </p>
                    
                                <p class="travel-gallery__caption-text">
                                    ${image.caption}
                                </p>
                    
                            </figcaption>
                    
                        </figure>
                    `;

            })
            .join("");
    }

    function renderItinerary(tour) {

        if (!itinerary || !tour.itinerary?.length) return;

        itinerary.innerHTML = tour.itinerary
            .map((item, index) => {

                const isOpen = index === 0;

                return `
                    <article
                        class="travel-itinerary__item ${isOpen ? "is-open" : ""}"
                        data-itinerary-item>
    
                        <button
                            class="travel-itinerary__trigger"
                            type="button"
                            aria-expanded="${isOpen}"
                            data-itinerary-trigger>
    
                            <span class="travel-itinerary__day">
                                ${item.day}
                            </span>
    
                            <span class="travel-itinerary__title">
                                ${item.title}
                            </span>
    
                            <span class="travel-itinerary__meals">
                                <i class="ti ti-tools-kitchen-2" aria-hidden="true"></i>
                                ${item.meals}
                            </span>
    
                        </button>
    
                        <div class="travel-itinerary__panel">
    
                            <div class="travel-itinerary__panel-inner">
    
                                <p class="travel-itinerary__desc">
                                    ${item.description}
                                </p>
    
                                <div class="travel-itinerary__details">
    
                                    <div>
                                        <i class="ti ti-tools-kitchen-2" aria-hidden="true"></i>
                                        <span>
                                            <small>餐食</small>
                                            ${item.meals}
                                        </span>
                                    </div>
    
                                    ${item.hotel
                        ? `
                                                <div>
                                                    <i class="ti ti-building" aria-hidden="true"></i>
                                                    <span>
                                                        <small>住宿</small>
                                                        ${item.hotel}
                                                    </span>
                                                </div>
                                            `
                        : ""
                    }
    
                                </div>
    
                            </div>
    
                        </div>
    
                    </article>
                `;

            })
            .join("");
    }

    if (itinerary) {

        itinerary.addEventListener("click", (event) => {

            const trigger = event.target.closest(
                "[data-itinerary-trigger]"
            );

            if (!trigger) return;

            const item = trigger.closest(
                "[data-itinerary-item]"
            );

            if (!item) return;

            // 記住目前點擊的這一天原本是否展開
            const isOpen =
                item.classList.contains("is-open");

            // 找到所有天數
            const items = itinerary.querySelectorAll(
                "[data-itinerary-item]"
            );

            // 全部收起
            items.forEach((otherItem) => {

                otherItem.classList.remove("is-open");

                const otherTrigger =
                    otherItem.querySelector(
                        "[data-itinerary-trigger]"
                    );

                if (otherTrigger) {
                    otherTrigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

            // 如果點擊的這一天原本是關閉的
            // 就把它展開
            if (!isOpen) {

                item.classList.add("is-open");

                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    }

    function renderIncludes(tour) {

        if (includedList && tour.included?.length) {

            includedList.innerHTML = tour.included
                .map((item) => {
                    return `
                        <li>
                            <i
                                class="ti ti-check"
                                aria-hidden="true">
                            </i>
    
                            <span>${item}</span>
                        </li>
                    `;
                })
                .join("");

        }

        if (excludedList && tour.excluded?.length) {

            excludedList.innerHTML = tour.excluded
                .map((item) => {
                    return `
                        <li>
                            <i
                                class="ti ti-minus"
                                aria-hidden="true">
                            </i>
    
                            <span>${item}</span>
                        </li>
                    `;
                })
                .join("");

        }

    }

    function renderBooking(tour) {

        if (!tour.booking) return;

        if (bookingDescription) {
            bookingDescription.textContent =
                `與我們的極光旅行策劃師聊聊，為你保留 ${tour.title} ${tour.days} 日的席位。名額有限，建議提前預訂。`;
        }

        if (bookingMeetingPoint) {
            bookingMeetingPoint.textContent =
                tour.booking.meetingPoint;
        }

        if (bookingMeetingTime) {
            bookingMeetingTime.textContent =
                tour.booking.meetingTime;
        }

        if (bookingButton) {
            bookingButton.textContent =
                `預訂${tour.title}`;
        }

        if (bookingNotices) {
            bookingNotices.innerHTML =
                tour.booking.notices
                    .map((notice) => {
                        return `
                            <li>
                                <i
                                    class="ti ti-chevron-right"
                                    aria-hidden="true">
                                </i>
    
                                <span>${notice}</span>
                            </li>
                        `;
                    })
                    .join("");
        }

        if (bookingPrice) {
            bookingPrice.textContent =
                `NT$ ${tour.price.toLocaleString("zh-TW")}`;
        }

    }

    // 更新瀏覽器分頁標題
    document.title = `${tour.title}｜極光旅行 Aurora Travel`;


    renderHero(tour);
    renderInfo(tour);
    renderOverview(tour);
    renderGallery(tour);
    renderItinerary(tour);
    renderIncludes(tour);
    renderBooking(tour);

});