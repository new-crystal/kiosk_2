/**menu button */
const info = document.querySelector("#info");
const web = document.querySelector("#web");
const edu = document.querySelector("#edu");
const eton = document.querySelector("#eton");
const connnect = document.querySelector("#connnect");
const homeBoxes = document.querySelectorAll(".home_box");
const menuBoxes = document.querySelectorAll(".menu_box");


/**menu box */
let info_menu_toggle = false;
let web_menu_toggle = false;
const info_menu = document.querySelector(".info_menu_box");
const libial_button = document.querySelector(".libial_button");
const web_menu = document.querySelector(".web_menu_box");
const web_menu_button = document.querySelector(".web_menu_button")

/** web 2 page */
const live_button = document.querySelector(".live_button");

const web2_img_box = document.querySelector(".web2_img_box");
const web2_img_box_2 = document.querySelector(".web2_img_box_2");

const web_video = document.querySelector(".web_video");


let infoTime;
let webTime;

/**menu button */
info.addEventListener("click", ()=>{
    if(info_menu_toggle === true){
        clearTimeout(infoTime)
        info_menu.style.display = "none";
        libial_button.style.display = "none";
        live_button.style.display = ""
        info_menu_toggle = false;

        info.src = "./assets/menu/info_menu_off.png"
        web.src = "./assets/menu/web_menu.png";
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

        info.classList.remove("animation");
        live_button.classList.remove("animation")

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })

        infoTime = setTimeout(()=>{
            web.classList.add("animation");
            live_button.classList.add("animation")
        }, 100)

    }else{
        clearTimeout(infoTime)
        info_menu.style.display = "";
        libial_button.style.display = "";
        live_button.style.display = "none"
        web_menu.style.display = "none";
        web_menu_button.style.display = "none";
        info_menu_toggle = true;
        web_menu_toggle = false;
        libial_button.classList.remove("animation"); 
        live_button.classList.remove("animation")

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })

       infoTime = setTimeout(()=>{
            info.classList.add("animation");
            libial_button.classList.add("animation");
            live_button.classList.add("animation")
        },100)

        info.src = "./assets/menu/info_menu.png"
        web.src = "./assets/menu/web_menu_off.png";
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

    }  
})

web.addEventListener("click", ()=>{
    if(web_menu_toggle === true){

        clearTimeout(webTime)
        web_menu.style.display = "none";
        web_menu_button.style.display = "none";
        web_menu_toggle = false;

        info.src = "./assets/menu/info_menu_off.png";
        web.src = "./assets/menu/web_menu.png";
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"

        web.classList.remove("animation");
        live_button.classList.remove("animation")

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })
        webTime = setTimeout(()=>{
            web.classList.add("animation");
            live_button.classList.add("animation")
        }, 100)

    }else{
        clearTimeout(webTime)
        web_menu.style.display = "";
        web_menu_button.style.display = "";
        live_button.style.display = ""
        info_menu.style.display = "none";
        libial_button.style.display = "none";
        web_menu_toggle = true;        
        info_menu_toggle = false;
        
        web.src = "./assets/menu/web_menu.png";
        web_menu_button.classList.remove("animation"); 
        live_button.classList.remove("animation")

        menuBoxes.forEach((menuBox)=>{
            menuBox.classList.remove("animation");
        })

        webTime = setTimeout(()=>{
            web.classList.add("animation");
            web_menu_button.classList.add("animation");
            live_button.classList.add("animation")
        },100)
        
        info.src = "./assets/menu/info_menu_off.png"
        edu.src = "./assets/menu/edu_menu_off.png"
        eton.src = "./assets/menu/etonogestrel_menu_off.png"
        connnect.src = "./assets/menu/connect_menu_off.png"
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
        window.location.href = "main.html";
    })
})
/**리비알 버튼 클릭시 리비알 페이지로 이동 */
libial_button.addEventListener("click", ()=>{
    window.location.href = "libial.html"
})

web_menu_button.addEventListener("click", ()=>{
    window.location.href = "webcast.html"
})

live_button.addEventListener("click", ()=>{
    web2_img_box.style.display = "none";
    web2_img_box_2.style.display = ""

    web_video.play();
})

window.onload = ()=>{
    clearTimeout(infoTime);
    clearTimeout(webTime);
    web.classList.add("animation")
    live_button.classList.add("animation")
}

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