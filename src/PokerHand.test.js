import PokerHand from './PokerHand.js'
import { Result } from './constants'

describe('PokerHand', () => {
    describe('compareWith()', () => {
        describe('ties', () => {
            it(`same strings`, () => {
                const hand1 = new PokerHand('AC')
                const hand2 = new PokerHand('aC')

                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
            })
            it(`changed order`, () => {
                const hand1 = new PokerHand('AC 4S 5S 8C AH')
                const hand2 = new PokerHand('4S 5S 8C AS AD')

                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
            })
        })
    })
})
