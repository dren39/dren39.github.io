document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  //selector variables
  const projectCardsContainer = document.querySelector('[data-name="project-cards-container"]');
  // const projectDetailsContainer = document.querySelector('[data-name="project-details-container"]');
  const pottyspot = document.querySelector('[data-name="pottyspot"]');
  const guild = document.querySelector('[data-name="guild"]');
  const keto = document.querySelector('[data-name="keto"]');

  //functions
  function generateCards() {
    console.log('close clicked')
    pottyspot.style.display = "none";
    guild.style.display = "none";
    keto.style.display = "none";
    projectCardsContainer.style.display = "block";
  }


  //eventlisteners
  projectCardsContainer.addEventListener('click', event => {
    event.preventDefault();
    let dataName = event.target.dataset.name;
    if(dataName === "pottyspot-open-btn") {
      console.log("potty click");
      projectCardsContainer.style.display = "none";
      pottyspot.style.display ="block";
    }
    else if(dataName === "guild-open-btn") {
      console.log("guild click");
      projectCardsContainer.style.display = "none";
      guild.style.display ="block";
    }
    else if(dataName === "keto-open-btn") {
      console.log("keto click");
      projectCardsContainer.style.display = "none";
      keto.style.display = "block";
    }
  })

  // projectDetailsContainer.addEventListener('click', event => {
  //   event.preventDefault();
  //   let dataName = event.target.dataset.name;
  //   if(dataName === "close-btn") {
  //     console.log("close clicked")
  //     // generateCards();
  //   }
  // })

  pottyspot.addEventListener('click', event => {
    event.preventDefault();
    let dataName = event.target.dataset.name;
    if(dataName === "close-btn") {
      generateCards();
    }
  })
  guild.addEventListener('click', event => {
    event.preventDefault();
    let dataName = event.target.dataset.name;
    if(dataName === "close-btn") {
      generateCards();
    }
  })
  keto.addEventListener('click', event => {
    event.preventDefault();
    let dataName = event.target.dataset.name;
    if(dataName === "close-btn") {
      generateCards();
    }
  })

});