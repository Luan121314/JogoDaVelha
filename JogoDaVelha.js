
class JogoDaVelha {
    constructor(player1, player2) {
        this.player1 = { name: player1, form: cross };
        this.player2 = { name: player2, form: circle };
        this.lastPlayer = '';
        this.squareSelecteds = [];
        this.squareSelectedsPlay1 = [];
        this.squareSelectedsPlay2 = [];
        this.winnerPlayer = { gameWinned: false, playerGameWinned: '' }

    }

    iniciar() {
        document.querySelectorAll('.shape div').forEach(item => {
            item.remove();
        })

        this.squareSelecteds = [];
        this.lastPlayer = '';
        
        this.squareSelectedsPlay1 = [];
        this.squareSelectedsPlay2 = [];
        this.winnerPlayer.gameWinned = false;
        this.winnerPlayer.playerGameWinned = ''
        
    }

    jogar(indiceSquareSelected, squareChildrenSelected, winner) {
        const {gameWinned} = this.winnerPlayer
        const allSquareSelecteds = this.squareSelecteds.includes(indiceSquareSelected);

        if (this.squareSelecteds.length > 8) {
            return
        }

        if (allSquareSelecteds ) return;
        if(gameWinned) return

        this.squareSelecteds.push(indiceSquareSelected);

        if (this.player1.name != this.lastPlayer) {
            this.lastPlayer = this.player1.name;
            squareChildrenSelected.innerHTML = this.player1.form;
            this.squareSelectedsPlay1.push(indiceSquareSelected);
            this.availableWinner(this.squareSelectedsPlay1, winner, (res) => {
                res ? this.winnerPlayer.playerGameWinned = this.player1.name : {}
                this.winnerPlayer.gameWinned = true
                console.log('player 1 vencedor')
                return
            })

        } else {
            this.lastPlayer = this.player2.name;
            squareChildrenSelected.innerHTML = this.player2.form
            this.squareSelectedsPlay2.push(indiceSquareSelected)
            this.availableWinner(this.squareSelectedsPlay2, winner, (res) => {
                res ? this.winnerPlayer.playerGameWinned = this.player2.name : {}
                this.winnerPlayer.gameWinned = true
                console.log('player 2 vencedor')
                return
            })

        }

    }

    availableWinner(array, callBack, setWinner) {

        const possiblesWinner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        possiblesWinner.map(e => {
            let res = e.map(x => array.find(shapeItem => shapeItem == x))
            if (res && res.length > 1 && !res.includes(undefined)) {
                setWinner(true)
                callBack(res)
            };
        })
    }

}