let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(event) {
    let itm = document.createElement("li");
    let delBtn = document.createElement("button");
    itm.innerHTML = inp.value;
    delBtn.innerText = "delete";
    delBtn.classList.add("delLt");
    itm.appendChild(delBtn);
    
    ul.appendChild(itm);
    inp.value ="";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let par = event.target.parentElement;
        par.remove();
    } 
});







// let Btns = document.querySelectorAll(".delLt");
// for(Btn of Btns) {
//     Btn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }