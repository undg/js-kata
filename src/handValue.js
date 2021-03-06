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
    if (bestHandName === 'twoPairs') return handValue + twoPairsValue(hand)
    if (bestHandName === 'three') return handValue + threeValue(hand)
    if (bestHandName === 'strait') return handValue + anyHighCardValue(hand)
    if (bestHandName === 'flush') return handValue + anyHighCardValue(hand)
    if (bestHandName === 'full') return handValue + anyHighCardValue(hand)
    if (bestHandName === 'four') return handValue + fourValue(hand)
    if (bestHandName === 'straitFlush') return handValue + anyHighCardValue(hand)
    if (bestHandName === 'royalFlush') return handValue
}

/**
 * @param {string[]} hand
 * @return {number} float 0.0x
 */
function anyHighCardValue(hand) {
    const cardValue = checkHand(hand).highCard / 100
    return cardValue
}

/**
 * @param {string[]} hand
 * @return {number} float 0.0x
 */
function fourValue(hand) {
    const map = mapCards(hand)
    const card = Object.keys(map).find((key) => map[key] === 4)

    if (card.length !== 1) return 0

    const cardValue = cardsValueArr.indexOf(card) / 100
    return cardValue
}

/**
 * @param {string[]} hand
 * @return {number} float 0.0x
 */
function threeValue(hand) {
    const map = mapCards(hand)
    const card = Object.keys(map).find((key) => map[key] === 3)

    if (card.length !== 1) return 0

    const cardValue = cardsValueArr.indexOf(card) / 100
    return cardValue
}

/**
 * @param {string[]} hand
 * @return {number} float 0.0x
 */
function twoPairsValue(hand) {
    const map = mapCards(hand)
    const card = Object.keys(map).filter((key) => map[key] === 2)

    if (card.length !== 2) return 0

    const betterPairValue =
        card
            .map((card) => cardsValueArr.indexOf(card))
            .sort((a, b) => b - a)
            .splice(-1)[0] / 100
    return betterPairValue
}

/**
 * @param {string[]} hand
 * @return {number} float 0.0x
 */
function pairValue(hand) {
    const map = mapCards(hand)
    const card = Object.keys(map).find((key) => map[key] === 2)

    if (card.length !== 1) return 0

    const cardValue = cardsValueArr.indexOf(card) / 100
    return cardValue
}
