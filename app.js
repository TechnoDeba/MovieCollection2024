const arrows=document.querySelectorAll(".arrow");
const movieList=document.querySelectorAll(".movie-list");
const lefts=document.querySelectorAll("left_arrow");
arrows.forEach((arrow,i)=> {
    const itemNo=movieList[i].querySelectorAll("img").length;
   let click=0;
   let ratio=Math.floor(window.innerWidth/300);
arrow.addEventListener("click",()=>{
    click++;
   console.log(click);
   console.log(ratio);
   console.log(itemNo);
   console.log(itemNo-(4+click)+(4-ratio));
    if(itemNo-(4+click)+(4-ratio)>=0){
    movieList[i].style.transform=`translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 330}px)`;
    }
    else {
        movieList[i].style.transform="translateX(0px)";
        click=0;
    }
})
});

const magic_ball=document.querySelector(".ball");
const items=document.querySelectorAll(".content-container,.navbar-container,.sidebar,.sidebar-content,.menu-container,.arrow,.toggler,.container");

magic_ball.addEventListener("click",switchBgColorMode);
function switchBgColorMode(){
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    magic_ball.classList.toggle("active");
}