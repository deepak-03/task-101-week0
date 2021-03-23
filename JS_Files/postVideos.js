fetch("./task_1.json")
  .then(resp => resp.json())
  .then(buildPage);

//POSTING VIDEOS
function buildVideos(postsArray) {
    const videoContainer = document.getElementById("igtvContainer");
    postsArray.forEach(({id, vidLink, likes, comments}) => {
  
      const vidContainer = document.createElement("div");
      vidContainer.classList.add("imagePost");
  
      const vid = document.createElement("video");
      vid.controls = true;
      vid.classList.add("images");
  
      const source = document.createElement("source");
      source.src = vidLink;
      vid.appendChild(source);
      
      // Creating a div container for buttons(icons and numbers)
      const likeCommentDiv = document.createElement("div");
      likeCommentDiv.classList.add("likeComment");
    
      const likeButton = document.createElement("button");
      likeButton.classList.add("likeCommentButton");
      
      const commentButton = document.createElement("button");
      commentButton.classList.add("likeCommentButton");

      const likeIcon = createLikeIcon();
      const commentIcon = createCommentIcon();
      const numberOfLikes = createLikeNumber(likes);
      const numberOfComments = createCommentNumber(comments);
  
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

function buildPage({igtv}) {
  buildVideos(igtv);
}