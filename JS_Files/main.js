import {profileControl} from "./profile_mvc/profileControl.js";
import {profileModel} from "./profile_mvc/profileModel.js";

fetch("./task_1.json")
    .then(resp => resp.json())
    .then((data) => {
        profileModel.data = data.profileData;
        profileControl.init();
        })
