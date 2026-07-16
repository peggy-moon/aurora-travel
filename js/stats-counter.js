/* 數字動畫 */
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-count]");

    // 如果頁面沒有數據元素，就停止執行
    if (!counters.length) return;

    const duration = 1600;

    function formatNumber(value, decimals, useSeparator) {
        const fixedValue = Number(value).toFixed(decimals);

        if (!useSeparator) {
            return fixedValue;
        }

        return Number(fixedValue).toLocaleString("zh-TW", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }

    function animateCounter(counter) {
        const target = Number(counter.dataset.count);
        const suffix = counter.dataset.suffix || "";
        const decimals = Number(counter.dataset.decimals || 0);
        const useSeparator = counter.dataset.separator === "true";

        if (!Number.isFinite(target)) return;

        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // 讓動畫前段快、後段慢
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = target * easedProgress;

            counter.textContent =
                formatNumber(currentValue, decimals, useSeparator) +
                suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent =
                    formatNumber(target, decimals, useSeparator) +
                    suffix;
            }
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const counter = entry.target;

                animateCounter(counter);

                // 執行一次後停止觀察
                currentObserver.unobserve(counter);
            });
        },
        {
            threshold: 0.4
        }
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});