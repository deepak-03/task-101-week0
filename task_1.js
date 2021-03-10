fetch("./task_1.json")
  .then(resp => resp.json())
  .then(buildPage);

// FOLLOW BUTTON

let followed = false;

let followButton = document.getElementById("followButton");
followButton.onclick = () => {
  let followCountDiv = document.getElementById("numberOfFollowers");
  followButton.classList.toggle("followed");
  followButton.value = followed?"Follow": "Unfollow";
  followCountDiv.innerText = parseInt(followCountDiv.innerText) + (followed?-1:1);
  followed = !followed;
}

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

// POSTING IMAGES

function buildPosts(postsArray) {
  const imageContainer = document.getElementById("imagesContainer");
  postsArray.forEach(({id, imgLink, likes, comments}) => {
    let img = document.createElement("img");
    img.src = imgLink;
    img.classList.add("images");
    imageContainer.appendChild(img);
  });
}       

    

function buildPage({accountPic, profilePic, profileData, igtv, posts}) {
  buildProfilePic(profilePic);
  buidProfileData(profileData);
  buildAccountPic(accountPic);
  buildPosts(posts);
}
