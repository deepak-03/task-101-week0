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
    
    let divContainer = document.createElement("div");
    divContainer.classList.add("imagePost");

    let img = document.createElement("img");
    img.src = imgLink;
    img.classList.add("images");
    
    let likeCommentDiv = document.createElement("div");
    likeCommentDiv.classList.add("likeComment");

    let likeButton = document.createElement("button");
    likeButton.classList.add("likeCommentButton");
    let commentButton = document.createElement("button");
    commentButton.classList.add("likeCommentButton");

    let likeIcon = document.createElement("i");
    let commentIcon = document.createElement("i");

    likeIcon.classList.add("fas");
    likeIcon.classList.add("fa-heart");
    likeIcon.classList.add("onHoverIcon");
    commentIcon.classList.add("fas");
    commentIcon.classList.add("fa-comment");
    commentIcon.classList.add("onHoverIcon");

    let numberOfLikes = document.createElement("div");
    let numberOfComments = document.createElement("div");

    numberOfLikes.innerText = likes;
    numberOfComments.innerText = comments;

    likeButton.appendChild(likeIcon);
    likeButton.appendChild(numberOfLikes);

    commentButton.appendChild(commentIcon);
    commentButton.appendChild(numberOfComments);

    likeCommentDiv.appendChild(likeButton);
    likeCommentDiv.appendChild(commentButton);

    divContainer.appendChild(img);
    divContainer.appendChild(likeCommentDiv);

    imageContainer.appendChild(divContainer);

  });
}       

    

function buildPage({accountPic, profilePic, profileData, igtv, posts}) {
  buildProfilePic(profilePic);
  buidProfileData(profileData);
  buildAccountPic(accountPic);
  buildPosts(posts);
}
