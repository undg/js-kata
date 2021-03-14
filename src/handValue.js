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
        highCard: true,
    }
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function strait(hand) {
    const onlyValues = hand.map((card) => cardsValueArr.indexOf(card[0]))
    console.log(onlyValues)
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
function royalFlush(hand) {
    return flush(hand)
}
/**
 * @param {string[]} hand
 * @return {boolean}
 */
function straitFlush(hand) {
    return flush(hand)
}
