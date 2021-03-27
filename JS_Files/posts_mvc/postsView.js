import {postsControl} from "./postsControl.js";

const postsView = {

    init: function(){
        this.render();
    },

    render: function(){
        this.postsData = postsControl.getData();
        const imageContainer = document.getElementById("imagesContainer");
        this.postsData.forEach(({id1, imgLink, likes, comments}) => {
    
            // Creating a div container for image and icons
            const divContainer = document.createElement("div");
            divContainer.classList.add("imagePost");
        
            const img = document.createElement("img");
            img.src = imgLink;
            img.classList.add("images");
        
            const likeButton = document.createElement("button");
            likeButton.classList.add("likeCommentButton");
            
            const commentButton = document.createElement("button");
            commentButton.classList.add("likeCommentButton");
            
            // Creating a div container for buttons(icons and numbers)
            const likeCommentDiv = document.createElement("div");
            likeCommentDiv.classList.add("likeComment");
        
            const likeIcon = createLikeIcon();
            const commentIcon = createCommentIcon();
            const numberOfLikes = createLikeNumber(likes);
            const numberOfComments = createCommentNumber(comments);
        
            // likeIcon.id = id1;
            // likeIcon.style.color = "red";
        
            // let icon = document.getElementById("i");
            // console.log(icon);
            // likeButton.addEventListener('click', ()=>{
            //   // console.log(likeIcon);
            //   likeIcon.style.color = "red";
            // });
        
            likeButton.appendChild(likeIcon);
            likeButton.appendChild(numberOfLikes);
        
            commentButton.appendChild(commentIcon);
            commentButton.appendChild(numberOfComments);
        
            likeCommentDiv.appendChild(likeButton);
            likeCommentDiv.appendChild(commentButton);
        
            divContainer.appendChild(img);
            divContainer.appendChild(likeCommentDiv);
        
            imageContainer.appendChild(divContainer);
          })
    }
}


function createLikeIcon(){

  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fas");
  likeIcon.classList.add("fa-heart");
  likeIcon.classList.add("onHoverIcon");
  return likeIcon;

}

function createCommentIcon(){

  const commentIcon = document.createElement("i");
  commentIcon.classList.add("fas");
  commentIcon.classList.add("fa-comment");
  commentIcon.classList.add("onHoverIcon");
  return commentIcon;

}

function createLikeNumber(likes){

  const numberOfLikes = document.createElement("div");
  numberOfLikes.innerText = likes;
  return numberOfLikes;
}

function createCommentNumber(comments){

  const numberOfComments = document.createElement("div");
  numberOfComments.innerText = comments;
  return numberOfComments;
  
}

export {postsView, createLikeIcon, createCommentIcon, createLikeNumber, createCommentNumber};