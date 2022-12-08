let todata = document.getElementById("new");
let tonew  = document.getElementById("cost");
let tosrig = document.getElementById("data");

 todata.addEventListener(`click`,function () {
     var paragraph = document.createElement("p");
     paragraph.innerText = tosrig.value;
     paragraph.classList.add("paragraph-styling");
     tonew.appendChild(paragraph);
     tosrig.value = "";
     paragraph.addEventListener('click',function (){
        paragraph.style.textDecoration = "line-through";
     });
     paragraph.addEventListener('dblclick',function (){
        tonew.removeChild(paragraph);
     });
});








