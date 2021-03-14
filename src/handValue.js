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
        four: false,
        full: false,
        flush: flush(hand),
        strait: strait(hand),
        three: false,
        twoPairs: false,
        pair: false,
        highCard: highCard(hand),
    }
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function royalFlush(hand) {
    return straitFlush(hand)
}
/**
 * @param {string[]} hand
 * @return {boolean}
 */
function straitFlush(hand) {
    // console.log(hand, flush(hand), strait(hand))
    return flush(hand) && strait(hand)
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
function highCard(hand) {
    const highCardIdx = getSortedValues(hand).splice(-1)[0]
    return highCardIdx
}


/**
 * helper function
 * @param {string[]} hand
 * @return {number[]}
 */
const getSortedValues = hand => hand.map((card) => cardsValueArr.indexOf(card[0])).sort((a, b) => a - b)
