
let profileModel = {

    followers: function(){

        if(this.data.followed)
        this.data.followers--;
        else
        this.data.followers++;

        this.data.followed = !this.data.followed;

        return this.data.followed;
    },

    followersOnClick: function(){
        return this.data.followers;
    }
 };

export {profileModel};