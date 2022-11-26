/* Fichier javascript lié a index.html */

// import {sayHi} from './tools/modd_pz/modd_pz.js';


/*Element div "header_box" */
const header_box = document.getElementById("header_box");

/* Element div "preambule" */
const preambule = document.getElementById("preambule")

/*Element boutton "Continuer" */
const btn_continuer = document.getElementById("btn_continuer");

/* Element boutton toggle_header_box */
const btn_toggle_header_box = document.getElementById("btn_toggle_header_box")

/* Element div "function_list" de index.html */
const function_list = document.getElementById("function_list");

/* Element <object> id "tool_page" */
const tool_page = document.getElementById("tool_page");

/* Boutton "Installé un serveur" */
const btn_install_server = document.querySelector("#btn_install_server");

/* Boutton "Installé SteamCMD" */
const btn_install_steamcmd = document.querySelector("#btn_install_steamcmd");

/* Boutton "Moddé Project Zombod" */
const btn_modd_pz = document.getElementById("btn_modd_pz");

/* Element "frame" de index.html */
const frame_conf = document.querySelector("#frame_conf");

/* Evenement click du boutton "Continuer" */
btn_continuer.addEventListener("click", () => {
    console.log("TEST du boutton 'Continuer'");

    btn_continuer.style.display = "none";
    preambule.style.transition = "0.5s ease";
    preambule.style.opacity = "0";
    // preambule.className = "preambule_off";
    setTimeout(function(){
        header_box.style.transition = "0.5s ease";
        header_box.style.height = "100px";
        preambule.style.display = "none";
    }, 500);

    setTimeout(function(){
        header_box.style.transition = "0.5s ease";
        header_box.style.height = "150px";
    }, 1000);

    setTimeout(function(){
        function_list.style.display = "flex";
        // function_list.style.opacity = "1"
    }, 1500);
});

/*Evenement click sur le boutton "btn_toggle_header_box" */
btn_toggle_header_box.addEventListener("click", () =>{
    // console.log("TEST boutton 'btn_toggle_header_box'")
    
    if (btn_toggle_header_box.innerHTML == "↑"){
        // console.log("TEST masque 'header_box'");

        btn_toggle_header_box.innerHTML = "↓";
        header_box.style.opacity = "0";
        setTimeout(() => {
            header_box.style.display = "none"
            incHeight("up")
        },500)
    }
    else{
        // console.log("TEST affiche 'header_box'");

        btn_toggle_header_box.innerHTML = "↑";
        header_box.style.display = "block"
        setTimeout(() => {
            header_box.style.opacity = "1";
            incHeight("down")
        }, 100);
        
    }
});

function incHeight(direction) {
    console.log("test fonction incHeight")
    var height = tool_page.offsetHeight;
    var val = 150;

    if (direction == "up"){
        var newHeight = height + val;
        tool_page.style.height = newHeight + 'px';
    };
    if (direction == "down"){
        var newHeight = height - val;
        tool_page.style.height = newHeight + 'px';
    };
}

/* Evenement click sur le boutton "Installé un serveur" */
btn_install_server.addEventListener("click", () =>{
    // console.log("TEST du boutton 'Installé un serveur'");

    /* Affiche le boutton "toggle_header_box" */
    btn_toggle_header_box.style.display = "block";
    /* Affiche <object> tool_page */
    tool_page.style.display = "block"
    tool_page.data = "./tools/install_server/install_server.html"
    tool_page.height = "430px"
});

/* Evenement click sur le boutton "Installé SteamCMD" */
btn_install_steamcmd.addEventListener("click", () =>{
    // console.log("TEST du boutton 'Installé SteamCMD");

    /* Affiche le boutton "toggle_header_box" */
    btn_toggle_header_box.style.display = "block";
    /* Affiche <object> tool_page */
    tool_page.style.display = "block"
    tool_page.data = "./tools/install_steamcmd/install_steamcmd.html"
    tool_page.height = "720px"
});

/* Evenement click sur le boutton "Moddé Project Zomboid" */
btn_modd_pz.addEventListener("click", () =>{
    // console.log("TEST du boutton 'Moddé Project Zomboid");

    /* Affiche le boutton "toggle_header_box" */
    btn_toggle_header_box.style.display = "block";
    /* Affiche <object> tool_page */
    tool_page.style.display = "block"
    tool_page.data = "./tools/modd_pz/modd_pz.html"
    tool_page.height = "720px"
});


// Zone de test //







/* Augmente la hauteur (height) de "tool_page" pour suprimer la double scrollbar */

// var x = 750;
// const tool_page = document.getElementById("tool_page");
// const body = document.getElementById("body");
// tool_page.contentWindow.addEventListener("scroll", (e) =>{
//     console.log("Object:",tool_page.contentWindow.scrollY)
//     // console.log("body:",body.contentWindow.scrollY)

//     if (tool_page.contentWindow.scrollY != 0){
//         console.log("tool_page.height = +50px")
//         x = x += 50;
//         tool_page.height = x + "px";
//     }
// })


