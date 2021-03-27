import {postsModel} from "./postsModel.js";
import {postsView} from "./postsView.js";

const postsControl = {
    init: function(){
        postsView.init();
    },

    getData: function(){
        return postsModel.data;
    }
}


export {postsControl};