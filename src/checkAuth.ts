import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { parent } from './stores'
import type { kidObj, userType } from './types'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBbUgt1Qe6dQAaKzAa9gKM2gM-oIbUZK88',
  authDomain: 'bunnymoney-fdebe.firebaseapp.com',
  projectId: 'bunnymoney-fdebe',
  storageBucket: 'bunnymoney-fdebe.appspot.com',
  messagingSenderId: '562120247125',
  appId: '1:562120247125:web:4ba0ce2a53d198789d51dc',
}

let app = null
if (app == null) app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore()
const accountRef = collection(db, 'account')

export function fetchUser() {
  onAuthStateChanged(auth, async authUser => {
    if (authUser) {
      let name = localStorage.getItem('name')
      await getData(authUser.uid, name)
    }
  })
}
export async function getData(uid: string, name: string | null) {
  const parRef = doc(db, 'parents', uid)
  let data = await getDoc(parRef)
  let parsedData = data.data()
  if (name) {
    if (parsedData) {
      const kid = parsedData.kids.find((kid: kidObj) => {
        if (kid && name && kid.name.toLowerCase() == name.toLowerCase())
          return kid
      })
      parent.set({ ...kid, uid })
    } //is kid but failed to fetch???
  } else if (parsedData) {
    // is parent, has data
    parent.set({ ...parsedData, uid })
  } else {
    //new user, create Data
    let user = {
      isParent: true,
      kids: [],
      uid,
    }
    setDoc(parRef, user)
  }
}

export async function deleteKid(newArray: kidObj[], uid: string) {
  const parRef = doc(db, 'parents', uid)
  let res = await updateDoc(parRef, { kids: newArray })
  let data = await getDoc(parRef)
  parent.updateKids(newArray)
}

export async function updateParent(user) {
  if (user) {
    const parRef = doc(db, 'parents', user.uid)
    await updateDoc(parRef, user)
    return true
  }
  return false
}
export async function updateKid(kid: kidObj) {
  const parRef = doc(db, 'parents', kid.uid)
  let data = await getDoc(parRef)
  let parsed = data.data()
  let kids: kidObj[]

  if (parsed) {
    let kidArr = parsed.kids.map(one => {
      if (one.kid == kid.kid) return kid
      else return one
    })
    parsed.kids = kidArr
    updateDoc(parRef, parsed)
    //parent.set(parsed)
  } else return 1
  return 0
}
export async function updateKidBAD(
  kid: kidObj,
  uid: string,
  message: string = 'Success'
) {
  const parRef = doc(db, 'parents', uid)
  let kids: kidObj[] = []
  if (!kids) {
    let data = await getDoc(parRef)
    let parsedData = data.data()
    if (parsedData) {
      kids = parsedData.kids.map((arrKid: kidObj) => {
        if (arrKid && kid && arrKid.name == kid.name) return kid
        else return arrKid
      })
    }
  } else {
    kids = kids.map((arrKid: kidObj) => {
      if (arrKid && kid && arrKid.name == kid.name) return kid
      else return arrKid
    })
  }
  await updateDoc(parRef, { kids })
  return message
}
