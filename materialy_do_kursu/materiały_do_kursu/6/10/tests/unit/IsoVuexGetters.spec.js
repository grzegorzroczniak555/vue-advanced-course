import { expect } from 'chai'
import getters from '@/store/getters.js'

const users = [
    { id: 1, name: 'Zerq12', isAdmin: false },
    { id: 2, name: 'Arek18', isAdmin: false },
    { id: 3, name: 'Owner664', isAdmin: true },
    { id: 4, name: 'Zenek90', isAdmin: true },
    { id: 5, name: 'ZebraZebra', isAdmin: false }
];

const state = { users };

describe("getters", () => {
    it("returns not admins", () => {
        
    })
    it("returns admins", () => {
        
    })
    it("returns not admins that matches 'Ze'", () => {
        
    })
})