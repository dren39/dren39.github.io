document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  //selector variables
  const projectsContainer = document.querySelector("#projects-container");
  const body = document.querySelector('body');

  //project 1 variables
  const project1Name = "Potty Spot";
  const project1FrontRepo = "https://github.com/dren39/pottyspot-frontend";
  const project1BackRepo = "https://github.com/dren39/pottyspot-backend";
  const project1About = "PottySpot was an idea born out of a need for a convenient way to locate a restroom when people are outside and do not have immediate access to a restroom. The app displays a map that marks a user's current location as well as nearby businesses or establishments that have restrooms open to the public. Users can open the markers to get more detailed information about a particular business such as the distance from their current location in miles, if the business requires customers to make a purchase before they can use the restroom, or if there is a electronic pass lock on the restroom door, and even rate the cleanliness of the restroom. PottySpot is a user and community driven app, meaning users can update information about the restroom and let other users know in real time";
  const project1Desc = "When the user first open the app it will take the user's latitude and longitude coordinates from their browser and pass that data to a Ruby on Rails back end server. The server makes an HTTP GET request to an API using the geo-coordinates and receives back a json response of all store locations with restrooms within the vicinity of the coordinates. The Rails server passes this data to the front end and uses HTML/CSS, JavaScript, React, and Redux to display this information on a dynamically generated map.";
  const project1Video = "https://drive.google.com/file/d/1DYjOLs5_CoPkUh-N6n-0jTCL26qg3Ncm/preview";
  
  //project 2 variables
  const project2Name = "Guild Quest";
  const project2FrontRepo = "https://github.com/dren39/mod-3-final-project/tree/master/frontend";
  const project2BackRepo = "https://github.com/dren39/mod-3-final-project/tree/master/backend";
  const project2About = "Guild Quest took inspiration from community help sites like Stack Overflow and e-commerce sites like Ebay and Craiglist. The app serves as a place for users to post help requests such as help replacing a car tire or putting up a fence in the backyeard. Other users can accept these requests and work out a compensation agreement with the original poster.";
  const project2Desc = "The app is a single page application using a front end built on HTML/CSS and pure JavaScript. The homepage displays a list of recent requests that are sent from a Rails back end sever. Users have to create and account before they are able to post and accept requests, the account and request creation are then created and stored in the back end as POST requests.";
  const project2Video = "https://drive.google.com/file/d/1edi_Tm8-ovMLzOA9k3W4wXu0-pTkwVEp/preview";

  //project 3 variables
  const project3Name = "KetoMe";
  const project3Repo = "https://github.com/dren39/nutrition-app";
  const nothing = false;
  const project3About = "KetoMe is a nutrional app designed to tailor to the needs of users on the Ketogenic diet. The app allows users to keep track of the meals that they consume on a daily basis as well as the unit count of each nutrion they consume. The app also allows users to search and add for the meals that they consume by entering keywords into the search bar";
  const project3Desc = "KetoMe is an app built using Ruby on Rails as both a back end and front end. The app makes HTTP POST requests when users create an account or adds meals to their profile. The profile page makes GET requests for each individual user in order to populate the profile page with their consumed meals as well as calculating the nutrional values of each meal. The meal search functionality makes GET requests to an API based on the user search times. It also incorporates the levenshtein distance theory to self-correct erroneous search terms entered by users.";
  const project3Video = "https://drive.google.com/file/d/1fUctvNbeAc1QJaENyLo-IPRw_xHiDeRI/preview";

  //functions
  function generateProject(projectName, frontRepo, backRepo, about, desc, video) {
    if(frontRepo && backRepo) {
      projectsContainer.innerHTML = `
        <div>
          <h3 class="font">${projectName}</h3>
          <div>
            <a href=${frontRepo} class="repo">Front-End Repository</a>
          </div>
          <div>
            <a href=${backRepo} class="repo">Back-End Repository</a>
          </div>
          <h5 class="font" id="about-app">About the app</h5>
          <p class="font project-class">${about}</p>
          <h5 class="font">How the app works</h5>
          <p class="font project-class">${desc}</p>
          <iframe src="${video}" width="700" height="450"></iframe>
          <div><button type="button" class="btn btn-primary" id="close-btn">Close</button></div>
          
        </div>
      `
    }
    else {
      projectsContainer.innerHTML = `
        <div>
          <h3 class="font">${projectName}</h3>
          <div>
            <a href=${frontRepo} class="repo">Github Repository</a>
          </div>
          <h5 class="font">About the app</h5>
          <p class="font project-class">${about}</p>
          <h5 class="font">How the app works</h5>
          <p class="font project-class">${desc}</p>
          <iframe src="${video}" width="700" height="450"></iframe>
          <button type="button" class="btn btn-primary" id="close-btn">Close</button>
        </div>
      `
    }
  }//end of function

  function generateCards() {
    projectsContainer.innerHTML = `
      <h2 class="font">Projects</h2>
      <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">PottySpot</h5>
                <p class="card-text">An app utilizing geocoding to generate maps 
                    and markers of nearby locations with available restrooms</p>
                <button class="btn btn-primary" data-id="1">See Project</button>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Guild Quest</h5>
                <p class="card-text">Web app that allows users to post help requests for other users to 
                    complete in exchange for rewards/compensations</p>
                <button class="btn btn-primary" data-id="2">See Project</button>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">KetoMe</h5>
                <p class="card-text">A nutrition app for users on the Keto diet to track 
                    their daily nutrition intake</p>
                <button class="btn btn-primary" data-id="3">See Project</button>
              </div>
            </div>
          </div>
        </div>
      `
  }//end of function


  //eventlisteners
  projectsContainer.addEventListener('click', event => {
    event.preventDefault();
    let projectId = event.target.dataset.id;
    if(projectId === "1") {
      generateProject(project1Name, project1FrontRepo, project1BackRepo, project1About, project1Desc, project1Video);
    }
    else if(projectId === "2") {
      generateProject(project2Name, project2FrontRepo, project2BackRepo, project2About, project2Desc, project2Video);
    }
    else if(projectId === "3") {
      generateProject(project3Name, project3Repo, nothing, project3About, project3Desc, project3Video);
    }
    else if(event.target.id === "close-btn") {
      console.log("close button was clicked")
      generateCards();
    }
    else if (event.target.className == "repo"){
      window.location.href = event.target.href;
    }
  })//end of listener

});