import { describe, it, test, expect} from 'vitest'
import { fetchUser, getData } from './checkAuth'
import { parent } from './stores'


let globalUser = null

describe('fetchUser', () => {
    it('user is empty before', () => {
        let user = null
        parent.subscribe((val) => user = user)
        expect(user).toBeFalsy()
    })
    it.skip('user data is fetched from firebase', () => {
        let userName = fetchUser()
        expect(userName).toBeTypeOf('string')
    })
})

/*too hard
describe('getData', () => {

})

*/

describe('getData', () => {
    it('should return null if empty', () => {
        expect(getData()).toBeDefined()
    })
    getData('Atv3NtuZjBMSHQ51MM6etMcFznt1')

    it('globalUser should be set to obj', () => {
        parent.subscribe(val => globalUser = val)
        expect(globalUser).toBeDefined()
    })
})

describe('updatekid', () => {
    it('updates', () => {
        let user = null
        console.log('user is null')
        parent.subscribe(val => user = val)
        console.log(user)
    })
})