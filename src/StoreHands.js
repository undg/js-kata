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
     * @return Card[]
     */
    get() {
        return this
    }

    /**
     * clear.
     */
    clear() {
        this.hand1 = undefined
        this.hand2 = undefined
    }
}

/**
 * destructure.
 *
 * @param {string} hand
 */
export function destruct(hand) {
    return hand.split(' ').map(card => card.toLowerCase())
}
