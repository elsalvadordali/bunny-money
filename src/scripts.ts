import { Transaction } from 'firebase/firestore'
import type { kidObj, transactionType } from './types'

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
function convertString2Date(str: string): Date {
  return new Date(str)
}
export function calcAllowance(kid: kidObj) {
  let last = kid.checkingAccount.transactions.find(transaction => {
    if (transaction.memo == 'allowance') return transaction
  })
  if (last) {
    let previousAllowance = convertString2Date(last.date).valueOf()
    let incrementBy =
      howManyDaysIn(kid.checkingAccount.frequency) * 24 * 60 * 60 * 1000
    while (previousAllowance + incrementBy < new Date().valueOf()) {
      previousAllowance += incrementBy
      let transaction: transactionType = {
        amount: kid.checkingAccount.allowance,
        currentBalance:
          kid.checkingAccount.allowance + kid.checkingAccount.balance,
        date: convertDate2String(new Date()),
        memo: 'allowance',
      }
      kid.checkingAccount.transactions = [
        transaction,
        ...kid.checkingAccount.transactions,
      ]
    }
  } else {
    //this is first allowance ever
  }
  return kid.checkingAccount.transactions
}

export function calcAllowanceOLD(
  transactions: transactionType[],
  frequency: string,
  amount: number,
  currentBalance: number
) {
  let last = transactions.find(transaction => {
    if (transaction.memo == 'allowance') return transaction
  })
  let allowances: transactionType[] = []
  if (last) {
    let previousAllowance = convertString2Date(last.date).valueOf()
    let incrementBy = howManyDaysIn(frequency) * 24 * 60 * 60 * 1000
    while (previousAllowance + incrementBy < new Date().valueOf()) {
      previousAllowance += incrementBy
      let transaction = {
        amount,
        currentBalance: 0,
        date: convertDate2String(new Date()),
        memo: 'allowance',
      }
      allowances = [transaction, ...allowances]
    }
    transactions = [...allowances, ...transactions]
  } else {
    //THIS IS FIRST ALLOWANCE!! just give one time today
    let transaction: transactionType = {
      amount,
      currentBalance: currentBalance + amount,
      date: convertDate2String(new Date()),
      memo: 'allowance',
    }
    transactions = [transaction, ...transactions]
  }
  return transactions
}

function calcDaysBetween(today: number, previous: number) {
  let a = today / 1000 / 60 / 60 / 24
  let b = previous / 1000 / 60 / 60 / 24
  return Math.floor(a - b)
}

function howManyDaysIn(str: string): number {
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
