document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll("[data-dropdown]");

    // 頁面沒有 dropdown 就停止
    if (!dropdowns.length) return;


    function closeDropdown(dropdown) {

        dropdown.classList.remove("is-open");

        const trigger = dropdown.querySelector(
            ".tour-dropdown__trigger"
        );

        if (trigger) {
            trigger.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }


    function closeAllDropdowns(exceptDropdown = null) {

        dropdowns.forEach((dropdown) => {

            if (dropdown === exceptDropdown) return;

            closeDropdown(dropdown);

        });

    }


    dropdowns.forEach((dropdown) => {

        const trigger = dropdown.querySelector(
            ".tour-dropdown__trigger"
        );

        const label = dropdown.querySelector(
            "[data-dropdown-label]"
        );

        const options = dropdown.querySelectorAll(
            ".tour-dropdown__option"
        );


        // 必要元素不存在就跳過
        if (!trigger || !label || !options.length) return;


        /* 點擊 Dropdown */
        trigger.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                dropdown.classList.contains("is-open");


            // 先把其他 Dropdown 關起來
            closeAllDropdowns(dropdown);


            if (isOpen) {

                closeDropdown(dropdown);

            } else {

                dropdown.classList.add("is-open");

                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });


        /* 選擇選項 */
        options.forEach((option) => {

            option.addEventListener("click", () => {

                // 按鈕文字換成選到的內容
                label.textContent =
                    option.textContent.trim();


                // 清除原本 active
                options.forEach((item) => {
                    item.classList.remove("is-active");
                });


                // 新選項變 active
                option.classList.add("is-active");

                const filterType =
                    dropdown.dataset.filter;

                if (filterType) {

                    document.dispatchEvent(
                        new CustomEvent("tour-filter-change", {
                            detail: {
                                filter: filterType,
                                value: option.dataset.value
                            }
                        })
                    );

                }


                // 關閉 Dropdown
                closeDropdown(dropdown);

            });

        });

    });


    /* 點擊 Dropdown 外面的地方 */
    document.addEventListener("click", () => {

        closeAllDropdowns();

    });

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") return;

        closeAllDropdowns();

    });
});

