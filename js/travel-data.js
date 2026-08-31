const travelData = [

    {
        id: "iceland-golden-circle",

        country: "iceland",
        countryName: "冰島",

        title: "冰島黃金圈・極光追蹤 8 日",

        description:
            "經典冰島極光路線，涵蓋黃金圈三大奇景、藍湖溫泉、冰川健行，搭配每晚極光追蹤，適合首次追光者。",

        image: "images/tours/iceland-golden-circle.jpg",
        imageAlt: "冰島黃金圈與綠色極光",

        heroImage: "images/tours/detail/iceland-golden-circle.jpg",
        heroImageAlt: "冰島黃金圈與綠色極光",

        days: 8,
        nights: 7,

        groupSize: "6–12 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.9,
        reviews: 128,

        price: 158000,

        bestSeason: "9月–4月",

        overview:
            "這是一條專為首次追光者設計的經典路線。從雷克雅維克出發，沿著冰島最知名的黃金圈環線，白天探索辛格維利爾國家公園的板塊裂谷、間歇泉噴發奇景、黃金瀑布的雷霆萬鈞，晚上則在遠離光害的鄉間小鎮追尋極光蹤跡。行程涵蓋藍湖溫泉、塞里雅蘭瀑布、斯科加瀑布，以及索爾黑馬冰川健行。每晚都有專業極光嚮導帶隊外出追光，搭配極光預測 APP 即時調整路線，讓你用最高機率捕捉那道綠色奇蹟。",

        overviewNote:
            "適合一般旅客，無需特殊體能，每日步行約 2–4 公里",

        gallery: [
            {
                src: "images/tours/gallery/iceland-blue-lagoon.jpg",
                alt: "冰島藍湖地熱溫泉與黑色火山岩景觀",
                title: "BLUE LAGOON",
                caption: "藍湖地熱溫泉・冰島"
            },
            {
                src: "images/tours/gallery/iceland-gullfoss-waterfall.jpg",
                alt: "冬季冰島黃金瀑布與覆雪峽谷景觀",
                title: "GULLFOSS",
                caption: "黃金瀑布・冰島"
            },
            {
                src: "images/tours/gallery/iceland-glacier-lagoon.jpg",
                alt: "冰島冰河湖漂浮冰塊與休息中的海豹",
                title: "GLACIER LAGOON",
                caption: "傑古沙龍冰河湖・冰島"
            },
            {
                src: "images/tours/gallery/iceland-glacier-hiking.jpg",
                alt: "旅客穿著冰川健行裝備行走於冰島雪地冰川",
                title: "GLACIER HIKE",
                caption: "冰川健行・冰島"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達雷克雅維克 — 藍湖溫泉洗塵",
                description:
                    "抵達凱夫拉維克國際機場（KEF），專車接機前往藍湖溫泉，在乳藍色地熱泉水中放鬆旅途的疲憊。泡完溫泉後前往雷克雅維克市區，入住精品設計旅館。晚上在市區自由探索，享用冰島第一頓海鮮晚餐。",
                meals: "晚餐",
                hotel:
                    "雷克雅維克市中心四星精品旅館 Canopy by Hilton 或同級"
            },
            {
                day: 2,
                title: "黃金圈三大奇景 — 板塊裂谷 × 間歇泉 × 黃金瀑布",
                description:
                    "展開冰島經典黃金圈巡禮，走訪辛格維利爾國家公園、間歇泉地熱區與黃金瀑布，感受冰島最具代表性的自然景觀。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "黃金圈周邊特色旅館"
            },
            {
                day: 3,
                title: "南岸瀑布群 — 塞里雅蘭 × 斯科加雙瀑",
                description:
                    "沿冰島南岸前進，造訪塞里雅蘭瀑布與斯科加瀑布，欣賞冬季冰雪與瀑布交織的壯麗景色。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "南岸地區特色旅館"
            },
            {
                day: 4,
                title: "傑古沙龍冰河湖 — 鑽石冰沙灘",
                description:
                    "前往傑古沙龍冰河湖，搭乘水陸兩棲船穿梭巨大冰山之間，下午前往鑽石沙灘自由拍攝。晚間視天候安排極光追蹤。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "霍芬鎮周邊精品旅館"
            },
            {
                day: 5,
                title: "索爾黑馬冰川健行 — 行走萬年冰川",
                description:
                    "穿戴專業冰川裝備，在嚮導帶領下踏上索爾黑馬冰川，體驗冰川裂隙與藍冰地形。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "南岸地區特色旅館"
            },
            {
                day: 6,
                title: "祕境溫泉 × 地熱麵包 — 冰島人的日常",
                description:
                    "走進較少觀光客造訪的地熱區，體驗祕境溫泉與冰島傳統地熱烘焙文化。",
                meals: "早餐・晚餐",
                hotel:
                    "雷克雅維克市區旅館"
            },
            {
                day: 7,
                title: "自由日 × 告別晚餐 — 雷克雅維克深度探索",
                description:
                    "白天自由探索雷克雅維克，晚上享用告別晚餐，為旅程畫下溫暖句點。",
                meals: "早餐・晚餐",
                hotel:
                    "雷克雅維克市區旅館"
            },
            {
                day: 8,
                title: "賦歸 — 帶著極光記憶回家",
                description:
                    "早餐後依航班時間前往凱夫拉維克國際機場，結束冰島極光之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 7 晚精選住宿（含早餐）",
            "行程所列午晚餐",
            "全程 9 人座舒適專車與專業司導",
            "藍湖溫泉 Comfort 門票",
            "傑古沙龍冰河湖水陸兩棲船票",
            "索爾黑馬冰川健行裝備與嚮導",
            "祕密溫泉入場券",
            "每晚極光追蹤（專業嚮導與極光預測）",
            "機場來回接送",
            "旅行責任險 200 萬與意外醫療險 20 萬"
        ],

        excluded: [
            "國際機票（可協助代訂）",
            "冰島簽證費用（台灣護照免簽）",
            "第 6 天自由活動午餐與第 7 天自由活動午餐",
            "賞鯨、騎馬等自費行程",
            "個人消費（紀念品、酒水與小費）",
            "旅遊平安險（建議自行投保）"
        ],

        booking: {
            meetingPoint:
                "凱夫拉維克國際機場（KEF）入境大廳",

            meetingTime:
                "抵達日當天依航班時間安排接機，行前 7 天寄送詳細集合資訊",

            notices: [
                "冰島天氣變化極快，請攜帶防水防風外套、保暖中層、防水登山鞋",
                "極光為自然現象，無法保證 100% 看見，但我們每晚追蹤以最大化觀測機率",
                "部分行程需視天候調整順序，嚮導保有行程機動調整權",
                "建議攜帶相機腳架拍攝極光，可提前告知需借用器材",
                "冰島物價較高，建議攜帶約 ISK 30,000 零用金"
            ]
        },

        featured: true,

        tags: [
            "黃金圈景觀",
            "藍湖溫泉",
            "極光追蹤",
            "冰川健行"
        ]
    },

    {
        id: "iceland-south-coast",

        country: "iceland",
        countryName: "冰島",

        title: "冰島南岸・深度環島極光 12 日",

        description:
            "沿一號公路環島一圈，從南岸瀑布群到東岸峽灣，每晚在不同地貌捕捉極光，適合想拍遍冰島的攝影愛好者。",

        image: "images/tours/iceland-south-coast.jpg",
        imageAlt: "冰島冰河湖與極光",

        heroImage: "images/tours/detail/iceland-south-coast.jpg",
        heroImageAlt: "冰島南岸公路",

        days: 12,
        nights: 11,

        groupSize: "4–8 人",

        difficulty: "medium",
        difficultyName: "中等",

        rating: 4.95,
        reviews: 67,

        price: 228000,

        bestSeason: "10月–3月",

        overview:
            "深度環島是給真正想認識冰島的旅人的禮物。十二天旅程沿著一號公路逆時針環繞全島，從南岸史詩瀑布群出發，經過東岸峽灣的壯闊海岸線，北上米湖地熱區，再到北極海岸的鯨魚小鎮，最後穿越西部斯奈山半島回到雷克雅維克。每一天都在不同地貌的極光觀測點過夜——從冰河湖倒影到玄武岩海蝕洞，從火山口湖到北極海岸線，十一個極光之夜，每一夜都是不同的畫布。攝影嚮導全程帶隊，確保你在最好的時間點、最好的角度，拍下屬於你的冰島極光作品集。",

        overviewNote:
            "適合有一定旅行經驗者，部分路段需步行 3–5 公里",

        gallery: [
            {
                src: "images/tours/gallery/iceland-east-fjords-road.jpg",
                alt: "冰島海岸公路沿著覆雪山脈與峭壁蜿蜒",
                title: "EAST FJORDS",
                caption: "東部峽灣公路・冰島"
            },
            {
                src: "images/tours/gallery/iceland-fjord-boat.jpg",
                alt: "紅色船隻航行於冰島覆雪山脈環繞的峽灣",
                title: "FJORD CRUISE",
                caption: "峽灣巡航・冰島"
            },
            {
                src: "images/tours/gallery/iceland-geothermal-bath.jpg",
                alt: "旅客在黑色火山岩環繞的乳藍色地熱溫泉中泡湯",
                title: "GEOTHERMAL BATH",
                caption: "地熱溫泉・冰島"
            },
            {
                src: "images/tours/gallery/iceland-black-church.jpg",
                alt: "陰雲天空下佇立於海岸旁的冰島黑色木造教堂",
                title: "BLACK CHURCH",
                caption: "黑色教堂・冰島"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達雷克雅維克 — 藍湖迎賓",
                description:
                    "抵達凱夫拉維克國際機場（KEF），專車接機後前往藍湖溫泉，在火山熔岩環繞的乳藍色泉水中洗去旅途疲憊。傍晚入住雷克雅維克市中心旅館，享用冰島海鮮迎賓晚宴。",
                meals: "晚餐",
                hotel:
                    "雷克雅維克市中心四星精品旅館"
            },
            {
                day: 2,
                title: "黃金圈經典 — 板塊裂谷 × 間歇泉 × 黃金瀑布",
                description:
                    "走訪辛格維利爾國家公園，觀察歐亞與北美板塊交界形成的裂谷地形；接著前往蓋歇爾間歇泉區與黃金瀑布，欣賞冰島最具代表性的自然奇景。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "黃金圈地區特色旅館"
            },
            {
                day: 3,
                title: "南岸瀑布群 — 塞里雅蘭 × 斯科加 × 黑沙灘",
                description:
                    "沿南岸公路造訪可繞行瀑布後方的塞里雅蘭瀑布，以及水勢磅礴的斯科加瀑布。下午前往雷尼斯黑沙灘，欣賞玄武岩柱與海蝕岩景觀。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "維克鎮特色旅館"
            },
            {
                day: 4,
                title: "傑古沙龍冰河湖 — 鑽石沙灘 × 遊船",
                description:
                    "前往傑古沙龍冰河湖，搭船穿梭於大小不一的漂浮冰山之間。接著漫步鑽石沙灘，拍攝晶瑩冰塊散落在黑色沙灘上的獨特景色。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "霍芬鎮周邊精品旅館"
            },
            {
                day: 5,
                title: "東岸峽灣 — 蜿蜒海岸線 × 馴鹿邂逅",
                description:
                    "沿著冰島東岸峽灣前進，欣賞高山、海灣與蜿蜒公路交織的壯闊景觀。途中留意棲息於東部地區的野生馴鹿，並在寧靜漁村稍作停留。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "東部峽灣地區特色旅館"
            },
            {
                day: 6,
                title: "米湖地熱區 — 火山地貌 × 地熱溫泉",
                description:
                    "探索米湖周邊的火山口、熔岩地形與冒煙地熱區，感受冰島北部活躍的地質景觀。傍晚前往地熱溫泉，在雪景環繞下放鬆身心。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "米湖地區溫泉旅館"
            },
            {
                day: 7,
                title: "北極海岸 — 胡薩維克賞鯨 × 眾神瀑布",
                description:
                    "前往胡薩維克搭船尋找座頭鯨、鬚鯨與海豚的蹤跡，感受北極海域的豐富生態。下午造訪半月形的眾神瀑布，欣賞冰雪與瀑布交織的景致。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "阿克雷里市區旅館"
            },
            {
                day: 8,
                title: "西北部 — 教會山日落 × 海豹沙灘",
                description:
                    "穿越冰島西北部遼闊原野，前往海岸觀察棲息在沙洲上的海豹。傍晚抵達教會山，以瀑布、雪山與夕陽構成經典攝影畫面。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "斯奈山半島特色旅館"
            },
            {
                day: 9,
                title: "斯奈山半島深度 — 黑教堂 × 海蝕洞 × 燈塔",
                description:
                    "深入探索斯奈山半島，走訪布迪爾黑教堂、玄武岩海岸與天然海蝕洞。沿海岸前往燈塔，在火山地貌與北大西洋之間尋找攝影題材。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "斯奈山半島特色旅館"
            },
            {
                day: 10,
                title: "冰島西部 — 熔岩瀑布 × 地熱秘境",
                description:
                    "前往赫倫瀑布，欣賞清澈泉水從熔岩層間流出的特殊景觀。下午造訪西部地熱區，在遼闊雪原與天然熱泉之間感受冰島的地熱能量。",
                meals: "早餐・午餐",
                hotel:
                    "博爾加內斯地區特色旅館"
            },
            {
                day: 11,
                title: "雷克雅維克自由日 — 北歐設計之都",
                description:
                    "返回雷克雅維克自由探索，可漫步彩虹街、參觀哈爾格林姆教堂、音樂廳與港灣區。晚上享用告別晚餐，為深度環島旅程畫下句點。",
                meals: "早餐・晚餐",
                hotel:
                    "雷克雅維克市中心四星精品旅館"
            },
            {
                day: 12,
                title: "賦歸",
                description:
                    "早餐後依航班時間搭乘專車前往凱夫拉維克國際機場，結束冰島深度環島與極光攝影之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 11 晚精選住宿（含早餐）",
            "行程所列午晚餐",
            "全程 9 人座舒適專車與專業中文攝影嚮導兼司機",
            "藍湖溫泉 Comfort 門票",
            "傑古沙龍冰河湖遊船",
            "胡薩維克賞鯨團（3 小時）",
            "米湖天然溫泉入場券",
            "每晚極光追蹤（含攝影指導）",
            "機場來回接送",
            "旅行責任險 200 萬與意外醫療險 20 萬"
        ],

        excluded: [
            "國際機票（可協助代訂）",
            "自由活動日餐食",
            "個人消費與小費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "凱夫拉維克國際機場（KEF）入境大廳",

            meetingTime:
                "抵達日依航班時間安排接機，行前 7 天寄送詳細資訊",

            notices: [
                "此行程車程較長，每日車程約 2.5 小時，沿途風景壯麗不無聊",
                "東岸峽灣路段蜿蜒，易暈車者請自備暈車藥",
                "冰島冬季部分路段可能因天候封閉，嚮導會即時調整路線",
                "攝影嚮導會全程提供極光拍攝指導，歡迎攜帶單眼或微單相機",
                "建議攜帶三腳架、快門線與備用電池（低溫耗電快）"
            ]
        },

        featured: true,

        tags: [
            "一號環島公路",
            "傑古沙龍冰河湖",
            "鑽石沙灘",
            "極光攝影"
        ]
    },

    {
        id: "iceland-snaefellsnes",

        country: "iceland",
        countryName: "冰島",

        title: "冰島斯奈山・極光秘境 6 日",

        description:
            "短天數極光輕旅行，聚焦斯奈山半島，走訪教會山經典極光拍攝點，適合時間有限但仍想追光的旅人。",

        image: "images/tours/iceland-snaefellsnes.jpg",
        imageAlt: "冰島教會山與極光",

        heroImage: "images/tours/iceland-snaefellsnes.jpg",
        heroImageAlt: "冰島教會山與極光",

        days: 6,
        nights: 5,

        groupSize: "8–15 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.85,
        reviews: 42,

        price: 108000,

        bestSeason: "10月–3月",

        overview:
            "時間有限不代表體驗打折。這條六天濃縮路線鎖定冰島西部的斯奈山半島——被譽為「小冰島」的它，濃縮了冰島幾乎所有地貌：冰川、火山、熔岩原、黑沙灘、玄武岩柱、海蝕洞與峽灣。每日行程安排鬆緊有致，白天探訪景點，傍晚回到精選旅館休息，入夜後前往教會山等經典機位進行極光拍攝。特別安排一晚在斯奈山冰川國家公園旁的極光小屋住宿，走出門就能看見極光，不需要長途夜車奔波。",

        overviewNote:
            "適合所有旅客，每日步行 1–3 公里",

        gallery: [
            {
                src: "images/tours/gallery/iceland-seal-watching.jpg",
                alt: "三隻海豹停留在冰島海岸的沙灘上",
                title: "SEAL WATCHING",
                caption: "海豹觀察・冰島"
            },
            {
                src: "images/tours/gallery/iceland-coastal-arch.jpg",
                alt: "冰島海岸的黑色岩拱與海蝕岩柱",
                title: "COASTAL ARCH",
                caption: "海岸岩拱・冰島"
            },
            {
                src: "images/tours/gallery/iceland-black-pebble-beach.jpg",
                alt: "冰島黑色卵石海灘與遠方覆霧山脈",
                title: "BLACK BEACH",
                caption: "黑色卵石海灘・冰島"
            },
            {
                src: "images/tours/gallery/iceland-cliffside-lighthouse.jpg",
                alt: "橘色燈塔與房屋矗立在冰島海岸峭壁上",
                title: "LIGHTHOUSE",
                caption: "海岸燈塔・冰島"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達雷克雅維克 — 藍湖溫泉",
                description:
                    "抵達凱夫拉維克國際機場後由專車接機，前往藍湖溫泉放鬆。傍晚入住雷克雅維克市中心旅館，享用冰島海鮮晚餐。",
                meals: "晚餐",
                hotel:
                    "雷克雅維克市中心四星精品旅館"
            },
            {
                day: 2,
                title: "斯奈山半島 — 海豹沙灘 × 黑教堂",
                description:
                    "驅車前往斯奈山半島，造訪海豹經常出沒的海岸與布迪爾黑教堂。夜晚視天候前往半島上的低光害地點進行極光追蹤。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "斯奈山半島特色旅館"
            },
            {
                day: 3,
                title: "教會山全日 — 瀑布 × 極光 × 健行",
                description:
                    "以教會山及其周邊瀑布為主要探索區域，白天沿步道健行並尋找理想攝影角度。入夜後再次返回教會山，等待極光出現在山峰上空。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "斯奈山半島極光小屋"
            },
            {
                day: 4,
                title: "斯奈菲爾冰川 × Vatnshellir 熔岩洞",
                description:
                    "進入斯奈菲爾冰川國家公園，欣賞冰川、火山與熔岩原形成的多層次地貌。接著前往 Vatnshellir 熔岩洞，在導覽帶領下深入地下熔岩世界，下午再沿海岸步道欣賞玄武岩峭壁與海蝕地形。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "斯奈山半島特色旅館"
            },
            {
                day: 5,
                title: "橘色燈塔 × 返回雷克雅維克",
                description:
                    "前往半島海岸的橘色燈塔，眺望北大西洋與黑色火山岩海岸。午後返回雷克雅維克，晚上享用旅程告別晚餐。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "雷克雅維克市中心四星精品旅館"
            },
            {
                day: 6,
                title: "賦歸",
                description:
                    "早餐後依航班時間前往凱夫拉維克國際機場，結束斯奈山半島極光秘境之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 5 晚精選住宿（含早餐）",
            "行程所列餐食",
            "全程 20 人座小巴與專業中文司導",
            "藍湖溫泉 Comfort 門票",
            "Vatnshellir 火山熔岩洞導覽",
            "每晚極光追蹤",
            "機場來回接送",
            "旅行責任險"
        ],

        excluded: [
            "國際機票",
            "個人消費與小費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "凱夫拉維克國際機場（KEF）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊",

            notices: [
                "斯奈山半島天氣變化快速，請備妥防風防水裝備",
                "極光拍攝點就在旅館周邊，不用長途夜車",
                "建議攜帶相機與腳架"
            ]
        },

        featured: false,

        tags: [
            "斯奈山半島",
            "教會山極光",
            "海豹沙灘",
            "小團旅行"
        ]
    },

    {
        id: "finland-rovaniemi-glass-igloo",

        country: "finland",
        countryName: "芬蘭",

        title: "芬蘭拉普蘭・玻璃屋極光 7 日",

        description:
            "芬蘭最夢幻的極光體驗。入住玻璃圓頂屋，在溫暖的被窩裡仰望極光，搭配馴鹿雪橇與聖誕老人村，適合蜜月與慶祝之旅。",

        image: "images/tours/finland-rovaniemi.jpg",
        imageAlt: "芬蘭雪林中的木屋與馴鹿",

        heroImage: "images/tours/detail/finland-glass-house.jpg",
        heroImageAlt: "芬蘭玻璃屋極光",

        days: 7,
        nights: 6,

        groupSize: "4–10 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.95,
        reviews: 96,

        price: 172000,

        bestSeason: "9月–3月",

        overview:
            "不需要在零下 20 度的夜裡追著極光跑。這趟芬蘭拉普蘭之旅的核心，就是躺在玻璃圓頂屋的溫暖被窩裡，透過全景玻璃天花板，靜靜等待極光從頭頂流過。除了極光，行程還安排了哈士奇雪橇奔馳在白樺林間的刺激、馴鹿雪橇悠閒穿越雪原的寧靜、聖誕老人村跨越北極圈的儀式感，以及拉普蘭雪原上的冬季體驗。連續三晚入住玻璃圓頂屋，讓你不必奔波追光，也能在溫暖房間裡等待夜空出現那道夢幻的綠色光芒。",

        overviewNote:
            "適合所有旅客，無需特殊體能",

        gallery: [
            {
                src: "images/tours/gallery/finland-husky-sledding.jpg",
                alt: "哈士奇犬隊拉著雪橇奔跑於芬蘭雪林",
                title: "HUSKY SLEDDING",
                caption: "哈士奇雪橇・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-reindeer-sleigh.jpg",
                alt: "馴鹿拉著木製雪橇行走於芬蘭覆雪森林",
                title: "REINDEER SLEIGH",
                caption: "馴鹿雪橇・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-snow-village.jpg",
                alt: "燈光點亮芬蘭雪地中的木造小屋街道",
                title: "SNOW VILLAGE",
                caption: "雪地村落・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-lakeside-sauna.jpg",
                alt: "芬蘭雪地湖畔冒著蒸氣的木造桑拿小屋",
                title: "LAKESIDE SAUNA",
                caption: "湖畔桑拿・芬蘭"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達赫爾辛基 — 設計之都漫步",
                description:
                    "抵達赫爾辛基萬塔機場後前往市區旅館。下午漫步設計街區並參觀岩石教堂，晚上享用芬蘭鮭魚湯與馴鹿肉迎賓晚宴。",
                meals: "晚餐",
                hotel:
                    "赫爾辛基市中心四星設計旅館"
            },
            {
                day: 2,
                title: "飛往伊瓦洛 — 玻璃圓頂屋入住",
                description:
                    "搭乘國內線飛往伊瓦洛，抵達後專車前往拉普蘭荒野旅宿。入住玻璃圓頂屋，入夜後可在溫暖房間內仰望星空與極光。",
                meals: "早餐・晚餐",
                hotel:
                    "伊瓦洛玻璃圓頂極光屋"
            },
            {
                day: 3,
                title: "哈士奇雪橇 × 馴鹿雪橇",
                description:
                    "上午拜訪哈士奇農場，學習雪橇操控並穿越雪林。下午搭乘馴鹿雪橇緩慢前行，認識拉普蘭傳統交通方式與馴鹿文化。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "伊瓦洛玻璃圓頂極光屋"
            },
            {
                day: 4,
                title: "雪鞋穿越 × 冰釣體驗",
                description:
                    "穿上雪鞋深入寧靜森林，由嚮導介紹北極圈的冬季生態。下午在結冰湖面鑿開冰洞體驗冰釣，並享用營火熱飲。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "伊瓦洛玻璃圓頂極光屋"
            },
            {
                day: 5,
                title: "聖誕老人村 × 北極圈線",
                description:
                    "前往羅瓦涅米聖誕老人村，跨越北極圈線並自由參觀郵局與特色商店。下午入住特色旅館並體驗芬蘭桑拿，在溫暖蒸氣中放鬆身心，晚上自由等待極光。",
                meals: "早餐・午餐",
                hotel:
                    "羅瓦涅米特色旅館"
            },
            {
                day: 6,
                title: "破冰船體驗 × 冰海漂浮（可選）",
                description:
                    "前往波的尼亞灣參加破冰船航程，觀察船體穿越冰封海面的過程。旅客可依自身狀況選擇穿著保暖救生衣，體驗安全的冰海漂浮。",
                meals: "早餐",
                hotel:
                    "羅瓦涅米特色旅館"
            },
            {
                day: 7,
                title: "賦歸",
                description:
                    "早餐後依航班時間前往羅瓦涅米機場，轉機返回，結束芬蘭拉普蘭玻璃屋極光之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 6 晚精選住宿（含 3 晚玻璃圓頂屋）",
            "行程所列餐食",
            "赫爾辛基－伊瓦洛／羅瓦涅米－赫爾辛基國內線機票",
            "全程專車與專業中文導遊",
            "哈士奇雪橇 5 公里",
            "馴鹿雪橇體驗",
            "雪鞋健行與嚮導",
            "冰釣體驗",
            "破冰船航程體驗",
            "聖誕老人村門票",
            "芬蘭桑拿體驗"
        ],

        excluded: [
            "國際機票",
            "第 6 天自由活動餐食",
            "個人消費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "赫爾辛基萬塔機場（HEL）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊",

            notices: [
                "玻璃圓頂屋數量有限，建議提前 3～6 個月預訂",
                "芬蘭國內線行李限重較少，建議精簡行李",
                "冰海漂浮為自願參加，可依個人身體狀況決定是否體驗",
                "北極圈內冬季日照短（約 4～5 小時），行程會因應調整"
            ]
        },

        featured: true,

        tags: [
            "玻璃圓頂屋",
            "馴鹿雪橇",
            "聖誕老人村",
            "極光追蹤"
        ]
    },

    {
        id: "finland-levi-ski-aurora",

        country: "finland",
        countryName: "芬蘭",

        title: "芬蘭列維・滑雪追光雙享 8 日",

        description:
            "白天滑雪、晚上追極光。芬蘭最大滑雪度假村 Levi，專業教練帶領，還能在極光下滑雪，適合熱愛運動的玩家。",

        image: "images/tours/finland-levi.jpg",
        imageAlt: "芬蘭列維雪地森林與極光",

        heroImage: "images/tours/detail/finland-levi.jpg",
        heroImageAlt: "芬蘭列維雪地森林與極光",

        days: 8,
        nights: 7,

        groupSize: "6–12 人",

        difficulty: "medium",
        difficultyName: "中等",

        rating: 4.8,
        reviews: 38,

        price: 145000,

        bestSeason: "12月–3月",

        overview:
            "誰說追光跟滑雪只能二選一？在芬蘭列維（Levi），你可以早上在芬蘭最大的滑雪場滑個痛快，晚上再到山頂觀測站等極光。行程安排每天上午由專業滑雪教練帶領（分級教學、初學者可參加），下午自由滑雪或參加冰釣、雪地摩托等活動。傍晚在度假村木屋餐廳享用拉普蘭美食，入夜後前往遠離光害的極光觀測點——有時極光甚至直接出現在滑雪道上方，讓你體驗「極光滑雪」的夢幻時刻。最後一晚在傳統芬蘭煙燻桑拿中徹底放鬆，為這趟滑雪追光之旅畫下完美句點。",

        overviewNote:
            "適合有運動習慣者，滑雪不需基礎（可從初學開始）",

        gallery: [
            {
                src: "images/tours/gallery/finland-levi-skiing.jpg",
                alt: "旅客穿著滑雪裝備滑行於芬蘭覆雪森林",
                title: "LEVI SKIING",
                caption: "列維滑雪・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-reindeer.jpg",
                alt: "兩隻馴鹿躺臥在陽光照耀的芬蘭雪地",
                title: "REINDEER",
                caption: "馴鹿觀察・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-ice-fishing.jpg",
                alt: "旅客坐在結冰湖面的圓形冰洞旁垂釣",
                title: "ICE FISHING",
                caption: "冰湖垂釣・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-forest-cabin.jpg",
                alt: "暖色燈光照亮芬蘭覆雪森林中的木屋",
                title: "FOREST CABIN",
                caption: "雪林木屋・芬蘭"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達基蒂萊 — 列維度假村",
                description:
                    "抵達基蒂萊機場後搭乘專車前往列維度假村。入住滑雪進出便利的木屋套房，晚上在度假村餐廳享用拉普蘭風味迎賓晚宴。",
                meals: "晚餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 2,
                title: "滑雪日 — 分級教學 × 初級坡道",
                description:
                    "由專業教練介紹滑雪裝備、安全規則與基本動作，再依程度分組進行練習。初學者可在平緩坡道熟悉轉彎、減速與煞停技巧。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 3,
                title: "滑雪進階 — 中級坡道挑戰",
                description:
                    "在教練帶領下前往中級坡道，練習速度控制、連續轉彎與不同雪況的應對方式。傍晚返回度假村休息並自由使用設施。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 4,
                title: "冰釣 × 哈士奇雪橇",
                description:
                    "上午前往冰封湖泊體驗冰釣，學習鑿冰與使用傳統釣具。下午拜訪哈士奇農場，乘坐犬拉雪橇穿越拉普蘭雪林。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 5,
                title: "滑雪日 — 夜滑 × 極光",
                description:
                    "白天自由選擇適合自己的雪道練習，傍晚體驗燈光照明下的夜間滑雪。結束後前往低光害地區，等待極光出現在雪山上空。",
                meals: "早餐・午餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 6,
                title: "馴鹿農場 × 薩米文化日",
                description:
                    "造訪馴鹿農場，了解馴鹿飼養方式與薩米人的生活文化。搭乘馴鹿雪橇穿越森林，並在傳統帳篷內享用熱飲與簡餐。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 7,
                title: "終極滑雪 × 煙燻桑拿",
                description:
                    "把握最後一天自由挑戰喜愛的滑雪路線，享受雪山與森林景觀。下午體驗芬蘭傳統煙燻桑拿，舒緩多日活動後的疲勞。",
                meals: "早餐・晚餐",
                hotel:
                    "列維滑雪度假村木屋套房"
            },
            {
                day: 8,
                title: "賦歸",
                description:
                    "早餐後搭乘專車前往基蒂萊機場，結束芬蘭列維滑雪與極光之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 7 晚滑雪度假村木屋套房（含早餐）",
            "行程所列餐食",
            "滑雪通行證（Levi Ski Resort）",
            "滑雪教學（每次 2 小時）",
            "滑雪裝備租借（雪板、雪鞋與安全帽）",
            "哈士奇雪橇體驗",
            "馴鹿農場參觀與雪橇",
            "冰釣體驗",
            "芬蘭桑拿與煙燻桑拿",
            "行程安排極光觀測體驗",
            "基蒂萊機場接送"
        ],

        excluded: [
            "國際機票與赫爾辛基－基蒂萊國內機票",
            "雪地摩托（自費約 €120）",
            "第 5 天晚餐與第 7 天午餐",
            "滑雪服裝（可租借）",
            "個人消費與小費",
            "旅遊平安險（含滑雪意外的旅遊險建議投保）"
        ],

        booking: {
            meetingPoint:
                "基蒂萊機場（KTT）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊",

            notices: [
                "初學者完全不用擔心，專業教練從零開始教",
                "北極圈冬季日照短，滑雪時間會安排在光線最好的時段",
                "夜間滑雪為自選活動，無需額外費用",
                "建議投保含滑雪意外的旅遊平安險"
            ]
        },

        featured: false,

        tags: [
            "Levi 滑雪度假村",
            "夜間極光滑雪",
            "冰釣體驗",
            "雪地活動"
        ]
    },

    {
        id: "finland-inari-wilderness",

        country: "finland",
        countryName: "芬蘭",

        title: "芬蘭伊納里・荒野極光營地 5 日",

        description:
            "極致荒野體驗。深入伊納里湖區，在遠離文明的極光營地過夜，與薩米人一起生活，適合追求純粹自然的探險者。",

        image: "images/tours/finland-inari.jpg",
        imageAlt: "芬蘭伊納里荒野木屋與極光",

        heroImage: "images/tours/detail/finland-inari.jpg",
        heroImageAlt: "芬蘭伊納里荒野木屋與極光",

        days: 5,
        nights: 4,

        groupSize: "2–6 人",

        difficulty: "advanced",
        difficultyName: "進階",

        rating: 4.9,
        reviews: 53,

        price: 98000,

        bestSeason: "1月–3月",

        overview:
            "這不是一般的極光旅行——這是一場深入拉普蘭北境的荒野探險。五天四夜，你將前往芬蘭最北端的伊納里湖區，在遠離城市光害的雪原與森林中與極光共處。行程從薩米文化導覽開始，認識北極圈的生活方式與傳統文化；接著搭乘雪地摩托深入冰封湖區，在荒野營地木屋度過兩晚，白天體驗冰釣與雪鞋健行，夜晚則圍著營火等待極光。最後一夜入住伊納里湖區的玻璃圓頂小屋，在溫暖房間裡仰望北極夜空，為這場荒野旅程留下最後一道極光記憶。",

        overviewNote:
            "需有戶外活動經驗，能忍受極寒環境，荒野營地住宿條件簡單",

        gallery: [
            {
                src: "images/tours/gallery/finland-inari-snowmobile.jpg",
                alt: "旅客駕駛雪地摩托車穿越芬蘭廣闊雪原",
                title: "SNOWMOBILE",
                caption: "雪地摩托車・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-wilderness-hut.jpg",
                alt: "木造荒野小屋內燃燒著營火並鋪設獸皮坐墊",
                title: "WILDERNESS HUT",
                caption: "荒野營火小屋・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-ice-lake-fishing.jpg",
                alt: "旅客站在結冰湖面垂釣，雪地上放著數尾魚",
                title: "ICE LAKE FISHING",
                caption: "冰湖垂釣・芬蘭"
            },
            {
                src: "images/tours/gallery/finland-wilderness-lodge.jpg",
                alt: "現代木造旅宿坐落於芬蘭覆雪森林",
                title: "WILDERNESS LODGE",
                caption: "荒野旅宿・芬蘭"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達伊瓦洛 — 薩米文化導覽",
                description:
                    "抵達伊瓦洛機場後前往伊納里湖畔的薩米文化中心 Siida，在當地嚮導帶領下認識北極生存智慧與馴鹿文化。晚上於湖岸進行首次極光觀測。",
                meals: "晚餐",
                hotel:
                    "伊納里湖畔精品旅館"
            },
            {
                day: 2,
                title: "雪地摩托 × 荒野營地",
                description:
                    "接受安全說明後駕駛雪地摩托車穿越森林與冰封湖泊，深入遠離城鎮光害的荒野。傍晚抵達營地，在營火旁享用熱食並等待極光。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "伊納里荒野營地木屋"
            },
            {
                day: 3,
                title: "冰釣 × 荒野健行",
                description:
                    "在嚮導帶領下前往結冰湖面體驗冰釣，學習辨認冰層與使用傳統釣具。下午穿著雪鞋探索森林，觀察北極地區的動物足跡。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "伊納里荒野營地木屋"
            },
            {
                day: 4,
                title: "返回文明 × 玻璃圓頂小屋",
                description:
                    "上午離開荒野營地返回伊納里，途中欣賞冰封湖泊與雪林景觀。下午入住玻璃圓頂小屋，在房內享受最後一晚極光觀測。",
                meals: "早餐・晚餐",
                hotel:
                    "伊納里玻璃圓頂極光屋"
            },
            {
                day: 5,
                title: "賦歸",
                description:
                    "早餐後搭乘專車前往伊瓦洛機場，結束芬蘭伊納里荒野極光營地之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 4 晚住宿（1 晚湖畔旅館、2 晚荒野營地木屋與 1 晚玻璃圓頂小屋）",
            "行程所列餐食",
            "全程專車與專業野外嚮導",
            "Siida 薩米文化中心導覽",
            "雪地摩托租借",
            "荒野活動裝備（雪鞋、冰釣裝備與戶外炊具）",
            "伊瓦洛機場接送"
        ],

        excluded: [
            "國際與國內機票",
            "第 4 天午餐",
            "個人消費",
            "旅遊平安險（建議包含極地戶外活動）"
        ],

        booking: {
            meetingPoint:
                "伊瓦洛機場（IVL）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊與裝備清單",

            notices: [
                "荒野營地住宿條件較市區旅館簡單，請以輕便行李與實用裝備為主",
                "極地冬季氣溫可能非常寒冷，請務必備妥防風、防水與保暖衣物",
                "部分活動需長時間停留戶外，請依自身體能與健康狀況評估參加",
                "雪地摩托、冰釣與雪鞋活動將由專業嚮導帶領，並依現場安全條件調整",
                "行程可能依天候、積雪與冰層狀況機動調整"
            ]
        },

        featured: false,

        tags: [
            "伊納里湖極光",
            "荒野極光營地",
            "雪鞋探險",
            "薩米文化"
        ]
    },

    {
        id: "norway-tromso-fjord",

        country: "norway",
        countryName: "挪威",

        title: "挪威特羅姆瑟・峽灣極光 9 日",

        description:
            "深入挪威北境峽灣，白天巡航雪山海岸，夜晚跟隨專業嚮導深入低光害地區追尋極光，搭配薩米文化與北極冬季體驗。",

        image: "images/tours/norway-tromso.jpg",
        imageAlt: "挪威峽灣雪山與郵輪",

        heroImage: "images/tours/detail/norway-tromso.jpg",
        heroImageAlt: "挪威峽灣雪山",

        days: 9,
        nights: 8,

        groupSize: "6–10 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.92,
        reviews: 84,

        price: 189000,

        bestSeason: "9月–3月",

        overview:
            "這是一趟深入挪威北境的峽灣極光之旅。九天八夜，以北極圈城市特羅姆瑟為起點，白天乘船穿梭於壯麗峽灣與雪山之間，感受北挪威冬季海岸的遼闊景色；入夜後則跟隨專業嚮導遠離城市燈光，依據天候與雲層變化尋找最適合觀測極光的地點。行程也安排雪鞋健行、狗拉雪橇與馴鹿雪橇等北極冬季體驗，在海岸、森林與雪原之間，從不同角度感受特羅姆瑟的冬日魅力。",

        overviewNote:
            "適合一般旅客，以峽灣巡航、輕度健行與北極冬季體驗為主",

        gallery: [
            {
                src: "images/tours/gallery/norway-tromso-aurora.jpg",
                alt: "綠色與紫色極光倒映在挪威雪山峽灣水面",
                title: "TROMSØ AURORA",
                caption: "特羅姆瑟極光・挪威"
            },
            {
                src: "images/tours/gallery/norway-fjellheisen-cable-car.jpg",
                alt: "纜車行駛於挪威覆雪山坡，後方可見峽灣與群山",
                title: "FJELLHEISEN",
                caption: "菲耶爾纜車・挪威"
            },
            {
                src: "images/tours/gallery/norway-arctic-fjord.jpg",
                alt: "挪威雪山峽灣岸邊坐落著一間紅色木屋",
                title: "ARCTIC FJORD",
                caption: "北極峽灣・挪威"
            },
            {
                src: "images/tours/gallery/norway-husky-experience.jpg",
                alt: "數隻哈士奇犬站在挪威雪山環繞的雪地",
                title: "HUSKY EXPERIENCE",
                caption: "哈士奇體驗・挪威"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達特羅姆瑟 — 北極城市初探",
                description:
                    "抵達特羅姆瑟機場後前往市中心峽灣景觀旅館。下午自由漫步港口區並參觀北極大教堂，晚上享用挪威海鮮迎賓晚宴。",
                meals: "晚餐",
                hotel:
                    "特羅姆瑟市中心峽灣景觀四星旅館"
            },
            {
                day: 2,
                title: "特羅姆瑟城市導覽 × 北極體驗",
                description:
                    "展開特羅姆瑟城市探索，漫步港灣與市中心街區，認識這座北極圈城市的歷史與生活風貌。下午前往 Polaria 北極體驗中心，進一步了解北極自然環境與生態；傍晚搭乘 Fjellheisen 纜車登上山頂觀景台，從高處眺望特羅姆瑟、峽灣與周邊雪山。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "特羅姆瑟市中心四星旅館"
            },
            {
                day: 3,
                title: "峽灣郵輪白日巡航 × 海釣",
                description:
                    "搭乘峽灣郵輪航行於雪山環繞的北極海域，沿途觀察海鳥與海岸聚落。船上安排簡易海釣體驗，並享用以當地食材製作的午餐。",
                meals: "早餐・午餐",
                hotel:
                    "特羅姆瑟市中心峽灣景觀四星旅館"
            },
            {
                day: 4,
                title: "薩米文化村 × 內陸極光",
                description:
                    "前往薩米文化村認識馴鹿放牧、傳統服飾與北極圈生活方式。晚間深入光害較少的內陸地區，依雲量與極光預測調整追光地點。",
                meals: "早餐・晚餐",
                hotel:
                    "特羅姆瑟市中心峽灣景觀四星旅館"
            },
            {
                day: 5,
                title: "靈恩峽灣 — 北極阿爾卑斯",
                description:
                    "前往靈恩峽灣，欣賞陡峭雪峰、海灣與冰雪村落組成的北極景致。沿途安排短程健行與觀景停留，晚上於峽灣附近等待極光。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "靈恩峽灣景觀旅館"
            },
            {
                day: 6,
                title: "峽灣健行 × 最後一夜追光",
                description:
                    "沿峽灣步道進行輕度健行，從不同高度眺望北極海岸與雪山。入夜後由專業嚮導帶隊進行最後一次極光追蹤，並提供熱飲與拍攝協助。",
                meals: "早餐・午餐",
                hotel:
                    "靈恩峽灣景觀旅館"
            },
            {
                day: 7,
                title: "狗拉雪橇 × 北極動物日",
                description:
                    "拜訪哈士奇營地並學習操控雪橇，穿越雪原與森林。下午前往北極動物園區，觀察適應寒冷氣候的北方動物。",
                meals: "早餐・午餐",
                hotel:
                    "特羅姆瑟市中心峽灣景觀四星旅館"
            },
            {
                day: 8,
                title: "自由日 × 告別晚宴",
                description:
                    "白天自由探索特羅姆瑟，可選擇參觀博物館、咖啡館或選購北歐紀念品。晚上集合享用告別晚宴，回顧旅程中的峽灣與極光記憶。",
                meals: "早餐・晚餐",
                hotel:
                    "特羅姆瑟市中心峽灣景觀四星旅館"
            },
            {
                day: 9,
                title: "賦歸",
                description:
                    "早餐後依航班時間前往特羅姆瑟機場，結束挪威峽灣與極光之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 8 晚精選住宿（含早餐）",
            "行程所列餐食",
            "峽灣巡航體驗",
            "陸地極光追蹤（含專業攝影）",
            "全程專車與專業中文導遊",
            "Fjellheisen 山頂纜車",
            "薩米文化村體驗",
            "狗拉雪橇體驗",
            "Polaria 水族館門票",
            "機場接送"
        ],

        excluded: [
            "國際與國內機票",
            "賞鯨團（自費，約 NOK 1,500）",
            "第 3、6、7 天晚餐",
            "個人消費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "特羅姆瑟機場（TOS）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊",

            notices: [
                "峽灣巡航將依當日海況與天候調整航線，容易暈船者建議提前準備暈船用品",
                "冬季戶外活動時間較長，請準備防風、防水與足夠保暖的衣物",
                "陸地極光追蹤地點將依雲量、天候與道路狀況由嚮導彈性調整",
                "挪威物價較高，可依個人消費習慣準備適量零用金"
            ]
        },

        featured: true,

        tags: [
            "峽灣巡航體驗",
            "陸地追光",
            "薩米文化村",
            "北極大教堂"
        ]
    },

    {
        id: "norway-lofoten-photography",

        country: "norway",
        countryName: "挪威",

        title: "挪威羅弗敦・極光攝影大師班 10 日",

        description:
            "由職業極光攝影師全程帶隊。在羅弗敦群島的漁屋基地，白天學習極光攝影技術，晚上實戰拍攝山海交錯間的極光。",

        image: "images/tours/norway-lofoten.jpg",
        imageAlt: "挪威羅弗敦群島漁村與極光",

        heroImage: "images/tours/detail/norway-lofoten.jpg",
        heroImageAlt: "挪威羅弗敦群島漁村與極光",

        days: 10,
        nights: 9,

        groupSize: "2–6 人",

        difficulty: "medium",
        difficultyName: "中等",

        rating: 4.97,
        reviews: 31,

        price: 215000,

        bestSeason: "10月–2月",

        overview:
            "這不是一般的極光團，這是一場為期十天的極光攝影密集訓練。由專業極光攝影師帶隊，每天早上兩小時的攝影理論與後製教學（Lightroom 工作坊），下午探訪羅弗敦群島最經典的拍攝點：紅色漁屋、銳利山峰、平靜峽灣，日落前架好相機等待藍調時刻。晚上就是實戰時間——根據極光預測前往最佳機位，攝影師會一對一指導曝光參數、構圖技巧、焦段選擇。旅程結束時，你將完成一本屬於自己的羅弗敦極光攝影集。",

        overviewNote:
            "需自備相機（單眼或微單），需有基本攝影知識",

        gallery: [
            {
                src: "images/tours/gallery/norway-reine-village.jpg",
                alt: "挪威羅弗敦雪山下的紅色漁屋倒映在平靜水面",
                title: "REINE",
                caption: "雷訥漁村・挪威"
            },
            {
                src: "images/tours/gallery/norway-haukland-beach.jpg",
                alt: "夕陽映照挪威羅弗敦覆雪山峰與弧形海灘",
                title: "HAUKLAND BEACH",
                caption: "豪克蘭海灘・挪威"
            },
            {
                src: "images/tours/gallery/norway-henningsvaer-stadium.jpg",
                alt: "挪威羅弗敦岩石小島上的足球場與周圍海灣",
                title: "HENNINGSVÆR",
                caption: "亨寧斯韋爾・挪威"
            },
            {
                src: "images/tours/gallery/norway-aurora-photography.jpg",
                alt: "攝影者在挪威海岸使用腳架拍攝綠色極光",
                title: "AURORA PHOTOGRAPHY",
                caption: "極光攝影・挪威"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達 — 攝影器材檢整",
                description:
                    "抵達埃沃內斯機場後前往羅弗敦群島的傳統漁屋基地。晚上進行器材檢查、相機設定與極光攝影基礎講解，為後續拍攝做好準備。",
                meals: "晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 2,
                title: "理論課 — 極光曝光 × 漁屋日落",
                description:
                    "上午學習極光曝光、對焦與白平衡等基礎設定。下午前往海岸漁屋取景，練習在日落與藍調時刻控制天空和建築物的亮度。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 3,
                title: "理論課 — 前景運用 × Reine 經典",
                description:
                    "學習利用山峰、漁屋與水面倒影建立畫面層次，再前往雷訥經典觀景位置實地構圖。夜晚依極光預測安排拍攝。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 4,
                title: "理論課 — Lightroom 後製",
                description:
                    "整理前幾日拍攝素材，學習 Lightroom 的曝光修正、色彩調整、降噪與局部遮色片。下午進行作品講評，找出可改善的拍攝習慣。",
                meals: "早餐・午餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 5,
                title: "全天實戰 — 追逐完美光線",
                description:
                    "依當日天候與光線狀況彈性選擇海灘、漁村或山岳場景，從晨光一路拍攝至日落。夜間持續追蹤雲層與極光活動。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 6,
                title: "理論課 — 縮時攝影 × 極光影片",
                description:
                    "學習縮時攝影所需的間隔設定、電池管理與畫面穩定技巧。晚上實際拍攝極光序列，製作具有時間流動感的北極夜空影片。",
                meals: "早餐・午餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 7,
                title: "理論課 — 星空銀河 × 全景接圖",
                description:
                    "介紹星空攝影、銀河定位與多張全景接圖方法，並練習避免接圖時產生曝光差異。晚上前往低光害海岸進行實拍。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 8,
                title: "作品整理 × 輸出教學",
                description:
                    "挑選旅途中最具代表性的作品，完成色彩校正與細節調整。課程將介紹網頁、社群與作品集所需的輸出尺寸及檔案格式。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 9,
                title: "作品集發表 × 告別晚宴",
                description:
                    "每位旅客分享精選攝影作品，由講師進行最後講評與建議。晚上享用告別晚宴，交流本次拍攝心得與未來創作方向。",
                meals: "早餐・晚餐",
                hotel:
                    "羅弗敦傳統漁屋 Rorbu"
            },
            {
                day: 10,
                title: "賦歸",
                description:
                    "早餐後搭乘專車前往埃沃內斯機場，結束羅弗敦極光攝影大師班。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 9 晚傳統漁屋 Rorbu 住宿（含早餐）",
            "行程所列餐食",
            "全程專車與專業極光攝影師指導",
            "攝影理論與後製課程（每次 2 小時）",
            "每晚極光實戰拍攝指導",
            "Lightroom 後製工作坊",
            "結業攝影集（電子檔與實體印刷一本）",
            "機場接送"
        ],

        excluded: [
            "國際與國內機票",
            "相機、鏡頭與腳架等攝影器材",
            "第 4、6 天晚餐",
            "個人消費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "Evenes 機場（EVE）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊與建議攜帶器材清單",

            notices: [
                "請自備單眼或微單相機、廣角鏡頭（建議 F2.8 或更大光圈）、穩固腳架與快門線",
                "建議攜帶筆電並預先安裝 Lightroom Classic",
                "羅弗敦天氣多變，請自備相機防雨罩",
                "參加者需具備基本曝光三角知識（開課前會提供線上先修影片）"
            ]
        },

        featured: false,

        tags: [
            "羅弗敦群島",
            "專業攝影指導",
            "漁屋住宿",
            "極光攝影"
        ]
    },

    {
        id: "norway-svalbard-expedition",

        country: "norway",
        countryName: "挪威",

        title: "挪威斯瓦爾巴・北極熊與極光 11 日",

        description:
            "深入北緯 78° 的斯瓦爾巴群島，騎乘雪地摩托穿越冰川、峽灣與北極荒野，在漫長夜色與藍調時刻中追尋極光與野生動物蹤跡。",

        image: "images/tours/norway-svalbard.jpg",
        imageAlt: "挪威斯瓦爾巴雪山與極光",

        heroImage: "images/tours/detail/norway-svalbard.jpg",
        heroImageAlt: "挪威斯瓦爾巴雪山與極光",

        days: 11,
        nights: 10,

        groupSize: "2–4 人",

        difficulty: "advanced",
        difficultyName: "進階",

        rating: 4.98,
        reviews: 19,

        price: 268000,

        bestSeason: "2月–3月",

        overview:
            "歡迎來到北緯 78° 的斯瓦爾巴群島。這趟十一天遠征以朗伊爾城為基地，跟隨專業極地嚮導搭乘雪地摩托穿越冰川、山谷與冰封峽灣，深入比勒峽灣、斯匹茲卑爾根島東部荒野與 Isfjord Radio。二月至三月仍保有漫長夜色，隨著白晝逐漸回歸，旅途中也能欣賞北極特有的藍調時刻與雪原光影。行程安排冰洞、狗拉雪橇與多次荒野探索，夜間則依天候尋找極光；極光與野生動物皆屬自然現象，實際觀測狀況無法保證。",

        overviewNote:
            "適合有寒地戶外經驗、能適應低溫與長時間雪地活動的旅客",

        gallery: [
            {
                src: "images/tours/gallery/norway-svalbard-seed-vault.jpg",
                alt: "綠色極光出現在斯瓦爾巴覆雪山谷與種子庫上空",
                title: "SEED VAULT",
                caption: "斯瓦爾巴全球種子庫・挪威"
            },
            {
                src: "images/tours/gallery/norway-svalbard-settlement.jpg",
                alt: "藍綠色極光照亮斯瓦爾巴雪地木屋與人物雕像",
                title: "LONGYEARBYEN",
                caption: "朗伊爾城・挪威"
            },
            {
                src: "images/tours/gallery/norway-polar-bear.jpg",
                alt: "一隻北極熊行走於覆雪山脈前方的雪地",
                title: "POLAR BEAR",
                caption: "北極熊觀察・挪威"
            },
            {
                src: "images/tours/gallery/norway-ice-cave.jpg",
                alt: "旅客站在散發藍色光芒的冰洞通道內",
                title: "ICE CAVE",
                caption: "藍冰洞探險・挪威"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達朗伊爾城 — 極夜初體驗",
                description:
                    "抵達朗伊爾城機場，感受北緯 78 度的極夜環境。下午參觀全球種子庫入口、煤礦工人雕像與北極探險博物館，晚上在城郊進行首次極光觀測。",
                meals: "晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 2,
                title: "雪地摩托訓練 × 冰洞探險",
                description:
                    "接受雪地摩托車操作與極地安全訓練後，在嚮導帶領下前往冰川區域。進入藍色冰洞，觀察冰層紋理與長年累積形成的冰川構造。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 3,
                title: "比勒峽灣遠征 — 冰封峽灣 × Pyramiden",
                description:
                    "搭乘雪地摩托深入比勒峽灣方向，在廣闊雪原與冰封峽灣之間展開極地遠征，途中遠眺昔日礦業聚落 Pyramiden 與周邊山岳景觀。沿途停留欣賞冰川、雪原與北極荒野地貌，並依當日積雪、海冰與安全條件調整探索路線。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 4,
                title: "東岸極地遠征 — 冰川 × 海冰荒野",
                description:
                    "從朗伊爾城出發，跟隨專業嚮導搭乘雪地摩托深入斯匹茲卑爾根島東部荒野，穿越冰川、山谷與遼闊雪原，探索面向北冰洋的海冰地貌。途中留意北極野生動物活動跡象，所有停留與觀察皆以安全距離為原則，實際路線將依天候與海冰狀況調整。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 5,
                title: "Isfjord Radio — 雪原穿越 × 荒野基地",
                description:
                    "離開朗伊爾城，搭乘雪地摩托穿越伊斯峽灣周邊的山谷與雪原，前往遠離公路與城市燈光的 Isfjord Radio 荒野基地。抵達後在專業嚮導帶領下探索周邊北極海岸，傍晚於極地荒野中休息，入夜後視天候等待極光出現在峽灣上空。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "Isfjord Radio 荒野旅館"
            },
            {
                day: 6,
                title: "Isfjord Radio — 北極海岸 × 返回朗伊爾城",
                description:
                    "清晨在 Isfjord Radio 荒野基地迎接北極冬日，沿周邊海岸探索冰雪覆蓋的峽灣地貌。上午保留時間感受遠離聚落的極地寧靜，午後跟隨嚮導搭乘雪地摩托穿越雪原與山谷返回朗伊爾城，傍晚入住旅館休息。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 7,
                title: "狗拉雪橇 — 雪谷穿越 × 哈士奇體驗",
                description:
                    "拜訪朗伊爾城周邊的哈士奇犬舍，認識雪橇犬的照護與訓練方式。隨後搭乘狗拉雪橇穿越雪谷，體驗傳統極地移動方式。",
                meals: "早餐・午餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 8,
                title: "冰封峽灣探索 — 冰川 × 北極海岸",
                description:
                    "從朗伊爾城出發，跟隨專業嚮導探索伊斯峽灣周邊的冬季景觀，在雪原、冰川與北極海岸之間尋找不同尺度的極地地貌。途中依天候與冰雪條件安排停留，傍晚返回朗伊爾城，夜間自由等待極光。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 9,
                title: "北極荒野終章 — 雪原 × 極光觀測",
                description:
                    "迎接旅程最後一個完整荒野探索日，依當日天候與雪況前往朗伊爾城周邊的雪原與山谷，在專業嚮導帶領下進行輕度雪地探索。傍晚返回旅館休息，入夜後視天候安排極光觀測，在寂靜雪原中感受斯瓦爾巴的北極夜色。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 10,
                title: "自由日 × 終極極光之夜",
                description:
                    "白天自由探索朗伊爾城，可選擇參觀博物館、咖啡館或特色商店。晚上進行最後一次極光追蹤，為極地遠征留下完整回憶。",
                meals: "早餐・晚餐",
                hotel:
                    "朗伊爾城極地旅館"
            },
            {
                day: 11,
                title: "賦歸",
                description:
                    "早餐後依航班時間前往朗伊爾城機場，結束斯瓦爾巴北極熊與極光遠征。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 10 晚極地住宿（含 1 晚 Isfjord Radio 荒野旅館）",
            "行程所列餐食",
            "全程專業極地嚮導（攜帶防熊裝備）",
            "行程所需雪地摩托與安全裝備",
            "狗拉雪橇體驗",
            "冰洞探險裝備與導覽",
            "Pyramiden 遠征行程",
            "朗伊爾城機場接送"
        ],

        excluded: [
            "國際與國內機票（需經特羅姆瑟或奧斯陸轉機）",
            "第 7 天晚餐",
            "北極熊觀察團（如願意參加船隻型觀察）",
            "個人消費與小費",
            "旅遊平安險（必須包含極地搜救與直升機後送）"
        ],

        booking: {
            meetingPoint:
                "斯瓦爾巴機場（LYR）入境大廳",

            meetingTime:
                "抵達日依航班時間安排接機，詳細集合資訊將於行前通知",

            notices: [
                "極地冬季氣候嚴寒且天候變化快速，請備妥防風、防水與極地保暖衣物",
                "戶外遠征活動須全程遵循專業嚮導指示，並可能依天候、海冰與安全狀況調整",
                "部分行程需長時間搭乘雪地摩托或進行戶外活動，請依自身體能與健康狀況評估參加",
                "斯瓦爾巴醫療資源有限，如遇重大傷病可能需轉送挪威本土，建議投保涵蓋緊急醫療與撤離的旅遊保險",
                "極光與野生動物皆屬自然現象，實際觀測狀況無法保證"
            ]
        },

        featured: false,

        tags: [
            "北極荒野",
            "冰洞探險",
            "極光遠征",
            "雪地摩托"
        ]
    },

    {
        id: "sweden-abisko-sky-station",

        country: "sweden",
        countryName: "瑞典",

        title: "瑞典阿比斯庫・天空站極光 6 日",

        description:
            "瑞典最具代表性的極光目的地之一。阿比斯庫以開闊山谷、低光害環境與獨特微氣候聞名，搭乘纜車前往天空站，在北境山岳間等待極光。",

        image: "images/tours/sweden-abisko.jpg",
        imageAlt: "瑞典阿比斯庫天空站與綠色極光",

        heroImage: "images/tours/detail/sweden-abisko.jpg",
        heroImageAlt: "瑞典阿比斯庫天空站與綠色極光",

        days: 6,
        nights: 5,

        groupSize: "6–12 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.96,
        reviews: 73,

        price: 135000,

        bestSeason: "11月–3月",

        overview:
            "阿比斯庫位於瑞典拉普蘭北境，以開闊的山谷、雪原與低光害環境聞名，是冬季追尋極光的代表性目的地之一。六天五夜的旅程以阿比斯庫為主要基地，安排前往 Aurora Sky Station，在山岳夜色中等待極光出現；白天則透過雪鞋健行、冰湖探索與拉普蘭冬季活動，深入感受北境自然景觀。旅程最後移動至基律納，在城市與雪原之間迎接最後一晚的極光時光，為這趟瑞典北境之旅留下完整收尾。",

        overviewNote:
            "適合所有旅客，天空站有暖氣休息室",

        gallery: [
            {
                src: "images/tours/gallery/sweden-abisko-winter-river.jpg",
                alt: "河流穿過瑞典覆雪森林，遠方可見雪山",
                title: "ABISKO WINTER",
                caption: "阿比斯庫冬季景觀・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-aurora-sky-station.jpg",
                alt: "綠色極光出現在瑞典雪山吊椅纜車上空",
                title: "SKY STATION",
                caption: "阿比斯庫天空站・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-husky-sledding.jpg",
                alt: "哈士奇犬隊拉著雪橇奔跑於瑞典雪林",
                title: "HUSKY SLEDDING",
                caption: "哈士奇雪橇・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-ice-fishing.jpg",
                alt: "旅客坐在瑞典結冰湖面上使用釣竿垂釣",
                title: "ICE FISHING",
                caption: "冰湖垂釣・瑞典"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達基律納 — 阿比斯庫",
                description:
                    "抵達基律納機場後搭乘專車前往阿比斯庫國家公園，入住山地旅館。晚上首次搭乘纜車前往極光天空站，在高處觀察北極夜空。",
                meals: "晚餐",
                hotel:
                    "阿比斯庫山地旅館 Abisko Mountain Lodge"
            },
            {
                day: 2,
                title: "狗拉雪橇 × 阿比斯庫國家公園",
                description:
                    "上午搭乘狗拉雪橇穿越覆雪森林與山谷，感受北極冬季的速度與寧靜。下午探索阿比斯庫國家公園的冬季步道與冰封河谷。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "阿比斯庫山地旅館 Abisko Mountain Lodge"
            },
            {
                day: 3,
                title: "Aurora Sky Station — 山岳夜色 × 極光觀測",
                description:
                    "白天保留充足時間休息與探索阿比斯庫周邊雪景，傍晚依天候與纜車營運狀況前往 Aurora Sky Station，在山岳夜色與開闊視野中等待極光出現。專業嚮導將協助觀察天候與極光變化，活動安排將依當日安全條件彈性調整。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "阿比斯庫山地旅館"
            },
            {
                day: 4,
                title: "雪鞋健行 × 極光攝影工作坊",
                description:
                    "穿著雪鞋深入國家公園，沿途觀察雪林、峽谷與野生動物足跡。傍晚參加極光攝影工作坊，學習相機設定、構圖與夜間對焦。",
                meals: "早餐・午餐",
                hotel:
                    "阿比斯庫山地旅館 Abisko Mountain Lodge"
            },
            {
                day: 5,
                title: "前往基律納 — 北境小鎮 × 最後追光",
                description:
                    "告別阿比斯庫，前往瑞典北境城市基律納，沿途欣賞拉普蘭雪原與山地景觀。抵達後保留時間自由探索市區，入夜後依天候前往周邊低光害區域，等待旅程最後一次極光觀測機會。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "基律納市區精品旅館"
            },
            {
                day: 6,
                title: "賦歸",
                description:
                    "早餐後搭乘專車前往基律納機場，結束阿比斯庫天空站極光之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 5 晚住宿（4 晚阿比斯庫山地旅館、1 晚基律納市區旅館）",
            "行程所列餐食",
            "Aurora Sky Station 極光觀測體驗與導覽",
            "全程專車與專業中文導遊",
            "狗拉雪橇體驗",
            "雪鞋健行",
            "極光攝影工作坊",
            "基律納機場接送"
        ],

        excluded: [
            "國際與國內機票",
            "第 4 天晚餐",
            "個人消費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "基律納機場（KRN）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊",

            notices: [
                "天空站設有室內休息空間，仍建議準備完整防風與保暖裝備",
                "阿比斯庫常有較穩定的晴朗天候，但極光與雲量仍屬自然現象，無法保證觀測結果",
                "天空站纜車與觀測活動將依季節、天候與當日營運狀況調整",
                "建議攜帶相機與腳架，方便進行夜間極光拍攝"
            ]
        },

        featured: true,

        tags: [
            "Aurora Sky Station",
            "夜間纜車觀測",
            "阿比斯庫國家公園",
            "極光觀測"
        ]
    },

    {
        id: "sweden-kiruna-icehotel",

        country: "sweden",
        countryName: "瑞典",

        title: "瑞典基律納・冰旅館奇幻極光 5 日",

        description:
            "入住瑞典拉普蘭極具代表性的冰旅館。白天親手雕刻冰雕，晚上在馴鹿皮與極地睡袋中入睡，感受北境最奇幻的住宿體驗。",

        image: "images/tours/sweden-kiruna.jpg",
        imageAlt: "瑞典基律納冰旅館",

        heroImage: "images/tours/detail/sweden-kiruna.jpg",
        heroImageAlt: "瑞典基律納冰旅館",

        days: 5,
        nights: 4,

        groupSize: "4–10 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.88,
        reviews: 45,

        price: 118000,

        bestSeason: "12月–3月",

        overview:
            "Jukkasjärvi 的 Icehotel 是全球冰旅館的原型，每年 12 月由藝術家從零開始用 Torne 河的冰塊建造，到了春天融化回歸河流。這趟五天旅程的高潮就是入住其中一間由國際藝術家設計的冰雕套房——睡在鋪著馴鹿皮的冰床上、鑽進極地睡袋，室溫維持在 -5°C 左右。在入住冰旅館之前，你還將參加冰雕工作坊，親手拿起鑿子與鋸子，在冰塊上雕刻屬於自己的作品。夜晚安排搭乘雪橇前往遠離旅館光害的極光觀測點——在純白荒野中仰望極光，是此生難忘的畫面。",

        overviewNote:
            "適合所有旅客，冰旅館住宿為特殊體驗（一晚），其他為暖房",

        gallery: [
            {
                src: "images/tours/gallery/sweden-ice-sculpting.jpg",
                alt: "旅客在藍色燈光下雕刻大型冰雕人像",
                title: "ICE SCULPTING",
                caption: "冰雕體驗・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-ice-bar.jpg",
                alt: "藍色燈光照亮以冰塊打造的酒吧與座椅",
                title: "ICE BAR",
                caption: "冰旅館酒吧・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-snowmobile-ride.jpg",
                alt: "旅客駕駛橘色雪地摩托車行駛於瑞典雪原",
                title: "SNOWMOBILE RIDE",
                caption: "雪地摩托車・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-aurora-sleigh.jpg",
                alt: "旅客乘坐木製雪橇穿越綠色極光下的雪地",
                title: "AURORA SLEIGH",
                caption: "極光雪橇・瑞典"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達基律納 — 雪地健行",
                description:
                    "抵達基律納機場後前往尤卡斯耶爾維，下午進行短程雪地健行，認識北極圈內的自然環境。晚上在 Icehotel 園區暖房小屋住宿並首次追光。",
                meals: "晚餐",
                hotel:
                    "Jukkasjärvi 暖房小屋（Icehotel 園區）"
            },
            {
                day: 2,
                title: "冰雕工作坊 × 雪地摩托",
                description:
                    "上午由冰雕師指導使用專業工具，在透明天然冰塊上完成個人作品。下午駕駛雪地摩托車穿越森林與雪原，途中於營火旁享用熱飲。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "Jukkasjärvi 暖房小屋（Icehotel 園區）"
            },
            {
                day: 3,
                title: "狗拉雪橇 × 薩米晚餐 × 極光雪橇",
                description:
                    "白天搭乘狗拉雪橇深入拉普蘭雪林，認識雪橇犬的訓練與生活。傍晚進入薩米傳統帳篷，品嘗以北方食材製作的特色晚餐；入夜後搭乘雪橇前往遠離聚落光害的雪原，在寧靜荒野中等待極光出現。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "Jukkasjärvi 暖房小屋（Icehotel 園區）"
            },
            {
                day: 4,
                title: "Icehotel 導覽 × 冰旅館入住！",
                description:
                    "參加 Icehotel 專人導覽，欣賞冰雕套房、冰吧與季節限定藝術作品。晚上入住冰雪打造的客房，在保暖睡袋與馴鹿皮鋪墊中度過特別一夜。",
                meals: "早餐・晚餐",
                hotel:
                    "瑞典 Icehotel 冰雪客房"
            },
            {
                day: 5,
                title: "暖房早餐 × 賦歸",
                description:
                    "早晨享用熱飲與暖房早餐，領取完成冰旅館住宿體驗的紀念證書。隨後前往基律納機場，結束冰旅館奇幻極光之旅。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 4 晚住宿（3 晚暖房與 1 晚 Icehotel 冰雕套房）",
            "行程所列餐食",
            "全程專車與專業中文導遊",
            "冰雕工作坊（含材料與工具）",
            "雪地摩托體驗",
            "狗拉雪橇體驗",
            "Icehotel 完整導覽",
            "極光雪橇追光",
            "基律納機場接送"
        ],

        excluded: [
            "國際與國內機票",
            "第 4 天午餐",
            "Icehotel 冰吧飲品",
            "個人消費",
            "旅遊平安險"
        ],

        booking: {
            meetingPoint:
                "基律納機場（KRN）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 7 天寄送詳細資訊",

            notices: [
                "冰旅館室溫約 -5°C，提供專業極地睡袋（耐寒至 -30°C），多數人睡得很好",
                "冰旅館住宿區有暖房休息區與桑拿，洗澡在暖房進行",
                "若對 -5°C 睡眠有顧慮，可選擇全程暖房（價格不變但需提前告知）",
                "冰雕套房每一間設計都不同，入住當天才知道是哪位藝術家的作品"
            ]
        },

        featured: false,

        tags: [
            "Jukkasjärvi 冰旅館",
            "冰雕工作坊",
            "雪地健行",
            "極光住宿"
        ]
    },

    {
        id: "sweden-kiruna-wilderness",

        country: "sweden",
        countryName: "瑞典",

        title: "瑞典基律納・荒野極光遠征 8 日",

        description:
            "極地荒野遠征隊。背著裝備穿越結冰的托爾內湖，在星空極光下露營，學習極地求生技能，只為追求最純粹的極光冒險。",

        image: "images/tours/sweden-kiruna-wilderness.jpg",
        imageAlt: "瑞典荒野帳篷與極光",

        heroImage: "images/tours/detail/sweden-kiruna-wilderness.jpg",
        heroImageAlt: "瑞典荒野帳篷與極光",

        days: 8,
        nights: 7,

        groupSize: "2–4 人",

        difficulty: "advanced",
        difficultyName: "進階",

        rating: 4.9,
        reviews: 28,

        price: 162000,

        bestSeason: "1月–3月",

        overview:
            "這是一趟為真正喜愛戶外探險的旅人設計的北境遠征。八天七夜，從瑞典基律納出發，跟隨專業嚮導深入拉普蘭雪原與森林，在遠離城市燈光的荒野中尋找極光。行程安排雪鞋健行、越野滑雪與雪地遠征等冬季活動，並連續四晚入住荒野營地，在寂靜雪原中感受北境最純粹的夜色。旅程前後則以基地木屋與基律納市區旅館作為休整，讓深入荒野的挑戰與必要的舒適取得平衡。",

        overviewNote:
            "需有野外露營經驗，能忍受寒冷與體力消耗，每日負重步行 8-15 公里",

        gallery: [
            {
                src: "images/tours/gallery/sweden-snowshoe-hiking.jpg",
                alt: "旅客穿著雪鞋排隊行走於陽光照耀的瑞典雪原",
                title: "SNOWSHOE HIKE",
                caption: "雪鞋健行・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-snow-shelter.jpg",
                alt: "旅客站在雪地中以厚實積雪建成的圓形通道內",
                title: "SNOW SHELTER",
                caption: "雪地庇護所體驗・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-wilderness-campfire.jpg",
                alt: "雪地營火上架著炊具，後方可見亮燈木屋",
                title: "CAMPFIRE",
                caption: "荒野營火・瑞典"
            },
            {
                src: "images/tours/gallery/sweden-cross-country-skiing.jpg",
                alt: "旅客背著背包在瑞典雪山前方進行越野滑雪",
                title: "CROSS-COUNTRY SKI",
                caption: "越野滑雪・瑞典"
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "抵達基律納 — 裝備檢整 × 行前訓練",
                description:
                    "抵達基律納機場後前往荒野基地，進行保暖裝備檢查與極地安全訓練，包含搭帳篷、生火及雪洞挖掘。晚上於基地進行首次極光觀測。",
                meals: "晚餐",
                hotel:
                    "基律納荒野基地木屋"
            },
            {
                day: 2,
                title: "遠征出發 — 穿越托爾內湖",
                description:
                    "整理個人裝備後正式展開遠征，穿越冰封的托爾內湖與周邊雪原。途中學習辨認冰面狀況、控制行進節奏及使用雪橇搬運物資。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "托爾內湖荒野營地"
            },
            {
                day: 3,
                title: "白樺林穿越 × 冰瀑攀爬",
                description:
                    "穿越拉普蘭白樺林與起伏雪地，觀察北極圈冬季生態。下午在專業嚮導確保安全的情況下，使用冰爪與冰斧體驗初階冰瀑攀爬。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "白樺林荒野營地"
            },
            {
                day: 4,
                title: "雪洞建造 × 極地求生技能",
                description:
                    "學習選擇安全地形並分組建造雪洞，掌握保溫、通風與入口配置。傍晚練習融雪取水、野外烹飪與低溫環境下的緊急應變。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "雪洞營地或備用極地帳篷"
            },
            {
                day: 5,
                title: "最高點登頂 × 全景極光",
                description:
                    "在嚮導帶領下攀登本次路線的最高觀景點，沿途欣賞廣闊雪原與遠方山脈。入夜後於視野開闊的營地觀察極光與星空。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "高地荒野營地"
            },
            {
                day: 6,
                title: "返回文明 — 桑拿救贖",
                description:
                    "收整營地後循不同路線返回荒野基地，沿途回顧極地行進與求生技巧。抵達後享用熱食並體驗瑞典桑拿，舒緩遠征疲勞。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "基律納荒野基地木屋"
            },
            {
                day: 7,
                title: "狗拉雪橇 × 自由日",
                description:
                    "上午搭乘狗拉雪橇穿越雪林，享受與徒步遠征截然不同的移動體驗。下午自由休息或前往基律納市區，晚上享用告別晚餐。",
                meals: "早餐・午餐・晚餐",
                hotel:
                    "基律納市區精品旅館"
            },
            {
                day: 8,
                title: "賦歸",
                description:
                    "早餐後依航班時間前往基律納機場，結束瑞典荒野極光遠征。",
                meals: "早餐",
                hotel: ""
            }
        ],

        included: [
            "全程 7 晚住宿（2 晚基地木屋、4 晚荒野營地與 1 晚基律納市區旅館）",
            "行程所列餐食（荒野期間為營火野炊）",
            "全程專業極地嚮導（WFR 野外急救認證）",
            "荒野遠征全套裝備（帳篷、睡袋、炊具、雪鞋、滑雪板與冰爪）",
            "極地求生技能訓練（雪洞、生火與冰面救援）",
            "狗拉雪橇體驗",
            "北歐桑拿體驗",
            "基律納機場接送"
        ],

        excluded: [
            "國際與國內機票",
            "個人保暖衣物（會提供詳細裝備清單，可協助租借）",
            "個人消費",
            "旅遊平安險（必須包含極地搜救與直升機後送）"
        ],

        booking: {
            meetingPoint:
                "基律納機場（KRN）入境大廳",

            meetingTime:
                "抵達日依航班時間接機，行前 14 天寄送詳細裝備清單與體能訓練建議",

            notices: [
                "荒野期間無廁所設施，使用 Leave No Trace 原則自行處理，需有心理準備",
                "每日負重約 15～20 公斤，建議出發前進行 2～3 個月的體能訓練",
                "荒野期間無法充電，請攜帶行動電源或多顆備用電池",
                "體重超過 100 公斤者不適合此行程（雪鞋承重限制）",
                "出發前需填寫體能自評表並通過嚮導電話面談"
            ]
        },

        featured: false,

        tags: [
            "荒野露營",
            "極光遠征",
            "冰湖穿越",
            "極地求生"
        ]
    }

];