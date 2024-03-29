import { updateKid } from './checkAuth';
import type { kidObj, transactionType } from './types'
import { parent } from './stores'

export function verifyAmount(str: string): number | false {
  let regex = /([0-9]+\.?[0-9]{0,2})/
  let res = str.match(regex)
  if (res && res[0] && typeof res[0] == 'string') return parseFloat(res[0])
  return false
}
export function convertDate2String(date: Date): string {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return `${month}/${day}/${year}`
}
export function convertString2Date(str: string): Date {
  return new Date(str)
}
export function calcAllowance(kid: kidObj) {
  console.log(kid)
  let incrementBy = howManyDaysIn(kid.checkingAccount.frequency) * 24 * 60 * 60 * 1000
  console.log(incrementBy, new Date().valueOf(), kid.dateOpened, kid.dateOpened.valueOf())
  if (new Date().valueOf() - kid.dateOpened < incrementBy) return
  console.log(" time to calculate")
  let last = kid.checkingAccount.transactions.find(transaction => {
    if (transaction.memo == 'allowance') return transaction
  })
  if (last) {
    let previousAllowance = convertString2Date(last.date).valueOf()
    while (previousAllowance + incrementBy < new Date().valueOf()) {
      previousAllowance += incrementBy
      kid.checkingAccount.balance += kid.checkingAccount.allowance
      let transaction: transactionType = {
        amount: kid.checkingAccount.allowance,
        currentBalance: kid.checkingAccount.balance,
        date: convertDate2String(new Date(previousAllowance)),
        memo: 'allowance',
      }
      kid.checkingAccount.transactions = [
        transaction,
        ...kid.checkingAccount.transactions,
      ]
    }
  } else {
    kid.checkingAccount.balance += kid.checkingAccount.allowance
    let newTransaction: transactionType = {
      amount: kid.checkingAccount.allowance,
      currentBalance: kid.checkingAccount.balance,
      date: convertDate2String(new Date()),
      memo: 'allowance',
    }
    console.log(newTransaction)
    kid.checkingAccount.transactions = [newTransaction, ...kid.checkingAccount.transactions]
    updateKid(kid)
    parent.updateKid(kid)
  }
  return kid.checkingAccount.transactions
}
export function calcInterest(kid: kidObj) {
  let incrementBy = howManyDaysIn(kid.savingsAccount.compounded) * 24 * 60 * 60 * 1000
  if (new Date().valueOf() - kid.dateOpened < incrementBy) return
  let last = kid.savingsAccount.transactions.find(transaction => {
    if (transaction.memo == 'interest') return transaction
  })
  if (last) {
    let previous = convertString2Date(last.date).valueOf()
    if (previous + incrementBy < new Date().valueOf()) {
      while (previous + incrementBy < new Date().valueOf()) {
        previous += incrementBy
        kid.savingsAccount.balance += kid.savingsAccount.balance * (kid.savingsAccount.interest / 100)    
        let newTransaction: transactionType = {
          amount: kid.savingsAccount.interest,
          currentBalance: kid.savingsAccount.balance,
          date: convertDate2String(new Date()),
          memo: 'interest'
        }
        kid.savingsAccount.transactions = [newTransaction, ...kid.savingsAccount.transactions]
      }
    updateKid(kid)
    parent.updateKid(kid)
    }
  } else {
    kid.savingsAccount.balance += kid.savingsAccount.balance * (kid.savingsAccount.interest / 100)
    let newTransaction: transactionType = {
      amount: kid.savingsAccount.interest,
      currentBalance: kid.savingsAccount.balance,
      date: convertDate2String(new Date()),
      memo: 'interest'
    }
    kid.savingsAccount.transactions = [newTransaction, ...kid.savingsAccount.transactions]
    updateKid(kid)
    parent.updateKid(kid)

  }
  return kid.savingsAccount.transactions
}
export function howManyDaysIn(str: string): number {
  if (str == 'day') return 1
  if (str == 'week') return 7
  if (str == 'month') return 30
  return 365
}
export function reconcileArr(arr: kidObj[], obj: kidObj) {
  return arr.map(arrKid => {
    if (obj && arrKid && arrKid.name == obj.name) return obj
    return arrKid
  })
}
