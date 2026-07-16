/* 評價區 */
document.addEventListener("DOMContentLoaded", () => {
    const testimonial = document.querySelector(".testimonial");

    if (!testimonial) return;

    if (typeof testimonials === "undefined") {
        console.error(
            "找不到 testimonials 資料，請確認 testimonials-data.js 已先載入。"
        );

        return;
    }

    const quote = testimonial.querySelector(
        '[data-role="testimonial-quote"]'
    );

    const name = testimonial.querySelector(
        '[data-role="testimonial-name"]'
    );

    const meta = testimonial.querySelector(
        '[data-role="testimonial-meta"]'
    );

    const rating = testimonial.querySelector(
        '[data-role="testimonial-rating"]'
    );

    const avatar = testimonial.querySelector(
        '[data-role="testimonial-avatar"]'
    );

    const previousButton = document.querySelector(
        ".testimonial-controls__prev"
    );

    const nextButton = document.querySelector(
        ".testimonial-controls__next"
    );

    const dots = document.querySelectorAll(".testimonial-dot");

    if (
        !quote ||
        !name ||
        !meta ||
        !rating ||
        !avatar ||
        !previousButton ||
        !nextButton ||
        !dots.length
    ) {
        console.error("旅客故事區塊缺少必要的 HTML 元素。");
        return;
    }

    let currentIndex = 0;
    let isChanging = false;

    function updateDots() {
        dots.forEach((dot, index) => {
            const isActive = index === currentIndex;

            dot.classList.toggle("is-active", isActive);
            dot.setAttribute(
                "aria-selected",
                String(isActive)
            );
        });
    }

    function renderTestimonial(index) {
        if (isChanging) return;

        const story = testimonials[index];

        if (!story) return;

        isChanging = true;
        testimonial.classList.add("is-changing");

        window.setTimeout(() => {
            quote.textContent = story.quote;
            name.textContent = story.name;
            meta.textContent = story.meta;
            rating.textContent = story.rating;

            avatar.src = story.avatar;
            avatar.alt = story.name;

            currentIndex = index;
            updateDots();

            testimonial.classList.remove("is-changing");
            isChanging = false;
        }, 300);
    }

    previousButton.addEventListener("click", () => {
        const previousIndex =
            (currentIndex - 1 + testimonials.length) %
            testimonials.length;

        renderTestimonial(previousIndex);
    });

    nextButton.addEventListener("click", () => {
        const nextIndex =
            (currentIndex + 1) %
            testimonials.length;

        renderTestimonial(nextIndex);
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const index = Number(dot.dataset.index);

            if (!Number.isInteger(index)) return;
            if (index === currentIndex) return;

            renderTestimonial(index);
        });
    });
});