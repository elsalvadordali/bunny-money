/**
 * nit -- Types and interfaces should always start with a Capital Letter
 * maintainability -- `uid` should be its own type alias
 * philosophy -- Your types definitions should just define the types
 */

type UUID = string

export type userType = {
  uid: UUID
  isParent: boolean
  kids: kidObj[]
}

/**
 * Is a kind of user
 *
 * This is markdown
 *
 * Use like this:
 * ```
 * UserKind.Kid
 * ```
 */
export enum UserKind {
  Kid = 'KID',
  /**
   * A parent type
   */
  Parent = 'PARENT',
}

export type KidObject = userType & {
  type: UserKind.Kid
}

export type ParentObject = userType & {
  type: UserKind.Parent
}

// Gives you ability to do this:
//if (someObject.type === UserKind.Parent) {
  // you know for sure this is a parent
//}


export type UserKidOrNull = userType | kidObj | null

export type kidObj = {
  uid: string
  kid: number
  dateOpened: number
  name: string
  isParent: false
  checkingAccount: checkingType
  savingsAccount: savingsType
  pending: transactionType[]
  lastAllowance?: string
  lastInterest?: string
} | null

export type transactionType = {
  date: string
  memo: string
  amount: number
  currentBalance?: number
  for?: string
}

export type checkingType = {
  balance: number
  allowance: number
  frequency: string
  transactions: transactionType[]
}
export type savingsType = {
  balance: number
  interest: number
  compounded: string
  transactions: transactionType[]
}
export type accountTypes = [checkingType?, savingsType?]
