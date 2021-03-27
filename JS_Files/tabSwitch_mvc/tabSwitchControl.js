import { tabSwitchModel } from "./tabSwitchModel.js";
import {tabSwitchView} from "./tabSwitchView.js";

const tabSwitchControl = {
    init : function(){
        tabSwitchView.init(tabSwitchModel.getActiveTab());
    },

    tabSwitch : function(clickedLink){
        let lastTab = tabSwitchModel.getActiveTab();
        tabSwitchModel.setActiveTab(clickedLink);
        tabSwitchView.hideLastTab(lastTab);
        tabSwitchView.displayActiveTab(tabSwitchModel.getActiveTab());
    }
}

export {tabSwitchControl};