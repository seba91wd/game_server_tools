const btn_valider = document.querySelector("#btn_valider");
const btn_download = document.querySelector("#btn_download")
const div_data_install = document.querySelector("#data_install")

const div_steam_login = document.getElementById("div_steam_login")
const div_appid = document.getElementById("div_appid")

/* Nécessaire car "document.getElementById("game").value" n'est pas une fonction */
/* message d'erreur dans la console si utilisé avec ".value" :( */
var game = document.getElementById("game")

/* Evenement changement de jeux dans le menu déroullant "game" */
game.addEventListener('change', (event) => {
    console.log("TEST évenement menu déroulant")
    /* Affiche la div "div_steam_login" si "Arma 3" est choisit */
    if (game.value == "Arma 3"){
        div_steam_login.style.display = "block"
        div_appid.style.display = "none"
    }
    /* Affiche la div "div_appid" si "Jeux non listé" est choisit */
    else if (game.value == "Jeux non listé"){
        div_appid.style.display = "block"
        div_steam_login.style.display = "none"
    }
    /* Masque les div "div_steam_login" et "div_appid" */
    else {
        div_steam_login.style.display = "none"
        div_appid.style.display = "none"
    }
})

/* Evenement click sur le boutton "Validé" */
btn_valider.addEventListener("click", () => {
    console.log("TEST du boutton 'Valider'");

    var os = document.getElementById("os").value;
    var extention = document.querySelector("#extention")

    var game_value = document.getElementById("game").value;
    var id_game_steam = document.querySelector("#id_game_steam")

    var input_dir_steamcmd = document.getElementById("input_dir_steamcmd").value;
    var dir_steamcmd = document.querySelector("#dir_steamcmd")

    var input_dir_install = document.getElementById("input_dir_install").value;
    var dir_install = document.querySelector("#dir_install");

    var username = document.getElementById("username")
    var mdp = document.getElementById("mdp")

    var input_appid = document.getElementById("input_appid").value

    /* Affiche la div "data_install" de "install_server.html" */
    div_data_install.style.display = "block"
    /* Affiche le boutton "Téléchargé" */
    btn_download.style.display = "block"

    /* Choix de du system d'exploitation */
    if (os == "Windows"){
        console.log("os = Windows");
        extention.innerHTML = ".exe"
        ext = ".bat"
    }
     else {
        console.log("os = Linux");
        extention.innerHTML = ".sh";
        ext = ".sh"
    }
    
    /* Choix du serveur de jeux */
    if (game_value == "Ark"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "376030";
        username.innerHTML = "anonymous";
    }
    if (game_value == "Arma 3"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "233780";
        var input_username = document.getElementById("input_username").value;
        var input_mdp = document.getElementById("input_mdp").value;
        username.innerHTML = input_username;
        mdp.innerHTML = input_mdp;
    }
    if (game_value == "CounterStrike Source"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "232330";
        username.innerHTML = "anonymous";
    }
    if (game_value == "Left 4 Dead 2"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "222860";
        username.innerHTML = "anonymous";
    }
    if (game_value == "Empyrion"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "530870";
        username.innerHTML = "anonymous";
    }
    if (game_value == "Project Zomboid"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "380870";
        username.innerHTML = "anonymous";
    }
    if (game_value == "Satisfactory"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML = "1690800";
        username.innerHTML = "anonymous";
    }
    if (game_value == "Valheim"){
        console.log("game = " + game_value);
        id_game_steam.innerHTML= "892970"
        username.innerHTML = "anonymous";
    }
    if (game_value == "Jeux non listé"){
        console.log("game = " + game_value);
        console.log("Appid = " + input_appid);
        id_game_steam.innerHTML = input_appid;
    }


    /* Chemin steamcmd */
    console.log("Chemin steamcmd = " + input_dir_steamcmd);
    dir_steamcmd.innerHTML = input_dir_steamcmd;
    if (input_dir_steamcmd == ""){
        alert("Si le chemin de 'steam CMD' est vide, utilisez le fichier a la racine de steamcmd.exe/.sh ")
    }

    /* Chemin d'installation du serveur */
    console.log("Chemin d'installation serveur = " + input_dir_install);
    dir_install.innerHTML = input_dir_install;
    if (input_dir_install == ""){
        alert("Entré un chemin d'installation pour votre serveur !!! ")
    }
})

/* Evenement click sur le boutton "Télécharger le fichier" */
btn_download.addEventListener("click", async () => {
    /* test du boutton "Télécharger le fichier" */
    console.log("TEST du boutton 'Télécharger le fichier'")

    /* Variable du contenu généré dans la div "data_install" de index.html */
    var data_install = document.querySelector("#data_install").textContent
    /* Supression  des indentations data_install => (                <p>@echo off</br>) */
    /* (/^\s+|\s+$/gm,'') = #incompréhensible mais fonctionne */
    data_install = data_install.replace(/^\s+|\s+$/gm,'');
    
    /* Fonction Téléchargement */
    /* Reference */
    /* https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server */
    function download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      element.click();
    }
    // Start file download.
    /* Télécharge le contenu de data_install renommé en (install_"nom du jeux"_server".bin/.sh") */
    download("install_" + game.value + "_server" + ext, data_install);
})
