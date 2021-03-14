import { handValue } from './handValue'
import {destruct} from './StoreHands'

describe('HandValue() evaluate hand rate', () => {
    const hands = {
        flush: destruct('AC 4C 5C 8C AC'),
        royalFlush:destruct('AC KC DC JC TC'),

        twoPairOfTwos: destruct('2C 2H'),
        pairOfAce: destruct('AC 4S 5S 8C AH'),
        highCard: destruct('7C 2H 5S 8C AH'),
    }
    it('only highCard is true, all other hands should be false', () => {
        expect(handValue(hands.highCard)).toEqual({
            royalFlush: false,
            straitFlush: false,
            four: false,
            full: false,
            flush: false,
            strait: false,
            three: false,
            pair: false,
            highCard: true,
        })
    });
    it(`Flush`, () => {
        expect(handValue(hands.flush).flush).toBe(true)
        // expect(handValue(hands.royalFlush).royalFlush).toBe(true)
        // expect(handValue(hands.fullHouse).fullHouse).toBe(false)
    })
})

