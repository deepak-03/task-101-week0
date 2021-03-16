
(function follow(){
    let followButton = document.getElementById("followButton");
    let followed = false;
      followButton.onclick = () => {
      let followCountDiv = document.getElementById("numberOfFollowers");
      followButton.classList.toggle("followed");
      followButton.value = followed?"Follow": "Unfollow";
      followCountDiv.innerText = parseInt(followCountDiv.innerText) + (followed?-1:1);
      followed = !followed;
    }
    })();