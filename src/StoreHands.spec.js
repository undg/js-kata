import StoreHands from './StoreHands'

describe('StoreHands', () => {
    describe('set any case and get lower case', () => {
        const store = new StoreHands()
        store.set('h1')
        store.set('H2')
        it('store', () => {
            expect(store.get().hand1).toBe('h1')
            expect(store.get().hand2).toBe('h2')
        });
        it('clear', () => {
            store.clear()
            expect(store.get().hand1).toBe(undefined)
            expect(store.get().hand2).toBe(undefined)
        });
    });
});
