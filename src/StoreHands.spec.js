import StoreHands, { destruct } from './StoreHands'

describe('StoreHands() to later comparision', () => {
    describe('set any case and get lower case', () => {
        const store = new StoreHands()

        store.set('h1 zA')
        store.set('H2 xw yq')

        it('get() hand1 (array of card objects)', () => {
            expect(store.get().hand1[0]).toBe('H1')

            expect(store.get().hand1[1]).toBe('ZA')
        })
        it('get() hand2 (array of card objects)', () => {
            expect(store.get().hand2[0]).toBe('H2')

            expect(store.get().hand2[1]).toBe('XW')

            expect(store.get().hand2[2]).toBe('YQ')
        })
        it('clear() for cleaning', () => {
            store.clear()
            expect(store.get().hand1).toEqual(undefined)
            expect(store.get().hand2).toEqual(undefined)
        })
    })

    describe('destruct() string into array of objects', () => {
        const hand = 'AC 4S'
        const out = ['AC', '4S']
        it('should return array of cards', () => {
            expect(destruct(hand)).toEqual(out)
        })
    })
})
