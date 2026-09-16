// GSAP Plugins
gsap.registerPlugin(ScrollTrigger);


// Reduced Motion
const motion = gsap.matchMedia();

motion.add("(prefers-reduced-motion: no-preference)", () => {

    // Split Text
    function splitTextIntoChars(element) {
        const textNodes = [];

        function collectTextNodes(node) {
            node.childNodes.forEach((child) => {
                if (child.nodeType === Node.TEXT_NODE) {
                    textNodes.push(child);
                } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== "BR") {
                    collectTextNodes(child);
                }
            });
        }

        collectTextNodes(element);

        textNodes.forEach((textNode) => {
            const fragment = document.createDocumentFragment();

            [...textNode.textContent].forEach((char) => {
                if (char.trim() === "") {
                    fragment.appendChild(document.createTextNode(char));
                    return;
                }

                const span = document.createElement("span");

                span.className = "char";
                span.textContent = char;

                fragment.appendChild(span);
            });

            textNode.replaceWith(fragment);
        });
    }

    // Card Parts Animation
    function animateCardParts(cardSelector, options) {
        const cards = gsap.utils.toArray(cardSelector);

        cards.forEach((card, index) => {
            const firstPart = card.querySelector(options.firstSelector);
            const secondPart = card.querySelector(options.secondSelector);

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: options.start || "top 88%",
                    once: true
                },
                delay: index * (options.delay || 0.08)
            });

            if (firstPart) {
                timeline.from(firstPart, {
                    ...options.firstAnimation,
                    clearProps: "transform,opacity"
                });
            }

            if (secondPart) {
                timeline.from(secondPart, {
                    ...options.secondAnimation,
                    clearProps: "transform,opacity"
                }, options.overlap || "-=0.4");
            }
        });
    }

    // Page Hero
    const pageHero = document.querySelector(".page-hero");

    if (pageHero) {
        const eyebrow = pageHero.querySelector(".page-hero__eyebrow");
        const title = pageHero.querySelector(".page-hero__title");
        const desc = pageHero.querySelector(".page-hero__desc");

        const pageHeroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        if (eyebrow) {
            pageHeroTimeline.from(eyebrow, {
                y: 24,
                opacity: 0,
                duration: 0.6
            });
        }

        if (title) {
            pageHeroTimeline.from(title, {
                y: 56,
                opacity: 0,
                duration: 0.95
            }, "-=0.25");
        }

        if (desc) {
            pageHeroTimeline.from(desc, {
                y: 28,
                opacity: 0,
                duration: 0.75
            }, "-=0.4");
        }
    }

    // Fade Up
    gsap.utils.toArray('[data-animate="fade-up"]').forEach((element) => {
        gsap.from(element, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true
            }
        });
    });

    // Site Header
    const siteHeader = document.querySelector(".site-header");

    if (siteHeader) {
        gsap.from(siteHeader, {
            y: -60,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            clearProps: "transform,opacity",
            delay: 0.15
        });
    }

    // Site Footer
    const siteFooter = document.querySelector(".site-footer");

    if (siteFooter) {
        gsap.from(".site-footer__main", {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: siteFooter,
                start: "top 85%",
                once: true
            }
        });
    }

    // Hero Timeline
    const hero = document.querySelector(".hero");

    if (hero) {

        // Hero 標題逐字拆分
        const heroTitle = hero.querySelector('[data-animate="chars"]');

        if (heroTitle) {
            splitTextIntoChars(heroTitle);
        }

        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        heroTimeline
            .from(".hero__eyebrow", {
                y: 20,
                opacity: 0,
                duration: 0.6
            })
            .from(".hero__title .char", {
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.055
            })
            .from(".hero__slogan", {
                y: 30,
                opacity: 0,
                duration: 0.7
            }, "-=0.4")
            .from(".hero__desc", {
                y: 20,
                opacity: 0,
                duration: 0.7
            }, "-=0.3")
            .from(".hero__actions", {
                y: 20,
                opacity: 0,
                duration: 0.6
            }, "-=0.3")
            .from(".hero__features", {
                y: 40,
                opacity: 0,
                duration: 0.8
            }, "-=0.2");
    }

    // Destinations
    const destinationsContent = document.querySelector(
        ".destinations__content"
    );

    if (destinationsContent) {
        const destinationFeatured = document.querySelector(
            ".destination-featured"
        );

        const destinationItems = gsap.utils.toArray(
            ".destination-item"
        );

        const destinationsMotion = gsap.matchMedia();


        // 桌機 / 平板
        destinationsMotion.add("(min-width: 769px)", () => {

            // 先設定動畫初始狀態
            gsap.set(destinationFeatured, {
                scale: 0.92,
                y: 24,
                opacity: 0
            });

            gsap.set(destinationItems, {
                x: 40,
                opacity: 0
            });

            const destinationsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: destinationsContent,
                    start: "top 82%",
                    once: true
                }
            });

            destinationsTimeline
                .to(destinationFeatured, {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                })
                .to(destinationItems, {
                    x: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "<0.1");
        });


        // 手機
        destinationsMotion.add("(max-width: 768px)", () => {

            // Featured
            if (destinationFeatured) {
                gsap.set(destinationFeatured, {
                    scale: 0.92,
                    y: 24,
                    opacity: 0
                });

                gsap.to(destinationFeatured, {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: destinationFeatured,
                        start: "top 88%",
                        once: true
                    }
                });
            }


            // Destination Items
            destinationItems.forEach((item) => {

                gsap.set(item, {
                    x: 40,
                    opacity: 0
                });

                gsap.to(item, {
                    x: 0,
                    opacity: 1,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: item,
                        start: "top 88%",
                        once: true
                    }
                });
            });
        });
    }

    // Why Aurora Stats
    const whyAuroraStats = document.querySelector(".why-aurora__stats");

    if (whyAuroraStats) {
        gsap.from(".why-aurora__stats .stat-item", {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",

            scrollTrigger: {
                trigger: whyAuroraStats,
                start: "top 85%",
                once: true
            }
        });
    }

    // Featured Tours
    const featuredToursGrid = document.querySelector(
        ".featured-tours__grid"
    );

    if (featuredToursGrid) {

        const featuredToursMotion = gsap.matchMedia();

        // 桌機 / 平板
        featuredToursMotion.add("(min-width: 769px)", () => {
            const cards = gsap.utils.toArray(
                ".featured-tours__grid .tour-card"
            );

            cards.forEach((card, index) => {
                const media = card.querySelector(".tour-card__media");
                const body = card.querySelector(".tour-card__body");

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: featuredToursGrid,
                        start: "top 85%",
                        once: true
                    },
                    delay: index * 0.12
                });

                timeline
                    .from(media, {
                        y: 24,
                        scale: 0.96,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    })
                    .from(body, {
                        y: 24,
                        opacity: 0,
                        duration: 0.65,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    }, "-=0.4");
            });
        });

        // 手機
        featuredToursMotion.add("(max-width: 768px)", () => {
            const cards = gsap.utils.toArray(
                ".featured-tours__grid .tour-card"
            );

            cards.forEach((card) => {
                const media = card.querySelector(".tour-card__media");
                const body = card.querySelector(".tour-card__body");

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        once: true
                    }
                });

                timeline
                    .from(media, {
                        y: 24,
                        scale: 0.96,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    })
                    .from(body, {
                        y: 24,
                        opacity: 0,
                        duration: 0.65,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    }, "-=0.4");
            });
        });
    }

    // Travel Consultation
    const consultation = document.querySelector(".travel-consultation");

    if (consultation) {
        const consultationMedia = consultation.querySelector(
            ".travel-consultation__media"
        );

        const consultationContent = consultation.querySelector(
            ".travel-consultation__content"
        );

        if (consultationMedia) {
            gsap.from(consultationMedia, {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: consultationMedia,
                    start: "top 88%",
                    once: true
                }
            });
        }

        if (consultationContent) {
            gsap.from(consultationContent, {
                x: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: consultationContent,
                    start: "top 88%",
                    once: true
                }
            });
        }
    }

    // About Story
    const aboutStory = document.querySelector(".about-story");

    if (aboutStory) {
        const storyContent = document.querySelector(
            '[data-animate="about-story-content"]'
        );

        const storyGallery = document.querySelector(
            '[data-animate="about-story-gallery"]'
        );

        if (storyContent) {
            gsap.from(storyContent, {
                x: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: storyContent,
                    start: "top 88%",
                    once: true
                }
            });
        }

        if (storyGallery) {
            gsap.from(storyGallery, {
                x: 60,
                scale: 0.94,
                opacity: 0,
                duration: 1.1,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: storyGallery,
                    start: "top 88%",
                    once: true
                }
            });
        }
    }

    // About Values
    if (document.querySelector(".about-values__grid")) {
        animateCardParts(".about-values__card", {
            firstSelector: ".feature-card__icon",
            secondSelector: ".feature-card__content",

            firstAnimation: {
                y: 24,
                scale: 0.9,
                opacity: 0,
                duration: 0.65,
                ease: "power3.out"
            },

            secondAnimation: {
                y: 28,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }
        });
    }

    // About Team
    const aboutTeamGrid = document.querySelector(".about-team__grid");

    if (aboutTeamGrid) {

        const teamMotion = gsap.matchMedia();

        // 桌機 / 平板
        teamMotion.add("(min-width: 769px)", () => {
            gsap.from(".about-team__grid .team-member", {
                y: 60,
                opacity: 0,
                duration: 0.9,
                stagger: 0.14,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: aboutTeamGrid,
                    start: "top 85%",
                    once: true
                }
            });
        });

        // 手機
        teamMotion.add("(max-width: 768px)", () => {
            const teamMembers = gsap.utils.toArray(
                ".about-team__grid .team-member"
            );

            teamMembers.forEach((member) => {
                gsap.from(member, {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: member,
                        start: "top 88%",
                        once: true
                    }
                });
            });
        });
    }

    // Destination Cards
    if (document.querySelector(".destination-overview__grid")) {
        animateCardParts(".destination-overview__grid .destination-card", {
            firstSelector: ".destination-card__media",
            secondSelector: ".destination-card__content",

            firstAnimation: {
                y: 28,
                scale: 0.96,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out"
            },

            secondAnimation: {
                y: 30,
                opacity: 0,
                duration: 0.75,
                ease: "power3.out"
            },

            overlap: "-=0.45"
        });
    }

    // Country Overview
    const countryOverview = document.querySelector(".country-overview");

    if (countryOverview) {
        gsap.from('[data-animate="country-content"]', {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: countryOverview,
                start: "top 80%",
                once: true
            }
        });

        animateCardParts(".country-overview__feature", {
            firstSelector: ".feature-card__icon",
            secondSelector: ".feature-card__content",

            firstAnimation: {
                y: 20,
                scale: 0.92,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            },

            secondAnimation: {
                y: 24,
                opacity: 0,
                duration: 0.75,
                ease: "power3.out"
            }
        });
    }

    // Country Attractions
    gsap.utils.toArray(".attraction").forEach((attraction) => {
        const media = attraction.querySelector(".attraction__media");
        const content = attraction.querySelector(".attraction__content");

        const isReverse = attraction.classList.contains("split-reverse");

        if (media) {
            gsap.from(media, {
                x: isReverse ? 50 : -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: media,
                    start: "top 88%",
                    once: true
                }
            });
        }

        if (content) {
            gsap.from(content, {
                x: isReverse ? -50 : 50,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: content,
                    start: "top 88%",
                    once: true
                }
            });
        }
    });

    // Country Info
    if (document.querySelector(".country-info__grid")) {
        animateCardParts(".country-info__card", {
            firstSelector: ".feature-card__icon",
            secondSelector: ".feature-card__content",

            firstAnimation: {
                y: 20,
                scale: 0.92,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            },

            secondAnimation: {
                y: 24,
                opacity: 0,
                duration: 0.75,
                ease: "power3.out"
            }
        });
    }

    // Country Reviews
    const countryReviewsGrid = document.querySelector(
        ".country-reviews__grid"
    );

    if (countryReviewsGrid) {

        const reviewsMotion = gsap.matchMedia();

        // 桌機 / 平板
        reviewsMotion.add("(min-width: 769px)", () => {
            gsap.from(".country-reviews__grid .traveler-review", {
                y: 36,
                opacity: 0,
                duration: 0.8,
                stagger: 0.14,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: countryReviewsGrid,
                    start: "top 85%",
                    once: true
                }
            });
        });

        // 手機
        reviewsMotion.add("(max-width: 768px)", () => {
            const reviews = gsap.utils.toArray(
                ".country-reviews__grid .traveler-review"
            );

            reviews.forEach((review) => {
                gsap.from(review, {
                    y: 36,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: review,
                        start: "top 88%",
                        once: true
                    }
                });
            });
        });
    }

    // Travel Cards
    function animateTravelCards() {
        const travelCards = gsap.utils.toArray(".travel-card");

        if (!travelCards.length) return;

        travelCards.forEach((card, index) => {
            const media = card.querySelector(".travel-card__media");
            const body = card.querySelector(".travel-card__body");

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    once: true
                },
                delay: (index % 3) * 0.08
            });

            timeline
                .from(media, {
                    y: 24,
                    scale: 0.96,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                })
                .from(body, {
                    y: 24,
                    opacity: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "-=0.4");
        });
    }

    // 監聽行程卡片渲染完成
    document.addEventListener(
        "tour-cards-rendered",
        animateTravelCards
    );

    function animateTravelDetail() {

        // Travel Detail Hero
        const detailHero = document.querySelector(".travel-detail-hero");

        if (detailHero) {
            const heroImage = detailHero.querySelector(
                ".travel-detail-hero__image"
            );

            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            // Hero 圖片
            if (heroImage) {
                const animateHeroImage = () => {
                    gsap.fromTo(
                        heroImage,
                        {
                            scale: 1.06,
                            opacity: 0
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.4,
                            ease: "power3.out",
                            clearProps: "transform,opacity"
                        }
                    );
                };

                if (heroImage.complete) {
                    animateHeroImage();
                } else {
                    heroImage.addEventListener(
                        "load",
                        animateHeroImage,
                        { once: true }
                    );
                }
            }

            heroTimeline
                .from(".travel-detail-hero__country", {
                    y: 20,
                    opacity: 0,
                    duration: 0.55
                })
                .from(".travel-detail-hero__title", {
                    y: 50,
                    opacity: 0,
                    duration: 0.9
                }, "-=0.2")
                .from(".travel-detail-hero__desc", {
                    y: 28,
                    opacity: 0,
                    duration: 0.7
                }, "-=0.4")
                .from(".travel-detail-hero__meta", {
                    y: 22,
                    opacity: 0,
                    duration: 0.7
                }, "-=0.35");
        }

        // Travel Detail Info
        const detailInfo = document.querySelector(".travel-detail-info");

        if (detailInfo) {
            gsap.from(
                [
                    ".travel-detail-info__item",
                    ".travel-detail-info__price"
                ],
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: detailInfo,
                        start: "top 90%",
                        once: true
                    }
                }
            );
        }


        // Travel Overview
        const travelOverview = document.querySelector(".travel-overview");

        if (travelOverview) {
            const overviewTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: travelOverview,
                    start: "top 80%",
                    once: true
                }
            });

            overviewTimeline
                .from(".travel-overview__line", {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform"
                })
                .from(".travel-overview__heading > div", {
                    y: 24,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "-=0.35")
                .from(".travel-overview__content", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "-=0.35");
        }

        // Travel Gallery
        const galleryHeader = document.querySelector(
            ".travel-gallery .section-header"
        );

        if (galleryHeader) {
            gsap.from(galleryHeader, {
                y: 40,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: galleryHeader,
                    start: "top 88%",
                    once: true
                }
            });
        }

        const galleryItems = gsap.utils.toArray(
            ".travel-gallery__item"
        );

        galleryItems.forEach((item, index) => {
            gsap.from(item, {
                y: 36,
                scale: 0.97,
                opacity: 0,
                duration: 0.8,
                delay: (index % 3) * 0.08,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: item,
                    start: "top 88%",
                    once: true
                }
            });
        });

        // Travel Itinerary
        const itineraryHeader = document.querySelector(
            ".travel-itinerary .section-header"
        );

        if (itineraryHeader) {
            gsap.from(itineraryHeader, {
                y: 40,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: itineraryHeader,
                    start: "top 88%",
                    once: true
                }
            });
        }

        const itineraryItems = gsap.utils.toArray(
            ".travel-itinerary__item"
        );

        itineraryItems.forEach((item) => {
            gsap.from(item, {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    once: true
                }
            });
        });

        // Travel Includes
        const includesSection = document.querySelector(".travel-includes");

        if (includesSection) {
            const header = includesSection.querySelector(".section-header");

            if (header) {
                gsap.from(header, {
                    y: 40,
                    opacity: 0,
                    duration: 0.85,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: header,
                        start: "top 88%",
                        once: true
                    }
                });
            }

            const cards = gsap.utils.toArray(
                ".travel-includes__card"
            );

            cards.forEach((card, index) => {
                const cardHeader = card.querySelector(
                    ".travel-includes__card-header"
                );

                const listItems = card.querySelectorAll("li");

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        once: true
                    }
                });

                timeline
                    .from(cardHeader, {
                        x: index === 0 ? -35 : 35,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    })
                    .from(listItems, {
                        y: 18,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.07,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    }, "-=0.3");
            });
        }

        // Travel Booking
        const travelBooking = document.querySelector(".travel-booking");

        if (travelBooking) {
            const bookingContent = travelBooking.querySelector(
                ".travel-booking__content"
            );

            const bookingNotice = travelBooking.querySelector(
                ".travel-booking__notice"
            );

            if (bookingContent) {
                gsap.from(bookingContent, {
                    x: -50,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: bookingContent,
                        start: "top 88%",
                        once: true
                    }
                });
            }

            if (bookingNotice) {
                gsap.from(bookingNotice, {
                    x: 50,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: bookingNotice,
                        start: "top 88%",
                        once: true
                    }
                });
            }
        }

        // 動態內容插入後重新計算 ScrollTrigger
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }

    document.addEventListener(
        "travel-detail-rendered",
        animateTravelDetail
    );

    // Featured News
    function animateFeaturedNews() {
        const featuredCard = document.querySelector(
            ".news-featured__card"
        );

        if (!featuredCard) return;

        const media = featuredCard.querySelector(
            ".news-featured__media"
        );

        const content = featuredCard.querySelector(
            ".news-featured__content"
        );

        gsap.killTweensOf([media, content]);
        gsap.set([media, content], {
            clearProps: "transform,opacity"
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: featuredCard,
                start: "top 82%",
                once: true
            }
        });

        timeline
            .from(media, {
                x: -45,
                scale: 0.96,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                clearProps: "transform,opacity"
            })
            .from(content, {
                x: 45,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out",
                clearProps: "transform,opacity"
            }, "-=0.5");
    }

    document.addEventListener(
        "featured-news-rendered",
        animateFeaturedNews
    );

    // News Cards
    function animateNewsCards() {
        const newsCards = gsap.utils.toArray(".news-card");

        if (!newsCards.length) return;

        newsCards.forEach((card, index) => {
            const media = card.querySelector(".news-card__media");
            const body = card.querySelector(".news-card__body");

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    once: true
                },
                delay: (index % 3) * 0.08
            });

            timeline
                .from(media, {
                    y: 24,
                    scale: 0.96,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                })
                .from(body, {
                    y: 24,
                    opacity: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "-=0.4");
        });

        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }

    document.addEventListener(
        "news-cards-rendered",
        animateNewsCards
    );

    // News Detail
    function animateNewsDetail() {

        // Article Hero
        const articleHero = document.querySelector(".article-hero");

        if (articleHero) {

            const background = articleHero.querySelector(
                ".article-hero__background"
            );

            if (background) {
                gsap.fromTo(
                    background,
                    {
                        scale: 1.06,
                        opacity: 0
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.4,
                        ease: "power3.out",
                        clearProps: "transform,opacity"
                    }
                );
            }

            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            heroTimeline
                .from(".article-breadcrumb", {
                    y: 18,
                    opacity: 0,
                    duration: 0.55
                })
                .from("#articleCategory", {
                    y: 20,
                    opacity: 0,
                    duration: 0.55
                }, "-=0.2")
                .from(".article-hero__title", {
                    y: 50,
                    opacity: 0,
                    duration: 0.9
                }, "-=0.25")
                .from(".article-hero__meta-item", {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1
                }, "-=0.35");
        }

        // Article Content
        const articleContent = document.querySelector(
            "#articleContent"
        );

        if (articleContent) {

            const contentBlocks =
                articleContent.children;

            gsap.utils.toArray(contentBlocks).forEach((block) => {

                gsap.from(block, {
                    y: 28,
                    opacity: 0,
                    duration: 0.75,
                    ease: "power3.out",
                    clearProps: "transform,opacity",

                    scrollTrigger: {
                        trigger: block,
                        start: "top 90%",
                        once: true
                    }
                });

            });
        }

        // Article Author
        const articleAuthor = document.querySelector(
            ".article-author__inner"
        );

        if (articleAuthor) {

            const authorTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: articleAuthor,
                    start: "top 85%",
                    once: true
                }
            });

            authorTimeline
                .from(".article-author__avatar", {
                    scale: 0.85,
                    opacity: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                })
                .from(".article-author__content", {
                    x: 30,
                    opacity: 0,
                    duration: 0.75,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "-=0.35");
        }

        // Related Articles Header
        const relatedHeader = document.querySelector(
            ".article-related__header"
        );

        if (relatedHeader) {

            gsap.from(relatedHeader, {
                y: 36,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: relatedHeader,
                    start: "top 88%",
                    once: true
                }
            });
        }

        // Related Articles
        const relatedCards = gsap.utils.toArray(
            "#relatedArticles .article-related__card"
        );

        relatedCards.forEach((card, index) => {

            const media = card.querySelector(
                ".article-related__media"
            );

            const body = card.querySelector(
                ".article-related__body"
            );

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    once: true
                },
                delay: (index % 3) * 0.08
            });

            if (media) {
                timeline.from(media, {
                    y: 24,
                    scale: 0.96,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                });
            }

            if (body) {
                timeline.from(body, {
                    y: 24,
                    opacity: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    clearProps: "transform,opacity"
                }, "-=0.4");
            }
        });

        // 動態內容插入後重新計算 ScrollTrigger
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });

    }

    document.addEventListener(
        "news-detail-rendered",
        animateNewsDetail
    );

    // Contact Main
    const contactMain = document.querySelector(".contact-main");

    if (contactMain) {
        const contactForm = document.querySelector(".contact-form-area");
        const contactInfo = document.querySelector(".contact-info");

        if (contactForm) {
            gsap.from(contactForm, {
                x: -50,
                opacity: 0,
                duration: 0.95,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: contactForm,
                    start: "top 88%",
                    once: true
                }
            });
        }

        if (contactInfo) {
            gsap.from(".contact-info__card", {
                x: 45,
                opacity: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "transform,opacity",

                scrollTrigger: {
                    trigger: contactInfo,
                    start: "top 88%",
                    once: true
                }
            });
        }
    }


    // Contact Map
    const contactMap = document.querySelector(".contact-map");

    if (contactMap) {

        gsap.from(contactMap, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: contactMap,
                start: "top 88%",
                once: true
            }
        });
    }


    // Contact Transport
    if (document.querySelector(".contact-transport")) {

        animateCardParts(".contact-transport__card", {

            firstSelector: ".feature-card__icon",
            secondSelector: ".feature-card__content",

            firstAnimation: {
                y: 20,
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            },

            secondAnimation: {
                y: 24,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out"
            },

            overlap: "-=0.35"
        });
    }


    // Contact CTA
    const contactCta = document.querySelector(".contact-cta");

    if (contactCta) {

        gsap.from(".contact-cta__actions", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: ".contact-cta__actions",
                start: "top 90%",
                once: true
            }
        });
    }

    // FAQ Filter Tabs
    const faqFilterTabs = document.querySelector(
        ".faq .filter-tabs"
    );

    if (faqFilterTabs) {
        gsap.from(faqFilterTabs, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: faqFilterTabs,
                start: "top 90%",
                once: true
            }
        });
    }


    // FAQ Items
    const faqItems = gsap.utils.toArray(
        ".faq-list .faq-item"
    );

    faqItems.forEach((item) => {

        const icon = item.querySelector(
            ".faq-item__icon"
        );

        const title = item.querySelector(
            ".faq-item__title"
        );

        const arrow = item.querySelector(
            ".faq-item__arrow"
        );

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                once: true
            }
        });

        timeline
            .from(icon, {
                y: 16,
                scale: 0.9,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                clearProps: "transform,opacity"
            })
            .from(title, {
                y: 18,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                clearProps: "transform,opacity"
            }, "-=0.3")
            .from(arrow, {
                opacity: 0,
                duration: 0.4,
                ease: "power3.out",
                clearProps: "opacity"
            }, "-=0.3");
    });


    // FAQ CTA
    const faqCta = document.querySelector(
        ".faq-cta"
    );

    if (faqCta) {
        gsap.from(".faq-cta__actions", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",

            scrollTrigger: {
                trigger: ".faq-cta__actions",
                start: "top 90%",
                once: true
            }
        });
    }


});


