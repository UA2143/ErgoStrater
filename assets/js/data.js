/* =========================================================
   ErgoStarter — Content Data
   ========================================================= */


/* =========================================================
   SITE CONFIGURATION
   ========================================================= */

const siteConfig = {
    name: "ErgoStarter",

    tagline: "Better ergonomics. Smaller budget.",

    description:
        "Practical ergonomic desk setups, posture fixes and budget gear for students and beginner remote workers.",

    defaultCurrency: "₹"
};


/* =========================================================
   FEATURED GUIDES
   ========================================================= */

const guides = [

    {
        id: "monitor-height",

        title:
            "How to Set Monitor Height at Home",

        description:
            "Learn the simple monitor-height and viewing-distance rules that can make a home workstation more comfortable.",

        category: "Desk Ergonomics",

        difficulty: "Beginner",

        readTime: "6 min read",

        keyword:
            "how to set monitor height at home",

        url:
            "/guides/monitor-height/"
    },


    {
        id: "standing-desk",

        title:
            "DIY Standing Desk Converter Ideas",

        description:
            "Turn an ordinary desk into a standing workstation using practical, low-cost DIY solutions.",

        category: "DIY Setup",

        difficulty: "Beginner",

        readTime: "8 min read",

        keyword:
            "diy standing desk converter ideas",

        url:
            "/guides/standing-desk/"
    },


    {
        id: "wrist-pain",

        title:
            "How to Stop Wrist Pain While Typing on a Laptop",

        description:
            "Understand common laptop typing mistakes and simple workspace adjustments that can reduce unnecessary wrist strain.",

        category: "Posture & Comfort",

        difficulty: "Beginner",

        readTime: "7 min read",

        keyword:
            "how to stop wrist pain typing laptop",

        url:
            "/guides/wrist-pain/"
    },


    {
        id: "laptop-setup",

        title:
            "How to Raise Your Laptop Screen Without Buying a Stand",

        description:
            "Simple ways to improve laptop screen height using everyday items before spending money on accessories.",

        category: "Laptop Setup",

        difficulty: "Beginner",

        readTime: "5 min read",

        keyword:
            "how to raise laptop screen without buying stand",

        url:
            "/guides/laptop-setup/"
    }

];


/* =========================================================
   BUDGET GEAR
   ========================================================= */

const gear = [

    {
        id: "office-chair",

        title:
            "Best Ergonomic Office Chairs Under ₹12,500",

        description:
            "What to look for when choosing an affordable ergonomic chair without paying premium-brand prices.",

        category: "Chair",

        price:
            "Under ₹12,500",

        budget:
            12500,

        keyword:
            "best ergonomic office chair under 150",

        url:
            "/gear/office-chair/"
    },


    {
        id: "monitor-arm",

        title:
            "Best Budget Monitor Arms for Your Desk",

        description:
            "A practical guide to choosing a monitor arm for better screen positioning while staying within a beginner budget.",

        category: "Monitor",

        price:
            "Budget picks",

        budget:
            5000,

        keyword:
            "best budget monitor arm for desk",

        url:
            "/gear/monitor-arm/"
    },


    {
        id: "cable-management",

        title:
            "Cheap Cable Management for Your Desk",

        description:
            "Simple and inexpensive ways to organise charging cables, power strips and desk wires.",

        category: "Desk Organization",

        price:
            "Low-cost solutions",

        budget:
            1500,

        keyword:
            "cheap cable management for desk",

        url:
            "/gear/cable-management/"
    }

];


/* =========================================================
   SETUP PRINCIPLES
   ========================================================= */

const setupPrinciples = [

    {
        number: "01",

        title:
            "Fix your position",

        description:
            "Start with monitor height, chair position, desk height and keyboard placement before buying new equipment."
    },


    {
        number: "02",

        title:
            "Use what you already have",

        description:
            "Books, boxes and household items can often solve temporary height and positioning problems."
    },


    {
        number: "03",

        title:
            "Upgrade where it matters",

        description:
            "Spend money on the parts of your setup that solve an actual problem instead of buying expensive furniture by default."
    }

];


/* =========================================================
   FAQ DATA
   ========================================================= */

const faqs = [

    {
        question:
            "Do I need an expensive ergonomic chair?",

        answer:
            "Not necessarily. A chair should support a comfortable working position, but good ergonomics also depends on monitor height, desk height, keyboard position and how often you change position."
    },


    {
        question:
            "How high should my monitor be?",

        answer:
            "As a starting point, position the screen so you can look toward the upper portion of the display without constantly bending your neck downward. Your exact position should also account for your screen size and viewing distance."
    },


    {
        question:
            "Can I make an ergonomic setup without buying anything?",

        answer:
            "Yes. Simple changes such as raising a laptop with stable household items, repositioning your chair and adjusting your keyboard and mouse can improve your workstation before you purchase equipment."
    },


    {
        question:
            "What should I upgrade first?",

        answer:
            "Start with the problem causing the most discomfort. For many laptop users, improving screen height is a useful first step. For others, chair support or keyboard and mouse positioning may be more important."
    }

];


/* =========================================================
   HOMEPAGE DATA
   ========================================================= */

const homepageData = {

    featuredGuideIds: [
        "monitor-height",
        "standing-desk",
        "wrist-pain"
    ],

    featuredGearIds: [
        "office-chair",
        "monitor-arm",
        "cable-management"
    ]

};


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */


/**
 * Find a guide by its ID.
 */
function getGuideById(id) {

    return guides.find(
        guide => guide.id === id
    );

}


/**
 * Find gear by its ID.
 */
function getGearById(id) {

    return gear.find(
        item => item.id === id
    );

}


/**
 * Get homepage featured guides.
 */
function getFeaturedGuides() {

    return homepageData.featuredGuideIds
        .map(id => getGuideById(id))
        .filter(Boolean);

}


/**
 * Get homepage featured gear.
 */
function getFeaturedGear() {

    return homepageData.featuredGearIds
        .map(id => getGearById(id))
        .filter(Boolean);

}