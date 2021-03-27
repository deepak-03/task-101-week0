// (function tabSwitch(){
// const postLink = document.getElementById("imageLink");
// const igtvLink = document.getElementById("igtvLink");


// igtvLink.onclick = () =>{
//   igtv.classList.remove("hidden");
//   postLink.classList.remove("active");
//   post.classList.add("hidden");
//   igtvLink.classList.add("active");
// }

// postLink.onclick = () =>{
//   post.classList.remove("hidden");
//   igtvLink.classList.remove("active");
//   igtv.classList.add("hidden");
//   postLink.classList.add("active");
// }}
// )();
import {tabSwitchControl} from "./tabSwitchControl.js";

const post = document.getElementById("postsHere");
const igtv = document.getElementById("igtvHere");

const tabSwitchView = { 

  init: function(activeTab){
    this.displayActiveTab(activeTab);
  },

  displayActiveTab: function(activeTab){
    document.getElementById(activeTab).classList.add("active");
    if(activeTab === "imageLink")
    post.classList.remove("hidden");
    else
    igtv.classList.remove("hidden");
  },

  hideLastTab: function(lastTab){
    document.getElementById(lastTab).classList.remove("active");
    if(lastTab === "imageLink")
    post.classList.add("hidden");
    else
    igtv.classList.add("hidden");
  }
}

const menuContainer = document.getElementById("menuContainer");
menuContainer.addEventListener("click", (event)=>{
tabSwitchControl.tabSwitch(event.target.parentElement.id);
// console.log(event.target);
})

export {tabSwitchView};


// IMPLEMENTING 2 TABS
// function onTabClick(event){
//   let activeTabs = document.querySelectorAll(".active");

  // console.log(activeTabs);
  // console.log(event.target);

  // for(var i=0; i<activeTabs.length; i++){
  //   activeTabs[i].className =  activeTabs[i].className.replace("active","");
  // }

  // event.target.parentElement.className += " active";
  // console.log(event.target.parentElement);
  // console.log(document.getElementById(event.target.href.split('#')[1]).className);  
  // document.getElementById(event.target.href.split('#')[1]).className += ' active';
// }

// const ele = document.getElementById("menuContainer");

// ele.addEventListener('click', onTabClick, false);
