const VERTICAL_VALUES = [2, 4]
const POSITIVE_VALUES = [1, 5]
const NEGATIVE_VALUES = [3, 6]

const X_MAX = 4
const Y_MAX = 8
const BOARD_SIZE = 7
// const SCORES = [{dir:'v1',hex:[[1,5],[1,3]]},{dir:'v2',hex:[[2,6],[2,4],[2,2]]},{dir:'v3',hex:[[3,5],[3,1]]},
// {dir:'p1',hex:[[1,5],[2,6]]}]

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
    //(pieces.splice(0,1)) //TODO delete this line
    return pieces;
}

var deck = Array.from(pieces)
shuffle(deck)

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
        recs[1].classList.add('p' + vpn.p)
        recs[2].classList.add('n' + vpn.n)
        pce.classList.add('next-piece')
        pce.classList.remove('hidden')
        next_piece = vpn
    }
    else {
        document.querySelector('.next-piece-section').classList.add('hidden')
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
    pce.classList.add(x, y)
    board[x[1]][y[1]] = next_piece
}

function updateScores() {
    let scores_placeholders = document.querySelectorAll('.score')
    let scores = []
    let p1 = [1, 5]
    let p2 = [1, 3]
    let p3 = [2, 6]
    let p4 = [2, 4]
    let p5 = [2, 2]
    let p6 = [3, 5]
    let p7 = [3, 3]
    scores.push(getScore([p1, p2], 'v'))
    scores.push(getScore([p3, p4, p5], 'v'))
    scores.push(getScore([p6, p7], 'v'))
    scores.push(getScore([p1, p3], 'p'))
    scores.push(getScore([p2, p4, p6], 'p'))
    scores.push(getScore([p5, p7], 'p'))
    scores.push(getScore([p3, p6], 'n'))
    scores.push(getScore([p1, p4, p7], 'n'))
    scores.push(getScore([p2, p5], 'n'))
    console.log(scores)
    for (let index = 0; index < scores_placeholders.length; index++) {
        scores_placeholders[index].innerHTML = scores[index]
    }
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
    }
}