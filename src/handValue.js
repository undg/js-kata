import { cardsValueArr, handsValueArr } from './constants'
import { checkHand, mapCards } from './checkHand'

/**
 * @param {string[]} hand
 */
export function handValue(hand) {
    const allOwnedHands = checkHand(hand)
    let bestHandName = ''
    for (const key in allOwnedHands) {
        bestHandName = key
        if (allOwnedHands[key] === true) break
    }
    const handValue = handsValueArr.indexOf(bestHandName)
    if (bestHandName === 'highCard') return handValue + allOwnedHands.highCard
    if (bestHandName === 'pair') return handValue + pairValue(hand)
    if (bestHandName === 'twoPairs') return handValue
    if (bestHandName === 'three') return handValue
    if (bestHandName === 'strait') return handValue
    if (bestHandName === 'flush') return handValue
    if (bestHandName === 'full') return handValue
    if (bestHandName === 'four') return handValue
    if (bestHandName === 'straitFlush') return handValue
    if (bestHandName === 'royalFlush') return handValue
}

function pairValue(hand) {
    const map = mapCards(hand)
    const card = Object.keys(map).find(key => map[key] === 2 )
    if (card.length !== 1)
        return 0

    const cardValue = cardsValueArr.indexOf(card) / 100
    return cardValue
}
