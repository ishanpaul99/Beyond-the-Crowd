/* ================= NAVBAR ================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* =========================================================
   PROFILE MESSAGE
   Works on Home, About, and any other page
========================================================= */

const profileButton =
    document.getElementById("profileButton");

const profileMessage =
    document.getElementById("profileMessage");


if (profileButton && profileMessage) {

    profileButton.addEventListener("click", (event) => {

        event.stopPropagation();

        profileMessage.classList.toggle("show");

    });


    /* Close popup when clicking somewhere else */

    document.addEventListener("click", () => {

        profileMessage.classList.remove("show");

    });

}


/* =========================================================
   HOME PAGE — FEATURE SCROLL REVEAL
   Runs only on pages containing .features-section
========================================================= */

const featuresSection =
    document.querySelector(".features-section");


if (featuresSection) {

    const featureHeading =
        document.querySelector(".features-section h2");

    const featureCards =
        document.querySelectorAll(".feature-card");


    let revealTimers = [];


    const featuresObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    /* STEP 1 — Heading */

                    featureHeading.classList.add("show");


                    /* STEP 2 — First row */

                    revealTimers.push(

                        setTimeout(() => {

                            if (featureCards[0]) {
                                featureCards[0].classList.add("show");
                            }

                            if (featureCards[1]) {
                                featureCards[1].classList.add("show");
                            }

                        }, 250)

                    );


                    /* STEP 3 — Second row */

                    revealTimers.push(

                        setTimeout(() => {

                            if (featureCards[2]) {
                                featureCards[2].classList.add("show");
                            }

                            if (featureCards[3]) {
                                featureCards[3].classList.add("show");
                            }

                        }, 500)

                    );

                }

                else {

                    /* Cancel pending animations */

                    revealTimers.forEach(timer => {
                        clearTimeout(timer);
                    });

                    revealTimers = [];


                    /* Reset heading */

                    if (featureHeading) {
                        featureHeading.classList.remove("show");
                    }


                    /* Reset cards */

                    featureCards.forEach(card => {
                        card.classList.remove("show");
                    });

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    featuresObserver.observe(featuresSection);

}