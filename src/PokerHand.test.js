import PokerHand from './PokerHand.js'
import { Result } from './constants'

describe('PokerHand', () => {
    describe('compareWith()', () => {
        describe('Win', () => {
            it(`simple win, different hands`, () => {
                const hand1 = new PokerHand('AC aS aS 8C AH')
                const hand2 = new PokerHand('4S 5S 8C AS AD')
                expect(hand1.compareWith(hand2)).toBe(Result.WIN)
                hand1.clear()
                hand2.clear()
            })
            it(`high card`, () => {
                const hand1 = new PokerHand('dC 2S 3S 8C kH')
                const hand2 = new PokerHand('4S 5S 8C tS 2D')
                expect(hand1.compareWith(hand2)).toBe(Result.WIN)
                hand1.clear()
                hand2.clear()
            })
            it(`two pairs vs pair`, () => {
                const hand1 = new PokerHand('dC dS 3S 3C kH')
                const hand2 = new PokerHand('4S 4S 8C tS 2D')
                expect(hand1.compareWith(hand2)).toBe(Result.WIN)
                hand1.clear()
                hand2.clear()
            })
            it(`pair vs pair`, () => {
                const hand1 = new PokerHand('dd dd 3S 9C kH')
                const hand2 = new PokerHand('5d 5d 8C dS 2D')
                expect(hand1.compareWith(hand2)).toBe(Result.WIN)
                hand1.clear()
                hand2.clear()
            })
            it(`three vs three`, () => {
                const hand1 = new PokerHand('dd dc dS 9C kH')
                const hand2 = new PokerHand('5d 5s 5C dS 2D')
                expect(hand1.compareWith(hand2)).toBe(Result.WIN)
                hand1.clear()
                hand2.clear()
            })
        })

        describe('Loose', () => {
            it(`simple loos, different hands`, () => {
                const hand1 = new PokerHand('4S 5S 8C AS AD')
                const hand2 = new PokerHand('AC aS aS 8C AH')
                expect(hand1.compareWith(hand2)).toBe(Result.LOSS)
                hand1.clear()
                hand2.clear()
            })
        })

        describe('ties', () => {
            it(`same strings`, () => {
                const hand1 = new PokerHand('AC ac')
                const hand2 = new PokerHand('aC ac')
                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
                hand1.clear()
                hand2.clear()
            })
            it(`changed order`, () => {
                const hand1 = new PokerHand('AC 4S 5S 8C AH')
                const hand2 = new PokerHand('4S 5S 8C AS AD')
                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
                hand1.clear()
                hand2.clear()
            })
            it(`same straits`, () => {
                const hand1 = new PokerHand('2C 3S 4S 5C 6H')
                const hand2 = new PokerHand('2s 3c 4c 5d 6s')
                expect(hand1.compareWith(hand2)).toBe(Result.TIE)
                hand1.clear()
                hand2.clear()
            })
        })
    })
})
