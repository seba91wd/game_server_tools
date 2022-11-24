const btn_css = document.getElementById("btn_css")
const div_test1 = document.getElementById("test1")
const div_test2 = document.getElementById("test2")


function modif_css(){
    console.log("test1")
    div_test1.className = "conf2";
    
    setTimeout(function(){
        div_test1.style.display = "none"
        div_test2.className = "conf1"
    }, 1000);
}
