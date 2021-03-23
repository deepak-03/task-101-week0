import {elementID} from "../DOM_IDS.js";
import {profileControl} from "./../controllers/profileControl.js";

let profileView = {
    init: function(){
        this.data = profileControl.getProfileData();
        this.render();
    },

    render: function(){
        elementID.accountPicture.src = this.data.accountPicUrl;
        elementID.imgElement.src = this.data.profilePicUrl;
        elementID.profName.innerText = this.data.name;
        elementID.numberOfPosts.innerText = this.data.numberOfPosts;
        elementID.numberOfFollowers.innerText = this.data.followers;
        elementID.numberOfFollowing.innerText = this.data.following;
        elementID.profBio.innerHTML = `
            <div class="companyName">
            <p>${this.data.profileName}</p>
            </div>
            <div class="companyTag">
            <p>${this.data.aboutYou}</p>
            </div>
            <div>
            <p>${this.data.description}</p>
            </div>
            <p class="siteLink"><a href="#">
            <p>${this.data.externalLink}</p>
            </a></p>
        `;

    },

    followButtonToggle : function(Followed){
        elementID.followButton.classList.toggle("followed");
        if(Followed)
        elementID.followButton.value = "Unfollow";
        else
        elementID.followButton.value = "Follow";
    },

    followersUpdate: function(followers){
        elementID.numberOfFollowers.innerText = followers;
    }
};
    elementID.followButton.addEventListener('click',()=>{
        profileControl.followButtonClicked();
    })

export {profileView};