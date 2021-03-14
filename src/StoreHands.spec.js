import StoreHands, { destruct } from './StoreHands'

describe('StoreHands() to later comparision', () => {
    describe('set any case and get lower case', () => {
        const store = new StoreHands()

        store.set('h1 zA')
        store.set('H2 xw yq')

        it('get() hand1 (array of card objects)', () => {
            expect(store.get().hand1[0]).toBe('h1')

            expect(store.get().hand1[1]).toBe('za')
        })
        it('get() hand2 (array of card objects)', () => {
            expect(store.get().hand2[0]).toBe('h2')

            expect(store.get().hand2[1]).toBe('xw')

            expect(store.get().hand2[2]).toBe('yq')
        })
        it('clear() for cleaning', () => {
            store.clear()
            expect(store.get().hand1).toEqual(undefined)
            expect(store.get().hand2).toEqual(undefined)
        })
    })

    describe('destruct() string into array of objects', () => {
        const hand = 'AC 4S'
        const out = ['ac', '4s']
        it('should return array of cards', () => {
            expect(destruct(hand)).toEqual(out)
        })
    })
})
