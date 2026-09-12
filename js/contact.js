emailjs.init({
    publicKey: "NvI9ATpY5bnvJLvzR",
});

const messageInput = document.querySelector("#contact-message");
const messageCount = document.querySelector("#message-count");

const contactForm = document.querySelector("#contact-form");

const submitButton = contactForm?.querySelector(
    'button[type="submit"]'
);

const nameInput = document.querySelector("#contact-name");
const emailInput = document.querySelector("#contact-email");
const subjectInput = document.querySelector("#contact-subject");

const nameError = document.querySelector("#contact-name-error");
const emailError = document.querySelector("#contact-email-error");
const subjectError = document.querySelector("#contact-subject-error");
const messageError = document.querySelector("#contact-message-error");

if (messageInput && messageCount) {
    messageInput.addEventListener("input", () => {
        messageCount.textContent = messageInput.value.length;
    });
}

function showError(input, errorElement, message) {
    const field = input.closest(".field");

    field.classList.add("is-error");
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    const field = input.closest(".field");

    field.classList.remove("is-error");
    input.removeAttribute("aria-invalid");
    errorElement.textContent = "";
}

// 輸入內容後，自動清除錯誤
function clearErrorOnInput(input, errorElement) {
    input.addEventListener("input", () => {
        if (input.value.trim()) {
            clearError(input, errorElement);
        }
    });
}

// 即時清除錯誤 + 防呆
if (nameInput && nameError) {
    clearErrorOnInput(nameInput, nameError);
}

if (emailInput && emailError) {
    clearErrorOnInput(emailInput, emailError);
}

if (messageInput && messageError) {
    clearErrorOnInput(messageInput, messageError);
}

if (subjectInput && subjectError) {
    subjectInput.addEventListener("change", () => {
        if (subjectInput.value) {
            clearError(subjectInput, subjectError);
        }
    });
}

if (contactForm && submitButton) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;

        // 姓名
        if (!nameInput.value.trim()) {
            showError(nameInput, nameError, "請輸入姓名");
            isValid = false;
        } else {
            clearError(nameInput, nameError);
        }

        // Email
        if (!emailInput.value.trim()) {
            showError(emailInput, emailError, "請輸入電子郵件");
            isValid = false;
        } else if (!emailInput.validity.valid) {
            showError(emailInput, emailError, "請輸入正確的電子郵件格式");
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        // 諮詢主題
        if (!subjectInput.value) {
            showError(subjectInput, subjectError, "請選擇諮詢主題");
            isValid = false;
        } else {
            clearError(subjectInput, subjectError);
        }

        // 訊息內容
        if (!messageInput.value.trim()) {
            showError(messageInput, messageError, "請輸入訊息內容");
            isValid = false;
        } else {
            clearError(messageInput, messageError);
        }

        if (!isValid) {
            return;
        }

        submitButton.disabled = true;

        submitButton.innerHTML = `
    傳送中
    <i class="ti ti-loader-2"></i>
`;

        emailjs
            .sendForm(
                "service_ptd27pf",
                "template_ihu2b7o",
                contactForm
            )
            .then(() => {
                contactForm.reset();
                messageCount.textContent = "0";

                window.openNoticeModal(
                    {
                        icon: "ti-check",
                        color: "primary",
                        title: "訊息已成功送出",
                        description:
                            "感謝你的來信！我們已收到你的訊息，將於 1–2 個工作日內回覆。",
                        confirmText: "我知道了"
                    },
                    submitButton
                );
            })
            .catch((error) => {
                console.error("訊息寄送失敗：", error);

                window.openNoticeModal(
                    {
                        icon: "ti-alert-circle",
                        color: "secondary",
                        title: "訊息暫時無法送出",
                        description:
                            "目前無法完成訊息寄送，請稍後再試，或透過電子郵件與我們聯繫。",
                        confirmText: "我知道了"
                    },
                    submitButton
                );
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = `
                    送出訊息
                    <i class="ti ti-send"></i>
                `;
            });
    });
}