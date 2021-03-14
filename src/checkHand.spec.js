import { checkHand } from './checkHand'
import { destruct } from './StoreHands'

describe('HandValue() evaluate hand rate', () => {
    const hands = {
        royalFlush: destruct('AC KC DC JC TC'), // 👍
        straitFlush: destruct('9C 8C DC JC TC'), // 👍
        four: destruct('8c 8d 8h kd 8s'), // 👍
        full: destruct('2c 2s 5c 5s 5d'), // 👍
        flush: destruct('AC 4C 5C 8C AC'), // 👍
        strait: destruct('3c 4s 5h 6d 7d'), // 👍
        strait2: destruct('7c td 8s 9h jd'), // 👍
        strait3: destruct('9d 8C Ds Jh TC'), // 👍
        three: destruct('AC 4S AS 8C AH'), // 👍
        twoPairs: destruct('AC 4S 4S 8C AH'), // 👍
        pair: destruct('AC 4S 5S 8C AH'), // 👍
        highCard: destruct('7C 2H 5S 8C AH'), // 👍
    }

    it(`Four`, () => {
        expect(checkHand(hands.four).pair).toBe(false)
        expect(checkHand(hands.four).twoPairs).toBe(false)
        expect(checkHand(hands.four).three).toBe(false)
        expect(checkHand(hands.four).full).toBe(false)
        expect(checkHand(hands.four).four).toBe(true)
    })

    it(`Full`, () => {
        expect(checkHand(hands.full).pair).toBe(true)
        expect(checkHand(hands.full).twoPairs).toBe(false)
        expect(checkHand(hands.full).three).toBe(true)
        expect(checkHand(hands.full).full).toBe(true)
        expect(checkHand(hands.full).four).toBe(false)
    })

    it(`Three`, () => {
        expect(checkHand(hands.three).pair).toBe(false)
        expect(checkHand(hands.three).twoPairs).toBe(false)
        expect(checkHand(hands.three).three).toBe(true)
        expect(checkHand(hands.three).full).toBe(false)
        expect(checkHand(hands.three).four).toBe(false)
    })

    it(`Two Pair's`, () => {
        expect(checkHand(hands.twoPairs).pair).toBe(true)
        expect(checkHand(hands.twoPairs).twoPairs).toBe(true)
        expect(checkHand(hands.twoPairs).three).toBe(false)
        expect(checkHand(hands.twoPairs).full).toBe(false)
        expect(checkHand(hands.twoPairs).four).toBe(false)
    })

    it(`Pair`, () => {
        expect(checkHand(hands.pair).pair).toBe(true)
        expect(checkHand(hands.pair).twoPairs).toBe(false)
        expect(checkHand(hands.pair).three).toBe(false)
        expect(checkHand(hands.pair).full).toBe(false)
        expect(checkHand(hands.pair).four).toBe(false)
    })

    it(`Royal flush`, () => {
        expect(checkHand(hands.royalFlush).royalFlush).toBe(true)
        expect(checkHand(hands.royalFlush).strait).toBe(true)
        expect(checkHand(hands.royalFlush).flush).toBe(true)
        expect(checkHand(hands.royalFlush).highCard).toBe(0)
    })

    it(`Strait flush`, () => {
        expect(checkHand(hands.straitFlush).straitFlush).toBe(true)
        expect(checkHand(hands.straitFlush).strait).toBe(true)
        expect(checkHand(hands.straitFlush).flush).toBe(true)
        expect(checkHand(hands.straitFlush).highCard).not.toBe(0)
    })

    it(`Strait`, () => {
        expect(checkHand(hands.strait).strait).toBe(true)
        expect(checkHand(hands.strait2).strait).toBe(true)
        expect(checkHand(hands.strait3).strait).toBe(true)
    })

    it(`normal Flush`, () => {
        expect(checkHand(hands.flush).flush).toBe(true)
        expect(checkHand(hands.flush).royalFlush).toBe(false)
        expect(checkHand(hands.flush).straitFlush).toBe(false)
        expect(checkHand(hands.flush).full).toBe(false)
    })

    it('only highCard is true, all other hands should be false', () => {
        expect(checkHand(hands.highCard).royalFlush).toBe(false)
        expect(checkHand(hands.highCard).straitFlush).toBe(false)
        expect(checkHand(hands.highCard).four).toBe(false)
        expect(checkHand(hands.highCard).flush).toBe(false)
        expect(checkHand(hands.highCard).strait).toBe(false)
        expect(checkHand(hands.highCard).three).toBe(false)
        expect(checkHand(hands.highCard).twoPairs).toBe(false)
        expect(checkHand(hands.highCard).pair).toBe(false)
        expect(checkHand(hands.highCard).highCard).toBe(0)
    })
})
