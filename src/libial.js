/**menu button */
const info = document.querySelector("#info");
const web = document.querySelector("#web");
const edu = document.querySelector("#edu");
const eton = document.querySelector("#eton");
const connnect = document.querySelector("#connnect");
const homeBox = document.querySelector(".home_box");
const menuBoxes = document.querySelectorAll(".menu_box");
const body = document.querySelector("#body")

/**menu box */
let info_menu_toggle = false;
let web_menu_toggle = false;
const info_menu = document.querySelector(".info_menu_box");
const libial_button = document.querySelector(".libial_button");
const web_menu = document.querySelector(".web_menu_box");
const web_menu_button = document.querySelector(".web_menu_button")


let infoTime;
let webTime;

/**menu button */
info.addEventListener("click", (e)=>{
    resetTimer()
    e.stopPropagation()
    if(info_menu_toggle === true){
        clearTimeout(infoTime)
        info_menu.style.display = "none";
        libial_button.style.display = "none";
        info_menu_toggle = false;
        libial_button.classList.add("fadeInUp_animation");  
        libial_button.classList.remove("animation"); 

        info.src = "./assets/menu/info_menu.png";
        web.src = "./assets/menu/web_menu_off.png";
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

        // info.classList.remove("animation");
        libial_button.classList.remove("animation"); 

        info.classList.add("animation")

    }else{
        clearTimeout(infoTime)

        info_menu.style.display = "";
        libial_button.style.display = "";
        web_menu.style.display = "none";
        web_menu_button.style.display = "none";
        info_menu_toggle = true;
        web_menu_toggle = false;
        libial_button.classList.remove("animation")
        libial_button.classList.add("fadeInUp_animation");

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })

        info.src = "./assets/menu/info_menu.png";
        web.src = "./assets/menu/web_menu_off.png";
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

    }  
})

web.addEventListener("click", (e)=>{
    resetTimer()
    e.stopPropagation()
    if(web_menu_toggle === true){

        clearTimeout(webTime)
        web_menu.style.display = "none";
        web_menu_button.style.display = "none";
        web_menu_toggle = false;                                    
        web_menu_button.classList.add("fadeInUp_animation");  
        web_menu_button.classList.remove("animation"); 

        info.src = "./assets/menu/info_menu.png";
        web.src = "./assets/menu/web_menu_off.png";
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

        // web.classList.remove("animation");

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })

        info.classList.add("animation");

    }else{
        web_menu.style.display = "";
        web_menu_button.style.display = "";
        info_menu.style.display = "none";
        libial_button.style.display = "none";
        web_menu_button.classList.remove("animation");
        web_menu_button.classList.add("fadeInUp_animation");  

        web_menu_toggle = true;
        info_menu_toggle = false;
        web.src = "./assets/menu/web_menu.png";

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })

        info.src = "./assets/menu/info_menu_off.png"
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

    }
})

/** 애니메이션 끝나고 다른 애니메이션 시작 */
libial_button.addEventListener("animationend", ()=>{
    libial_button.classList.remove("fadeInUp_animation");

    setTimeout(()=>{
        info.classList.add("animation");
        libial_button.classList.add("animation");
    },100)
})


web_menu_button.addEventListener("animationend", ()=>{
    web_menu_button.classList.remove("fadeInUp_animation");

    setTimeout(()=>{
        web.classList.add("animation");
        web_menu_button.classList.add("animation");
    },100)
})

body.addEventListener("click", ()=>{
    resetTimer()
    clearTimeout(webTime)
    web_menu.style.display = "none";
    web_menu_button.style.display = "none";
    web_menu_toggle = false;                                    
    web_menu_button.classList.add("fadeInUp_animation");  
    web_menu_button.classList.remove("animation"); 

    info.src = "./assets/menu/info_menu.png";
    web.src = "./assets/menu/web_menu_off.png";
    edu.src = "./assets/menu/edu_menu_off.png"
    eton.src = "./assets/menu/etonogestrel_menu_off.png"
    connnect.src = "./assets/menu/connect_menu_off.png"

    menuBoxes.forEach((menuBox)=>{
        menuBox.classList.remove("animation");
    })

    info.classList.add("animation");

    clearTimeout(infoTime)
    info_menu.style.display = "none";
    libial_button.style.display = "none";
    info_menu_toggle = false;
    libial_button.classList.add("fadeInUp_animation");  
    libial_button.classList.remove("animation"); 

    info.classList.add("animation")

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
    window.location.href = "main.html";

})

/**리비알 버튼 클릭시 리비알 페이지로 이동 */
libial_button.addEventListener("click", ()=>{
    window.location.href = "libial.html"
})

web_menu_button.addEventListener("click", ()=>{
    window.location.href = "webcast.html"
})


window.addEventListener("beforeunload", ()=>{
    clearTimeout(infoTime);
    clearTimeout(webTime);
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

let timeoutID;
// 이벤트가 발생하면 기존 타이머를 취소하고 새로운 타이머 시작
function resetTimer() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(goToMainScreen, 180000);
  }
  
  function goToMainScreen() {
    window.location.href = "main.html"
  }