const siteHeader = document.querySelector("#site-header");

const navToggle = document.querySelector(".site-nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll(".site-nav__link");

const navMobileExtra = document.querySelector(
    ".site-nav__mobile-extra"
);


if (siteHeader) {

    let isTicking = false;

    const updateHeader = () => {

        siteHeader.classList.toggle(
            "is-scrolled",
            window.scrollY > 40
        );

        isTicking = false;
    };

    const handleScroll = () => {

        if (isTicking) return;

        isTicking = true;

        requestAnimationFrame(updateHeader);
    };

    updateHeader();

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

}


/* Mobile Navigation */
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (navToggle && siteNav && siteHeader) {

    let navExtraObserver;
    let hasNavExtraAnimated = false;

    if (navMobileExtra && !prefersReducedMotion) {
        navExtraObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    hasNavExtraAnimated = true;

                    gsap.to(navMobileExtra, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    });

                    // 這一次開啟只播放一次
                    navExtraObserver.unobserve(navMobileExtra);
                });
            },
            {
                root: siteNav,
                threshold: 0.15
            }
        );
    }

    const openMenu = () => {
        hasNavExtraAnimated = false;

        // 每次重新開啟選單，都從最上方開始
        siteNav.scrollTop = 0;

        if (!prefersReducedMotion) {
            gsap.set(siteNav, {
                opacity: 0
            });
        } else {
            gsap.set(siteNav, {
                clearProps: "opacity"
            });
        }

        siteNav.classList.add("is-open");
        navToggle.classList.add("is-active");
        siteHeader.classList.add("is-menu-open");

        navToggle.setAttribute("aria-expanded", "true");
        navToggle.setAttribute("aria-label", "關閉導覽選單");

        document.body.classList.add("nav-open");

        if (navExtraObserver) {
            gsap.set(navMobileExtra, {
                y: 32,
                opacity: 0
            });

            navExtraObserver.observe(navMobileExtra);
        }

        // Mobile Nav Animation
        if (!prefersReducedMotion) {

            const menuTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            menuTimeline
                // 整個選單先淡入
                .fromTo(
                    siteNav,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.35,
                        clearProps: "opacity"
                    }
                )

                // 導覽連結依序出現
                .fromTo(
                    navLinks,
                    {
                        y: 32,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.06,
                        clearProps: "transform,opacity"
                    },
                    "-=0.2"
                );
        }
    };

    const finishCloseMenu = () => {
        siteNav.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        siteHeader.classList.remove("is-menu-open");

        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "開啟導覽選單");

        document.body.classList.remove("nav-open");

        if (navExtraObserver) {
            navExtraObserver.unobserve(navMobileExtra);
        }

        gsap.set([navLinks, navMobileExtra], {
            clearProps: "transform,opacity"
        });

        hasNavExtraAnimated = false;
    };

    const closeMenu = () => {

        // 選單本來就沒開，不需要播放動畫
        if (!siteNav.classList.contains("is-open")) return;

        // Reduced Motion：直接關閉
        if (prefersReducedMotion) {
            finishCloseMenu();
            return;
        }

        gsap.killTweensOf([siteNav, navLinks]);

        const closeTimeline = gsap.timeline({
            onComplete: finishCloseMenu
        });

        // 如果 Extra 這一輪有出場，先讓它退場
        if (hasNavExtraAnimated && navMobileExtra) {
            closeTimeline.to(navMobileExtra, {
                y: 24,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        }

        // 導覽連結反方向依序退場
        closeTimeline.to(
            navLinks,
            {
                y: 24,
                opacity: 0,
                duration: 0.3,
                stagger: {
                    each: 0.04,
                    from: "end"
                },
                ease: "power2.in"
            },
            hasNavExtraAnimated ? "-=0.15" : 0
        );


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