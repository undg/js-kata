import { Result } from './constants'
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
        return Result.TIE
    }
    win() {
        return false
    }
    loose() {
        return false
    }
}
