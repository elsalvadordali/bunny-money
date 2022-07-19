import { describe, it, expect} from 'vitest'
import { calcAllowance, calcInterest, convertDate2String, convertString2Date, howManyDaysIn, reconcileArr, verifyAmount } from './scripts'

let kids = [
    {
        name: "Stacey",
        value: 1
    },
    {
        name: "Tom",
        value: 2
    }
]
let updateKid = {
    name: "Tom",
    value: 100
}
let kid = {
    uid: '505',
    kid: 5,
    name: 'Test Kid',
    isParent: false,
    checkingAccount: {
        balance: 50.53,
        allowance: 1,
        frequency: 'day',
        transactions: [      
            {
                date: '5/5/2022',
                memo: 'allowance',
                amount: 1,
                currentBalance: 50.53 + 1,
            },
            {
                date: '4/5/2022',
                memo: 'for eating dinner',
                amount: 2.33,
                currentBalance: 50.53 - 2.33,
            },
            {
                date: '4/4/2022',
                memo: 'for being the best',
                amount: 32.89,
                currentBalance: 50.53,
            }
        ]
    },
    savingsAccount: {
        balance: 623.15,
        interest: .57,
        compounded: 'month',
        transactions: [
            {
                date: '6/4/2022',
                memo: 'interest',
                amount: 3.45,
                currentBalance: 623.15
            },{
                date: '5/16/2022',
                memo: 'interest',
                amount: 3.45,
                currentBalance: 623.15 - 3.45
            }
            
        ]
    }
}

let kidNoTransactions = {
    uid: '505',
    kid: 5,
    name: 'Test Kid',
    isParent: false,
    checkingAccount: {
        balance: 50.53,
        allowance: 1,
        frequency: 'day',
        transactions: []
    },
    savingsAccount: {
        balance: 3.15,
        interest: .57,
        compounded: 'month',
        transactions: []
    }
}
describe('verifyAmount(string)', () => {
    it('returns 0 for empty inputs', () => {
        expect(verifyAmount('')).toBe(false)
    })
})

describe('convertDate2String(Date)', () => {
    it('expects date in string format', () => {
        expect(convertDate2String(new Date())).toBeTypeOf('string')
    })

})

describe('calcAllowance(kid)', () => {
    it('creates an allowance today if no previous ones found', () => {
        const checkingAccount = calcAllowance(kidNoTransactions)
            expect(checkingAccount.length).toStrictEqual(1)

        })
    it('allowance increase currentBalance', () => {
        let currentBalance = kid.checkingAccount.balance
        let updated = calcAllowance(kid)
        expect(updated[0].currentBalance).toBeGreaterThan(currentBalance)
    })
})

describe('convertString2Date', () => {
    it('checks if string makes date', () => {
        expect(convertString2Date('7/7/2022')).toBeTypeOf("object")
    })
})

describe('calcInterest', () => {
    it('add first interest payment if none', () => {
        const brokeKid = calcInterest(kidNoTransactions)
        expect(brokeKid.length).toBe(1)
    })
 
    it('adds interest if interest period lapsed', () => {
        const regularKid = calcInterest(kid)
        expect(regularKid[0].currentBalance).toBeDefined()
    })
describe('howManyDaysIn()', () => {
    it('a month has 30 days', () => {
        expect(howManyDaysIn('month')).toEqual(30)
    })
    it('a day has 1 days', () => {
        expect(howManyDaysIn('day')).toEqual(1)
    })
    it('a week has 7 days', () => {
        expect(howManyDaysIn('week')).toEqual(7)
    })
    it('a year has 365', () => {
        expect(howManyDaysIn('year')).toEqual(365)
    })
})
describe('reconcileArr()', () => {
    it('replaces a child in an array', () => {
        let newArr = reconcileArr(kids, updateKid)
        expect(newArr[1].value).toEqual(100) 
    })
    it('returns the array if kid is undefined', () => {
        let newKids = reconcileArr(kids, undefined)
        expect(newKids[1].value).toEqual(2)
    })
})
})
