import { destruct } from './StoreHands'
import { handValue } from './handValue'

describe('handValue()', () => {
    const hands = {
        royalFlush: destruct('AC KC DC JC TC'),
        straitFlush: destruct('9C 8C DC JC TC'),
        four: destruct('8c 8d 8h kd 8s'),
        full: destruct('2c 2s 5c 5s 5d'),
        flush: destruct('AC 4C 5C 8C AC'),
        strait: destruct('3c 4s 5h 6d 7d'),
        three: destruct('9C 4S 9S 8C 9H'),
        twoPairs: destruct('AC 4S 4S 8C AH'),
        twoPairs2: destruct('dC 4S 4S 8C dH'),
        pair: destruct('kC 4S 5S 8C kH'),
        pair2: destruct('jC 4S 5S 8C jH'),
        highCard: destruct('7C 2H 5S 8C 9H'),
    }

    it('should return highest possible hand', () => {
        expect(handValue(hands.royalFlush)).toBe(0)
        expect(handValue(hands.straitFlush)).toBe(1.02)
        expect(handValue(hands.four)).toBe(2.06)
        expect(handValue(hands.full)).toBe(3.09)
        expect(handValue(hands.flush)).toBe(4)
        expect(handValue(hands.strait)).toBe(5.07)
        expect(handValue(hands.three)).toBe(6.05)
        expect(handValue(hands.twoPairs)).toBe(7)
        expect(handValue(hands.twoPairs2)).toBe(7.02)
        expect(handValue(hands.pair)).toBe(8.01)
        expect(handValue(hands.pair2)).toBe(8.03)
        expect(handValue(hands.highCard)).toBe(9 + 5)
    })
})
