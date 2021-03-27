import {videoModel} from "./videoModel.js";
import {videoView} from "./videoView.js";

const videoControl = {
    init: function(){
        videoView.init();
    },

    getData: function(){
        return videoModel.data;
    }
}


export {videoControl};