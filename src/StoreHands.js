export default class StoreHands {
    /**
     * @param {string} hand
     */
    set(hand) {
        if (this.hand1) this.hand2 = destruct(hand)
        else this.hand1 = destruct(hand)
    }

    /**
     * @return {{hand1: string[], hand2: string[]}}
     */
    get() {
        return this
    }

    clear() {
        this.hand1 = undefined
        this.hand2 = undefined
    }
}

/**
 * @param {string} hand
 * @return {string[]}
 */
export function destruct(hand) {
    return hand.split(' ').map((card) => card.toUpperCase())
}
