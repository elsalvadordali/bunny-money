import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
import { parent } from './stores'
import type { kidObj } from './types'

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

export function fetchUser() {
  onAuthStateChanged(auth, async authUser => {
    let name = null
    if (authUser) {
      name = localStorage.getItem('name') || null;
      await getData(authUser.uid, name)
    }  
    return name
  })
}
export async function getData(uid: string, name: string | null) {
  if (uid == undefined && name == undefined) return null
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
  return name ? parsedData : name
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
/**
 * 
 * @param kid 
 * sends updated kid object to firebase, and returns a Promise of 1 if error, 0 if good
 */
export async function updateKid(kid: kidObj): Promise<Number> {
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
  } else return Promise.resolve(1)
  return Promise.resolve(0)
}