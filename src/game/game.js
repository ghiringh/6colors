const VERTICAL_VALUES = [2, 4]
const POSITIVE_VALUES = [1, 5]
const NEGATIVE_VALUES = [2, 4]

const BOARD_SIZE = 7

const pieces = []

for (let v = 0; v < VERTICAL_VALUES.length; v++) {
    for (let p = 0; p < POSITIVE_VALUES.length; p++) {
        for (let n = 0; n < NEGATIVE_VALUES.length; n++) {
            const piece = {
                v: VERTICAL_VALUES[v],
                p: POSITIVE_VALUES[p],
                n: NEGATIVE_VALUES[n]
            }
            pieces.push(piece)
        }
    }
}

const deck = []

for (let index = 0; index < BOARD_SIZE; index++) {
    
}

export default {
    methods: {
        select: function (event) {
            document.querySelectorAll('.selected').forEach((element) => {
                element.classList.remove('selected')
            })
            const item = event.target.parentElement
            item.classList.add('selected')
        },
    }
}