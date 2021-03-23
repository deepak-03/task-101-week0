import {profileControl} from "./controllers/profileControl.js";
import {profileModel} from "./models/profileModel.js";

fetch("./task_1.json")
    .then(resp => resp.json())
    .then((data) => {
        profileModel.data = data.profileData;
        profileControl.init();
        })
