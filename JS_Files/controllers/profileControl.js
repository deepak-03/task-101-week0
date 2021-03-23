import {profileModel} from "./../models/profileModel.js";
import {profileView} from "./../views/profileView.js";

let profileControl ={

    init : function(){
        profileView.init();
    },

    getProfileData : function(){
        return profileModel.data;
    },

    followButtonClicked: function(){
        
        let Followed = profileModel.followers();
        profileView.followButtonToggle(Followed);

        let Followers = profileModel.followersOnClick();
        profileView.followersUpdate(Followers);

    }


}

export {profileControl};