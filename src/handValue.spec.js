import { handValue } from './handValue'
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
        expect(handValue(hands.four).pair).toBe(false)
        expect(handValue(hands.four).twoPairs).toBe(false)
        expect(handValue(hands.four).three).toBe(false)
        expect(handValue(hands.four).full).toBe(false)
        expect(handValue(hands.four).four).toBe(true)
    })

    it(`Full`, () => {
        expect(handValue(hands.full).pair).toBe(true)
        expect(handValue(hands.full).twoPairs).toBe(false)
        expect(handValue(hands.full).three).toBe(true)
        expect(handValue(hands.full).full).toBe(true)
        expect(handValue(hands.full).four).toBe(false)
    })

    it(`Three`, () => {
        expect(handValue(hands.three).pair).toBe(false)
        expect(handValue(hands.three).twoPairs).toBe(false)
        expect(handValue(hands.three).three).toBe(true)
        expect(handValue(hands.three).full).toBe(false)
        expect(handValue(hands.three).four).toBe(false)
    })

    it(`Two Pair's`, () => {
        expect(handValue(hands.twoPairs).pair).toBe(true)
        expect(handValue(hands.twoPairs).twoPairs).toBe(true)
        expect(handValue(hands.twoPairs).three).toBe(false)
        expect(handValue(hands.twoPairs).full).toBe(false)
        expect(handValue(hands.twoPairs).four).toBe(false)
    })

    it(`Pair`, () => {
        expect(handValue(hands.pair).pair).toBe(true)
        expect(handValue(hands.pair).twoPairs).toBe(false)
        expect(handValue(hands.pair).three).toBe(false)
        expect(handValue(hands.pair).full).toBe(false)
        expect(handValue(hands.pair).four).toBe(false)
    })

    it(`Royal flush`, () => {
        expect(handValue(hands.royalFlush).royalFlush).toBe(true)
        expect(handValue(hands.royalFlush).strait).toBe(true)
        expect(handValue(hands.royalFlush).flush).toBe(true)
        expect(handValue(hands.royalFlush).highCard).toBe(12)
    })

    it(`Strait flush`, () => {
        expect(handValue(hands.straitFlush).straitFlush).toBe(true)
        expect(handValue(hands.straitFlush).strait).toBe(true)
        expect(handValue(hands.straitFlush).flush).toBe(true)
        expect(handValue(hands.straitFlush).highCard).not.toBe(12)
    })

    it(`Strait`, () => {
        expect(handValue(hands.strait).strait).toBe(true)
        expect(handValue(hands.strait2).strait).toBe(true)
        expect(handValue(hands.strait3).strait).toBe(true)
    })

    it(`normal Flush`, () => {
        expect(handValue(hands.flush).flush).toBe(true)
        expect(handValue(hands.flush).royalFlush).toBe(false)
        expect(handValue(hands.flush).straitFlush).toBe(false)
        expect(handValue(hands.flush).full).toBe(false)
    })

    it('only highCard is true, all other hands should be false', () => {
        expect(handValue(hands.highCard).royalFlush).toBe(false)
        expect(handValue(hands.highCard).straitFlush).toBe(false)
        expect(handValue(hands.highCard).four).toBe(false)
        expect(handValue(hands.highCard).flush).toBe(false)
        expect(handValue(hands.highCard).strait).toBe(false)
        expect(handValue(hands.highCard).three).toBe(false)
        expect(handValue(hands.highCard).twoPairs).toBe(false)
        expect(handValue(hands.highCard).pair).toBe(false)
        expect(handValue(hands.highCard).highCard).toBe(12)
    })
})
