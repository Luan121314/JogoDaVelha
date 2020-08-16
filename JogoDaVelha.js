
class JogoDaVelha {
    constructor(player1, player2) {
        this.player1 = { name: player1, form: cross };
        this.player2 = { name: player2, form: circle };
        this.gameInfo = { lastPlayer: '', currentPLayer: '' };
        this.squareSelecteds = [];
        
    }

    iniciar() {
        this.squareSelecteds = [];
        document.querySelectorAll('.shape div').forEach(item => {
            item.remove()
        })
        this.gameInfo = { lastPlayer: '', currentPLayer: '' };
    }

    jogar(indiceSquareSelected, squareChildrenSelected) {

        if (this.squareSelecteds.includes(indiceSquareSelected)) {
            console.log('Quadro ja selecionado')
            return
        }

        if (this.squareSelecteds.length > 8) {
            console.log('Alguem ganhou')
            return
        }

        this.squareSelecteds.push(indiceSquareSelected);

        if (this.player1.name != this.gameInfo.lastPlayer) {
            squareChildrenSelected.innerHTML = this.player1.form
            this.gameInfo.lastPlayer = this.player1.name;


        } else {
            this.gameInfo.currentPLayer = this.player2.name;
            squareChildrenSelected.innerHTML = this.player2.form
            this.gameInfo.lastPlayer = this.player2.name;


        }

    }
}