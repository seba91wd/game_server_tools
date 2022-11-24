import { log } from "../../index.js";

export function myHeader(){
    log("Import : myHeader");
    const HEADER = document.querySelector("HEADER");
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
        "Installation de SteamCMD.",
        "Installation de serveur via SteamCMD.",
        "Modder un server."
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

    // var ul = document.createElement("ul");
    // HEADER.appendChild(ul);
    // for (let i = 0; i < TOOLS_LISTE.length; i++){
    //     log(TOOLS_LISTE[i]);

    //     var li = document.createElement("li");  
    //     li.innerHTML = TOOLS_LISTE[i]
    //     ul.appendChild(li);
    // }

    let monUL = document.createElement("ul");
    HEADER.append(monUL)
    for (let i = 0; i < TOOLS_LISTE.length; i++){
        log(TOOLS_LISTE[i]);

        let mLi = document.createElement('li')
        monUL.append(mLi)
        mLi.textContent = TOOLS_LISTE[i]
    }
    let headerStyle = document.createElement("style");
    // const style = document.querySelector('style')

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
    `
    HEADER.prepend(headerStyle)

}





// let monButton = document.querySelector('button')
// let monTItre = document.querySelector('input')
// let monText = document.querySelector('textarea')
// let monUL = document.querySelector('ul')
// let body = document.querySelector('body')
// const monH2 = document.querySelector('#mT')

// monButton.addEventListener('click', function(){
// mh2 = document.createElement('h2')
// mLi = document.createElement('li')
// mDiv = document.createElement('div')
// monUL.prepend(mDiv)
// mDiv.prepend(mLi)
// mDiv.prepend(mh2)
// mLi.textContent = monText.value
// mh2.textContent = monTItre.value
// monText.value = '';
// monTItre.value = '';
// })