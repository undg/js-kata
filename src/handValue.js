import { handsValueArr } from './constants'
import { checkHand } from './checkHand'

/**
 * @param {string[]} hand
 */
export function handValue(hand) {
    const allOwnedHands = checkHand(hand)
    let bestHandName = ''
    for(const key in allOwnedHands) {
        bestHandName = key
        if(allOwnedHands[key] === true)
            break
    }

    if(bestHandName === 'highCard')
        return handsValueArr.indexOf(bestHandName) + allOwnedHands.highCard

    return handsValueArr.indexOf(bestHandName)
}
