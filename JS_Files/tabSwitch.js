(function tabSwitch(){
const postLink = document.getElementById("imageLink");
const igtvLink = document.getElementById("igtvLink");
const post = document.getElementById("postsHere");
const igtv = document.getElementById("igtvHere");

igtvLink.onclick = () =>{
  igtv.classList.remove("hidden");
  postLink.classList.remove("active");
  post.classList.add("hidden");
  igtvLink.classList.add("active");
}

postLink.onclick = () =>{
  post.classList.remove("hidden");
  igtvLink.classList.remove("active");
  igtv.classList.add("hidden");
  postLink.classList.add("active");
}}
)();


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
