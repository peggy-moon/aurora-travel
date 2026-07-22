/* 通用通知框 */
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#notice-modal");

    if (!modal) return;

    const dialog = modal.querySelector(".notice-modal__dialog");
    const iconWrapper = modal.querySelector(".notice-modal__icon");
    const icon = modal.querySelector('[data-role="notice-icon"]');
    const title = modal.querySelector('[data-role="notice-title"]');
    const description = modal.querySelector('[data-role="notice-desc"]');
    const confirmButton = modal.querySelector(
        '[data-role="notice-confirm"]'
    );

    const closeButton = modal.querySelector(".notice-modal__close");
    const overlay = modal.querySelector(".notice-modal__overlay");

    if (
        !dialog ||
        !iconWrapper ||
        !icon ||
        !title ||
        !description ||
        !confirmButton ||
        !closeButton ||
        !overlay
    ) {
        console.error("通用通知框缺少必要的 HTML 元素。");
        return;
    }

    const noticeContent = {
        newsletter: {
            icon: "ti-check",
            color: "primary",
            title: "訂閱成功",
            description:
                "謝謝你的訂閱！最新的極光消息與精選行程，將會寄送到你的電子信箱。",
            confirmText: "好的"
        },

        privacy: {
            icon: "ti-lock",
            color: "secondary",
            title: "隱私權政策",
            description:
                "Aurora Travel 尊重每位旅客的個人資料與隱私權。\n\n本網站目前為前端作品集展示用途，此區塊僅作版面展示，未提供實際的資料蒐集與隱私權政策內容。",
            confirmText: "我知道了"
        },

        terms: {
            icon: "ti-file-description",
            color: "secondary",
            title: "服務條款",
            description:
                "Aurora Travel 致力於提供安全、可靠的旅遊服務體驗。\n\n本網站目前為前端作品集展示用途，此區塊僅作版面展示，未提供正式服務條款。",
            confirmText: "我知道了"
        },

        cookies: {
            icon: "ti-cookie",
            color: "secondary",
            title: "Cookie 設定",
            description:
                "Aurora Travel 重視您的瀏覽體驗。\n\n本網站目前為前端作品集展示用途，此區塊僅作版面展示，未提供 Cookie 偏好設定功能。",
            confirmText: "我知道了"
        }
    };

    let lastFocusedElement = null;

    function updateNotice(content) {
        icon.className = `ti ${content.icon}`;

        title.textContent = content.title;
        description.textContent = content.description;
        confirmButton.textContent = content.confirmText;

        iconWrapper.classList.remove(
            "notice-modal__icon--primary",
            "notice-modal__icon--secondary"
        );

        iconWrapper.classList.add(
            `notice-modal__icon--${content.color}`
        );

        confirmButton.classList.remove(
            "btn-primary",
            "btn-secondary"
        );

        confirmButton.classList.add(
            content.color === "secondary"
                ? "btn-secondary"
                : "btn-primary"
        );
    }

    function openModal(content, triggerElement = null) {
        lastFocusedElement = triggerElement;

        updateNotice(content);

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        closeButton.focus();
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    document
        .querySelectorAll(".notice-trigger")
        .forEach((trigger) => {
            trigger.addEventListener("click", (event) => {
                event.preventDefault();

                const noticeType = trigger.dataset.noticeType;

                if (noticeType === "social") {
                    const platform =
                        trigger.dataset.platform || "社群平台";

                    openModal(
                        {
                            icon: "ti-sparkles",
                            color: "secondary",
                            title: `${platform} 籌備中`,
                            description:
                                "我們正在準備更多北歐旅程、極光攝影與即時追光消息，敬請期待！",
                            confirmText: "我知道了"
                        },
                        trigger
                    );

                    return;
                }

                const content = noticeContent[noticeType];

                if (!content) {
                    console.error(
                        `找不到通知內容：${noticeType}`
                    );
                    return;
                }

                openModal(content, trigger);
            });
        });

    const newsletterForm = document.querySelector(
        "#newsletter-form"
    );

    if (newsletterForm) {
        newsletterForm.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                if (!newsletterForm.checkValidity()) {
                    newsletterForm.reportValidity();
                    return;
                }

                openModal(
                    noticeContent.newsletter,
                    newsletterForm.querySelector(
                        'button[type="submit"]'
                    )
                );

                newsletterForm.reset();
            }
        );
    }

    closeButton.addEventListener("click", closeModal);
    confirmButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            modal.classList.contains("is-open")
        ) {
            closeModal();
        }
    });
});