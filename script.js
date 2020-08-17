let btnNewGame = $('#btnNewGame')
let squares = document.querySelectorAll(".painting");
let squareChildrens = [];
const jogo = new JogoDaVelha("benedito", "Joarez")

btnNewGame.click(() => {
    jogo.iniciar()
    squares.forEach(item => item.classList.remove('winnerColor'))
})
squares.forEach(squareItem => {
    squareChildrens = [...squareChildrens, squareItem.firstElementChild]
})


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        jogo.jogar(i, squareChildrens[i], (res) => {
            res.map(item => {
                squares[item].classList.add('winnerColor')
            })
        });
    });
}


let cont = 0;

setInterval(() => {
    document.querySelector('body').style.backgroundImage = `linear-gradient(${cont}deg, rgb(204, 204, 204), rgb(150, 150, 150))`
    cont++;
}, 120)

