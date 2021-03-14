import { Result } from './constants'
import { handValue } from './handValue'
import Store from './StoreHands'
const store = new Store()

export default class PokerHand {
    constructor(hand) {
        store.set(hand)
        this.hands = store.get()
    }

    compareWith() {
        if (this.win()) return Result.WIN
        if (this.loose()) return Result.LOSS
        if (this.tie()) return Result.TIE
    }
    win() {
        return handValue(this.hands.hand1) < handValue(this.hands.hand2)
    }
    loose() {
        return handValue(this.hands.hand1) > handValue(this.hands.hand2)
    }
    tie() {
        return handValue(this.hands.hand1) === handValue(this.hands.hand2)
    }

    clear() {
        store.clear()
    }
}
