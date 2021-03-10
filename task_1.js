let p1 = fetch("./task_1.json");
// console.log(p1);
p1
  .then(function(resp) {
    return resp.json();
  })
  .then(data => buildPage(data));

function buildAccountPic(accountPic){
  let accountPicture = document.getElementById("accountPic");
  accountPicture.src = accountPic.url;
}

function buildProfilePic(profilePic) {
  let imgElement = document.getElementById("profileImage");
  imgElement.src = profilePic.url;
}

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
