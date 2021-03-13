/**
 * StoreHands.
 */
export default class StoreHands {
    /**
     * set hand's.
     *
     * @param {string} hand
     */
    set(hand) {
        if (this.hand1) this.hand2 = destruct(hand)
        else this.hand1 = destruct(hand)
    }

    /**
     * get.
     * @return Array {card, color}
     */
    get() {
        // const hand1 = this.hand1 ?? []
        // const hand2 = this.hand1 ?? []
        // return { hand1, hand2 }
        return this
    }

    /**
     * clear.
     */
    clear() {
        this.hand1 = []
        this.hand2 = []
    }
}

/**
 * destructure.
 *
 * @param {} hand
 */
export function destruct(hand) {
    return hand.split(' ').map((cardStr) => ({ card: cardStr[0].toLowerCase(), color: cardStr[1].toLowerCase() }))
}
