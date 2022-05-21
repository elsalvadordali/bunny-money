import { writable } from 'svelte/store'
import type { userType, kidObj } from './types'

function createParent() {
  const { subscribe, set, update } = writable(null)
  return {
    subscribe,
    set: (user: userType) => set(user),
    setEmail: (user: userType) => set(user),
    updateKids: (kids: kidObj[]) => {
      update((val: userType) => {
        return { ...val, kids }
      })
    },
    updateKid: (kid: kidObj) => {
      update((user: userType) => {
        if (user) {
          let kids =
            user &&
            user.kids.map((arrKid: kidObj) => {
              if (kid && arrKid && arrKid.name == kid.name) return kid
              else return arrKid
            })
          return { ...user, kids }
        }
        return null
      })
    },
    addKid: (kid: kidObj) =>
      update(user => {
        if (user) {
          let kids = user.kids
          kids.push(kid)
          return { ...user, kids }
        }
      }),
  }
}
export const parent = createParent()

export const options = ['day', 'week', 'month', 'year']
