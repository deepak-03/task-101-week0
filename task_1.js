fetch("./task_1.json")
  .then(resp => resp.json())
  .then(buildPage);

// FOLLOW BUTTON

(function follow(){
let followButton = document.getElementById("followButton");
let followed = false;
  followButton.onclick = () => {
  let followCountDiv = document.getElementById("numberOfFollowers");
  followButton.classList.toggle("followed");
  followButton.value = followed?"Follow": "Unfollow";
  followCountDiv.innerText = parseInt(followCountDiv.innerText) + (followed?-1:1);
  followed = !followed;
}
})()

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
    
    // Creating a div container for image and icons
    const divContainer = document.createElement("div");
    divContainer.classList.add("imagePost");

    const img = document.createElement("img");
    img.src = imgLink;
    img.classList.add("images");
    
    // Creating a div container for buttons(icons and numbers)
    const likeCommentDiv = document.createElement("div");
    likeCommentDiv.classList.add("likeComment");

    const likeButton = document.createElement("button");
    likeButton.classList.add("likeCommentButton");
    const commentButton = document.createElement("button");
    commentButton.classList.add("likeCommentButton");

    const likeIcon = document.createElement("i");
    const commentIcon = document.createElement("i");

    likeIcon.classList.add("fas");
    likeIcon.classList.add("fa-heart");
    likeIcon.classList.add("onHoverIcon");
    commentIcon.classList.add("fas");
    commentIcon.classList.add("fa-comment");
    commentIcon.classList.add("onHoverIcon");

    likeIcon.id = "ICON" + id;
    // console.log(likeIcon.id);

    const numberOfLikes = document.createElement("div");
    const numberOfComments = document.createElement("div");

    numberOfLikes.innerText = likes;
    numberOfLikes.id = "LIKES" + id;
    // console.log(numberOfLikes.id);
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


 // LIKE ICON TOGGLING

  let liked = false;
    // let likeI = document.getElementById("likeIcon");
    likeButton.onclick = () => {
    // console.log(5);
    // let likeCountDiv = document.getElementById("numberOfLikes");
    // console.log(5);
    likeIcon.classList.toggle("UnLikedIcon");
    console.log(likeIcon.classList);
    // likeCountDiv.innerText = parseInt(likeCountDiv.innerText) + (liked?-1:1);
    // liked = !liked;
    console.log(likeButton.innerHTML);
                              }
  })
}  

//POSTING VIDEOS
function buildVideos(postsArray) {
  const videoContainer = document.getElementById("igtvContainer");
  postsArray.forEach(({id, vidLink, likes, comments}) => {

    const vidContainer = document.createElement("div");
    vidContainer.classList.add("imagePost");

    const vid = document.createElement("video");
    vid.src = vidLink;
    vid.controls = true;
    vid.classList.add("images");
    
    // Creating a div container for buttons(icons and numbers)
    const likeCommentDiv = document.createElement("div");
    likeCommentDiv.classList.add("likeComment");

    const likeButton = document.createElement("button");
    likeButton.classList.add("likeCommentButton");
    const commentButton = document.createElement("button");
    commentButton.classList.add("likeCommentButton");

    const likeIcon = document.createElement("i");
    const commentIcon = document.createElement("i");

    likeIcon.classList.add("fas");
    likeIcon.classList.add("fa-heart");
    likeIcon.classList.add("onHoverIcon");
    commentIcon.classList.add("fas");
    commentIcon.classList.add("fa-comment");
    commentIcon.classList.add("onHoverIcon");

    likeIcon.id = "ICON" + id;
    // console.log(likeIcon.id);

    const numberOfLikes = document.createElement("div");
    const numberOfComments = document.createElement("div");

    numberOfLikes.innerText = likes;
    numberOfLikes.id = "LIKES" + id;
    // console.log(numberOfLikes.id);
    numberOfComments.innerText = comments;

    likeButton.appendChild(likeIcon);
    likeButton.appendChild(numberOfLikes);

    commentButton.appendChild(commentIcon);
    commentButton.appendChild(numberOfComments);

    likeCommentDiv.appendChild(likeButton);
    likeCommentDiv.appendChild(commentButton);

    vidContainer.appendChild(vid);
    vidContainer.appendChild(likeCommentDiv);

    videoContainer.appendChild(vidContainer);


  })
}


// IMPLEMENTING 2 TABS
// function onTabClick(event){
//   let activeTabs = document.querySelectorAll(".active");

  // console.log(activeTabs);
  // console.log(event.target);

  // for(var i=0; i<activeTabs.length; i++){
  //   activeTabs[i].className =  activeTabs[i].className.replace("active","");
  // }

  // event.target.parentElement.className += " active";
  // console.log(event.target.parentElement);
  // console.log(document.getElementById(event.target.href.split('#')[1]).className);  
  // document.getElementById(event.target.href.split('#')[1]).className += ' active';
// }

// const ele = document.getElementById("menuContainer");

// ele.addEventListener('click', onTabClick, false);


const postLink = document.getElementById("imageLink");
const igtvLink = document.getElementById("igtvLink");
const post = document.getElementById("postsHere");
const igtv = document.getElementById("igtvHere");

igtvLink.onclick = () =>{
  igtv.classList.remove("hidden");
  postLink.classList.remove("active");
  post.classList.add("hidden");
  igtvLink.classList.add("active");
}

postLink.onclick = () =>{
  post.classList.remove("hidden");
  igtvLink.classList.remove("active");
  igtv.classList.add("hidden");
  postLink.classList.add("active");
}

function buildPage({accountPic, profilePic, profileData, igtv, posts}) {
  buildProfilePic(profilePic);
  buidProfileData(profileData);
  buildAccountPic(accountPic);
  buildPosts(posts);
  buildVideos(igtv);
}
