const icon_minus = document.getElementsByClassName("minus");
const icon_plus = document.getElementsByClassName("plus");
const h2 = document.getElementsByTagName("h2");

function deploy() {
 if (this.className != "h2") {
    this.setAttribute("hidden","true");
 }
 else {
    this.addEventListener("click",shrink);

 }
    parent = this.parentElement;
    childrens = parent.children;
    child_1 = childrens[1];
    child_2 = childrens[2];
    child_3 = childrens[3];
    child_1.setAttribute("hidden","true");
    child_2.removeAttribute("hidden");
    child_3.removeAttribute("hidden");
   
}
function shrink() {
    if (this.className != "h2") {
        this.setAttribute("hidden","true");
    }
    else {
        this.removeEventListener("click",shrink)
        this.addEventListener("click",deploy)
    }
    parent = this.parentElement;
    childrens = parent.children;
    child_1 = childrens[1];
    child_2 = childrens[2];
    child_3 = childrens[3];
    child_1.removeAttribute("hidden");
    child_2.setAttribute("hidden","true");
    child_3.setAttribute("hidden","true");
   
}
for (var i = 0 ;i < icon_plus.length; i++ ) {
    icon_plus[i].addEventListener("click",deploy); 
    icon_minus[i].addEventListener("click",shrink);
    h2[i].addEventListener("click",deploy);
}




    









    