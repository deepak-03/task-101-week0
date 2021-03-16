fetch("./task_1.json")
  .then(resp => resp.json())
  .then(buildPage);

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
    console.log(document.getElementById(likeIcon));

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
    // let icon = document.getElementById("");
    // console.log(icon);
    // likeButton.addEventListener('click', () => {
      
    //   icon.classList.toggle("unlikedIcon");
    // })
  })
} 


function buildPage({posts}) {
  buildPosts(posts);
}
