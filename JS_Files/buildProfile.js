fetch("./task_1.json")
  .then(resp => resp.json())
  .then(buildPage);

// ACCOUNT PIC

function buildAccountPic(accountPic){
    let accountPicture = document.getElementById("accountPic");
    accountPicture.src = accountPic.url;
  }
  
  //PROFILE PIC
  
  function buildProfilePic(profilePic) {
    let imgElement = document.getElementById("profileImage");
    imgElement.src = profilePic.url;
  }
  
  //PROFILE DATA
  
  function buidProfileData(profileData){
    let profName = document.getElementById("profileName");
    profName.innerText = profileData.name;
  
    let numberOfPosts = document.getElementById("numberOfPosts");
    numberOfPosts.innerText = profileData.numberOfPosts;
  
    let numberOfFollowers = document.getElementById("numberOfFollowers");
    numberOfFollowers.innerText = profileData.followers;
    
    let numberOfFollowing = document.getElementById("numberOfFollowing");
    numberOfFollowing.innerText = profileData.following;
  }
  
  //PROFILE BIO
  
  function buildProfileBio(profileBio){
    let profBio = document.getElementById("row_3");
    profBio.innerHTML = `
      <div class="companyName">
        <p>${profileBio.profileName}</p>
      </div>
      <div class="companyTag">
        <p>${profileBio.aboutYou}</p>
      </div>
      <div>
        <p>${profileBio.description}</p>
      </div>
      <p class="siteLink"><a href="#">
        <p>${profileBio.externalLink}</p>
      </a></p>
    `;
  }

  function buildPage({profileBio, accountPic, profilePic, profileData}) {
    buildProfileBio(profileBio);
    buildProfilePic(profilePic);
    buidProfileData(profileData);
    buildAccountPic(accountPic);
  }