import {profileControl} from "./profile_mvc/profileControl.js";
import {profileModel} from "./profile_mvc/profileModel.js";
import {postsControl} from "./posts_mvc/postsControl.js";
import {postsModel} from "./posts_mvc/postsModel.js";
import { videoModel } from "./videos_mvc/videoModel.js";
import { videoControl } from "./videos_mvc/videoControl.js";
import { tabSwitchModel } from "./tabSwitch_mvc/tabSwitchModel.js";
import { tabSwitchControl } from "./tabSwitch_mvc/tabSwitchControl.js";

fetch("./task_1.json")
    .then(resp => resp.json())
    .then((data) => {
        profileModel.data = data.profileData;
        postsModel.data = data.posts;
        videoModel.data = data.igtv;
        tabSwitchModel.activeTab = data.activeTab;
        
        profileControl.init();
        postsControl.init();
        videoControl.init();
        tabSwitchControl.init();
        })
