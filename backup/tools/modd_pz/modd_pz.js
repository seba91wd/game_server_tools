const btn_add_modd = document.getElementById("btn_add_modd");
const btn_gliste = document.getElementById("btn_gliste");
const btn_edit_cell = document.getElementById("btn_edit_cell");

const tableau = document.getElementById("tableau");
const table_body = document.getElementById("table_body");

/* zone de test */
// function pz_height(){
//     var pz_scrollHeight = document.getElementById("body_pz").scrollHeight;
//     return pz_scrollHeight;
// };
// export {pz_height} from "./index.js";



/* fin zone de test */

btn_add_modd.addEventListener("click", () =>{
    
    var nb_lignes = tableau.rows.length;
    var mod_id = document.getElementById("mod_id");
    var workshop_id = document.getElementById("workshop_id");
    var map_folder = document.getElementById("map_folder");
    var link = document.getElementById("lien");
    var description = document.getElementById("description");

    // console.log("TEST boutton 'Ajouté modd'")

    if (mod_id.value, workshop_id.value == ""){
        alert("Minimum requis pour ajout 'Mod ID' et Workshop ID")
        return
    }
    /* Ajoute une ligne a la fin du tableau */
    ligne = table_body.insertRow(-1);

    /* Cellule "Numéro" */
    cell = ligne.insertCell(0);
    cell.innerHTML = nb_lignes;

    /* Cellule "Mod ID" */
    cell = ligne.insertCell(1);
    cell.innerHTML = mod_id.value;

    /* Cellule "Workshop ID" */
    cell = ligne.insertCell(2);
    cell.innerHTML = workshop_id.value;

    /* Cellule "Map Folder" */
    cell = ligne.insertCell(3);
    cell.innerHTML = map_folder.value;
    
    /* Cellule "Lien" */
    cell = ligne.insertCell(4);
    cell.innerHTML = link.value;
    
    /* Cellule "Description" */
    cell = ligne.insertCell(5);
    cell.innerHTML = description.value;

    /* Cellule up down dell */
    cell = ligne.insertCell(6);
    cell.style.width = "160px";

    btn_del = '<button onclick="supprimerLigne(this.parentNode.parentNode.rowIndex)">Suprimer</button>';
    cell.insertAdjacentHTML('afterbegin',btn_del);

    btn_down = '<button onclick="move(`down`)">↓</button>';
    cell.insertAdjacentHTML('afterbegin',btn_down);

    btn_up = '<button onclick="move(`up`)">↑</button>';
    cell.insertAdjacentHTML('afterbegin',btn_up);

    /* Vide les contenus des parametres du mod à ajouter */
    mod_id.value = "";
    workshop_id.value = "";
    map_folder.value = "";
    link.value = "";
    description.value = "";
});


btn_edit_cell.addEventListener("click", () => {
    if (btn_edit_cell.innerHTML == "Modifier cellule : inactif"){
        btn_edit_cell.innerHTML = "Modifier cellule : actif";
        table_body.setAttribute("contenteditable", true);
    }
    else{
        btn_edit_cell.innerHTML = "Modifier cellule : inactif";
        table_body.setAttribute("contenteditable", false);
    }
})


btn_gliste.addEventListener("click", () =>{
    var nb_lignes = tableau.rows.length;
    var list_mod_id = document.getElementById("list_mod_id");
    var list_workshop_id = document.getElementById("list_workshop_id");
    var list_map = document.getElementById("list_map");

    /* Vide les contenus de "mod_id", "liste_Mods", "liste_Map" */
    list_mod_id.textContent = "";
    list_workshop_id.textContent = "";
    list_map.textContent = "";

    for (let i = "1"; i < nb_lignes - "1"; i++) {
        /* Variable contenant la colone "Mod ID" */
        var data_mod_id = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[1].textContent;

        /* Variable contenant la colone "Workshop ID" */
        var data_workshop_id = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[2].textContent;

        /* Variable contenant la colone "Map Folder" */
        var data_map_folder = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[3].textContent;

        /* Ajoute les "Mod ID" les un derière les autres separés par un ";" */
        list_mod_id.insertAdjacentHTML('beforeend',data_mod_id + ";");
        list_workshop_id.insertAdjacentHTML('beforeend', data_workshop_id + ";");
        if (data_map_folder != ""){
            list_map.insertAdjacentHTML('beforeend', data_map_folder + ";");
        }
    }

    let j = nb_lignes - "1";
    /* Variable contenant la derniere colone "Mod ID" */
    var data_mod_id = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[j].cells[1].textContent;
    list_mod_id.insertAdjacentHTML('beforeend',data_mod_id);

    /* Variable contenant la derniere colone "Workshop ID" */
    var data_workshop_id = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[j].cells[2].textContent;
    list_workshop_id.insertAdjacentHTML('beforeend', data_workshop_id);

    list_map.insertAdjacentHTML('beforeend', "Muldraugh, KY");
})

/* Copie le contenu de la ligne dans le press papier */
function copy(ligne){
    if (ligne == "list_mod_id"){
        var list_mod_id = document.getElementById("list_mod_id").innerHTML;
        // console.log("TEST copie 'Mods'")
        // console.log("Mods=" + list_mod_id)
        navigator.clipboard.writeText("Mods=" + list_mod_id);
    }

    if (ligne == "list_workshop_id"){
        var list_workshop_id = document.getElementById("list_workshop_id").innerHTML;
        // console.log("TEST copie 'WorkshopItems'")
        // console.log("WorkshopItems=" + list_workshop_id)
        navigator.clipboard.writeText("WorkshopItems=" + list_workshop_id);
    }

    if (ligne == "list_map"){
        var list_map = document.getElementById("list_map").innerHTML;
        // console.log("TEST copie 'Map'")
        // console.log("Map=" + list_map)
        navigator.clipboard.writeText("Map=" + list_map);
    }
}


/* Remplace les valeurs de la colone "N°" en ordre croissant */
function nb_reorder(){
    var nb_lignes = tableau.rows.length;
    for (let i = "1"; i < nb_lignes; i++) {
        all_cell_number = tableau.rows[i].firstElementChild;
        all_cell_number.innerHTML = i;
    }
}


function move(direction){
    var td = event.target.parentNode.parentNode;

    if (direction == "up"){
        var td_prev = td.previousElementSibling;
        // console.log(td_prev)
        // console.log(td)
    
        var temp = td.innerHTML;
        td.innerHTML = td_prev.innerHTML;
        td_prev.innerHTML = temp;
    }

    if (direction == "down"){
        var td_next = td.nextElementSibling;
        // console.log(td_next)
        // console.log(td)
    
        var temp = td.innerHTML;
        td.innerHTML = td_next.innerHTML;
        td_next.innerHTML = temp;
    }
    nb_reorder();
}


function supprimerLigne(num){
    /* Suprime la ligne target */
    let confirmation = confirm("Supprimer la ligne");
    if (confirmation){
        console.log("Supprimer");
        tableau.deleteRow(num);
        /* Mise a jour de la colone "Numero" */
        nb_reorder();
        
    }
    else{
        console.log("Annuler");
    }
};


/* Fonction "Sauvgarder" */
function download() {
    // var tableau_data = tableau.parentNode.innerHTML
    var tbody_data = table_body.innerHTML
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(tbody_data));
    element.setAttribute('download', 'table_save.html');
    element.style.display = 'none';
    element.click();
}


/* Fonction "importer" */
var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      table_body.insertAdjacentHTML("afterbegin", text);
    };
    reader.readAsText(input.files[0]);
    nb_reorder()
};

// window.addEventListener('scroll', function(e) {
//     console.log("test")
// })


