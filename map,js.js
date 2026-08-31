/* =========================================================
   PLACES PAGE JAVASCRIPT
========================================================= */

/* =========================================================
   PLACE DATA
========================================================= */

const places = {

    ziro: {
        name: "Ziro Valley",
        location: "Arunachal Pradesh, India",
        altitude: "⛰ 1,500 m",
        rating: "★ 4.8",
        type: "Hidden Nature Escape",

        tags: [
            "Nature",
            "Culture",
            "Mountains"
        ],

        heroImage: "images/ziro.jpg",

        bestSeason: "October – April",
        crowd: "Low",
        budget: "₹12,000 – ₹18,000",
        stay: "3 – 4 Days",
        connectivity: "Moderate",

        crowdTitle: "Peaceful & Uncrowded",
        crowdPercentage: "25%",

        crowdTip:
            "For the quietest experience, visit during weekdays and avoid major festival periods.",

        about: [
            "Ziro Valley is a beautiful highland destination in Arunachal Pradesh, surrounded by pine-covered hills, rice fields and traditional villages.",

            "Known for its peaceful atmosphere and distinctive Apatani culture, Ziro offers a slower and more immersive travel experience away from heavily crowded tourist destinations."
        ],

        activities: [
            {
                icon: "🌾",
                title: "Explore the Rice Fields",
                description:
                    "Walk through the traditional wetland rice fields and experience the distinctive agricultural landscape of the Apatani Valley."
            },

            {
                icon: "🏡",
                title: "Visit Apatani Villages",
                description:
                    "Explore traditional villages and learn about the unique culture, architecture and everyday life of the local community."
            },

            {
                icon: "🌲",
                title: "Walk Through Pine Forests",
                description:
                    "Take a peaceful walk through Ziro's pine-covered surroundings and enjoy the cool mountain air."
            },

            {
                icon: "🎵",
                title: "Experience Local Culture",
                description:
                    "Discover local music, traditions and festivals while experiencing the cultural identity of the Apatani people."
            }
        ],

        reach: [
            {
                number: "01",
                title: "Reach Itanagar",
                description:
                    "Travel to Itanagar, the capital of Arunachal Pradesh, by air, rail or road depending on your starting point."
            },

            {
                number: "02",
                title: "Travel Towards Ziro",
                description:
                    "From Itanagar, continue by road towards Ziro Valley. The journey takes several hours through scenic mountain terrain."
            },

            {
                number: "03",
                title: "Arrive in Ziro",
                description:
                    "Once in Ziro, local taxis and shared vehicles can be used to explore the surrounding villages and attractions."
            }
        ],

        tips: [
            "Carry some cash as digital payment connectivity may not always be reliable.",
            "Pack warm clothing, especially during mornings and evenings.",
            "Respect local customs and ask before photographing people or private spaces.",
            "Check current road conditions and travel requirements before starting your journey."
        ],

        gallery: [
            "images/ziro.jpg",
            "images/ziro2.jpg",
            "images/ziro3.jpg",
            "images/ziro4.jpg"
        ],

        nearby: [
            {
                name: "Talley Valley",
                distance: "≈ 30 km"
            },

            {
                name: "Hapoli",
                distance: "≈ 5 km"
            },

            {
                name: "Hong Village",
                distance: "≈ 10 km"
            },

            {
                name: "Dolo Mando",
                distance: "≈ 20 km"
            }
        ]
    },


    /* =====================================================
       ADD MORE PLACES BELOW
    ===================================================== */

    meghalaya: {
        name: "Meghalaya",
        location: "Meghalaya, India",
        altitude: "⛰ 1,496 m",
        rating: "★ 4.7",
        type: "Mountain Escape",

        tags: [
            "Nature",
            "Waterfalls",
            "Adventure"
        ],

        heroImage: "images/meghalaya.jpg",

        bestSeason: "October – April",
        crowd: "Low",
        budget: "₹10,000 – ₹16,000",
        stay: "3 – 5 Days",
        connectivity: "Moderate",

        crowdTitle: "Peaceful & Scenic",
        crowdPercentage: "30%",

        crowdTip:
            "Travel during weekdays and outside major holiday periods for a quieter experience.",

        about: [
            "Meghalaya is known for its mist-covered hills, dramatic waterfalls, living root bridges and lush green landscapes.",

            "Beyond its popular destinations, the state has countless quieter villages and natural landscapes that make it ideal for travellers looking for something beyond the usual tourist trail."
        ],

        activities: [
            {
                icon: "🌿",
                title: "Explore Forest Trails",
                description:
                    "Discover lush forests and peaceful trails surrounded by Meghalaya's dramatic natural landscape."
            },

            {
                icon: "💧",
                title: "Discover Waterfalls",
                description:
                    "Visit spectacular waterfalls hidden among the hills and forests."
            },

            {
                icon: "🌉",
                title: "See Living Root Bridges",
                description:
                    "Explore remarkable bridges created by guiding the roots of living trees."
            },

            {
                icon: "🏞️",
                title: "Explore Villages",
                description:
                    "Experience local culture and everyday life away from the busiest tourist centres."
            }
        ],

        reach: [
            {
                number: "01",
                title: "Reach Guwahati",
                description:
                    "Guwahati is the main gateway for travellers arriving by air or rail."
            },

            {
                number: "02",
                title: "Travel Into Meghalaya",
                description:
                    "Continue by road towards your chosen destination within Meghalaya."
            },

            {
                number: "03",
                title: "Explore Locally",
                description:
                    "Use local taxis or rented vehicles to explore nearby villages and natural attractions."
            }
        ],

        tips: [
            "Carry a light rain jacket even outside the monsoon season.",
            "Keep some cash for smaller shops and rural areas.",
            "Start early when visiting popular natural attractions.",
            "Respect local communities and avoid leaving waste behind."
        ],

        gallery: [
            "images/meghalaya.jpg",
            "images/meghalaya2.jpg",
            "images/meghalaya3.jpg",
            "images/meghalaya4.jpg"
        ],

        nearby: [
            {
                name: "Shillong",
                distance: "≈ 0 km"
            },

            {
                name: "Cherrapunji",
                distance: "≈ 55 km"
            },

            {
                name: "Mawlynnong",
                distance: "≈ 90 km"
            },

            {
                name: "Dawki",
                distance: "≈ 80 km"
            }
        ]
    }

};


/* =========================================================
   GET SELECTED PLACE
========================================================= */

function getPlaceKey() {

    const params = new URLSearchParams(window.location.search);

    return params.get("place") || "ziro";

}


const placeKey = getPlaceKey();

const place = places[placeKey] || places.ziro;


/* =========================================================
   HELPER
========================================================= */

function getElement(id) {

    return document.getElementById(id);

}


/* =========================================================
   HERO
========================================================= */

function loadHero() {

    const hero = getElement("placeHero");

    const placeName = getElement("placeName");
    const placeLocation = getElement("placeLocation");
    const placeAltitude = getElement("placeAltitude");
    const placeRating = getElement("placeRating");
    const placeType = getElement("placeType");
    const placeTags = getElement("placeTags");

    if (hero) {

        hero.style.backgroundImage =
            `url("${place.heroImage}")`;

    }


    if (placeName) {

        placeName.textContent =
            place.name;

    }


    if (placeLocation) {

        placeLocation.textContent =
            `📍 ${place.location}`;

    }


    if (placeAltitude) {

        placeAltitude.textContent =
            place.altitude;

    }


    if (placeRating) {

        placeRating.textContent =
            place.rating;

    }


    if (placeType) {

        placeType.textContent =
            place.type;

    }


    if (placeTags) {

        placeTags.innerHTML = "";

        place.tags.forEach(tag => {

            const span =
                document.createElement("span");

            span.textContent = tag;

            placeTags.appendChild(span);

        });

    }

}


/* =========================================================
   QUICK STATS
========================================================= */

function loadQuickStats() {

    const bestSeason = getElement("bestSeason");
    const quickCrowd = getElement("quickCrowd");
    const avgBudget = getElement("avgBudget");
    const idealStay = getElement("idealStay");
    const connectivity = getElement("connectivity");

    if (bestSeason)
        bestSeason.textContent = place.bestSeason;

    if (quickCrowd)
        quickCrowd.textContent = place.crowd;

    if (avgBudget)
        avgBudget.textContent = place.budget;

    if (idealStay)
        idealStay.textContent = place.stay;

    if (connectivity)
        connectivity.textContent = place.connectivity;

}


/* =========================================================
   ABOUT
========================================================= */

function loadAbout() {

    const container =
        getElement("aboutText");

    if (!container)
        return;

    container.innerHTML = "";

    place.about.forEach(text => {

        const p =
            document.createElement("p");

        p.textContent = text;

        container.appendChild(p);

    });

}


/* =========================================================
   CROWD
========================================================= */

function loadCrowd() {

    const title =
        getElement("crowdTitle");

    const percentage =
        getElement("crowdPercentage");

    const progress =
        getElement("crowdProgress");

    const tip =
        getElement("crowdTip");


    if (title)
        title.textContent = place.crowdTitle;


    if (percentage)
        percentage.textContent =
            place.crowdPercentage;


    if (tip)
        tip.textContent =
            place.crowdTip;


    if (progress) {

        progress.style.width = "0%";

        setTimeout(() => {

            progress.style.width =
                place.crowdPercentage;

        }, 300);

    }

}


/* =========================================================
   ACTIVITIES
========================================================= */

function loadActivities() {

    const container =
        getElement("activitiesGrid");

    if (!container)
        return;

    container.innerHTML = "";

    place.activities.forEach(activity => {

        const card =
            document.createElement("div");

        card.className =
            "activity-card";

        card.innerHTML = `
            <div class="activity-icon">
                ${activity.icon}
            </div>

            <h3>
                ${activity.title}
            </h3>

            <p>
                ${activity.description}
            </p>
        `;

        container.appendChild(card);

    });

}


/* =========================================================
   HOW TO REACH
========================================================= */

function loadReach() {

    const container =
        getElement("reachTimeline");

    if (!container)
        return;

    container.innerHTML = "";

    place.reach.forEach(step => {

        const element =
            document.createElement("div");

        element.className =
            "reach-step";

        element.innerHTML = `
            <div class="step-number">
                ${step.number}
            </div>

            <div class="step-content">

                <h3>
                    ${step.title}
                </h3>

                <p>
                    ${step.description}
                </p>

            </div>
        `;

        container.appendChild(element);

    });

}


/* =========================================================
   LOCAL TIPS
========================================================= */

function loadTips() {

    const container =
        getElement("tipsList");

    if (!container)
        return;

    container.innerHTML = "";

    place.tips.forEach(tip => {

        const item =
            document.createElement("div");

        item.className =
            "tip-item";

        item.innerHTML = `
            <p>
                ${tip}
            </p>
        `;

        container.appendChild(item);

    });

}


/* =========================================================
   GALLERY
========================================================= */

function loadGallery() {

    const container =
        getElement("galleryGrid");

    if (!container)
        return;

    container.innerHTML = "";

    place.gallery.forEach(image => {

        const item =
            document.createElement("div");

        item.className =
            "gallery-item";

        const img =
            document.createElement("img");

        img.src = image;

        img.alt =
            `${place.name} photo`;

        img.loading = "lazy";

        item.appendChild(img);

        container.appendChild(item);

    });

}


/* =========================================================
   NEARBY PLACES
========================================================= */

function loadNearby() {

    const container =
        getElement("nearbyList");

    if (!container)
        return;

    container.innerHTML = "";

    place.nearby.forEach(item => {

        const element =
            document.createElement("a");

        element.className =
            "nearby-item";

        element.href =
            "places.html";

        element.innerHTML = `
            <strong>
                ${item.name}
            </strong>

            <span>
                ${item.distance}
            </span>
        `;

        container.appendChild(element);

    });

}


/* =========================================================
   SAVE BUTTON
========================================================= */

function setupSaveButtons() {

    const saveButton =
        getElement("saveButton");

    const sidebarSaveButton =
        getElement("sidebarSaveButton");


    function savePlace(button) {

        if (!button)
            return;

        button.addEventListener("click", () => {

            const saved =
                button.dataset.saved === "true";


            if (saved) {

                button.dataset.saved =
                    "false";

                button.textContent =
                    "♡ Save Place";

                if (
                    button ===
                    sidebarSaveButton
                ) {

                    button.textContent =
                        "Save to Wishlist";

                }

            } else {

                button.dataset.saved =
                    "true";

                button.textContent =
                    "♥ Saved";

                if (
                    button ===
                    sidebarSaveButton
                ) {

                    button.textContent =
                        "♥ Saved to Wishlist";

                }

            }

        });

    }


    savePlace(saveButton);
    savePlace(sidebarSaveButton);

}


/* =========================================================
   SHARE BUTTON
========================================================= */

function setupShareButton() {

    const button =
        getElement("shareButton");

    if (!button)
        return;


    button.addEventListener("click", async () => {

        const shareData = {

            title:
                place.name,

            text:
                `Explore ${place.name} with Beyond The Crowd.`,

            url:
                window.location.href

        };


        try {

            if (
                navigator.share
            ) {

                await navigator.share(
                    shareData
                );

            } else {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                const original =
                    button.textContent;

                button.textContent =
                    "✓ Link Copied";

                setTimeout(() => {

                    button.textContent =
                        original;

                }, 2000);

            }

        } catch (error) {

            console.log(
                "Share cancelled."
            );

        }

    });

}


/* =========================================================
   PROFILE MESSAGE
========================================================= */

function setupProfile() {

    const profileButton =
        getElement("profileButton");

    const profileMessage =
        getElement("profileMessage");


    if (
        !profileButton ||
        !profileMessage
    )
        return;


    profileButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            profileMessage.classList.toggle(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        () => {

            profileMessage.classList.remove(
                "show"
            );

        }
    );

}


/* =========================================================
   SIMILAR PLACES
========================================================= */

function loadSimilarPlaces() {

    const container =
        getElement("similarGrid");

    if (!container)
        return;


    container.innerHTML = "";


    Object.entries(places)

        .filter(([key]) =>
            key !== placeKey
        )

        .slice(0, 4)

        .forEach(([key, item]) => {

            const card =
                document.createElement("a");

            card.className =
                "similar-card";

            card.href =
                `place.html?place=${key}`;

            card.style.backgroundImage =
                `url("${item.heroImage}")`;


            card.innerHTML = `

                <div class="similar-card-content">

                    <span>
                        ${item.location}
                    </span>

                    <h3>
                        ${item.name}
                    </h3>

                </div>

            `;


            container.appendChild(card);

        });

}


/* =========================================================
   INITIALIZE PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadHero();

        loadQuickStats();

        loadAbout();

        loadCrowd();

        loadActivities();

        loadReach();

        loadTips();

        loadGallery();

        loadNearby();

        loadSimilarPlaces();

        setupSaveButtons();

        setupShareButton();

        setupProfile();

    }
);