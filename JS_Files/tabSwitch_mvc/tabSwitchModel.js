const tabSwitchModel = {
    activeTab: "",

    getActiveTab: function(){
        return this.activeTab;
    },

    setActiveTab: function(activeTab){
        this.activeTab = activeTab;
    }
}

export {tabSwitchModel};