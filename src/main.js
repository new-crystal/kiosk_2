"use strict"
/**menu button */
const info = document.querySelector("#info");
const web = document.querySelector("#web");
const edu = document.querySelector("#edu");
const eton = document.querySelector("#eton");
const connnect = document.querySelector("#connnect");
const homeBox = document.querySelector(".home_box");

/**menu box */
let info_menu_toggle = false;
let web_menu_toggle = false;
const info_menu = document.querySelector(".info_menu_box");
const libial_button = document.querySelector(".libial_button");
const web_menu = document.querySelector(".web_menu_box");
const web_menu_button = document.querySelector(".web_menu_button")

/**index page */
const background = document.querySelector(".background");

/**menu button */
info.addEventListener("click", ()=>{
    if(info_menu_toggle === true){
        info_menu.style.display = "none";
        libial_button.style.display = "none";
        info_menu_toggle = false;
    }else{
        info_menu.style.display = "";
        libial_button.style.display = "";
        web_menu.style.display = "none";
        web_menu_button.style.display = "none";
        info_menu_toggle = true;
    }  
})

web.addEventListener("click", ()=>{
    if(web_menu_toggle === true){
        web_menu.style.display = "none";
        web_menu_button.style.display = "none";
        web_menu_toggle = false;
    }else{
        web_menu.style.display = "";
        web_menu_button.style.display = "";
        info_menu.style.display = "none";
        libial_button.style.display = "none";
        web_menu_toggle = false;
    }
})

edu.addEventListener("click", ()=>{
    window.location.href = "edu.html"
})


eton.addEventListener("click", ()=>{
    window.location.href = "etonogestrel.html"
})


connnect.addEventListener("click", ()=>{
    window.location.href = "connect.html"
})

/**홈 버튼 */
homeBox.addEventListener("click", ()=>{
    window.location.href = "index.html";
})

/**리비알 버튼 클릭시 리비알 페이지로 이동 */
libial_button.addEventListener("click", ()=>{
    window.location.href = "libial.html";
})

web_menu_button.addEventListener("click", ()=>{
    window.location.href = "webcast.html"
})


/** 배경 이미지 클릭 시 사라짐 */
background.addEventListener("click", ()=>{
    background.style.display = "none";
})

window.onload = () => {
    background.style.display = "";
    info_menu.style.display = "none";
    libial_button.style.display = "none";
}

 /**우클릭 방지 */
 document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
}, false);

/**확대 축소 방지 */
document.body.addEventListener('touchstart', function(e) {
if ( (e.touches.length > 1) || e.targetTouches.length > 1) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
    }, {passive: false});

// 텍스트를 길게 터치할 때 복사 이벤트를 막습니다.
document.addEventListener("contextmenu", function (event) {
event.preventDefault(); // 기본 동작을 막습니다.
});

// 선택을 방지합니다.
document.addEventListener("selectstart", function (event) {
event.preventDefault(); // 선택을 방지합니다.
});