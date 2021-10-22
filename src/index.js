import { Result } from "./constants";
import PokerHand from "./PokerHand";

// @example
function printResoult(hand1Str, hand2Str) {
    const hand1 = new PokerHand(hand1Str);
    const hand2 = new PokerHand(hand2Str);

    switch (hand1.compareWith(hand2)) {
        case Result.WIN:
            console.log("hand1 WIN");
            break;
        case Result.LOSS:
            console.log("hand2 WIN");
            break;
        case Result.TIE:
            console.log("TIE");
            break;
        default:
            console.error("Unexpected error");
    }

    hand1.clear();
    hand2.clear();
}

console.group("Game one");
printResoult("AC aS aS 8C AH", "4S 5S 8C AS AD");
console.groupEnd();

console.group("Game two");
printResoult("4S 5S 8C AS AD", "AC aS aS 8C AH");
console.groupEnd();

console.group("Game Three");
printResoult("4S 5S 8C AS AD", "4S 5S 8C AS AD");
console.groupEnd();
