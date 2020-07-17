document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    //selector variables
    const projectCardsContainer = document.querySelector('[data-name="project-cards-container"]');
    const projectDetailsContainer = document.querySelector('[data-name="project-details-container"]');
    const covid = document.querySelector('[data-name="covid"]');
    const pottyspot = document.querySelector('[data-name="pottyspot"]');
    const eventslist = document.querySelector('[data-name="eventslist"]');
    const ageGate = document.querySelector('[data-name="age-gate"]');
    const navbar = document.querySelector('[data-name="navbar"]');
    const dots = document.querySelector('[data-name="dots"]');
    const jobboard = document.querySelector('[data-name="job"]');
    const keto = document.querySelector('[data-name="keto"]');

    //functions
    function generateCards() {
        projectDetailsContainer.style.display = "none";
        covid.style.display = "none";
        pottyspot.style.display = "none";
        eventslist.style.display = "none";
        ageGate.style.display = "none";
        navbar.style.display = "none";
        dots.style.display = "none";
        jobboard.style.display = "none";
        keto.style.display = "none";
        projectCardsContainer.style.display = "block";
    }


    //eventlisteners
    projectCardsContainer.addEventListener('click', event => {
        event.preventDefault();
        let dataName = event.target.dataset.name;
        if(dataName === "covid-open-btn") {
            console.log("covid click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            covid.style.display ="block";
        } else if (dataName === "pottyspot-open-btn") {
            console.log("potty click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            pottyspot.style.display ="block";
        } else if (dataName === "events-open-btn") {
            console.log("events list click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            eventslist.style.display ="block";
        } else if (dataName === "gate-open-btn") {
            console.log("age gate click click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            ageGate.style.display ="block";
        } else if (dataName === "navbar-open-btn") {
            console.log("navbar click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            navbar.style.display ="block";
        } else if (dataName === "dots-open-btn") {
            console.log("dots game click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            dots.style.display ="block";
        } else if(dataName === "job-open-btn") {
            console.log("job board click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            jobboard.style.display ="block";
        } else if(dataName === "keto-open-btn") {
            console.log("keto click");
            projectCardsContainer.style.display = "none";
            projectDetailsContainer.style.display = "block";
            keto.style.display = "block";
        }
    })

    projectDetailsContainer.addEventListener('click', event => {
        event.preventDefault();
        let dataName = event.target.dataset.name;
        if(dataName === "close-btn") {
            console.log("close clicked")
            generateCards();
        }
    })

//   pottyspot.addEventListener('click', event => {
//     event.preventDefault();
//     let dataName = event.target.dataset.name;
//     if(dataName === "close-btn") {
//       generateCards();
//     }
//   })
//   guild.addEventListener('click', event => {
//     event.preventDefault();
//     let dataName = event.target.dataset.name;
//     if(dataName === "close-btn") {
//       generateCards();
//     }
//   })
//   keto.addEventListener('click', event => {
//     event.preventDefault();
//     let dataName = event.target.dataset.name;
//     if(dataName === "close-btn") {
//       generateCards();
//     }
//   })

});