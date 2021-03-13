import StoreHands, { destruct } from './StoreHands'

describe('StoreHands() to later comparision', () => {
    describe('set any case and get lower case', () => {
        const store = new StoreHands()


        store.set('h1 zA')
        store.set('H2 :w :q')

        it('get() hand1 (array of card objects)', () => {
            expect(store.get().hand1[0].card).toBe('h')
            expect(store.get().hand1[0].color).toBe('1')

            expect(store.get().hand1[1].card).toBe('z')
            expect(store.get().hand1[1].color).toBe('a')
        })
        it('get() hand2 (array of card objects)', () => {
            expect(store.get().hand2[0].card).toBe('h')
            expect(store.get().hand2[0].color).toBe('2')

            expect(store.get().hand2[1].card).toBe(':')
            expect(store.get().hand2[1].color).toBe('w')

            expect(store.get().hand2[2].card).toBe(':')
            expect(store.get().hand2[2].color).toBe('q')
        })
        it('clear() for cleaning', () => {
            store.clear()
            expect(store.get().hand1).toEqual([])
            expect(store.get().hand2).toEqual([])
        })
    })

    describe('destruct() string into array of objects', () => {
        const hand = 'AC 4S'
        const out = [
            { card: 'a', color: 'c' },
            { card: '4', color: 's' },
        ]
        it('should return array of cards', () => {
            expect(destruct(hand)).toEqual(out)
        })
    })
})
