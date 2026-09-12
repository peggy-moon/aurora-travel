// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length) {
    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-item__question");

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            // 先關閉全部 FAQ
            faqItems.forEach((faqItem) => {
                const faqQuestion = faqItem.querySelector(".faq-item__question");

                faqItem.classList.remove("is-open");
                faqQuestion.setAttribute("aria-expanded", "false");
            });

            // 如果原本是關閉的，才把目前這一題打開
            if (!isOpen) {
                item.classList.add("is-open");
                question.setAttribute("aria-expanded", "true");
            }
        });
    });
}

// FAQ Filter Tabs
const filterTabs = document.querySelectorAll(".filter-tab");

if (filterTabs.length) {
    filterTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const selectedCategory = tab.dataset.category;

            // 切換分類按鈕 active 狀態
            filterTabs.forEach((filterTab) => {
                filterTab.classList.remove("is-active");
                filterTab.setAttribute("aria-pressed", "false");
            });

            tab.classList.add("is-active");
            tab.setAttribute("aria-pressed", "true");


            // 切換分類時先關閉所有 FAQ
            faqItems.forEach((item) => {
                const question = item.querySelector(".faq-item__question");

                item.classList.remove("is-open");
                question.setAttribute("aria-expanded", "false");
            });


            // 篩選 FAQ
            faqItems.forEach((item) => {
                const itemCategory = item.dataset.category;

                item.hidden = !(
                    selectedCategory === "all" ||
                    itemCategory === selectedCategory
                );
            });
        });
    });
}