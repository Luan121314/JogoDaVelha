const cross = `<div class="cross-righ"></div>
<div class="cross-left"></div>`

const circle = `<div class="circle"></div>`

const possiblesWinner = {
    horizonal: [
        [0, 1, 2],
        [3, 2, 5],
        [6, 7, 8]
    ],
    vertical: [
        [0, 3, 6],
        [1, 4, 5],
        [6, 7, 8]
    ],
    tilted:[
        [0, 4, 8],
        [6, 4, 2]
    ]
}