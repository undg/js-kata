import PokerHand, { Result } from './PokerHand.js'

describe('PokerHand', () => {
    describe('compareWith()', () => {
        describe('ties', () => {
            it(`same strings`, () => {
                const hand1 = new PokerHand('AC')
                const hand2 = new PokerHand('aC')

                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
            })
            it.skip(`changed order`, () => {
                const hand1 = new PokerHand('AC 4S 5S 8C AH')
                const hand2 = new PokerHand('4S 5S 8C AS AD')

                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
            })
            // it(` NOT ties`, () => {
            //     const hand1 = new PokerHand('AC 4C 5C 8C AC')
            //     const hand2 = new PokerHand('4S 5S 8C AS AD')

            //     expect(hand1.compareWith(hand2)).not.toBe(Result.TIE)
            // })
        })
    })
})
