var btn_valider = document.querySelector("#btn_valider");
const div_install_windows = document.querySelector("#div_install_windows")
const div_install_linux = document.querySelector("#div_install_linux")

/* Evenement click sur le boutton "Validé" */
btn_valider.addEventListener("click", () => {
    console.log("TEST du boutton 'Valider'");
    var os = document.getElementById("os").value;

    /* Choix de du system d'exploitation */
    if (os == "Windows"){
        console.log("os = Windows");
        div_install_windows.style.display = "block";
        div_install_linux.style.display = "none";
    }
    else {
        console.log("os = Linux");
        div_install_windows.style.display = "none";
        div_install_linux.style.display = "block";
    }
})