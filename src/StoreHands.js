export default class StoreHands {
    set(hand) {
        if(this.hand1)
            this.hand2 = hand.toLowerCase()
        else
            this.hand1 = hand.toLowerCase()
    }

    get() {
        return this
    }

    clear() {
        this.hand1 = undefined
        this.hand2 = undefined
    }
}

