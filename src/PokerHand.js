import Store from './StoreHands'
const store = new Store()

export class PokerHand {
    constructor(hand) {
        store.set(hand)
        this.hands = store.get()
    }

    compareWith() {
        const hand1 = this.hands.hand1
        const hand2 = this.hands.hand2
        const isTie = this.isTie({hand1, hand2})

        if(isTie)
            return Result.TIE
    }
    isTie({hand1, hand2}) {
        return hand1 === hand2
    }
}

export const Result = {
    WIN: 1,
    LOSS: 2,
    TIE: 3,
}

export default PokerHand


