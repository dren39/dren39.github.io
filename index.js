document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  //selector variables
  const projectsContainer = document.querySelector("#projects-container");
  const body = document.querySelector('body');

  //project 1 variables
  const project1FrontRepo = "https://github.com/dren39/pottyspot-frontend";
  const project1BackRepo = "https://github.com/dren39/pottyspot-backend";
  const project1Video = "https://drive.google.com/file/d/1DYjOLs5_CoPkUh-N6n-0jTCL26qg3Ncm/preview";
  const project1About = "About project 1";
  const project1Desc = "Technical description about project 1";

  //project 2 variables
  const project2FrontRepo = "https://github.com/dren39/mod-3-final-project/tree/master/frontend";
  const project2BackRepo = "https://github.com/dren39/mod-3-final-project/tree/master/backend";
  const project2Video = "https://drive.google.com/file/d/1edi_Tm8-ovMLzOA9k3W4wXu0-pTkwVEp/preview";
  const project2About = "About project 2";
  const project2Desc = "Technical description about project 2";

  //project 3 variables
  const project3Repo = "https://github.com/dren39/nutrition-app";
  const nothing = false;
  const project3About = "About project 3";
  const project3Desc = "Technical description about project 3";

  //functions
  function generateProject(frontRepo, backRepo, video, about, desc) {
    // body.innerHTML = `
    // <div>
    //     <a href=${frontRepo}>Front-End Repository</a>
    //     <a href=${backRepo}>Back-End Repository</a>
    //       <p>About the project</p>
    //       <p>${about}</p>
    //       <p>How it works</p>
    //       <p>${desc}</p>
    //       <button id="close-btn">Close</button>
    //     </div>
    // `
    if(frontRepo && backRepo) {
      projectsContainer.innerHTML = `
        <div>
        <a href=${frontRepo} class="repo">Front-End Repository</a>
        <a href=${backRepo} class="repo">Back-End Repository</a>
          <p>About the project</p>
          <iframe src="${video}" width="640" height="480"></iframe>
          <p>${about}</p>
          <p>How it works</p>
          <p>${desc}</p>
          <button id="close-btn">Close</button>
        </div>
      `
    }
    else {
      projectsContainer.innerHTML = `
        <div>
        <a href=${frontRepo} class="repo">Repository</a>
          <p>About the project</p>
          <p>${about}</p>
          <p>How it works</p>
          <p>${desc}</p>
          <button id="close-btn">Close</button>
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
    // console.log(event.target);
    if(projectId === "1") {
      generateProject(project1FrontRepo, project1BackRepo, project1Video, project1About, project1Desc);
    }
    else if(projectId === "2") {
      generateProject(project2FrontRepo, project2BackRepo, project2Video, project2About, project2Desc);
    }
    else if(projectId === "3") {
      generateProject(project3Repo, nothing, project3About, project3Desc);
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