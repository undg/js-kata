import { cardsValueArr } from './constants'
/**
 * handValue.
 *
 * @param {string[]} hand
 */
export function handValue(hand = []) {
    return {
        royalFlush: royalFlush(hand),
        straitFlush: straitFlush(hand),
        four: four(hand),
        full: full(hand),
        flush: flush(hand),
        strait: strait(hand),
        three: three(hand),
        twoPairs: twoPairs(hand),
        pair: pair(hand),
        highCard: highCard(hand),
    }
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function royalFlush(hand) {
    return straitFlush(hand) && highCard(hand) === cardsValueArr.length - 1
}
/**
 * @param {string[]} hand
 * @return {boolean}
 */
function straitFlush(hand) {
    return flush(hand) && strait(hand)
}

/**
 * @param {string[]} hand
 * @return {number}
 */
function four(hand) {
    const counts = countSameValues(hand)
    const haveThree = !(counts.indexOf(4) === -1)
    return haveThree
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function full(hand) {
    return pair(hand) && three(hand)
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function flush(hand = []) {
    return hand.reduce(
        (prev, card) => {
            if (prev.card === null) return { card, canBeFlush: true }
            if (prev.canBeFlush) return { card, canBeFlush: prev.card[1] === card[1] }
            return { card, canBeFlush: false }
        },
        { card: null, canBeFlush: true }
    ).canBeFlush
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function strait(hand) {
    const onlyValues = getSortedValues(hand)
    return onlyValues.reduce(
        (prev, card) => {
            if (prev.card === null) return { card, canBeStrait: true }
            if (prev.canBeStrait) return { card, canBeStrait: prev.card + 1 === card }
            return { card, canBeStrait: false }
        },
        { card: null, canBeStrait: true }
    ).canBeStrait
}

/**
 * @param {string[]} hand
 * @return {number}
 */
function three(hand) {
    const counts = countSameValues(hand)
    const haveThree = !(counts.indexOf(3) === -1)
    return haveThree
}

/**
 * @param {string[]} hand
 * @return {number}
 */
function twoPairs(hand) {
    const counts = countSameValues(hand)
    const havePairs = counts.filter((cnt) => cnt == 2).length
    return havePairs === 2
}

/**
 * @param {string[]} hand
 * @return {number}
 */
function pair(hand) {
    const counts = countSameValues(hand)
    const havePair = !(counts.indexOf(2) === -1)
    return havePair
}

/**
 * @param {string[]} hand
 * @return {number}
 */
function highCard(hand) {
    const highCardIdx = getSortedValues(hand).splice(-1)[0]
    return highCardIdx
}

/**
 * helper function
 * @param {string[]} hand
 * @return {number[]}
 */
const getSortedValues = (hand) => hand.map((card) => cardsValueArr.indexOf(card[0])).sort((a, b) => a - b)

/**
 * helper function
 * @param {any[]} arr
 * @return {any[]}
 */
const getUniqValues = (arr) => arr.filter((val, idx, self) => self.indexOf(val) === idx)

/**
 * helper function
 * @param {string[]} hand
 * @return {number[]}
 */
const countSameValues = (hand) => {
    const map = hand.reduce((obj, card) => {
        obj[card[0]] = ++obj[card[0]] || 1
        return obj
    }, {})
    const counted = Object.keys(map).map((key) => map[key])
    return counted
}
