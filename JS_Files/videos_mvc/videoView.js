import {videoControl} from "./videoControl.js";
import {createLikeIcon, createCommentIcon, createLikeNumber, createCommentNumber} from "../posts_mvc/postsView.js";

const videoView = {

    init: function(){
        this.render();
    },

    render: function(){
        this.videoData = videoControl.getData();
        const videoContainer = document.getElementById("igtvContainer");
        this.videoData.forEach(({id1, vidLink, likes, comments}) => {
    
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
}

export {videoView};