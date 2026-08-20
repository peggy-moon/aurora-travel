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

        days: 8,
        nights: 7,

        groupSize: "6–12 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.9,
        reviews: 128,

        price: 158000,

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

        days: 12,
        nights: 11,

        groupSize: "4–8 人",

        difficulty: "medium",
        difficultyName: "中等",

        rating: 4.95,
        reviews: 67,

        price: 228000,

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

        days: 6,
        nights: 5,

        groupSize: "8–15 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.85,
        reviews: 42,

        price: 108000,

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

        days: 7,
        nights: 6,

        groupSize: "4–10 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.95,
        reviews: 96,

        price: 172000,

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

        days: 8,
        nights: 7,

        groupSize: "6–12 人",

        difficulty: "medium",
        difficultyName: "中等",

        rating: 4.8,
        reviews: 38,

        price: 145000,

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

        days: 5,
        nights: 4,

        groupSize: "2–6 人",

        difficulty: "advanced",
        difficultyName: "進階",

        rating: 4.9,
        reviews: 53,

        price: 98000,

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
            "郵輪追光經典路線。從特羅姆瑟出海，在峽灣平靜水面上觀賞極光倒影，搭配北極大教堂與薩米文化體驗，舒適與美景兼具。",

        image: "images/tours/norway-tromso.jpg",
        imageAlt: "挪威峽灣雪山與郵輪",

        days: 9,
        nights: 8,

        groupSize: "6–10 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.92,
        reviews: 84,

        price: 189000,

        featured: true,

        tags: [
            "峽灣郵輪",
            "海上追光",
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

        days: 10,
        nights: 9,

        groupSize: "2–6 人",

        difficulty: "medium",
        difficultyName: "中等",

        rating: 4.97,
        reviews: 31,

        price: 215000,

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
            "地球最北端的極光探險。在斯瓦爾巴群島的極夜中，騎乘雪地摩托穿越北極荒野，尋找極光與北極熊的蹤跡。",

        image: "images/tours/norway-svalbard.jpg",
        imageAlt: "挪威斯瓦爾巴雪山與極光",

        days: 11,
        nights: 10,

        groupSize: "2–4 人",

        difficulty: "advanced",
        difficultyName: "進階",

        rating: 4.98,
        reviews: 19,

        price: 268000,

        featured: false,

        tags: [
            "北極熊觀察",
            "冰洞探險",
            "極夜極光",
            "雪地摩托"
        ]
    },

    {
        id: "sweden-abisko-sky-station",

        country: "sweden",
        countryName: "瑞典",

        title: "瑞典阿比斯庫・天空站極光 6 日",

        description:
            "全球極光觀測率最高的目的地。阿比斯庫藍洞微氣候讓天空常保晴朗，搭乘纜車直達天空站，在最靠近極光的地方等待奇景。",

        image: "images/tours/sweden-abisko.jpg",
        imageAlt: "瑞典阿比斯庫天空站與綠色極光",

        days: 6,
        nights: 5,

        groupSize: "6–12 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.96,
        reviews: 73,

        price: 135000,

        featured: true,

        tags: [
            "Aurora Sky Station",
            "夜間纜車觀測",
            "冰旅館參觀",
            "極光觀測"
        ]
    },

    {
        id: "sweden-kiruna-icehotel",

        country: "sweden",
        countryName: "瑞典",

        title: "瑞典基律納・冰旅館奇幻極光 5 日",

        description:
            "入住世界最著名的冰旅館。白天親手雕刻冰雕，晚上在馴鹿皮上入睡，極光透過冰牆微微發光，是最奇幻的住宿體驗。",

        image: "images/tours/sweden-kiruna.jpg",
        imageAlt: "瑞典基律納冰旅館",

        days: 5,
        nights: 4,

        groupSize: "4–10 人",

        difficulty: "easy",
        difficultyName: "入門",

        rating: 4.88,
        reviews: 45,

        price: 118000,

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

        days: 8,
        nights: 7,

        groupSize: "2–4 人",

        difficulty: "advanced",
        difficultyName: "進階",

        rating: 4.9,
        reviews: 28,

        price: 162000,

        featured: false,

        tags: [
            "荒野露營",
            "極光騎行",
            "冰湖穿越",
            "極地求生"
        ]
    }

];