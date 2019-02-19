let blocoDoJogo = document.querySelectorAll("div");
console.log(blocoDoJogo);

for(let i =0; i < blocoDoJogo.length;i++){

    
}


document.querySelectorAll("div").addEventListener("click", function seleciona(){
    console.log("Ta na função");
    document.getElementById("div").innerHTML = "Paragraph changed!";
});

document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
  });