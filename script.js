let divs = document.querySelectorAll(".linhas div")
console.log(divs);
let quem = 0
   
for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener("click", function(){
        seleciona(i);
    });
}
function seleciona(indice){
    let antiDuplicidade;
    // for(let i = 0; divs.length; i++){
    //     if(indice ==)
    // }
    divs[indice].style.backgroundColor = "blue";

    console.log(indice);
   
}