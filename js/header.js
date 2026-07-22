const siteHeader = document.querySelector("#site-header");
const hero = document.querySelector(".hero");

const navToggle = document.querySelector(".site-nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll(".site-nav__link");

if (siteHeader && hero) {
    let isTicking = false;

    const updateHeader = () => {
        const headerHeight = siteHeader.offsetHeight;
        const heroBottom = hero.getBoundingClientRect().bottom;

        siteHeader.classList.toggle(
            "is-scrolled",
            heroBottom <= headerHeight
        );

        isTicking = false;
    };

    const handleScroll = () => {
        if (isTicking) return;

        isTicking = true;
        window.requestAnimationFrame(updateHeader);
    };

    updateHeader();

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    window.addEventListener("resize", handleScroll);
}


/* =========================
   Mobile Navigation
========================= */

if (navToggle && siteNav && siteHeader) {

    const openMenu = () => {
        siteNav.classList.add("is-open");
        navToggle.classList.add("is-active");
        siteHeader.classList.add("is-menu-open");

        navToggle.setAttribute("aria-expanded", "true");
        navToggle.setAttribute("aria-label", "關閉導覽選單");

        document.body.classList.add("nav-open");
    };

    const closeMenu = () => {
        siteNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        siteHeader.classList.remove("is-menu-open");

        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "開啟導覽選單");

        document.body.classList.remove("nav-open");
    };

    const toggleMenu = () => {
        const isOpen = siteNav.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    /* 點擊漢堡按鈕 */
    navToggle.addEventListener("click", toggleMenu);

    /* 點選導覽連結後關閉 */
    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    /* 按 Esc 關閉 */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    /* 切回桌機尺寸時，自動清除手機選單狀態 */
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
}