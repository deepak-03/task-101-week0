import {profileModel} from "./profileModel.js";
import {profileView} from "./profileView.js";

const profileControl ={

    init : function(){
        profileView.init();
    },

    getProfileData : function(){
        return profileModel.data;
    },

    followButtonClicked: function(){
        
        const Followed = profileModel.followers();
        profileView.followButtonToggle(Followed);

        const Followers = profileModel.followersOnClick();
        profileView.followersUpdate(Followers);

    }
}

export {profileControl};