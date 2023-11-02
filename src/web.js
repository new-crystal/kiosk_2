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

/** web page */
const background = document.querySelector(".background");
const web_page_1 = document.querySelector(".web_img_box");
const web_page_2 = document.querySelector(".web_img_box_2");
const web_btn_1 = document.querySelector(".web_btn_1");
const web_btn_2 = document.querySelector(".web_btn_2");

/** web page modal */
const web_modal_1 = document.querySelector(".web_modal_1");
const web_modal_btn_1 = document.querySelector(".web_modal_btn_1");
const web_modal_1_close_btn = document.querySelector(".web_modal_1_close_btn")
const web_modal_input_1 = document.querySelector(".web_modal_input_1")
const web_modal_input_2 = document.querySelector(".web_modal_input_2")
const checkBox_1 = document.querySelector(".checkBox_1")
const checkBox_2 = document.querySelector(".checkBox_2")
const checkBox_3 = document.querySelector(".checkBox_3")

const web_modal_2 = document.querySelector(".web_modal_2");
const web_modal_btn_2 = document.querySelector(".web_modal_btn_2");
const web_modal_2_close_btn = document.querySelector(".web_modal_2_close_btn")


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

/** webcast 라이브 버튼 클릭시 web 페이지로 이동 */
web_menu_button.addEventListener("click", ()=>{
    window.location.href = "webcast.html"
})

/**강의 세부정보 버튼 클릭 이벤트 */
web_btn_1.addEventListener("click", ()=>{
    web_page_1.style.display = "none";
    web_btn_1.style.display = "none";
    web_page_2.style.display = "";   
})

let checkBox_1_toggle = false;
let checkBox_2_toggle = false;
let checkBox_3_toggle = false;

checkBox_1.addEventListener("click", (e)=>{
    e.stopPropagation()
    if(checkBox_1_toggle === true){
        checkBox_1.style.opacity = 0;
        checkBox_1_toggle = false;
    }else{
        checkBox_1.style.opacity = 1;
        checkBox_1_toggle = true;
    }
})

checkBox_2.addEventListener("click", (e)=>{
    e.stopPropagation()
    if(checkBox_2_toggle === true){
        checkBox_2.style.opacity = 0;
        checkBox_2_toggle = false;
    }else{
        checkBox_2.style.opacity = 1;
        checkBox_2_toggle = true;
    }
})

checkBox_3.addEventListener("click", (e)=>{
    e.stopPropagation()
    if(checkBox_3_toggle === true){
        checkBox_3.style.opacity = 0;
        checkBox_3_toggle = false;
    }else{
        checkBox_3.style.opacity = 1;
        checkBox_3_toggle = true;
    }
})

/** 사전등록 버튼 클릭 이벤트 */
web_btn_2.addEventListener("click", ()=>{
    web_modal_1.style.display = "";
    web_modal_btn_1.style.display = "";
    web_modal_1_close_btn.style.display = "";
    web_modal_input_1.focus()

    background.style.display = "";
    web_modal_2.style.display = "none";
    web_modal_btn_2.style.display = "none";
    web_modal_2_close_btn.style.display = "none";
})

web_modal_1.addEventListener("click", (e)=>{
    e.stopPropagation();
})

web_modal_input_1.addEventListener("click", (e)=>{
    e.stopPropagation();
})

web_modal_input_2.addEventListener("click", (e)=>{
    e.stopPropagation();
})

/**뒷 배경 클릭 이벤트 */
background.addEventListener("click", ()=>{
    web_modal_1.style.display = "none";
    web_modal_btn_1.style.display = "none";
    web_modal_1_close_btn.style.display = "none";
    web_modal_input_1.style.display = "none"
    web_modal_input_2.style.display = "none"

    web_modal_2.style.display = "none";
    web_modal_btn_2.style.display = "none";
    web_modal_2_close_btn.style.display = "none";
    background.style.display = "none";
})

web_modal_btn_1.addEventListener("click", (e)=>{
    e.stopPropagation();
    web_modal_1.style.display = "none";
    web_modal_btn_1.style.display = "none";
    web_modal_1_close_btn.style.display = "none";
    web_modal_input_1.style.display = "none"
    web_modal_input_2.style.display = "none"
    
    web_modal_2.style.display = "";
    web_modal_btn_2.style.display = "";
    web_modal_2_close_btn.style.display = "";
})

web_modal_2.addEventListener("click", (e)=>{
    e.stopPropagation();
})

web_modal_btn_2.addEventListener("click", (e)=>{
    e.stopPropagation();
    window.location.href = "webcast2.html"
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