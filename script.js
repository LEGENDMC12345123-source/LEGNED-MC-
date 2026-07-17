// Aternos API Connection Configuration
const serverIP = "croaker.aternos.host:63131";

// Sub-Feature Layout Dataset Mapping
const featuresData = {
    pvp: {
        title: "⚔ Competitive PvP Arena",
        badge: "Ranked Battles Season 1",
        desc: "Step foot into our highly balanced, low-latency combat ecosystem. Challenge opponents in custom built arenas, climb up structural global leaderboards, and claim title distributions every month.",
        highlights: [
            "🏆 Ranked ELO System with automated matching structures",
            "🛡 Anti-Cheat integrity integration running 24/7",
            "Fight in style inside uniquely themed custom built environments"
        ],
        img: "legend_logo.jpg"
    },
    events: {
        title: "🎉 Daily Server Events",
        badge: "Everyday at 18:00 UTC",
        desc: "Never experience a dull moment. Our team runs managed live events featuring custom bosses, competitive obstacle survival parkour, and heavy supply crate drop gatherings at designated spawn locations.",
        highlights: [
            "👾 Legendary custom boss raid events with high tier drops",
            "📦 Regular community drop parties at main spawn centers",
            "🎁 Special seasonal cosmetics exclusive to event participants"
        ],
        img: "legend_logo.jpg"
    },
    economy: {
        title: "💰 Balanced Virtual Economy",
        badge: "Player-Driven Market Ecosystem",
        desc: "Trade, barter, and establish custom enterprise shops. Take advantage of an intricate system featuring dynamic auction houses, production banking facilities, and completely fair resource trade rates.",
        highlights: [
            "🏪 Create custom vendor storefront shops effortlessly",
            "⚖ Real-time community auction monitoring interface",
            "💎 Reliable job vectors to generate base currency yields"
        ],
        img: "legend_logo.jpg"
    },
    survival: {
        title: "🏡 Rich Survival Adventure",
        badge: "Enhanced Core Mechanics",
        desc: "Immerse yourself in a classic multiplayer experience built on high performance server hardware. Form clans, protect land claims, and explore generated resource structures safely with friends.",
        highlights: [
            "Secure claim claiming tools preventing griefing entirely",
            "🌲 Expansive border parameters providing infinite resource yields",
            "🤝 Friendly, active staff to keep the environment secure"
        ],
        img: "legend_logo.jpg"
    }
};

// Virtual Navigation Engine Router
function navigateToFeature(featureKey) {
    const feature = featuresData[featureKey];
    if (!feature) return;

    // Apply data mapping variables to UI layout
    document.getElementById("feature-title").textContent = feature.title;
    document.getElementById("feature-badge").textContent = feature.badge;
    document.getElementById("feature-description").textContent = feature.desc;
    document.getElementById("feature-img").src = feature.img;

    // Build the dynamic feature list block elements cleanly
    const highlightsContainer = document.getElementById("feature-highlights");
    highlightsContainer.innerHTML = "";
    feature.highlights.forEach(text => {
        const item = document.createElement("div");
        item.className = "highlight-item";
        item.textContent = text;
        highlightsContainer.appendChild(item);
    });

    // Run layout swap
    document.getElementById("main-page-content").style.display = "none";
    document.getElementById("features-page").style.display = "block";
    window.scrollTo(0, 0);
}

function showMainPage() {
    document.getElementById("features-page").style.display = "none";
    document.getElementById("main-page-content").style.display = "block";
}

// Fetch Real-time Online Server Metrics
async function updateServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        if (!response.ok) throw new Error("API Connection Interrupted");
        const data = await response.json();

        if (data.online) {
            document.getElementById("players").textContent = data.players.online;
            document.getElementById("status").textContent = "🟢 Online";
        } else {
            document.getElementById("players").textContent = "0";
            document.getElementById("status").textContent = "🔴 Offline";
        }
    } catch (error) {
        console.error("Minecraft Status Check Error: ", error);
        document.getElementById("players").textContent = "0";
        document.getElementById("status").textContent = "🔴 Offline";
    }
}

// Click to Copy Server Address Utility
function copyServerIP() {
    const targetAddress = "LEGENDS_MC.aternos.me";
    navigator.clipboard.writeText(targetAddress).then(() => {
        const tooltip = document.getElementById("copy-tooltip");
        tooltip.textContent = "Copied Success!";
        setTimeout(() => {
            tooltip.textContent = "Click to Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy server string text profile: ", err);
    });
}

// System initialization runs on layout execution
updateServerStatus();
setInterval(updateServerStatus, 30000);