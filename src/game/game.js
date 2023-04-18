const VERTICAL_VALUES = [1, 4, 9]
const POSITIVE_VALUES = [2, 5, 8]
const NEGATIVE_VALUES = [3, 6, 7]

const X_MAX = 4
const Y_MAX = 8
const BOARD_SIZE = 19

const pieces = createPieces(VERTICAL_VALUES, POSITIVE_VALUES, NEGATIVE_VALUES)

var board = createBoard(X_MAX, Y_MAX);

var next_piece = {};

var main_score = 0;

function createBoard(x_max, y_max) {
    let board = []
    for (let x = 0; x <= x_max; x++) {
        let col = []
        for (let y = 0; y <= y_max; y++) {
            col.push({})
        }
        board.push(col)
    }
    return board;
}

function createPieces(v_values, p_values, n_values) {
    let pieces = []
    for (let v = 0; v < v_values.length; v++) {
        for (let p = 0; p < p_values.length; p++) {
            for (let n = 0; n < n_values.length; n++) {
                const piece = {
                    v: VERTICAL_VALUES[v],
                    p: POSITIVE_VALUES[p],
                    n: NEGATIVE_VALUES[n]
                }
                pieces.push(piece)
            }
        }
    }
    
    // pieces.splice(6,1)
    // pieces.splice(2,1)
    // pieces.splice(0,1)
    // pieces.splice(0,3)
    // pieces.splice(3,1)
    // pieces.splice(5,1)
    // console.log(pieces)
    return pieces;
}

var deck = Array.from(pieces)
// shuffle(deck)

while (deck.length > BOARD_SIZE) {
    deck.pop()
}

document.addEventListener("DOMContentLoaded", function (event) {
    showNewPiece()
});


function showNewPiece() {
    if (deck.length > 0) {
        let i = deck.length
        let pce = document.getElementById('pce' + i)
        let vpn = deck.pop()
        let recs = pce.getElementsByClassName('rec')
        recs[0].classList.add('v' + vpn.v)
        recs[0].innerHTML = vpn.v
        recs[1].classList.add('p' + vpn.p)
        recs[1].innerHTML = vpn.p
        recs[2].classList.add('n' + vpn.n)
        recs[2].innerHTML = vpn.n
        pce.classList.add('next-piece')
        pce.classList.remove('hidden')
        next_piece = vpn
    }
    else {
        document.querySelector('.next-piece-section').classList.add('hidden')
        showRestartButton()
    }
}

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function placeNextPiece(x, y) {
    let pce = document.querySelector('.next-piece')
    pce.classList.remove('next-piece')
    let pces = document.querySelector('.pieces')
    pces.append(pce)
    pce.classList.add(x, y)
    board[x[1]][y[1]] = next_piece
}

function updateScores() {
    let scores_placeholders = document.querySelectorAll('.score')
    let scores = []
    let hexs = document.querySelectorAll('.hex')
    let ps = []
    hexs.forEach(hex => {
        let classes = Array.from(hex.classList)
        let x = classes.find(value => /^x[0-9]/g.test(value))[1]
        let y = classes.find(value => /^y[0-9]/g.test(value))[1]
        ps.push([x, y])
    });

    scores.push(getScore([ps[0], ps[1], ps[2]], 'v'))
    scores.push(getScore([ps[3], ps[4], ps[5], ps[6]], 'v'))
    scores.push(getScore([ps[7], ps[8], ps[9], ps[10], ps[11]], 'v'))
    scores.push(getScore([ps[12], ps[13], ps[14], ps[15]], 'v'))
    scores.push(getScore([ps[16], ps[17], ps[18]], 'v'))

    scores.push(getScore([ps[2], ps[6], ps[11]], 'p'))
    scores.push(getScore([ps[1], ps[5], ps[10], ps[15]], 'p'))
    scores.push(getScore([ps[0], ps[4], ps[9], ps[14], ps[18]], 'p'))
    scores.push(getScore([ps[3], ps[8], ps[13], ps[17]], 'p'))
    scores.push(getScore([ps[7], ps[12], ps[16]], 'p'))

    scores.push(getScore([ps[11], ps[15], ps[18]], 'n'))
    scores.push(getScore([ps[6], ps[10], ps[14], ps[17]], 'n'))
    scores.push(getScore([ps[2], ps[5], ps[9], ps[13], ps[16]], 'n'))
    scores.push(getScore([ps[1], ps[4], ps[8], ps[12]], 'n'))
    scores.push(getScore([ps[0], ps[3], ps[7]], 'n'))

    let gradient = []

    for (let index = 0; index < scores_placeholders.length; index++) {
        let sp = scores_placeholders[index]
        let score = scores[index]
        sp.innerHTML = score
        if (score > 0) {
            let x = Array.from(sp.classList).find(value => /^x[0-9]/g.test(value))
            let y = Array.from(sp.classList).find(value => /^y[0-9]/g.test(value))
            let pce = document.querySelector('.pce.' + x + '.' + y)
            let dir = Array.from(sp.parentElement.classList).find(value => /^scores-[v,p,n]/g.test(value))[7]
            let rec = pce.querySelector('.rec' + dir)
            let color = Array.from(rec.classList).find(value => /^[v,p,n][0-9]/g.test(value))
            sp.classList.add(color)
            gradient.push({ 'color': color[1], 'score': score })
        }
    }
    // console.log(gradient)

    main_score = scores.reduce((a, b) => a + b, 0)
    document.querySelector('.score-total').innerHTML = main_score
}

function getScore(pieces, dir) {
    for (let index = 1; index < pieces.length; index++) {
        if (!comparePieces(pieces[0], pieces[index], dir)) {
            return 0
        }
    }
    return board[pieces[0][0]][pieces[0][1]][dir] * pieces.length
}

function comparePieces(p1, p2, dir) {
    if (board[p1[0]][p1[1]][dir] === undefined) {
        return false
    }
    else if (board[p2[0]][p2[1]][dir] === undefined) {
        return false
    }
    else if (board[p1[0]][p1[1]][dir] != board[p2[0]][p2[1]][dir]) {
        return false
    }
    else return true
}

function showRestartButton() {
    document.querySelector('.restart-button-section').classList.remove('hidden')
}

export default {
    methods: {
        select: function (event) {
            if (document.querySelector('.next-piece')) {
                document.querySelectorAll('.selected').forEach((element) => {
                    element.classList.remove('selected')
                })
                const item = event.target.parentElement
                if (item.classList.contains('selectable')) {
                    item.classList.add('selected')
                    item.classList.remove('selectable')
                    let x = item.classList[1]
                    let y = item.classList[2]
                    placeNextPiece(x, y)
                    updateScores()
                    showNewPiece()
                }
            }
        },
        restartGame: function () {
            this.$router.go()
        }
    }
}