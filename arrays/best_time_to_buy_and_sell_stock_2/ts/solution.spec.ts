import {maxProfit, maxProfit2} from "./solution";

type RemoveDuplicatesSuit = {
    name: string
    prices: number[]
    expRes: number
}

const suits: RemoveDuplicatesSuit[] = [
    {
        name: "[7,1,5,3,6,4]",
        prices: [7, 1, 5, 3, 6, 4],
        expRes: 7,
    },
    {
        name: "[1,2,3,4,5,6]",
        prices: [1, 2, 3, 4, 5, 6],
        expRes: 5,
    },
    {
        name: "[6,5,3,1]",
        prices: [6, 5, 3, 1],
        expRes: 0,
    },
]

describe('maxProfit', () => {
    suits.forEach(suit => {
        test(suit.name, () => {
            const res = maxProfit(suit.prices)
            expect(res).toEqual(suit.expRes);
        })
    })
})

describe('maxProfit2', () => {
    suits.forEach(suit => {
        test(suit.name, () => {
            const res = maxProfit2(suit.prices)
            expect(res).toEqual(suit.expRes);
        })
    })
})