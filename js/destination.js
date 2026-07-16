document.addEventListener("DOMContentLoaded", () => {
    const destinationSection = document.querySelector(".destinations");

    // 如果目前頁面沒有目的地區塊，就停止執行
    if (!destinationSection) return;

    // 確認資料檔有先載入
    if (typeof destinations === "undefined") {
        console.error("找不到 destinations 資料，請確認 destination-data.js 已先載入。");
        return;
    }

    const featuredCard = destinationSection.querySelector(
        ".destination-featured"
    );

    const destinationControls = destinationSection.querySelectorAll(
        "[data-destination]"
    );

    const image = destinationSection.querySelector(
        '[data-role="destination-image"]'
    );

    const name = destinationSection.querySelector(
        '[data-role="destination-name"]'
    );

    const english = destinationSection.querySelector(
        '[data-role="destination-english"]'
    );

    const tagline = destinationSection.querySelector(
        '[data-role="destination-tagline"]'
    );

    const description = destinationSection.querySelector(
        '[data-role="destination-description"]'
    );

    const price = destinationSection.querySelector(
        '[data-role="destination-price"]'
    );

    const tours = destinationSection.querySelector(
        '[data-role="destination-tours"]'
    );

    const button = destinationSection.querySelector(
        '[data-role="destination-button"]'
    );

    const buttonText = destinationSection.querySelector(
        '[data-role="destination-button-text"]'
    );

    // 確認必要元素都有找到
    if (
        !featuredCard ||
        !image ||
        !name ||
        !english ||
        !tagline ||
        !description ||
        !price ||
        !tours ||
        !button ||
        !buttonText
    ) {
        console.error("目的地區塊缺少必要的 HTML 元素。");
        return;
    }

    function updateActiveState(destinationId) {
        destinationControls.forEach((control) => {
            const isActive =
                control.dataset.destination === destinationId;

            control.classList.toggle("is-active", isActive);

            // 上方頁籤使用 aria-selected
            if (control.getAttribute("role") === "tab") {
                control.setAttribute(
                    "aria-selected",
                    String(isActive)
                );
            }

            // 右側卡片按鈕使用 aria-pressed
            if (control.hasAttribute("aria-pressed")) {
                control.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );
            }
        });
    }

    function renderDestination(destinationId) {
        const destination = destinations[destinationId];

        if (!destination) {
            console.error(`找不到目的地資料：${destinationId}`);
            return;
        }

        featuredCard.classList.add("is-changing");

        window.setTimeout(() => {
            image.src = destination.image;
            image.alt = `${destination.name}${destination.tagline}`;

            name.textContent = destination.name;
            english.textContent = destination.english;
            tagline.textContent = destination.tagline;
            description.textContent = destination.description;
            price.textContent = destination.price;
            tours.textContent = `${destination.tours} 條`;
            buttonText.textContent = destination.button;

            updateActiveState(destinationId);

            featuredCard.classList.remove("is-changing");
        }, 180);
    }

    destinationControls.forEach((control) => {
        control.addEventListener("click", () => {
            const destinationId = control.dataset.destination;

            if (!destinationId) return;

            renderDestination(destinationId);
        });
    });
});