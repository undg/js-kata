/**
 * handValue.
 *
 * @param {string[]} hand
 */
export function handValue(hand = []) {
    return {
        royalFlush: false,
        straitFlush: false,
        four: false,
        full: false,
        flush: flush(hand),
        strait: false,
        three: false,
        pair: false,
        highCard: true,
    }
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function flush(hand = []) {
    console.log(hand.map((c) => c[0]))
    return hand.reduce((prev, card) => {
        if (prev === null) return { card, canBeFlush: true }

        if (prev.canBeFlush) return { card, canBeFlush: prev.card[1] === card[1] }

        return { card, canBeFlush: false }
    }, null).canBeFlush
}

/**
 * @param {string[]} hand
 * @return {boolean}
 */
function royalFlush(hand) {}
