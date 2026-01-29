const portfolioData = {
    // --- BASIC INFO ---
    name: "Alex Morgan",
    role: "Growth operator turning communities into revenue.",
    bio: "I combine product psychology and data-driven loops to scale B2B SaaS ecosystems. Previously Head of Growth @ Company X.",
    availability: "Available for Q4 Roles",
    email: "alex@example.com",
    
    // --- METRICS (Top 3) ---
    metrics: [
        { value: "50%", label: "Engagement Growth", description: "Revived 14,600 member community from dormancy.", color: "emerald", progress: 85 },
        { value: "$2.4M", label: "Pipeline Generated", description: "Direct attribution from organic community channels.", color: "blue", progress: 92 },
        { value: "3x", label: "Faster Onboarding", description: "Reduced onboarding friction for enterprise clients.", color: "purple", progress: 75 }
    ],

    // --- CASE STUDIES ---
    caseStudies: [
        {
            year: "2023",
            company: "Company X",
            title: "Revived Dead Discord → $2.4M Pipeline",
            tags: ["Strategy", "Community"],
            situation: "Company X, a Series B SaaS platform, had strong product-market fit but stalled growth. Marketing was focused on performance ads but had no systematic approach to content. Leadership needed a new growth channel to reach $15M ARR.",
            challenges: [
                "Lead generation dropped 40% QoQ.",
                "Pipeline dried up, threatening Series B targets.",
                "No budget for paid ads."
            ],
            outcomes: [
                "140% increase in organic leads",
                "$2.4M influenced revenue",
                "Achieved in 5 months"
            ],
            approach: [
                { title: "Pivot to 'Build in Public'", description: "Shifted from polished corporate comms to raw, engineer-focused updates to regain trust." },
                { title: "Gamified Ambassador Program", description: "Identified top 50 active users and gave them direct product access, turning them into zero-cost support." }
            ]
        },
        {
            year: "2022",
            company: "Protocol Y",
            title: "Governance Participation +40%",
            tags: ["Web3", "Product Marketing"],
            situation: "A major DeFi protocol was struggling with token holder apathy. Only 3% of holders voted, creating 'centralization risk' that blocked a key institutional partnership.",
            challenges: [
                "97% of tokens were dormant.",
                "Institutional partner threatened to pull the deal."
            ],
            outcomes: [
                "40% Growth in unique voters",
                "$2M partnership secured"
            ],
            approach: [
                { title: "Simplified Voting UI", description: "Removed 3 friction steps and implemented 'Gasless Voting' via Snapshot." },
                { title: "Delegation Campaign", description: "Humanized the 'whales' via Twitter Spaces interviews, encouraging delegation." }
            ]
        }
    ],

    // --- WRITING / POSTS ---
    posts: [
        { date: "Oct 24, 2023", category: "Strategy", title: "Why 'Community First' is a Trap for B2B", description: "The controversial take on why product-led growth needs to precede community building.", url: "#" },
        { date: "Sep 12, 2023", category: "Metrics", title: "The Metrics That Actually Matter", description: "Stop tracking Discord messages. Start tracking value capture and retention cohorts.", url: "#" },
        { date: "Aug 05, 2023", category: "Growth", title: "Scaling Governance Efficiently", description: "How to get token holders to care about proposals without bribing them.", url: "#" }
    ],

    // --- SOCIAL LINKS ---
    social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
    }
};