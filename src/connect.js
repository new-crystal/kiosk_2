/**menu button */
const info = document.querySelector("#info");
const web = document.querySelector("#web");
const edu = document.querySelector("#edu");
const eton = document.querySelector("#eton");
const connnect = document.querySelector("#connnect");
const homeBoxes = document.querySelectorAll(".home_box");

/**menu box */
let info_menu_toggle = false;
let web_menu_toggle = false;
const info_menu = document.querySelector(".info_menu_box");
const libial_button = document.querySelector(".libial_button");
const web_menu = document.querySelector(".web_menu_box");
const web_menu_button = document.querySelector(".web_menu_button")


/** connect page */
const connect_1_img_box = document.querySelector(".connect_1_img_box")
const connect_btn = document.querySelector(".connect_btn")

const connect_2_img_box = document.querySelector(".connect_2_img_box")
const gray_btn = document.querySelector(".gray_btn")
const orange_btn = document.querySelector(".orange_btn")

const select_box_1 = document.querySelector(".select_box_1");
const option_box_1 = document.querySelector(".option_box_1");
const option_1 = document.querySelector(".option_1");

const select_box_2 = document.querySelector(".select_box_2");
const option_box_2 = document.querySelector(".option_box_2");
const option_2 = document.querySelector(".option_2");

const background = document.querySelector(".background")
const connect_modal = document.querySelector(".connect_modal")
const connect_modal_btn = document.querySelector(".connect_modal_btn")

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
homeBoxes.forEach((homeBox)=>{
    homeBox.addEventListener("click", ()=>{
        window.location.href = "index.html";
    })
})
/**리비알 버튼 클릭시 리비알 페이지로 이동 */
libial_button.addEventListener("click", ()=>{
    window.location.href = "libial.html"
})

web_menu_button.addEventListener("click", ()=>{
    window.location.href = "webcast.html"
})

connect_btn.addEventListener("click", ()=>{
    connect_1_img_box.style.display = "none";
    connect_2_img_box.style.display = "";
})

select_box_1.addEventListener("click", ()=>{
    select_box_1.style.display = "none";
    option_box_1.style.display = "";
    option_1.style.display = "";
})

option_1.addEventListener("click", ()=>{
    option_box_1.style.display = "none";
    option_1.style.display = "none";

    select_box_2.style.display = "";
})

option_box_1.addEventListener("click", ()=>{
    option_box_1.style.display = "none";
    option_1.style.display = "none";

    select_box_2.style.display = "";
})

select_box_2.addEventListener("click", ()=>{
    select_box_2.style.display = "none"
    option_box_2.style.display = "";
    option_2.style.display = "";
})

option_2.addEventListener("click", ()=>{
    option_box_2.style.display = "none";
    option_2.style.display = "none"
    gray_btn.style.display = "none";
    orange_btn.style.display = "";
})

option_box_2.addEventListener("click", ()=>{
    option_box_2.style.display = "none";
    option_2.style.display = "none"
    gray_btn.style.display = "none";
    orange_btn.style.display = "";
})

orange_btn.addEventListener("click", ()=>{
    background.style.display = "";
    connect_modal.style.display = "";
    connect_modal_btn.style.display = "";
})

background.addEventListener("click", ()=>{
    background.style.display = "none";
    connect_modal.style.display = "none";
    connect_modal_btn.style.display = "none";
})

connect_modal_btn.addEventListener("click", ()=>{
    window.location.href = "index.html"
})

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