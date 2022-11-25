import { log } from "../functions/my_functions.js";

export function myHeader(){
    log("Import : myHeader");
    const HEADER = document.querySelector('HEADER');
    const LOGO = document.createElement('img');
    LOGO.src = "../../style/LOGO_game_server_tools.png";
    LOGO.alt = "Logo du site 'GAME SERVER TOOLS'";

    const PARAGRAPHE1 = document.createElement('p');
    const P1 = document.createTextNode(`
    Cette page rassemble des outils et des informations permettant la mise en place, la gestion, et le modding de serveur de jeux.
    Tous les outils mis à disposition s’exécutent localement et ne nécessitent pas de connexion internet,
    toutefois une connexion internet sera nécessaire pour installer un serveur avec SteamCMD.
    Chacun des outils est compatible pour une utilisation sur un système Windows et linux.
    `);

    const PARAGRAPHE2 = document.createElement('p');

    const TOOLS_LISTE = [
        "Installation de SteamCMD",
        "Installation de serveur via SteamCMD",
        "Modder un server"
    ];


    // Ajout du logo dans le header
    HEADER.append(LOGO);
    // Ajoute du texte 'p1' dans dans une balise <p> 'PARAGRAPHE1'
    PARAGRAPHE1.append(P1);
    // Ajout du PARAGRAPHE1 dans le header
    HEADER.append(PARAGRAPHE1);
    // Ajout du texte dans PARAGRAPHE2
    PARAGRAPHE2.append(document.createTextNode('Outils disponibles :'));
    // Ajout du PARAGRAPHE2 dans le header
    HEADER.append(PARAGRAPHE2);

    // Boucle qui liste les élément de TOOLS_LISTE
    let ul = document.createElement('ul');
    HEADER.append(ul)
    for (let i = 0; i < TOOLS_LISTE.length; i++){
        log(TOOLS_LISTE[i]);

        let mLi = document.createElement('li')
        ul.append(mLi)
        mLi.textContent = TOOLS_LISTE[i]
    }

    // Creation du style du header
    let headerStyle = document.createElement('style');
    headerStyle.textContent = `
    header{
        margin: 10px auto;
        box-sizing: border-box;
        width: 90%;
        border: 5px solid rgb(0, 0, 0);
        padding: 20px;
        border-radius: 40px;
    }
    
    img{
        width: 100%;
        height: 63px;
    }
    
    header p{
        margin: 20px 0;
    }
    
    header li{
        margin: 6px 35px;
    }

    /*Centrage du bouton 'Continuer'*/
    header nav{
        margin: auto;
        width: 70%;
        display: flex;
        align-items: center;
    }
    
    header button{
        color: #ffffff;
        background-color: #000000;
        border-radius: 5px;
        padding: 10px 20px;
        transition: 1s;
        margin: 5px auto;
    }

    header button:hover{
        color: #000000;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 10px 20px;
    }

    `;

    // Ajout du style du header
    HEADER.prepend(headerStyle);

    // Creation du boutton du header
    const nav = document.createElement('nav')
    const BTN = document.createElement('button');
    BTN.id = 'btn_continuer';
    BTN.style = 'width: 500px;';
    BTN.textContent = 'Continuer';
    nav.append(BTN);
    HEADER.append(nav)

    //-------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------

    HEADER.addEventListener('click', (e) =>{
        // log(e.target.id)

        // click sur le boutton 'continuer'
        if(e.target.id == 'btn_continuer'){
            log('TEST: BTN continuer');
            // display none sur les 'p' et 'ul'
            document.getElementsByTagName('p')[0].style.display = 'none'
            document.getElementsByTagName('p')[1].style.display = 'none'
            document.getElementsByTagName('ul')[0].style.display = 'none'
            document.getElementById('btn_continuer').style.display = 'none'
    
            // creation des btn lien des fonctions
            for(let i = 0; i < TOOLS_LISTE.length; i++){
                const BTN = document.createElement('button')
                BTN.id = 'btn_f'+i;
                BTN.style = 'padding: 5px; margin: 5px auto;';
                BTN.textContent = TOOLS_LISTE[i];
                nav.append(BTN);
    
            }
            // Passage de la nav en display flex pour la disposition des btn outils
            nav.style = 'display: flex; align-items: center; width: 70%; margin: auto;';
    
            // Animation
            // HEADER.style.height = '390px';
    
        }

        if(e.target.id == 'btn_f0'){
            log('TEST: BTN btn_f0');
        };
        if(e.target.id == 'btn_f1'){
            log('TEST: BTN btn_f1');
        };
        if(e.target.id == 'btn_f2'){
            log('TEST: BTN btn_f2');
        };


    });
};